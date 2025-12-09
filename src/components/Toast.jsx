import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Toast.css';

const Toast = ({ message, type = 'success', onClose }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    // Animate In
    gsap.fromTo(
      toastRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
    );

    // Auto-dismiss after 4 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    // Animate Out
    gsap.to(toastRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: onClose, // Unmount after animation finishes
    });
  };

  return (
    <div className="toast-container">
      <div ref={toastRef} className={`toast-card ${type}`}>
        <div className="toast-icon">
          {type === 'success' ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          )}
        </div>
        <span className="toast-message">{message}</span>
        <button onClick={handleClose} className="toast-close">
          ✕
        </button>
      </div>
    </div>
  );
};

export default Toast;