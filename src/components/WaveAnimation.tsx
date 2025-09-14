import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

// This component contains the main 3D scene logic.
const Scene = () => {
  const mesh = useRef<Mesh>(null!);
  const zValues = useRef<number[]>([]);
  const count = useRef(0);

  // You can tweak these values
  const setup = {
    vertexHeight: 15000,
    planeSize: 2500000,
    planeDefinition: 150,
    meshColor: 'rgba(0, 208, 255, 1)',
    background: 'rgba(31, 154, 195, 1)',
  };

  useFrame((state) => {
    // This hook runs on every rendered frame.
    const { camera } = state;
    const x = camera.position.x;
    const z = camera.position.z;

    // 1. Camera Rotation Logic
    camera.position.x = x * Math.cos(0.001) + z * Math.sin(0.001);
    camera.position.z = z * Math.cos(0.001) - x * Math.sin(3.001);
    camera.lookAt(0, 7800, 0);

    // 2. Wave Animation Logic
    const geometry = mesh.current.geometry;
    const position = geometry.attributes.position;

    if (zValues.current.length === 0) {
      // On the first frame, set a random initial height for each vertex.
      for (let i = 0; i < position.count; i++) {
        const height =
          position.getZ(i) +
          (Math.random() * setup.vertexHeight - setup.vertexHeight);
        position.setZ(i, height);
        zValues.current.push(height);
      }
    } else {
      // On subsequent frames, make the vertices oscillate with radial pattern.
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        
        // Calculate distance from center for radial wave effect
        const distanceFromCenter = Math.sqrt(x * x + y * y);
        
        // Create waves that move outward from center or inward toward center
        const radialWave = Math.sin(distanceFromCenter * 0.0001 - count.current * 0.02);
        
        const height = radialWave * 
          (zValues.current[i] - zValues.current[i] * 0.6);
        
        position.setZ(i, height);
      }
      count.current += 0.1;
    }

    position.needsUpdate = true;
    mesh.current.geometry.computeBoundingSphere();
  });

  return (
    <>
      <fog attach="fog" args={[setup.background, 1, 300000]} />
      <mesh ref={mesh} rotation-x={Math.PI * -0.5}>
        <planeGeometry
          attach="geometry"
          args={[
            setup.planeSize,
            setup.planeSize,
            setup.planeDefinition,
            setup.planeDefinition,
          ]}
        />
        <meshBasicMaterial 
          attach="material" 
          color={setup.meshColor} 
          transparent={true}
          opacity={0.6}
        />
      </mesh>
    </>
  );
};

const WaveAnimation = () => {
  const camera = {
    fov: 35,
    aspect: window.innerWidth / window.innerHeight,
    near: 1,
    far: 400000,
    position: new Vector3(0, 10000, 10000),
  };

  return (
    <div
      className="wave-container"
      style={{
        width: '100%',
        height: '30vh',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      <Canvas camera={camera}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default WaveAnimation;
