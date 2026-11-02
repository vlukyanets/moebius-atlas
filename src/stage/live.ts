/**
 * `\live{<scene>:<key>}{<fallback>}` inside a formula: a number the scene
 * keeps up to date. Expanded to plain TeX before KaTeX sees it, so the
 * formula is an ordinary formula at every moment - the fallback until the
 * scene has said anything, the scene's value after.
 */

/** The `{...}` group opening at `open`, braces nested and `\{` skipped. */
function group(tex: string, open: number): { text: string; end: number } | null {
  if (tex[open] !== '{') return null;
  let depth = 0;
  for (let i = open; i < tex.length; i++) {
    if (tex[i] === '\\') i++;
    else if (tex[i] === '{') depth++;
    else if (tex[i] === '}' && --depth === 0) return { text: tex.slice(open + 1, i), end: i + 1 };
  }
  return null;
}

const HEAD = '\\live';

/** Every `\live` in `tex`, with where it starts and ends. */
function* lives(tex: string): Generator<{ at: number; end: number; scene: string; key: string; fallback: string }> {
  for (let at = tex.indexOf(HEAD + '{'); at >= 0; at = tex.indexOf(HEAD + '{', at + 1)) {
    const ref = group(tex, at + HEAD.length);
    const fallback = ref && group(tex, ref.end);
    const colon = ref?.text.indexOf(':') ?? -1;
    // A malformed one is left in the formula, where KaTeX shows the unknown
    // `\live` in red - the authoring bug is on the page, not swallowed.
    if (!ref || !fallback || colon < 0) continue;
    yield { at, end: fallback.end, scene: ref.text.slice(0, colon), key: ref.text.slice(colon + 1), fallback: fallback.text };
  }
}

export function expandLive(tex: string, value: (scene: string, key: string) => string | undefined): string {
  let out = '';
  let from = 0;
  for (const l of lives(tex)) {
    // Braced, so a value like `47^\circ` stays one atom wherever it lands.
    out += `${tex.slice(from, l.at)}{${value(l.scene, l.key) ?? l.fallback}}`;
    from = l.end;
  }
  return out + tex.slice(from);
}
