import {
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { hasWebGLSupport } from "@/utils/webgl";

gsap.registerPlugin(ScrollTrigger);

const PageSignalBloomScene = lazy(() =>
  import("@/scenes/PageSignalBloomScene").then((module) => ({
    default: module.PageSignalBloomScene,
  })),
);

type SignalProgress = {
  value: number;
};

type PageSignalBloomProps = {
  trackRef: RefObject<HTMLDivElement | null>;
};

function PageSignalFallback() {
  return (
    <div className="page-signal-layer__fallback">
      <span className="page-signal-layer__fallback-line" />
      <span className="page-signal-layer__fallback-glow" />
    </div>
  );
}

export function PageSignalBloom({ trackRef }: PageSignalBloomProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const signalProgress = useRef<SignalProgress>({ value: 0 });
  const [canRenderScene, setCanRenderScene] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCanRenderScene(false);
      return;
    }

    setCanRenderScene(hasWebGLSupport());
  }, [prefersReducedMotion]);

  useLayoutEffect(() => {
    const target = trackRef.current;

    signalProgress.current.value = 0;

    if (!target || prefersReducedMotion || !canRenderScene) {
      return;
    }

    const trigger = ScrollTrigger.create({
      trigger: target,
      start: "top top",
      end: () => `+=${Math.max(target.offsetHeight - window.innerHeight, 1)}`,
      scrub: 0.65,
      invalidateOnRefresh: true,
      fastScrollEnd: true,
      onUpdate: (self) => {
        signalProgress.current.value = self.progress;
      },
    });

    ScrollTrigger.refresh();

    return () => {
      trigger.kill();
      signalProgress.current.value = 0;
    };
  }, [prefersReducedMotion, canRenderScene, trackRef]);

  return (
    <div aria-hidden className="page-signal-layer">
      {canRenderScene ? (
        <Suspense fallback={<PageSignalFallback />}>
          <div className="page-signal-layer__canvas">
            <PageSignalBloomScene progressRef={signalProgress} />
          </div>
        </Suspense>
      ) : (
        <PageSignalFallback />
      )}
    </div>
  );
}
