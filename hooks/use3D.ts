import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook to handle 3D interactions for GlamCS cosmetics website.
 * This hook utilizes three.js to create luxurious and interactive 3D elements
 * to enhance the user experience on the GlamCS website.
 *
 * @returns {HTMLElement} The 3D scene container element.
 */
const use3D = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        // Initialize the 3D scene
        const initScene = () => {
            if (containerRef.current) {
                // Create the scene
                sceneRef.current = new THREE.Scene();
                // Set scene background color to white
                sceneRef.current.background = new THREE.Color(0xffffff);

                // Create the camera
                cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                cameraRef.current.position.z = 5;

                // Create the renderer
                rendererRef.current = new THREE.WebGLRenderer({ antialias: true });
                rendererRef.current.setSize(window.innerWidth, window.innerHeight);
                containerRef.current.appendChild(rendererRef.current.domElement);

                // Add lighting
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                sceneRef.current.add(ambientLight);
                const directionalLight = new THREE.DirectionalLight(0xffa500, 1); // Orange light
                directionalLight.position.set(1, 1, 1).normalize();
                sceneRef.current.add(directionalLight);

                // Create 3D models (for example, a lipstick)
                const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
                const material = new THREE.MeshStandardMaterial({ color: 0xffa500 });
                const lipstick = new THREE.Mesh(geometry, material);
                sceneRef.current.add(lipstick);

                // Animation loop
                const animate = () => {
                    requestAnimationFrame(animate);
                    lipstick.rotation.y += 0.01; // Rotate lipstick for effect
                    rendererRef.current?.render(sceneRef.current, cameraRef.current);
                };
                animate();
            }
        };

        initScene();

        // Handle window resize
        const handleResize = () => {
            if (cameraRef.current && rendererRef.current) {
                const width = window.innerWidth;
                const height = window.innerHeight;
                rendererRef.current.setSize(width, height);
                cameraRef.current.aspect = width / height;
                cameraRef.current.updateProjectionMatrix();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                rendererRef.current.dispose();
                containerRef.current?.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    return containerRef;
};

export default use3D;