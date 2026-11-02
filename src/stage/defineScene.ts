/**
 * What a scene file (`src/scenes/<id>.tsx`) exports by default. The id is the
 * file name, as with topics; the host finds the file by it.
 *
 * `strings` are the scene's own labels. They live with the scene rather than
 * in `UI` because a scene's words travel with its chunk: the labels of every
 * scene in `UI` would be in the entry chunk of every page. The type requires
 * the Ukrainian set to have exactly the English keys, so a missing translation
 * fails the build.
 */
import type { ComponentType } from 'react';

export interface SceneDef<S extends Record<string, string>> {
  /** `2d` is an orthographic camera looking down z; `3d` a perspective one. */
  camera: '2d' | '3d';
  /**
   * The step keys this scene can show. The text decides which of them appear
   * and in what order; this list only lets the host warn about a `[!step]`
   * the scene would not understand.
   */
  steps?: readonly string[];
  strings: { en: S; uk: { [K in keyof S]: string } };
  Component: ComponentType;
}

export const defineScene = <S extends Record<string, string>>(def: SceneDef<S>): SceneDef<S> => def;
