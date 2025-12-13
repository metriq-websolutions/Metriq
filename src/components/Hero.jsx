import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import * as THREE from 'three';
import '../styles/Hero.css';

function Hero() {
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const words = ["Full-Stack Developer", "Web Designer", "Freelancer"];
  const [index, setIndex] = useState(0);

  function supportsWebGL() {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch {
      return false;
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!supportsWebGL()) return;
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x000000,
      transparent: true,
      opacity: 0.6,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // 1. Define a variable to hold the animation frame ID
    let animationFrameId;

    const animate = () => {
      // 2. Capture the ID
      animationFrameId = requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Initial Load Animation
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Check if elements exist before animating to prevent null errors
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 100, rotationX: -90 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.2, stagger: 0.1, delay: 0.3 }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.6'
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.4'
      );
    }

    // ✅ CLEANUP FUNCTION
    return () => {
      // 3. Stop the loop before destroying the renderer
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener('resize', handleResize);

      // Dispose Three.js resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Text Change Animation
  useEffect(() => {
    if (titleRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(
        titleRef.current.children,
        { opacity: 0 },
        { opacity: 1, duration: 1.2, stagger: 0.1 }
      );
    }
  }, [index]);

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      // Note: Make sure you have gsap ScrollToPlugin registered if using 'scrollTo' inside gsap
      // Otherwise, use native JS: section.scrollIntoView({ behavior: 'smooth' });
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
     { supportsWebGL()? <canvas ref={canvasRef} className="hero-canvas"></canvas>:null}
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          <span>{words[index]}</span>
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Crafting AI-powered applications, real-time systems, and premium portfolios
        </p>
        <button ref={ctaRef} className="hero-cta" onClick={scrollToContact}>
          <span className="cta-text">Let's Work Together</span>
          <span className="cta-arrow">→</span>
        </button>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;