# AGENTS.md

Working notes for AI agents and new contributors on **Moebius Atlas** - a Vite +
React 18 + TypeScript single-page app that renders school and extracurricular
mathematics as an explorable atlas of topics linked by prerequisites, in English
and Ukrainian.

`README.md` describes the product for a human reader. This file describes how to
change it without breaking it. Read both before a first edit.

## Repo map

| Path | Responsibility |
| --- | --- |
| `index.html` | Shell + pre-paint settings script (theme/anim/text stamped on `<html>` before React boots) |
| `src/main.tsx` | React entry point |
| `src/App.tsx` | Top-level composition: settings/language providers, route switch, search overlay, footer |
| `src/router.ts` | Hash router (`#/az`, `#/path/<id>`, `#/topic/<id>`), `useRoute`, route builders |
| `src/settings.ts` | `Settings` type, `localStorage` load/save, `applySettings` (writes `data-theme`/`data-anim`/`data-text`) |
| `src/i18n.ts` | `Lang`, `L10n`, `tr()`, browser language detection, and `UI` - every UI chrome string |
| `src/styles.css` | All styling. Design tokens in `:root`, dark palette in `:root[data-theme='dark']` |
| `src/data/types.ts` | Object model: `TopicSeed`, `TagId`, `TrackId`, `SubjectId`, `Resource` |
| `src/data/loadTopics.ts` | Build-time Markdown loader + frontmatter parser (`parseFile`), summary extraction |
| `src/data/topics.ts` | Static tables: `TAGS`, `SUBJECTS`, `TRACKS` (labels + colors) and the loaded `TOPICS` |
| `src/data/graph.ts` | Everything derived from the `requires` relation: reverse index (`dependents`), `search`, `prereqLevels`, formatting helpers |
| `src/data/views.ts` | Loads the tab definitions from `src/views/<lang>/*.md` |
| `src/content/<lang>/<id>.md` | Topic content - one file per topic per language (~350 each) |
| `src/views/<lang>/<id>.md` | Tab definitions (`kind`, `order`, localized title) |
| `src/components/` | Presentation only - see below |
| `public/logo.svg` | Favicon; must stay visually in sync with `src/components/Logo.tsx` |
| `.github/workflows/deploy.yml` | Builds and publishes `dist/` to GitHub Pages on push to `master` |

Components: `TopBar` (brand, tabs, search field, settings gear), `SettingsMenu`,
`AzList` (A-Z index + filter chip rows), `PathView` (layered prerequisite tree),
`TopicPicker` (searchable combobox for the path target), `TopicDetail` (Markdown
body, meta line, REQUIRES / LEADS TO / RESOURCES columns), `SearchResults`,
`TagBadge`, `Icons`, `Logo`.

## Commands

```bash
npm install
npm run dev       # dev server
npm run build     # tsc -b + vite build -> dist/
npm run preview   # serve the production build
```

There is no test suite and no linter. **`npm run build` is the only gate** - run
it after any change under `src/`. Content errors surface there too: the loader
throws with the offending file name.

## Content rules

`src/content/en/<id>.md` is **canonical**. The id is the file name.

- English frontmatter carries all topic metadata: `title`, `tag`, `track`,
  `grade`, `subject`, `year`, `requires`, `resources`.
- Translation files (`src/content/uk/<id>.md`) carry **only** `title` and their
  own `resources`. Any other metadata there is ignored - do not duplicate it.
- Every translation needs its English counterpart, or the build throws.
- Never mix languages inside one file.
- `tag` is one of `AXM`, `DEF`, `THM`, `LEM`, `CNJ`, `MTD`.
- `track` is one of `school`, `olympiad`, `advanced`, `other`. A missing or
  unknown value falls back to `other` with a console warning - treat that
  warning as a bug to fix, not as noise.
- `grade` (5-9) is for school-track topics only. Other tracks must omit it.
- `subject` defaults to `geometry` when absent; set `algebra` explicitly.
- `year` is the year of discovery; negative means BCE.
- `resources` is a comma-separated list of Markdown links, authored per
  language. A language without its own list falls back to English; a topic with
  no list at all gets an automatic Wikipedia search link.
- Quote a frontmatter value that contains a colon: `title: "Right Triangles: ..."`.
- The body is full Markdown with KaTeX (`$...$` inline, `$$` on its own lines for
  display). The first plain paragraph becomes the summary - keep it a real
  sentence, not a heading or a formula.

### Prerequisite invariants

- `requires` lists prerequisite ids that **must exist** in `src/content/en/`.
- The relation stays **acyclic** and **transitively reduced**: never add `A -> C`
  when a chain `A -> B -> ... -> C` already exists. The path view depends on
  this; a redundant edge makes the levels wrong, not merely noisy.
- Inserting a topic into the middle of a chain means rewiring its neighbours,
  not only appending an edge.

With ~350 topics per language, a bulk content change belongs in a throwaway
script that also verifies its own result, not in 350 hand edits.

## Code rules

- Match the surrounding style: named exports, arrow helpers for one-liners,
  explicit return types on exported functions.
- Comments explain **why**, not what. Each file opens with a JSDoc block stating
  its responsibility - keep it accurate when behaviour changes.
- No new dependencies without a reason. The stack is deliberately small: React,
  react-markdown, remark-math, rehype-katex, KaTeX.
- Components render. Anything derived from the `requires` relation belongs in
  `src/data/graph.ts`.
- Every user-visible string goes through `UI` in `src/i18n.ts` with **both** `en`
  and `uk`. No literal English in JSX.
- Ukrainian plural forms are non-trivial (see `topicsWord` in `PathView.tsx`) -
  do not paste an English `n === 1 ? ... : ...` into a Ukrainian branch.

### CSS

- Plain CSS, one file, no framework and no CSS-in-JS. An inline `style` is for
  values that come from data (tag and track colors), nothing else.
- A new color is a token: add it to `:root` **and** to `:root[data-theme='dark']`.
  A hard-coded hex inside a rule is a dark-mode bug.
- Delete rules together with the markup they styled. `styles.css` is audited for
  dead selectors; the only classes with no occurrence in source should be
  KaTeX's own (`katex`, `katex-display`), which are emitted at runtime.

### Things that must stay in sync

- The pre-paint script in `index.html` mirrors `applySettings()` in
  `src/settings.ts`. Change one, change the other, or the theme flashes on load.
- `TRACK_IDS` in `loadTopics.ts` mirrors `TrackId` in `types.ts` (importing
  `TRACKS` there would be circular).
- `src/components/Logo.tsx` and `public/logo.svg` are the same drawing.
- `localStorage` keys: `moebius-atlas-settings` (preferences, owned by the
  settings menu) and `moebius-atlas-az-filters` (A-Z filter chips, view state).
  They are separate on purpose - do not merge them. Unknown ids read back from
  storage are discarded rather than trusted.

## Adding things

- **A topic** - `src/content/en/<id>.md` with full frontmatter, plus optionally
  `src/content/uk/<id>.md` with title and resources. Wire its `requires`, and add
  the new id to the `requires` of whatever now depends on it.
- **A tab / view** - `src/views/en/<id>.md` with `kind: az|path` and `order`,
  plus `src/views/uk/<id>.md` with the localized title. `kind` decides which
  component `App.tsx` renders; a genuinely new kind needs a new component and a
  new branch there.
- **A tag, track or subject** - extend the union in `types.ts`, then the table in
  `topics.ts` (label, full name, both colors). Filter chips are generated from
  those tables, so no component changes.
- **A language** - add it to `SUPPORTED_LANGS` in `i18n.ts`, add the matching
  entries to every `UI` string, and create `src/content/<lang>/` and
  `src/views/<lang>/`. Missing translations fall back to English per field, so a
  partial language ships fine.

## Do not

- Commit `dist/` or `node_modules/` (both gitignored, as is `.claude/`).
- Touch `.github/workflows/deploy.yml` for content or UI work.
- Introduce a non-hash route - GitHub Pages has no server rewrites.
- Reformat or reflow files you are not otherwise changing.
- Push to `master` unless asked: a push publishes the live site.
