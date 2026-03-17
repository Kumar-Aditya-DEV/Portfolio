import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#00d4aa"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.4}
          metalness={0.8}
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#00d4aa" />
      <AnimatedSphere />
    </>
  );
}

const ThreeBackground = () => {
  return (
    <div className="fixed top-0 right-0 w-full h-full pointer-events-none z-0 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
