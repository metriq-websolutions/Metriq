import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/About.css';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'top 40%',
          scrub: 1,
        },
      }
    );

    const paragraphs = textRef.current.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
      gsap.fromTo(
        p,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: p,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    });

   
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about">
      <div className="about-container">
        <h2 ref={titleRef} className="about-title">
          ABOUT
        </h2>

        <div ref={textRef} className="about-text">
          <p className="about-lead">
            We are a duo driven by curiosity and collaboration, focused on creating digital solutions that are simple, reliable, and impactful.
          </p>

          <p className="about-description">
            Our journey started with small projects, but each step has strengthened our commitment to clarity, trust, and continuous learning. We approach every challenge with a mindset of growth and precision.
          </p>

          <p className="about-description">
           Every project we take on is more than just work — it’s an opportunity to combine strengths, solve problems, and deliver results that make a difference. We believe in transparency, ethical choices, and building experiences that last.
          </p>
        </div>


      </div>
    </section>
  );
}

export default About;
