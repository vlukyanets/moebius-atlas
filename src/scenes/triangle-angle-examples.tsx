/**
 * The worked examples of the angle sum topic, drawn. Each problem of the
 * examples is a `[!step]` of this scene, and the triangle eases into that
 * problem's shape: the angles the problem gives are labelled plainly, the ones
 * its solution finds are labelled with the name the text gives them (`x`,
 * `2x`, `y`) and set apart, so the drawing reads alongside the working.
 *
 * Unlike the main scene it is not dragged - it is the picture of one problem
 * at a time, and a triangle the reader could move would stop matching the
 * numbers on the page.
 */
import { Line } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import { defineScene } from '../stage/defineScene';
import { ease, useAnimOn, useStep, useToken } from '../stage/hooks';
import { Label, NAMES, Sector, at3, corners, letterAt, numberAt, shaped, type Tri } from './shared/triangle';

interface Problem {
  /** The angles at A and at C, in degrees; B is what they leave. */
  a: number;
  c: number;
  /** The labels at A, B and C, and which of them the solution found. */
  labels: readonly [string, string, string];
  found: readonly [boolean, boolean, boolean];
}

const PROBLEMS: Record<string, Problem> = {
  'problem-1': { a: 48, c: 67, labels: ['48°', 'x = 65°', '67°'], found: [false, true, false] },
  'problem-2': { a: 40, c: 80, labels: ['2x = 40°', '3x = 60°', '4x = 80°'], found: [true, true, true] },
  'problem-3': { a: 70, c: 70, labels: ['y = 70°', '40°', 'y = 70°'], found: [true, false, true] },
  'problem-4': { a: 35, c: 55, labels: ['35°', '90°', '55°'], found: [false, false, true] },
};
const STEPS = Object.keys(PROBLEMS);

function TriangleAngleExamples(): JSX.Element {
  const { viewport, invalidate } = useThree();
  const animOn = useAnimOn();
  const step = useStep();
  const ink = useToken('--text');
  const colors = [useToken('--accent'), useToken('--trail'), useToken('--ok')] as const;

  // Before the reader picks a problem, the first one is on show.
  const problem = PROBLEMS[step ?? STEPS[0]] ?? PROBLEMS[STEPS[0]];
  const goal = useMemo(
    () => shaped(problem.a, problem.c, viewport.width - 3, viewport.height - 2.6),
    [problem, viewport.width, viewport.height],
  );
  const [tri, setTri] = useState<Tri>(goal);
  const goalNow = useRef(goal);
  goalNow.current = goal;
  const triNow = useRef(tri);
  triNow.current = tri;

  useEffect(() => invalidate(), [goal, invalidate]);

  useFrame((_, delta) => {
    const to = goalNow.current;
    const now = triNow.current;
    if (now === to) return;
    const next = now.map((p, i) => p.map((v, j) => (animOn ? ease(v, to[i][j], delta, 5) : to[i][j]))) as unknown as Tri;
    const arrived = next.every((p, i) => Math.hypot(p[0] - to[i][0], p[1] - to[i][1]) < 1e-3);
    setTri(arrived ? to : next);
    if (!arrived) invalidate();
  });

  const ks = corners(tri);
  const outline = useMemo(() => [...tri, tri[0]].map((p) => at3(p, 0.01)), [tri]);

  return (
    <>
      {ks.map((k, i) => (
        <group key={i} position={at3(tri[i])}>
          <Sector k={k} color={colors[i]} />
        </group>
      ))}
      <Line points={outline} color={ink} lineWidth={2} />
      {tri.map((p, i) => (
        <group key={i}>
          <mesh position={at3(p, 0.04)}>
            <circleGeometry args={[0.13, 24]} />
            <meshBasicMaterial color={ink} />
          </mesh>
          <Label at={letterAt(p, ks[i])}>{NAMES[i]}</Label>
          <Label at={numberAt(p, ks[i])} found={problem.found[i]}>
            {problem.labels[i]}
          </Label>
        </group>
      ))}
    </>
  );
}

export default defineScene({
  camera: '2d',
  steps: STEPS,
  strings: { en: {}, uk: {} },
  Component: TriangleAngleExamples,
});
