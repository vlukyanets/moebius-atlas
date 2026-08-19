import { useEffect, useRef, useState, type ReactNode } from 'react';
import { UI, tr, useLang, type L10n, type Lang } from '../i18n';
import { useSettings, type Settings } from '../settings';

/** Simplified Union Jack - flag emojis don't render on Windows. */
const FlagGB = () => (
  <svg className="flag" viewBox="0 0 60 40" aria-hidden="true">
    <rect width="60" height="40" fill="#012169" />
    <path stroke="#fff" strokeWidth="8" d="M0 0 60 40M60 0 0 40" />
    <path stroke="#C8102E" strokeWidth="4" d="M0 0 60 40M60 0 0 40" />
    <path stroke="#fff" strokeWidth="14" d="M30 0v40M0 20h60" />
    <path stroke="#C8102E" strokeWidth="8" d="M30 0v40M0 20h60" />
  </svg>
);

const FlagUA = () => (
  <svg className="flag" viewBox="0 0 60 40" aria-hidden="true">
    <rect width="60" height="20" fill="#005BBB" />
    <rect y="20" width="60" height="20" fill="#FFD500" />
  </svg>
);

export function SettingsMenu() {
  const lang = useLang();
  const { settings, update } = useSettings();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const seg = <V extends string>(
    opts: { v: V; label: string; icon?: ReactNode }[],
    cur: V,
    set: (v: V) => void,
  ) => (
    <div className="seg">
      {opts.map((o) => (
        <button key={o.v} className={cur === o.v ? 'on' : ''} onClick={() => set(o.v)}>
          {o.icon}
          {o.label}
        </button>
      ))}
    </div>
  );
  const L = (s: L10n) => tr(s, lang);

  return (
    <div className="settings" ref={ref}>
      <button
        className="settings-btn"
        title={L(UI.settings)}
        aria-label={L(UI.settings)}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>
      {open && (
        <div className="settings-panel" role="menu">
          <div className="settings-row">
            <div className="lbl">{L(UI.setLang)}</div>
            {seg<Lang>(
              [
                { v: 'en', label: 'English', icon: <FlagGB /> },
                { v: 'uk', label: 'Українська', icon: <FlagUA /> },
              ],
              settings.lang ?? lang,
              (v) => update({ lang: v }),
            )}
          </div>
          <div className="settings-row">
            <div className="lbl">{L(UI.setTheme)}</div>
            {seg<Settings['theme']>(
              [
                { v: 'auto', label: L(UI.optAuto) },
                { v: 'dark', label: L(UI.optDark) },
                { v: 'light', label: L(UI.optLight) },
              ],
              settings.theme,
              (v) => update({ theme: v }),
            )}
          </div>
          <div className="settings-row">
            <div className="lbl">{L(UI.setAnim)}</div>
            {seg<Settings['anim']>(
              [
                { v: 'auto', label: L(UI.optAuto) },
                { v: 'on', label: L(UI.optOn) },
                { v: 'off', label: L(UI.optOff) },
              ],
              settings.anim,
              (v) => update({ anim: v }),
            )}
          </div>
          <div className="settings-row">
            <div className="lbl">{L(UI.setText)}</div>
            {seg<Settings['text']>(
              [
                { v: 'normal', label: L(UI.optNormal) },
                { v: 'large', label: L(UI.optLarge) },
                { v: 'xlarge', label: L(UI.optXLarge) },
              ],
              settings.text,
              (v) => update({ text: v }),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
