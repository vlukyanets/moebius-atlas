/**
 * Registry of the animations a topic body can embed via `[!anim] <id>` - one
 * hand-authored React component per id, in the same spirit as the icon
 * registry: nothing generic is inferred from data, each component draws its
 * own SVG and drives its own Framer Motion state, and this file only maps an
 * id to it.
 */
import type { ComponentType } from 'react';
import { TenMarblesBundle } from './TenMarblesBundle';
import { DigitTowers } from './DigitTowers';
import { RoundingDigits } from './RoundingDigits';

export const ANIMATIONS: Record<string, ComponentType> = {
  'ten-marbles-bundle': TenMarblesBundle,
  'digit-towers': DigitTowers,
  'rounding-digits': RoundingDigits,
};
