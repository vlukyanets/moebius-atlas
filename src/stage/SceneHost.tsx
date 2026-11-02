/**
 * What `[!anim] <id>` becomes on the page: the scene `src/scenes/<id>.tsx` on
 * a canvas of its own, with the bar that walks the steps the text gives it.
 * This is the one module that imports React Three Fiber, and `Markdown.tsx`
 * loads it with `lazy()`, so a topic without a scene never downloads three.
 *
 * One canvas per scene rather than one shared canvas behind the page: a
 * shared canvas has to stay fixed while the page scrolls under it, and lags a
 * frame behind the scroll - the scenes would shake. A topic has a scene or
 * three, far below the browser's limit on WebGL contexts.
 *
 * Nothing is drawn that does not have to be. The canvas draws a frame when
 * something changed (`frameloop="demand"`), every frame only while a scene
 * asks for it with `useLoop` and motion is on, and not at all while it is off
 * screen - without being unmounted, so a scene keeps its state when the
 * reader scrolls past it and back.
 */
import { Canvas, events, useThree } from '@react-three/fiber';
import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from 'react';
import { UI, tr, useLang } from '../i18n';
import { useAnimOn } from './animOn';
import { useBus, useSlot } from './bus';
import type { SceneDef } from './defineScene';
import { SceneContext, type SceneCtx } from './hooks';

type AnyScene = SceneDef<Record<string, string>>;

/** One chunk per scene: a page loads only the scenes its body embeds. */
const SCENES = import.meta.glob<{ default: AnyScene }>('../scenes/*.tsx');

/**
 * R3F's pointer events, but with the pointer placed from `clientX` against the
 * canvas's on-screen rect. R3F's own reads `offsetX` against the layout size,
 * and under the text-size setting - a CSS `zoom` on <html> - those are in
 * different units, so a press landed off the vertex it was aimed at.
 */
const zoomSafeEvents: typeof events = (store) => ({
  ...events(store),
  compute(event, state) {
    const box = state.gl.domElement.getBoundingClientRect();
    state.pointer.set(((event.clientX - box.left) / box.width) * 2 - 1, -((event.clientY - box.top) / box.height) * 2 + 1);
    state.raycaster.setFromCamera(state.pointer, state.camera);
  },
});

/** Whether the element is on screen, or close enough to be by the next scroll. */
function useOnScreen(ref: RefObject<Element>): boolean {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setOn(entry.isIntersecting), { rootMargin: '120px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return on;
}

/**
 * Draws one frame whenever `when` changes. A canvas coming back on screen has
 * been skipping frames while it was away, and a demand loop would otherwise
 * not draw until the next change inside it.
 */
function Redraw({ when }: { when: unknown }): null {
  const invalidate = useThree((s) => s.invalidate);
  useEffect(() => invalidate(), [invalidate, when]);
  return null;
}

export function SceneHost({ id }: { id: string }): JSX.Element {
  const bus = useBus();
  const lang = useLang();
  const animOn = useAnimOn();
  const load = SCENES[`../scenes/${id}.tsx`];
  const steps = useSlot(id, (s) => s?.steps);
  const step = useSlot(id, (s) => s?.step ?? null);
  const box = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(box);

  const [def, setDef] = useState<AnyScene | null>(null);
  useEffect(() => {
    if (!load) return;
    let current = true;
    void load().then((m) => current && setDef(() => m.default));
    return () => {
      current = false;
    };
  }, [load]);

  useEffect(() => {
    if (!def || !bus) return;
    bus.setLoaded(id);
    if (import.meta.env.DEV)
      for (const key of bus.slot(id)?.steps ?? [])
        if (!def.steps?.includes(key)) console.warn(`[scene] ${id} has no step "${key}"`);
  }, [def, bus, id]);

  const loopers = useRef(new Set<object>());
  const [looping, setLooping] = useState(false);
  const setLoop = useCallback((token: object, on: boolean) => {
    if (on) loopers.current.add(token);
    else loopers.current.delete(token);
    setLooping(loopers.current.size > 0);
  }, []);

  const ctx = useMemo<SceneCtx | null>(
    () => (def && bus ? { id, bus, lang, strings: def.strings[lang], setLoop } : null),
    [def, bus, id, lang, setLoop],
  );

  if (!load || !bus) return <p className="scene-missing">[!anim] {id}</p>;

  const frameloop = !onScreen ? 'never' : looping && animOn ? 'always' : 'demand';
  const at = step === null || !steps ? 0 : steps.indexOf(step) + 1;

  return (
    <figure className="scene" id={`scene-${id}`}>
      <div className="scene-canvas" ref={box}>
        {def && ctx && (
          <Canvas
            dpr={[1, 2]}
            flat
            frameloop={frameloop}
            orthographic={def.camera === '2d'}
            camera={def.camera === '2d' ? { position: [0, 0, 10], zoom: 40 } : { position: [6, 5, 8], fov: 40 }}
            gl={{ antialias: true }}
            // Measured in layout pixels, not with getBoundingClientRect: the
            // text-size setting is a CSS `zoom` on <html>, and a zoomed rect
            // made the canvas that much wider than its box.
            resize={{ offsetSize: true }}
            events={zoomSafeEvents}
          >
            <Redraw when={frameloop} />
            <SceneContext.Provider value={ctx}>
              <def.Component />
            </SceneContext.Provider>
          </Canvas>
        )}
      </div>
      {steps && steps.length > 0 && (
        <div className="scene-bar">
          <button className="chip-btn" onClick={() => bus.stepBy(id, -1)} disabled={at === 0} aria-label={tr(UI.sceneStepBack, lang)} title={tr(UI.sceneStepBack, lang)}>
            ←
          </button>
          <span className="scene-bar-count">
            {at} / {steps.length}
          </span>
          <button className="chip-btn" onClick={() => bus.stepBy(id, 1)} disabled={at === steps.length} aria-label={tr(UI.sceneStepNext, lang)} title={tr(UI.sceneStepNext, lang)}>
            →
          </button>
          <button className="chip-btn" onClick={() => bus.setStep(id, null)} disabled={at === 0}>
            {tr(UI.sceneReset, lang)}
          </button>
        </div>
      )}
    </figure>
  );
}
