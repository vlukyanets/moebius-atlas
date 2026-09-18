/**
 * The "ten small ones become one big one" idea from the Big Idea section of
 * grade-5-topic-1-lesson-1-natural-numbers, played out: marbles collect in
 * the ones jar and, on the tenth, bundle into a single marble that flies over
 * to the tens jar - the regrouping a written digit is shorthand for.
 */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { UI, tr, useLang } from '../i18n';

const JAR_W = 90;
const JAR_TOP = 30;
const JAR_H = 120;
const ROW = 22;
const TENS_X = 20;
const ONES_X = 170;

const dot = (jarX: number, index: number): { cx: number; cy: number } => ({
  cx: jarX + JAR_W / 2 + ((index % 3) - 1) * ROW,
  cy: JAR_TOP + JAR_H - 20 - Math.floor(index / 3) * ROW,
});

const center = (jarX: number): { cx: number; cy: number } => ({
  cx: jarX + JAR_W / 2,
  cy: JAR_TOP + JAR_H / 2,
});

type Phase = 'idle' | 'merging' | 'flying';

export function TenMarblesBundle(): JSX.Element {
  const lang = useLang();
  const [ones, setOnes] = useState(0);
  const [tens, setTens] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');

  const onesFull = tens === 9 && ones === 9;
  const onesCenter = center(ONES_X);
  const tensCenter = center(TENS_X);

  const addOne = (): void => {
    if (phase !== 'idle' || onesFull) return;
    if (ones === 9) setPhase('merging');
    else setOnes((o) => o + 1);
  };

  const reset = (): void => {
    setPhase('idle');
    setOnes(0);
    setTens(0);
  };

  return (
    <div className="anim-block">
      <svg viewBox="0 0 280 190" className="anim-canvas" aria-hidden="true">
        <rect x={TENS_X} y={JAR_TOP} width={JAR_W} height={JAR_H} rx={10} className="anim-jar" />
        <rect x={ONES_X} y={JAR_TOP} width={JAR_W} height={JAR_H} rx={10} className="anim-jar" />
        <text x={TENS_X + JAR_W / 2} y={JAR_TOP + JAR_H + 18} textAnchor="middle" className="anim-place-label">
          {tr(UI.animPlaceTens, lang)}
        </text>
        <text x={ONES_X + JAR_W / 2} y={JAR_TOP + JAR_H + 18} textAnchor="middle" className="anim-place-label">
          {tr(UI.animPlaceOnes, lang)}
        </text>

        {phase !== 'flying' &&
          Array.from({ length: ones }).map((_, i) => {
            const merging = phase === 'merging';
            const p = dot(ONES_X, i);
            return (
              <motion.circle
                key={`ones-${i}`}
                r={8}
                className="anim-marble"
                initial={{ cx: p.cx, cy: p.cy, scale: 0 }}
                animate={
                  merging
                    ? { cx: onesCenter.cx, cy: onesCenter.cy, opacity: 0, scale: 0.6 }
                    : { cx: p.cx, cy: p.cy, opacity: 1, scale: 1 }
                }
                transition={merging ? { duration: 0.35, ease: 'easeInOut' } : { type: 'spring', stiffness: 500, damping: 24 }}
                onAnimationComplete={merging && i === ones - 1 ? () => setPhase('flying') : undefined}
              />
            );
          })}

        {Array.from({ length: tens }).map((_, i) => {
          const p = dot(TENS_X, i);
          return (
            <motion.circle
              key={`tens-${i}`}
              r={8}
              className="anim-marble"
              initial={{ cx: p.cx, cy: p.cy, scale: 0 }}
              animate={{ cx: p.cx, cy: p.cy, scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 24 }}
            />
          );
        })}

        {phase === 'flying' && (
          <motion.circle
            r={10}
            className="anim-marble anim-marble--bundle"
            initial={{ cx: onesCenter.cx, cy: onesCenter.cy, opacity: 1, scale: 1 }}
            animate={{ cx: tensCenter.cx, cy: tensCenter.cy }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              setTens((t) => Math.min(t + 1, 9));
              setOnes(0);
              setPhase('idle');
            }}
          />
        )}

        <text x={140} y={182} textAnchor="middle" className="anim-total">
          {tens * 10 + ones}
        </text>
      </svg>
      <div className="anim-controls">
        <button type="button" className="chip-btn" onClick={addOne} disabled={phase !== 'idle' || onesFull}>
          {tr(UI.animAddOne, lang)}
        </button>
        <button type="button" className="chip-btn" onClick={reset} disabled={ones === 0 && tens === 0}>
          {tr(UI.animReset, lang)}
        </button>
      </div>
    </div>
  );
}
