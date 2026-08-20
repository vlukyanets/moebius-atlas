/**
 * The scrollable field both graph layouts of a prerequisite path are drawn in,
 * and the hover state they share.
 *
 * The field itself holds nothing but the drawing: the caller sizes the canvas
 * and names the point the view opens on, and this pans it with the mouse,
 * zooms it, and puts that point back in the middle on demand. A path is
 * regularly several screens across, so where the field opens is the difference
 * between landing on the target and landing on the left edge of the widest
 * level.
 *
 * The hover helpers live here rather than in either view because both paint the
 * same two tones: what the pointer touches in `--accent`, and the rest of the
 * way up to the target in `--trail`.
 *
 * The arrow toggle sits with the zoom tools for the same reason: it is the same
 * question in both drawings, so it is asked once here and answered by the
 * setting the views read. It only puts the lines away - the cards keep their
 * places, and hovering one still lights the trail up to the target, because
 * that trail is what a reader who hid the lines is left to follow the path by.
 */
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { linkKey, upward, type Link } from '../data/atlas';
import { UI, tr, useLang } from '../i18n';
import { useSettings } from '../settings';
import { Icon } from './Icons';

/** Past this much movement a press is a pan, and the click it ends with is
 *  meant for the field rather than for whatever card it happened to land on. */
const DRAG_SLOP = 3;
/** Zoom bounds. The floor is well past the point where the names can be read:
 *  the deepest paths are the better part of ten thousand pixels across as
 *  rings, and getting the whole shape into the field at once is worth more
 *  there than any one card's title. Above the ceiling a single card fills the
 *  field and the shape is gone. */
const ZOOM_MIN = 0.1;
const ZOOM_MAX = 1.5;
const ZOOM_STEP = 1.2;
/** deltaMode 1 counts lines and 2 counts pages; both have to become pixels
 *  before anything below can measure them. */
const WHEEL_MODE = [1, 16, 400];
/** A wheel event carries a distance, not a number of steps, and the two devices
 *  that produce it are nothing alike: a mouse notch arrives once and is worth a
 *  hundred pixels or more, a trackpad pinch arrives as dozens of deltas of a
 *  few pixels each. Anything past this is a notch and takes a whole step -
 *  giving each pinch delta one is what made the field shoot past both bounds. */
const WHEEL_NOTCH = 50;
/** What a pinch delta of one pixel is worth. A pinch of the width of a small
 *  trackpad is then about two steps, which is roughly the gesture people
 *  expect it to be. */
const PINCH_PIXEL = 12;
const clampZoom = (z: number): number => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));

/**
 * What the pointer rests on. A card lights the edges that touch it; an arrow
 * lights itself and the two cards it joins, which is the only way to tell which
 * pair a line connects once a level is crowded.
 */
export type Hot = { node: string } | { from: string; to: string } | null;

export interface Hover {
  /** 0 plain, 1 trail, 2 hovered - and also the order edges are painted in, so
   *  the line the pointer is on is never left under another one. */
  rank: (e: Link) => number;
  /** The class the card carries on top of its own. */
  nodeClass: (id: string) => string;
}

/** Resolve a hover against the edges a view actually drew. */
export function hover(links: Link[], hot: Hot): Hover {
  const litLink = (e: Link): boolean =>
    hot === null
      ? false
      : 'node' in hot
        ? e.from === hot.node || e.to === hot.node
        : e.from === hot.from && e.to === hot.to;
  const litNode = (id: string): boolean =>
    hot === null ? false : 'node' in hot ? hot.node === id : hot.from === id || hot.to === id;
  // The trail may well include what is lit; both readings below ask about the
  // hover first, so the quieter colour never wins over the accent.
  const trail =
    hot === null
      ? { nodes: new Set<string>(), edges: new Set<string>() }
      : upward(links, 'node' in hot ? hot.node : hot.to);

  return {
    rank: (e) => (litLink(e) ? 2 : trail.edges.has(linkKey(e)) ? 1 : 0),
    nodeClass: (id) => (litNode(id) ? ' hot' : trail.nodes.has(id) ? ' trail' : ''),
  };
}

/** Indexed by `Hover.rank`. */
export const EDGE = ['edge', 'edge trail', 'edge hot'];
export const TIP = ['url(#path-tip)', 'url(#path-tip-trail)', 'url(#path-tip-hot)'];

const tip = (id: string, className: string): JSX.Element => (
  <marker
    id={id}
    className={className}
    viewBox="0 0 8 8"
    refX="8"
    refY="4"
    markerWidth="9"
    markerHeight="9"
    markerUnits="userSpaceOnUse"
    orient="auto"
  >
    <path d="M0 0 L8 4 L0 8 Z" />
  </marker>
);

/** The arrowheads, one per state. Only one layout is on the page at a time, so
 *  the three ids are unique however many edges point at them. */
export function EdgeTips(): JSX.Element {
  return (
    <defs>
      {tip('path-tip', 'tip')}
      {tip('path-tip-trail', 'tip trail')}
      {tip('path-tip-hot', 'tip hot')}
    </defs>
  );
}

interface Props {
  /** The canvas box in unzoomed pixels - the drawing's own numbers. */
  canvas: CSSProperties;
  /** The point the field opens on and returns to, in canvas pixels. A
   *  coordinate the field is not scrolled in simply clamps to its edge. */
  focus: { x: number; y: number };
  /** Identifies the drawing; a change re-centres the field on the new focus. */
  focusKey: string;
  children: ReactNode;
}

export function PathField({ canvas, focus, focusKey, children }: Props): JSX.Element {
  const lang = useLang();
  const { settings, update } = useSettings();
  const arrows = settings.pathArrows;
  const box = useRef<HTMLDivElement>(null);
  const grab = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const panned = useRef(false);
  const [panning, setPanning] = useState(false);
  const [zoom, setZoom] = useState(1);
  /** Where to scroll once the new zoom has been laid out. */
  const anchored = useRef<{ left: number; top: number; behavior: ScrollBehavior } | null>(null);

  // The focus is given in unzoomed coordinates; the scroll box sees them scaled.
  const centreOn = (z: number, behavior: ScrollBehavior): void => {
    const el = box.current;
    if (!el) return;
    el.scrollTo({
      left: focus.x * z - el.clientWidth / 2,
      top: focus.y * z - el.clientHeight / 2,
      behavior,
    });
  };
  // Re-runs when the drawing changes, not on every render. The zoom the reader
  // picked survives it; only the button undoes that.
  useLayoutEffect(() => centreOn(zoom, 'auto'), [focusKey]);

  /** The button is a full undo: the zoom goes back to 1 and the focus back to
   *  the middle, which together is the state the view opened in. */
  const reset = (): void => {
    if (zoom === 1) {
      centreOn(1, 'smooth');
      return;
    }
    const el = box.current;
    if (!el) return;
    anchored.current = {
      left: focus.x - el.clientWidth / 2,
      top: focus.y - el.clientHeight / 2,
      behavior: 'smooth',
    };
    setZoom(1);
  };

  /**
   * Zoom keeps one point of the field still: the pointer for a ctrl-wheel, the
   * middle of the box for the buttons. Without that the drawing would slide out
   * from under the reader on every step. The scroll position it needs can only
   * be set once the browser has laid the new size out, hence the ref and the
   * layout effect below rather than a `scrollTo` right here.
   */
  const applyZoom = (next: number, ax?: number, ay?: number): void => {
    const el = box.current;
    const z = clampZoom(next);
    if (!el || z === zoom) return;
    const r = el.getBoundingClientRect();
    const px = ax === undefined ? el.clientWidth / 2 : ax - r.left;
    const py = ay === undefined ? el.clientHeight / 2 : ay - r.top;
    const k = z / zoom;
    anchored.current = {
      left: (el.scrollLeft + px) * k - px,
      top: (el.scrollTop + py) * k - py,
      behavior: 'auto',
    };
    setZoom(z);
  };

  useLayoutEffect(() => {
    const el = box.current;
    const to = anchored.current;
    if (!el || !to) return;
    anchored.current = null;
    el.scrollTo({ left: to.left, top: to.top, behavior: to.behavior });
  }, [zoom]);

  // Not React's `onWheel`: that one is passive, so it could not take the event
  // away from the browser's own page zoom.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const wheel = (e: WheelEvent): void => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const dy = e.deltaY * (WHEEL_MODE[e.deltaMode] ?? 1);
      const steps = Math.abs(dy) >= WHEEL_NOTCH ? Math.sign(dy) : dy / PINCH_PIXEL;
      applyZoom(zoom * ZOOM_STEP ** -steps, e.clientX, e.clientY);
    };
    el.addEventListener('wheel', wheel, { passive: false });
    return () => el.removeEventListener('wheel', wheel);
  }, [zoom]);

  /**
   * Dragging the field pans it. The listeners live on the window so a pointer
   * that leaves the box mid-drag keeps working, and a drag that started on a
   * card swallows its own click - otherwise letting go would open a topic.
   */
  useEffect(() => {
    if (!panning) return;
    const move = (e: MouseEvent): void => {
      const el = box.current;
      const from = grab.current;
      if (!el || !from) return;
      const dx = e.clientX - from.x;
      const dy = e.clientY - from.y;
      if (Math.abs(dx) > DRAG_SLOP || Math.abs(dy) > DRAG_SLOP) panned.current = true;
      el.scrollLeft = from.left - dx;
      el.scrollTop = from.top - dy;
    };
    const stop = (): void => setPanning(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', stop);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', stop);
    };
  }, [panning]);

  const startPan = (e: React.MouseEvent): void => {
    const el = box.current;
    if (e.button !== 0 || !el) return;
    grab.current = { x: e.clientX, y: e.clientY, left: el.scrollLeft, top: el.scrollTop };
    panned.current = false;
    setPanning(true);
  };

  return (
    <div className="path-field">
      <div
        className={panning ? 'path-scroll panning' : 'path-scroll'}
        ref={box}
        onMouseDown={startPan}
        onClickCapture={(e) => {
          if (!panned.current) return;
          panned.current = false;
          e.stopPropagation();
        }}
      >
        {/* The zoom goes out as a custom property as well as a style: a hairline
            scaled down with everything else stops being a line at all, so the
            drawing takes its own zoom back off the strokes that have to stay
            visible however far the field is pulled out. */}
        <div className="path-canvas" style={{ ...canvas, zoom, '--zoom': zoom } as CSSProperties}>
          {children}
        </div>
      </div>
      <div className="path-tools">
        <button
          className="path-tool"
          onClick={() => applyZoom(zoom / ZOOM_STEP)}
          disabled={zoom <= ZOOM_MIN}
          title={tr(UI.pathZoomOut, lang)}
          aria-label={tr(UI.pathZoomOut, lang)}
        >
          <Icon name="minus" size={15} />
        </button>
        <button
          className="path-tool"
          onClick={() => applyZoom(zoom * ZOOM_STEP)}
          disabled={zoom >= ZOOM_MAX}
          title={tr(UI.pathZoomIn, lang)}
          aria-label={tr(UI.pathZoomIn, lang)}
        >
          <Icon name="plus" size={15} />
        </button>
        <button
          className="path-tool"
          onClick={() => update({ pathArrows: !arrows })}
          aria-pressed={arrows}
          title={tr(arrows ? UI.pathArrowsHide : UI.pathArrowsShow, lang)}
          aria-label={tr(arrows ? UI.pathArrowsHide : UI.pathArrowsShow, lang)}
        >
          <Icon name={arrows ? 'arrows' : 'arrows-off'} size={15} />
        </button>
        <button
          className="path-tool"
          onClick={reset}
          title={tr(UI.pathRecenter, lang)}
          aria-label={tr(UI.pathRecenter, lang)}
        >
          <Icon name="recenter" size={15} />
        </button>
      </div>
    </div>
  );
}
