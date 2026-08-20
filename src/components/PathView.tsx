import { Fragment, useEffect, useState } from 'react';
import { N, pathTargets, prereqLevels, tagOf, topicName } from '../data/atlas';
import { UI, topicsWord, tr, useLang } from '../i18n';
import { Icon } from './Icons';
import { Segmented } from './Menu';
import { ProgressBox } from './ProgressBox';
import { swatch } from './palette';
import { TopicPicker } from './TopicPicker';

/**
 * How the levels are drawn. Only `steps` - the stacked lanes below - is
 * implemented; the switch already offers the other two so the layouts can be
 * added one at a time without moving the control again.
 */
type PathLayout = 'steps' | 'tree' | 'rings';

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
 */
export function PathView({ target: picked, onTarget, onOpen }: Props) {
  const lang = useLang();
  const targets = pathTargets(lang);
  const target = picked && N[picked] ? picked : targets[0];
  const [shown, setShown] = useState(2);
  const [layout, setLayout] = useState<PathLayout>('steps');
  useEffect(() => setShown(2), [target]);

  const levels = prereqLevels(target).map((ids) =>
    [...ids].sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang)),
  );
  const visible = Math.min(shown, levels.length);
  const hasMore = visible < levels.length;
  const nextCount = hasMore ? levels[visible].length : 0;
  const nextLabel = `${tr(UI.revealNext, lang)} ${visible}`;

  return (
    <div className="path-view">
      <div className="path-picker">
        <div className="picker-row">
          <span className="lead">{tr(UI.pathLead, lang)}</span>
          <span className="spacer" />
          <button className="chip-btn" onClick={() => setShown(levels.length)}>
            {tr(UI.revealAll, lang)}
          </button>
          <button className="chip-btn" onClick={() => setShown(2)}>
            {tr(UI.collapseAll, lang)}
          </button>
          <Segmented<PathLayout>
            className="path-layouts"
            options={[
              { v: 'steps', label: '', title: tr(UI.layoutSteps, lang), icon: <Icon name="path-steps" size={15} /> },
              { v: 'tree', label: '', title: tr(UI.layoutTree, lang), icon: <Icon name="path-tree" size={15} /> },
              { v: 'rings', label: '', title: tr(UI.layoutRings, lang), icon: <Icon name="path-rings" size={15} /> },
            ]}
            value={layout}
            onChange={setLayout}
          />
        </div>
        <TopicPicker ids={targets} value={target} onChange={onTarget} />
      </div>
      <div className="path-hint">{tr(UI.pathHint, lang)}</div>
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
    </div>
  );
}
