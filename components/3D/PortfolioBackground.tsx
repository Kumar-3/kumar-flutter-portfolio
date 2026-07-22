import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// Runs for the entire session, not a bounded splash — kept deliberately
// sparse and low-opacity so it reads as ambient depth behind scrolling
// content rather than competing with it, and paused via the Page
// Visibility API whenever the tab itself isn't visible.

const CoreShape: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.06;
    ref.current.rotation.x += delta * 0.03;
  });
  return (
    <mesh ref={ref} position={[3, 1, -2]}>
      <icosahedronGeometry args={[2, 0]} />
      <meshBasicMaterial
        color="#2dd4bf"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
};

const SecondaryShape: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta * 0.04;
    ref.current.rotation.z += delta * 0.02;
  });
  return (
    <mesh ref={ref} position={[-4, -1.5, -4]}>
      <icosahedronGeometry args={[1.4, 0]} />
      <meshBasicMaterial
        color="#3b82f6"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
};

const ParticleField: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 140;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.01;
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
        color="#5eead4"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.18}
      />
    </points>
  );
};

function useTabVisible(): boolean {
  const [visible, setVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const handler = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, []);
  return visible;
}

const PortfolioBackground: React.FC = () => {
  const tabVisible = useTabVisible();

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 8], fov: 55 }}
      frameloop={tabVisible ? "always" : "never"}
    >
      <CoreShape />
      <SecondaryShape />
      <ParticleField />
    </Canvas>
  );
};

export default PortfolioBackground;
