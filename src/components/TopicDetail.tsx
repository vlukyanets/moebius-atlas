import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { N, dependents, formatGrade, formatYear, tagOf, topicName, wikiUrl } from '../data/atlas';
import { UI, tr, useLang } from '../i18n';
import { EraIcon, GradeIcon } from './Icons';
import { TagBadge } from './TagBadge';

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

  return (
    <div className="detail-page">
      <button className="back-link" onClick={onBack}>
        {tr(UI.back, lang)}
      </button>
      <div className="detail-card">
        <div className="detail-title-row">
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
                <EraIcon />
                {formatYear(t.year, lang, true)}
              </span>
            )}
            {t.grade !== undefined && (
              <span className="meta-item">
                <GradeIcon />
                {formatGrade(t.grade, lang)}
              </span>
            )}
          </div>
        )}
        <div className="detail-body">
          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {t.body ? tr(t.body, lang) : tr(t.summary, lang)}
          </ReactMarkdown>
        </div>
        <div className="detail-footer">
          <div className="detail-col">
            <div className="label">{tr(UI.colRequires, lang)}</div>
            <div className="items">
              {(t.requires ?? []).map((p) => (
                <button key={p} className="link-btn" onClick={() => onOpen(p)}>
                  {topicName(p, lang)}
                </button>
              ))}
              {!(t.requires ?? []).length && <span className="empty">{tr(UI.noPrereqs, lang)}</span>}
            </div>
          </div>
          <div className="detail-col">
            <div className="label">{tr(UI.colLeadsTo, lang)}</div>
            <div className="items">
              {deps.map((p) => (
                <button key={p} className="link-btn" onClick={() => onOpen(p)}>
                  {topicName(p, lang)}
                </button>
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
