import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Works.css';

gsap.registerPlugin(ScrollTrigger);

function Works() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      title: 'AI Customer Support Platform',
      category: 'AI / SaaS',
      description:
        'Enterprise-grade customer support automation using GPT-4 with real-time sentiment analysis and intelligent ticket routing.',
      stack: ['React', 'Node.js', 'OpenAI', 'MongoDB', 'WebSocket'],
      year: '2024',
    },
    {
      title: 'Real-Time Collaboration Tool',
      category: 'WebRTC / Real-Time',
      description:
        'Multi-user collaborative whiteboard with video conferencing, screen sharing, and synchronized document editing.',
      stack: ['React', 'WebRTC', 'Socket.io', 'Redis', 'PostgreSQL'],
      year: '2024',
    },
    {
      title: 'Healthcare SaaS Platform',
      category: 'SaaS / Enterprise',
      description:
        'HIPAA-compliant telemedicine platform with appointment scheduling, secure video consultations, and patient management.',
      stack: ['React', 'Node.js', 'Stripe', 'Twilio', 'AWS'],
      year: '2023',
    },
    {
      title: 'E-Commerce Analytics Dashboard',
      category: 'Analytics / BI',
      description:
        'Real-time analytics dashboard for e-commerce platforms with predictive sales forecasting and inventory optimization.',
      stack: ['React', 'Python', 'TensorFlow', 'MongoDB', 'D3.js'],
      year: '2023',
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

    const projectCards = projectsRef.current.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      const imageBox = card.querySelector('.project-image-box');
      const content = card.querySelector('.project-content');

      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        imageBox,
        { scale: 1.2 },
        {
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );

      card.addEventListener('mouseenter', () => {
        gsap.to(imageBox, {
          scale: 1.05,
          duration: 0.6,
          ease: 'power2.out',
        });
        gsap.to(content, {
          y: -10,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(imageBox, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        });
        gsap.to(content, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });
  }, []);

  return (
    <section id="works" ref={sectionRef} className="works">
      <div className="works-container">
        <h2 ref={titleRef} className="works-title">
          SELECTED WORKS
        </h2>

        <div ref={projectsRef} className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-box">
                <div className="project-image-placeholder">
                  <span className="project-year">{project.year}</span>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-stack">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-link">
                  <span>View Case Study</span>
                  <span className="link-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
