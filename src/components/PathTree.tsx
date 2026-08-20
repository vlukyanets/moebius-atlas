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
 * one, change the other.
 *
 * The generated `<svg>` here is the one drawing in the app that is not a file
 * in `src/icons/`: it is data, not an icon, and no static file could hold it.
 */
import { useState } from 'react';
import { tagOf, topicName, treeLayout, type TreeEdge } from '../data/atlas';
import { UI, tr, useLang } from '../i18n';
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

  const levelTitle = (row: number): string =>
    row === 0
      ? tr(UI.target, lang)
      : row === 1
        ? tr(UI.directPrereqs, lang)
        : `${tr(UI.levelPrefix, lang)} ${row}`;

  return (
    <div className="path-tree">
      <div className="tree-canvas" style={{ width: GUTTER + width, paddingTop: PAD_Y }}>
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
  );
}
