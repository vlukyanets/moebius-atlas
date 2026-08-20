import { createContext, useContext } from 'react';
import type { Lang } from './i18n';

/** How a prerequisite path is drawn. Outlives the page: the reader picks a
 * layout once and every path view - here and in whatever comes later - opens
 * in it. `rings` is not drawn yet and falls back to the stacked lanes. */
export type PathLayout = 'steps' | 'tree' | 'rings';

/**
 * User preferences, persisted in localStorage. `lang: null` and the 'auto'
 * values mean "follow the browser/system"; explicit values override it.
 * The same storage key is read by the pre-paint script in index.html to
 * avoid a theme flash on load - keep the key and value shapes in sync.
 * `pathLayout` is not stamped on <html> and so is none of that script's
 * business - it is read once React is up.
 */
export interface Settings {
  lang: Lang | null;
  theme: 'auto' | 'dark' | 'light';
  anim: 'auto' | 'on' | 'off';
  text: 'normal' | 'large' | 'xlarge';
  pathLayout: PathLayout;
}

export const DEFAULT_SETTINGS: Settings = {
  lang: null,
  theme: 'auto',
  anim: 'auto',
  text: 'normal',
  pathLayout: 'steps',
};

const KEY = 'moebius-atlas-settings';

export function loadSettings(): Settings {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) ?? '{}');
    return { ...DEFAULT_SETTINGS, ...raw };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(s: Settings): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* private mode etc. - settings just won't persist */
  }
}

/** Resolve 'auto' values against system preferences and stamp <html>. */
export function applySettings(s: Settings): void {
  const root = document.documentElement;
  root.dataset.theme =
    s.theme === 'auto'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : s.theme;
  root.dataset.anim =
    s.anim === 'auto'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'off'
        : 'on'
      : s.anim;
  root.dataset.text = s.text;
}

export interface SettingsCtx {
  settings: Settings;
  update: (patch: Partial<Settings>) => void;
}

export const SettingsContext = createContext<SettingsCtx>({
  settings: DEFAULT_SETTINGS,
  update: () => {},
});

export const useSettings = (): SettingsCtx => useContext(SettingsContext);
