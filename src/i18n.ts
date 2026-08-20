import { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'uk';
export const SUPPORTED_LANGS: Lang[] = ['en', 'uk'];

/** Localized string. English is required and serves as the fallback. */
export type L10n = { en: string } & Partial<Record<Exclude<Lang, 'en'>, string>>;

export const tr = (s: L10n, lang: Lang): string => s[lang] ?? s.en;

/**
 * The displayed language follows the browser preference list
 * (`navigator.languages`); the first supported language wins, otherwise
 * English. `?lang=uk|en` in the query string overrides - handy for testing
 * and for sharing a link in a specific language.
 */
export function detectLang(): Lang {
  const forced = new URLSearchParams(window.location.search).get('lang');
  if (forced && (SUPPORTED_LANGS as string[]).includes(forced)) return forced as Lang;
  for (const l of navigator.languages ?? [navigator.language]) {
    const base = l.toLowerCase().split('-')[0];
    if ((SUPPORTED_LANGS as string[]).includes(base)) return base as Lang;
  }
  return 'en';
}

/**
 * Plural of "topic" for a count. Ukrainian has three forms and picks by the
 * last digit, so an English `n === 1 ? ... : ...` written into the Ukrainian
 * branch would be wrong for 2, 22, 104 and so on.
 */
export const topicsWord = (n: number, lang: Lang): string =>
  lang === 'uk'
    ? n % 10 === 1 && n % 100 !== 11
      ? 'тема'
      : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)
        ? 'теми'
        : 'тем'
    : n === 1
      ? 'topic'
      : 'topics';

export const LangContext = createContext<Lang>('en');
export const useLang = (): Lang => useContext(LangContext);

/** Detects on mount and follows live browser-setting changes. */
export function useDetectedLang(): Lang {
  const [lang, setLang] = useState<Lang>(detectLang);
  useEffect(() => {
    const on = () => setLang(detectLang());
    window.addEventListener('languagechange', on);
    return () => window.removeEventListener('languagechange', on);
  }, []);
  return lang;
}

/** All UI chrome strings. */
export const UI = {
  brand: { en: 'Moebius Atlas', uk: 'Атлас Мебіуса' },
  appTitle: { en: 'Moebius Atlas - school and extracurricular mathematics', uk: 'Атлас Мебіуса — шкільна та позашкільна математика' },
  searchPlaceholder: { en: 'Search topics…', uk: 'Пошук тем…' },
  resultsFor: { en: 'RESULTS FOR', uk: 'РЕЗУЛЬТАТІВ ЗА ЗАПИТОМ' },
  noResults: { en: 'No topics match. Try “fraction” or “triangle”.', uk: 'Нічого не знайдено. Спробуйте «дріб» або «трикутник».' },
  footerIdea: { en: 'Idea - Serhii Ivanyshak', uk: 'Автор ідеї — Сергій Іванишак' },
  footerDev: { en: 'Developer - Valentyn Lukianets', uk: 'Розробник — Валентин Лук’янець' },
  pickerEmpty: { en: 'No topics match', uk: 'Нічого не знайдено' },
  pathLead: { en: 'Show everything you need to learn before', uk: 'Показати все, що треба вивчити перед темою' },
  pathHint: {
    en: 'TARGET AT TOP · EACH LEVEL BELOW HOLDS THE PREREQUISITES OF THE LEVEL ABOVE · DOWN TO THE BASICS',
    uk: 'МЕТА ЗГОРИ · КОЖЕН РІВЕНЬ НИЖЧЕ — ПЕРЕДУМОВИ РІВНЯ ВИЩЕ · АЖ ДО ОСНОВ',
  },
  treeHint: {
    en: 'ARROWS RUN FROM A PREREQUISITE UP TO WHAT IT UNLOCKS · HOVER A CARD OR AN ARROW TO LIGHT IT UP · DRAG THE FIELD TO MOVE AROUND',
    uk: 'СТРІЛКИ ВЕДУТЬ ВІД ПЕРЕДУМОВИ ВГОРУ ДО ТЕМИ, ЯКУ ВОНА ВІДКРИВАЄ · НАВЕДІТЬ НА КАРТКУ АБО СТРІЛКУ, ЩОБ ПІДСВІТИТИ ЇЇ · ТЯГНІТЬ ПОЛЕ, ЩОБ ПЕРЕМІЩАТИСЯ',
  },
  ringsHint: {
    en: 'THE TARGET SITS IN THE MIDDLE · EACH RING OUT IS ONE LEVEL DEEPER INTO THE PREREQUISITES · HOVER A CARD OR AN ARROW TO LIGHT IT UP · DRAG THE FIELD TO MOVE AROUND',
    uk: 'МЕТА В ЦЕНТРІ · КОЖНЕ НАСТУПНЕ КІЛЬЦЕ — НА РІВЕНЬ ГЛИБШЕ В ПЕРЕДУМОВИ · НАВЕДІТЬ НА КАРТКУ АБО СТРІЛКУ, ЩОБ ПІДСВІТИТИ ЇЇ · ТЯГНІТЬ ПОЛЕ, ЩОБ ПЕРЕМІЩАТИСЯ',
  },
  pathRecenter: { en: 'Back to the target', uk: 'Повернутися до мети' },
  pathZoomIn: { en: 'Zoom in', uk: 'Збільшити' },
  pathZoomOut: { en: 'Zoom out', uk: 'Зменшити' },
  target: { en: 'TARGET', uk: 'МЕТА' },
  directPrereqs: { en: 'DIRECT PREREQUISITES', uk: 'ПРЯМІ ПЕРЕДУМОВИ' },
  levelPrefix: { en: 'PREREQUISITES · LEVEL', uk: 'ПЕРЕДУМОВИ · РІВЕНЬ' },
  revealAll: { en: 'Reveal all levels', uk: 'Показати всі рівні' },
  collapseAll: { en: 'Collapse', uk: 'Згорнути' },
  reveal: { en: 'Reveal', uk: 'Показати' },
  revealNext: { en: 'next level', uk: 'наступний рівень' },
  allBasics: { en: 'ALL BASICS REACHED', uk: 'ДОСЯГНУТО ВСІХ ОСНОВ' },
  basicBadge: { en: 'BASIC', uk: 'БАЗА' },
  back: { en: '← Back', uk: '← Назад' },
  openPath: { en: 'Learning path', uk: 'Навчальний шлях' },
  colRequires: { en: 'REQUIRES', uk: 'ПОТРЕБУЄ' },
  colLeadsTo: { en: 'LEADS TO', uk: 'ВЕДЕ ДО' },
  colResources: { en: 'RESOURCES', uk: 'ДЖЕРЕЛА' },
  noPrereqs: { en: 'Nothing - a starting point.', uk: 'Нічого — це відправна точка.' },
  noDeps: { en: 'No dependents in this map yet.', uk: 'Поки що жодна тема не спирається на цю.' },
  wikipedia: { en: 'Wikipedia', uk: 'Вікіпедія' },
  bce: { en: 'BCE', uk: 'до н. е.' },
  circa: { en: 'c. ', uk: 'бл. ' },
  settings: { en: 'Settings', uk: 'Налаштування' },
  setLang: { en: 'Language', uk: 'Мова' },
  setTheme: { en: 'Theme', uk: 'Тема' },
  setAnim: { en: 'Animation', uk: 'Анімація' },
  setText: { en: 'Text size', uk: 'Розмір тексту' },
  optAuto: { en: 'Auto', uk: 'Авто' },
  optDark: { en: 'Dark', uk: 'Темна' },
  optLight: { en: 'Light', uk: 'Світла' },
  optOn: { en: 'On', uk: 'Увімк.' },
  optOff: { en: 'Off', uk: 'Вимк.' },
  optNormal: { en: 'Normal', uk: 'Звичайний' },
  optLarge: { en: 'Large', uk: 'Великий' },
  optXLarge: { en: 'Extra Large', uk: 'Дуже великий' },
  filterAll: { en: 'All', uk: 'Усі' },
  filterLead: { en: 'Filter by type', uk: 'Фільтр за типом' },
  filterTrack: { en: 'Filter by track', uk: 'Фільтр за напрямом' },
  filterSubject: { en: 'Filter by branch', uk: 'Фільтр за розділом' },
  grade: { en: 'Grade', uk: 'клас' },
  filterGrade: { en: 'Filter by grade', uk: 'Фільтр за класом' },
  filters: { en: 'Filters', uk: 'Фільтри' },
  filtersNone: { en: 'showing everything', uk: 'показано всі теми' },
  filtersReset: { en: 'reset all', uk: 'скинути все' },
  pathLayout: { en: 'Layout', uk: 'Вигляд' },
  layoutSteps: { en: 'Steps', uk: 'Ступені' },
  layoutTree: { en: 'Tree', uk: 'Дерево' },
  layoutRings: { en: 'Rings', uk: 'Кільця' },
  progress: { en: 'Progress', uk: 'Прогрес' },
  setProgress: { en: 'Track learning progress', uk: 'Відстежувати прогрес навчання' },
  progTodo: { en: 'Mark as learned', uk: 'Позначити як вивчену' },
  progDone: { en: 'Learned - click to clear', uk: 'Вивчено — натисніть, щоб зняти' },
  progBroken: {
    en: 'Marked as learned, but some prerequisites below are not',
    uk: 'Позначено як вивчену, але нижче є невивчені передумови',
  },
  progLocked: { en: 'Prerequisites are missing - click to ask', uk: 'Бракує передумов — натисніть, щоб запитати' },
  progAsk: {
    en: 'Some prerequisites are not marked yet. Count them as learned too?',
    uk: 'Деякі передумови ще не позначені. Вважати їх теж вивченими?',
  },
  optYes: { en: 'Yes', uk: 'Так' },
  optNo: { en: 'No', uk: 'Ні' },
  profiles: { en: 'Profiles', uk: 'Профілі' },
  profileNew: { en: 'New profile', uk: 'Новий профіль' },
  profileRename: { en: 'Rename profile', uk: 'Перейменувати профіль' },
  profileActivate: { en: 'Use this profile', uk: 'Використовувати цей профіль' },
  profileActive: { en: 'Active profile', uk: 'Активний профіль' },
  profileDelete: { en: 'Delete profile', uk: 'Видалити профіль' },
  profileDeleteConfirm: { en: 'Click again to delete', uk: 'Натисніть ще раз, щоб видалити' },
} satisfies Record<string, L10n>;
