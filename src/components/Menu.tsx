/**
 * The small menu toolkit shared by the top-bar menus (settings, progress) and
 * by the segmented switches inside them: an icon button that opens a panel
 * below its right edge, a labelled row, and a one-of-many button group.
 */
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Icon, type IconName } from './Icons';

interface MenuProps {
  icon: IconName;
  /** Button tooltip and accessible name. */
  label: string;
  children: ReactNode;
}

export function PopoverMenu({ icon, label, children }: MenuProps): JSX.Element {
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

  return (
    <div className="menu" ref={ref}>
      <button
        className="menu-btn"
        title={label}
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Icon name={icon} size={18} />
      </button>
      {open && (
        <div className="menu-panel" role="menu">
          {children}
        </div>
      )}
    </div>
  );
}

export function MenuRow({ label, children }: { label: string; children: ReactNode }): JSX.Element {
  return (
    <div className="menu-row">
      <div className="lbl">{label}</div>
      {children}
    </div>
  );
}

export interface SegOption<V extends string> {
  v: V;
  /** Empty for an icon-only button - then `title` carries the meaning. */
  label: string;
  icon?: ReactNode;
  title?: string;
}

/** One-of-many switch: the current value is the raised button. */
export function Segmented<V extends string>({
  options,
  value,
  onChange,
  className,
}: {
  options: SegOption<V>[];
  value: V;
  onChange: (v: V) => void;
  className?: string;
}): JSX.Element {
  return (
    <div className={className ? `seg ${className}` : 'seg'}>
      {options.map((o) => (
        <button
          key={o.v}
          className={value === o.v ? 'on' : ''}
          title={o.title}
          aria-label={o.title}
          aria-pressed={value === o.v}
          onClick={() => onChange(o.v)}
        >
          {o.icon}
          {o.label}
        </button>
      ))}
    </div>
  );
}
