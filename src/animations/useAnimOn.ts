import { useSyncExternalStore } from 'react';

const read = (): boolean => document.documentElement.dataset.anim !== 'off';

function subscribe(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-anim'] });
  return () => observer.disconnect();
}

/**
 * Whether Framer Motion should animate at all - the same `data-anim` the
 * settings side effect stamps on `<html>` for the `transition: none` CSS rule
 * in styles.css. That rule cannot reach Framer's own transitions (they are
 * driven inline, not through the `transition` property), so every animation
 * component reads this instead of assuming motion is welcome.
 */
export function useAnimOn(): boolean {
  return useSyncExternalStore(subscribe, read, () => true);
}
