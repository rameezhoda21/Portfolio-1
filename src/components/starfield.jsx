import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { AmbientLight, PointLight } from 'three'; // Import Three.js objects directly if needed

// A component to represent a single planet
function Planet({ position, args, color, distort, speed, texturePath = null }) {
  const mesh = useRef();
  // Optional: Add some rotation
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001 * speed; // Subtle rotation
    }
  });

  // Optional: Load texture
  // const texture = texturePath ? useLoader(TextureLoader, texturePath) : null;

  return (
    <Sphere args={args} position={position} ref={mesh}>
      {/* MeshPhongMaterial reacts to lights, MeshStandardMaterial for PBR */}
      {/* If using texture: <meshStandardMaterial map={texture} /> */}
      <MeshDistortMaterial
        color={color}
        distort={distort} // Amount of distortion
        speed={speed}     // Speed of distortion animation
      />
    </Sphere>
  );
}

// Your main PlanetBackground component
export default function PlanetBackground() {
  return (
    // The Canvas component sets up the Three.js scene, camera, and renderer
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensure it's behind your content
        background: '#000000', // Set a default black background
      }}
      camera={{ position: [0, 0, 5], fov: 75 }} // Camera position and field of view
    >
      {/* Suspense is needed for async operations like loading 3D models or textures */}
      <Suspense fallback={null}>
        {/* Lights */}
        <AmbientLight intensity={0.5} /> {/* General ambient light */}
        <PointLight position={[10, 10, 10]} intensity={1} /> {/* Point light for highlights */}
        <PointLight position={[-10, -10, -10]} intensity={0.7} />

        {/* Background stars (optional, from Drei) */}
        <Stars radius={200} depth={50} count={5000} factor={4} saturation={0} fade />

        {/* Your Planets */}
        <Planet
          position={[-1.5, 0, 0]}
          args={[1, 32, 32]} // Radius, widthSegments, heightSegments
          color="#3366ff" // Blue-ish planet
          distort={0.5}
          speed={1.5}
        />
        <Planet
          position={[1.8, 1, -2]}
          args={[0.7, 32, 32]}
          color="#ff6600" // Orange-ish planet
          distort={0.8}
          speed={2}
        />
         <Planet
          position={[-3, -1.5, -4]}
          args={[1.2, 32, 32]}
          color="#9933ff" // Purple planet
          distort={0.3}
          speed={1}
        />

        {/* Optional: OrbitControls for debugging/interaction */}
        <OrbitControls enableZoom enablePan enableRotate />
      </Suspense>
    </Canvas>
  );
}