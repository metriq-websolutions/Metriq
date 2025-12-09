import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Navbar.css';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;

    gsap.to(nav, {
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 40px rgba(0, 0, 0, 0.08)',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: '100px top',
        scrub: true,
      },
    });

    const links = nav.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.addEventListener('mouseenter', (e) => {
        gsap.to(e.target, {
          x: 8,
          duration: 0.4,
          ease: 'power3.out',
        });
      });

      link.addEventListener('mouseleave', (e) => {
        gsap.to(e.target, {
          x: 0,
          duration: 0.4,
          ease: 'power3.out',
        });
      });
    });
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.6,
        ease: 'power4.out',
      });

      const menuLinks = menuRef.current.querySelectorAll('.mobile-nav-link');
      gsap.fromTo(
        menuLinks,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power3.out',
        }
      );
    } else {
      document.body.style.overflow = '';
      if (menuRef.current) {
        gsap.to(menuRef.current, {
          x: '100%',
          duration: 0.4,
          ease: 'power4.in',
        });
      }
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMobileMenuOpen(false);
      gsap.to(window, {
        scrollTo: { y: section, offsetY: 80 },
        duration: 1.2,
        ease: 'power3.inOut',
      });
    }
  };

  return (
    <>
      <nav ref={navRef} className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">METRIQ</span>
          </div>

          <div className="navbar-links">
            <a className="nav-link" onClick={() => scrollToSection('about')}>
              About
            </a>
            <a className="nav-link" onClick={() => scrollToSection('services')}>
              Services
            </a>
            <a className="nav-link" onClick={() => scrollToSection('works')}>
              Works
            </a>
            <a className="nav-link" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </nav>

      <div ref={menuRef} className="mobile-menu">
        <button
          className="mobile-menu-close"
          onClick={() => setMobileMenuOpen(false)}
        >
          ×
        </button>
        <div className="mobile-menu-links">
          <a className="mobile-nav-link" onClick={() => scrollToSection('about')}>
            About
          </a>
          <a className="mobile-nav-link" onClick={() => scrollToSection('services')}>
            Services
          </a>
          <a className="mobile-nav-link" onClick={() => scrollToSection('works')}>
            Works
          </a>
          <a className="mobile-nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
