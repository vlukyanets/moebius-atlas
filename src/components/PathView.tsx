import { Fragment, useEffect, useState } from 'react';
import { N, pathTargets, prereqLevels, tagOf, topicName } from '../data/graph';
import { UI, tr, useLang, type Lang } from '../i18n';

interface Props {
  target: string;
  onTarget: (id: string) => void;
  onOpen: (id: string) => void;
}

const topicsWord = (n: number, lang: Lang): string =>
  lang === 'uk'
    ? n % 10 === 1 && n % 100 !== 11
      ? 'тема'
      : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)
        ? 'теми'
        : 'тем'
    : n === 1
      ? 'topic'
      : 'topics';

/**
 * Prerequisite tree: target on top, each level below holds the
 * prerequisites of the level above. Starts collapsed to the target plus
 * its direct prerequisites; deeper levels are revealed one at a time.
 */
export function PathView({ target, onTarget, onOpen }: Props) {
  const lang = useLang();
  const [shown, setShown] = useState(2);
  useEffect(() => setShown(2), [target]);

  const levels = prereqLevels(target).map((ids) =>
    [...ids].sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang)),
  );
  const visible = Math.min(shown, levels.length);
  const hasMore = visible < levels.length;
  const nextCount = hasMore ? levels[visible].length : 0;
  const nextLabel =
    visible === 2 ? tr(UI.revealDeps, lang) : `${tr(UI.revealLevel, lang)} ${visible}`;

  return (
    <div className="path-view">
      <div className="path-picker">
        <span className="lead">{tr(UI.pathLead, lang)}</span>
        <select value={target} onChange={(e) => onTarget(e.target.value)}>
          {pathTargets(lang).map((id) => (
            <option key={id} value={id}>
              {topicName(id, lang)}
            </option>
          ))}
        </select>
        <span className="spacer" />
        <button className="chip-btn" onClick={() => setShown(levels.length)}>
          {tr(UI.revealAll, lang)}
        </button>
        <button className="chip-btn" onClick={() => setShown(2)}>
          {tr(UI.collapseAll, lang)}
        </button>
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
                      onClick={() => onOpen(id)}
                    >
                      <span className="dot" style={{ background: tag ? tag.color : 'var(--accent)' }} />
                      {topicName(id, lang)}
                      {tag && (
                        <span className="tag-abbr" style={{ color: tag.color }}>
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
