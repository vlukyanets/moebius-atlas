import { Fragment, useEffect, useState } from 'react';
import { N, pathTargets, prereqLevels, tagOf, topicName } from '../data/atlas';
import { UI, topicsWord, tr, useLang } from '../i18n';
import { useSettings, type PathLayout } from '../settings';
import { Icon } from './Icons';
import { Segmented } from './Menu';
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
 * The lanes reveal a level at a time; the tree in `PathTree` draws the whole
 * path at once, so the reveal controls disappear with it. The layout is a
 * setting rather than view state: it survives a reload and is what any later
 * path view will open in. `rings` is not drawn yet - its button is off the
 * page until it is, and a stored `rings` falls back to the lanes.
 */
export function PathView({ target: picked, onTarget, onOpen }: Props) {
  const lang = useLang();
  const { settings, update } = useSettings();
  const targets = pathTargets(lang);
  const target = picked && N[picked] ? picked : targets[0];
  const [shown, setShown] = useState(2);
  const layout = settings.pathLayout;
  useEffect(() => setShown(2), [target]);

  const levels = prereqLevels(target).map((ids) =>
    [...ids].sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang)),
  );
  const visible = Math.min(shown, levels.length);
  const hasMore = visible < levels.length;
  const nextCount = hasMore ? levels[visible].length : 0;
  const nextLabel = `${tr(UI.revealNext, lang)} ${visible}`;
  const tree = layout === 'tree';

  return (
    <div className={tree ? 'path-view wide' : 'path-view'}>
      <div className="path-picker">
        <div className="picker-row">
          <span className="lead">{tr(UI.pathLead, lang)}</span>
          <span className="spacer" />
          {!tree && (
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
            ]}
            value={layout}
            onChange={(v) => update({ pathLayout: v })}
          />
        </div>
        <TopicPicker ids={targets} value={target} onChange={onTarget} />
      </div>
      <div className="path-hint">{tr(tree ? UI.treeHint : UI.pathHint, lang)}</div>
      {tree ? (
        <PathTree levels={levels} onOpen={onOpen} />
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
            <div className="all-basics">● {tr(UI.allBasics, lang)}</div>
          )}
        </div>
      )}
    </div>
  );
}
