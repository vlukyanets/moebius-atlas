/**
 * The rounding rule played out on the lesson's own Worked Example number
 * (4278, rounded to the nearest hundred): highlight the place being rounded
 * and the one digit that decides it, then show that digit obey the decision
 * while every digit after it turns to zero. Stepping back undoes the reveal
 * one stage at a time, the same two-stage shape as `DigitTowers`.
 */
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { UI, tr, useLang } from '../i18n';

const DIGITS = [4, 2, 7, 8];
const ROUND_PLACE = 1; // the hundreds digit - what we're rounding to
const DECIDER = ROUND_PLACE + 1; // the tens digit - the one that decides

const ROUNDS_UP = DIGITS[DECIDER] >= 5;
const RESULT = DIGITS.map((d, i) => {
  if (i < ROUND_PLACE) return d;
  if (i === ROUND_PLACE) return ROUNDS_UP ? d + 1 : d;
  return 0;
});

const TOP = 40;
const BLOCK_W = 56;
const BLOCK_H = 44;
const GAP = 6;
const START_X = 19;

type BlockState = 'pending' | 'current' | 'decider' | 'win' | 'lose' | 'matched';

export function RoundingDigits(): JSX.Element {
  const lang = useLang();
  // -1: idle. 0: the target place and the decider are picked out. 1: the
  // decision has been applied - the tail is zero.
  const [step, setStep] = useState(-1);

  const atEnd = step === 1;
  const stepForward = (): void => {
    if (atEnd) return;
    setStep((s) => Math.min(s + 1, 1) as -1 | 0 | 1);
  };
  const stepBack = (): void => setStep((s) => Math.max(s - 1, -1) as -1 | 0 | 1);
  const reset = (): void => setStep(-1);

  const blockState = (i: number): BlockState => {
    if (step === 1) {
      if (i < ROUND_PLACE) return 'matched';
      return i === ROUND_PLACE ? 'win' : 'lose';
    }
    if (step === 0) {
      if (i === ROUND_PLACE) return 'current';
      if (i === DECIDER) return 'decider';
    }
    return 'pending';
  };

  const digitAt = (i: number): number => (step === 1 ? RESULT[i] : DIGITS[i]);

  return (
    <div className="anim-block">
      <svg viewBox="0 0 280 170" className="anim-canvas" aria-hidden="true">
        {DIGITS.map((_, i) => {
          const x = START_X + i * (BLOCK_W + GAP);
          const state = blockState(i);
          return (
            <g key={i} className={`anim-tower-block anim-tower-block--${state}`}>
              <rect x={x} y={TOP} width={BLOCK_W} height={BLOCK_H} rx={8} />
              <motion.text
                key={`${i}-${digitAt(i)}`}
                x={x + BLOCK_W / 2}
                y={TOP + BLOCK_H / 2 + 6}
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                {digitAt(i)}
              </motion.text>
              {state === 'current' && (
                <text x={x + BLOCK_W / 2} y={TOP - 10} textAnchor="middle" className="anim-place-label">
                  {tr(UI.animRoundTarget, lang)}
                </text>
              )}
              {state === 'decider' && (
                <text x={x + BLOCK_W / 2} y={TOP - 10} textAnchor="middle" className="anim-place-label">
                  {tr(UI.animRoundDecider, lang)}
                </text>
              )}
            </g>
          );
        })}
        <AnimatePresence>
          {step === 1 && (
            <motion.text
              key="result"
              x={140}
              y={TOP + BLOCK_H + 40}
              textAnchor="middle"
              className="anim-symbol"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
            >
              → {RESULT.join('')}
            </motion.text>
          )}
        </AnimatePresence>
      </svg>
      <div className="anim-controls">
        <button type="button" className="chip-btn" onClick={stepBack} disabled={step === -1}>
          {tr(UI.animStepBack, lang)}
        </button>
        <button type="button" className="chip-btn" onClick={stepForward} disabled={atEnd}>
          {tr(UI.animStepForward, lang)}
        </button>
        <button type="button" className="chip-btn" onClick={reset} disabled={step === -1}>
          {tr(UI.animReset, lang)}
        </button>
      </div>
    </div>
  );
}
