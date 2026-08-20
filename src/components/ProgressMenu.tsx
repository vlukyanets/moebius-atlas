/**
 * Progress menu: the tracking switch and, once tracking is on, the profiles.
 * Off, the marks stay in storage but nothing shows them.
 *
 * One row per profile - name, rename, activate, delete. Deleting takes two
 * clicks: the first arms the row and turns the bin into a question mark, the
 * second removes the profile. Arming is view state, so it is dropped whenever
 * the menu closes or another row is touched.
 */
import { useEffect, useRef, useState } from 'react';
import { UI, tr, useLang } from '../i18n';
import { useProgress } from '../progress';
import { Icon } from './Icons';
import { MenuRow, PopoverMenu, Segmented } from './Menu';

export function ProgressMenu(): JSX.Element {
  const lang = useLang();
  const { enabled, setEnabled } = useProgress();

  return (
    <PopoverMenu icon="progress" label={tr(UI.progress, lang)}>
      <MenuRow label={tr(UI.setProgress, lang)}>
        <Segmented<'on' | 'off'>
          options={[
            { v: 'on', label: tr(UI.optOn, lang) },
            { v: 'off', label: tr(UI.optOff, lang) },
          ]}
          value={enabled ? 'on' : 'off'}
          onChange={(v) => setEnabled(v === 'on')}
        />
      </MenuRow>
      {enabled && (
        <MenuRow label={tr(UI.profiles, lang)}>
          <Profiles />
        </MenuRow>
      )}
    </PopoverMenu>
  );
}

function Profiles(): JSX.Element {
  const lang = useLang();
  const { profiles, activeId, activate, addProfile, renameProfile, removeProfile } = useProgress();
  const [editing, setEditing] = useState<string | null>(null);
  const [armed, setArmed] = useState<string | null>(null);

  return (
    <>
      <div className="profiles">
        {profiles.map((p) => (
          <div key={p.id} className={p.id === activeId ? 'profile-row on' : 'profile-row'}>
            {editing === p.id ? (
              <NameField
                value={p.name}
                onCommit={(name) => {
                  renameProfile(p.id, name);
                  setEditing(null);
                }}
                onCancel={() => setEditing(null)}
              />
            ) : (
              <>
                <span className="name" title={p.name}>
                  {p.name}
                </span>
                <button
                  className="icon-btn"
                  title={tr(UI.profileRename, lang)}
                  aria-label={tr(UI.profileRename, lang)}
                  onClick={() => {
                    setArmed(null);
                    setEditing(p.id);
                  }}
                >
                  <Icon name="edit" size={14} />
                </button>
              </>
            )}
            <button
              className={p.id === activeId ? 'icon-btn on' : 'icon-btn'}
              title={tr(p.id === activeId ? UI.profileActive : UI.profileActivate, lang)}
              aria-label={tr(p.id === activeId ? UI.profileActive : UI.profileActivate, lang)}
              aria-pressed={p.id === activeId}
              onClick={() => {
                setArmed(null);
                activate(p.id);
              }}
            >
              <Icon name="check" size={14} />
            </button>
            <button
              className={armed === p.id ? 'icon-btn armed' : 'icon-btn'}
              title={tr(armed === p.id ? UI.profileDeleteConfirm : UI.profileDelete, lang)}
              aria-label={tr(armed === p.id ? UI.profileDeleteConfirm : UI.profileDelete, lang)}
              onClick={() => {
                if (armed !== p.id) {
                  setArmed(p.id);
                  return;
                }
                setArmed(null);
                setEditing(null);
                removeProfile(p.id);
              }}
            >
              <Icon name={armed === p.id ? 'question' : 'trash'} size={14} />
            </button>
          </div>
        ))}
      </div>
      <button
        className="profile-add"
        onClick={() => {
          setArmed(null);
          addProfile();
        }}
      >
        <Icon name="plus" size={13} />
        {tr(UI.profileNew, lang)}
      </button>
    </>
  );
}

/** Rename field: Enter or leaving commits, Escape puts the old name back. */
function NameField({
  value,
  onCommit,
  onCancel,
}: {
  value: string;
  onCommit: (name: string) => void;
  onCancel: () => void;
}): JSX.Element {
  const [draft, setDraft] = useState(value);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => ref.current?.select(), []);

  return (
    <input
      ref={ref}
      className="rename"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => onCommit(draft)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onCommit(draft);
        else if (e.key === 'Escape') {
          e.stopPropagation(); // Escape cancels the rename, it does not close the menu
          onCancel();
        }
      }}
    />
  );
}
