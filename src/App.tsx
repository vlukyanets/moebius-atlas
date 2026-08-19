import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_VIEW, VIEWS, viewById } from './data/views';
import { detailRoute, useRoute, viewRoute } from './router';
import type { ViewId } from './data/types';
import { LangContext, UI, tr, useDetectedLang } from './i18n';
import { SettingsContext, applySettings, loadSettings, saveSettings, type Settings } from './settings';
import { TopBar } from './components/TopBar';
import { AzList } from './components/AzList';
import { SearchResults } from './components/SearchResults';
import { PathView } from './components/PathView';
import { TopicDetail } from './components/TopicDetail';

export default function App() {
  const detected = useDetectedLang();
  const [settings, setSettings] = useState<Settings>(loadSettings);
  const lang = settings.lang ?? detected;
  const { route, navigate } = useRoute();
  const [query, setQuery] = useState('');
  const hasQuery = query.trim().length > 0;

  const updateSettings = useCallback((patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      saveSettings(next);
      return next;
    });
  }, []);

  useEffect(() => {
    applySettings(settings);
    // 'auto' theme/animation follow live system-preference changes.
    const mqs = [
      window.matchMedia('(prefers-color-scheme: dark)'),
      window.matchMedia('(prefers-reduced-motion: reduce)'),
    ];
    const on = () => applySettings(settings);
    mqs.forEach((m) => m.addEventListener('change', on));
    return () => mqs.forEach((m) => m.removeEventListener('change', on));
  }, [settings]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = tr(UI.appTitle, lang);
  }, [lang]);

  // An external hash change (deep link, back/forward) must reveal its target,
  // so any active search overlay is dismissed on navigation.
  useEffect(() => {
    setQuery('');
  }, [route]);

  const openTopic = (id: string) => {
    setQuery('');
    navigate(detailRoute(route, id));
  };

  const setView = (v: ViewId) => {
    setQuery('');
    navigate(viewRoute(route, { view: v }));
  };

  const viewKind = viewById(route.view)?.kind ?? 'az';

  return (
    <SettingsContext.Provider value={{ settings, update: updateSettings }}>
    <LangContext.Provider value={lang}>
      <div className="app">
        <TopBar
          view={route.view}
          query={query}
          onHome={() => {
            setQuery('');
            navigate(viewRoute(route, { view: DEFAULT_VIEW }));
          }}
          onView={setView}
          onQuery={setQuery}
        />

        {hasQuery && <SearchResults query={query} onOpen={openTopic} />}

        {!hasQuery && route.screen === 'detail' && (
          <TopicDetail
            id={route.detailId}
            onBack={() => navigate(viewRoute(route, {}))}
            onOpen={openTopic}
            onShowPath={(id) => {
              setQuery('');
              const pathView = VIEWS.find((v) => v.kind === 'path');
              if (pathView) navigate(viewRoute(route, { view: pathView.id, pathTarget: id }));
            }}
          />
        )}

        {!hasQuery && route.screen === 'view' && (
          <>
            {viewKind === 'az' && <AzList onOpen={openTopic} />}
            {viewKind === 'path' && (
              <PathView
                target={route.pathTarget}
                onTarget={(id) => navigate(viewRoute(route, { pathTarget: id }))}
                onOpen={openTopic}
              />
            )}
          </>
        )}

        <footer className="footer">
          <span>{tr(UI.footerIdea, lang)}</span>
          <span>·</span>
          <span>{tr(UI.footerDev, lang)}</span>
          <span>·</span>
          <span>2026</span>
        </footer>
      </div>
    </LangContext.Provider>
    </SettingsContext.Provider>
  );
}
