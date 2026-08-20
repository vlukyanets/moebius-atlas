/**
 * The rings layout of a prerequisite path: the target in the middle of the
 * shared scrollable field, and every level one ring further out, so how deep a
 * topic sits in the prerequisites is how far it is from the centre. The whole
 * path is drawn at once, as in the tree - there is nothing to reveal here.
 *
 * `ringLayout` does the arithmetic and hands back a point per card and the arc
 * of every arrow, so nothing here is measured from the DOM. The card box and
 * the two gaps below are the numbers it works from, and `.path-node` in
 * styles.css mirrors the box - change one, change the other.
 *
 * The arrows are transfer arcs rather than straight lines: one leaves the outer
 * ring along it and settles onto the inner ring along it, the way a satellite
 * drops between orbits. The layout hands back the points; joining them is all
 * that happens here. As in the tree, only neighbouring rings are joined and a
 * longer edge is left undrawn.
 */
import { useState } from 'react';
import { linkKey, ringLayout, tagOf, topicName, type RingEdge } from '../data/atlas';
import { UI, tr, useLang } from '../i18n';
import { EDGE, EdgeTips, PathField, TIP, hover, type Hot } from './PathField';
import { ProgressBox } from './ProgressBox';
import { swatch } from './palette';

const NODE_W = 180;
const NODE_H = 84;
/** Room between any two cards, and the empty band between one ring of cards and
 *  the next. The band is the wider of the two on purpose: it is where the
 *  transfer arcs are drawn, and an arc with nowhere to bend is a straight line
 *  with extra steps. */
const GAP = 40;
const RING_GAP = 110;

interface Props {
  /** Every level of the path, target first. */
  levels: string[][];
  onOpen: (id: string) => void;
}

export function PathRings({ levels, onOpen }: Props): JSX.Element {
  const lang = useLang();
  const [hot, setHot] = useState<Hot>(null);
  const cool = (): void => setHot(null);

  const { rings, edges, radii, size } = ringLayout(levels, (id) => topicName(id, lang), {
    w: NODE_W,
    h: NODE_H,
    gap: GAP,
    ring: RING_GAP,
  });
  /** Everything comes back measured from the centre of the field. */
  const mid = size / 2;

  /** The arc comes back as points measured from the centre; drawing it is a
   *  move to the first and a line to each of the rest. */
  const line = (e: RingEdge): string =>
    e.points.map((p, i) => `${i ? 'L' : 'M'}${mid + p.x} ${mid + p.y}`).join(' ');

  const lit = hover(edges, hot);
  const drawn = [...edges].sort((a, b) => lit.rank(a) - lit.rank(b));

  const levelTitle = (ring: number): string =>
    ring === 0
      ? tr(UI.target, lang)
      : ring === 1
        ? tr(UI.directPrereqs, lang)
        : `${tr(UI.levelPrefix, lang)} ${ring}`;

  const target = rings[0][0];

  return (
    <PathField
      canvas={{ width: size, height: size }}
      focus={{ x: mid, y: mid }}
      focusKey={`${target.id}:${size}`}
    >
      <svg
        className="path-edges"
        width={size}
        height={size}
        style={{ left: 0, top: 0 }}
        aria-hidden="true"
      >
        <EdgeTips />
        {/* The rings themselves: what tells the reader that two cards a long way
            apart are nevertheless the same distance from the target. */}
        {radii.slice(1).map((r, i) => (
          <g className="ring-guide" key={i}>
            <circle cx={mid} cy={mid} r={r} />
            {/* Just outside the band of cards, in the gap before the next ring. */}
            <text x={mid} y={mid - r - NODE_H / 2 - 8}>
              {i + 1}
            </text>
          </g>
        ))}
        {drawn.map((e) => {
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
      {rings.map((ring, level) =>
        ring.map(({ id, x, y }) => {
          const tag = tagOf(id);
          const name = topicName(id, lang);
          return (
            <div
              key={id}
              className={'path-node' + (level === 0 ? ' target' : '') + lit.nodeClass(id)}
              style={{
                ...(tag ? swatch(tag) : null),
                width: NODE_W,
                height: NODE_H,
                left: mid + x - NODE_W / 2,
                top: mid + y - NODE_H / 2,
              }}
              title={`${name} · ${levelTitle(level)}`}
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
        }),
      )}
    </PathField>
  );
}
