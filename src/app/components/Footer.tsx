import { Link } from 'react-router';

const footerLinks = {
  product: [
    { label: 'Solutions', href: '/solutions' },
    { label: 'Technology', href: '/technology' },
    { label: 'Insights', href: '/insights' },
    { label: 'Compliance', href: '/compliance' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Partners', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '/insights?filter=press' },
  ],
  support: [
    { label: 'Contact', href: '/contact' },
    { label: 'Report a Leak', href: '/report' },
    { label: 'Status', href: '#' },
    { label: 'Developer Guide', href: '/technology#developers-corner' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Data Processing Addendum', href: '/dpa' },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#221f1f',
        borderTop: '1px solid #f85838',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-12 md:py-16">
        {/* Four Column Layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Product Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              PRODUCT
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#8f877d',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8f877d';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              COMPANY
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#8f877d',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8f877d';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              SUPPORT
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#8f877d',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8f877d';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              LEGAL
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#8f877d',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8f877d';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline and Trust Line */}
        <div className="border-t pt-8 mb-8" style={{ borderColor: '#353332' }}>
          <p
            style={{
              fontFamily: "'Aktiv Grotesk Extended', sans-serif",
              fontSize: '14px',
              fontWeight: 300,
              color: '#b5aea6',
              letterSpacing: '0.05em',
              marginBottom: '8px',
            }}
          >
            Invisible protection. Undeniable accountability.
          </p>
          <p
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              color: '#8f877d',
              marginBottom: '4px',
            }}
          >
            © 2026 Image Angel Technology Ltd. Cardiff, Wales.
          </p>
          <p
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              color: '#8f877d',
            }}
          >
            Founded by a survivor advocate. Endorsed by safety organisations worldwide.
          </p>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-6 mb-8"
        >
          <SocialIcon href="https://www.linkedin.com/company/image-angel/" label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="https://bsky.app/profile/imageangel.bsky.social" label="Bluesky">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.492 6.181 3.086-4.312.65-8.358 2.226-4.07 7.726 4.718 5.433 6.56-1.502 7.265-3.429.704 1.927 1.584 8.636 7.265 3.43 4.288-5.501.242-7.077-4.07-7.727 2.582.406 5.396-.459 6.18-3.086.247-.828.625-5.789.625-6.479 0-.688-.14-1.86-.902-2.203-.66-.3-1.664-.62-4.3 1.24C12.046 4.747 9.087 8.686 8 10.8"/>
            </svg>
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/imageangel_/" label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </SocialIcon>
        </div>

        {/* Address */}
        <div className="text-center mb-8">
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              fontWeight: 400,
              color: '#8f877d',
            }}
          >
            10 Churchill Way, Cardiff, Wales, CF10 2HE
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string, label: string, children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-colors duration-200"
      style={{
        color: '#8f877d',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = '#8f877d';
      }}
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
}