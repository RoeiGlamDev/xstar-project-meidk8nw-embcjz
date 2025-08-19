import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
        }

        const particles: THREE.Sprite[] = [];
        const particleCount = 200;

        const textureLoader = new THREE.TextureLoader();
        const particleTexture = textureLoader.load('/path/to/particleTexture.png');

        for (let i = 0; i < particleCount; i++) {
            const spriteMaterial = new THREE.SpriteMaterial({ 
                map: particleTexture, 
                color: Math.random() < 0.5 ? 0xffa500 : 0xffffff 
            });
            const particle = new THREE.Sprite(spriteMaterial);
            particle.position.set(
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 100
            );
            particle.scale.set(0.5, 0.5, 0.5);
            particles.push(particle);
            scene.add(particle);
        }

        camera.position.z = 50;

        const animate = () => {
            requestAnimationFrame(animate);
            particles.forEach(particle => {
                particle.rotation.x += 0.01;
                particle.rotation.y += 0.01;
            });
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0">
            <motion.div 
                className="flex flex-col items-center justify-center w-full h-full bg-white bg-opacity-50"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-bold text-orange-600 hover:text-orange-500 transition duration-300">
                    Welcome to GlamCS
                </h1>
                <p className="mt-4 text-lg text-gray-800">
                    Elevate your beauty routine with our luxurious range of cosmetics.
                </p>
                <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-400 transition duration-300">
                    Shop Now
                </button>
            </motion.div>
        </div>
    );
};

export default ParticleBackground;