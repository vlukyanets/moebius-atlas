import { UI, tr, useLang, type L10n, type Lang } from '../i18n';
import { useSettings, type Settings } from '../settings';
import { Icon } from './Icons';
import { MenuRow, PopoverMenu, Segmented } from './Menu';

export function SettingsMenu(): JSX.Element {
  const lang = useLang();
  const { settings, update } = useSettings();
  const L = (s: L10n) => tr(s, lang);

  return (
    <PopoverMenu icon="settings" label={L(UI.settings)}>
      <MenuRow label={L(UI.setLang)}>
        <Segmented<Lang>
          options={[
            { v: 'en', label: 'English', icon: <Icon name="flag-gb" className="flag" /> },
            { v: 'uk', label: 'Українська', icon: <Icon name="flag-ua" className="flag" /> },
          ]}
          value={settings.lang ?? lang}
          onChange={(v) => update({ lang: v })}
        />
      </MenuRow>
      <MenuRow label={L(UI.setTheme)}>
        <Segmented<Settings['theme']>
          options={[
            { v: 'auto', label: L(UI.optAuto) },
            { v: 'dark', label: L(UI.optDark) },
            { v: 'light', label: L(UI.optLight) },
          ]}
          value={settings.theme}
          onChange={(v) => update({ theme: v })}
        />
      </MenuRow>
      <MenuRow label={L(UI.setAnim)}>
        <Segmented<Settings['anim']>
          options={[
            { v: 'auto', label: L(UI.optAuto) },
            { v: 'on', label: L(UI.optOn) },
            { v: 'off', label: L(UI.optOff) },
          ]}
          value={settings.anim}
          onChange={(v) => update({ anim: v })}
        />
      </MenuRow>
      <MenuRow label={L(UI.setText)}>
        <Segmented<Settings['text']>
          options={[
            { v: 'normal', label: L(UI.optNormal) },
            { v: 'large', label: L(UI.optLarge) },
            { v: 'xlarge', label: L(UI.optXLarge) },
          ]}
          value={settings.text}
          onChange={(v) => update({ text: v })}
        />
      </MenuRow>
    </PopoverMenu>
  );
}
