import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export default function CookiePolicyPage() {
  useEffect(() => {
    document.title = 'Cookie Policy — Image Angel';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div
        style={{
          backgroundColor: '#f8f8f7',
          borderBottom: '1px solid #dededb',
          padding: '16px 0',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <nav aria-label="breadcrumb">
            <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
              <li>
                <Link
                  to="/"
                  style={{
                    color: '#767270',
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ color: '#767270' }}>/</li>
              <li style={{ color: '#221f1f', fontFamily: "'Aktiv Grotesk', sans-serif", fontSize: '14px' }}>
                Cookie Policy
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section style={{ padding: 'var(--section-pad-y) 0' }}>
        <div className="max-w-[900px] mx-auto px-5 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 800,
              color: '#221f1f',
              marginBottom: '16px',
            }}
          >
            Cookie Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#8f877d',
              marginBottom: '48px',
            }}
          >
            Last updated: February 25, 2026
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              color: '#6e6c6a',
              lineHeight: 1.8,
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              What Are Cookies?
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Cookies are small text files that are placed on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              How We Use Cookies
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Image Angel uses cookies for the following purposes:
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#221f1f', marginTop: '32px', marginBottom: '12px' }}>
              Essential Cookies (Always Active)
            </h3>
            <p style={{ marginBottom: '16px' }}>
              These cookies are necessary for the website to function properly. They enable core functionality such as:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>User authentication and session management</li>
              <li style={{ marginBottom: '12px' }}>Security and fraud prevention</li>
              <li style={{ marginBottom: '12px' }}>Load balancing</li>
              <li style={{ marginBottom: '12px' }}>Remembering your cookie preferences</li>
            </ul>

            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#221f1f', marginTop: '32px', marginBottom: '12px' }}>
              Analytics Cookies (Optional)
            </h3>
            <p style={{ marginBottom: '16px' }}>
              These cookies help us understand how visitors interact with our website by collecting anonymous information:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>Pages visited and features used</li>
              <li style={{ marginBottom: '12px' }}>Time spent on pages</li>
              <li style={{ marginBottom: '12px' }}>Error messages encountered</li>
              <li style={{ marginBottom: '12px' }}>General location information (country/region)</li>
            </ul>
            <p style={{ marginBottom: '24px' }}>
              We use this information to improve our Services and user experience.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#221f1f', marginTop: '32px', marginBottom: '12px' }}>
              Marketing Cookies (Optional)
            </h3>
            <p style={{ marginBottom: '24px' }}>
              These cookies track your browsing activity across websites to deliver relevant advertisements. We do not use marketing cookies at this time.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Third-Party Cookies
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Some cookies are placed by third-party services that appear on our pages:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Analytics:</strong> Google Analytics (if enabled)</li>
              <li style={{ marginBottom: '12px' }}><strong>Content Delivery:</strong> CDN providers for fonts and assets</li>
            </ul>
            <p style={{ marginBottom: '24px' }}>
              These third parties have their own privacy policies, which we encourage you to review.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Managing Your Cookie Preferences
            </h2>
            <p style={{ marginBottom: '24px' }}>
              You can control cookie settings in several ways:
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#221f1f', marginTop: '32px', marginBottom: '12px' }}>
              Our Cookie Consent Tool
            </h3>
            <p style={{ marginBottom: '24px' }}>
              When you first visit our website, you'll see a cookie consent banner. You can accept or decline optional cookies. You can change your preferences at any time by clicking the cookie icon in the bottom-left corner of the page.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#221f1f', marginTop: '32px', marginBottom: '12px' }}>
              Browser Settings
            </h3>
            <p style={{ marginBottom: '24px' }}>
              Most browsers allow you to:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}>View cookies stored on your device</li>
              <li style={{ marginBottom: '12px' }}>Delete existing cookies</li>
              <li style={{ marginBottom: '12px' }}>Block all cookies or only third-party cookies</li>
              <li style={{ marginBottom: '12px' }}>Delete cookies when you close the browser</li>
            </ul>
            <p style={{ marginBottom: '24px' }}>
              Please note that blocking essential cookies may prevent you from using certain features of our website.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              How Long Do Cookies Last?
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Cookies have different lifespans:
            </p>
            <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li style={{ marginBottom: '12px' }}><strong>Persistent cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years)</li>
            </ul>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Updates to This Policy
            </h2>
            <p style={{ marginBottom: '24px' }}>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of significant changes.
            </p>

            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#221f1f', marginTop: '40px', marginBottom: '16px' }}>
              Contact Us
            </h2>
            <p style={{ marginBottom: '24px' }}>
              If you have questions about our use of cookies, please contact us:
            </p>
            <p style={{ marginBottom: '48px' }}>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:hello@imageangel.co.uk"
                style={{ color: '#f85838', textDecoration: 'none' }}
              >
                hello@imageangel.co.uk
              </a>
            </p>

            <div
              style={{
                backgroundColor: '#f8f8f7',
                border: '1px solid #dededb',
                borderRadius: '8px',
                padding: '24px',
                marginTop: '48px',
              }}
            >
              <p style={{ fontSize: '14px', color: '#6e6c6a', marginBottom: '16px' }}>
                <strong style={{ color: '#221f1f' }}>Important Note:</strong> This is a template Cookie Policy. Before going live, this document should be reviewed and customized by legal counsel to ensure compliance with applicable laws including GDPR, ePrivacy Directive, and PECR.
              </p>
              <Link
                to="/privacy"
                style={{
                  color: '#f85838',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                }}
              >
                View our Privacy Policy →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
