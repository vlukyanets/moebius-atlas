/**
 * Whether the reader wants motion: the same `data-anim` the settings stamp on
 * `<html>` for the `transition: none` rule in styles.css. That rule cannot
 * reach what a scene moves frame by frame, nor a scripted scroll, so those
 * read this instead.
 */
import { useSyncExternalStore } from 'react';

const read = (): boolean => document.documentElement.dataset.anim !== 'off';

function subscribe(callback: () => void): () => void {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-anim'] });
  return () => observer.disconnect();
}

export function useAnimOn(): boolean {
  return useSyncExternalStore(subscribe, read, () => true);
}
