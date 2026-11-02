/**
 * The text's side of a scene: what `components/Markdown.tsx` draws for a
 * `[!step]` block, a `[!task]` block, a `#<id>:<key>` link and a formula with
 * `\live` in it. Each reads and writes the body's store (`bus.ts`); none of
 * them knows what a scene draws.
 *
 * A reference to a scene the body does not embed is drawn as an error, the
 * way an unread spoiler marker is - an authoring bug on the page rather than
 * a block that silently does nothing.
 */
import katex from 'katex';
import { useMemo, useSyncExternalStore, type KeyboardEvent, type ReactNode } from 'react';
import { Icon } from '../components/Icons';
import { UI, tr, useLang } from '../i18n';
import { useAnimOn } from './animOn';
import { useBus, useSlot } from './bus';
import { expandLive } from './live';

const classes = (...names: (string | false)[]): string => names.filter(Boolean).join(' ');

/**
 * Enter and Space press a block that acts as a button, as they would a button -
 * but only when the block itself has the focus: a link inside it handles its
 * own keys, and taking them from it would leave the link dead to the keyboard.
 */
const onActivate = (fn: () => void) => (e: KeyboardEvent): void => {
  if (e.target !== e.currentTarget || (e.key !== 'Enter' && e.key !== ' ')) return;
  e.preventDefault();
  fn();
};

interface StepProps {
  scene: string;
  stepKey: string;
  children?: ReactNode;
}

export function StepBlock({ scene, stepKey, children }: StepProps): JSX.Element {
  const bus = useBus();
  const lang = useLang();
  const current = useSlot(scene, (s) => s?.step === stepKey);
  if (!bus?.has(scene))
    return (
      <div className="scene-step scene-ref-error" title={tr(UI.sceneRefMissing, lang)}>
        {children}
      </div>
    );
  const choose = (): void => bus.setStep(scene, stepKey);
  return (
    <div
      className={classes('scene-step', current && 'is-current')}
      role="button"
      tabIndex={0}
      aria-pressed={current}
      onClick={choose}
      onKeyDown={onActivate(choose)}
    >
      {children}
    </div>
  );
}

interface TaskProps {
  scene: string;
  taskKey: string;
  children?: ReactNode;
}

export function TaskBlock({ scene, taskKey, children }: TaskProps): JSX.Element {
  const bus = useBus();
  const lang = useLang();
  const status = useSlot(scene, (s) => s?.tasks[taskKey]);
  if (!bus?.has(scene))
    return (
      <div className="scene-task scene-ref-error" title={tr(UI.sceneRefMissing, lang)}>
        {children}
      </div>
    );
  const state = status?.state ?? 'open';
  return (
    <div className={classes('scene-task', state === 'done' && 'is-done', state === 'hint' && 'is-hint')}>
      {children}
      <div className="scene-task-status" aria-live="polite">
        <Icon name={state === 'done' ? 'check' : 'question'} size={14} />
        {status?.state === 'hint' ? status.text : tr(state === 'done' ? UI.sceneTaskDone : UI.sceneTaskOpen, lang)}
      </div>
    </div>
  );
}

interface LinkProps {
  scene: string;
  sceneKey: string;
  href: string;
  children?: ReactNode;
}

export function SceneLink({ scene, sceneKey, href, children }: LinkProps): JSX.Element {
  const bus = useBus();
  const lang = useLang();
  const animOn = useAnimOn();
  if (!bus?.has(scene))
    return (
      <a className="scene-link scene-ref-error" href={href} title={tr(UI.sceneRefMissing, lang)} onClick={(e) => e.preventDefault()}>
        {children}
      </a>
    );

  const enter = (): void => {
    if (import.meta.env.DEV && bus.slot(scene)?.loaded && !bus.knows(scene, sceneKey))
      console.warn(`[scene] ${scene} does not react to "${sceneKey}"`);
    bus.hover(scene, sceneKey);
  };
  const leave = (): void => bus.hover(scene, null);
  const press = (): void => {
    // The scene is what the link is about, so a reader who cannot see it is
    // taken to it first.
    const box = document.getElementById(`scene-${scene}`)?.getBoundingClientRect();
    if (box && (box.bottom < 0 || box.top > window.innerHeight))
      document.getElementById(`scene-${scene}`)?.scrollIntoView({ block: 'center', behavior: animOn ? 'smooth' : 'auto' });
    bus.press(scene, sceneKey);
  };

  return (
    <a
      className="scene-link"
      href={href}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
      onClick={(e) => {
        e.preventDefault();
        press();
      }}
    >
      {children}
    </a>
  );
}

const noSubscribe = (): (() => void) => () => {};

/** A formula with `\live` in it, re-typeset whenever one of its values moves. */
export function LiveMath({ tex, display }: { tex: string; display: boolean }): JSX.Element {
  const bus = useBus();
  // The expanded TeX is itself the snapshot: a string, so equal values do
  // not re-render, and a value that did not change the formula costs nothing.
  const snapshot = (): string => expandLive(tex, (scene, key) => bus?.slot(scene)?.live[key]);
  const expanded = useSyncExternalStore(bus ? bus.subscribe : noSubscribe, snapshot, snapshot);
  const html = useMemo(
    () => katex.renderToString(expanded, { displayMode: display, throwOnError: false }),
    [expanded, display],
  );
  return display ? <div dangerouslySetInnerHTML={{ __html: html }} /> : <span dangerouslySetInnerHTML={{ __html: html }} />;
}
