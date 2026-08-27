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
| `src/App.tsx` | Top-level composition: settings / progress / language providers, route switch, search overlay, footer |
| `src/router.ts` | Hash router (`#/index`, `#/path/<id>`, `#/topic/<id>`), `useRoute`, route builders |
| `src/settings.ts` | `Settings` type (theme, animation, text size, path layout), `localStorage` load/save, `applySettings` (writes `data-theme`/`data-anim`/`data-text`) |
| `src/progress.ts` | Learning progress: the profiles (v4 UUID + name + ticked topics), their `localStorage` key, cross-tab sync and Google sync, the reset, and the `none`/`done`/`broken` rules |
| `src/cloud.ts` | The Google account (GIS token flow) and the one document the progress record is mirrored to (Drive `appDataFolder`). Knows nothing about what the document says |
| `src/i18n.ts` | `Lang`, `L10n`, `tr()`, browser language detection, and `UI` - every UI chrome string |
| `src/styles.css` | All styling. Design tokens in `:root`, dark palette in `:root[data-theme='dark']` |
| `src/data/types.ts` | Object model: `TopicSeed`, `TagId`, `TrackId`, `SubjectId`, `Resource` |
| `src/data/loadTopics.ts` | Reads the frontmatter of every topic (`virtual:atlas-meta`) + the shared parser (`parseFile`) |
| `src/data/bodies.ts` | Fetches topic bodies, one language chunk at a time, and caches them |
| `src/data/topics.ts` | Static tables: `TAGS`, `SUBJECTS`, `TRACKS` (labels + colors) and the loaded `TOPICS` |
| `src/data/atlas.ts` | Everything derived from the `requires` relation: reverse index (`dependents`), `search`, `prereqLevels`, `treeLayout`, `ringLayout`, the upward walk the hover trail follows, formatting helpers |
| `src/data/views.ts` | Loads the tab definitions from `src/views/<lang>/*.md` |
| `src/content/<lang>/<id>.md` | Topic content - one file per topic per language (~485 each) |
| `src/views/<lang>/<id>.md` | Tab definitions (`kind`, `order`, localized title) |
| `src/components/` | Presentation only - see below |
| `src/icons/*.svg` | Every drawing in the UI. No SVG markup is written inside components |
| `public/logo.svg` | Favicon; must stay visually in sync with `src/icons/logo.svg` |
| `public/privacy.html` | Privacy policy, EN + UK. A standalone page outside the app - see below |
| `tools/check_graph.py` | Content invariants: ids resolve, relation is acyclic, transitively reduced, grade-ordered |
| `vite.config.ts` | Build config + the `atlas-content` plugin that splits content into metadata and per-language bodies |
| `.github/workflows/deploy.yml` | Builds and publishes `dist/` to GitHub Pages on push to `master` |

Components: `TopBar` (brand, tabs, search field, progress and settings menus),
`Menu` (the shared popover menu, labelled row and segmented switch), `SettingsMenu`,
`ProgressMenu` (the tracking switch, the reset under it, the Google account row and the
profile rows), `ProgressBox` (the per-topic checkbox and the question a locked one asks),
`IndexList` (alphabetical index + filter chip rows), `PathView` (layered prerequisite tree
plus the layout switch), `PathField` (the scrollable field the two graph layouts share -
panning, zoom, the tools, and the hover-and-trail helpers), `PathTree` (the tree layout:
levels stacked bottom-up, an arrow along every `requires` edge), `PathRings` (the same
path as rings around the target), `TopicPicker` (searchable combobox for the path target),
`TopicDetail` (Markdown body, meta line, REQUIRES / LEADS TO / RESOURCES columns),
`SearchResults`, `TagBadge`, `Markdown` (react-markdown + KaTeX, loaded on demand),
`Icons`, `Logo`.

Icons: `src/icons/<name>.svg` is registered in `components/Icons.tsx` and inlined
with Vite's `?raw` import, so `currentColor` keeps working and no svgr-style
dependency is needed. A new icon is a file plus one line in that registry -
never `<svg>` written into a component. The only `<svg>` written in a component
is the edge layer of the two graph layouts (`PathTree`, `PathRings`, and the
arrowheads they share in `PathField`): it is computed from the data, and no
static file could hold it.

## Commands

Node 24 or newer. `package.json` declares it in `engines` and `.npmrc` sets
`engine-strict=true`, so an older runtime fails at `npm install` instead of
halfway through a build; `.nvmrc` pins the same floor for `nvm use`.

```bash
npm install
npm run dev       # dev server
npm run build     # tsc -b + vite build -> dist/
npm run preview   # serve the production build
```

There is no test suite and no linter. **`npm run build` is the only gate** - run
it after any change under `src/`. Content errors surface there too: the loader
throws with the offending file name.

Optional configuration lives in `.env` (gitignored; `.env.example` is the
template). The only entry is `VITE_GOOGLE_CLIENT_ID`, the OAuth client id of the
Google sign-in - without it everything works except that the account row is not
drawn at all.

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
- `grade` is the school year a topic is taught in, and belongs to school-track
  topics only. Other tracks must omit it. No range is fixed here: the number is
  whatever the curriculum says, and the grade filter is built from the grades
  the content actually uses.
- `subject` defaults to `geometry` when absent; set `algebra` explicitly.
- `year` is the year of discovery; negative means BCE.
- `resources` is a comma-separated list of Markdown links, authored per
  language. A language without its own list falls back to English; a topic with
  no list at all gets an automatic Wikipedia search link.
- Quote a frontmatter value that contains a colon: `title: "Right Triangles: ..."`.
- The body is full Markdown with KaTeX (`$...$` inline, `$$` on its own lines for
  display). Only the frontmatter ships with the app; the body is fetched when
  the topic page opens, so its length costs nothing on first paint.

### Prerequisite invariants

- `requires` lists prerequisite ids that **must exist** in `src/content/en/`.
- The relation stays **acyclic** and **transitively reduced**: never add `A -> C`
  when a chain `A -> B -> ... -> C` already exists. The path view depends on
  this; a redundant edge makes the levels wrong, not merely noisy.
- Inserting a topic into the middle of a chain means rewiring its neighbours,
  not only appending an edge.

With ~485 topics per language, a bulk content change belongs in a throwaway
script that also verifies its own result, not in 485 hand edits.

`python tools/check_graph.py` is the standing check for the content itself: it
resolves every `requires` id, and fails on a cycle, on a redundant edge, on a
prerequisite taught in a later grade than the topic needing it, and on a school
topic that depends on an olympiad or advanced one. It prints a summary, one
`ERR` line per problem and exits non-zero when anything was found; `--root`
points it at another checkout. Its own docstring states what it reads and writes.

## Code rules

- Match the surrounding style: named exports, arrow helpers for one-liners,
  explicit return types on exported functions.
- Comments explain **why**, not what. Each file opens with a JSDoc block stating
  its responsibility - keep it accurate when behaviour changes.
- No new dependencies without a reason. The stack is deliberately small: React,
  react-markdown, remark-math, rehype-katex, KaTeX, uuid.
- Components render. Anything derived from the `requires` relation belongs in
  `src/data/atlas.ts`.
- Every user-visible string goes through `UI` in `src/i18n.ts` with **both** `en`
  and `uk`. No literal English in JSX.
- Ukrainian plural forms are non-trivial (see `topicsWord` in `src/i18n.ts`) -
  do not paste an English `n === 1 ? ... : ...` into a Ukrainian branch.

### CSS

- Plain CSS, one file, no framework and no CSS-in-JS. An inline `style` is for
  values that come from data, and it publishes them as custom properties
  (`swatch()` in `components/palette.ts`) so the stylesheet can still pick a
  per-theme palette. A finished `color`/`background` in JSX is a dark-mode bug.
- A new color is a token: add it to `:root` **and** to `:root[data-theme='dark']`.
  A hard-coded hex inside a rule is a dark-mode bug.
- Delete rules together with the markup they styled. `styles.css` is audited for
  dead selectors; the only classes with no occurrence in source should be
  KaTeX's own (`katex`, `katex-display`), which are emitted at runtime.
- The page has a hard floor of 720px (`min-width` on `body`): narrower than that
  it scrolls sideways instead of reflowing, so no layout has to survive a phone
  width. The `@media (max-width: 960px)` block that rewraps the top bar is the
  one concession to a narrow window, and it is not a second breakpoint system.

### Progress

- A profile is keyed by a v4 UUID (`v4` from the `uuid` package); the name is
  a label the reader edits, so nothing may key off it. New profiles are named
  `Profile N` by position - that string is stored data, not UI chrome, and is
  deliberately not translated.
- There is always at least one profile: `normalize()` invents one, and deleting
  the last one leaves a fresh empty profile rather than an empty list. Every
  read from storage goes through `normalize()`, which is also what upgrades a
  record written before profiles existed.
- The whole record is written from one effect, so the `setState` updaters stay
  pure - React invokes them twice under StrictMode.
- Whether a tick is allowed, and whether it shows as `done` or `broken`, is
  decided from the *transitive* prerequisite set (`ancestors()` in
  `src/data/atlas.ts`), not from the direct edges.
- A locked checkbox refuses nothing silently: it raises a question and, on a
  yes, `markDeep` ticks the topic with its whole chain in one write. The
  question is view state inside `ProgressBox` - it dies on no, on Escape, on a
  click or scroll elsewhere and on a timeout, and it never touches storage.
- The reset under the tracking switch empties *every* profile, keeping the
  profiles and their names: it is the progress that is reset, not the readers.
  It sits next to the switch because neither is a per-profile control, it asks
  the same two-click question the profile bin asks, and it is absent - not
  disabled - when there is nothing ticked anywhere (`anyMarks`). A record that
  was already empty is returned unchanged, so no write and no push follow.

### Google sync

- Signing in is optional and the site works untouched without it. A build with
  no `VITE_GOOGLE_CLIENT_ID` ships with the whole account row absent rather than
  with a button nothing could honour, so the env var is the feature's on switch.
  `.env.example` documents how the client id is made; the deploy workflow passes
  it in as a repository *variable*, since a client id is public by design.
- There is no server anywhere in this, and there must not be: the OAuth token
  flow of Google Identity Services runs in the tab, and the store is the
  reader's own Drive `appDataFolder` - a folder only this app can see and that
  adds no visible file to their Drive. The scope is `drive.appdata` plus
  `openid email profile`, and nothing else may be asked for.
- The access token lives in a module variable and dies with the tab. Only *that*
  the reader signed in, and under which address, is kept in `localStorage`
  (`moebius-atlas-google`) - enough to show the account at once and to ask for a
  new token silently. A silent request Google refuses signs the tab out and
  leaves the local record alone; nothing is ever lost by failing to reach the
  network.
- **Google is the higher authority.** On every connection its copy is pulled and
  installed over what this browser held, so a second device shows the marks made
  on the first rather than a merge nobody could untangle. The one exception is
  an account that has never saved anything: that one is seeded from the browser.
  Nothing may be pushed before the pull has happened (`synced`), or the browser
  would overwrite the account it came to obey.
- `cloud.ts` moves text and knows nothing about it; which copy wins is decided
  in `progress.ts`, which is also where localStorage stays a mirror - the copy
  that keeps the marks readable offline and after signing out.
- Writes are debounced (`PUSH_MS`): a tick is rarely alone - a `markDeep` is a
  whole chain - and every write is a Drive round trip.

### The privacy policy

`public/privacy.html` is what the OAuth consent screen links to, and Google
requires that link before the app may leave Testing and let anyone but a listed
test user sign in. That makes it part of the sign-in feature rather than a
formality bolted on beside it.

- It is a **file, not a route**. The app has only hash routes, and a consent
  screen - or a crawler following it - has to arrive at a real URL with the
  policy already in it. `public/` is copied verbatim, so the page costs the
  bundle nothing and cannot break the app.
- Because it is served on its own, `styles.css` cannot reach it: the handful of
  tokens it needs are copied into a `<style>` block, and a five-line script
  reads `theme` out of `moebius-atlas-settings` so the reader's choice carries
  over. A `prefers-color-scheme` block backs that up, so the page is still
  right if the script never runs. Both copies are listed under *Things that
  must stay in sync* - a token that changes value in `styles.css` has a third
  home now.
- Both languages live in the one file, English first, `<section lang="uk">`
  second. It is not part of the `UI` string table and does not follow the app's
  language setting: a policy is a document, and one URL has to answer for both.
- **What it says has to stay true of what the code does.** It names the four
  `localStorage` keys, the `drive.appdata` scope and what that scope does not
  grant, `progress.json` as the only thing uploaded, the token living in memory
  only, and every outbound host the site talks to. Any change to `cloud.ts`,
  to the storage keys, or to the list of third parties is a change to this page
  as well - and the date at the top moves with it.

### Path layouts

- Which layout the path view draws is a *setting*, not view state: it lives in
  `Settings.pathLayout` and so survives a reload and carries to any later view
  that offers the same switch. All three - `steps`, `tree`, `rings` - are drawn.
- The steps reveal a level at a time; both graph layouts draw the whole path, so
  the reveal controls are hidden with them rather than left doing nothing.
- `PathField` is the scrollable field both graph layouts are drawn in. It knows
  nothing about the drawing beyond the size of the canvas, its full extent and
  the one point the view opens on and returns to; everything else - panning,
  zoom, the tools, the two-toned hover - is the same for both, and a third
  layout gets it for free.
- Whether the arrows are drawn at all is the tool next to the zoom, and like the
  layout it is a setting (`Settings.pathArrows`) rather than view state. It only
  takes the lines away: the cards keep the places the layout gave them, the rings
  stay - they are what the levels are read from - and the hover trail still runs
  up the undrawn edges, so a card lights the way to the target either way.
- Cards and arrows come from the same numbers - `treeLayout` returns each slot
  centred on its level, `ringLayout` each card's point and each arrow's two
  ends - so no card is ever measured from the DOM. The card and gap sizes are
  constants in the components mirrored by `.tree-row`/`.path-node` in
  `styles.css`; change one, change the other. The size of the scroll field is
  the one thing read back, because scrolling needs it and no constant can know it.
- A path is regularly several screens across, so the field opens centred on the
  target instead of on a corner, and re-centres when the target changes. The
  reader moves from there by dragging the field. A drag that started on a card
  swallows the click it ends with, or letting go would open a topic.
- The tools floating over the top right corner zoom the field and undo both:
  the crosshair puts the zoom back to 1 *and* the target back in the middle,
  which together is the state the view opened in. The zoom itself is CSS
  `zoom` on `.path-canvas`, so the scroll box gets the scaled size for free
  and only the centring has to multiply by it. Every zoom step keeps one point
  still - the pointer for a ctrl-wheel, the centre of the box for a button -
  by storing the scroll position it wants and applying it in a layout effect,
  once the browser has laid the new size out. The wheel listener is added by
  hand because React's `onWheel` is passive and could not take the event away
  from the browser's own page zoom.
- How far out the field may be pulled is not a constant: it is the zoom at which
  the whole drawing is in the box, so the floor belongs to the drawing. A path
  of two cards stops at its own size and one of six hundred is allowed the ten
  thousand pixels it needs - a fixed floor could only be wrong for one of them,
  and the rings of a deep path never fitted under the 0.1 it used to be. Past
  that point zooming out adds margin around something already all there, which
  is why the floor is exactly there and not below it. Each layout hands its
  totals in as `extent`, the same numbers `canvas` is built from - a layout that
  grows has to grow that with it, and the tree's height is not in `canvas` at
  all. The box is the one half that is measured, and it is measured outright at
  mount rather than left to the `ResizeObserver`'s first call: that one arrives
  with the rendering steps, which a page nobody is looking at does not run.
- The floor is never allowed above the zoom the reader is already at. Leaving
  fullscreen shrinks the box and so lifts the floor over a zoom that was legal
  when it was chosen; correcting that by zooming them back in would be the field
  moving on its own, so the zoom stays and only the zoom-out button goes dead.
- The rings put the target in the middle and each level one ring further out,
  so depth reads as distance from the centre. The rings are evenly spaced -
  that is what lets the distance be read at all - and the spacing is the
  smallest one at which no two cards in the drawing overlap. It is not searched
  for: every card sits at the spacing times its ring number, so the whole
  drawing scales with it and each pair of cards is clear from one spacing
  upwards, which makes the spacing a pair needs a division and the answer the
  largest of them.
- Where a card lands on its ring is the tree's barycenter idea turned polar - a
  topic wants the average angle of what it unlocks one ring in, the wants fix
  the order, and the ring is then spread evenly and rotated by the average
  error, so it stays regular while still facing the right way. Angles are
  averaged as unit vectors; the mean of 10 and 350 degrees is not 180.
- Every ring past the first is then turned off the angles it asked for, by about
  one card's width along its own circumference and never by more than half its
  own pitch. Without that the barycenter puts ring after ring on the same angle:
  the path becomes a couple of spokes, every arrow along them points straight at
  the target, and the spacing has to grow from a card's height to its full width
  to keep them apart. Ring 1 is left alone - everything on it points at the
  target in the middle, and no turn makes those arrows anything but radial.
  Spacing and angles depend on each other, so `ringLayout` settles them by
  repetition; widening the rings only ever shrinks the turn, so it terminates.
- Each card is then let wander around its own place on the ring by an amount
  of its own. Evenly spaced is what a ring wants, but it is also what leaves a
  path of two or three topics a level sitting in one narrow sector with the
  rest of the circle bare, because the barycenter files every card directly
  behind what it unlocks. The wander is bounded by whatever room is left once
  the card's own width at that radius is taken out of its share of the circle,
  so cards can never close up on each other and force the rings apart, and a
  ring with barely enough room for its cards does not move at all. The amount
  is drawn from a hash of the topic id, not from a random number: a topic keeps
  its place between renders, between languages and between visits.
- An arrow between two rings is a transfer between two orbits, not a straight
  line: its radius eases from the near edge of one band of cards to the near
  edge of the other while its angle sweeps the short way round, and the easing
  stands still at both ends, so the arc peels off the outer ring along it and
  settles onto the inner one along it. The whole of it stays inside the empty
  band between the two rings, which is why the band has to be wider than the
  gap between two cards, and why an arc can cross nothing: there is nothing in
  there to cross. What is left is a straight run in and out to the two card
  centres; the cards are painted over the arrows and cover it. The head is
  still cut back to the target's border - an arrowhead under a card is an arrow
  pointing at nothing.
- Only neighbouring levels are joined, and always by a straight line - in the
  rings as in the tree. A topic sinks to its deepest level, so a `requires` edge
  can span more than one, and both layouts leave those undrawn (about a sixth of
  the edges, a third on the worst target) rather than routing them across the
  cards in between. The topic page is what lists every prerequisite; the graph
  shows the shape.
- The lines of one card get evenly spaced ports along its edge, ordered by
  where their other end sits, so two arrows never arrive at the same spot.
- Hovering is two-toned. A card or an arrow lights what it touches in
  `--accent`; from there the tree keeps going up to the target in `--trail`,
  a colour of its own rather than a shade of the accent. The trail follows
  only edges the tree actually drew, so it stops where a long edge was left
  out instead of resuming further up with nothing joining it. The three
  states are painted plain, trail, hovered - in that order, so the line the
  pointer is on is never under another one.

### Bundle

The app is one page, but it is not one download. Three things are kept out of
the entry chunk on purpose, and a change that drags any of them back in shows
up as Vite's "chunks are larger than 500 kB" warning - treat that warning as a
regression, not as noise:

- **Topic bodies.** `atlas-content` in `vite.config.ts` serves the content
  folder as `virtual:atlas-meta` (frontmatter of every topic, needed on first
  paint) and `virtual:atlas-bodies` (one chunk of bodies per language, fetched
  by `src/data/bodies.ts` when a topic page opens). An `import.meta.glob` with
  `?raw` over `src/content/` would inline all 968 files again.
- **KaTeX and react-markdown.** They live behind `components/Markdown.tsx`,
  which `TopicDetail` pulls in with `lazy()`. Importing react-markdown, a
  remark/rehype plugin or `katex/dist/katex.min.css` anywhere else undoes that.
- **Nothing renders a topic body but the detail page.** A card or a tooltip
  that wants a one-line summary has to derive it from the fetched body, not
  from a field precomputed for all 968 files.

### Things that must stay in sync

- The pre-paint script in `index.html` mirrors `applySettings()` in
  `src/settings.ts`. Change one, change the other, or the theme flashes on load.
- `TRACK_IDS` in `loadTopics.ts` mirrors `TrackId` in `types.ts` (importing
  `TRACKS` there would be circular).
- The frontmatter delimiters are recognised twice: by the `atlas-content`
  plugin, which cuts the file in two, and by `parseFile`, which reads the block
  it cut off. Both accept `---` on its own line, CRLF or LF.
- `src/icons/logo.svg` and `public/logo.svg` are the same drawing.
- `public/privacy.html` carries its own copy of the design tokens it uses and
  its own two-line reading of the `theme` setting, because it is served outside
  the app and `styles.css` and `settings.ts` cannot reach it. A token whose
  *value* changes has to change there too, or the policy page drifts away from
  the site it belongs to.
- `public/privacy.html` describes the storage keys, the OAuth scope and the
  outbound hosts by name. It is documentation of the code's behaviour and goes
  stale like any other - see *The privacy policy* above.
- `SCOPES` in `src/cloud.ts` and the scopes ticked on the OAuth consent screen
  are one list in two places, and only one of them is in this repository. A
  scope added here but not there is dropped by Google at consent time and comes
  back as a 403 from Drive, not as an error at sign-in.
- `localStorage` keys: `moebius-atlas-settings` (preferences - the settings
  menu owns most of them, the path layout switch owns `pathLayout` and the
  field's arrow tool owns `pathArrows`),
  `moebius-atlas-index-filters` (index filter chips, view state)
  `moebius-atlas-progress` (the progress switch plus the profiles and their
  ticked topics) and `moebius-atlas-google` (which account is signed in - never
  a token). They are separate on purpose - do not merge them. Unknown ids
  read back from storage are discarded rather than trusted.
- `moebius-atlas-progress` and the Drive document `progress.json` hold the same
  shape, written by the same `serialize()` and read by the same `normalize()`.
  A field added to one is added to both by construction - keep it that way, and
  keep `normalize()` able to accept a record an older version wrote, because a
  Google account outlives any one browser.
- The progress record is shared by every open tab: each one writes it and
  adopts what the others write through the `storage` event. Anything added to
  that record has to survive the round trip through `normalize()`, which is also
  what turns an older record - or a cleared key - into a valid one.

## Adding things

- **A topic** - `src/content/en/<id>.md` with full frontmatter, plus optionally
  `src/content/uk/<id>.md` with title and resources. Wire its `requires`, and add
  the new id to the `requires` of whatever now depends on it.
- **A tab / view** - `src/views/en/<id>.md` with `kind: index|path` and `order`,
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

- Commit `dist/` or `node_modules/` (both gitignored, as are `.claude/` and `.env`).
- Touch `.github/workflows/deploy.yml` for content or UI work. It carries one
  build-time value (`VITE_GOOGLE_CLIENT_ID`, from a repository *variable*), and
  that is the only reason it has ever needed editing outside deployment work.
- Put a client *secret* anywhere in this repo or in the build. There is no
  server to keep one in, so any flow that needs one is the wrong flow.
- Introduce a non-hash route - GitHub Pages has no server rewrites.
- Reformat or reflow files you are not otherwise changing.
- Push to `master` unless asked: a push publishes the live site.
