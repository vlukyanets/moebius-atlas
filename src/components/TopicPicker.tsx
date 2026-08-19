import { useEffect, useMemo, useRef, useState } from 'react';
import { N, tagOf, topicName } from '../data/graph';
import { UI, tr, useLang } from '../i18n';
import { SearchIcon } from './Icons';
import { swatch } from './palette';

interface Props {
  /** Selectable topic ids, already in display order. */
  ids: string[];
  value: string;
  onChange: (id: string) => void;
}

/**
 * A select that is also a search field: the closed control shows the current
 * topic, typing filters the list. A native `<select>` cannot do this, and with
 * hundreds of targets scrolling it is hopeless. Matching runs over every
 * translation of a name, so either language finds the topic.
 */
export function TopicPicker({ ids, value, onChange }: Props) {
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLDivElement>(null);

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ids;
    return ids.filter((id) => Object.values(N[id].name).some((v) => v.toLowerCase().includes(q)));
  }, [ids, query]);

  // Close on an outside click; a blur handler would fire before the option's
  // own click and swallow the choice.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  // Keep the highlighted option visible while arrowing through a long list.
  useEffect(() => {
    if (!open) return;
    list.current?.querySelector('.option.active')?.scrollIntoView({ block: 'nearest' });
  }, [open, active]);

  const start = () => {
    setOpen(true);
    setQuery('');
    setActive(Math.max(0, ids.indexOf(value)));
  };

  const commit = (id: string) => {
    onChange(id);
    setOpen(false);
    setQuery('');
    input.current?.blur();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) return start();
      const step = e.key === 'ArrowDown' ? 1 : -1;
      if (hits.length) setActive((i) => (i + step + hits.length) % hits.length);
    } else if (e.key === 'Enter') {
      if (open && hits[active]) {
        e.preventDefault();
        commit(hits[active]);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
      setQuery('');
      input.current?.blur();
    }
  };

  return (
    <div className={'topic-picker' + (open ? ' open' : '')} ref={root}>
      <span className="icon">
        <SearchIcon />
      </span>
      <input
        ref={input}
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
        value={open ? query : topicName(value, lang)}
        placeholder={open ? topicName(value, lang) : ''}
        onChange={(e) => {
          setQuery(e.target.value);
          setActive(0);
          if (!open) setOpen(true);
        }}
        onFocus={start}
        onClick={start}
        onKeyDown={onKey}
      />
      <span className="caret" onMouseDown={(e) => e.preventDefault()} onClick={() => (open ? setOpen(false) : start())}>
        {open ? '\u25b4' : '\u25be'}
      </span>
      {open && (
        <div className="options" role="listbox" ref={list}>
          {hits.map((id, i) => {
            const tag = tagOf(id);
            return (
              <div
                key={id}
                role="option"
                aria-selected={id === value}
                className={
                  'option' + (i === active ? ' active' : '') + (id === value ? ' current' : '')
                }
                style={tag ? swatch(tag) : undefined}
                onMouseEnter={() => setActive(i)}
                onClick={() => commit(id)}
              >
                <span className="dot" />
                <span className="name">{topicName(id, lang)}</span>
                {tag && (
                  <span className="tag-abbr">
                    {tr(tag.label, lang)}
                  </span>
                )}
              </div>
            );
          })}
          {!hits.length && <div className="empty">{tr(UI.pickerEmpty, lang)}</div>}
        </div>
      )}
    </div>
  );
}
