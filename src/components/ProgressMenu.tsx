/**
 * Progress menu: the tracking switch, the Google account the marks are kept in,
 * and, once tracking is on, the profiles. Off, the marks stay in storage but
 * nothing shows them.
 *
 * The account row is the one part that shows with tracking off as well: signing
 * in pulls the whole record, the switch included, so a device that has never
 * tracked anything has to be able to reach the button that fetches it.
 *
 * One row per profile - name, rename, activate, delete. Deleting takes two
 * clicks: the first arms the row and turns the bin into a question mark, the
 * second removes the profile. Arming is view state, so it is dropped whenever
 * the menu closes or another row is touched. The reset under the switch, which
 * empties every profile at once, asks in exactly the same way.
 */
import { useEffect, useRef, useState } from 'react';
import { UI, tr, useLang } from '../i18n';
import { useProgress } from '../progress';
import { Icon } from './Icons';
import { MenuRow, PopoverMenu, Segmented } from './Menu';

export function ProgressMenu(): JSX.Element {
  const lang = useLang();
  const { enabled, setEnabled, resetAll, anyMarks } = useProgress();
  const [armed, setArmed] = useState(false);

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
        {/* Nothing ticked anywhere: the reset would be a button that does
            nothing, so it is absent rather than dead. */}
        {anyMarks && (
          <button
            className={armed ? 'progress-reset armed' : 'progress-reset'}
            onClick={() => {
              if (!armed) {
                setArmed(true);
                return;
              }
              setArmed(false);
              resetAll();
            }}
          >
            <Icon name={armed ? 'question' : 'trash'} size={13} />
            {tr(armed ? UI.progressResetConfirm : UI.progressReset, lang)}
          </button>
        )}
      </MenuRow>
      <GoogleRow />
      {enabled && (
        <MenuRow label={tr(UI.profiles, lang)}>
          <Profiles />
        </MenuRow>
      )}
    </PopoverMenu>
  );
}

/**
 * Where the marks are kept: this browser, or a Google account. Absent in a
 * build with no OAuth client id - an offer nothing could honour is worse than
 * no offer at all.
 */
function GoogleRow(): JSX.Element | null {
  const lang = useLang();
  const { cloud } = useProgress();
  if (!cloud.configured) return null;

  const { status, account, busy, signIn, signOut } = cloud;
  const note =
    status === 'error'
      ? UI.cloudFailed
      : busy
        ? UI.cloudSaving
        : !account
          ? UI.cloudHint
          : status === 'connecting'
            ? UI.cloudConnecting
            : UI.cloudSaved;

  return (
    <MenuRow label={tr(UI.cloudRow, lang)}>
      {account ? (
        <div className="google-acct">
          <Icon name="google" size={15} />
          <span className="who" title={account.email}>
            {account.name}
          </span>
          <button
            className="icon-btn"
            title={tr(UI.cloudSignOut, lang)}
            aria-label={tr(UI.cloudSignOut, lang)}
            onClick={signOut}
          >
            <Icon name="cross" size={14} />
          </button>
        </div>
      ) : (
        <button className="google-btn" disabled={status === 'connecting'} onClick={signIn}>
          <Icon name="google" size={15} />
          {tr(status === 'connecting' ? UI.cloudConnecting : UI.cloudSignIn, lang)}
        </button>
      )}
      <div className={status === 'error' ? 'google-note bad' : 'google-note'}>{tr(note, lang)}</div>
      {status === 'error' && (
        <button className="google-retry" onClick={signIn}>
          {tr(UI.cloudRetry, lang)}
        </button>
      )}
    </MenuRow>
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
