/**
 * Everything derived from the `requires` relation: the topic index, the reverse
 * index ("leads to"), search, prerequisite levels for the path view together
 * with the ordering and the edges the tree layout draws, and the label helpers
 * built on the static tables in `topics.ts`.
 */
import { SUBJECTS, TAGS, TOPICS, TRACKS } from './topics';
import type { SubjectId, SubjectInfo, TagInfo, TopicSeed, TrackId, TrackInfo } from './types';
import { UI, tr, type Lang } from '../i18n';

/** All topics by id. */
export const N: Record<string, TopicSeed> = TOPICS;

/** reverse `requires` index: topic -> topics that list it as a prerequisite. */
const dependentsOf: Record<string, string[]> = {};
for (const id of Object.keys(N)) {
  for (const p of N[id].requires ?? []) (dependentsOf[p] ??= []).push(id);
}

export const tagOf = (id: string): TagInfo | null => {
  const t = N[id];
  return t?.tag ? TAGS[t.tag] : null;
};

export const subjectIdOf = (id: string): SubjectId => N[id]?.subject ?? 'geometry';

export const subjectOf = (id: string): SubjectInfo => SUBJECTS[subjectIdOf(id)];

export const trackIdOf = (id: string): TrackId => N[id].track;

export const trackOf = (id: string): TrackInfo => TRACKS[trackIdOf(id)];

export const topicName = (id: string, lang: Lang): string => tr(N[id].name, lang);

export function dependents(id: string): string[] {
  return dependentsOf[id] ?? [];
}

/**
 * Every prerequisite of `id`, transitively - the whole chain the topic rests
 * on, itself excluded. Memoized: the progress checkboxes ask for this on every
 * render, and the answer only changes when the content does. The `seen` guard
 * keeps a hand-authored cycle from hanging the page.
 */
const ancestorsOf: Record<string, string[]> = {};

export function ancestors(id: string): string[] {
  const cached = ancestorsOf[id];
  if (cached) return cached;
  const seen = new Set<string>();
  const walk = (cur: string) => {
    for (const p of N[cur]?.requires ?? []) {
      if (!N[p] || seen.has(p)) continue;
      seen.add(p);
      walk(p);
    }
  };
  walk(id);
  return (ancestorsOf[id] = [...seen]);
}

/**
 * Name-substring search over topics, max 12 results.
 * Matches against every translation so users can type in either language.
 */
export function search(query: string): string[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return Object.keys(N)
    .filter((id) => Object.values(N[id].name).some((v) => v.toLowerCase().includes(q)))
    .slice(0, 12);
}

/** Topics eligible as a prerequisite-path target: tagged and with prereqs. */
export function pathTargets(lang: Lang): string[] {
  return Object.keys(N)
    .filter((id) => (N[id].requires ?? []).length > 0 && tagOf(id))
    .sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang));
}

/**
 * Prerequisite levels for `target`: level 0 is the target, level k+1 holds
 * the prerequisites of level k. A topic needed on several levels sinks to
 * its deepest one, so every card depends only on cards above it. The
 * ancestor set guards against cycles.
 */
export function prereqLevels(target: string): string[][] {
  const depthOf: Record<string, number> = {};
  const assign = (id: string, d: number, anc: Set<string>) => {
    if (anc.has(id) || !N[id]) return;
    if (depthOf[id] === undefined || d > depthOf[id]) depthOf[id] = d;
    const next = new Set(anc);
    next.add(id);
    for (const p of N[id].requires ?? []) assign(p, d + 1, next);
  };
  assign(target, 0, new Set());
  const maxD = Math.max(...Object.values(depthOf));
  const levels: string[][] = Array.from({ length: maxD + 1 }, () => []);
  for (const id of Object.keys(depthOf)) levels[depthOf[id]].push(id);
  return levels;
}

/** A topic card in a level. */
export interface TreeSlot {
  id: string;
  /** Centre of the card, measured from the centre of its level. */
  x: number;
}

/**
 * One `requires` edge the tree draws: a straight line from a port on the top
 * edge of the prerequisite into a port on the bottom edge of the topic that
 * needs it. Only neighbouring levels are joined - an edge whose ends sit
 * further apart is left undrawn rather than routed across the levels in
 * between, which is why `TopicDetail` stays the place that lists every
 * prerequisite of a topic.
 */
export interface TreeEdge {
  from: string;
  to: string;
  /** Level of the prerequisite; what it points at is one level above. */
  row: number;
  fromX: number;
  toX: number;
}

export interface TreeLayout {
  rows: TreeSlot[][];
  edges: TreeEdge[];
  /** Width of the widest level; every level is centred inside it. */
  width: number;
}

/**
 * Lay the levels out for the tree view: order each level, then hand every edge
 * the two points it is drawn between.
 *
 * The order comes from barycenter sweeps, down and back up a few times: down
 * puts a card at the average position of what sits above it, up at the average
 * of what sits below. Both directions are needed - a single downward pass
 * leaves the deep levels wherever alphabetical order first put them. Ties go
 * to `key`, the display name, so the result is stable for a language.
 *
 * The lines then get their own attachment points: the edges of one card are
 * spread evenly along it and ordered by where their other end sits, so two
 * arrows never arrive at the same spot and never cross right at the card.
 *
 * `size` carries the card width and the gap, so the caller keeps the pixels
 * and this keeps the arithmetic. Positions come back relative to the centre of
 * each level, which makes centring a level a single addition.
 */
export function treeLayout(
  levels: string[][],
  key: (id: string) => string,
  size: { node: number; gap: number },
): TreeLayout {
  interface Slot extends TreeSlot {
    row: number;
  }
  const depth: Record<string, number> = {};
  levels.forEach((ids, row) => ids.forEach((id) => (depth[id] = row)));

  const rows: Slot[][] = levels.map((ids, row) => ids.map((id) => ({ id, x: 0, row })));
  const card = new Map<string, Slot>();
  rows.forEach((row) => row.forEach((s) => card.set(s.id, s)));

  const links: { from: Slot; to: Slot }[] = [];
  const above = new Map<Slot, Slot[]>();
  const below = new Map<Slot, Slot[]>();
  for (const ids of levels) {
    for (const to of ids) {
      for (const from of N[to].requires ?? []) {
        if (depth[from] !== depth[to] + 1) continue;
        const lower = card.get(from)!;
        const upper = card.get(to)!;
        links.push({ from: lower, to: upper });
        above.set(lower, [...(above.get(lower) ?? []), upper]);
        below.set(upper, [...(below.get(upper) ?? []), lower]);
      }
    }
  }

  /** Where the neighbours on one side sit - or where the card already is, so a
   *  card with nothing on that side stays put instead of collapsing to zero. */
  const bary = (s: Slot, side: Map<Slot, Slot[]>): number => {
    const near = side.get(s) ?? [];
    return near.length ? near.reduce((sum, o) => sum + o.x, 0) / near.length : s.x;
  };
  const place = (row: Slot[]): number => {
    const total = row.length * size.node + size.gap * (row.length - 1);
    row.forEach((s, i) => (s.x = -total / 2 + i * (size.node + size.gap) + size.node / 2));
    return total;
  };
  const sweep = (row: Slot[], side: Map<Slot, Slot[]>): void => {
    // Array.prototype.sort is stable, so equal barycenters keep the order the
    // previous sweep left behind.
    row.sort((a, b) => bary(a, side) - bary(b, side) || key(a.id).localeCompare(key(b.id)));
    place(row);
  };

  rows.forEach(place);
  // Four sweeps is where the crossings stop dropping on this content; the
  // widest level in the atlas holds nine cards, so the cost never shows.
  for (let pass = 0; pass < 4; pass++) {
    if (pass % 2 === 0) for (let r = 1; r < rows.length; r++) sweep(rows[r], above);
    else for (let r = rows.length - 2; r >= 1; r--) sweep(rows[r], below);
  }
  const width = rows.reduce((max, row) => Math.max(max, place(row)), 0);

  /** The card's own edge, cut into evenly spaced ports, one per neighbour. */
  const ports = (owner: Slot, side: Map<Slot, Slot[]>): Map<Slot, number> => {
    const near = [...(side.get(owner) ?? [])].sort((a, b) => a.x - b.x);
    const at = new Map<Slot, number>();
    near.forEach((o, i) =>
      at.set(o, owner.x - size.node / 2 + (size.node * (i + 1)) / (near.length + 1)),
    );
    return at;
  };
  const top = new Map<Slot, Map<Slot, number>>();
  const bottom = new Map<Slot, Map<Slot, number>>();

  return {
    rows,
    width,
    edges: links.map(({ from, to }) => {
      if (!top.has(from)) top.set(from, ports(from, above));
      if (!bottom.has(to)) bottom.set(to, ports(to, below));
      return {
        from: from.id,
        to: to.id,
        row: from.row,
        fromX: top.get(from)!.get(to)!,
        toX: bottom.get(to)!.get(from)!,
      };
    }),
  };
}

/** "Grade 8" in English, "8 клас" in Ukrainian. */
export const formatGrade = (g: number, lang: Lang): string =>
  lang === 'uk' ? `${g} ${tr(UI.grade, lang)}` : `${tr(UI.grade, lang)} ${g}`;

export const formatYear = (y: number, lang: Lang, circa = false): string => {
  const prefix = circa ? tr(UI.circa, lang) : '';
  return y < 0 ? `${prefix}${Math.abs(y)} ${tr(UI.bce, lang)}` : `${prefix}${y}`;
};

/** Language-matched Wikipedia search link. */
export const wikiUrl = (name: string, lang: Lang): string => {
  const host = lang === 'uk' ? 'uk.wikipedia.org' : 'en.wikipedia.org';
  const suffix = lang === 'uk' ? ' геометрія' : ' geometry';
  return `https://${host}/wiki/Special:Search?search=${encodeURIComponent(name + suffix)}`;
};
