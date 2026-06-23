import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";

export function ThreeFooterMesh() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    let effect: AsciiEffect;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let boxWireframe: THREE.LineSegments;
    let textMesh: THREE.Mesh | null = null;
    let animationFrameId: number;

    const rect = container.getBoundingClientRect();
    let w = rect.width || 300;
    let h = rect.height || 300;
    if (w < 50) w = 300;
    if (h < 50) h = 300;

    // --- Renderer Setup ---
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(w, h);
      renderer.setClearColor(0x000000);

      // --- Ascii Effect Setup ---
      // Characters used on reference site: ' .,:;i1tfLCG08@'
      effect = new AsciiEffect(renderer, " .,:;i1tfLCG08@", { invert: true });
      effect.setSize(w, h);
      effect.domElement.style.color = "rgba(255, 255, 255, 0.4)";
      effect.domElement.style.backgroundColor = "transparent";
      effect.domElement.style.textAlign = "center";
      effect.domElement.style.lineHeight = "normal";
      effect.domElement.className = "three-ascii-canvas mx-auto";

      container.appendChild(effect.domElement);
    } catch (e) {
      console.error("WebGL Renderer creation failed in ThreeFooterMesh:", e);
      // Fallback: render a static glowing container
      const fallbackDiv = document.createElement("div");
      fallbackDiv.className = "flex flex-col items-center justify-center w-full h-full text-white/30 font-display text-4xl font-extrabold tracking-widest uppercase border border-white/5 bg-black/40 rounded-3xl p-6 select-none shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] min-h-[300px]";
      fallbackDiv.innerHTML = `
        <div class="relative w-20 h-20 mb-3 flex items-center justify-center">
          <div class="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]"></div>
          <span class="text-xs font-mono text-white/20 tracking-wider">SAI</span>
        </div>
      `;
      container.appendChild(fallbackDiv);
      return;
    }

    // --- Camera Setup ---
    const fov = 75;
    const aspect = w / h;
    const near = 0.1;
    const far = 500;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 15);

    // --- Scene Setup ---
    scene = new THREE.Scene();

    // --- Ambient / Hemisphere Lights ---
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1.5);
    scene.add(hemiLight);

    // --- Box Geometry (Quads representation) ---
    const boxSize = 5;
    const boxSegments = 2;
    const boxGeometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize, boxSegments, boxSegments, boxSegments);
    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
    boxWireframe = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    scene.add(boxWireframe);

    // --- Load Font & Center Text ---
    const fontLoader = new FontLoader();
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        const textGeometry = new TextGeometry("SAI", {
          font: font,
          size: 1.8,
          depth: 0.5,
          curveSegments: 12,
          bevelEnabled: false,
        });

        textGeometry.computeBoundingBox();
        const boundingBox = textGeometry.boundingBox;
        if (boundingBox) {
          const centerX = (boundingBox.max.x + boundingBox.min.x) / 2;
          const centerY = (boundingBox.max.y + boundingBox.min.y) / 2;
          const centerZ = (boundingBox.max.z + boundingBox.min.z) / 2;
          textGeometry.translate(-centerX, -centerY, -centerZ);
        }

        const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        scene.add(textMesh);
      },
      undefined,
      (err) => console.error("Text font load error in footer:", err)
    );

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container || !renderer || !effect) return;
      const r = container.getBoundingClientRect();
      const width = r.width || 300;
      const height = width; // Force 1:1 aspect ratio
      renderer.setSize(width, height);
      effect.setSize(width, height);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // --- Scroll Keyframes & Camera Interpolation ---
    const keyframes = [
      { position: new THREE.Vector3(0.00, 40.00, 0.00), rotation: new THREE.Euler(-Math.PI / 2, 0.00, 0.53) },
      { position: new THREE.Vector3(0.00, 7.54, 0.00), rotation: new THREE.Euler(-Math.PI / 4, 0.00, 0.00) },
      { position: new THREE.Vector3(0.11, 0.26, 2.98), rotation: new THREE.Euler(0.00, 0.04, 0.00) },
      { position: new THREE.Vector3(0, 0.19, 7.34), rotation: new THREE.Euler(0.00, -0.01, 0.00) },
    ];

    let scrollPercent = 0;

    const handleScroll = () => {
      const footerElement = container.closest("footer");
      if (!footerElement) return;

      const rectFooter = footerElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the footer is visible
      const visibleHeight = Math.max(0, Math.min(rectFooter.bottom, viewportHeight) - Math.max(rectFooter.top, 0));
      const footerHeight = rectFooter.height || 400;

      // Only interpolate when footer enters viewport
      if (rectFooter.top < viewportHeight && rectFooter.bottom > 0) {
        const totalDistance = viewportHeight + footerHeight;
        const currentDistance = viewportHeight - rectFooter.top;
        scrollPercent = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const interpolateCamera = (percentage: number) => {
      const totalKeyframes = keyframes.length - 1;
      // We double/scale the percentage to complete the transition during entry
      const scaledPercent = Math.min(Math.max(percentage * 1.5, 0), 1);
      const currentKeyframe = Math.floor(scaledPercent * totalKeyframes);
      const nextKeyframe = Math.min(currentKeyframe + 1, totalKeyframes);
      const lerpAlpha = (scaledPercent * totalKeyframes) % 1;

      camera.position.lerpVectors(
        keyframes[currentKeyframe].position,
        keyframes[nextKeyframe].position,
        lerpAlpha
      );

      camera.rotation.set(
        THREE.MathUtils.lerp(keyframes[currentKeyframe].rotation.x, keyframes[nextKeyframe].rotation.x, lerpAlpha),
        THREE.MathUtils.lerp(keyframes[currentKeyframe].rotation.y, keyframes[nextKeyframe].rotation.y, lerpAlpha),
        THREE.MathUtils.lerp(keyframes[currentKeyframe].rotation.z, keyframes[nextKeyframe].rotation.z, lerpAlpha)
      );
    };

    // --- Animation Loop ---
    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      boxWireframe.rotation.y = time * 0.00015;
      boxWireframe.rotation.x = time * 0.0001;

      if (textMesh) {
        textMesh.rotation.y = time * 0.00015;
      }

      interpolateCamera(scrollPercent);

      effect.render(scene, camera);
    };

    animate(0);

    // --- Clean Up ---
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (container && effect && effect.domElement && container.contains(effect.domElement)) {
        container.removeChild(effect.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="renderContainer"
      className="w-full h-full min-h-[300px] flex items-center justify-center select-none overflow-hidden"
    />
  );
}
