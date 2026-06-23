import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function ThreeHeroMesh() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let faceModel: THREE.Group | null = null;
    let animationFrameId: number;

    const clock = new THREE.Clock();

    // Mouse positions
    let mouseX = 0;
    let mouseY = 0;

    // --- Renderer Setup ---
    let rect = container.getBoundingClientRect();
    let w = rect.width || 500;
    let h = rect.height || 500;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // --- Scene Setup ---
    scene = new THREE.Scene();
    scene.background = null;
    scene.environment = null;

    // --- Camera Setup ---
    const fov = 15;
    const aspect = w / h;
    const near = 0.1;
    const far = 20;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = w < 600 ? 18 : 10;

    // --- Lights Setup ---
    // Blue directional light from right front
    const directionalLight1 = new THREE.DirectionalLight(0x0000ff, 2);
    directionalLight1.position.set(5, 5, 0);
    scene.add(directionalLight1);

    // Red directional light from left bottom
    const directionalLight2 = new THREE.DirectionalLight(0xff0000, 2);
    directionalLight2.position.set(-5, -5, 0);
    scene.add(directionalLight2);

    // Strong white light from top right front
    const directionalLight3 = new THREE.DirectionalLight(0xffffff, 8);
    directionalLight3.position.set(2, 4, 1);
    scene.add(directionalLight3);

    // Mild white light from top left front
    const directionalLight4 = new THREE.DirectionalLight(0xffffff, 4);
    directionalLight4.position.set(-2, 2, 1);
    scene.add(directionalLight4);

    // Orange backlight from top right
    const directionalLightBack = new THREE.DirectionalLight(0xff671b, 3);
    directionalLightBack.position.set(2, 0, -4);
    scene.add(directionalLightBack);

    // Cyan backlight from top left
    const directionalLightYellow = new THREE.DirectionalLight(0x0fc4ff, 4);
    directionalLightYellow.position.set(-2, 0, -4);
    scene.add(directionalLightYellow);

    // Set targets for all lights
    const lights = [
      directionalLight1,
      directionalLight2,
      directionalLight3,
      directionalLight4,
      directionalLightBack,
      directionalLightYellow,
    ];
    lights.forEach((l) => {
      l.target.position.set(0, 0, 0);
      scene.add(l.target);
    });

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      rect = container.getBoundingClientRect();
      w = rect.width || 500;
      h = rect.height || 500;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.z = w < 600 ? 18 : 10;
      camera.updateProjectionMatrix();

      if (faceModel) {
        faceModel.position.set(0, 0, 0);
      }
    };
    window.addEventListener("resize", handleResize);

    // --- Model Loading ---
    const loader = new GLTFLoader();
    loader.load(
      "/models/FaceGlass_4.glb",
      (gltf) => {
        faceModel = gltf.scene;
        faceModel.position.set(0, 0, 0);

        faceModel.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.material = new THREE.MeshPhysicalMaterial({
              color: 0x000000,
              metalness: 1.0,
              roughness: 0.15,
              opacity: 1.0,
              transparent: true,
              ior: 1.15,
              reflectivity: 1.0,
              transmission: 1.0,
              side: THREE.DoubleSide,
              envMap: null,
              envMapIntensity: 0,
              flatShading: true,
            });
          }
        });

        scene.add(faceModel);
        setLoading(false);
      },
      undefined,
      (err) => {
        console.error("GLB Load Error:", err);
        setError("Failed to load 3D model centerpiece.");
        setLoading(false);
      }
    );

    // --- Cursor Interactions ---
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length) {
        const t = e.touches[0];
        mouseX = (t.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(t.clientY / window.innerHeight) * 2 + 1;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    // --- Animation Loop ---
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (faceModel) {
        const rotationSpeed = 0.08;
        faceModel.rotation.y += (mouseX * 0.4 - faceModel.rotation.y) * rotationSpeed;
        faceModel.rotation.x += (-mouseY * 0.4 - faceModel.rotation.x) * rotationSpeed;

        const t = clock.getElapsedTime();
        const breathing = 1 + 0.015 * Math.sin(t * 2);
        faceModel.scale.set(breathing, breathing, breathing);
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- Clean Up ---
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center select-none">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest animate-pulse z-10 font-mono">
          Initializing 3D Space...
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-rose-500/80 uppercase tracking-widest z-10 font-mono">
          {error}
        </div>
      )}
      <div ref={containerRef} className="w-full h-full absolute inset-0 z-0" />
    </div>
  );
}
