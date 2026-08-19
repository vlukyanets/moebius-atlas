/**
 * Loads topic content at build time - one file per topic per language:
 * `src/content/<lang>/<id>.md`.
 *
 * The `en/` file is canonical and required: its frontmatter carries the
 * graph metadata plus the English title. Translation files (e.g.
 * `content/uk/triangle-angle-sum.md`) carry only their localized `title`;
 * any graph metadata they declare is ignored.
 *
 *   content/en/triangle-angle-sum.md
 *   ---
 *   title: Triangle Angle Sum
 *   tag: THM
 *   year: -300
 *   difficulty: 2
 *   requires: [parallel-properties, triangle-definition]
 *   ---
 *
 *   The three interior angles always add up to 180°…
 *
 *   $$\alpha + \beta + \gamma = 180^\circ$$
 *
 * The body below the frontmatter is full Markdown, rendered on the detail
 * page with KaTeX support ($…$ inline, $$…$$ display). The first plain
 * paragraph doubles as the short summary. The id is the file name.
 */
import type { Resource, TagId, TopicMap, TrackId } from './types';
import type { L10n } from '../i18n';

const TOPIC_RAW = import.meta.glob('../content/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export interface ParsedFile {
  meta: Record<string, unknown>;
  title: string;
  body: string;
  resources?: Resource[];
}

function groupByIdLang(raw: Record<string, string>): Record<string, Record<string, ParsedFile>> {
  const byId: Record<string, Record<string, ParsedFile>> = {};
  for (const [path, src] of Object.entries(raw)) {
    const segs = path.split('/');
    const id = segs.pop()!.replace(/\.md$/, '');
    const lang = segs.pop()!;
    (byId[id] ??= {})[lang] = parseFile(src, path);
  }
  for (const id of Object.keys(byId)) {
    if (!byId[id].en)
      throw new Error(`content: "${id}" has translations but no canonical content/en/${id}.md`);
  }
  return byId;
}

export function loadTopics(): TopicMap {
  const out: TopicMap = {};
  for (const [id, langs] of Object.entries(groupByIdLang(TOPIC_RAW))) {
    const meta = langs.en.meta;
    const name: Record<string, string> = {};
    const body: Record<string, string> = {};
    const summary: Record<string, string> = {};
    const resources: Record<string, Resource[]> = {};
    for (const [lang, f] of Object.entries(langs)) {
      name[lang] = f.title;
      body[lang] = f.body;
      summary[lang] = excerpt(f.body);
      if (f.resources?.length) resources[lang] = f.resources;
    }
    out[id] = {
      name: name as L10n,
      summary: summary as L10n,
      body: body as L10n,
      tag: meta.tag as TagId | undefined,
      track: (meta.track as TrackId | undefined) ?? 'school',
      difficulty: meta.difficulty as number | undefined,
      year: meta.year as number | undefined,
      requires: meta.requires as string[] | undefined,
      resources: Object.keys(resources).length ? resources : undefined,
    };
  }
  return out;
}

const LIST_KEYS = new Set(['requires']);
const NUM_KEYS = new Set(['year', 'difficulty', 'order']);

/** Shared frontmatter+body parser - also used for the view files in `src/views/`. */
export function parseFile(src: string, path: string): ParsedFile {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(src.trim());
  if (!m) throw new Error(`${path}: missing frontmatter block`);
  const meta: Record<string, unknown> = {};
  for (const rawLine of m[1].split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    const colon = line.indexOf(':');
    if (colon < 0) throw new Error(`${path}: bad frontmatter line "${line}"`);
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();
    if (key === 'resources') {
      // Markdown-link list: resources: [Khan Academy](https://…), [GeoGebra](https://…)
      meta.resources = [...value.matchAll(/\[([^\]]+)\]\(([^)\s]+)\)/g)].map((r) => ({
        label: r[1],
        url: r[2],
      }));
    } else if (LIST_KEYS.has(key)) {
      meta[key] = value.replace(/^\[|\]$/g, '').split(',').map((s) => s.trim()).filter(Boolean);
    } else if (NUM_KEYS.has(key)) {
      const n = Number(value);
      if (Number.isNaN(n)) throw new Error(`${path}: bad number for ${key}: "${value}"`);
      meta[key] = n;
    } else {
      // title, tag - literal strings; surrounding quotes optional
      // (needed when the value itself contains a colon).
      meta[key] = /^(["']).*\1$/.test(value) ? value.slice(1, -1) : value;
    }
  }
  if (typeof meta.title !== 'string' || !meta.title) throw new Error(`${path}: missing "title" in frontmatter`);
  return { meta, title: meta.title, body: m[2].trim(), resources: meta.resources as Resource[] | undefined };
}

/** First plain paragraph of a Markdown body, stripped for summary use. */
function excerpt(md: string): string {
  const block = md
    .split(/\r?\n\s*\r?\n/)
    .map((s) => s.trim())
    .find((b) => b && !b.startsWith('$$') && !b.startsWith('#') && !b.startsWith('|'));
  return (block ?? '')
    .replace(/\$\$[\s\S]*?\$\$/g, '')
    .replace(/\$([^$]+)\$/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
