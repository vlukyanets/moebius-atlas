import { parseFile, type ParsedFile } from './loadTopics';
import type { L10n } from '../i18n';

/**
 * Views - the top-level tabs ("A–Z", "Prerequisite path") - are authored as
 * `src/views/<lang>/<id>.md`. The English file carries `kind` and `order`;
 * translations carry the localized title. Adding a tab is a pair of files.
 */
export interface ViewDef {
  id: string;
  kind: 'az' | 'path';
  /** Tab label. */
  name: L10n;
}

const VIEW_RAW = import.meta.glob('../views/*/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const KINDS = new Set(['az', 'path']);

function loadViews(): ViewDef[] {
  const byId: Record<string, Record<string, ParsedFile>> = {};
  for (const [path, src] of Object.entries(VIEW_RAW)) {
    const segs = path.split('/');
    const id = segs.pop()!.replace(/\.md$/, '');
    const lang = segs.pop()!;
    (byId[id] ??= {})[lang] = parseFile(src, path);
  }
  const views: ViewDef[] = [];
  for (const [id, langs] of Object.entries(byId)) {
    const en = langs.en;
    if (!en) throw new Error(`views: "${id}" has translations but no canonical views/en/${id}.md`);
    const kind = en.meta.kind as ViewDef['kind'];
    if (!KINDS.has(kind)) throw new Error(`views/en/${id}.md: kind must be az|path`);
    const name: Record<string, string> = {};
    for (const [lang, f] of Object.entries(langs)) name[lang] = f.title;
    views.push({ id, kind, name: name as L10n });
  }
  views.sort(
    (a, b) =>
      ((byId[a.id].en.meta.order as number) ?? 99) - ((byId[b.id].en.meta.order as number) ?? 99),
  );
  return views;
}

export const VIEWS: ViewDef[] = loadViews();

export const DEFAULT_VIEW = VIEWS[0].id;

export const viewById = (id: string): ViewDef | undefined => VIEWS.find((v) => v.id === id);
