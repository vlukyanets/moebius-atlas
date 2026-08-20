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

/** One drawn arrow, in the direction the content reads: prerequisite -> topic. */
export interface Link {
  from: string;
  to: string;
}

export const linkKey = (e: Link): string => `${e.from}>${e.to}`;

/**
 * Everything reachable from `start` by following drawn links towards the
 * target - what the path views paint as the trail behind whatever the pointer
 * rests on. Only the links handed in are followed, so a chain that would
 * continue through an edge the layout left undrawn stops here rather than
 * reappearing further up with nothing joining it.
 */
export function upward(links: Link[], start: string): { nodes: Set<string>; edges: Set<string> } {
  const out = new Map<string, Link[]>();
  for (const e of links) out.set(e.from, [...(out.get(e.from) ?? []), e]);
  const nodes = new Set<string>();
  const edges = new Set<string>();
  const seen = new Set<string>();
  const queue = [start];
  while (queue.length) {
    const cur = queue.shift()!;
    if (seen.has(cur)) continue;
    seen.add(cur);
    for (const e of out.get(cur) ?? []) {
      edges.add(linkKey(e));
      nodes.add(e.to);
      queue.push(e.to);
    }
  }
  return { nodes, edges };
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
export interface TreeEdge extends Link {
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

/** A topic card on a ring, positioned from the centre of the field. */
export interface RingSlot {
  id: string;
  x: number;
  y: number;
}

/**
 * One `requires` edge between neighbouring rings, already cut back to the two
 * card borders it runs between - a ring has no rows to leave a gap between, so
 * a line drawn centre to centre would disappear under the cards at both ends.
 * As in the tree, an edge whose ends sit more than one ring apart is left out.
 */
export interface RingEdge extends Link {
  /** Ring of the prerequisite; what it points at is one ring further in. */
  ring: number;
  /** The arc itself, as points to join in order - already cut back to the two
   *  card borders, so the head lands on the card and not under it. */
  points: { x: number; y: number }[];
}

export interface RingLayout {
  rings: RingSlot[][];
  edges: RingEdge[];
  /** Radius of every ring - evenly spaced, so this is the ring number times
   *  the one spacing. The target sits in the middle, so radii[0] is 0. */
  radii: number[];
  /** Side of the square field the whole drawing fits in. */
  size: number;
}

const TAU = Math.PI * 2;

/**
 * Mean of a set of angles, taken as unit vectors: averaging the numbers
 * themselves would put the mean of 10° and 350° at 180°, on the far side of
 * the circle from both.
 */
const meanAngle = (angles: number[]): number =>
  Math.atan2(
    angles.reduce((sum, a) => sum + Math.sin(a), 0) / angles.length,
    angles.reduce((sum, a) => sum + Math.cos(a), 0) / angles.length,
  );

/** The short way round from `a` to `b`, in (-pi, pi]. */
const swing = (a: number, b: number): number => {
  const d = (b - a) % TAU;
  return d > Math.PI ? d - TAU : d <= -Math.PI ? d + TAU : d;
};

/** How many straight pieces one transfer arc is drawn with. */
const ARC_STEPS = 24;

/** How far a topic may wander from the place its ring would file it in. */
const SCATTER = (50 * Math.PI) / 180;

/**
 * A fixed number in [-1, 1) for an id - FNV-1a, taken for its spread rather
 * than for anything cryptographic. The scatter has to be random-looking but not
 * random: a topic keeps the same place on its ring between renders, between
 * languages and between visits, or the reader would watch the atlas rearrange
 * itself every time they came back to it.
 */
const spray = (id: string): number => {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) / 2 ** 32) * 2 - 1;
};

/**
 * Lay the levels out as concentric rings: the target in the middle, and every
 * level one ring further out, so distance from the centre is how deep into the
 * prerequisites a topic sits. The rings are evenly spaced - that is what lets
 * the distance be read at all - and the spacing is the smallest one at which no
 * two cards in the whole drawing overlap.
 *
 * Where a card lands on its ring is the same barycenter idea the tree uses,
 * turned polar: a topic wants to sit at the average angle of what it unlocks
 * one ring further in. The wants decide the order around the ring; the cards
 * are then spread evenly and the whole ring is rotated by the average error, so
 * the ring stays regular while still facing the right way. Angles are averaged
 * as unit vectors - the mean of 10° and 350° is not 180°.
 *
 * `size` carries the card box and the two gaps, so the caller keeps the pixels
 * and this keeps the arithmetic. Positions come back relative to the centre of
 * the field, which makes drawing them a single addition.
 */
export function ringLayout(
  levels: string[][],
  key: (id: string) => string,
  size: { w: number; h: number; gap: number; ring: number },
): RingLayout {
  const depth: Record<string, number> = {};
  levels.forEach((ids, k) => ids.forEach((id) => (depth[id] = k)));

  const links: Link[] = [];
  /** What a topic unlocks on the ring just inside its own. */
  const inward: Record<string, string[]> = {};
  levels.forEach((ids, k) => {
    for (const to of ids) {
      for (const from of N[to].requires ?? []) {
        if (depth[from] !== k + 1) continue;
        links.push({ from, to });
        (inward[from] ??= []).push(to);
      }
    }
  });

  /** Order the rings and give every card its angle, for a given spacing. */
  const lay = (step: number): { id: string; a: number }[][] => {
    const angle: Record<string, number> = {};
    const laid = [[{ id: levels[0][0], a: 0 }]];

    for (let k = 1; k < levels.length; k++) {
      const ids = [...levels[k]];
      const want: Record<string, number> = {};
      for (const id of ids) {
        const near = (inward[id] ?? []).filter((o) => angle[o] !== undefined);
        if (near.length) want[id] = meanAngle(near.map((o) => angle[o]));
      }
      // Past every real angle, so a card with nothing inside it lands last
      // rather than in the middle of the ones that do have a place to be.
      const wish = (id: string): number => want[id] ?? TAU;
      ids.sort((a, b) => wish(a) - wish(b) || key(a).localeCompare(key(b)));

      const n = ids.length;
      const even = (i: number): number => -Math.PI / 2 + (TAU * i) / n;
      const off = ids
        .map((id, i) => (want[id] === undefined ? null : want[id] - even(i)))
        .filter((v): v is number => v !== null);
      const turn = off.length ? meanAngle(off) : 0;

      // What the barycenter asks for is a card at the very angle of what it
      // unlocks, and that is exactly what must not happen: ring after ring on
      // the same angle is a spoke, every arrow along it points straight at the
      // target, and the rings then have to clear each other across the full
      // width of a card rather than its height. So the whole ring is turned off
      // the angles it asked for by about one card's width along its own
      // circumference - enough that no card sits behind its own prerequisite -
      // and never by more than half its own pitch, which would carry a card
      // past its neighbour and undo the order just found. The turn always goes
      // the same way, so a chain winds out from the centre instead of folding
      // back onto itself. Ring 1 is left alone: everything on it points at the
      // target in the middle, and no turn can make those arrows anything but
      // radial.
      const twist = k === 1 ? 0 : Math.min(Math.PI / n, (size.w + size.gap) / (k * step));

      // Evenly spaced is what a ring wants; evenly spaced is also what makes a
      // path of two or three topics a level sit in one narrow sector with the
      // rest of the circle bare, since the barycenter files every card directly
      // behind what it unlocks. So each one is then let wander around its own
      // place by a fixed amount of its own - as far as it likes, up to whatever
      // room is left once the card's own width at this radius is taken out of
      // its share of the circle. A ring with barely enough room to hold its
      // cards has none left to give, and does not move.
      const room = Math.max(0, Math.PI / n - (size.w + size.gap) / (k * step));
      const wander = Math.min(room, SCATTER);

      laid.push(
        ids.map((id, i) => {
          const a = even(i) + turn + twist + spray(id) * wander;
          angle[id] = a;
          return { id, a };
        }),
      );
    }
    return laid;
  };

  /**
   * The closest the rings can be drawn without a card landing on another one.
   *
   * Every card sits at `step` times its ring number along its own angle, so the
   * whole drawing scales with the spacing and each pair of cards is separated
   * from exactly one spacing upwards: they are clear as soon as the gap between
   * them is a card wide on one axis or a card tall on the other, and both gaps
   * are proportional to `step`. So the spacing a pair needs is a division, and
   * the spacing the drawing needs is the largest of them.
   */
  const closest = (laid: { a: number }[][], floor: number): number => {
    const unit = laid.flatMap((ring, k) =>
      ring.map(({ a }) => ({ x: k * Math.cos(a), y: k * Math.sin(a) })),
    );
    let step = floor;
    for (let i = 0; i < unit.length; i++) {
      for (let j = i + 1; j < unit.length; j++) {
        const dx = Math.abs(unit[i].x - unit[j].x);
        const dy = Math.abs(unit[i].y - unit[j].y);
        const apart = Math.min(
          dx ? (size.w + size.gap) / dx : Infinity,
          dy ? (size.h + size.gap) / dy : Infinity,
        );
        if (apart > step) step = apart;
      }
    }
    return step;
  };

  // Spacing and angles depend on each other - the turn is measured against a
  // ring's radius - so they are settled by repetition: lay the rings out, ask
  // how far apart they have to be, lay them out again. Widening the rings only
  // ever shrinks the turn, so this walks outwards and stops; the last call is
  // what makes the spacing exact for the angles actually used.
  // Never closer than a card's height plus the empty band the arrows need: a
  // transfer with nowhere to bend is a straight line with extra steps.
  const floor = size.h + size.ring;
  let step = floor;
  let laid = lay(step);
  for (let pass = 0; pass < 4; pass++) {
    const need = closest(laid, floor);
    if (need <= step + 0.5) break;
    step = need;
    laid = lay(step);
  }
  step = closest(laid, floor);

  const radii = laid.map((_, k) => k * step);
  const rings: RingSlot[][] = laid.map((ring, k) =>
    ring.map(({ id, a }) => ({ id, x: Math.cos(a) * radii[k], y: Math.sin(a) * radii[k] })),
  );

  const card = new Map<string, RingSlot>();
  for (const ring of rings) for (const slot of ring) card.set(slot.id, slot);

  const polar = new Map<string, { r: number; a: number }>();
  laid.forEach((ring, k) => ring.forEach(({ id, a }) => polar.set(id, { r: radii[k], a })));

  /**
   * The arc from one card down to the other: a transfer between two orbits.
   *
   * The whole of it runs in the empty band between the two rings of cards - so
   * it can cross nothing, there being nothing there to cross. The radius eases
   * from the near edge of the outer band to the near edge of the inner one
   * while the angle sweeps the short way round, and the easing leaves the
   * radius standing still at both ends, so the arc peels off the outer ring
   * along it and settles onto the inner one along it too, the way a satellite
   * drops between orbits rather than cutting across both. What is left is a
   * straight run in and out to the two card centres, and the cards cover it.
   *
   * A card in the middle has no angle of its own, so an arc into the target
   * sweeps nothing and comes straight down its own radius; those arrows point
   * at the middle whatever is done to them.
   */
  const arc = (from: string, to: string): { x: number; y: number }[] => {
    const a = polar.get(from)!;
    const b = polar.get(to)!;
    const sweep = b.r === 0 ? 0 : swing(a.a, b.a);
    const edge = size.h / 2;
    const near = a.r - edge;
    const far = b.r + edge;

    const line = [{ x: Math.cos(a.a) * a.r, y: Math.sin(a.a) * a.r }];
    for (let i = 0; i <= ARC_STEPS; i++) {
      const t = i / ARC_STEPS;
      const r = near + (far - near) * t * t * (3 - 2 * t);
      const angle = a.a + sweep * t;
      line.push({ x: Math.cos(angle) * r, y: Math.sin(angle) * r });
    }
    line.push({ x: Math.cos(b.a) * b.r, y: Math.sin(b.a) * b.r });

    // Cut back to the two card borders. The tail could be left buried - the
    // cards are painted over the arrows - but the head carries the arrowhead,
    // and an arrowhead under a card is an arrow that points at nothing.
    const tail = card.get(from)!;
    const head = card.get(to)!;
    const inside = (p: { x: number; y: number }, box: RingSlot): boolean =>
      Math.abs(p.x - box.x) <= size.w / 2 && Math.abs(p.y - box.y) <= size.h / 2;
    /** The crossing itself, closed in on from the step that is in and the one
     *  that is out, so the arc starts and ends on a border rather than near it. */
    const border = (
      into: { x: number; y: number },
      out: { x: number; y: number },
      box: RingSlot,
    ): { x: number; y: number } => {
      let lo = 0;
      let hi = 1;
      for (let i = 0; i < 12; i++) {
        const mid = (lo + hi) / 2;
        const p = { x: into.x + (out.x - into.x) * mid, y: into.y + (out.y - into.y) * mid };
        if (inside(p, box)) lo = mid;
        else hi = mid;
      }
      return { x: into.x + (out.x - into.x) * hi, y: into.y + (out.y - into.y) * hi };
    };

    const last = line.length - 1;
    let first = 0;
    while (first < last && inside(line[first], tail)) first++;
    let final = last;
    while (final > first && inside(line[final], head)) final--;
    if (first > final) return [line[0], line[last]];

    return [
      ...(first > 0 ? [border(line[first - 1], line[first], tail)] : []),
      ...line.slice(first, final + 1),
      ...(final < last ? [border(line[final + 1], line[final], head)] : []),
    ];
  };

  return {
    rings,
    radii,
    size: 2 * (radii[radii.length - 1] + size.w / 2 + size.h),
    edges: links.map(({ from, to }) => ({ from, to, ring: depth[from], points: arc(from, to) })),
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
