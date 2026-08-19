import type { TagInfo } from '../data/types';
import { tr, useLang } from '../i18n';

export function TagBadge({ tag, className = 'tag-badge' }: { tag: TagInfo; className?: string }) {
  const lang = useLang();
  return (
    <span className={className} style={{ color: tag.color, background: tag.bg }}>
      {tr(tag.full, lang).toUpperCase()}
    </span>
  );
}
