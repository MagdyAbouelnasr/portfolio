import { useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type PulsePathProps = {
  points: THREE.Vector3[]
  color: string
  speed: number
  offset: number
}

type SignalLineProps = {
  points: THREE.Vector3[]
  color: string
  opacity?: number
}

function SignalLine({ points, color, opacity = 0.8 }: SignalLineProps) {
  const line = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity })

    return new THREE.Line(geometry, material)
  }, [color, opacity, points])

  useEffect(() => {
    return () => {
      line.geometry.dispose()
      line.material.dispose()
    }
  }, [line])

  return <primitive object={line} />
}

function PulsePath({ points, color, speed, offset }: PulsePathProps) {
  const pulse = useRef<THREE.Mesh>(null)
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points])
  const sampled = useMemo(() => curve.getPoints(120), [curve])

  useFrame(({ clock }) => {
    const mesh = pulse.current
    if (!mesh) {
      return
    }

    const progress = (clock.getElapsedTime() * speed + offset) % 1
    const point = curve.getPointAt(progress)
    mesh.position.copy(point)
  })

  return (
    <>
      <SignalLine color={color} opacity={0.88} points={sampled} />
      <mesh ref={pulse}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
      </mesh>
    </>
  )
}

function ArchitectureField() {
  const group = useRef<THREE.Group>(null)
  const scrollProgress = useRef(0)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onScroll = () => {
      const viewport = window.innerHeight || 1
      scrollProgress.current = Math.min(window.scrollY / viewport, 1.25)
    }

    const onPointerMove = (event: PointerEvent) => {
      pointer.current = {
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      }
    }

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [])

  const layerRects = useMemo(
    () =>
      [
        { width: 4.2, height: 2.3, depth: -1.1, color: '#8ee3d5' },
        { width: 3.5, height: 1.85, depth: -0.25, color: '#f7f6f3' },
        { width: 2.9, height: 1.45, depth: 0.5, color: '#ffb66b' },
      ].map((layer) => {
        const { width, height, depth, color } = layer
        return {
          color,
          depth,
          points: [
            new THREE.Vector3(-width / 2, -height / 2, depth),
            new THREE.Vector3(width / 2, -height / 2, depth),
            new THREE.Vector3(width / 2, height / 2, depth),
            new THREE.Vector3(-width / 2, height / 2, depth),
            new THREE.Vector3(-width / 2, -height / 2, depth),
          ],
        }
      }),
    [],
  )

  const signalPaths = useMemo(
    () => [
      {
        points: [
          new THREE.Vector3(-1.6, 0.82, -1.1),
          new THREE.Vector3(-1.1, 0.3, -0.6),
          new THREE.Vector3(-0.2, 0.1, -0.2),
          new THREE.Vector3(0.9, -0.05, 0.25),
          new THREE.Vector3(1.45, 0.55, 0.5),
        ],
        color: '#8ee3d5',
        speed: 0.12,
        offset: 0,
      },
      {
        points: [
          new THREE.Vector3(-1.4, -0.65, -1.1),
          new THREE.Vector3(-0.8, -0.1, -0.55),
          new THREE.Vector3(0.15, 0.2, -0.1),
          new THREE.Vector3(0.7, 0.65, 0.18),
          new THREE.Vector3(1.15, 0.2, 0.5),
        ],
        color: '#f7f6f3',
        speed: 0.16,
        offset: 0.32,
      },
      {
        points: [
          new THREE.Vector3(-1.05, -0.15, -0.8),
          new THREE.Vector3(-0.35, -0.55, -0.35),
          new THREE.Vector3(0.25, -0.18, 0.04),
          new THREE.Vector3(0.95, -0.5, 0.32),
          new THREE.Vector3(1.4, -0.16, 0.5),
        ],
        color: '#ffb66b',
        speed: 0.1,
        offset: 0.68,
      },
    ],
    [],
  )

  const anchorPoints = useMemo(
    () =>
      [
        [-1.6, 0.82, -1.1],
        [-1.4, -0.65, -1.1],
        [-0.2, 0.1, -0.2],
        [0.25, -0.18, 0.04],
        [1.45, 0.55, 0.5],
        [1.4, -0.16, 0.5],
      ].map((point) => new THREE.Vector3(...point)),
    [],
  )

  useFrame(() => {
    const node = group.current
    if (!node) {
      return
    }

    const time = performance.now() * 0.001
    const idleRotationX = Math.sin(time * 0.62) * 0.055
    const idleRotationY = Math.cos(time * 0.44) * 0.11
    const idlePositionY = Math.sin(time * 0.8) * 0.08

    node.rotation.x = THREE.MathUtils.lerp(
      node.rotation.x,
      idleRotationX + pointer.current.y * 0.1 - scrollProgress.current * 0.08,
      0.05,
    )
    node.rotation.y = THREE.MathUtils.lerp(
      node.rotation.y,
      idleRotationY + pointer.current.x * 0.18 + scrollProgress.current * 0.18,
      0.05,
    )
    node.rotation.z = THREE.MathUtils.lerp(node.rotation.z, Math.sin(time * 0.36) * 0.028, 0.04)
    node.position.y = THREE.MathUtils.lerp(
      node.position.y,
      idlePositionY - scrollProgress.current * 0.32,
      0.05,
    )
  })

  return (
    <group ref={group} position={[0, 0.15, 0]}>
      {layerRects.map((layer) => (
        <SignalLine
          color={layer.color}
          key={layer.depth}
          points={layer.points}
          opacity={0.8}
        />
      ))}

      {anchorPoints.map((point, index) => (
        <mesh key={`${point.toArray().join('-')}-${index}`} position={point}>
          <sphereGeometry args={[0.075, 18, 18]} />
          <meshStandardMaterial
            color={index % 2 === 0 ? '#8ee3d5' : '#f7f6f3'}
            emissive={index % 2 === 0 ? '#8ee3d5' : '#f7f6f3'}
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}

      {signalPaths.map((path) => (
        <PulsePath
          color={path.color}
          key={`${path.color}-${path.offset}`}
          offset={path.offset}
          points={path.points}
          speed={path.speed}
        />
      ))}

      <mesh position={[0.3, -1.15, -1.7]} rotation={[-0.55, 0, 0]}>
        <planeGeometry args={[6.2, 4.2]} />
        <meshBasicMaterial color="#071015" transparent opacity={0.36} />
      </mesh>
    </group>
  )
}

export function SignalArchitectureScene() {
  return (
    <div className="h-[280px] w-full sm:h-[360px] md:h-[480px] lg:h-[620px]">
      <Canvas
        camera={{ fov: 40, position: [0, 0.25, 5.6] }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <color args={['#071015']} attach="background" />
        <fog args={['#071015', 6, 10]} attach="fog" />
        <ambientLight intensity={0.85} />
        <directionalLight color="#8ee3d5" intensity={1.2} position={[4, 4, 5]} />
        <directionalLight color="#ffb66b" intensity={0.75} position={[-4, -2, 4]} />
        <ArchitectureField />
      </Canvas>
    </div>
  )
}
