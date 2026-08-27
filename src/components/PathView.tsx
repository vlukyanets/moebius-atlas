import { Fragment, useEffect, useState } from 'react';
import { N, pathTargets, prereqLevels, tagOf, topicName } from '../data/atlas';
import { UI, topicsWord, tr, useLang } from '../i18n';
import { useProgress } from '../progress';
import { useSettings, type PathLayout } from '../settings';
import { Icon } from './Icons';
import { Segmented } from './Menu';
import { PathRings } from './PathRings';
import { PathTree } from './PathTree';
import { ProgressBox } from './ProgressBox';
import { swatch } from './palette';
import { TopicPicker } from './TopicPicker';

interface Props {
  /** Empty falls back to the first target in alphabetical order. */
  target: string;
  onTarget: (id: string) => void;
  onOpen: (id: string) => void;
}

/**
 * Prerequisite tree: target on top, each level below holds the
 * prerequisites of the level above. Starts collapsed to the target plus
 * its direct prerequisites; deeper levels are revealed one at a time.
 *
 * The lanes reveal a level at a time; the two graph layouts - `PathTree` and
 * `PathRings` - draw the whole path at once, so the reveal controls disappear
 * with them. Which layout is drawn is a setting rather than view state: it
 * survives a reload and is what any later path view will open in.
 *
 * How far down the path is built is decided here, before any layout sees it,
 * which is what makes the tick apply to all three at once: a reader who tracks
 * progress is shown what is left to learn, so the walk ends on the topics they
 * have already learned instead of running down to the basics. The first learned
 * topic on a branch is drawn - a path has to say where it stopped - and nothing
 * under it. With tracking off there is nothing learned to stop at, so the tick
 * is absent rather than dead, and the whole path is built as before.
 */
export function PathView({ target: picked, onTarget, onOpen }: Props) {
  const lang = useLang();
  const { settings, update } = useSettings();
  const { enabled, markOf } = useProgress();
  const targets = pathTargets(lang);
  const target = picked && N[picked] ? picked : targets[0];
  const [shown, setShown] = useState(2);
  const layout = settings.pathLayout;
  useEffect(() => setShown(2), [target]);

  const stopping = enabled && settings.pathStopAtDone;
  /** The learned topics the walk actually ended on - a leaf it stopped at cut
   *  nothing off, and only a branch that was really cut short may say so. */
  const cut = new Set<string>();
  // `broken` is deliberately not a floor: the mark is there but the ground
  // under it is gone, and that missing ground is exactly what the reader has
  // to see. Only a `done` topic - ticked with its whole chain - ends a branch.
  const stop = stopping
    ? (id: string): boolean => {
        if (markOf(id) !== 'done') return false;
        if ((N[id].requires ?? []).length) cut.add(id);
        return true;
      }
    : undefined;

  const levels = prereqLevels(target, stop).map((ids) =>
    [...ids].sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang)),
  );
  // Whether a branch really ended early: a topic the walk stopped at whose own
  // prerequisites are nowhere in the path. One that is stopped at while
  // something else still pulls its prerequisites in has cost the reader nothing
  // and must not make the view announce a shorter path than it drew.
  const drawn = new Set(levels.flat());
  const stopped = [...cut].some((id) => (N[id].requires ?? []).some((p) => !drawn.has(p)));

  const visible = Math.min(shown, levels.length);
  const hasMore = visible < levels.length;
  const nextCount = hasMore ? levels[visible].length : 0;
  const nextLabel = `${tr(UI.revealNext, lang)} ${visible}`;
  /** Both graph layouts want the room and neither has anything to reveal. */
  const graph = layout === 'tree' || layout === 'rings';

  return (
    <div className={graph ? 'path-view wide' : 'path-view'}>
      <div className="path-picker">
        <div className="picker-row">
          <span className="lead">{tr(UI.pathLead, lang)}</span>
          <span className="spacer" />
          {/* Absent, not disabled, while tracking is off: with nothing learned
              the tick could only be a button that changes nothing. */}
          {enabled && (
            <button
              className={stopping ? 'chip-btn on' : 'chip-btn'}
              aria-pressed={stopping}
              title={tr(stopping ? UI.pathStopAtDoneOn : UI.pathStopAtDoneOff, lang)}
              onClick={() => update({ pathStopAtDone: !stopping })}
            >
              {/* The tick is the state, not the label: an unticked chip that
                  still carries a tick reads as switched on. Off it is the bare
                  words, the way the reveal chips next to it are. */}
              {stopping && <Icon name="check" size={13} />}
              {tr(UI.pathStopAtDone, lang)}
            </button>
          )}
          {!graph && (
            <>
              <button className="chip-btn" onClick={() => setShown(levels.length)}>
                {tr(UI.revealAll, lang)}
              </button>
              <button className="chip-btn" onClick={() => setShown(2)}>
                {tr(UI.collapseAll, lang)}
              </button>
            </>
          )}
          <Segmented<PathLayout>
            className="path-layouts"
            options={[
              { v: 'steps', label: '', title: tr(UI.layoutSteps, lang), icon: <Icon name="path-steps" size={15} /> },
              { v: 'tree', label: '', title: tr(UI.layoutTree, lang), icon: <Icon name="path-tree" size={15} /> },
              { v: 'rings', label: '', title: tr(UI.layoutRings, lang), icon: <Icon name="path-rings" size={15} /> },
            ]}
            value={layout}
            onChange={(v) => update({ pathLayout: v })}
          />
        </div>
        <TopicPicker ids={targets} value={target} onChange={onTarget} />
      </div>
      <div className="path-hint">
        {tr(layout === 'tree' ? UI.treeHint : layout === 'rings' ? UI.ringsHint : UI.pathHint, lang)}
        {/* Only when a branch was actually cut short - otherwise the reader is
            being told about a shortening they are not looking at. */}
        {stopped && <span className="stopped"> · {tr(UI.pathStoppedHint, lang)}</span>}
      </div>
      {layout === 'tree' ? (
        <PathTree levels={levels} onOpen={onOpen} />
      ) : layout === 'rings' ? (
        <PathRings levels={levels} onOpen={onOpen} />
      ) : (
        <div className="path-lanes">
          {levels.slice(0, visible).map((ids, i) => (
            <Fragment key={i}>
              {i > 0 && <span className="path-arrow">↑</span>}
              <div className={'path-lane' + (i === 0 ? ' target-lane' : '')}>
                <div className="label">
                  {i === 0
                    ? tr(UI.target, lang)
                    : i === 1
                      ? tr(UI.directPrereqs, lang)
                      : `${tr(UI.levelPrefix, lang)} ${i}`}
                </div>
                <div className="pills">
                  {ids.map((id) => {
                    const tag = tagOf(id);
                    const basic = i > 0 && !(N[id].requires ?? []).length;
                    return (
                      <div
                        key={id}
                        className={'path-pill' + (i === 0 ? ' target' : '')}
                        style={tag ? swatch(tag) : undefined}
                        onClick={() => onOpen(id)}
                      >
                        <ProgressBox id={id} />
                        <span className="dot" />
                        {topicName(id, lang)}
                        {tag && (
                          <span className="tag-abbr">
                            {tr(tag.label, lang)}
                          </span>
                        )}
                        {basic && <span className="basic">{tr(UI.basicBadge, lang)}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Fragment>
          ))}
          {hasMore ? (
            <button className="reveal-btn" onClick={() => setShown(visible + 1)}>
              ▾ {tr(UI.reveal, lang)} {nextLabel} ({nextCount} {topicsWord(nextCount, lang)})
            </button>
          ) : (
            <div className="all-basics">● {tr(stopped ? UI.allStopped : UI.allBasics, lang)}</div>
          )}
        </div>
      )}
    </div>
  );
}
