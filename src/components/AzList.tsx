import { useMemo, useState } from 'react';
import { N, tagOf, topicName, trackIdOf } from '../data/graph';
import { TAGS, TRACKS } from '../data/topics';
import type { L10n } from '../i18n';
import type { TagId, TrackId } from '../data/types';
import { UI, tr, useLang } from '../i18n';
import { TagBadge } from './TagBadge';

const TAG_IDS = Object.keys(TAGS) as TagId[];
const TRACK_IDS = Object.keys(TRACKS) as TrackId[];

interface ChipDef<K extends string> {
  key: K;
  label: L10n;
  color: string;
  bg: string;
  count: number;
}

/** One filter row: an "All" chip plus one chip per value, multi-select. */
function ChipRow<K extends string>({
  lead,
  chips,
  total,
  selected,
  onToggle,
  onClear,
}: {
  lead: string;
  chips: ChipDef<K>[];
  total: number;
  selected: K[];
  onToggle: (k: K) => void;
  onClear: () => void;
}) {
  const lang = useLang();
  return (
    <div className="az-filters">
      <span className="lead">{lead}</span>
      <button
        className={'filter-chip' + (selected.length ? '' : ' on')}
        aria-pressed={selected.length === 0}
        onClick={onClear}
      >
        {tr(UI.filterAll, lang)}
        <span className="count">{total}</span>
      </button>
      {chips.map((c) => {
        const on = selected.includes(c.key);
        return (
          <button
            key={c.key}
            className={'filter-chip' + (on ? ' on' : '')}
            aria-pressed={on}
            style={on ? { color: c.color, background: c.bg, borderColor: c.color } : undefined}
            onClick={() => onToggle(c.key)}
          >
            <span className="dot" style={{ background: c.color }} />
            {tr(c.label, lang)}
            <span className="count">{c.count}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * Flat A-Z index: every tagged topic, alphabetical. Two independent chip
 * rows filter it - by statement type and by curriculum track. An empty
 * selection in a row means "everything" for that row; rows combine with AND.
 */
export function AzList({ onOpen }: { onOpen: (id: string) => void }) {
  const lang = useLang();
  const [tags, setTags] = useState<TagId[]>([]);
  const [tracks, setTracks] = useState<TrackId[]>([]);

  const ids = useMemo(
    () =>
      Object.keys(N)
        .filter((id) => tagOf(id))
        .sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang)),
    [lang],
  );

  const { tagCount, trackCount } = useMemo(() => {
    const tagCount = {} as Record<TagId, number>;
    const trackCount = {} as Record<TrackId, number>;
    for (const id of ids) {
      tagCount[N[id].tag!] = (tagCount[N[id].tag!] ?? 0) + 1;
      const t = trackIdOf(id);
      trackCount[t] = (trackCount[t] ?? 0) + 1;
    }
    return { tagCount, trackCount };
  }, [ids]);

  const shown = ids.filter(
    (id) =>
      (!tags.length || tags.includes(N[id].tag!)) &&
      (!tracks.length || tracks.includes(trackIdOf(id))),
  );

  const toggle = <K extends string>(set: (f: (prev: K[]) => K[]) => void, k: K) =>
    set((prev) => (prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]));

  return (
    <div className="az">
      <ChipRow
        lead={tr(UI.filterTrack, lang)}
        total={ids.length}
        selected={tracks}
        onToggle={(k) => toggle(setTracks, k)}
        onClear={() => setTracks([])}
        chips={TRACK_IDS.filter((t) => trackCount[t]).map((t) => ({
          key: t,
          label: TRACKS[t].full,
          color: TRACKS[t].color,
          bg: TRACKS[t].bg,
          count: trackCount[t],
        }))}
      />
      <ChipRow
        lead={tr(UI.filterLead, lang)}
        total={ids.length}
        selected={tags}
        onToggle={(k) => toggle(setTags, k)}
        onClear={() => setTags([])}
        chips={TAG_IDS.filter((t) => tagCount[t]).map((t) => ({
          key: t,
          label: TAGS[t].full,
          color: TAGS[t].color,
          bg: TAGS[t].bg,
          count: tagCount[t],
        }))}
      />
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
