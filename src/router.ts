import { useCallback, useEffect, useState } from 'react';
import { N } from './data/atlas';
import { DEFAULT_VIEW, viewById } from './data/views';
import type { ViewId } from './data/types';

/**
 * Hash-based routes (GitHub Pages friendly - no server rewrites needed):
 *   #/az                           A–Z index
 *   #/path/triangle-angle-sum      prerequisite path to a target topic
 *   #/topic/triangle-angle-sum     topic detail page
 */
export type Route =
  | { screen: 'view'; view: ViewId; pathTarget: string }
  | { screen: 'detail'; view: ViewId; pathTarget: string; detailId: string };

/** Empty means "no explicit target": the path view then falls back to the
 * first target in the current language's alphabetical order. */
const DEFAULT_PATH_TARGET = '';

/** The default view without an explicit target is the bare root URL. */
export function routeToHash(r: Route): string {
  if (r.screen === 'detail') return `#/topic/${r.detailId}`;
  const isPath = viewById(r.view)?.kind === 'path';
  if (isPath && r.pathTarget) return `#/${r.view}/${r.pathTarget}`;
  return r.view === DEFAULT_VIEW ? '' : `#/${r.view}`;
}

export function parseHash(hash: string, prev?: Route): Route {
  const [head, ...rest] = hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const keep = {
    view: prev?.view ?? DEFAULT_VIEW,
    pathTarget: prev?.pathTarget ?? DEFAULT_PATH_TARGET,
  };
  if (head === 'topic' && rest[0] && N[rest[0]]) {
    return { screen: 'detail', ...keep, detailId: rest[0] };
  }
  const view = head ? viewById(head) : undefined;
  if (view?.kind === 'path') {
    const t = rest[0] && N[rest[0]] ? rest[0] : keep.pathTarget;
    return { screen: 'view', view: view.id, pathTarget: t };
  }
  if (view) return { screen: 'view', view: view.id, pathTarget: keep.pathTarget };
  return { screen: 'view', view: DEFAULT_VIEW, pathTarget: keep.pathTarget };
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHash = () => setRoute((prev) => parseHash(window.location.hash, prev));
    window.addEventListener('hashchange', onHash);
    window.addEventListener('popstate', onHash);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('popstate', onHash);
    };
  }, []);

  const navigate = useCallback((r: Route) => {
    // Keep view context (view/pathTarget) alive across detail pages so
    // "Back" restores the exact prior state.
    setRoute(r);
    const hash = routeToHash(r);
    // An empty hash means the root URL - push the bare path, not "#".
    const url = hash || window.location.pathname + window.location.search;
    if (window.location.hash !== hash) window.history.pushState(null, '', url);
    if (r.screen === 'detail') window.scrollTo(0, 0);
  }, []);

  return { route, navigate };
}

/** Convenience helpers for building routes off an existing one. */
export const viewRoute = (r: Route, patch: Partial<Omit<Route, 'screen' | 'detailId'>>): Route => ({
  screen: 'view',
  view: patch.view ?? r.view,
  pathTarget: patch.pathTarget ?? r.pathTarget,
});

export const detailRoute = (r: Route, id: string): Route => ({
  screen: 'detail',
  view: r.view,
  pathTarget: r.pathTarget,
  detailId: id,
});
