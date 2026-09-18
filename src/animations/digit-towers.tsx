/**
 * The two-towers-of-blocks idea from the Big Idea section of
 * grade-5-topic-2-lesson-2-comparing-natural-numbers, played out on the
 * lesson's own Worked Example numbers (4278 vs 4269): count the blocks
 * first, then - since both towers are the same height - climb down from the
 * top until the first block that differs settles it.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { UI, tr, useLang } from '../i18n';
import { useAnimOn } from './useAnimOn';

const A = [4, 2, 7, 8];
const B = [4, 2, 6, 9];

const TOP = 20;
const BLOCK_H = 34;
const GAP = 4;
const BLOCK_W = 70;
const TOWER_A_X = 20;
const TOWER_B_X = 190;

const decidedAt = A.findIndex((d, i) => d !== B[i]);

type BlockState = 'pending' | 'current' | 'matched' | 'win' | 'lose';

export function DigitTowers(): JSX.Element {
  const lang = useLang();
  // -1: idle: 0: counting the blocks; 1..A.length: comparing index (step - 1)
  const [step, setStep] = useState(-1);
  // The walk's own delay between levels - collapses to 0 with the reader's
  // `anim` setting off, same as the marble merge's spring/tween durations.
  const stepDelay = useAnimOn() ? 650 : 0;

  const comparingIdx = step >= 1 ? step - 1 : -1;
  const decided = decidedAt >= 0 && comparingIdx === decidedAt;
  const finished = decidedAt === -1 && step > A.length;

  useEffect(() => {
    if (step < 0 || step > A.length) return;
    const idx = step - 1;
    if (idx >= 0 && A[idx] !== B[idx]) return; // decided - stop advancing
    const t = setTimeout(() => setStep((s) => s + 1), stepDelay);
    return () => clearTimeout(t);
  }, [step, stepDelay]);

  const blockState = (mine: number[], other: number[], i: number): BlockState => {
    if (decided && i === decidedAt) return mine[i] > other[i] ? 'win' : 'lose';
    if (finished || i < comparingIdx) return 'matched';
    if (i === comparingIdx) return 'current';
    return 'pending';
  };

  const winnerIsA = decided ? A[decidedAt] > B[decidedAt] : null;
  const symbol = decided ? (winnerIsA ? '>' : '<') : finished ? '=' : null;

  const tower = (digits: number[], other: number[], x: number): JSX.Element => (
    <g>
      {digits.map((d, i) => (
        <g key={i} className={`anim-tower-block anim-tower-block--${blockState(digits, other, i)}`}>
          <rect x={x} y={TOP + i * (BLOCK_H + GAP)} width={BLOCK_W} height={BLOCK_H} rx={6} />
          <text x={x + BLOCK_W / 2} y={TOP + i * (BLOCK_H + GAP) + BLOCK_H / 2 + 5} textAnchor="middle">
            {d}
          </text>
        </g>
      ))}
    </g>
  );

  const restart = (): void => setStep(step === -1 ? 0 : -1);

  return (
    <div className="anim-block">
      <svg viewBox="0 0 280 210" className="anim-canvas" aria-hidden="true">
        {tower(A, B, TOWER_A_X)}
        {tower(B, A, TOWER_B_X)}
        <AnimatePresence>
          {symbol && (
            <motion.text
              key={symbol}
              x={140}
              y={TOP + 2 * (BLOCK_H + GAP) + BLOCK_H / 2 + 8}
              textAnchor="middle"
              className="anim-symbol"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
            >
              {symbol}
            </motion.text>
          )}
        </AnimatePresence>
      </svg>
      <div className="anim-controls">
        <button type="button" className="chip-btn" onClick={restart}>
          {tr(step === -1 ? UI.animCompare : UI.animReplay, lang)}
        </button>
      </div>
    </div>
  );
}
