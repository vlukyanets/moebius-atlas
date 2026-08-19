import type { CSSProperties } from 'react';

/**
 * Tag/track/subject colors come from the data tables, so they reach the
 * stylesheet as custom properties instead of as finished `color`/`background`
 * declarations: the component publishes both palettes and `styles.css` decides
 * which one the active theme uses. Without this the light palette would leak
 * into the dark theme, where those tints are far too bright.
 */
export interface Swatch {
  color: string;
  bg: string;
  colorDark: string;
  bgDark: string;
}

export const swatch = (s: Swatch): CSSProperties =>
  ({
    '--sw': s.color,
    '--sw-bg': s.bg,
    '--sw-dark': s.colorDark,
    '--sw-bg-dark': s.bgDark,
  }) as CSSProperties;
