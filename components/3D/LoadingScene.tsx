import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const ORBIT_COUNT = 6;

const CoreShape: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.35;
    ref.current.rotation.x += delta * 0.15;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.15, 0]} />
      <meshBasicMaterial color="#2dd4bf" wireframe />
    </mesh>
  );
};

const OrbitingCubes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const cubes = useMemo(
    () =>
      Array.from({ length: ORBIT_COUNT }).map((_, i) => ({
        radius: 1.8 + (i % 3) * 0.4,
        speed: 0.4 + (i % 3) * 0.15,
        offset: (i / ORBIT_COUNT) * Math.PI * 2,
        y: Math.sin(i) * 0.6,
        color: i % 2 === 0 ? "#2dd4bf" : "#3b82f6",
      })),
    [],
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const cfg = cubes[i];
      child.position.x = Math.cos(t * cfg.speed + cfg.offset) * cfg.radius;
      child.position.z = Math.sin(t * cfg.speed + cfg.offset) * cfg.radius;
      child.rotation.x = t * 0.6;
      child.rotation.y = t * 0.6;
    });
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cfg, i) => (
        <mesh key={i} position={[cfg.radius, cfg.y, 0]}>
          <boxGeometry args={[0.22, 0.22, 0.22]} />
          <meshBasicMaterial color={cfg.color} />
        </mesh>
      ))}
    </group>
  );
};

const ParticleField: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 180;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3b82f6"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
};

const LoadingScene: React.FC = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <CoreShape />
      <OrbitingCubes />
      <ParticleField />
    </Canvas>
  );
};

export default LoadingScene;
