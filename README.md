# Moebius Atlas / Атлас Мебіуса

School and extracurricular mathematics as an explorable atlas of topics — 350
of them: the Ukrainian school curriculum for grades 5–9 (algebra and geometry),
plus olympiad topics and the first steps into higher maths. Every topic declares
what has to be learned before it, so the whole subject forms one connected map
of prerequisites. Two views over the same content:

- **A–Z** - alphabetical index of every topic, with filter chips
- **Prereq path** - for a chosen target topic, the layered tree of everything
  to learn first: the target on top, each level below holds the prerequisites
  of the level above, down to the basics. Starts collapsed; levels are
  revealed one at a time.

Each topic opens a dedicated page (Markdown body with KaTeX formulas,
prerequisites, dependents, external resources), and global search covers all
topics in both languages.

## Filters

The A–Z index has four independent chip rows, collapsed behind a **Filters**
header that summarizes the active selection and shows the number of matches:

- **Subject** - Geometry / Algebra / Others
- **Track** - School / Olympiad / Higher maths / Others
- **Grade** - 5 to 9; shown only while school topics are on screen, and only
  for grades that still have something behind the other filters
- **Type** - Axiom / Definition / Theorem / Lemma / Conjecture / Method

An empty row means "everything" for that row; rows combine with AND, values
inside a row with OR. A grade narrows the school topics only - olympiad and
higher-maths topics carry no grade and pass that row untouched. **Reset** clears
every row at once. The selection survives opening a topic and coming back, and
survives a reload (`localStorage`, separate from the settings key).

The path view has its own searchable target picker: type to filter, arrows and
Enter to choose.

## Languages

Content and UI are multilingual (English + Ukrainian). By default the language
follows the browser preference list (`navigator.languages`); the first
supported language wins, anything else falls back to English. `?lang=uk|en`
overrides for testing and language-pinned links. Every localized string falls
back to English per-field, so partially translated topics degrade gracefully.
An explicit choice in Settings overrides the auto-detection.

## Settings

The gear menu in the top bar (persisted in `localStorage`, applied before
first paint by an inline script in `index.html`):

- **Language** - English / Українська (default: browser language)
- **Theme** - Auto / Dark / Light (Auto follows `prefers-color-scheme`)
- **Animation** - Auto / On / Off (Auto follows `prefers-reduced-motion`)
- **Text size** - Normal / Large / Extra Large (interface scale)

The dark palette lives next to the light tokens in `src/styles.css`
(`:root[data-theme='dark']`). Logic: `src/settings.ts` + `SettingsMenu.tsx`.

## Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | React 18 + TypeScript | Component model fits the view switching |
| Build | Vite | Fast static build, trivially deployable to GitHub Pages |
| Routing | Hand-rolled hash router (`src/router.ts`) | Deep links work on GitHub Pages without server rewrites |
| Math | KaTeX (npm) | Formula rendering, display mode |
| Styling | Plain CSS with custom properties | Design tokens map 1:1 to `:root` variables in `src/styles.css` |
| Content | Markdown files (`src/content/<lang>/*.md`) | One file per topic per language; loaded at build time via `import.meta.glob` |
| Markdown | react-markdown + remark-math + rehype-katex | Full Markdown bodies with inline/display KaTeX |

## Content format

One Markdown file per topic **per language**: `src/content/<lang>/<id>.md`.
Languages are never mixed inside a file. `content/en/` is canonical and
required - its frontmatter carries the topic metadata. Translation files
(e.g. `content/uk/triangle-angle-sum.md`) carry only their localized `title`
and body. The id is the file name.

`content/en/triangle-angle-sum.md`:

```md
---
title: Triangle Angle Sum
tag: THM                # AXM|DEF|THM|LEM|CNJ|MTD
track: school           # school|olympiad|advanced|other; missing -> other, with a console warning
grade: 8                # school year 5-9; school-track topics only
subject: algebra        # geometry|algebra|other; missing -> geometry
year: -300              # discovery year; negative = BCE
requires: [parallel-properties, triangle-definition]
resources: [Khan Academy](https://…), [Math is Fun](https://…)
---

The three interior angles always add up to 180°…

$$
\alpha + \beta + \gamma = 180^\circ
$$
```

`content/uk/triangle-angle-sum.md`:

```md
---
title: Сума кутів трикутника
resources: [Академія Хана](https://…), [GeoGebra](https://…)
---

Три внутрішні кути завжди дають у сумі 180°…

$$
\alpha + \beta + \gamma = 180^\circ
$$
```

The body is full Markdown rendered on the topic page (react-markdown) with
KaTeX math: `$…$` inline, `$$` fenced blocks (on their own lines) for display
formulas. The first plain paragraph doubles as the short summary (markup
stripped). Quote a frontmatter value if it contains a colon
(`title: "Right Triangles: …"`).

`requires` lists prerequisite topic ids. The prerequisite relation must stay
**acyclic and transitively reduced**: never add `A -> C` when a chain
`A -> B -> … -> C` already exists.

`resources` is a comma-separated list of Markdown links, authored **per
language** (each language file lists its own sites); a language without its
own list falls back to the English one, and a topic with no `resources` at
all gets an automatic Wikipedia search link in the interface language.

Parsing lives in `src/data/loadTopics.ts`; malformed files fail the build with
a file-name error.

The view tabs themselves are also Markdown-authored: `src/views/<lang>/<id>.md`
with `kind: az|path` and `order` in the English frontmatter, localized tab
title in each language file.

## Data model

Types in `src/data/types.ts` (`TopicSeed` with `requires` edges, plus the
`tag` / `track` / `subject` / `grade` classification). Labels and colors for
those classifications live in `src/data/topics.ts` - the filter chips are
generated from them. Derived helpers in `src/data/graph.ts`: reverse `requires`
index ("LEADS TO"), search across all translations, prerequisite levels for the
path view (a topic needed on several levels sinks to its deepest one).

## URLs

Hash-based, deep-linkable:

- `#/az` - A–Z index
- `#/path/triangle-angle-sum` - prerequisite path to a target
- `#/topic/triangle-angle-sum` - topic page

## Logo

A stylized 3D Möbius band: a figure-eight ribbon with light-to-shade
gradients, a receding under-strand and a soft cast shadow at the
over-crossing. Sources: `src/components/Logo.tsx` (top bar) and
`public/logo.svg` (favicon) - keep them in sync.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # serve the production build locally
```

There is no test suite and no linter: `npm run build` is the check to run.

Editing rules, the file-by-file map of the repository and the invariants the
content has to satisfy are in [AGENTS.md](AGENTS.md) - read it before the first
change. `CLAUDE.md` imports the same file, so both humans and agents work from
one document.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. One-time setup in the repository settings:
**Settings -> Pages -> Source: GitHub Actions**.
