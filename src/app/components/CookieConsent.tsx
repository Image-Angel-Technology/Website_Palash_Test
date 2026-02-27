import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

/**
 * SECURITY & ANALYTICS: Cookie consent banner
 * Blocks analytics until user accepts
 * Stores consent in localStorage
 */

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('imageangel_cookie_consent');
    if (!consent) {
      // Show banner after 1 second delay
      setTimeout(() => setIsVisible(true), 1000);
    } else if (consent === 'accepted') {
      // Initialize analytics if consent was previously given
      window.dispatchEvent(new CustomEvent('analytics:init'));
    }
  }, []);

  const handleAccept = () => {
    const timestamp = new Date().toISOString();
    localStorage.setItem('imageangel_cookie_consent', 'accepted');
    localStorage.setItem('imageangel_cookie_consent_timestamp', timestamp);
    window.dispatchEvent(new CustomEvent('analytics:init'));
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('imageangel_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#221f1f',
            borderTop: '1px solid rgba(222, 222, 219, 0.1)',
            padding: '20px',
            zIndex: 9998,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
          role="dialog"
          aria-labelledby="cookie-consent-heading"
          aria-describedby="cookie-consent-description"
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, paddingRight: '20px' }}>
                <h2
                  id="cookie-consent-heading"
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '8px',
                  }}
                >
                  Cookie Consent
                </h2>
                <p
                  id="cookie-consent-description"
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 200,
                    color: '#dededb',
                    lineHeight: 1.5,
                  }}
                >
                  We use cookies to analyze site traffic and improve your experience. Analytics are only
                  enabled with your consent. We do not collect personally identifiable information (PII) or
                  sensitive data.{' '}
                  <a
                    href="/privacy"
                    style={{ color: '#f85838', textDecoration: 'underline' }}
                  >
                    Learn more
                  </a>
                </p>
              </div>
              <button
                onClick={handleReject}
                aria-label="Close cookie consent banner"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#dededb',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={handleAccept}
                style={{
                  padding: '10px 24px',
                  backgroundColor: '#f85838',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ff6a4d')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f85838')}
              >
                Accept Cookies
              </button>
              <button
                onClick={handleReject}
                style={{
                  padding: '10px 24px',
                  backgroundColor: 'transparent',
                  color: '#dededb',
                  border: '1px solid rgba(222, 222, 219, 0.3)',
                  borderRadius: '6px',
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(222, 222, 219, 0.5)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(222, 222, 219, 0.3)';
                  e.currentTarget.style.color = '#dededb';
                }}
              >
                Reject
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}