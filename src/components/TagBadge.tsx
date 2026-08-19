import type { TagInfo } from '../data/types';
import { tr, useLang } from '../i18n';
import { swatch } from './palette';

export function TagBadge({ tag, className = 'tag-badge' }: { tag: TagInfo; className?: string }) {
  const lang = useLang();
  return (
    <span className={className} style={swatch(tag)}>
      {tr(tag.full, lang).toUpperCase()}
    </span>
  );
}
