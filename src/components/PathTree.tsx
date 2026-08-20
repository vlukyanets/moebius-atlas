/**
 * The tree layout of a prerequisite path: the same levels the stacked lanes
 * show, drawn inside a scrollable field with a straight arrow from a
 * prerequisite up to the topic it unlocks. Only neighbouring levels are
 * joined - `treeLayout` leaves a longer edge undrawn rather than routing it
 * across the levels in between. The whole tree is drawn at once - there is
 * nothing to reveal here.
 *
 * Every card is the same size, so where one lands is arithmetic and not a
 * measurement: `treeLayout` returns each slot centred on its level and the
 * two points every edge is drawn between, and both the cards and the arrows
 * are placed from those numbers without ever reading the DOM back. The constants
 * below are mirrored by `.tree-row` and `.tree-node` in styles.css - change
 * one, change the other. The one thing read back is the size of the field
 * itself, which scrolling needs and no constant can know.
 *
 * The generated `<svg>` here is the one drawing in the app that is not a file
 * in `src/icons/`: it is data, not an icon, and no static file could hold it.
 */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { tagOf, topicName, treeLayout, type TreeEdge } from '../data/atlas';
import { UI, tr, useLang } from '../i18n';
import { Icon } from './Icons';
import { ProgressBox } from './ProgressBox';
import { swatch } from './palette';

const NODE_W = 180;
const NODE_H = 84;
const GAP = 28;
const ROW_GAP = 56;
const ROW_H = NODE_H + ROW_GAP;
/** Left strip holding the level number; it sticks while the field scrolls. */
const GUTTER = 64;
const PAD_Y = 18;

const edgeKey = (e: TreeEdge): string => `${e.from}>${e.to}`;
/** Past this much movement a press is a pan, and the click it ends with is
 *  meant for the field rather than for whatever card it happened to land on. */
const DRAG_SLOP = 3;
/** Zoom bounds. Below the floor the names stop being readable, above the
 *  ceiling a single card fills the field and the shape is gone. */
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 1.5;
const ZOOM_STEP = 1.2;
const clampZoom = (z: number): number => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));

interface Props {
  /** Every level of the path, target first. */
  levels: string[][];
  onOpen: (id: string) => void;
}

/**
 * What the pointer rests on. A card lights the edges that touch it; an arrow
 * lights itself and the two cards it joins, which is the only way to tell
 * which pair a line connects once a level is crowded. Either way the lit
 * edges are drawn last, so they are never hidden under a neighbour.
 */
type Hot = { node: string } | { from: string; to: string } | null;

export function PathTree({ levels, onOpen }: Props): JSX.Element {
  const lang = useLang();
  const [hot, setHot] = useState<Hot>(null);
  const cool = (): void => setHot(null);
  const field = useRef<HTMLDivElement>(null);
  const grab = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const panned = useRef(false);
  const [panning, setPanning] = useState(false);
  const [zoom, setZoom] = useState(1);
  /** Where to scroll once the new zoom has been laid out. */
  const anchored = useRef<{ left: number; top: number; behavior: ScrollBehavior } | null>(null);

  const { rows, edges, width } = treeLayout(levels, (id) => topicName(id, lang), {
    node: NODE_W,
    gap: GAP,
  });
  const height = rows.length * ROW_H;
  const cx = (x: number): number => width / 2 + x;

  /** Top edge of the prerequisite straight into the bottom edge of the card
   *  above it - the two levels are one gap apart, so the line crosses nothing. */
  const line = (e: TreeEdge): string =>
    `M${cx(e.fromX)} ${e.row * ROW_H} L${cx(e.toX)} ${(e.row - 1) * ROW_H + NODE_H}`;

  const litEdge = (e: TreeEdge): boolean =>
    hot === null
      ? false
      : 'node' in hot
        ? e.from === hot.node || e.to === hot.node
        : e.from === hot.from && e.to === hot.to;
  const litNode = (id: string): boolean =>
    hot === null ? false : 'node' in hot ? hot.node === id : hot.from === id || hot.to === id;
  /**
   * The rest of the way up. From whatever is lit, every drawn edge above it is
   * followed to the target, and the cards and lines along the way get a second,
   * quieter colour: the hover answers "what does this connect to", the trail
   * answers "and where does that get me". Only drawn edges are followed, so a
   * chain that would continue through an edge `treeLayout` left out stops here
   * rather than reappearing further up with nothing joining it.
   */
  const upFrom = new Map<string, TreeEdge[]>();
  for (const e of edges) upFrom.set(e.from, [...(upFrom.get(e.from) ?? []), e]);
  const trailNodes = new Set<string>();
  const trailEdges = new Set<string>();
  if (hot !== null) {
    const seen = new Set<string>();
    const queue = ['node' in hot ? hot.node : hot.to];
    while (queue.length) {
      const cur = queue.shift()!;
      if (seen.has(cur)) continue;
      seen.add(cur);
      for (const e of upFrom.get(cur) ?? []) {
        if (!litEdge(e)) trailEdges.add(edgeKey(e));
        if (!litNode(e.to)) trailNodes.add(e.to);
        queue.push(e.to);
      }
    }
  }

  /** 0 plain, 1 trail, 2 hovered - and also the order they are painted in. */
  const rank = (e: TreeEdge): number => (litEdge(e) ? 2 : trailEdges.has(edgeKey(e)) ? 1 : 0);
  const TIP = ['url(#tree-tip)', 'url(#tree-tip-trail)', 'url(#tree-tip-hot)'];
  const EDGE = ['edge', 'edge trail', 'edge hot'];
  const drawn = [...edges].sort((a, b) => rank(a) - rank(b));

  /**
   * The view opens on the target rather than on the left edge of the widest
   * level: a broad path is several screens across, and the goal is what the
   * reader came for.
   */
  const target = rows[0][0];
  // Card coordinates are the unzoomed ones; the scroll box sees them scaled.
  const centreLeft = (box: HTMLDivElement, z: number): number =>
    (GUTTER + cx(target.x)) * z - box.clientWidth / 2;
  const centreOn = (behavior: ScrollBehavior): void => {
    const box = field.current;
    if (!box) return;
    box.scrollTo({ left: centreLeft(box, zoom), top: 0, behavior });
  };
  // Re-runs when the path changes, not on every render - `width` moves with it.
  // The zoom the reader picked survives a change of target; only the button
  // undoes it.
  useLayoutEffect(() => centreOn('auto'), [target.id, width]);

  /** The button is a full undo: the zoom goes back to 1 and the target back to
   *  the middle, which together is the state the view opened in. */
  const reset = (): void => {
    const box = field.current;
    if (!box) return;
    if (zoom === 1) {
      centreOn('smooth');
      return;
    }
    anchored.current = { left: centreLeft(box, 1), top: 0, behavior: 'smooth' };
    setZoom(1);
  };

  /**
   * Zoom keeps one point of the field still: the pointer for a ctrl-wheel, the
   * middle of the box for the buttons. Without that the tree would slide out
   * from under the reader on every step. The scroll position it needs can only
   * be set once the browser has laid the new size out, hence the ref and the
   * layout effect below rather than a `scrollTo` right here.
   */
  const applyZoom = (next: number, ax?: number, ay?: number): void => {
    const box = field.current;
    const z = clampZoom(next);
    if (!box || z === zoom) return;
    const r = box.getBoundingClientRect();
    const px = ax === undefined ? box.clientWidth / 2 : ax - r.left;
    const py = ay === undefined ? box.clientHeight / 2 : ay - r.top;
    const k = z / zoom;
    anchored.current = {
      left: (box.scrollLeft + px) * k - px,
      top: (box.scrollTop + py) * k - py,
      behavior: 'auto',
    };
    setZoom(z);
  };

  useLayoutEffect(() => {
    const box = field.current;
    const to = anchored.current;
    if (!box || !to) return;
    anchored.current = null;
    box.scrollTo({ left: to.left, top: to.top, behavior: to.behavior });
  }, [zoom]);

  // Not React's `onWheel`: that one is passive, so it could not take the event
  // away from the browser's own page zoom.
  useEffect(() => {
    const box = field.current;
    if (!box) return;
    const wheel = (e: WheelEvent): void => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      applyZoom(zoom * (e.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP), e.clientX, e.clientY);
    };
    box.addEventListener('wheel', wheel, { passive: false });
    return () => box.removeEventListener('wheel', wheel);
  }, [zoom]);

  /**
   * Dragging the field pans it. The listeners live on the window so a pointer
   * that leaves the box mid-drag keeps working, and a drag that started on a
   * card swallows its own click - otherwise letting go would open a topic.
   */
  useEffect(() => {
    if (!panning) return;
    const move = (e: MouseEvent): void => {
      const box = field.current;
      const from = grab.current;
      if (!box || !from) return;
      const dx = e.clientX - from.x;
      const dy = e.clientY - from.y;
      if (Math.abs(dx) > DRAG_SLOP || Math.abs(dy) > DRAG_SLOP) panned.current = true;
      box.scrollLeft = from.left - dx;
      box.scrollTop = from.top - dy;
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
    const box = field.current;
    if (e.button !== 0 || !box) return;
    grab.current = { x: e.clientX, y: e.clientY, left: box.scrollLeft, top: box.scrollTop };
    panned.current = false;
    setPanning(true);
  };

  const levelTitle = (row: number): string =>
    row === 0
      ? tr(UI.target, lang)
      : row === 1
        ? tr(UI.directPrereqs, lang)
        : `${tr(UI.levelPrefix, lang)} ${row}`;

  return (
    <div className="tree-field">
      <div
        className={panning ? 'path-tree panning' : 'path-tree'}
        ref={field}
        onMouseDown={startPan}
        onClickCapture={(e) => {
          if (!panned.current) return;
          panned.current = false;
          e.stopPropagation();
        }}
      >
        <div className="tree-canvas" style={{ width: GUTTER + width, paddingTop: PAD_Y, zoom }}>
          <svg
            className="tree-edges"
            width={width}
            height={height}
            style={{ left: GUTTER, top: PAD_Y }}
            aria-hidden="true"
          >
            <defs>
              <marker
                id="tree-tip"
                className="tip"
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
              <marker
                id="tree-tip-trail"
                className="tip trail"
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
              <marker
                id="tree-tip-hot"
                className="tip hot"
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
            </defs>
            {drawn.map((e) => {
              const d = line(e);
              const r = rank(e);
              return (
                // The hairline itself is too thin to aim at, so an invisible wide
                // stroke on top of it is what actually catches the pointer.
                <g
                  key={edgeKey(e)}
                  onMouseEnter={() => setHot({ from: e.from, to: e.to })}
                  onMouseLeave={cool}
                >
                  <path className={EDGE[r]} d={d} markerEnd={TIP[r]} />
                  <path className="edge-hit" d={d} />
                </g>
              );
            })}
          </svg>
          {rows.map((slots, row) => (
            <div className="tree-row" key={row} style={{ height: ROW_H }}>
              <span className="lvl" style={{ width: GUTTER }} title={levelTitle(row)}>
                {row === 0 ? tr(UI.target, lang) : row}
              </span>
              <div className="tree-nodes" style={{ width }}>
                {slots.map(({ id, x }) => {
                  const tag = tagOf(id);
                  const name = topicName(id, lang);
                  return (
                    <div
                      key={id}
                      className={
                        'tree-node' +
                        (row === 0 ? ' target' : '') +
                        (litNode(id) ? ' hot' : trailNodes.has(id) ? ' trail' : '')
                      }
                      style={{
                        ...(tag ? swatch(tag) : null),
                        width: NODE_W,
                        height: NODE_H,
                        left: cx(x) - NODE_W / 2,
                      }}
                      title={name}
                      onMouseEnter={() => setHot({ node: id })}
                      onMouseLeave={cool}
                      onClick={() => onOpen(id)}
                    >
                      <div className="head">
                        <ProgressBox id={id} />
                        <span className="dot" />
                        {tag && <span className="tag-abbr">{tr(tag.label, lang)}</span>}
                      </div>
                      <span className="name">{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tree-tools">
        <button
          className="tree-tool"
          onClick={() => applyZoom(zoom / ZOOM_STEP)}
          disabled={zoom <= ZOOM_MIN}
          title={tr(UI.treeZoomOut, lang)}
          aria-label={tr(UI.treeZoomOut, lang)}
        >
          <Icon name="minus" size={15} />
        </button>
        <button
          className="tree-tool"
          onClick={() => applyZoom(zoom * ZOOM_STEP)}
          disabled={zoom >= ZOOM_MAX}
          title={tr(UI.treeZoomIn, lang)}
          aria-label={tr(UI.treeZoomIn, lang)}
        >
          <Icon name="plus" size={15} />
        </button>
        <button
          className="tree-tool"
          onClick={reset}
          title={tr(UI.treeRecenter, lang)}
          aria-label={tr(UI.treeRecenter, lang)}
        >
          <Icon name="recenter" size={15} />
        </button>
      </div>
    </div>
  );
}
