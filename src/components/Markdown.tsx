/**
 * The Markdown renderer, kept in a module of its own so it can be loaded when
 * a topic page opens instead of with the app: react-markdown, the math plugins
 * and KaTeX - stylesheet included - are by far the heaviest dependency here,
 * and no other view renders a body.
 *
 * It also carries the one extension the content needs on top of Markdown: the
 * spoiler a self-check section hides its answers behind.
 */
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type { Element, Parent, Root } from 'hast';
import 'katex/dist/katex.min.css';

/**
 * A blockquote opening with `[!spoiler] <label>` is a spoiler. Markdown has no
 * syntax for one and raw HTML in a body would mean parsing it (and trusting
 * it), so the marker is plain text that only this plugin reads - the same
 * trick GitHub's alerts use. Everything after the first line stays Markdown,
 * so the answers keep their lists and their formulas.
 */
const MARKER = /^\[!spoiler\]([^\n]*)\n?/;

/** The blockquote as a `<details>`, or null when it carries no marker. */
const toSpoiler = (quote: Element): Element | null => {
  const lead = quote.children.find((child) => child.type === 'element') as Element | undefined;
  if (lead?.tagName !== 'p') return null;
  const text = lead.children[0];
  if (text?.type !== 'text') return null;

  const marker = MARKER.exec(text.value);
  const label = marker?.[1].trim();
  // Without a label there would be nothing to click, so the quote is left
  // alone: the unread marker then shows in the page as the authoring bug it is.
  if (!marker || !label) return null;

  text.value = text.value.slice(marker[0].length);
  // The label had the paragraph to itself unless the body ran on from it.
  const body = text.value === '' && lead.children.length === 1
    ? quote.children.filter((child) => child !== lead)
    : quote.children;

  return {
    type: 'element',
    tagName: 'details',
    properties: { className: ['spoiler'] },
    children: [
      { type: 'element', tagName: 'summary', properties: {}, children: [{ type: 'text', value: label }] },
      ...body,
    ],
  };
};

const rehypeSpoilers = () => (tree: Root): void => {
  const walk = (parent: Parent): void => {
    parent.children.forEach((child, i) => {
      if (child.type !== 'element') return;
      walk(child);
      const spoiler = child.tagName === 'blockquote' ? toSpoiler(child) : null;
      if (spoiler) parent.children[i] = spoiler;
    });
  };
  walk(tree);
};

export function Markdown({ children }: { children: string }): JSX.Element {
  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex, rehypeSpoilers]}>
      {children}
    </ReactMarkdown>
  );
}
