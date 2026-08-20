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
 * bends every edge passes through, and both the cards and the arrows are
 * placed from those numbers without ever reading the DOM back. The constants
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

interface Props {
  /** Every level of the path, target first. */
  levels: string[][];
  onOpen: (id: string) => void;
}

export function PathTree({ levels, onOpen }: Props): JSX.Element {
  const lang = useLang();
  // Which card the pointer is on: its edges are drawn last and highlighted,
  // which is the only way to follow one line through a crowded level.
  const [hot, setHot] = useState<string | null>(null);

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

  const lit = (e: TreeEdge): boolean => hot !== null && (e.from === hot || e.to === hot);
  const drawn = [...edges].sort((a, b) => Number(lit(a)) - Number(lit(b)));

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
          {drawn.map((e) => (
            <path
              key={`${e.from}>${e.to}`}
              className={lit(e) ? 'edge hot' : 'edge'}
              d={line(e)}
              markerEnd={lit(e) ? 'url(#tree-tip-hot)' : 'url(#tree-tip)'}
            />
          ))}
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
                    className={'tree-node' + (row === 0 ? ' target' : '') + (hot === id ? ' hot' : '')}
                    style={{
                      ...(tag ? swatch(tag) : null),
                      width: NODE_W,
                      height: NODE_H,
                      left: cx(x) - NODE_W / 2,
                    }}
                    title={name}
                    onMouseEnter={() => setHot(id)}
                    onMouseLeave={() => setHot(null)}
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
