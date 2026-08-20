import type { ViewId } from '../data/types';
import { VIEWS } from '../data/views';
import { UI, tr, useLang } from '../i18n';
import { Icon } from './Icons';
import { Logo } from './Logo';
import { ProgressMenu } from './ProgressMenu';
import { SettingsMenu } from './SettingsMenu';

interface Props {
  view: ViewId;
  query: string;
  onHome: () => void;
  onView: (v: ViewId) => void;
  onQuery: (q: string) => void;
}

export function TopBar({ view, query, onHome, onView, onQuery }: Props) {
  const lang = useLang();
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="logo" onClick={onHome}>
          <Logo />
          {tr(UI.brand, lang)}
        </div>
        <nav className="tabs">
          {VIEWS.map((v) => (
            <button key={v.id} className={'tab' + (view === v.id ? ' active' : '')} onClick={() => onView(v.id)}>
              {tr(v.name, lang)}
            </button>
          ))}
        </nav>
      </div>
      <div className="topbar-center">
        <div className="searchbox">
          <span className="icon">
            <Icon name="search" size={14} />
          </span>
          <input value={query} onChange={(e) => onQuery(e.target.value)} placeholder={tr(UI.searchPlaceholder, lang)} />
          {query && (
            <button className="clear" onClick={() => onQuery('')}>
              ×
            </button>
          )}
        </div>
      </div>
      <div className="topbar-right">
        <ProgressMenu />
        <SettingsMenu />
      </div>
    </header>
  );
}
