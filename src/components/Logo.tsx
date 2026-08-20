/**
 * The Moebius Atlas mark: a Möbius band as a figure-eight ribbon with a 3D
 * feel. The drawing itself is `src/icons/logo.svg`; `public/logo.svg` is the
 * same artwork serving as the favicon - keep both in sync.
 */
import { Icon } from './Icons';

export function Logo({ size = 28 }: { size?: number }): JSX.Element {
  return <Icon name="logo" size={size} label="Moebius Atlas" />;
}
