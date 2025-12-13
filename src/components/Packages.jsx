import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Import this
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';
import '../styles/Packages.css';

gsap.registerPlugin(ScrollTrigger);

function Packages() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate(); // 👈 Initialize hook

  const packages = [
    {
      name: 'Opening Offer',
      price: 'Starting at ₹5000',
      description: 'Perfect for personal portfolios, landing pages, and small business identities.',
      features: [
        'Single Page',
        'Responsive Mobile Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        '1 Rounds of Revisions',
        '1 Month Post-Launch Support',
        '3-5 Working Days'
      ],
      isPremium: false
    },
    {
      name: 'Essential',
      price: 'Starting at ₹10,000',
      description: 'Perfect for personal portfolios, landing pages, and small business identities.',
      features: [
        'Single Page / 5-Page Site',
        'Responsive Mobile Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        '3 Rounds of Revisions',
        '1 Month Post-Launch Support',
        '5-10 Working Days'
      ],
      isPremium: false
    },
    {
      name: 'Pro Scale',
      price: 'Starting at ₹15,000',
      description: 'Full-stack solutions for startups and businesses needing dynamic functionality.',
      features: [
        'Full-Stack Web Application',
        'Admin Dashboard',
        'Multiple Pages',
        'Multiple Revisions',
        'Responsive Design',
        'Basic SEO',
        'Database Integration',
        'Authentication & User Profiles',
        'Advanced Animation & Interactivity',
        '3 Months Priority Support',
        '3-4 Weeks'
      ],
      isPremium: true
    }
  ];

  useEffect(() => {
    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 40%',
          scrub: 1,
        },
      }
    );

    // Cards Animation
    const cards = containerRef.current.querySelectorAll('.package-card');

    // Staggered entry
    gsap.fromTo(
      cards,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      }
    );

    // Hover Effects
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          scale: 1.01,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  return (
    <section id="packages" ref={sectionRef} className="packages">
      <div className="packages-container">

        {/* 👇 NEW BACK BUTTON */}
        <button className="back-btn" onClick={() => navigate('/')}>
          <span className="back-arrow">←</span> Back to Home
        </button>

        <h2 ref={titleRef} className="packages-title">
          PACKAGES
        </h2>

        <div ref={containerRef} className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.isPremium ? 'premium-border' : ''}`} >

              {pkg.isPremium && <div className="package-badge">RECOMMENDED</div>}

              <div className="package-header">
                <h3 className="package-name">{pkg.name}</h3>
                <p className="package-price">{pkg.price}</p>
                <p className="package-desc">{pkg.description}</p>
              </div>

              <div className="package-separator"></div>

              <ul className="package-features">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;