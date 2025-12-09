import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Services.css';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  const services = [
    {
      number: '01',
      title: 'AI Integration',
      description:
        'Custom AI-powered applications leveraging GPT, Claude, and specialized machine learning models to automate workflows and enhance user experiences.',
      capabilities: ['NLP Solutions', 'AI Chatbots', 'Data Analysis'],
    },
    {
      number: '02',
      title: 'Real-Time Systems',
      description:
        'High-performance WebSocket implementations for live chat, collaborative tools, and instant data synchronization.',
      capabilities: ['Live Chat', 'Collaboration', 'Data Sync'],
    },
    {
      number: '03',
      title: 'API Architecture',
      description:
        'RESTful API design with comprehensive documentation, versioning strategies, rate limiting, and robust security protocols.',
      capabilities: ['REST APIs', 'Documentation', 'Security'],
    },
    {
      number: '04',
      title: 'Performance Optimization',
      description:
        'Full-stack performance tuning, database optimization, caching strategies, CDN implementation, and monitoring for lightning-fast applications.',
      capabilities: ['Speed Tuning', 'Monitoring', 'Scalability'],
    },
  ];

  useEffect(() => {
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

    const cards = cardsRef.current.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      card.addEventListener('mouseenter', (e) => {
        gsap.to(card, {
          y: -12,
          scale: 1.02,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', (e) => {
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
    <section id="services" ref={sectionRef} className="services">
      <div className="services-container">
        <h2 ref={titleRef} className="services-title">
          SERVICES
        </h2>

        <div ref={cardsRef} className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-capabilities">
                {service.capabilities.map((cap, i) => (
                  <span key={i} className="capability-tag">
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
