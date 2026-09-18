/**
 * Shared chrome every animation embedded in a topic body sits inside: the
 * `MotionConfig` boundary that makes Framer Motion obey the reader's own
 * `anim` setting (see `useAnimOn`), so no individual animation has to check
 * it itself.
 */
import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { useAnimOn } from './useAnimOn';

export function AnimScene({ children }: { children: ReactNode }): JSX.Element {
  const on = useAnimOn();
  return (
    <div className="anim-scene">
      <MotionConfig reducedMotion={on ? 'never' : 'always'}>{children}</MotionConfig>
    </div>
  );
}
