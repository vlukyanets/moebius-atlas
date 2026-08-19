import { loadTopics } from './loadTopics';
import type { SubjectId, SubjectInfo, TagId, TagInfo, TopicMap, TrackId, TrackInfo } from './types';

export const TAGS: Record<TagId, TagInfo> = {
  AXM: { label: { en: 'AXIOM', uk: 'АКС' }, full: { en: 'Axiom', uk: 'Аксіома' }, color: '#7a3ea8', bg: '#f2e9fa', colorDark: '#c6a2e6', bgDark: '#2b2140' },
  DEF: { label: { en: 'DEF', uk: 'ОЗН' }, full: { en: 'Definition', uk: 'Означення' }, color: '#c03434', bg: '#fae9e6', colorDark: '#e8a09a', bgDark: '#3a2222' },
  THM: { label: { en: 'THM', uk: 'ТЕОР' }, full: { en: 'Theorem', uk: 'Теорема' }, color: '#9a5b12', bg: '#faf0e0', colorDark: '#dcb377', bgDark: '#382b18' },
  LEM: { label: { en: 'LEM', uk: 'ЛЕМА' }, full: { en: 'Lemma', uk: 'Лема' }, color: '#0e7a6c', bg: '#e2f5f1', colorDark: '#6cc9b9', bgDark: '#16322e' },
  CNJ: { label: { en: 'CNJ', uk: 'ГІП' }, full: { en: 'Conjecture', uk: 'Гіпотеза' }, color: '#b0355c', bg: '#fae8ee', colorDark: '#e79db4', bgDark: '#3a1f2a' },
  MTD: { label: { en: 'MTD', uk: 'МЕТ' }, full: { en: 'Method', uk: 'Метод' }, color: '#3f7a1e', bg: '#ebf5e2', colorDark: '#a3d183', bgDark: '#22321a' },
};

export const SUBJECTS: Record<SubjectId, SubjectInfo> = {
  geometry: { full: { en: 'Geometry', uk: 'Геометрія' }, color: '#2563c7', bg: '#e8effa', colorDark: '#7ba5ea', bgDark: '#1c2841' },
  algebra: { full: { en: 'Algebra', uk: 'Алгебра' }, color: '#9a5b12', bg: '#faf0e0', colorDark: '#dcb377', bgDark: '#382b18' },
  other: { full: { en: 'Others', uk: 'Інше' }, color: '#4a5568', bg: '#eceef2', colorDark: '#a6b2c4', bgDark: '#232a38' },
};

export const TRACKS: Record<TrackId, TrackInfo> = {
  school: { full: { en: 'School', uk: 'Шкільна програма' }, color: '#2563c7', bg: '#e8effa', colorDark: '#7ba5ea', bgDark: '#1c2841' },
  olympiad: { full: { en: 'Olympiad', uk: 'Олімпіадна' }, color: '#b0355c', bg: '#fae8ee', colorDark: '#e79db4', bgDark: '#3a1f2a' },
  advanced: { full: { en: 'Higher maths', uk: 'Вища математика' }, color: '#5b4bb8', bg: '#eceafa', colorDark: '#a79cec', bgDark: '#252143' },
  other: { full: { en: 'Others', uk: 'Інше' }, color: '#4a5568', bg: '#eceef2', colorDark: '#a6b2c4', bgDark: '#232a38' },
};

/** Topic content lives in `src/content/<lang>/<id>.md` - one file per topic per language. */
export const TOPICS: TopicMap = loadTopics();
