/**
 * Core object model: topics form a DAG via `requires` (prerequisite) edges.
 *
 * All human-readable content fields are localized (`L10n`): English is the
 * required fallback, other languages are optional per string.
 */
import type { L10n } from '../i18n';

/** Short tag ids used in topic frontmatter. */
export type TagId = 'AXM' | 'DEF' | 'THM' | 'LEM' | 'CNJ' | 'MTD';

export interface TagInfo {
  /** Short monospace abbreviation (e.g. "THM"). */
  label: L10n;
  /** Full name shown in badges ("Theorem"). */
  full: L10n;
  /** Badge text color. */
  color: string;
  /** Badge background color. */
  bg: string;
}

/** Curriculum track a topic belongs to. Topics without one count as `school`. */
export type TrackId = 'school' | 'olympiad' | 'advanced';

export interface TrackInfo {
  /** Full name shown on the filter chip ("Olympiad"). */
  full: L10n;
  /** Chip accent color. */
  color: string;
  /** Chip background when active. */
  bg: string;
}

/** Id of a view from `views.ts` ('az', 'path'). */
export type ViewId = string;

/** An external learning resource linked from a topic page. */
export interface Resource {
  label: string;
  url: string;
}

/** A topic, authored in `src/content/<lang>/<id>.md`. */
export interface TopicSeed {
  name: L10n;
  /** Short plain-text summary (cards, tooltips) - derived from the body. */
  summary: L10n;
  /** Full Markdown body (KaTeX via $…$ / $$…$$), shown on the detail page. */
  body?: L10n;
  tag?: TagId;
  /** Curriculum track; absent means `school`. */
  track?: TrackId;
  /** 1..5 shown as ●●●○○. */
  difficulty?: number;
  /** Year of discovery; negative = BCE. */
  year?: number;
  /** Prerequisite topic ids (edges point prereq -> this). */
  requires?: string[];
  /**
   * External resources per language, authored in each language file's
   * frontmatter. Falls back to English, then to a Wikipedia search link.
   */
  resources?: Record<string, Resource[]>;
}

export type TopicMap = Record<string, TopicSeed>;
