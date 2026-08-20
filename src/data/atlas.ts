/**
 * Everything derived from the `requires` relation: the topic index, the reverse
 * index ("leads to"), search, prerequisite levels for the path view, and the
 * label helpers built on the static tables in `topics.ts`.
 */
import { SUBJECTS, TAGS, TOPICS, TRACKS } from './topics';
import type { SubjectId, SubjectInfo, TagInfo, TopicSeed, TrackId, TrackInfo } from './types';
import { UI, tr, type Lang } from '../i18n';

/** All topics by id. */
export const N: Record<string, TopicSeed> = TOPICS;

/** reverse `requires` index: topic -> topics that list it as a prerequisite. */
const dependentsOf: Record<string, string[]> = {};
for (const id of Object.keys(N)) {
  for (const p of N[id].requires ?? []) (dependentsOf[p] ??= []).push(id);
}

export const tagOf = (id: string): TagInfo | null => {
  const t = N[id];
  return t?.tag ? TAGS[t.tag] : null;
};

export const subjectIdOf = (id: string): SubjectId => N[id]?.subject ?? 'geometry';

export const subjectOf = (id: string): SubjectInfo => SUBJECTS[subjectIdOf(id)];

export const trackIdOf = (id: string): TrackId => N[id].track;

export const trackOf = (id: string): TrackInfo => TRACKS[trackIdOf(id)];

export const topicName = (id: string, lang: Lang): string => tr(N[id].name, lang);

export function dependents(id: string): string[] {
  return dependentsOf[id] ?? [];
}

/**
 * Every prerequisite of `id`, transitively - the whole chain the topic rests
 * on, itself excluded. Memoized: the progress checkboxes ask for this on every
 * render, and the answer only changes when the content does. The `seen` guard
 * keeps a hand-authored cycle from hanging the page.
 */
const ancestorsOf: Record<string, string[]> = {};

export function ancestors(id: string): string[] {
  const cached = ancestorsOf[id];
  if (cached) return cached;
  const seen = new Set<string>();
  const walk = (cur: string) => {
    for (const p of N[cur]?.requires ?? []) {
      if (!N[p] || seen.has(p)) continue;
      seen.add(p);
      walk(p);
    }
  };
  walk(id);
  return (ancestorsOf[id] = [...seen]);
}

/**
 * Name-substring search over topics, max 12 results.
 * Matches against every translation so users can type in either language.
 */
export function search(query: string): string[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return Object.keys(N)
    .filter((id) => Object.values(N[id].name).some((v) => v.toLowerCase().includes(q)))
    .slice(0, 12);
}

/** Topics eligible as a prerequisite-path target: tagged and with prereqs. */
export function pathTargets(lang: Lang): string[] {
  return Object.keys(N)
    .filter((id) => (N[id].requires ?? []).length > 0 && tagOf(id))
    .sort((a, b) => topicName(a, lang).localeCompare(topicName(b, lang), lang));
}

/**
 * Prerequisite levels for `target`: level 0 is the target, level k+1 holds
 * the prerequisites of level k. A topic needed on several levels sinks to
 * its deepest one, so every card depends only on cards above it. The
 * ancestor set guards against cycles.
 */
export function prereqLevels(target: string): string[][] {
  const depthOf: Record<string, number> = {};
  const assign = (id: string, d: number, anc: Set<string>) => {
    if (anc.has(id) || !N[id]) return;
    if (depthOf[id] === undefined || d > depthOf[id]) depthOf[id] = d;
    const next = new Set(anc);
    next.add(id);
    for (const p of N[id].requires ?? []) assign(p, d + 1, next);
  };
  assign(target, 0, new Set());
  const maxD = Math.max(...Object.values(depthOf));
  const levels: string[][] = Array.from({ length: maxD + 1 }, () => []);
  for (const id of Object.keys(depthOf)) levels[depthOf[id]].push(id);
  return levels;
}

/** "Grade 8" in English, "8 клас" in Ukrainian. */
export const formatGrade = (g: number, lang: Lang): string =>
  lang === 'uk' ? `${g} ${tr(UI.grade, lang)}` : `${tr(UI.grade, lang)} ${g}`;

export const formatYear = (y: number, lang: Lang, circa = false): string => {
  const prefix = circa ? tr(UI.circa, lang) : '';
  return y < 0 ? `${prefix}${Math.abs(y)} ${tr(UI.bce, lang)}` : `${prefix}${y}`;
};

/** Language-matched Wikipedia search link. */
export const wikiUrl = (name: string, lang: Lang): string => {
  const host = lang === 'uk' ? 'uk.wikipedia.org' : 'en.wikipedia.org';
  const suffix = lang === 'uk' ? ' геометрія' : ' geometry';
  return `https://${host}/wiki/Special:Search?search=${encodeURIComponent(name + suffix)}`;
};
