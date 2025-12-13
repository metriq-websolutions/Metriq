import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Legal.css'; 

const Terms = () => {
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
      
        
        <header className="legal-header">
          <h1 className="legal-title">TERMS & CONDITIONS</h1>
          <p className="legal-subtitle">For Web Development Services</p>
          <div className="legal-separator"></div>
        </header>

        <div className="legal-content">
          <p className="legal-intro">
            This document outlines the terms and conditions for services provided by the Developer Team
            (referred to hereafter as "The Developers") to the client (referred to hereafter as "The Client").
            By commissioning services, the Client agrees to be bound by these terms.
          </p>

          <section className="legal-section">
            <h2>1. Definitions</h2>
            <ul className="legal-list">
              <li><strong>The Developers:</strong> Refers to the student partnership providing the web development services.</li>
              <li><strong>The Client:</strong> Refers to the individual or entity commissioning the web development services.</li>
              <li><strong>The Project:</strong> Refers to the specific web development work outlined in the selected Package.</li>
              <li><strong>Project Fee:</strong> The total payment amount, which falls within the stated range of the selected Package.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Scope of Work & Packages</h2>
            <p>The specific scope of work will be defined by the chosen Package and confirmed in a separate, brief Service Agreement or Invoice.</p>
            
            <div className="subsection">
              <h3>2.1. Opening Offer Package</h3>
              <ul className="legal-list">
                <li>Single Page website (portfolio/landing page).</li>
                <li>Fully responsive mobile design & Basic SEO setup.</li>
                <li>Contact form integration.</li>
                <li>1 Month Post-Launch Warranty (Bug Fixes).</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>2.2. Essential Package</h3>
              <ul className="legal-list">
                <li>Single Page to 5-Page Site.</li>
                <li>Fully responsive mobile design & Basic SEO setup.</li>
                <li>Contact form integration.</li>
                <li>1 Month Post-Launch Warranty (Bug Fixes).</li>
              </ul>
            </div>

            <div className="subsection">
              <h3>2.3. Pro Scale Package</h3>
              <ul className="legal-list">
                <li>Full-Stack Web Application (including Admin Dashboard).</li>
                <li>Database Integration, Authentication & User Profiles.</li>
                <li>Advanced animation and interactivity.</li>
                <li>3 Months Priority Warranty (Bug Fixes).</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2>3. Financial Terms and Payment</h2>
            <p><strong>3.1. Project Fee:</strong> Determined based on complexity within the selected Package range.</p>
            
            <h3>3.2. Payment Schedule</h3>
            <ul className="legal-list">
              <li><strong>Initial Deposit (40%):</strong> Non-refundable, required before work commences.</li>
              <li><strong>Milestone Payment (30%):</strong> Due upon 50% completion (e.g., final design approval).</li>
              <li><strong>Final Payment (30%):</strong> Due upon project completion, before final handover/deployment.</li>
            </ul>

            <p><strong>3.3. Late Payment:</strong> If delayed more than 7 days, work pauses and a 1% daily late fee applies.</p>
            <p><strong>3.4. Third-Party Costs:</strong> Fees for domains, hosting, paid plugins, or stock assets are the sole responsibility of The Client.</p>
          </section>

          <section className="legal-section">
            <h2>4. Revisions and Changes</h2>
            <ul className="legal-list">
              <li><strong>Opening Offer:</strong> 1 round included.</li>
              <li><strong>Essential:</strong> 3 rounds included.</li>
              <li><strong>Pro Scale:</strong> Multiple reasonable rounds included.</li>
            </ul>
            <p><strong>Change Requests:</strong> Significant scope changes or extra revisions will incur additional fees.</p>
          </section>

          <section className="legal-section">
            <h2>5. Project Timeline and Delivery</h2>
            <ul className="legal-list">
              <li><strong>Opening Offer:</strong> 3-5 working days.</li>
              <li><strong>Essential:</strong> 5-10 working days.</li>
              <li><strong>Pro Scale:</strong> 3-4 weeks (15-20 working days).</li>
            </ul>
            <p><strong>Delays:</strong> We are not liable for delays caused by Client inaction. If delayed more than 30 days by Client, final payment becomes due immediately.</p>
            <p><strong>Browser Compatibility:</strong> Guaranteed for modern browsers (Chrome, Firefox, Safari, Edge). Older/obscure browsers not guaranteed.</p>
            <p><strong>Warranty:</strong> Covers bugs in our code. Does not cover issues from Client edits, plugin updates, or hosting errors.</p>
          </section>

          <section className="legal-section">
            <h2>6. Client Responsibilities</h2>
            <ul className="legal-list">
              <li><strong>Content:</strong> Must provide text/images within 7 days of initiation.</li>
              <li><strong>Approvals:</strong> Timely feedback required to prevent delays.</li>
              <li><strong>Communication:</strong> Official support provided during business hours (Mon-Fri, 9AM-8PM IST).</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Intellectual Property (IP)</h2>
            <p><strong>Client IP:</strong> You guarantee ownership of all provided materials and indemnify us against claims.</p>
            <p><strong>Developer IP:</strong> Upon final payment, full rights transfer to Client. We retain the right to display the work in our portfolio unless an NDA is signed.</p>
          </section>

          <section className="legal-section">
            <h2>8. Limitation of Liability</h2>
            <p>The Developers are students providing a service. We are not liable for business losses or revenue loss. Maximum liability is strictly limited to the Project Fee paid.</p>
          </section>

          <section className="legal-section">
            <h2>9. Project Acceptance and Refusal</h2>
            <p>We reserve the right to refuse projects involving illegal activities, hate speech, or content beyond our comfort level.</p>
          </section>

          <section className="legal-section">
            <h2>10. Termination</h2>
            <ul className="legal-list">
              <li><strong>By Client:</strong> 40% deposit is non-refundable. Payment due for work completed beyond deposit.</li>
              <li><strong>Pauses:</strong> A pause more than 30 days may be treated as termination with outstanding payments due.</li>
              <li><strong>By Developers:</strong> We may terminate for non-payment or abusive behavior.</li>
            </ul>
          </section>
        </div>

        <div className="legal-footer">
          <a href="/" className="back-link">
            <span className="arrow">←</span> Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Terms;