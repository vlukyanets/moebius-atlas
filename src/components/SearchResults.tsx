import { search, tagOf, topicName } from '../data/atlas';
import { UI, tr, useLang } from '../i18n';
import { TagBadge } from './TagBadge';

export function SearchResults({ query, onOpen }: { query: string; onOpen: (id: string) => void }) {
  const lang = useLang();
  const ids = search(query);
  return (
    <div className="search-page">
      <div className="search-label">
        {ids.length} {tr(UI.resultsFor, lang)} “{query.trim()}”
      </div>
      <div className="search-list">
        {ids.map((id) => {
          const tag = tagOf(id);
          return (
            <div key={id} className="search-row" onClick={() => onOpen(id)}>
              <div className="main">
                <div className="name">{topicName(id, lang)}</div>
              </div>
              {tag && <TagBadge tag={tag} />}
            </div>
          );
        })}
      </div>
      {!ids.length && <div className="search-empty">{tr(UI.noResults, lang)}</div>}
    </div>
  );
}
