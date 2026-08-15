import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Animated 3D hero scene: a rescued rooftop solar array feeding a battery.
 * Sun (amber glow) -> panel array (blue cells) -> energy particles -> battery
 * (charging bar). Subtle float + mouse parallax. No external assets.
 */

const PANEL_COLS = 4;
const PANEL_ROWS = 2;
const PANEL_W = 1.1;
const PANEL_H = 1.7;
const PANEL_GAP = 0.12;
const ARRAY_TILT = -Math.PI / 7;

function SolarPanel({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* frame */}
      <mesh>
        <boxGeometry args={[PANEL_W, PANEL_H, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.35} />
      </mesh>
      {/* glass face with faint blue emissive cells */}
      <mesh position={[0, 0, 0.032]}>
        <planeGeometry args={[PANEL_W - 0.08, PANEL_H - 0.08]} />
        <meshStandardMaterial
          color="#0a1a3a"
          emissive="#123a8a"
          emissiveIntensity={0.55}
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>
      {/* cell grid lines */}
      {[-0.5, -0.17, 0.17, 0.5].map((y) => (
        <mesh key={y} position={[0, y * (PANEL_H - 0.2), 0.036]}>
          <planeGeometry args={[PANEL_W - 0.1, 0.012]} />
          <meshBasicMaterial color="#050b18" />
        </mesh>
      ))}
      <mesh position={[0, 0, 0.036]}>
        <planeGeometry args={[0.012, PANEL_H - 0.1]} />
        <meshBasicMaterial color="#050b18" />
      </mesh>
    </group>
  );
}

function PanelArray() {
  const panels: [number, number, number][] = [];
  const w = PANEL_COLS * (PANEL_W + PANEL_GAP);
  const h = PANEL_ROWS * (PANEL_H + PANEL_GAP);
  for (let c = 0; c < PANEL_COLS; c++) {
    for (let r = 0; r < PANEL_ROWS; r++) {
      panels.push([
        c * (PANEL_W + PANEL_GAP) - w / 2 + PANEL_W / 2,
        r * (PANEL_H + PANEL_GAP) - h / 2 + PANEL_H / 2,
        0,
      ]);
    }
  }
  return (
    <group rotation={[ARRAY_TILT, 0, 0]} position={[0, 0.4, 0]}>
      {panels.map((p, i) => (
        <SolarPanel key={i} position={p} />
      ))}
    </group>
  );
}

function Sun() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 1.2) * 0.04;
      ref.current.scale.setScalar(s);
    }
  });
  return (
    <group position={[4.2, 3.1, -2.5]}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#ffb52e" />
      </mesh>
      <pointLight color="#ffb060" intensity={60} distance={25} />
      {/* halo */}
      <mesh>
        <sphereGeometry args={[0.85, 32, 32]} />
        <meshBasicMaterial color="#ff9a1f" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function Battery() {
  const barRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (barRef.current) {
      // charging pulse: fill 20% -> 95% and repeat
      const t = (clock.elapsedTime * 0.15) % 1;
      const fill = 0.2 + 0.75 * t;
      barRef.current.scale.y = fill;
      barRef.current.position.y = -0.55 + (fill * 1.1) / 2;
    }
  });
  return (
    <group position={[3.1, -1.7, 0.6]}>
      {/* case */}
      <mesh>
        <boxGeometry args={[0.9, 1.4, 0.45]} />
        <meshStandardMaterial color="#161616" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* charge window */}
      <mesh position={[0, 0, 0.24]}>
        <planeGeometry args={[0.5, 1.15]} />
        <meshStandardMaterial color="#06110a" roughness={0.2} />
      </mesh>
      {/* charge fill (scales from bottom) */}
      <mesh ref={barRef} position={[0, 0, 0.245]}>
        <planeGeometry args={[0.44, 1.1]} />
        <meshBasicMaterial color="#2eea6a" transparent opacity={0.85} />
      </mesh>
      <pointLight color="#2eea6a" intensity={4} distance={4} position={[0, 0, 1]} />
    </group>
  );
}

function EnergyParticles() {
  const COUNT = 90;
  const ref = useRef<THREE.Points>(null);
  const { positions, offsets } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const offsets = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) offsets[i] = Math.random();
    return { positions, offsets };
  }, []);

  // path: sun (4.2,3.1,-2.5) -> array center (0,0.4,0) -> battery (3.1,-1.7,0.6)
  const A = new THREE.Vector3(4.2, 3.1, -2.5);
  const B = new THREE.Vector3(0, 0.5, 0.3);
  const C = new THREE.Vector3(3.1, -1.4, 0.6);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      const t = (clock.elapsedTime * 0.12 + offsets[i]) % 1;
      const p = new THREE.Vector3();
      if (t < 0.5) {
        p.lerpVectors(A, B, t * 2);
      } else {
        p.lerpVectors(B, C, (t - 0.5) * 2);
      }
      // slight scatter
      p.x += Math.sin(offsets[i] * 40 + clock.elapsedTime) * 0.08;
      p.y += Math.cos(offsets[i] * 30 + clock.elapsedTime) * 0.08;
      pos[i * 3] = p.x;
      pos[i * 3 + 1] = p.y;
      pos[i * 3 + 2] = p.z;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#ffc24d"
        size={0.055}
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Rig() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ pointer, clock }) => {
    if (!ref.current) return;
    // mouse parallax + slow idle sway
    const tx = pointer.x * 0.18 + Math.sin(clock.elapsedTime * 0.2) * 0.05;
    const ty = -pointer.y * 0.12 + Math.cos(clock.elapsedTime * 0.15) * 0.03;
    ref.current.rotation.y += (tx - ref.current.rotation.y) * 0.04;
    ref.current.rotation.x += (ty - ref.current.rotation.x) * 0.04;
  });
  return (
    <group ref={ref}>
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.35}>
        <PanelArray />
      </Float>
      <Sun />
      <Battery />
      <EnergyParticles />
    </group>
  );
}

export function SolarScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 8.5], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 6, 4]} intensity={1.4} color="#ffe0b0" />
      <Rig />
      <fog attach="fog" args={['#000000', 10, 22]} />
    </Canvas>
  );
}

export default SolarScene;
