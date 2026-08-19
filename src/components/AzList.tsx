import { useEffect, useMemo, useState } from 'react';
import { N, formatGrade, subjectIdOf, tagOf, topicName, trackIdOf } from '../data/atlas';
import { SUBJECTS, TAGS, TRACKS } from '../data/topics';
import type { L10n } from '../i18n';
import type { SubjectId, TagId, TrackId } from '../data/types';
import { UI, tr, useLang } from '../i18n';
import { swatch } from './palette';
import { TagBadge } from './TagBadge';

const TAG_IDS = Object.keys(TAGS) as TagId[];
const TRACK_IDS = Object.keys(TRACKS) as TrackId[];
const SUBJECT_IDS = Object.keys(SUBJECTS) as SubjectId[];

const FILTER_KEY = 'moebius-atlas-az-filters';

/**
 * The chip selection outlives the view: opening a topic and coming back, or
 * reloading, keeps whatever was filtered. Stored apart from `Settings` because
 * this is view state, not a preference the settings menu exposes.
 */
interface StoredFilters {
  tags: TagId[];
  tracks: TrackId[];
  subjects: SubjectId[];
  grades: string[];
  open: boolean;
}

const NO_FILTERS: StoredFilters = { tags: [], tracks: [], subjects: [], grades: [], open: false };

/** Unknown ids - a renamed track, a dropped tag - are discarded on the way in. */
function loadFilters(): StoredFilters {
  try {
    const raw = JSON.parse(localStorage.getItem(FILTER_KEY) ?? '{}');
    const keep = <K extends string>(v: unknown, known: K[]): K[] =>
      Array.isArray(v) ? (v.filter((x) => known.includes(x as K)) as K[]) : [];
    return {
      tags: keep(raw.tags, TAG_IDS),
      tracks: keep(raw.tracks, TRACK_IDS),
      subjects: keep(raw.subjects, SUBJECT_IDS),
      grades: Array.isArray(raw.grades) ? raw.grades.filter((g: unknown) => typeof g === 'string') : [],
      open: raw.open === true,
    };
  } catch {
    return { ...NO_FILTERS };
  }
}

function saveFilters(f: StoredFilters): void {
  try {
    localStorage.setItem(FILTER_KEY, JSON.stringify(f));
  } catch {
    /* private mode etc. - the filters just won't survive the page */
  }
}

interface ChipDef<K extends string> {
  key: K;
  /** A plain string is used as is; an `L10n` pair is translated. */
  label: L10n | string;
  color: string;
  bg: string;
  colorDark: string;
  bgDark: string;
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
            disabled={!c.count}
            style={swatch(c)}
            onClick={() => onToggle(c.key)}
          >
            <span className="dot" />
            {typeof c.label === 'string' ? c.label : tr(c.label, lang)}
            <span className="count">{c.count}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * Flat A-Z index: every tagged topic, alphabetical. Three independent chip
 * rows filter it - by branch of mathematics, by curriculum track and by
 * statement type. An empty selection in a row means "everything" for that
 * row; the rows combine with AND.
 */
export function AzList({ onOpen }: { onOpen: (id: string) => void }) {
  const lang = useLang();
  const [saved] = useState(loadFilters);
  const [tags, setTags] = useState<TagId[]>(saved.tags);
  const [tracks, setTracks] = useState<TrackId[]>(saved.tracks);
  const [subjects, setSubjects] = useState<SubjectId[]>(saved.subjects);
  /** Chip keys, i.e. grades rendered as strings - same shape as the other rows. */
  const [grades, setGrades] = useState<string[]>(saved.grades);
  const [open, setOpen] = useState(saved.open);

  useEffect(() => {
    saveFilters({ tags, tracks, subjects, grades, open });
  }, [tags, tracks, subjects, grades, open]);

  const ids = useMemo(
    () =>
      Object.keys(N)
        .filter((id) => tagOf(id))
        .sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang)),
    [lang],
  );

  const { tagCount, trackCount, subjectCount } = useMemo(() => {
    const tagCount = {} as Record<TagId, number>;
    const trackCount = {} as Record<TrackId, number>;
    const subjectCount = {} as Record<SubjectId, number>;
    for (const id of ids) {
      tagCount[N[id].tag!] = (tagCount[N[id].tag!] ?? 0) + 1;
      const t = trackIdOf(id);
      trackCount[t] = (trackCount[t] ?? 0) + 1;
      const s = subjectIdOf(id);
      subjectCount[s] = (subjectCount[s] ?? 0) + 1;
    }
    return { tagCount, trackCount, subjectCount };
  }, [ids]);

  // Everything the other three rows let through. The grade chips are built
  // from exactly this set, so a grade with nothing behind it never appears.
  const beforeGrade = useMemo(
    () =>
      ids.filter(
        (id) =>
          (!tags.length || tags.includes(N[id].tag!)) &&
          (!tracks.length || tracks.includes(trackIdOf(id))) &&
          (!subjects.length || subjects.includes(subjectIdOf(id))),
      ),
    [ids, tags, tracks, subjects],
  );

  const gradeCount = useMemo(() => {
    const c = new Map<number, number>();
    for (const id of beforeGrade) {
      const g = N[id].grade;
      if (g !== undefined) c.set(g, (c.get(g) ?? 0) + 1);
    }
    return c;
  }, [beforeGrade]);

  const gradeIds = [...gradeCount.keys()].sort((a, b) => a - b);
  const gradedTotal = [...gradeCount.values()].reduce((a, b) => a + b, 0);
  const gradeKey = gradeIds.join(',');

  // Grades live in the school track only, so the row shows up when school
  // topics are on screen. Chips that vanish drop out of the selection too,
  // otherwise a hidden grade would keep filtering the list silently.
  const showGrades = !tracks.length || tracks.includes('school');
  useEffect(() => {
    if (!showGrades) setGrades([]);
    else setGrades((prev) => prev.filter((g) => gradeKey.split(',').includes(g)));
  }, [showGrades, gradeKey]);

  // A grade narrows the school topics only: anything without a grade - the
  // olympiad and higher-maths ones - passes this row untouched.
  const shown = beforeGrade.filter(
    (id) =>
      !grades.length || N[id].grade === undefined || grades.includes(String(N[id].grade)),
  );

  const toggle = <K extends string>(set: (f: (prev: K[]) => K[]) => void, k: K) =>
    set((prev) => (prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]));

  // What the collapsed header reports instead of the rows themselves.
  const active = [
    ...subjects.map((s) => tr(SUBJECTS[s].full, lang)),
    ...tracks.map((t) => tr(TRACKS[t].full, lang)),
    ...(showGrades ? grades.map((g) => formatGrade(Number(g), lang)) : []),
    ...tags.map((t) => tr(TAGS[t].full, lang)),
  ];

  const clearAll = () => {
    setSubjects([]);
    setTracks([]);
    setGrades([]);
    setTags([]);
  };

  return (
    <div className="az">
      <div className="az-filter-head">
        <button className="filters-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="caret">{open ? '▾' : '▸'}</span>
          {tr(UI.filters, lang)}
          {!!active.length && <span className="badge">{active.length}</span>}
        </button>
        <span className="summary">{active.length ? active.join(' · ') : tr(UI.filtersNone, lang)}</span>
        <button className="filters-clear" onClick={clearAll} disabled={!active.length}>
          {tr(UI.filtersReset, lang)}
        </button>
        <span className="shown-count">{shown.length}</span>
      </div>
      {open && (
      <>
      <ChipRow
        lead={tr(UI.filterSubject, lang)}
        total={ids.length}
        selected={subjects}
        onToggle={(k) => toggle(setSubjects, k)}
        onClear={() => setSubjects([])}
        chips={SUBJECT_IDS.map((s) => ({
          key: s,
          label: SUBJECTS[s].full,
          color: SUBJECTS[s].color,
          bg: SUBJECTS[s].bg,
          colorDark: SUBJECTS[s].colorDark,
          bgDark: SUBJECTS[s].bgDark,
          count: subjectCount[s] ?? 0,
        }))}
      />
      <ChipRow
        lead={tr(UI.filterTrack, lang)}
        total={ids.length}
        selected={tracks}
        onToggle={(k) => toggle(setTracks, k)}
        onClear={() => setTracks([])}
        chips={TRACK_IDS.map((t) => ({
          key: t,
          label: TRACKS[t].full,
          color: TRACKS[t].color,
          bg: TRACKS[t].bg,
          colorDark: TRACKS[t].colorDark,
          bgDark: TRACKS[t].bgDark,
          count: trackCount[t] ?? 0,
        }))}
      />
      {showGrades && (
        <ChipRow
          lead={tr(UI.filterGrade, lang)}
          total={gradedTotal}
          selected={grades}
          onToggle={(k) => toggle(setGrades, k)}
          onClear={() => setGrades([])}
          chips={gradeIds.map((g) => ({
            key: String(g),
            label: formatGrade(g, lang),
            color: TRACKS.school.color,
            bg: TRACKS.school.bg,
            colorDark: TRACKS.school.colorDark,
            bgDark: TRACKS.school.bgDark,
            count: gradeCount.get(g) ?? 0,
          }))}
        />
      )}
      <ChipRow
        lead={tr(UI.filterLead, lang)}
        total={ids.length}
        selected={tags}
        onToggle={(k) => toggle(setTags, k)}
        onClear={() => setTags([])}
        chips={TAG_IDS.map((t) => ({
          key: t,
          label: TAGS[t].full,
          color: TAGS[t].color,
          bg: TAGS[t].bg,
          colorDark: TAGS[t].colorDark,
          bgDark: TAGS[t].bgDark,
          count: tagCount[t] ?? 0,
        }))}
      />
      </>
      )}
      <div className="az-grid">
        {shown.map((id) => {
          const tag = tagOf(id)!;
          return (
            <div key={id} className="az-row" style={swatch(tag)} onClick={() => onOpen(id)}>
              <span className="dot" />
              <span className="name">{topicName(id, lang)}</span>
              <TagBadge tag={tag} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
