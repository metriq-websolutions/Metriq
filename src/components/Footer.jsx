import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';
import '../styles/Footer.css';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
        },
      }
    );

    const contentElements = contentRef.current.querySelectorAll('.footer-section');
    gsap.fromTo(
      contentElements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1.5,
      ease: 'power3.inOut',
    });
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        <h2 ref={titleRef} className="footer-title">
          LET'S BUILD
          <br />
          SOMETHING
          <br />
          AMAZING
        </h2>

        <div ref={contentRef} className="footer-content">
          <div className="footer-section">
            <h3 className="footer-section-title">Contact</h3>
            <div className="footer-links">
              <a href="mailto:metriqwebsolutions@gmail.com" className="footer-link">
                metriqwebsolutions@gmail.com
              </a>
              <a href="tel:8220094437" className="footer-link">
                +91 8220094437
              </a>
              <a href="tel:9342772002" className="footer-link">
                +91 9342772002
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Social</h3>
            <div className="footer-links">
              <a
                href="https://github.com/metriq-websolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/metriq-undefined-a08962393/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/metriqwebsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-section-title">Navigation</h3>
            <div className="footer-links">
              <button onClick={scrollToTop} className="footer-link footer-button">
                Back to Top ↑
              </button>
              <HashLink to="/packages" className='footer-link'>Our Packages</HashLink>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-section-title">Our Guidelines</h3>
            <div className="footer-links">
              <HashLink to="/TermsAndConditions" className="footer-link">
                Terms and Conditions
              </HashLink>
              <HashLink to="/PrivacyPolicy" className="footer-link">
                Privacy Policy
              </HashLink>

            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} All Rights Reserved for Metriq.
          </p>
          <a href='https://www.jramportfolio.online' className="footer-credit">Designed & Developed by Metriq (Jayaram)</a>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        ↑
      </button>
    </footer>
  );
}

export default Footer;
