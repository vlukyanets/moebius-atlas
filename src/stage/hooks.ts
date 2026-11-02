/**
 * Everything a scene component reads from and says to the page it is on. A
 * scene only ever uses these: it never touches the body's store, the
 * settings or the language directly, so the host can hand it a page and a
 * scene can be read without knowing how the page is built.
 *
 * The context is provided by the host *inside* `<Canvas>`. React Three Fiber
 * renders through a reconciler of its own, and passing the context in
 * explicitly is surer than relying on it to bridge the DOM tree's.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useSyncExternalStore } from 'react';
import { Color, MathUtils } from 'three';
import type { Lang } from '../i18n';
import type { Bus, TaskStatus } from './bus';

export { useAnimOn } from './animOn';

export interface SceneCtx {
  id: string;
  bus: Bus;
  lang: Lang;
  strings: Record<string, string>;
  /** `token` is whoever asks; the canvas runs while anyone does. */
  setLoop: (token: object, on: boolean) => void;
}

export const SceneContext = createContext<SceneCtx | null>(null);

function useScene(): SceneCtx {
  const ctx = useContext(SceneContext);
  if (!ctx) throw new Error('A scene hook was used outside a scene');
  return ctx;
}

/** Reads one value out of this scene's slot and re-renders when it changes. */
function usePick<T>(pick: (bus: Bus, id: string) => T): T {
  const { bus, id } = useScene();
  const snapshot = (): T => pick(bus, id);
  return useSyncExternalStore(bus.subscribe, snapshot, snapshot);
}

/** The key of the step the text has chosen, or null before any. */
export const useStep = (): string | null => usePick((bus, id) => bus.slot(id)?.step ?? null);

export function useHovered(key: string): boolean {
  const { bus, id } = useScene();
  useEffect(() => bus.declare(id, key), [bus, id, key]);
  return usePick((b, i) => b.slot(i)?.hovered === key);
}

export function usePressed(key: string, fn: () => void): void {
  const { bus, id } = useScene();
  // The latest `fn` is called without re-subscribing on every render.
  const latest = useRef(fn);
  latest.current = fn;
  useEffect(() => {
    bus.declare(id, key);
    return bus.onPress(id, (pressed) => {
      if (pressed === key) latest.current();
    });
  }, [bus, id, key]);
}

/** Sets the LaTeX a `\live{<scene>:<key>}` in the text shows. */
export function usePublish(): (key: string, latex: string) => void {
  const { bus, id } = useScene();
  return useCallback(
    (key: string, latex: string) => {
      bus.declare(id, key);
      bus.publish(id, key, latex);
    },
    [bus, id],
  );
}

export function useTask(key: string): (status: TaskStatus) => void {
  const { bus, id } = useScene();
  useEffect(() => bus.declare(id, key), [bus, id, key]);
  return useCallback((status: TaskStatus) => bus.setTask(id, key, status), [bus, id, key]);
}

export const useStrings = <S extends Record<string, string>>(): S => useScene().strings as S;

/** The reader's language. Not i18n's `useLang`: that context is outside the canvas. */
export const useSceneLang = (): Lang => useScene().lang;

/**
 * Keeps the canvas drawing every frame while `active` - for a scene that
 * moves on its own. Everything else draws only when something changed, which
 * is what lets a page full of scenes sit idle. The host still stops the loop
 * when the scene is off screen or the reader turned motion off.
 */
export function useLoop(active: boolean): void {
  const { setLoop } = useScene();
  const token = useRef({});
  useEffect(() => {
    const me = token.current;
    setLoop(me, active);
    return () => setLoop(me, false);
  }, [setLoop, active]);
}

/**
 * The longest stretch of time one frame may move an easing by. With
 * `frameloop="demand"` the first frame after a pause is handed the whole pause
 * as its delta, and an easing fed half a second arrives in that one frame -
 * every transition that starts from rest, which is most of them, would snap.
 */
const MAX_FRAME = 1 / 30;

/** One frame of easing `current` towards `target` - the way a scene moves. */
export const ease = (current: number, target: number, delta: number, lambda = 6): number =>
  MathUtils.damp(current, target, lambda, Math.min(delta, MAX_FRAME));

const readToken = (name: string) => (): string =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

function subscribeTheme(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

/**
 * A design token as a three.js colour. WebGL cannot read CSS, so a scene asks
 * for the token by name and gets it again when the theme changes - which is
 * what keeps a scene from being a dark-mode bug the way a hex in it would be.
 */
export function useToken(name: `--${string}`): Color {
  const read = useMemo(() => readToken(name), [name]);
  const value = useSyncExternalStore(subscribeTheme, read, read);
  return useMemo(() => new Color(value), [value]);
}
