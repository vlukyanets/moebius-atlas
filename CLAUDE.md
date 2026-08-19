# CLAUDE.md

The editing rules and the map of this repository live in `AGENTS.md`, so that
every agent and every human reads the same document. It is imported below - the
import pulls the full file into context, nothing needs to be duplicated here.

@AGENTS.md

Claude-specific notes:

- Verify with `npm run build` (type-check + build). There is no test suite.
- Use the browser preview tools rather than starting a dev server from a shell;
  `.claude/launch.json` already defines the `moebius-atlas-dev` configuration.
- Anything below this line is for Claude Code only; project rules belong in
  `AGENTS.md`.
