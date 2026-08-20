import { Suspense, lazy } from 'react';
import { N, dependents, formatGrade, formatYear, tagOf, topicName, wikiUrl } from '../data/atlas';
import { useTopicBody } from '../data/bodies';
import { UI, tr, useLang } from '../i18n';
import { Icon } from './Icons';
import { ProgressBox } from './ProgressBox';
import { TagBadge } from './TagBadge';

/** Loaded with the body, so the two chunks travel together. */
const Markdown = lazy(() => import('./Markdown').then((m) => ({ default: m.Markdown })));

interface Props {
  id: string;
  onBack: () => void;
  onOpen: (id: string) => void;
  onShowPath: (id: string) => void;
}

export function TopicDetail({ id, onBack, onOpen, onShowPath }: Props) {
  const lang = useLang();
  const t = N[id];
  const tag = tagOf(id);
  const deps = dependents(id);
  const name = topicName(id, lang);
  const body = useTopicBody(id, lang);

  return (
    <div className="detail-page">
      <button className="back-link" onClick={onBack}>
        {tr(UI.back, lang)}
      </button>
      <div className="detail-card">
        <div className="detail-title-row">
          <ProgressBox id={id} />
          <h1>{name}</h1>
          {tag && <TagBadge tag={tag} />}
          {!!(t.requires ?? []).length && (
            <button className="chip-btn path-btn" onClick={() => onShowPath(id)}>
              {tr(UI.openPath, lang)} →
            </button>
          )}
        </div>
        {(t.year !== undefined || t.grade !== undefined) && (
          <div className="detail-meta">
            {t.year !== undefined && (
              <span className="meta-item">
                <Icon name="era" size={13} />
                {formatYear(t.year, lang, true)}
              </span>
            )}
            {t.grade !== undefined && (
              <span className="meta-item">
                <Icon name="grade" size={13} />
                {formatGrade(t.grade, lang)}
              </span>
            )}
          </div>
        )}
        <div className="detail-body">
          {body === null ? (
            <div className="body-loading" aria-hidden="true" />
          ) : (
            <Suspense fallback={<div className="body-loading" aria-hidden="true" />}>
              <Markdown>{body}</Markdown>
            </Suspense>
          )}
        </div>
        <div className="detail-footer">
          <div className="detail-col">
            <div className="label">{tr(UI.colRequires, lang)}</div>
            <div className="items">
              {(t.requires ?? []).map((p) => (
                <div key={p} className="item">
                  <ProgressBox id={p} />
                  <button className="link-btn" onClick={() => onOpen(p)}>
                    {topicName(p, lang)}
                  </button>
                </div>
              ))}
              {!(t.requires ?? []).length && <span className="empty">{tr(UI.noPrereqs, lang)}</span>}
            </div>
          </div>
          <div className="detail-col">
            <div className="label">{tr(UI.colLeadsTo, lang)}</div>
            <div className="items">
              {deps.map((p) => (
                <div key={p} className="item">
                  <ProgressBox id={p} />
                  <button className="link-btn" onClick={() => onOpen(p)}>
                    {topicName(p, lang)}
                  </button>
                </div>
              ))}
              {!deps.length && <span className="empty">{tr(UI.noDeps, lang)}</span>}
            </div>
          </div>
          <div className="detail-col">
            <div className="label">{tr(UI.colResources, lang)}</div>
            <div className="items">
              {(t.resources?.[lang] ?? t.resources?.en)?.map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer">
                  {r.label} ↗
                </a>
              )) ?? (
                <a href={wikiUrl(name, lang)} target="_blank" rel="noopener noreferrer">
                  {tr(UI.wikipedia, lang)}: {name} ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
