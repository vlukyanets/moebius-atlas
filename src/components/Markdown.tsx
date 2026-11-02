/**
 * The Markdown renderer, kept in a module of its own so it can be loaded when
 * a topic page opens instead of with the app: react-markdown, the math plugins
 * and KaTeX - stylesheet included - are by far the heaviest dependency here,
 * and no other view renders a body.
 *
 * It also carries the extensions the content needs on top of Markdown: the
 * spoiler a self-check section hides its answers behind, and everything that
 * ties a body to its scenes - the `[!anim]` that embeds one, the `[!step]` and
 * `[!task]` blocks, `#<id>:<key>` links and `\live` in formulas (see
 * `src/stage/`).
 */
import ReactMarkdown, { type Components, type ExtraProps } from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import type { Element, ElementContent, Parent, Root, Text } from 'hast';
import { Suspense, lazy, useMemo, type ComponentProps, type ReactNode } from 'react';
import { BusContext, createBus, scanBody } from '../stage/bus';
import { LiveMath, SceneLink, StepBlock, TaskBlock } from '../stage/text';
import 'katex/dist/katex.min.css';

/** Loaded only when a body embeds a scene: it is what pulls three in. */
const SceneHost = lazy(() => import('../stage/SceneHost').then((m) => ({ default: m.SceneHost })));

/**
 * Cuts `marker` off the first line of a blockquote and returns what it
 * matched with the quote's content after it, or null when the quote does not
 * open with it. Markdown has no syntax for any of the blocks built on this and
 * raw HTML in a body would mean parsing it (and trusting it), so a marker is
 * plain text that only these plugins read - the same trick GitHub's alerts
 * use. Everything after the first line stays Markdown, formulas included.
 */
const takeMarker = (quote: Element, marker: RegExp): { match: RegExpExecArray; body: ElementContent[] } | null => {
  const lead = quote.children.find((child) => child.type === 'element') as Element | undefined;
  if (lead?.tagName !== 'p') return null;
  const text = lead.children[0];
  if (text?.type !== 'text') return null;

  const match = marker.exec(text.value);
  if (!match) return null;

  text.value = text.value.slice(match[0].length);
  // The marker had the paragraph to itself unless the body ran on from it.
  const body = text.value === '' && lead.children.length === 1
    ? quote.children.filter((child) => child !== lead)
    : quote.children;
  return { match, body };
};

/**
 * A blockquote opening with `[!spoiler] <label>` is a spoiler. Without a label
 * there would be nothing to click, so the marker only matches with one: a
 * bare `[!spoiler]` is left alone and shows in the page as the authoring bug
 * it is.
 */
const SPOILER = /^\[!spoiler\]([^\n]*\S[^\n]*)\n?/;

const toSpoiler = (quote: Element): Element | null => {
  const taken = takeMarker(quote, SPOILER);
  if (!taken) return null;
  return {
    type: 'element',
    tagName: 'details',
    properties: { className: ['spoiler'] },
    children: [
      { type: 'element', tagName: 'summary', properties: {}, children: [{ type: 'text', value: taken.match[1].trim() }] },
      ...taken.body,
    ],
  };
};

/**
 * `[!step] <scene>:<key>` - one step of a scene and what is said about it;
 * `[!task] <scene>:<key>` - a question the scene checks.
 */
const SCENE_BLOCK = /^\[!(step|task)\][ \t]+([a-z0-9-]+:[a-z0-9-]+)[ \t]*(?:\n|$)/;

const toSceneBlock = (quote: Element): Element | null => {
  const taken = takeMarker(quote, SCENE_BLOCK);
  if (!taken) return null;
  return { type: 'element', tagName: `scene-${taken.match[1]}`, properties: { at: taken.match[2] }, children: taken.body };
};

/** Replaces every blockquote `make` turns into something else. */
const quotesTo = (make: (quote: Element) => Element | null) => () => (tree: Root): void => {
  const walk = (parent: Parent): void => {
    parent.children.forEach((child, i) => {
      if (child.type !== 'element') return;
      walk(child);
      const made = child.tagName === 'blockquote' ? make(child) : null;
      if (made) parent.children[i] = made;
    });
  };
  walk(tree);
};

const rehypeSpoilers = quotesTo(toSpoiler);
const rehypeSceneBlocks = quotesTo(toSceneBlock);

/**
 * A standalone paragraph reading `[!anim] <id>` embeds the scene with that id
 * in its place. Like the spoiler marker, this is plain text no Markdown syntax
 * already means something else. A scene is embedded once per body - the text
 * addresses it by its id - so a second marker for the same id is left as text.
 */
const ANIM_MARKER = /^\[!anim\]\s+(\S+)\s*$/;

const rehypeAnimations = () => (tree: Root): void => {
  const seen = new Set<string>();
  const walk = (parent: Parent): void => {
    parent.children.forEach((child, i) => {
      if (child.type !== 'element') return;
      walk(child);
      if (child.tagName !== 'p' || child.children.length !== 1) return;
      const text = child.children[0] as Text;
      if (text.type !== 'text') return;
      const id = ANIM_MARKER.exec(text.value.trim())?.[1];
      if (!id || seen.has(id)) return;
      seen.add(id);
      parent.children[i] = { type: 'element', tagName: 'anim-slot', properties: { id }, children: [] };
    });
  };
  walk(tree);
};

const isMath = (el: Element): boolean =>
  el.tagName === 'code' && ((el.properties.className as string[] | undefined) ?? []).includes('language-math');
const textOf = (el: Element): string => el.children.map((c) => (c.type === 'text' ? c.value : '')).join('');

/**
 * A formula reading a scene through `\live` is taken away from rehype-katex -
 * which would typeset it once, with the fallback - and handed to `LiveMath`,
 * which typesets it again whenever the value moves. It has to run before
 * rehype-katex for that reason.
 */
const rehypeLiveMath = () => (tree: Root): void => {
  const live = (el: Element, display: boolean): Element => ({
    type: 'element',
    tagName: 'live-math',
    properties: { tex: textOf(el), mode: display ? 'display' : 'inline' },
    children: [],
  });
  const walk = (parent: Parent): void => {
    parent.children.forEach((child, i) => {
      if (child.type !== 'element') return;
      const code = child.tagName === 'pre' && child.children.length === 1 ? child.children[0] : null;
      if (code?.type === 'element' && isMath(code) && textOf(code).includes('\\live{')) parent.children[i] = live(code, true);
      else if (isMath(child) && textOf(child).includes('\\live{')) parent.children[i] = live(child, false);
      else walk(child);
    });
  };
  walk(tree);
};

/** A link into a scene: `#<scene>:<key>`. Routes start with `#/`, so never clash. */
const SCENE_HREF = /^#([a-z0-9-]+):([a-z0-9-]+)$/;

const split = (at: string): [string, string] => {
  const colon = at.indexOf(':');
  return [at.slice(0, colon), at.slice(colon + 1)];
};

interface BlockProps {
  at: string;
  children?: ReactNode;
}

// The custom tags the plugins above emit are not DOM elements, so they are
// outside the type react-markdown gives `components`.
const components = {
  a: ({ node: _node, href, children, ...rest }: ComponentProps<'a'> & ExtraProps) => {
    const scene = href ? SCENE_HREF.exec(href) : null;
    if (scene) return <SceneLink scene={scene[1]} sceneKey={scene[2]} href={href!}>{children}</SceneLink>;
    return <a href={href} {...rest}>{children}</a>;
  },
  // The fallback keeps the canvas's height, so the text under a scene does not
  // jump when the scene arrives.
  'anim-slot': ({ id }: { id: string }) => (
    <Suspense fallback={<figure className="scene"><div className="scene-canvas" /></figure>}>
      <SceneHost id={id} />
    </Suspense>
  ),
  'scene-step': ({ at, children }: BlockProps) => {
    const [scene, key] = split(at);
    return <StepBlock scene={scene} stepKey={key}>{children}</StepBlock>;
  },
  'scene-task': ({ at, children }: BlockProps) => {
    const [scene, key] = split(at);
    return <TaskBlock scene={scene} taskKey={key}>{children}</TaskBlock>;
  },
  'live-math': ({ tex, mode }: { tex: string; mode: string }) => <LiveMath tex={tex} display={mode === 'display'} />,
} as Components;

export function Markdown({ children }: { children: string }): JSX.Element {
  const bus = useMemo(() => createBus(scanBody(children)), [children]);
  return (
    <BusContext.Provider value={bus}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeLiveMath, rehypeKatex, rehypeSpoilers, rehypeSceneBlocks, rehypeAnimations]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </BusContext.Provider>
  );
}
