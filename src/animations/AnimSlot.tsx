/**
 * What `Markdown.tsx` renders for an `anim-slot` node - the one point where
 * the animation registry (and so Framer Motion) is actually loaded. Kept out
 * of `Markdown.tsx` itself and pulled in with `lazy()` so a topic without an
 * `[!anim]` marker never pays for it, and one that has it pays only once,
 * apart from the KaTeX/react-markdown chunk (see "Bundle" in AGENTS.md).
 */
import { ANIMATIONS } from './index';
import { AnimScene } from './AnimScene';

export function AnimSlot({ id }: { id: string }): JSX.Element {
  const Anim = ANIMATIONS[id];
  // An id the registry doesn't know is left visible, the same way an unread
  // spoiler marker is: an authoring bug that shows up on the page rather
  // than one that silently vanishes.
  if (!Anim) return <p className="anim-missing">[!anim] {id}</p>;
  return (
    <AnimScene>
      <Anim />
    </AnimScene>
  );
}
