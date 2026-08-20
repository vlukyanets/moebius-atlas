/**
 * The per-topic progress checkbox: empty when the topic is unlearned, a green
 * tick when it is learned, a red cross when it is marked yet something it rests
 * on is not. Renders nothing while progress tracking is off.
 *
 * A locked topic - one whose prerequisites are not all ticked - is not a dead
 * button. Clicking it raises a question next to the box: does the chain below
 * count as learned too? Yes ticks the topic and every prerequisite under it at
 * once; no, a click elsewhere, Escape, a scroll, or simply waiting drops the
 * question and leaves the box exactly as it was. The question is view state -
 * nothing about it is stored.
 *
 * It sits inside rows and pills that navigate on click, so the click stops
 * there - ticking a topic must never open it.
 */
import { useEffect, useRef, useState } from 'react';
import { UI, topicsWord, tr, useLang } from '../i18n';
import { useProgress } from '../progress';
import { Icon } from './Icons';

/** How long an unanswered question stays up. */
const ASK_MS = 6000;

/** Panel width, mirrored in `.progress-ask` - it is clamped to the viewport. */
const ASK_W = 250;

export function ProgressBox({ id }: { id: string }): JSX.Element | null {
  const lang = useLang();
  const { enabled, markOf, canMark, toggle, markDeep, missing } = useProgress();
  // Where the question hangs. The panel is fixed rather than absolute: the box
  // lives inside rows that clip their overflow, which would cut a popup off.
  const [at, setAt] = useState<{ top: number; left: number } | null>(null);
  const box = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!at) return;
    const close = () => setAt(null);
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panel.current?.contains(t) && !box.current?.contains(t)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    // A fixed panel does not travel with the page, so scrolling dismisses it.
    const timer = window.setTimeout(close, ASK_MS);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [at]);

  if (!enabled) return null;

  const mark = markOf(id);
  const locked = mark === 'none' && !canMark(id);
  const gap = at ? missing(id).length : 0;
  const title = tr(
    mark === 'done' ? UI.progDone : mark === 'broken' ? UI.progBroken : locked ? UI.progLocked : UI.progTodo,
    lang,
  );

  const ask = () => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return;
    setAt({ top: r.bottom + 8, left: Math.max(8, Math.min(r.left, window.innerWidth - ASK_W - 8)) });
  };

  return (
    <>
      <button
        ref={box}
        className={`progress-box ${mark}${locked ? ' locked' : ''}${at ? ' asking' : ''}`}
        role="checkbox"
        aria-checked={mark !== 'none'}
        aria-label={title}
        title={title}
        onClick={(e) => {
          e.stopPropagation();
          if (locked) ask();
          else toggle(id);
        }}
      >
        {mark === 'done' && <Icon name="check" />}
        {mark === 'broken' && <Icon name="cross" />}
      </button>
      {at && (
        <div
          ref={panel}
          className="progress-ask"
          role="dialog"
          style={{ top: at.top, left: at.left }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="ask-text">
            <Icon name="question" size={15} />
            <span>{tr(UI.progAsk, lang)}</span>
          </div>
          <div className="ask-actions">
            <span className="count">
              +{gap} {topicsWord(gap, lang)}
            </span>
            <button
              className="yes"
              onClick={() => {
                setAt(null);
                markDeep(id);
              }}
            >
              {tr(UI.optYes, lang)}
            </button>
            <button onClick={() => setAt(null)}>{tr(UI.optNo, lang)}</button>
          </div>
        </div>
      )}
    </>
  );
}
