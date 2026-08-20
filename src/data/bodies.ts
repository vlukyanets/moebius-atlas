/**
 * Topic bodies, fetched when a topic page opens rather than shipped with the
 * app. They are two thirds of the content and nothing but the detail page
 * renders them, so the `atlas-content` plugin keeps them out of the entry
 * chunk and hands them over one language at a time.
 *
 * A language is fetched once and then answered from memory, so only the first
 * topic page of a session shows the placeholder. A missing translation falls
 * back to English - the same rule `tr()` applies to the eagerly loaded strings.
 */
import { useEffect, useState } from 'react';
import BODIES from 'virtual:atlas-bodies';

/** Bodies per language, once their chunk has arrived. */
const LOADED: Record<string, Record<string, string>> = {};
const PENDING: Record<string, Promise<Record<string, string>>> = {};

async function langBodies(lang: string): Promise<Record<string, string>> {
  const cached = LOADED[lang];
  if (cached) return cached;
  // Two topic pages opened in the same tick must share one request.
  PENDING[lang] ??= (BODIES[lang]?.() ?? Promise.resolve({ default: {} })).then((m) => (LOADED[lang] = m.default));
  return PENDING[lang];
}

/** The body of a topic, or `undefined` while its language is still on the way. */
function bodyOf(id: string, lang: string): string | undefined {
  return LOADED[lang]?.[id] ?? LOADED.en?.[id];
}

export async function loadBody(id: string, lang: string): Promise<string> {
  const own = (await langBodies(lang))[id];
  // A topic without a translation of its own is read in English.
  return own ?? (lang === 'en' ? '' : (await langBodies('en'))[id]) ?? '';
}

/**
 * The body of a topic, or `null` while it is being fetched. A language already
 * in memory answers on the first render, so switching topics never flashes.
 */
export function useTopicBody(id: string, lang: string): string | null {
  const [body, setBody] = useState<string | null>(() => bodyOf(id, lang) ?? null);

  useEffect(() => {
    let live = true;
    setBody(bodyOf(id, lang) ?? null);
    loadBody(id, lang).then((text) => {
      if (live) setBody(text);
    });
    return () => {
      live = false;
    };
  }, [id, lang]);

  return body;
}
