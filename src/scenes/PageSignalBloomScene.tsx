import { useEffect, useMemo, useRef, type MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

type SignalProgress = {
  value: number;
};

type PageSignalBloomSceneProps = {
  progressRef: MutableRefObject<SignalProgress>;
};

function createVerticalGlowTexture({
  topColor,
  midColor,
  bottomColor,
  alphaTop = 0,
  alphaMid = 0.35,
  alphaBottom = 0,
}: {
  topColor: string;
  midColor: string;
  bottomColor: string;
  alphaTop?: number;
  alphaMid?: number;
  alphaBottom?: number;
}) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 1024;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, `rgba(${hexToRgb(topColor)}, ${alphaTop})`);
  gradient.addColorStop(0.38, `rgba(${hexToRgb(midColor)}, ${alphaMid})`);
  gradient.addColorStop(1, `rgba(${hexToRgb(bottomColor)}, ${alphaBottom})`);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const vignette = ctx.createRadialGradient(
    canvas.width / 2,
    canvas.height / 2,
    8,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width * 0.36,
  );
  vignette.addColorStop(0, "rgba(255,255,255,1)");
  vignette.addColorStop(1, "rgba(255,255,255,0)");

  ctx.globalCompositeOperation = "destination-in";
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createRadialGlowTexture(color: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = ctx.createRadialGradient(128, 128, 8, 128, 128, 128);
  gradient.addColorStop(0, `rgba(${hexToRgb(color)}, 1)`);
  gradient.addColorStop(0.18, `rgba(${hexToRgb(color)}, 0.55)`);
  gradient.addColorStop(0.5, `rgba(${hexToRgb(color)}, 0.14)`);
  gradient.addColorStop(1, `rgba(${hexToRgb(color)}, 0)`);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "");
  const bigint = Number.parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

function AnchoredSignal({
  progressRef,
}: {
  progressRef: MutableRefObject<SignalProgress>;
}) {
  const { size, viewport } = useThree();

  const group = useRef<THREE.Group>(null);

  const ambientPlane = useRef<THREE.Mesh>(null);
  const warmPlane = useRef<THREE.Mesh>(null);
  const tipGlow = useRef<THREE.Mesh>(null);
  const tipCore = useRef<THREE.Mesh>(null);

  const ambientMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const warmMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const tipGlowMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const tipCoreMaterial = useRef<THREE.MeshBasicMaterial>(null);

  const linePositions = useMemo(() => new Float32Array(6), []);
  const warmTailPositions = useMemo(() => new Float32Array(6), []);

  const ambientTexture = useMemo(
    () =>
      createVerticalGlowTexture({
        topColor: "#f7f6f3",
        midColor: "#d8efe8",
        bottomColor: "#ffb66b",
        alphaTop: 0,
        alphaMid: 0.2,
        alphaBottom: 0,
      }),
    [],
  );

  const warmTexture = useMemo(
    () =>
      createVerticalGlowTexture({
        topColor: "#f7f6f3",
        midColor: "#f3d4a8",
        bottomColor: "#d79b63",
        alphaTop: 0,
        alphaMid: 0.22,
        alphaBottom: 0,
      }),
    [],
  );

  const tipTexture = useMemo(() => createRadialGlowTexture("#f7f6f3"), []);

  const coreLine = useMemo(() => {
    const geometry = new LineGeometry();
    const material = new LineMaterial({
      linewidth: 0.9,
      opacity: 0.9,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      dashed: false,
      toneMapped: false,
      worldUnits: false,
    });

    material.blending = THREE.AdditiveBlending;

    const line = new Line2(geometry, material);
    line.frustumCulled = false;
    line.renderOrder = 5;
    return line;
  }, []);

  const softOuterLine = useMemo(() => {
    const geometry = new LineGeometry();
    const material = new LineMaterial({
      linewidth: 3.2,
      opacity: 0.08,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      dashed: false,
      toneMapped: false,
      worldUnits: false,
    });

    material.blending = THREE.AdditiveBlending;

    const line = new Line2(geometry, material);
    line.frustumCulled = false;
    line.renderOrder = 4;
    return line;
  }, []);

  const warmTailLine = useMemo(() => {
    const geometry = new LineGeometry();
    const material = new LineMaterial({
      linewidth: 1.9,
      opacity: 0.18,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      dashed: false,
      toneMapped: false,
      worldUnits: false,
    });

    material.blending = THREE.AdditiveBlending;

    const line = new Line2(geometry, material);
    line.frustumCulled = false;
    line.renderOrder = 6;
    return line;
  }, []);

  const white = useMemo(() => new THREE.Color("#f7f6f3"), []);
  const warm = useMemo(() => new THREE.Color("#f2b476"), []);
  const cool = useMemo(() => new THREE.Color("#d5eee8"), []);
  const coreColor = useMemo(() => new THREE.Color(), []);
  const outerColor = useMemo(() => new THREE.Color(), []);
  const tailColor = useMemo(() => new THREE.Color(), []);

  useEffect(() => {
    const lines = [coreLine, softOuterLine, warmTailLine];

    lines.forEach((line) => {
      const material = line.material as LineMaterial;
      material.resolution.set(size.width, size.height);
    });
  }, [coreLine, softOuterLine, warmTailLine, size.height, size.width]);

  useEffect(() => {
    return () => {
      ambientTexture.dispose();
      warmTexture.dispose();
      tipTexture.dispose();
      [coreLine, softOuterLine, warmTailLine].forEach((line) => {
        line.geometry.dispose();
        (line.material as LineMaterial).dispose();
      });
    };
  }, [
    ambientTexture,
    coreLine,
    softOuterLine,
    tipTexture,
    warmTailLine,
    warmTexture,
  ]);

  useFrame(() => {
    const progress = THREE.MathUtils.clamp(progressRef.current.value, 0, 1);
    const eased = THREE.MathUtils.smoothstep(progress, 0, 1);
    const pulse = 0.5 + 0.5 * Math.sin(progress * Math.PI * 1.8);

    const isMobile = size.width < 768;

    const anchorX = isMobile ? 0.94 : viewport.width * 0.31;
    const anchorY = isMobile ? 2.1 : 2.55;

    const minLength = isMobile ? 0.7 : 1.1;
    const maxLength = isMobile ? 4.8 : 6.3;
    const lineLength = THREE.MathUtils.lerp(minLength, maxLength, eased);

    // fixed top point
    linePositions[0] = 0;
    linePositions[1] = 0;
    linePositions[2] = 0;
    linePositions[3] = 0;
    linePositions[4] = -lineLength;
    linePositions[5] = 0;

    // warm lower segment only
    const tailStart = -lineLength * 0.42;
    warmTailPositions[0] = 0;
    warmTailPositions[1] = tailStart;
    warmTailPositions[2] = 0;
    warmTailPositions[3] = 0;
    warmTailPositions[4] = -lineLength;
    warmTailPositions[5] = 0;
    (coreLine.geometry as LineGeometry).setPositions(linePositions);
    (softOuterLine.geometry as LineGeometry).setPositions(linePositions);
    (warmTailLine.geometry as LineGeometry).setPositions(warmTailPositions);

    if (group.current) {
      group.current.position.set(anchorX, anchorY, 0);
      group.current.rotation.set(0, 0, 0);
      group.current.scale.setScalar(1);
    }

    coreColor.copy(white).lerp(cool, 0.08);
    outerColor.copy(cool).lerp(white, 0.16 + pulse * 0.05);
    tailColor.copy(warm).lerp(white, 0.08 + pulse * 0.04);

    const coreMaterial = coreLine.material as LineMaterial;
    const outerMaterial = softOuterLine.material as LineMaterial;
    const tailMaterial = warmTailLine.material as LineMaterial;

    coreMaterial.color.copy(coreColor);
    coreMaterial.opacity = 0.78 + pulse * 0.05;
    coreMaterial.linewidth = isMobile ? 0.72 : 0.86;

    outerMaterial.color.copy(outerColor);
    outerMaterial.opacity = 0.055 + eased * 0.03;
    outerMaterial.linewidth = isMobile ? 2.2 : 3.0;

    tailMaterial.color.copy(tailColor);
    tailMaterial.opacity = 0.14 + eased * 0.06;
    tailMaterial.linewidth = isMobile ? 1.35 : 1.8;

    const endX = 0;
    const endY = -lineLength;

    if (ambientPlane.current && ambientMaterial.current) {
      ambientPlane.current.position.set(0, -lineLength * 0.48, -0.08);
      ambientPlane.current.scale.set(
        isMobile ? 0.9 : 1.25,
        lineLength * 0.42,
        1,
      );
      ambientMaterial.current.opacity = 0.16 + eased * 0.05;
    }

    if (warmPlane.current && warmMaterial.current) {
      warmPlane.current.position.set(0, -lineLength * 0.63, -0.04);
      warmPlane.current.scale.set(isMobile ? 0.44 : 0.56, lineLength * 0.27, 1);
      warmMaterial.current.opacity = 0.12 + eased * 0.07;
    }

    if (tipGlow.current && tipGlowMaterial.current) {
      tipGlow.current.position.set(endX, endY, 0.01);
      tipGlow.current.scale.setScalar(isMobile ? 0.22 : 0.28);
      tipGlowMaterial.current.opacity = 0.16 + eased * 0.05;
      tipGlowMaterial.current.color.copy(white);
    }

    if (tipCore.current && tipCoreMaterial.current) {
      tipCore.current.position.set(endX, endY, 0.02);
      tipCore.current.scale.setScalar(isMobile ? 0.04 : 0.05);
      tipCoreMaterial.current.opacity = 0.95;
      tipCoreMaterial.current.color.copy(white);
    }
  });

  return (
    <group ref={group}>
      <mesh ref={ambientPlane} renderOrder={1}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          ref={ambientMaterial}
          map={ambientTexture}
          transparent
          depthWrite={false}
          depthTest={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
          color="#d9efe8"
        />
      </mesh>

      <mesh ref={warmPlane} renderOrder={2}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          ref={warmMaterial}
          map={warmTexture}
          transparent
          depthWrite={false}
          depthTest={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
          color="#efb176"
        />
      </mesh>

      <primitive object={softOuterLine} />
      <primitive object={coreLine} />
      <primitive object={warmTailLine} />

      <mesh ref={tipGlow} renderOrder={7}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          ref={tipGlowMaterial}
          map={tipTexture}
          transparent
          depthWrite={false}
          depthTest={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
          color="#f7f6f3"
        />
      </mesh>

      <mesh ref={tipCore} renderOrder={8}>
        <sphereGeometry args={[1, 14, 14]} />
        <meshBasicMaterial
          ref={tipCoreMaterial}
          transparent
          depthWrite={false}
          depthTest={false}
          toneMapped={false}
          blending={THREE.AdditiveBlending}
          color="#f7f6f3"
        />
      </mesh>
    </group>
  );
}

export function PageSignalBloomScene({
  progressRef,
}: PageSignalBloomSceneProps) {
  return (
    <Canvas
      camera={{ fov: 34, position: [0, 0, 9.2] }}
      dpr={[1, 1.5]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <AnchoredSignal progressRef={progressRef} />

      <EffectComposer multisampling={0}>
        <Bloom
          intensity={0.95}
          kernelSize={2}
          luminanceThreshold={0.82}
          luminanceSmoothing={0.22}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
