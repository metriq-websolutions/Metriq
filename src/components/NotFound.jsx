import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/NotFound.css';

const NotFound = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Reveal Animation
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power3.out' }
    ).fromTo(
      textRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power4.out' },
      '-=0.5'
    );
  }, []);

  return (
    <div ref={containerRef} className="not-found-page">
      <div ref={textRef} className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-desc">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="home-btn">
          <span className="arrow">←</span> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;