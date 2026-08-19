/**
 * Small line icons drawn inline so they inherit `currentColor` and never
 * depend on a font shipping a given glyph. Stroke widths are tuned for the
 * 14-16px sizes used in the top bar and the detail meta line.
 */

/** Magnifier - search field affordance. */
export function SearchIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="4.5" />
      <path d="M10.4 10.4 14 14" />
    </svg>
  );
}

/** Hourglass - the year a statement was discovered. */
export function EraIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 1.8h8M4 14.2h8" />
      <path d="M4.8 1.8v2.6L8 8l3.2-3.6V1.8" />
      <path d="M4.8 14.2v-2.6L8 8l3.2 3.6v2.6" />
      <path d="M6.1 12.6h3.8" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/** Open book - the school year a topic is taught in. */
export function GradeIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 4.2v9.3" />
      <path d="M8 4.2C6.7 3.1 5.1 2.6 3 2.6v8.9c2.1 0 3.7.5 5 1.6" />
      <path d="M8 4.2c1.3-1.1 2.9-1.6 5-1.6v8.9c-2.1 0-3.7.5-5 1.6" />
    </svg>
  );
}
