import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const Scene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mountRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      const light = new THREE.HemisphereLight(0xffffff, 0x444444);
      scene.add(light);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshStandardMaterial({ color: '#FF6F30' }); // GlamCS orange color
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        mountRef.current?.removeChild(renderer.domElement);
      };
    }
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

const GlamCS: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center justify-center">
      <motion.h1 
        className="text-5xl font-bold mb-4" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        Welcome to GlamCS
      </motion.h1>
      <motion.p 
        className="text-lg mb-8" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover luxury cosmetics that elevate your beauty routine. 
      </motion.p>
      <Scene />
      <motion.button 
        className="mt-8 bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
};

export default GlamCS;