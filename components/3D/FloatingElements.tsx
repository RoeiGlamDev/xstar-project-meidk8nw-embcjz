import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Create a 3D text for "GlamCS"
        const loader = new THREE.FontLoader();
        loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
            const textGeometry = new THREE.TextGeometry('GlamCS', {
                font: font,
                size: 1,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.05,
                bevelOffset: 0,
                bevelSegments: 5
            });

            const textMaterial = new THREE.MeshBasicMaterial({ color: 0xff7f20 }); // Orange color
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(-3, 0, -5);
            scene.add(textMesh);
        });

        // Add floating effect
        const animate = () => {
            requestAnimationFrame(animate);
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    object.rotation.x += 0.01;
                    object.rotation.y += 0.01;
                    object.position.y = Math.sin(Date.now()  0.001)  0.5; // Floating up and down
                }
            });
            renderer.render(scene, camera);
        };

        camera.position.z = 5;
        animate();

        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white">
            <motion.h1
                className="text-6xl font-bold text-orange-500 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Welcome to GlamCS
            </motion.h1>
            <motion.p
                className="text-lg text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Discover our luxurious range of cosmetics designed to elevate your beauty routine.
            </motion.p>
            <motion.button
                className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Shop Now
            </motion.button>
        </div>
    );
};

export default FloatingElements;