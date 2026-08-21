/**
 * Icon registry. Every drawing lives in `src/icons/<name>.svg`; nothing here is
 * hand-written markup. The files are pulled in with Vite's `?raw` suffix and
 * inlined into the document, which keeps two properties the alternatives lose:
 * `currentColor` still follows the surrounding text (an `<img>` would not), and
 * no extra dependency is needed (`?react` would mean adding svgr).
 *
 * The sources are build-time assets, never user input, so inlining them is safe.
 * Size comes from `--icon-size`; the stylesheet stretches the SVG to the box.
 */
import type { CSSProperties } from 'react';
import arrows from '../icons/arrows.svg?raw';
import arrowsOff from '../icons/arrows-off.svg?raw';
import check from '../icons/check.svg?raw';
import cross from '../icons/cross.svg?raw';
import edit from '../icons/edit.svg?raw';
import era from '../icons/era.svg?raw';
import flagGb from '../icons/flag-gb.svg?raw';
import flagUa from '../icons/flag-ua.svg?raw';
import fullscreen from '../icons/fullscreen.svg?raw';
import fullscreenExit from '../icons/fullscreen-exit.svg?raw';
import grade from '../icons/grade.svg?raw';
import logo from '../icons/logo.svg?raw';
import minus from '../icons/minus.svg?raw';
import pathRings from '../icons/path-rings.svg?raw';
import pathSteps from '../icons/path-steps.svg?raw';
import pathTree from '../icons/path-tree.svg?raw';
import plus from '../icons/plus.svg?raw';
import progress from '../icons/progress.svg?raw';
import recenter from '../icons/recenter.svg?raw';
import question from '../icons/question.svg?raw';
import search from '../icons/search.svg?raw';
import settings from '../icons/settings.svg?raw';
import trash from '../icons/trash.svg?raw';

const SOURCES = {
  /** Magnifier - search field affordance. */
  search,
  /** Hourglass - the year a statement was discovered. */
  era,
  /** Open book - the school year a topic is taught in. */
  grade,
  /** Gear - the settings menu. */
  settings,
  /** Rising line - the progress menu. */
  progress,
  /** Stacked lanes, branching nodes, concentric rings - the path layouts. */
  'path-steps': pathSteps,
  'path-tree': pathTree,
  'path-rings': pathRings,
  /** Crosshair and the two zoom steps - the tools floating over the tree. */
  recenter,
  minus,
  /** Arrow, and the same arrow struck out - the edge-visibility toggle. */
  arrows,
  'arrows-off': arrowsOff,
  /** Corners pushed out and pulled back in - the field's fullscreen toggle. */
  fullscreen,
  'fullscreen-exit': fullscreenExit,
  /** Progress marks. */
  check,
  cross,
  /** Progress-profile row actions: rename, add, delete, confirm the delete. */
  edit,
  plus,
  trash,
  question,
  /** Simplified flags - flag emojis don't render on Windows. */
  'flag-gb': flagGb,
  'flag-ua': flagUa,
  /** The brand mark; `public/logo.svg` is the same drawing as the favicon. */
  logo,
} satisfies Record<string, string>;

export type IconName = keyof typeof SOURCES;

interface Props {
  name: IconName;
  /** Box side in px. Omitted means the CSS default (or a rule of its own). */
  size?: number;
  className?: string;
  /** Present for a meaningful icon; without it the icon is decorative. */
  label?: string;
}

export function Icon({ name, size, className, label }: Props): JSX.Element {
  return (
    <span
      className={className ? `svg-icon ${className}` : 'svg-icon'}
      style={size ? ({ '--icon-size': `${size}px` } as CSSProperties) : undefined}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      dangerouslySetInnerHTML={{ __html: SOURCES[name] }}
    />
  );
}
