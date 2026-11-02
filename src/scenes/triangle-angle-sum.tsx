/**
 * The sum of the angles of a triangle. The reader drags the vertices of a
 * triangle and watches its three angles; the steps of the text play out the
 * proof on whatever triangle they made - the line through B parallel to AC,
 * the angles at A and C carried over to B as alternate angles, and the three
 * of them filling the straight angle along that line.
 *
 * Each step is a state, not a movement: the step key says how much of the
 * construction is out, and the drawing eases there from wherever it is. So
 * the steps can be walked in any order and the triangle dragged at any of
 * them - the construction is rebuilt from the vertices on every frame.
 */
import { Html, Line } from '@react-three/drei';
import { useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react';
import { MathUtils, Plane, Vector3, type Color, type Group } from 'three';
import { defineScene } from '../stage/defineScene';
import { useAnimOn, useHovered, usePublish, useStep, useStrings, useTask, useToken } from '../stage/hooks';

type V2 = readonly [number, number];
type Tri = readonly [V2, V2, V2];

const STEPS = ['parallel', 'alternate-a', 'alternate-c', 'straight'] as const;

const strings = {
  en: { hint: 'The angle closest to a right one is ∠{v} = {n}°' },
  uk: { hint: 'Найближчий до прямого - ∠{v} = {n}°' },
};

const START: Tri = [[-4, -2], [-1, 2.5], [4, -2]];
const NAMES = ['A', 'B', 'C'] as const;
/** A move is refused rather than letting the triangle fold flat or collapse. */
const MIN_ANGLE = 5;
const MIN_SIDE = 1;
const ARC = 0.75;

const sub = (p: V2, q: V2): V2 => [p[0] - q[0], p[1] - q[1]];
const add = (p: V2, q: V2): V2 => [p[0] + q[0], p[1] + q[1]];
const scale = (p: V2, k: number): V2 => [p[0] * k, p[1] * k];
const unit = (p: V2): V2 => scale(p, 1 / Math.hypot(p[0], p[1]));
const heading = (p: V2): number => Math.atan2(p[1], p[0]);
const cross = (p: V2, q: V2): number => p[0] * q[1] - p[1] * q[0];
const lerp = (p: V2, q: V2, t: number): V2 => add(p, scale(sub(q, p), t));
const at3 = (p: V2, z = 0): [number, number, number] => [p[0], p[1], z];

interface Corner {
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

const corners = ([a, b, c]: Tri): [Corner, Corner, Corner] => [corner(a, b, c), corner(b, c, a), corner(c, a, b)];

const fits = (t: Tri): boolean =>
  corners(t).every((k) => k.deg >= MIN_ANGLE) &&
  [0, 1, 2].every((i) => Math.hypot(...sub(t[i], t[(i + 1) % 3])) >= MIN_SIDE);

/**
 * Whole degrees that add up to 180. Rounding each angle on its own gives 179
 * or 181 often enough to make the theorem look wrong, so the third is what
 * the first two leave.
 */
const shown = ([a, b]: [Corner, Corner, Corner]): [number, number, number] => {
  const x = Math.round(a.deg);
  const y = Math.round(b.deg);
  return [x, y, 180 - x - y];
};

const arcPoints = (k: Corner, r: number): [number, number, number][] =>
  Array.from({ length: 33 }, (_, i) => {
    const t = k.start + (k.sweep * i) / 32;
    return [Math.cos(t) * r, Math.sin(t) * r, 0];
  });

/** An angle drawn at the origin: a tinted sector with its arc. */
function Sector({ k, color, strong }: { k: Corner; color: Color; strong: boolean }): JSX.Element {
  return (
    <>
      <mesh>
        <circleGeometry args={[ARC, 40, k.start, k.sweep]} />
        <meshBasicMaterial color={color} transparent opacity={strong ? 0.42 : 0.2} depthWrite={false} />
      </mesh>
      <Line points={arcPoints(k, ARC)} color={color} lineWidth={strong ? 3.5 : 2} />
    </>
  );
}

function Label({ at, children, fade }: { at: V2; children: ReactNode; fade?: RefObject<HTMLDivElement> }): JSX.Element {
  return (
    // drei stacks labels at z-index 16777271 by default, over the sticky top
    // bar; under it, they scroll away beneath it like the canvas does.
    <Html position={at3(at)} center zIndexRange={[1, 0]} wrapperClass="scene-label-wrap" className="scene-label" ref={fade}>
      {children}
    </Html>
  );
}

const Z = new Plane(new Vector3(0, 0, 1), 0);

function TriangleAngleSum(): JSX.Element {
  const { viewport, invalidate, gl } = useThree();
  const animOn = useAnimOn();
  const step = useStep();
  const publish = usePublish();
  const setTask = useTask('right-angle');
  const { hint } = useStrings<typeof strings.en>();
  const ink = useToken('--text');
  const muted = useToken('--text-muted');
  const accent = useToken('--accent');
  const colors = [useToken('--accent'), useToken('--trail'), useToken('--ok')] as const;
  const hover = {
    lineA: useHovered('line-a'),
    sideAC: useHovered('side-ac'),
    angles: [useHovered('angle-a'), useHovered('angle-b'), useHovered('angle-c')],
  };

  const [tri, setTri] = useState<Tri>(START);
  const [dragging, setDragging] = useState<number | null>(null);
  const [A, B, C] = tri;
  const ks = corners(tri);
  const deg = shown(ks);

  useEffect(() => {
    publish('alpha', `${deg[0]}^\\circ`);
    publish('beta', `${deg[1]}^\\circ`);
    publish('gamma', `${deg[2]}^\\circ`);
    publish('sum', `${deg[0] + deg[1] + deg[2]}^\\circ`);
  }, [publish, deg[0], deg[1], deg[2]]);

  useEffect(() => {
    const best = deg.reduce((i, d, j) => (Math.abs(d - 90) < Math.abs(deg[i] - 90) ? j : i), 0);
    setTask(
      deg[best] === 90
        ? { state: 'done' }
        : { state: 'hint', text: hint.replace('{v}', NAMES[best]).replace('{n}', String(deg[best])) },
    );
  }, [setTask, hint, deg[0], deg[1], deg[2]]);

  // How far into the proof the text has gone; the drawing eases towards it.
  const level = step ? STEPS.indexOf(step as (typeof STEPS)[number]) + 1 : 0;
  const goal = [level >= 1 || hover.lineA ? 1 : 0, level >= 2 ? 1 : 0, level >= 3 ? 1 : 0, level >= 4 ? 1 : 0];
  const goalRef = useRef(goal);
  goalRef.current = goal;
  const progress = useRef([0, 0, 0, 0]);
  const parallel = useRef<Group>(null);
  const copyA = useRef<Group>(null);
  const copyC = useRef<Group>(null);
  const straight = useRef<Group>(null);
  const straightLabel = useRef<HTMLDivElement>(null);

  const d = unit(sub(C, A));
  // The half-turn at B on the side the triangle lies: the straight angle the
  // three angles fill.
  const half: Corner = { start: cross(d, sub(A, B)) > 0 ? heading(d) : heading(d) + Math.PI, sweep: Math.PI, deg: 180 };
  const inward = unit(add(unit(sub(A, B)), unit(sub(C, B))));

  // Places what the progress values say. Called every frame of a transition
  // and once after every render, because a drag moves the vertices under a
  // construction that is not otherwise animating.
  const place = (): void => {
    const [pp, pa, pc, ps] = progress.current;
    if (parallel.current) {
      parallel.current.position.set(B[0], B[1], 0.01);
      parallel.current.rotation.z = heading(d);
      parallel.current.scale.x = Math.max(pp, 1e-3);
      parallel.current.visible = pp > 1e-3;
    }
    for (const [ref, from, p] of [[copyA, A, pa], [copyC, C, pc]] as const) {
      if (!ref.current) continue;
      ref.current.position.set(...at3(lerp(from, B, p)));
      ref.current.rotation.z = Math.PI * p;
      ref.current.visible = p > 1e-3;
    }
    if (straight.current) straight.current.visible = ps > 1e-3;
    straightLabel.current?.style.setProperty('--fade', String(ps));
  };

  useFrame((_, delta) => {
    let moving = false;
    progress.current = progress.current.map((p, i) => {
      const target = goalRef.current[i];
      const next = animOn ? MathUtils.damp(p, target, 6, delta) : target;
      if (Math.abs(next - target) < 1e-3) return target;
      moving = true;
      return next;
    });
    place();
    if (moving) invalidate();
  });

  useEffect(() => {
    place();
    invalidate();
  });

  const grab = (i: number) => (e: ThreeEvent<PointerEvent>): void => {
    e.stopPropagation();
    (e.target as Element).setPointerCapture(e.pointerId);
    setDragging(i);
    gl.domElement.style.cursor = 'grabbing';
  };
  const move = (i: number) => (e: ThreeEvent<PointerEvent>): void => {
    if (dragging !== i) return;
    const hit = e.ray.intersectPlane(Z, new Vector3());
    if (!hit) return;
    // A vertex stays a label's width inside the canvas, or its letter is cut off.
    const mx = viewport.width / 2 - 1;
    const my = viewport.height / 2 - 0.8;
    const p: V2 = [MathUtils.clamp(hit.x, -mx, mx), MathUtils.clamp(hit.y, -my, my)];
    const next = tri.map((q, j) => (j === i ? p : q)) as unknown as Tri;
    // A move that would fold the triangle is refused: the vertex stays where
    // the triangle was last a triangle.
    if (fits(next)) setTri(next);
  };
  const drop = (e: ThreeEvent<PointerEvent>): void => {
    (e.target as Element).releasePointerCapture(e.pointerId);
    setDragging(null);
    gl.domElement.style.cursor = '';
  };

  const centre = scale(add(add(A, B), C), 1 / 3);
  const outline = useMemo(() => [...tri, A].map((p) => at3(p, 0.01)), [tri, A]);

  return (
    <>
      {ks.map((k, i) => (
        <group key={i} position={at3(tri[i])}>
          <Sector k={k} color={colors[i]} strong={hover.angles[i]} />
        </group>
      ))}

      <Line points={outline} color={ink} lineWidth={2} />
      <Line points={[at3(A, 0.02), at3(C, 0.02)]} color={accent} lineWidth={4} visible={hover.sideAC} />

      <group ref={parallel}>
        {/* Long enough to cross the widest canvas from any B; the canvas clips it. */}
        <Line points={[[-60, 0, 0], [60, 0, 0]]} color={hover.lineA ? accent : muted} lineWidth={hover.lineA ? 3.5 : 2} />
      </group>
      <group ref={copyA}>
        <Sector k={ks[0]} color={colors[0]} strong={hover.angles[0]} />
      </group>
      <group ref={copyC}>
        <Sector k={ks[2]} color={colors[2]} strong={hover.angles[2]} />
      </group>
      <group ref={straight} position={at3(B, 0.03)}>
        <Line points={arcPoints(half, ARC + 0.3)} color={ink} lineWidth={2} dashed dashSize={0.12} gapSize={0.08} />
      </group>
      {/* Inside the triangle, past B's own value, where the half-turn is read. */}
      <Label at={add(B, scale(inward, ARC + 1.3))} fade={straightLabel}>
        180°
      </Label>

      {tri.map((p, i) => (
        <group key={i}>
          <mesh position={at3(p, 0.04)}>
            <circleGeometry args={[0.13, 24]} />
            <meshBasicMaterial color={ink} />
          </mesh>
          <mesh
            position={at3(p, 0.05)}
            onPointerDown={grab(i)}
            onPointerMove={move(i)}
            onPointerUp={drop}
            onPointerOver={() => dragging === null && (gl.domElement.style.cursor = 'grab')}
            onPointerOut={() => dragging === null && (gl.domElement.style.cursor = '')}
          >
            <circleGeometry args={[0.45, 24]} />
            <meshBasicMaterial transparent opacity={0} depthWrite={false} />
          </mesh>
          <Label at={add(p, scale(unit(sub(p, centre)), 0.5))}>{NAMES[i]}</Label>
          <Label at={add(p, scale(unit(add(unit(sub(tri[(i + 1) % 3], p)), unit(sub(tri[(i + 2) % 3], p)))), ARC + 0.55))}>
            {deg[i]}°
          </Label>
        </group>
      ))}
    </>
  );
}

export default defineScene({
  camera: '2d',
  steps: STEPS,
  strings,
  Component: TriangleAngleSum,
});
