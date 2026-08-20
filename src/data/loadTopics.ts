/**
 * Loads topic content at build time - one file per topic per language:
 * `src/content/<lang>/<id>.md`.
 *
 * The `en/` file is canonical and required: its frontmatter carries the
 * topic metadata plus the English title. Translation files (e.g.
 * `content/uk/triangle-angle-sum.md`) carry only their localized `title`;
 * any topic metadata they declare is ignored.
 *
 *   content/en/triangle-angle-sum.md
 *   ---
 *   title: Triangle Angle Sum
 *   tag: THM
 *   track: school
 *   grade: 8
 *   year: -300
 *   requires: [parallel-properties, triangle-definition]
 *   ---
 *
 *   The three interior angles always add up to 180°…
 *
 *   $$\alpha + \beta + \gamma = 180^\circ$$
 *
 * The body below the frontmatter is full Markdown, rendered on the detail
 * page with KaTeX support ($…$ inline, $$…$$ display). The id is the file name.
 *
 * Only the frontmatter is read here. It arrives as `virtual:atlas-meta` from
 * the `atlas-content` plugin in `vite.config.ts`, because the index, the search
 * and the path view need the metadata of every topic on first paint, while the
 * bodies - two thirds of the content - are fetched per language by `bodies.ts`
 * when a topic page actually opens.
 */
import META from 'virtual:atlas-meta';
import type { Resource, SubjectId, TagId, TopicMap, TrackId } from './types';
import type { L10n } from '../i18n';

export interface ParsedFile {
  meta: Record<string, unknown>;
  title: string;
  body: string;
  resources?: Resource[];
}

function parseAll(raw: Record<string, Record<string, string>>): Record<string, Record<string, ParsedFile>> {
  const byId: Record<string, Record<string, ParsedFile>> = {};
  for (const [id, langs] of Object.entries(raw)) {
    for (const [lang, src] of Object.entries(langs))
      (byId[id] ??= {})[lang] = parseFile(src, `content/${lang}/${id}.md`);
    if (!byId[id].en)
      throw new Error(`content: "${id}" has translations but no canonical content/en/${id}.md`);
  }
  return byId;
}

export function loadTopics(): TopicMap {
  const out: TopicMap = {};
  for (const [id, langs] of Object.entries(parseAll(META))) {
    const meta = langs.en.meta;
    const name: Record<string, string> = {};
    const resources: Record<string, Resource[]> = {};
    for (const [lang, f] of Object.entries(langs)) {
      name[lang] = f.title;
      if (f.resources?.length) resources[lang] = f.resources;
    }
    out[id] = {
      name: name as L10n,
      tag: meta.tag as TagId | undefined,
      track: resolveTrack(meta.track, id),
      grade: meta.grade as number | undefined,
      subject: (meta.subject as SubjectId | undefined) ?? 'geometry',
      year: meta.year as number | undefined,
      requires: meta.requires as string[] | undefined,
      resources: Object.keys(resources).length ? resources : undefined,
    };
  }
  return out;
}

/** Kept in sync with `TrackId`; importing TRACKS here would be circular. */
const TRACK_IDS = new Set<string>(['school', 'olympiad', 'advanced', 'other']);

/**
 * A missing or unknown track lands the topic in `other` - the atlas still
 * loads, and the console names the file so the gap is easy to spot.
 */
function resolveTrack(value: unknown, id: string): TrackId {
  if (typeof value === 'string' && TRACK_IDS.has(value)) return value as TrackId;
  console.warn(
    `content/en/${id}.md: "track" should be one of ${[...TRACK_IDS].join('|')}, got "${value ?? ''}" - falling back to "other"`,
  );
  return 'other';
}

const LIST_KEYS = new Set(['requires']);
const NUM_KEYS = new Set(['year', 'grade', 'order']);

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
