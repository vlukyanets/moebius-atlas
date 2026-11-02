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
/** Below this an angle's number no longer fits between its sides. */
const NARROW = 30;

export const sub = (p: V2, q: V2): V2 => [p[0] - q[0], p[1] - q[1]];
export const add = (p: V2, q: V2): V2 => [p[0] + q[0], p[1] + q[1]];
export const scale = (p: V2, k: number): V2 => [p[0] * k, p[1] * k];
export const unit = (p: V2): V2 => scale(p, 1 / Math.hypot(p[0], p[1]));
export const toward = (t: number): V2 => [Math.cos(t), Math.sin(t)];
export const heading = (p: V2): number => Math.atan2(p[1], p[0]);
export const cross = (p: V2, q: V2): number => p[0] * q[1] - p[1] * q[0];
export const lerp = (p: V2, q: V2, t: number): V2 => add(p, scale(sub(q, p), t));
export const at3 = (p: V2, z = 0): [number, number, number] => [p[0], p[1], z];

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

/**
 * Where an angle's number goes: inside the angle while there is room, and
 * just past its arc - outside the angle, beside one of its sides - once the
 * angle is too narrow to hold it.
 */
export const numberAt = (p: V2, k: Corner): V2 =>
  k.deg >= NARROW ? add(p, scale(toward(middle(k)), ARC + 0.55)) : add(p, scale(toward(k.start + k.sweep + 0.6), ARC + 0.45));

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
