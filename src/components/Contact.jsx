import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Contact.css';
import axios from 'axios';
import Toast from './Toast';
import { HashLink } from 'react-router-hash-link';


gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [toast, setToast] = useState(null);
  const [agreed, setAgreed] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

    const formElements = formRef.current.querySelectorAll('.form-group, .submit-button');
    gsap.fromTo(
      formElements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 75%',
        },
      }
    );

    const inputs = formRef.current.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('focus', (e) => {
        gsap.to(e.target, {
          scale: 1.02,
          duration: 0.3,
          ease: 'power2.out',
        });

        const label = e.target.previousElementSibling;
        if (label) {
          gsap.to(label, {
            y: -8,
            scale: 0.9,
            color: '#000000',
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });

      input.addEventListener('blur', (e) => {
        gsap.to(e.target, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });

        if (!e.target.value) {
          const label = e.target.previousElementSibling;
          if (label) {
            gsap.to(label, {
              y: 0,
              scale: 1,
              color: '#666666',
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        }
      });
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    gsap.to(formRef.current, {
      scale: 0.98,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
    });
    if(!agreed){
      setToast({ message: 'Please agree to the Terms and Privacy Policy!', type: 'failure' });
    }
    try {
      const response = await axios.post("https://metriq-oq49.onrender.com/contact", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        TermsandPrivacyPolicyAgreed: agreed?`Agreed`:'Not Agreed'
      });
      setToast({ message: 'Message sent successfully!', type: 'success' });
    } catch (error) {
      console.error("Error:", error);
      setToast({ message: 'Failed to send message.', type: 'error' });
    }
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="contact-container">
        <h2 ref={titleRef} className="contact-title">
          LET'S TALK
        </h2>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-lead">
              Have a project in mind? Let's discuss how we can work together to bring your vision
              to life.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:metriqwebsolutions@gmail.com" className="contact-value">
                  metricwebsolutions@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">Remote / Worldwide</span>
              </div>

              <div className="contact-item">
                <span className="contact-label">Availability</span>
                <span className="contact-value">Open for Projects</span>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required 
              />
              <label htmlFor="terms" className="checkbox-label">
                I agree to the{' '}
                <a href="/TermsAndConditions" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </a>
                {' '}and{' '}
                <HashLink to="/PrivacyPolicy" target="_blank">
                  Privacy Policy
                </HashLink>
                .
              </label>
            </div>

            <button type="submit" className="submit-button">
              <span>Send Message</span>
              <span className="submit-arrow">→</span>
            </button>
          </form>
        </div>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </section>
  );
}

export default Contact;
