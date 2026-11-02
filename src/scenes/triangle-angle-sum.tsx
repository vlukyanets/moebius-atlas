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
import { Line } from '@react-three/drei';
import { useFrame, useThree, type ThreeEvent } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import { MathUtils, Plane, Vector3, type Group } from 'three';
import { defineScene } from '../stage/defineScene';
import { ease, useAnimOn, useHovered, usePublish, useStep, useStrings, useTask, useToken } from '../stage/hooks';
import {
  ARC,
  Label,
  NAMES,
  Sector,
  add,
  arcPoints,
  at3,
  corners,
  cross,
  heading,
  letterAt,
  lerp,
  middle,
  placeNumbers,
  scale,
  sub,
  toward,
  unit,
  type Corner,
  type Tri,
  type V2,
} from './shared/triangle';

const STEPS = ['parallel', 'alternate-a', 'alternate-c', 'straight'] as const;

const strings = {
  en: {
    hint: 'The angle closest to a right one is ∠{v} = {n}°',
    isoHint: 'The two closest angles are ∠{v} and ∠{w}: {n}° apart',
  },
  uk: {
    hint: 'Найближчий до прямого - ∠{v} = {n}°',
    isoHint: 'Найближчі два кути - ∠{v} і ∠{w}: різниця {n}°',
  },
};

const START: Tri = [[-4, -2], [-1, 2.5], [4, -2]];
/**
 * Two vertices may not meet. An angle may close all the way to 0: watching
 * one close while another opens to 180 is the theorem at its plainest.
 */
const MIN_SIDE = 1;

const fits = (t: Tri): boolean => [0, 1, 2].every((i) => Math.hypot(...sub(t[i], t[(i + 1) % 3])) >= MIN_SIDE);

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

const Z = new Plane(new Vector3(0, 0, 1), 0);

function TriangleAngleSum(): JSX.Element {
  const { viewport, invalidate, gl } = useThree();
  const animOn = useAnimOn();
  const step = useStep();
  const publish = usePublish();
  const setTask = useTask('right-angle');
  const setIsoTask = useTask('isosceles');
  const { hint, isoHint } = useStrings<typeof strings.en>();
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

  // A vertex stays a label's width inside the canvas, or its letter is cut off.
  const inside = ([x, y]: V2): V2 => {
    const mx = viewport.width / 2 - 1;
    const my = viewport.height / 2 - 0.8;
    return [MathUtils.clamp(x, -mx, mx), MathUtils.clamp(y, -my, my)];
  };
  // The canvas narrows when the page does - a smaller window, a larger text
  // size - and a vertex left where it was would be off it, out of reach.
  useEffect(() => {
    setTri((t) => {
      const moved = t.map(inside) as unknown as Tri;
      return moved.every((p, i) => p[0] === t[i][0] && p[1] === t[i][1]) || !fits(moved) ? t : moved;
    });
  }, [viewport.width, viewport.height]);
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

  useEffect(() => {
    const pairs = [[0, 1], [1, 2], [0, 2]] as const;
    const [i, j] = pairs.reduce((p, q) => (Math.abs(deg[q[0]] - deg[q[1]]) < Math.abs(deg[p[0]] - deg[p[1]]) ? q : p));
    const gap = Math.abs(deg[i] - deg[j]);
    setIsoTask(
      gap === 0
        ? { state: 'done' }
        : { state: 'hint', text: isoHint.replace('{v}', NAMES[i]).replace('{w}', NAMES[j]).replace('{n}', String(gap)) },
    );
  }, [setIsoTask, isoHint, deg[0], deg[1], deg[2]]);

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
  const inward = toward(middle(ks[1]));
  // Line a, once the proof has drawn it, runs right across the canvas and is
  // as much in a number's way as a side is.
  const reach = viewport.width + viewport.height;
  const lineA: readonly [V2, V2] = [add(B, scale(d, -reach)), add(B, scale(d, reach))];
  const numbers = placeNumbers(
    tri,
    ks,
    deg.map((n) => `${n}°`),
    [viewport.width / 2, viewport.height / 2],
    goal[0] > 0 ? [lineA] : [],
  );
  // The half-turn's 180° reads as the line under B's own number when that
  // number is inside the angle, and just inside the angle when it is not.
  const halfTurnAt = numbers[1].inside ? add(numbers[1].at, scale(inward, 0.5)) : add(B, scale(inward, ARC + 0.9));

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
      const next = animOn ? ease(p, target, delta) : target;
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

  const release = (): void => {
    setDragging(null);
    gl.domElement.style.cursor = '';
  };
  // Only the primary button drags. A right click opens the context menu on
  // mousedown, which eats the pointerup - and a drag that never hears its end
  // would leave the vertex following the pointer with no button held.
  const grab = (i: number) => (e: ThreeEvent<PointerEvent>): void => {
    if (e.button !== 0) return;
    e.stopPropagation();
    (e.target as Element).setPointerCapture(e.pointerId);
    setDragging(i);
    gl.domElement.style.cursor = 'grabbing';
  };
  const move = (i: number) => (e: ThreeEvent<PointerEvent>): void => {
    if (dragging !== i) return;
    // A capture lost without a pointerup reaches no handler in R3F 8, so a
    // move with the button no longer held is what ends such a drag.
    if (!(e.buttons & 1)) return release();
    const hit = e.ray.intersectPlane(Z, new Vector3());
    if (!hit) return;
    const next = tri.map((q, j) => (j === i ? inside([hit.x, hit.y]) : q)) as unknown as Tri;
    // A move that would fold the triangle is refused: the vertex stays where
    // the triangle was last a triangle.
    if (fits(next)) setTri(next);
  };
  const drop = (e: ThreeEvent<PointerEvent>): void => {
    (e.target as Element).releasePointerCapture(e.pointerId);
    release();
  };

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
      <Label at={halfTurnAt} fade={straightLabel}>
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
            onPointerCancel={release}
            onPointerOver={() => dragging === null && (gl.domElement.style.cursor = 'grab')}
            onPointerOut={() => dragging === null && (gl.domElement.style.cursor = '')}
          >
            <circleGeometry args={[0.45, 24]} />
            <meshBasicMaterial transparent opacity={0} depthWrite={false} />
          </mesh>
          <Label at={letterAt(p, ks[i])}>{NAMES[i]}</Label>
          <Label at={numbers[i].at}>
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
