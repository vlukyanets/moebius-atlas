import { useMemo, useState } from 'react';
import { N, tagOf, topicName } from '../data/graph';
import { TAGS } from '../data/topics';
import type { TagId } from '../data/types';
import { UI, tr, useLang } from '../i18n';
import { TagBadge } from './TagBadge';

const TAG_IDS = Object.keys(TAGS) as TagId[];

/**
 * Flat A–Z index: every tagged topic across all scopes, alphabetical.
 * Type chips filter the list; an empty selection means "show everything".
 */
export function AzList({ onOpen }: { onOpen: (id: string) => void }) {
  const lang = useLang();
  const [selected, setSelected] = useState<TagId[]>([]);

  const ids = useMemo(
    () =>
      Object.keys(N)
        .filter((id) => tagOf(id))
        .sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang)),
    [lang],
  );

  const countOf = useMemo(() => {
    const c = {} as Record<TagId, number>;
    for (const id of ids) c[N[id].tag!] = (c[N[id].tag!] ?? 0) + 1;
    return c;
  }, [ids]);

  const shown = selected.length ? ids.filter((id) => selected.includes(N[id].tag!)) : ids;

  const toggle = (t: TagId) =>
    setSelected((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  return (
    <div className="az">
      <div className="az-filters">
        <span className="lead">{tr(UI.filterLead, lang)}</span>
        <button
          className={'filter-chip' + (selected.length ? '' : ' on')}
          aria-pressed={selected.length === 0}
          onClick={() => setSelected([])}
        >
          {tr(UI.filterAll, lang)}
          <span className="count">{ids.length}</span>
        </button>
        {TAG_IDS.filter((t) => countOf[t]).map((t) => {
          const tag = TAGS[t];
          const on = selected.includes(t);
          return (
            <button
              key={t}
              className={'filter-chip' + (on ? ' on' : '')}
              aria-pressed={on}
              style={on ? { color: tag.color, background: tag.bg, borderColor: tag.color } : undefined}
              onClick={() => toggle(t)}
            >
              <span className="dot" style={{ background: tag.color }} />
              {tr(tag.full, lang)}
              <span className="count">{countOf[t]}</span>
            </button>
          );
        })}
      </div>
      <div className="az-grid">
        {shown.map((id) => {
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
