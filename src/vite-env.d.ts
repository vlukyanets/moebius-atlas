/// <reference types="vite/client" />

/**
 * The content modules built by the `atlas-content` plugin in `vite.config.ts`:
 * the frontmatter of every topic, and one lazily loaded bundle of bodies per
 * language.
 */
declare module 'virtual:atlas-meta' {
  /** id -> lang -> the `---` block of `src/content/<lang>/<id>.md`. */
  const meta: Record<string, Record<string, string>>;
  export default meta;
}

declare module 'virtual:atlas-bodies' {
  /** lang -> loader of that language's bodies, keyed by topic id. */
  const bodies: Record<string, () => Promise<{ default: Record<string, string> }>>;
  export default bodies;
}
