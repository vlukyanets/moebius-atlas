/**
 * The tree layout of a prerequisite path: the same levels the stacked lanes
 * show, drawn inside the shared scrollable field with a straight arrow from a
 * prerequisite up to the topic it unlocks. Only neighbouring levels are
 * joined - `treeLayout` leaves a longer edge undrawn rather than routing it
 * across the levels in between. The whole tree is drawn at once - there is
 * nothing to reveal here.
 *
 * Every card is the same size, so where one lands is arithmetic and not a
 * measurement: `treeLayout` returns each slot centred on its level and the
 * two points every edge is drawn between, and both the cards and the arrows
 * are placed from those numbers without ever reading the DOM back. The constants
 * below are mirrored by `.tree-row` and `.path-node` in styles.css - change
 * one, change the other.
 *
 * The generated `<svg>` here is one of the two drawings in the app that are not
 * a file in `src/icons/` - it is data, not an icon, and no static file could
 * hold it. `PathRings` draws the other.
 */
import { useState } from 'react';
import { linkKey, tagOf, topicName, treeLayout, type TreeEdge } from '../data/atlas';
import { UI, tr, useLang } from '../i18n';
import { useSettings } from '../settings';
import { EDGE, EdgeTips, PathField, TIP, hover, type Hot } from './PathField';
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
  const arrows = useSettings().settings.pathArrows;
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

  const lit = hover(edges, hot);
  const drawn = [...edges].sort((a, b) => lit.rank(a) - lit.rank(b));

  const levelTitle = (row: number): string =>
    row === 0
      ? tr(UI.target, lang)
      : row === 1
        ? tr(UI.directPrereqs, lang)
        : `${tr(UI.levelPrefix, lang)} ${row}`;

  // The view opens on the target rather than on the left edge of the widest
  // level: a broad path is several screens across, and the goal is what the
  // reader came for. The top of the tree is where the target already is.
  const target = rows[0][0];

  return (
    <PathField
      canvas={{ width: GUTTER + width, paddingTop: PAD_Y, paddingBottom: 20 }}
      focus={{ x: GUTTER + cx(target.x), y: 0 }}
      focusKey={`${target.id}:${width}`}
    >
      <svg
        className="path-edges"
        width={width}
        height={height}
        style={{ left: GUTTER, top: PAD_Y }}
        aria-hidden="true"
      >
        <EdgeTips />
        {/* Hidden arrows leave the edges undrawn, not unknown: the hover trail
            still runs up them, so a card lights the way to the target. */}
        {arrows && drawn.map((e) => {
          const d = line(e);
          const r = lit.rank(e);
          return (
            // The hairline itself is too thin to aim at, so an invisible wide
            // stroke on top of it is what actually catches the pointer.
            <g
              key={linkKey(e)}
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
                  className={'path-node' + (row === 0 ? ' target' : '') + lit.nodeClass(id)}
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
    </PathField>
  );
}
