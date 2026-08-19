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
  appTitle: { en: 'Moebius Atlas - explorable graph of geometry', uk: 'Атлас Мебіуса — інтерактивний граф геометрії' },
  searchPlaceholder: { en: 'Search topics…', uk: 'Пошук тем…' },
  resultsFor: { en: 'RESULTS FOR', uk: 'РЕЗУЛЬТАТІВ ЗА ЗАПИТОМ' },
  noResults: { en: 'No topics match. Try “angle” or “triangle”.', uk: 'Нічого не знайдено. Спробуйте «кут» або «трикутник».' },
  footerIdea: { en: 'Idea - Serhii Ivanyshak', uk: 'Автор ідеї — Сергій Іванишак' },
  footerDev: { en: 'Developer - Valentyn Lukianets', uk: 'Розробник — Валентин Лук’янець' },
  pathLead: { en: 'Show everything you need to learn before', uk: 'Показати все, що треба вивчити перед темою' },
  pathHint: {
    en: 'TARGET AT TOP · EACH LEVEL BELOW HOLDS THE PREREQUISITES OF THE LEVEL ABOVE · DOWN TO THE BASICS',
    uk: 'МЕТА ЗГОРИ · КОЖЕН РІВЕНЬ НИЖЧЕ — ПЕРЕДУМОВИ РІВНЯ ВИЩЕ · АЖ ДО ОСНОВ',
  },
  target: { en: 'TARGET', uk: 'МЕТА' },
  directPrereqs: { en: 'DIRECT PREREQUISITES', uk: 'ПРЯМІ ПЕРЕДУМОВИ' },
  levelPrefix: { en: 'PREREQUISITES · LEVEL', uk: 'ПЕРЕДУМОВИ · РІВЕНЬ' },
  revealAll: { en: 'Reveal all levels', uk: 'Показати всі рівні' },
  collapseAll: { en: 'Collapse', uk: 'Згорнути' },
  reveal: { en: 'Reveal', uk: 'Показати' },
  revealNext: { en: 'next level', uk: 'наступний рівень' },
  allBasics: { en: 'ALL BASICS REACHED', uk: 'ДОСЯГНУТО ВСІХ ОСНОВ' },
  basicBadge: { en: 'BASIC', uk: 'БАЗА' },
  backToGraph: { en: '← Back', uk: '← Назад' },
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
} satisfies Record<string, L10n>;
