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
    let w = rect.width || 300;
    let h = rect.height || 300;
    if (w < 50) w = 300;
    if (h < 50) h = 300;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.error("WebGL Renderer creation failed in ThreeHeroMesh:", e);
      setError("WebGL is not supported or blocked on this browser/device.");
      setLoading(false);
      return;
    }

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
    camera.position.z = (w < 600 || h < 500) ? 18 : 10;

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
      if (!container || !renderer) return;
      rect = container.getBoundingClientRect();
      w = rect.width || 300;
      h = rect.height || 300;
      if (w < 50) w = 300;
      if (h < 50) h = 300;
      
      renderer.setSize(w, h);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      camera.aspect = w / h;
      camera.position.z = (w < 600 || h < 500) ? 18 : 10;
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
      if (container && renderer && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
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
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-slate-950/20 rounded-2xl border border-white/5 backdrop-blur-md">
          {/* Glowing neural circuit hologram fallback */}
          <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#00d4ff]/40 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-purple-500/40 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute w-12 h-12 rounded-full bg-linear-to-r from-[#00d4ff] to-[#8b5cf6] opacity-25 blur-md" />
            <svg className="w-10 h-10 text-[#00d4ff] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-white/60 uppercase">
            3D VISUALIZATION OFFLINE
          </span>
          <span className="text-[9px] font-mono text-gray-500 mt-1 uppercase max-w-[200px]">
            {error}
          </span>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full absolute inset-0 z-0" />
    </div>
  );
}
