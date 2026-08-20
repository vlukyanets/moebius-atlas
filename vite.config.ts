import { readFile, readdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const CONTENT_URL = new URL('./src/content/', import.meta.url);
const CONTENT = fileURLToPath(CONTENT_URL);

/** The leading `---` block of a content file, delimiters included. */
const FRONTMATTER = /^---\r?\n[\s\S]*?\r?\n---\r?\n?/;

/** `virtual:atlas-meta`, `virtual:atlas-bodies`, `virtual:atlas-bodies/<lang>`. */
const VIRTUAL = /^virtual:atlas-(meta|bodies)(?:\/([a-z-]+))?$/;

interface Part {
  id: string;
  meta: string;
  body: string;
}

/** Every content file of one language, split at the frontmatter. */
async function readLang(lang: string): Promise<Part[]> {
  const files = (await readdir(`${CONTENT}/${lang}`)).filter((f) => f.endsWith('.md'));
  return Promise.all(
    files.map(async (file) => {
      const src = (await readFile(`${CONTENT}/${lang}/${file}`, 'utf8')).replace(/^﻿/, '').trim();
      const head = FRONTMATTER.exec(src);
      if (!head) throw new Error(`content/${lang}/${file}: missing frontmatter block`);
      return { id: file.replace(/\.md$/, ''), meta: head[0], body: src.slice(head[0].length).trim() };
    }),
  );
}

/**
 * Serves the content of `src/content/` as two virtual modules instead of as
 * 968 imported files, because the two halves of a topic file are needed at
 * very different moments:
 *
 *   `virtual:atlas-meta`    id -> lang -> frontmatter block. Every view needs
 *                           the metadata of every topic on first paint, so
 *                           this one ships with the app.
 *   `virtual:atlas-bodies`  lang -> `() => import('virtual:atlas-bodies/<lang>')`,
 *                           each of which is a chunk of that language's
 *                           bodies. Only an open topic page renders one, so
 *                           the first topic page pays for its language once
 *                           and every later one is already there.
 *
 * The alternative Vite offers on its own is `?raw`, and an eager glob over
 * that inlines every file - bodies included - into the entry chunk, which is
 * what used to make it 970 kB.
 */
function atlasContent(): Plugin {
  return {
    name: 'atlas-content',
    resolveId: (source) => (VIRTUAL.test(source) ? `\0${source}` : null),
    async load(id) {
      const hit = VIRTUAL.exec(id.startsWith('\0') ? id.slice(1) : id);
      if (!hit) return null;
      const [, kind, lang] = hit;
      const langs = (await readdir(CONTENT, { withFileTypes: true }))
        .filter((e) => e.isDirectory())
        .map((e) => e.name);

      if (lang) {
        const parts = await readLang(lang);
        return `export default ${JSON.stringify(Object.fromEntries(parts.map((p) => [p.id, p.body])))};`;
      }
      if (kind === 'bodies') {
        const entries = langs.map((l) => `  ${JSON.stringify(l)}: () => import('virtual:atlas-bodies/${l}'),`);
        return `export default {\n${entries.join('\n')}\n};`;
      }
      const meta: Record<string, Record<string, string>> = {};
      for (const l of langs) for (const p of await readLang(l)) (meta[p.id] ??= {})[l] = p.meta;
      return `export default ${JSON.stringify(meta)};`;
    },
    /** A content edit in dev invalidates whatever was built from the folder. */
    handleHotUpdate({ file, server }) {
      if (!pathToFileURL(file).href.startsWith(CONTENT_URL.href)) return;
      for (const [id, mod] of server.moduleGraph.idToModuleMap)
        if (id.includes('virtual:atlas-')) server.moduleGraph.invalidateModule(mod);
      server.ws.send({ type: 'full-reload' });
      return [];
    },
  };
}

// base './' makes the build relocatable - it works both at the GitHub Pages
// project path (https://user.github.io/repo/) and at a custom domain root.
export default defineConfig({
  plugins: [react(), atlasContent()],
  base: './',
});
