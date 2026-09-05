import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { runOnIdle, cancelIdle } from '../utils/scheduler';

export default function ThreeHeroBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isCancelled = false;
    let cleanupFn = null;

    const idleId = runOnIdle(() => {
      if (isCancelled || !containerRef.current) return;
      const targetContainer = containerRef.current;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        targetContainer.clientWidth / targetContainer.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 75;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setSize(targetContainer.clientWidth, targetContainer.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      targetContainer.appendChild(renderer.domElement);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 350 : 1200;

    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#0066FF');
    const color2 = new THREE.Color('#00A8FF');
    const color3 = new THREE.Color('#061A35');
    const colorWhite = new THREE.Color('#D8EAFE');

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 190;
      positions[i3 + 1] = (Math.random() - 0.5) * 130;
      positions[i3 + 2] = (Math.random() - 0.5) * 110;

      const mixRatio = Math.random();
      let c;
      if (mixRatio < 0.45) {
        c = color1.clone().lerp(color2, mixRatio * 2);
      } else if (mixRatio < 0.85) {
        c = color2.clone().lerp(colorWhite, (mixRatio - 0.45) * 2.5);
      } else {
        c = color3;
      }

      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Glow circle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(0, 168, 255, 0.8)');
    grad.addColorStop(0.7, 'rgba(0, 102, 255, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 1.6 : 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 3D Geometric Torus Wireframe
    const torusGeo = new THREE.TorusGeometry(36, 11, 16, 60);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(24, -4, -18);
    torusMesh.rotation.x = Math.PI * 0.35;
    scene.add(torusMesh);

    // Dynamic cyber plane
    const gridHelper = new THREE.GridHelper(260, 45, 0x0066ff, 0x061a35);
    gridHelper.position.y = -42;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.22;
    scene.add(gridHelper);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    if (!isMobile && !prefersReducedMotion) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        particles.rotation.y = elapsed * 0.025;
        particles.rotation.x = elapsed * 0.012;

        torusMesh.rotation.z = elapsed * 0.04;
        torusMesh.rotation.y = elapsed * 0.03;

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        camera.position.x = targetX * 10;
        camera.position.y = targetY * 6;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

      animate();

      cleanupFn = () => {
        window.removeEventListener('resize', onResize);
        window.removeEventListener('mousemove', onMouseMove);
        cancelAnimationFrame(animationFrameId);

        particleGeometry.dispose();
        particleMaterial.dispose();
        particleTexture.dispose();
        torusGeo.dispose();
        torusMat.dispose();
        gridHelper.geometry.dispose();
        renderer.dispose();

        if (targetContainer && renderer.domElement.parentNode === targetContainer) {
          targetContainer.removeChild(renderer.domElement);
        }
      };
    }, 1200);

    return () => {
      isCancelled = true;
      cancelIdle(idleId);
      if (cleanupFn) {
        cleanupFn();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-75"
      aria-hidden="true"
    />
  );
}
