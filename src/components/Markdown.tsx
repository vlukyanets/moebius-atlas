/**
 * The Markdown renderer, kept in a module of its own so it can be loaded when
 * a topic page opens instead of with the app: react-markdown, the math plugins
 * and KaTeX - stylesheet included - are by far the heaviest dependency here,
 * and no other view renders a body.
 */
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export function Markdown({ children }: { children: string }): JSX.Element {
  return (
    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
      {children}
    </ReactMarkdown>
  );
}
