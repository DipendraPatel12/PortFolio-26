import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Sparkles, TorusKnot, Icosahedron, Text3D, Center } from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

export default function Scene3D({ theme = { primary: '#FF5F1F', secondary: '#0077FF' } }) {
  const sphereRef = useRef();
  const { mouse, camera } = useThree();
  const [scrollY, setScrollY] = useState(0);

  // Track Native Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.2;
      sphereRef.current.rotation.y = time * 0.3;

      const targetX = (mouse.x * 2);
      const targetY = (mouse.y * 2);
      
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, targetX, 0.05);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, targetY, 0.05);
    }
    
    // Scroll-Driven Camera Flight
    // Move deeper into the Z axis as user scrolls down
    const targetZ = 5 - (scrollY * 0.005);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    
    // Slight Parallax Camera Tilt
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, (mouse.x * -0.1), 0.05);
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, (mouse.y * 0.1), 0.05);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={2} color={theme.primary} />
      <directionalLight position={[-10, -10, -5]} intensity={1.5} color={theme.secondary} />
      
      {/* Immersive Particle System */}
      <Sparkles count={300} scale={20} size={5} speed={0.4} opacity={0.6} color={theme.secondary} />
      <Sparkles count={150} scale={25} size={8} speed={0.2} opacity={0.4} color={theme.primary} />

      {/* Main Distorted Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1.5, 128, 128]} scale={2} position={[0, 0, -2]}>
          <MeshDistortMaterial
            color="#050505"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={1}
            emissive={theme.primary}
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      {/* Floating Orbital Geometries */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={3} position={[-6, 3, -10]}>
        <TorusKnot args={[1, 0.3, 128, 32]} scale={0.5}>
          <meshStandardMaterial color={theme.secondary} wireframe />
        </TorusKnot>
      </Float>

      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={2} position={[8, -4, -15]}>
        <Icosahedron args={[1, 0]} scale={1.5}>
          <meshStandardMaterial color={theme.primary} wireframe />
        </Icosahedron>
      </Float>
      
      <Float speed={1} rotationIntensity={0.8} floatIntensity={4} position={[-4, -8, -8]}>
        <TorusKnot args={[1, 0.4, 64, 16]} scale={0.8}>
          <meshStandardMaterial color={theme.secondary} roughness={0.2} metalness={0.8} emissive={theme.secondary} emissiveIntensity={0.5} />
        </TorusKnot>
      </Float>

      {/* 3D Background Text */}
      <Center position={[0, 4, -20]}>
        <Text3D 
          font="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_bold.typeface.json"
          size={4}
          height={0.5}
          curveSegments={12}
        >
          DSP
          <meshStandardMaterial color={theme.primary} emissive={theme.primary} emissiveIntensity={0.5} roughness={0.1} metalness={0.8} />
        </Text3D>
      </Center>

      {/* Cinematic Post Processing */}
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} intensity={1.5} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  );
}
