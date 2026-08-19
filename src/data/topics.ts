import { loadTopics } from './loadTopics';
import type { TagId, TagInfo, TopicMap, TrackId, TrackInfo } from './types';

export const TAGS: Record<TagId, TagInfo> = {
  AXM: { label: { en: 'AXIOM', uk: 'АКС' }, full: { en: 'Axiom', uk: 'Аксіома' }, color: '#7a3ea8', bg: '#f2e9fa' },
  DEF: { label: { en: 'DEF', uk: 'ОЗН' }, full: { en: 'Definition', uk: 'Означення' }, color: '#c03434', bg: '#fae9e6' },
  THM: { label: { en: 'THM', uk: 'ТЕОР' }, full: { en: 'Theorem', uk: 'Теорема' }, color: '#9a5b12', bg: '#faf0e0' },
  LEM: { label: { en: 'LEM', uk: 'ЛЕМА' }, full: { en: 'Lemma', uk: 'Лема' }, color: '#0e7a6c', bg: '#e2f5f1' },
  CNJ: { label: { en: 'CNJ', uk: 'ГІП' }, full: { en: 'Conjecture', uk: 'Гіпотеза' }, color: '#b0355c', bg: '#fae8ee' },
  MTD: { label: { en: 'MTD', uk: 'МЕТ' }, full: { en: 'Method', uk: 'Метод' }, color: '#3f7a1e', bg: '#ebf5e2' },
};

export const TRACKS: Record<TrackId, TrackInfo> = {
  school: { full: { en: 'School', uk: 'Шкільна програма' }, color: '#2563c7', bg: '#e8effa' },
  olympiad: { full: { en: 'Olympiad', uk: 'Олімпіадна' }, color: '#b0355c', bg: '#fae8ee' },
  advanced: { full: { en: 'Higher maths', uk: 'Вища математика' }, color: '#5b4bb8', bg: '#eceafa' },
};

/** Topic content lives in `src/content/<lang>/<id>.md` - one file per topic per language. */
export const TOPICS: TopicMap = loadTopics();
