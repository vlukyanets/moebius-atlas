/**
 * The store one topic body shares between its text and its scenes. The text
 * says which step a scene shows (`[!step]`), points into it (`#<id>:<key>`
 * links) and reads numbers out of it (`\live`); the scene publishes those
 * numbers and the state of its tasks. Neither side imports the other - both
 * talk to this, keyed by the scene's id.
 *
 * One store per body: a new body (another topic, another language) is a new
 * store, so nothing a scene said about one page leaks into the next.
 */
import { createContext, useContext, useSyncExternalStore } from 'react';

export type TaskStatus = { state: 'open' } | { state: 'done' } | { state: 'hint'; text: string };

export interface SceneSlot {
  /** Keys of this scene's `[!step]` blocks, in the order the text has them. */
  steps: readonly string[];
  step: string | null;
  hovered: string | null;
  /** key -> LaTeX fragment. */
  live: Readonly<Record<string, string>>;
  tasks: Readonly<Record<string, TaskStatus>>;
  loaded: boolean;
}

export interface Bus {
  /** Whether the body embeds this scene with an `[!anim]` marker. */
  has(id: string): boolean;
  /** A new object after every change, so it can be a store snapshot. */
  slot(id: string): SceneSlot | undefined;
  subscribe(fn: () => void): () => void;
  setStep(id: string, key: string | null): void;
  stepBy(id: string, delta: 1 | -1): void;
  hover(id: string, key: string | null): void;
  press(id: string, key: string): void;
  onPress(id: string, fn: (key: string) => void): () => void;
  publish(id: string, key: string, latex: string): void;
  setTask(id: string, key: string, status: TaskStatus): void;
  setLoaded(id: string): void;
  /** A key the scene reacts to - only used to warn about links nothing reads. */
  declare(id: string, key: string): void;
  knows(id: string, key: string): boolean;
}

export interface BodyScan {
  scenes: string[];
  steps: Record<string, string[]>;
}

const ANIM_LINE = /^\[!anim\]\s+(\S+)\s*$/gm;
const STEP_LINE = /^>\s*\[!step\]\s+([a-z0-9-]+):([a-z0-9-]+)/gm;

/**
 * Which scenes the body embeds and the order of their steps, read off the
 * source rather than off the rendered tree: the store has to know the order
 * before anything renders, and the step bar under a scene needs the count.
 */
export function scanBody(body: string): BodyScan {
  const scenes = [...new Set([...body.matchAll(ANIM_LINE)].map((m) => m[1]))];
  const steps: Record<string, string[]> = {};
  for (const [, id, key] of body.matchAll(STEP_LINE)) (steps[id] ??= []).push(key);
  return { scenes, steps };
}

export function createBus({ scenes, steps }: BodyScan): Bus {
  const present = new Set(scenes);
  const slots = new Map<string, SceneSlot>();
  const known = new Map<string, Set<string>>();
  const pressers = new Map<string, Set<(key: string) => void>>();
  const listeners = new Set<() => void>();

  for (const id of scenes)
    slots.set(id, { steps: steps[id] ?? [], step: null, hovered: null, live: {}, tasks: {}, loaded: false });

  const patch = (id: string, change: Partial<SceneSlot>): void => {
    const slot = slots.get(id);
    if (!slot) return;
    slots.set(id, { ...slot, ...change });
    listeners.forEach((fn) => fn());
  };

  return {
    has: (id) => present.has(id),
    slot: (id) => slots.get(id),
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    setStep(id, key) {
      if (slots.get(id)?.step !== key) patch(id, { step: key });
    },
    // The steps are walked as one line - nothing selected, then each step in
    // the order of the text - so the bar's back and forward always undo
    // each other and never wrap round.
    stepBy(id, delta) {
      const slot = slots.get(id);
      if (!slot) return;
      const line = [null, ...slot.steps];
      const at = line.indexOf(slot.step);
      const next = line[Math.min(line.length - 1, Math.max(0, at + delta))];
      if (next !== slot.step) patch(id, { step: next });
    },
    hover(id, key) {
      if (slots.get(id)?.hovered !== key) patch(id, { hovered: key });
    },
    press: (id, key) => pressers.get(id)?.forEach((fn) => fn(key)),
    onPress(id, fn) {
      const set = pressers.get(id) ?? new Set();
      pressers.set(id, set.add(fn));
      return () => set.delete(fn);
    },
    // A scene publishes from its effects on every change of its own state;
    // an unchanged value is not news, and re-rendering the text for it would
    // be work for nothing.
    publish(id, key, latex) {
      const slot = slots.get(id);
      if (slot && slot.live[key] !== latex) patch(id, { live: { ...slot.live, [key]: latex } });
    },
    setTask(id, key, status) {
      const slot = slots.get(id);
      const was = slot?.tasks[key];
      if (!slot || (was && JSON.stringify(was) === JSON.stringify(status))) return;
      patch(id, { tasks: { ...slot.tasks, [key]: status } });
    },
    setLoaded(id) {
      if (slots.get(id)?.loaded === false) patch(id, { loaded: true });
    },
    declare(id, key) {
      const set = known.get(id) ?? new Set();
      known.set(id, set.add(key));
    },
    knows: (id, key) => known.get(id)?.has(key) ?? false,
  };
}

export const BusContext = createContext<Bus | null>(null);
export const useBus = (): Bus | null => useContext(BusContext);

const noSubscribe = (): (() => void) => () => {};

/** Re-renders when what `pick` returns from the scene's slot changes. */
export function useSlot<T>(id: string, pick: (s: SceneSlot | undefined) => T): T {
  const bus = useBus();
  const snapshot = (): T => pick(bus?.slot(id));
  return useSyncExternalStore(bus ? bus.subscribe : noSubscribe, snapshot, snapshot);
}
