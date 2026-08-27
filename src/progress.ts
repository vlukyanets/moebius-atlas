/**
 * Learning progress: named profiles, each holding the set of topics its reader
 * has ticked off, plus the switch that shows or hides the checkboxes. Persisted
 * in localStorage under its own key - it is reading history, not a display
 * preference, so it stays out of `Settings` and out of the pre-paint script.
 *
 * A profile is identified by a random (v4) UUID, never by its name: renaming
 * one must not detach it from its ticks, and two profiles may end up sharing a
 * name. There is always at least one profile - an empty record becomes a single
 * `Profile 1`, and so does deleting the last one, except that the replacement
 * is a new profile with a new id rather than the deleted one coming back.
 *
 * A tick is only allowed once every prerequisite of the topic - the whole chain
 * below it, not just the direct edges - is ticked. `markDeep` is the way past
 * that: a reader who already knows the subject answers the checkbox's question
 * instead of walking the chain by hand, and the whole chain is ticked at once.
 * Removing a tick lower down therefore leaves the topics above it inconsistent:
 * they stay marked, but the ground under them is gone. Those show as `broken`
 * instead of `done`, which is what the red cross reports.
 *
 * Every tab of the site holds its own copy of this state, so the copies are
 * kept together through the `storage` event: whoever writes wins, and the other
 * tabs adopt the record verbatim.
 *
 * A reader who signs in with Google gets the same record kept in their Google
 * account as well (`cloud.ts`), and that copy is the higher authority: on every
 * connection it is pulled and installed over whatever this browser held, so a
 * second device shows the marks made on the first rather than merging two
 * histories nobody can untangle. Only an account that has never saved anything
 * is seeded the other way round, from what is in the browser. From then on
 * every local change is written back, and localStorage stays a mirror - the one
 * that keeps the marks readable offline and after signing out.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { N, ancestors } from './data/atlas';
import { useCloud, type CloudInfo } from './cloud';

/** Quiet spell after the last edit before the record is sent to Google. A tick
 *  is rarely alone - a `markDeep` is a whole chain - and each write is a Drive
 *  round trip, so the burst is let finish first. */
const PUSH_MS = 1200;

const KEY = 'moebius-atlas-progress';

/**
 * Profiles are named by their position when created - `Profile 1`, `Profile 2`,
 * ... - and the reader renames them from there. The name is stored data rather
 * than UI chrome, so it is not translated.
 */
const nameFor = (n: number): string => `Profile ${n}`;

/** Checkbox state of a single topic. */
export type Mark = 'none' | 'done' | 'broken';

interface StoredProfile {
  id: string;
  name: string;
  /** Ids marked as learned. */
  done: string[];
}

interface Stored {
  enabled: boolean;
  /** Id of the profile the checkboxes currently belong to. */
  active: string;
  profiles: StoredProfile[];
}

interface Profile {
  id: string;
  name: string;
  done: Set<string>;
}

interface State {
  enabled: boolean;
  active: string;
  profiles: Profile[];
}

/** What the menu needs to draw one row. */
export interface ProfileInfo {
  id: string;
  name: string;
}

/** Ids that no longer exist - a renamed or dropped topic - are discarded. */
const cleanIds = (v: unknown): Set<string> =>
  new Set(Array.isArray(v) ? v.filter((id): id is string => typeof id === 'string' && !!N[id]) : []);

/**
 * Anything read back from storage goes through here: unknown shapes, a record
 * written by an older version (one flat `done` list, no profiles), a cleared
 * key. The result always has a profile and a valid `active`.
 */
function normalize(raw: unknown): State {
  const rec = (raw ?? {}) as Partial<Stored> & { done?: unknown };
  const profiles: Profile[] = [];
  for (const p of Array.isArray(rec.profiles) ? rec.profiles : []) {
    if (!p || typeof p.id !== 'string' || !p.id) continue;
    profiles.push({
      id: p.id,
      name: typeof p.name === 'string' && p.name.trim() ? p.name : nameFor(profiles.length + 1),
      done: cleanIds(p.done),
    });
  }
  // No profiles: either a first visit or the pre-profile record, whose single
  // list of ticks carries over into the first profile rather than being lost.
  if (!profiles.length) profiles.push({ id: uuidv4(), name: nameFor(1), done: cleanIds(rec.done) });

  const active = profiles.some((p) => p.id === rec.active) ? (rec.active as string) : profiles[0].id;
  return { enabled: rec.enabled === true, active, profiles };
}

/** Text from storage or from Google, `null` when it is not a record at all. */
function parse(text: string | null): unknown {
  try {
    return JSON.parse(text ?? 'null');
  } catch {
    return null;
  }
}

const load = (): State => {
  try {
    return normalize(parse(localStorage.getItem(KEY)));
  } catch {
    return normalize(null);
  }
};

const serialize = (s: State): string =>
  JSON.stringify({
    enabled: s.enabled,
    active: s.active,
    profiles: s.profiles.map((p) => ({ id: p.id, name: p.name, done: [...p.done] })),
  } satisfies Stored);

export interface ProgressCtx {
  enabled: boolean;
  setEnabled: (v: boolean) => void;
  /** How the topic's checkbox should render, for the active profile. */
  markOf: (id: string) => Mark;
  /** False while some prerequisite is still unlearned - the tick is refused. */
  canMark: (id: string) => boolean;
  /** Tick an unmarked topic, or clear the mark of a ticked one. */
  toggle: (id: string) => void;
  /** Tick the topic together with every prerequisite it is still missing. */
  markDeep: (id: string) => void;
  /** The prerequisites, at any depth, that are not ticked yet. */
  missing: (id: string) => string[];
  /** Every profile, in creation order. Never empty. */
  profiles: ProfileInfo[];
  activeId: string;
  activate: (id: string) => void;
  /** Adds an empty profile and switches to it. */
  addProfile: () => void;
  /** A blank name is ignored - a row without a label could not be picked. */
  renameProfile: (id: string, name: string) => void;
  /** Deleting the last profile leaves a fresh, empty `Profile 1` behind. */
  removeProfile: (id: string) => void;
  /** Clears every mark of every profile. The profiles and their names stay -
   *  it is the progress that is being reset, not the readers. */
  resetAll: () => void;
  /** Whether there is anything to reset at all. */
  anyMarks: boolean;
  /** The Google account this record is mirrored to, and the way in and out. */
  cloud: CloudInfo;
}

export const ProgressContext = createContext<ProgressCtx>({
  enabled: false,
  setEnabled: () => {},
  markOf: () => 'none',
  canMark: () => false,
  toggle: () => {},
  markDeep: () => {},
  missing: () => [],
  profiles: [],
  activeId: '',
  activate: () => {},
  addProfile: () => {},
  renameProfile: () => {},
  removeProfile: () => {},
  resetAll: () => {},
  anyMarks: false,
  cloud: {
    configured: false,
    status: 'off',
    account: null,
    busy: false,
    signIn: () => {},
    signOut: () => {},
  },
});

export const useProgress = (): ProgressCtx => useContext(ProgressContext);

/** Owns the progress state; App publishes the result through the context. */
export function useProgressStore(): ProgressCtx {
  const [state, setState] = useState(load);
  const { enabled, active, profiles } = state;
  /** What this tab believes is in storage - written by it or by another tab. */
  const mirror = useRef<string | null>(null);
  const cloud = useCloud();
  /** What Google is believed to hold; `null` until the account is read. */
  const remote = useRef<string | null>(null);
  /** False until the pull has happened - nothing may be pushed before it, or
   *  this browser's record would overwrite the account it came to obey. */
  const [synced, setSynced] = useState(false);

  // Written from an effect rather than from the updaters, which stay pure.
  // The switch and the profiles are fields of one record, so flipping the
  // switch rewrites the same profiles - turning tracking off hides the
  // checkboxes and keeps everything that was already learned.
  useEffect(() => {
    const text = serialize(state);
    if (text === mirror.current) return; // adopted from another tab, or unchanged
    mirror.current = text;
    try {
      localStorage.setItem(KEY, text);
    } catch {
      /* private mode etc. - progress just won't survive the page */
    }
  }, [state]);

  // Another tab of the same site edited the record. `storage` only fires in the
  // *other* tabs, so this cannot echo back into a write loop; re-reading the key
  // rather than trusting `newValue` also covers a `clear()`, where it is null.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== null && e.key !== KEY) return;
      const next = load();
      mirror.current = serialize(next);
      setState(next);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Google has just answered: its copy is installed over this browser's, which
  // the effect above then mirrors into localStorage. An account with nothing
  // saved yet is the one case that goes the other way - `remote` is left empty
  // and the push below seeds it with what is already here.
  useEffect(() => {
    if (cloud.status !== 'on' || synced) return;
    let alive = true;
    void (async () => {
      let text: string | null;
      try {
        text = await cloud.pull();
      } catch {
        return; // `cloud` reports the failure; the local record stands
      }
      if (!alive) return;
      if (text !== null) {
        const next = normalize(parse(text));
        remote.current = serialize(next);
        setState(next);
      }
      setSynced(true);
    })();
    return () => {
      alive = false;
    };
  }, [cloud.status, cloud.pull, synced]);

  // Signing out - or losing the connection - puts the pull back on the table,
  // so signing in again re-reads the account rather than trusting a stale copy.
  useEffect(() => {
    if (cloud.status === 'off') {
      remote.current = null;
      setSynced(false);
    }
  }, [cloud.status]);

  // Every later change goes back up, once the edits have stopped coming.
  useEffect(() => {
    if (!synced || cloud.status === 'off') return;
    const text = serialize(state);
    if (text === remote.current) return;
    const timer = setTimeout(() => {
      remote.current = text;
      // A failed write is reported by `cloud` and the record is left as the
      // next edit finds it; localStorage has it either way.
      void cloud.push(text).catch(() => {
        if (remote.current === text) remote.current = null;
      });
    }, PUSH_MS);
    return () => clearTimeout(timer);
  }, [state, synced, cloud.status, cloud.push]);

  const setEnabled = useCallback((v: boolean) => {
    setState((prev) => ({ ...prev, enabled: v }));
  }, []);

  /** Rewrites the ticks of the active profile; `null` means "leave as is". */
  const patchActive = useCallback((fn: (done: Set<string>) => Set<string> | null) => {
    setState((prev) => {
      const i = prev.profiles.findIndex((p) => p.id === prev.active);
      if (i < 0) return prev;
      const done = fn(prev.profiles[i].done);
      if (!done) return prev;
      const next = [...prev.profiles];
      next[i] = { ...next[i], done };
      return { ...prev, profiles: next };
    });
  }, []);

  const toggle = useCallback(
    (id: string) => {
      patchActive((done) => {
        const next = new Set(done);
        if (next.has(id)) next.delete(id);
        else if (ancestors(id).every((p) => next.has(p))) next.add(id);
        else return null;
        return next;
      });
    },
    [patchActive],
  );

  // The reader has answered the question the checkbox asked: the whole chain
  // below the topic counts as learned, so it is ticked in one write.
  const markDeep = useCallback(
    (id: string) => {
      patchActive((done) => {
        const next = new Set(done);
        for (const p of ancestors(id)) next.add(p);
        next.add(id);
        return next;
      });
    },
    [patchActive],
  );

  const activate = useCallback((id: string) => {
    setState((prev) => (prev.profiles.some((p) => p.id === id) ? { ...prev, active: id } : prev));
  }, []);

  const addProfile = useCallback(() => {
    setState((prev) => {
      const created: Profile = { id: uuidv4(), name: nameFor(prev.profiles.length + 1), done: new Set() };
      return { ...prev, active: created.id, profiles: [...prev.profiles, created] };
    });
  }, []);

  const renameProfile = useCallback((id: string, name: string) => {
    const clean = name.trim();
    if (!clean) return;
    setState((prev) => ({
      ...prev,
      profiles: prev.profiles.map((p) => (p.id === id ? { ...p, name: clean } : p)),
    }));
  }, []);

  // Every profile is emptied, not just the active one: the reset is offered
  // next to the tracking switch, which is not a per-profile control either.
  // A profile with nothing ticked is returned as it was, so a record that was
  // already empty is not rewritten - and so nothing is pushed to Google.
  const resetAll = useCallback(() => {
    setState((prev) =>
      prev.profiles.every((p) => !p.done.size)
        ? prev
        : { ...prev, profiles: prev.profiles.map((p) => (p.done.size ? { ...p, done: new Set<string>() } : p)) },
    );
  }, []);

  const removeProfile = useCallback((id: string) => {
    setState((prev) => {
      const rest = prev.profiles.filter((p) => p.id !== id);
      if (rest.length === prev.profiles.length) return prev;
      if (!rest.length) rest.push({ id: uuidv4(), name: nameFor(1), done: new Set() });
      const active = rest.some((p) => p.id === prev.active) ? prev.active : rest[0].id;
      return { ...prev, active, profiles: rest };
    });
  }, []);

  return useMemo(() => {
    const done = profiles.find((p) => p.id === active)?.done ?? new Set<string>();
    return {
      enabled,
      setEnabled,
      markOf: (id) => (!done.has(id) ? 'none' : ancestors(id).every((p) => done.has(p)) ? 'done' : 'broken'),
      canMark: (id) => done.has(id) || ancestors(id).every((p) => done.has(p)),
      toggle,
      markDeep,
      missing: (id) => ancestors(id).filter((p) => !done.has(p)),
      profiles: profiles.map(({ id, name }) => ({ id, name })),
      activeId: active,
      activate,
      addProfile,
      renameProfile,
      removeProfile,
      resetAll,
      anyMarks: profiles.some((p) => p.done.size > 0),
      cloud,
    };
  }, [
    enabled,
    active,
    profiles,
    cloud,
    setEnabled,
    toggle,
    markDeep,
    activate,
    addProfile,
    renameProfile,
    removeProfile,
    resetAll,
  ]);
}
