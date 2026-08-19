/**
 * The Moebius Atlas mark: a Möbius band as a figure-eight ribbon with a 3D
 * feel - light-to-shade gradients along each ribbon segment, a receding
 * (darker) under-strand and a soft cast shadow beneath the over-crossing.
 * The same artwork lives in `public/logo.svg` (favicon); keep both in sync.
 */
export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Moebius Atlas">
      <defs>
        <linearGradient id="lg-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f6fd6" />
          <stop offset="1" stopColor="#173f88" />
        </linearGradient>
        <linearGradient id="lg-l" gradientUnits="userSpaceOnUse" x1="8" y1="18" x2="26" y2="46">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#aac4f2" />
        </linearGradient>
        <linearGradient id="lg-r" gradientUnits="userSpaceOnUse" x1="42" y1="16" x2="58" y2="46">
          <stop offset="0" stopColor="#d9e6fb" />
          <stop offset="1" stopColor="#84a9e6" />
        </linearGradient>
        <linearGradient id="lg-u" gradientUnits="userSpaceOnUse" x1="24" y1="22" x2="40" y2="42">
          <stop offset="0" stopColor="#9cb8ec" />
          <stop offset="1" stopColor="#7195d8" />
        </linearGradient>
        <linearGradient id="lg-o" gradientUnits="userSpaceOnUse" x1="40" y1="22" x2="24" y2="42">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#c6d9f8" />
        </linearGradient>
        <filter id="lg-sh" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.7" />
        </filter>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#lg-bg)" />
      <g fill="none" strokeLinecap="round">
        <path d="M24 22 L40 42" stroke="url(#lg-u)" strokeWidth="7" />
        <path d="M24 22 C17 16 8 21 8 32 C8 43 17 48 24 42" stroke="url(#lg-l)" strokeWidth="7" />
        <path d="M40 42 C47 48 56 43 56 32 C56 21 47 16 40 22" stroke="url(#lg-r)" strokeWidth="7" />
        <path d="M36.5 26.5 L27.5 37.5" stroke="#0f3269" strokeWidth="9" opacity="0.5" filter="url(#lg-sh)" />
        <path d="M40 22 L24 42" stroke="url(#lg-o)" strokeWidth="7" />
      </g>
    </svg>
  );
}
