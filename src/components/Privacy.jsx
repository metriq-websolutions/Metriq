import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Legal.css'; 

const Privacy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Simple fade-in animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <div className="legal-page">
      <div ref={containerRef} className="legal-container">
        {/* Header */}
        <header className="legal-header">
          <h1 className="legal-title">PRIVACY POLICY</h1>
          <p className="legal-subtitle">Effective Date: December 11, 2025</p>
          <div className="legal-separator"></div>
        </header>

        {/* Content Sections */}
        <div className="legal-content">
          <p className="legal-intro">
            This Privacy Policy explains how the Developer Team, operating under the name METRIQ (referred to
            hereafter as "The Developers," "we," "us," or "our"), collects, uses, and protects personal
            information related to our Clients and, where applicable, the end-users of the websites we develop
          </p>

          <section className="legal-section">
            <h2>1. Scope of Policy</h2>
            <p>This policy applies to two main types of data:</p>
            <ul className="legal-list">
              <li><strong>Client Data:</strong> Information collected from you when you commission a web development project.</li>
              <li><strong>End-User Data:</strong> Information processed by The Developers during the development and testing phase of a Project (e.g., test user accounts).</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect (Client Data)</h2>
            <p>When you engage The Developers for a Project, we collect the following personal information:</p>
            <ul className="legal-list">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and business details.</li>
              <li><strong>Billing Information:</strong> Data necessary for contract execution, including the specific service Package and payment history.</li>
              <li><strong>Project Specifics:</strong> Content, branding, access credentials, and design feedback.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. End-User Data (Websites We Build)</h2>
            <p>For websites we build (Essential and Pro Scale packages):</p>
            <div className="subsection">
              <h3>During Development</h3>
              <p>Any sample data or test accounts created by us are used solely for testing functionality and are deleted upon Project Handover.</p>
            </div>
            <div className="subsection">
              <h3>Post-Handover Responsibility</h3>
              <p>Once the website is handed over, The Client is solely responsible for defining and managing the privacy policy and data security for the end-users of that website.</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>4. How We Use Information</h2>
            <ul className="legal-list">
              <li><strong>Contract Fulfillment:</strong> To execute the requested web development services (building the site, integrating features).</li>
              <li><strong>Communication:</strong> To provide project updates, request feedback, and invoice for services.</li>
              <li><strong>Service Improvement:</strong> To analyze how we can improve our service quality.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable legal or regulatory requirements.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Storage and Security</h2>
            <ul className="legal-list">
              <li><strong>Security Measures:</strong> We implement reasonable practices to protect personal data from unauthorized access.</li>
              <li><strong>Limited Access:</strong> Access to client data is strictly limited to team members who require the information for their job functions.</li>
              <li><strong>Student Status:</strong> As a student partnership, we may rely on commercially available, secure third-party platforms (like cloud storage) for communication.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Data Retention</h2>
            <p>We retain Client Data for the duration of the Project and a reasonable period thereafter to address legal or warranty obligations.</p>
            <p><strong>Project Files:</strong> Sensitive test data and project files are typically archived or deleted 6 months after Project Handover.</p>
          </section>

          <section className="legal-section">
            <h2>7. Disclosure of Information</h2>
            <p>We do not sell or trade Client Data. We only disclose data in limited circumstances:</p>
            <ul className="legal-list">
              <li><strong>With Consent:</strong> When The Client explicitly provides consent.</li>
              <li><strong>Legal Requirement:</strong> If required by law or valid public authority requests.</li>
              <li><strong>Portfolio Use:</strong> We may display the completed website design in our public portfolio unless an NDA is signed.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Third-Party Services</h2>
            <p>
              The websites we build may integrate third-party services (e.g., Google Maps, WhatsApp widgets). 
              We are not responsible for the data practices or security of these external services or the Client's final hosting environment.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Other Provisions</h2>
            <h3>Children's Privacy</h3>
            <p>Our services are directed to adults. We do not knowingly collect personal information from children under 16.</p>
            
            <h3>Your Rights</h3>
            <p>You have the right to request access to, correction of, or deletion of your personal data, subject to our retention obligations.</p>
            
            <h3>Changes to Policy</h3>
            <p>We reserve the right to modify this policy at any time. Material changes will be indicated by the "Effective Date".</p>
          </section>

          <section className="legal-section">
            <h2>10. Contact Information</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <p><strong>Email:</strong> metriqwebsolutions@gmail.com </p>
          </section>
        </div>

        {/* Footer Link */}
        <div className="legal-footer">
          <a href="/" className="back-link">
            <span className="arrow">←</span> Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;