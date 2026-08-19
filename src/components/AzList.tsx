import { N, tagOf, topicName } from '../data/graph';
import { useLang } from '../i18n';
import { TagBadge } from './TagBadge';

/** Flat A–Z index: every tagged topic across all scopes, alphabetical. */
export function AzList({ onOpen }: { onOpen: (id: string) => void }) {
  const lang = useLang();
  const ids = Object.keys(N)
    .filter((id) => tagOf(id))
    .sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang));

  return (
    <div className="az">
      <div className="az-grid">
        {ids.map((id) => {
          const tag = tagOf(id)!;
          return (
            <div key={id} className="az-row" onClick={() => onOpen(id)}>
              <span className="dot" style={{ background: tag.color }} />
              <span className="name">{topicName(id, lang)}</span>
              <TagBadge tag={tag} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
