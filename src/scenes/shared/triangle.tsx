/**
 * What the triangle scenes share: plane geometry on two-number points, the
 * inner angles of a triangle, and the way an angle and a label are drawn. It
 * lives below `src/scenes/` rather than in it, because every file directly in
 * that folder is a scene the host can be asked for; this one is not.
 */
import { Html, Line } from '@react-three/drei';
import type { ReactNode, RefObject } from 'react';
import { MathUtils, type Color } from 'three';

export type V2 = readonly [number, number];
export type Tri = readonly [V2, V2, V2];

export const NAMES = ['A', 'B', 'C'] as const;
/** Radius of an angle's arc. */
export const ARC = 0.75;

export const sub = (p: V2, q: V2): V2 => [p[0] - q[0], p[1] - q[1]];
export const add = (p: V2, q: V2): V2 => [p[0] + q[0], p[1] + q[1]];
export const scale = (p: V2, k: number): V2 => [p[0] * k, p[1] * k];
export const unit = (p: V2): V2 => scale(p, 1 / Math.hypot(p[0], p[1]));
export const toward = (t: number): V2 => [Math.cos(t), Math.sin(t)];
export const heading = (p: V2): number => Math.atan2(p[1], p[0]);
export const cross = (p: V2, q: V2): number => p[0] * q[1] - p[1] * q[0];
export const lerp = (p: V2, q: V2, t: number): V2 => add(p, scale(sub(q, p), t));
export const at3 = (p: V2, z = 0): [number, number, number] => [p[0], p[1], z];
const dot = (p: V2, q: V2): number => p[0] * q[0] + p[1] * q[1];

/** Pixels per scene unit: the 2D camera's zoom in `SceneHost`. */
const PX = 40;
/** The gap a label keeps from every line and arc, in scene units. */
const CLEAR = 0.12;
/** The arcs a number has to stay outside: an angle's own, and the dashed half-turn drawn over B. */
const ARCS = ARC + 0.3;

let measurer: CanvasRenderingContext2D | null | undefined;

/**
 * Half the width and height of a label's box, in scene units. The text is
 * measured in the font `.scene-label` sets in styles.css - weight, size and
 * family are mirrored here - because a label's place depends on its width:
 * `4x = 80°` needs twice the room of `56°`.
 */
function halfBox(text: string): V2 {
  measurer ??= document.createElement('canvas').getContext('2d');
  let width = text.length * 8.5;
  if (measurer) {
    const family = getComputedStyle(document.documentElement).getPropertyValue('--sans') || 'sans-serif';
    measurer.font = `600 14px ${family}`;
    width = measurer.measureText(text).width;
  }
  return [width / 2 / PX, 9 / PX];
}

/** How far a box of half-size `half` reaches from its centre along the unit direction `n`. */
const reach = (n: V2, [hw, hh]: V2): number => Math.abs(n[0]) * hw + Math.abs(n[1]) * hh;

/**
 * How far along the bisector of a wedge - from direction `from`, sweeping
 * `sweep` counter-clockwise - a box of half-size `half` has to sit to clear
 * both of the wedge's sides and the arcs around its tip.
 */
function into(from: number, sweep: number, half: V2): number {
  const s = Math.sin(sweep / 2);
  if (s < 1e-3) return Infinity;
  const along = toward(from + sweep / 2);
  return Math.max(
    ARCS + CLEAR + reach(along, half),
    (reach(toward(from + Math.PI / 2), half) + CLEAR) / s,
    (reach(toward(from + sweep - Math.PI / 2), half) + CLEAR) / s,
  );
}

export interface Corner {
  /** Where the arc of the inner angle starts, and how far it sweeps (radians). */
  start: number;
  sweep: number;
  deg: number;
}

/** The inner angle at `p` between the rays to `q` and `r`. */
function corner(p: V2, q: V2, r: V2): Corner {
  const a = heading(sub(q, p));
  let d = heading(sub(r, p)) - a;
  while (d <= -Math.PI) d += 2 * Math.PI;
  while (d > Math.PI) d -= 2 * Math.PI;
  return d >= 0
    ? { start: a, sweep: d, deg: MathUtils.radToDeg(d) }
    : { start: a + d, sweep: -d, deg: MathUtils.radToDeg(-d) };
}

export const corners = ([a, b, c]: Tri): [Corner, Corner, Corner] => [corner(a, b, c), corner(b, c, a), corner(c, a, b)];

/**
 * The directions labels are placed along, taken from the arc rather than by
 * adding the two side vectors: at 0 or 180 degrees those cancel and leave no
 * direction at all.
 */
export const middle = (k: Corner): number => k.start + k.sweep / 2;

/** Where a vertex's letter goes: just outside the triangle, opposite its angle. */
export const letterAt = (p: V2, k: Corner): V2 => add(p, scale(toward(middle(k) + Math.PI), 0.5));

interface Box {
  c: V2;
  half: V2;
}

/** Whether two boxes come within CLEAR of each other. */
const overlaps = (a: Box, b: Box): boolean =>
  Math.abs(a.c[0] - b.c[0]) < a.half[0] + b.half[0] + CLEAR && Math.abs(a.c[1] - b.c[1]) < a.half[1] + b.half[1] + CLEAR;

/** Whether a box comes within CLEAR of the segment from `p` to `q`. */
function crosses({ c, half }: Box, p: V2, q: V2): boolean {
  for (let t = 0; t <= 1; t += 1 / 64) {
    const x = lerp(p, q, t);
    if (Math.abs(x[0] - c[0]) < half[0] + CLEAR && Math.abs(x[1] - c[1]) < half[1] + CLEAR) return true;
  }
  return false;
}

/** Whether a box comes within CLEAR of the disc of radius `r` around `p`. */
const nears = ({ c, half }: Box, p: V2, r: number): boolean =>
  Math.hypot(Math.max(Math.abs(c[0] - p[0]) - half[0], 0), Math.max(Math.abs(c[1] - p[1]) - half[1], 0)) < r + CLEAR;

/**
 * Where the numbers of the three angles go, so that no text touches a side,
 * an arc, a vertex, a letter, another number, any of the scene's other
 * `lines` or the edge of the canvas (`bounds`, half its width and height). Each number first tries the snug
 * place inside its angle - as close to the vertex as its width allows, and
 * still on the vertex's side of the opposite side - and if anything is in the
 * way, the nearest free place in rings around its vertex, starting from the
 * bisector. `inside` says the number got the place inside its angle.
 */
export function placeNumbers(
  tri: Tri,
  ks: readonly Corner[],
  texts: readonly string[],
  bounds: V2,
  lines: readonly (readonly [V2, V2])[] = [],
): { at: V2; inside: boolean }[] {
  const taken: Box[] = tri.map((p, i) => ({ c: letterAt(p, ks[i]), half: halfBox(NAMES[i]) }));
  const free = (box: Box): boolean =>
    Math.abs(box.c[0]) + box.half[0] <= bounds[0] &&
    Math.abs(box.c[1]) + box.half[1] <= bounds[1] &&
    !taken.some((t) => overlaps(box, t)) &&
    !tri.some((p, j) => crosses(box, p, tri[(j + 1) % 3]) || nears(box, p, ARCS)) &&
    !lines.some(([p, q]) => crosses(box, p, q));

  return tri.map((p, i) => {
    const k = ks[i];
    const half = halfBox(texts[i]);
    const mid = middle(k);
    const tries: { at: V2; inside: boolean }[] = [];
    const d = into(k.start, k.sweep, half);
    // The side opposite the vertex, with its normal turned towards the vertex.
    const q = tri[(i + 1) % 3];
    const r = tri[(i + 2) % 3];
    let n = unit([q[1] - r[1], r[0] - q[0]]);
    if (dot(n, sub(p, q)) < 0) n = scale(n, -1);
    // Down the bisector first: `into` clears the arc only along it, so a
    // box's corner can still graze the arc at the snug distance.
    for (let extra = 0; Number.isFinite(d) && extra <= 1.5; extra += 0.1) {
      const at = add(p, scale(toward(mid), d + extra));
      if (dot(n, sub(at, q)) - reach(n, half) >= CLEAR) tries.push({ at, inside: true });
    }
    for (let r = ARCS + CLEAR; r <= 4.5; r += 0.2)
      for (let turn = 0; turn <= 180; turn += 15)
        for (const side of turn === 0 || turn === 180 ? [1] : [1, -1])
          tries.push({ at: add(p, scale(toward(mid + side * MathUtils.degToRad(turn)), r + reach(toward(mid), half))), inside: false });
    const placed = tries.find((t) => free({ c: t.at, half })) ?? tries[0] ?? { at: p, inside: false };
    taken.push({ c: placed.at, half });
    return placed;
  });
}

/**
 * A triangle with angle `a` at A and `c` at C (degrees) on a level base,
 * scaled down to fit a `w` by `h` box and centred in it.
 */
export function shaped(a: number, c: number, w: number, h: number): Tri {
  const ra = MathUtils.degToRad(a);
  const rc = MathUtils.degToRad(c);
  const base = 8;
  // The law of sines gives AB from the base and the angle at C.
  const ab = (base * Math.sin(rc)) / Math.sin(Math.PI - ra - rc);
  const b: V2 = [ab * Math.cos(ra), ab * Math.sin(ra)];
  const left = Math.min(0, b[0]);
  const right = Math.max(base, b[0]);
  const k = Math.min(1, w / (right - left), h / b[1]);
  const place = ([x, y]: V2): V2 => [(x - (left + right) / 2) * k, (y - b[1] / 2) * k];
  return [place([0, 0]), place(b), place([base, 0])];
}

export const arcPoints = (k: Corner, r: number): [number, number, number][] =>
  Array.from({ length: 33 }, (_, i) => {
    const t = k.start + (k.sweep * i) / 32;
    return [Math.cos(t) * r, Math.sin(t) * r, 0];
  });

/**
 * An angle drawn at the origin: a tinted sector with its arc - or, for a right
 * angle, with the small square every textbook marks one with.
 */
export function Sector({ k, color, strong = false }: { k: Corner; color: Color; strong?: boolean }): JSX.Element {
  const square = Math.abs(k.deg - 90) < 0.5;
  const s = ARC * 0.6;
  const u = toward(k.start);
  const v = toward(k.start + k.sweep);
  return (
    <>
      <mesh>
        <circleGeometry args={[ARC, 40, k.start, k.sweep]} />
        <meshBasicMaterial color={color} transparent opacity={strong ? 0.42 : 0.2} depthWrite={false} />
      </mesh>
      <Line
        points={square ? [at3(scale(u, s)), at3(add(scale(u, s), scale(v, s))), at3(scale(v, s))] : arcPoints(k, ARC)}
        color={color}
        lineWidth={strong ? 3.5 : 2}
      />
    </>
  );
}

interface LabelProps {
  at: V2;
  children: ReactNode;
  /** A label the scene fades in and out through `--fade`; hidden until it does. */
  fade?: RefObject<HTMLDivElement>;
  /** A value the text works out, set apart from the ones it is given. */
  found?: boolean;
}

export function Label({ at, children, fade, found }: LabelProps): JSX.Element {
  const className = ['scene-label', fade && 'scene-label--fades', found && 'scene-label--found'].filter(Boolean).join(' ');
  return (
    // drei stacks labels at z-index 16777271 by default, over the sticky top
    // bar; under it, they scroll away beneath it like the canvas does.
    <Html position={at3(at)} center zIndexRange={[1, 0]} wrapperClass="scene-label-wrap" className={className} ref={fade}>
      {children}
    </Html>
  );
}
