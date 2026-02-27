import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { duration, easing, stagger } from '../config/motion';
import logoWhite from "figma:asset/5ed395b250a44744fe95e12db0b4e32c4459ec8d.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    const timeout = setTimeout(() => setDropdownOpen(false), 200);
    setDropdownTimeout(timeout);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    
    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <style>{`
        .nav-height-responsive { height: 56px !important; }
        @media (min-width: 1024px) { .nav-height-responsive { height: 64px !important; } }
        
        /* Logo fixed sizing - never stretches */
        .nav-logo {
          height: 28px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
        }
        
        /* Fixed button sizing - no scaling at intermediate widths */
        .nav-btn-fixed {
          font-family: 'Aktiv Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 4px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
          cursor: pointer;
          transition: all 150ms ease;
        }
        
        .nav-btn-report {
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.1);
          background-color: #3a3737;
        }
        
        .nav-btn-report:hover {
          background-color: #454242;
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-1px);
        }
        
        .nav-btn-demo {
          color: #ffffff;
          background-color: #f85838;
          border: none;
        }
        
        .nav-btn-demo:hover {
          background-color: #ff6a4d;
          box-shadow: 0 0 32px rgba(248,88,56,0.35);
          transform: translateY(-1px);
        }
        
        /* Hide desktop nav items at intermediate widths */
        @media (max-width: 1279px) {
          .nav-desktop-full {
            display: none !important;
          }
          .nav-mobile-trigger {
            display: flex !important;
          }
        }
        
        @media (min-width: 1280px) {
          .nav-desktop-full {
            display: flex !important;
          }
          .nav-mobile-trigger {
            display: none !important;
          }
        }
      `}</style>
      <nav
        className="fixed top-0 left-0 right-0 z-50 nav-height-responsive"
        style={{ backgroundColor: '#221f1f', height: '56px' }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-full flex items-center justify-between">
          {/* Logo - Fixed sizing, never stretches */}
          <Link to="/" className="z-10">
            <img
              src={logoWhite}
              alt="Image Angel"
              className="nav-logo"
            />
          </Link>

          {/* Desktop Navigation - Only shows at 1280px+ */}
          <div className="nav-desktop-full items-center gap-8">
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <button
                className="flex items-center gap-1 transition-colors"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#ffffff',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transitionDuration: `${duration.micro}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f85838';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                Solutions{' '}
                <motion.div
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: duration.micro / 1000, ease: easing.microEase }}
                >
                  <ChevronDown size={10} />
                </motion.div>
              </button>

              {/* Dropdown Panel */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: duration.micro / 1000, ease: easing.microEase }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 12px)',
                      left: '0',
                      width: '280px',
                      backgroundColor: 'rgba(40,37,37,0.85)',
                      backdropFilter: 'blur(24px)',
                      borderRadius: '14px',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
                      padding: '8px',
                    }}
                  >
                    {[
                      {
                        to: '/solutions#platforms',
                        title: 'For Platforms',
                        desc: 'Enterprise-scale protection',
                      },
                      {
                        to: '/solutions#creators',
                        title: 'For Creators',
                        desc: 'Protect your content',
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.to}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.15,
                          delay: index * 0.03,
                          ease: easing.microEase,
                        }}
                      >
                        <Link
                          to={item.to}
                          className="block transition-colors"
                          style={{
                            padding: '14px 18px',
                            borderRadius: '12px',
                            marginBottom: index === 0 ? '4px' : '0',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                          onClick={() => setDropdownOpen(false)}
                        >
                          <div
                            style={{
                              fontFamily: "'Aktiv Grotesk', sans-serif",
                              fontSize: '14px',
                              fontWeight: 600,
                              color: '#ffffff',
                              marginBottom: '4px',
                            }}
                          >
                            {item.title}
                          </div>
                          <div
                            style={{
                              fontFamily: "'Aktiv Grotesk', sans-serif",
                              fontSize: '13px',
                              fontWeight: 400,
                              color: 'rgba(255,255,255,0.45)',
                            }}
                          >
                            {item.desc}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {['Technology', 'Insights', 'About', 'Compliance'].map((label) => (
              <Link
                key={label}
                to={`/${label.toLowerCase()}`}
                className="transition-colors relative group"
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  color: '#ffffff',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transitionDuration: `${duration.micro}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f85838';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Side Buttons - Fixed padding, no scaling - Only shows at 1280px+ */}
          <div className="nav-desktop-full items-center gap-3">
            <Link to="/report">
              <button className="nav-btn-fixed nav-btn-report">
                REPORT A LEAK
              </button>
            </Link>

            <Link to="/contact">
              <button className="nav-btn-fixed nav-btn-demo">
                REQUEST DEMO
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button - Shows below 1280px */}
          <button
            className="nav-mobile-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            style={{ 
              color: '#ffffff', 
              padding: '8px', 
              minWidth: '44px', 
              minHeight: '44px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay - Shows below 1280px */}
        {mobileMenuOpen && (
          <div
            className="fixed left-0 right-0 bottom-0"
            style={{ top: '56px', backgroundColor: '#221f1f', overflowY: 'auto', zIndex: 49 }}
          >
            <div className="flex flex-col p-6 md:p-8 gap-5">
              {[
                { to: '/solutions#platforms', label: 'PLATFORMS' },
                { to: '/solutions#creators', label: 'CREATORS' },
                { to: '/technology', label: 'TECHNOLOGY' },
                { to: '/insights', label: 'INSIGHTS' },
                { to: '/about', label: 'ABOUT' },
                { to: '/compliance', label: 'COMPLIANCE' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: duration.fast / 1000,
                    delay: index * (stagger.tight / 1000),
                    ease: easing.enterEase,
                  }}
                >
                  <Link
                    to={item.to}
                    className="text-white block"
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '16px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col gap-3 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: duration.medium / 1000,
                  delay: 0.3,
                }}
              >
                <Link to="/report" onClick={() => setMobileMenuOpen(false)}>
                  <button
                    className="w-full transition-all"
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#221f1f',
                      padding: '14px 28px',
                      minHeight: '48px',
                      borderRadius: '12px',
                      border: '1px solid #221f1f',
                      backgroundColor: 'transparent',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transitionDuration: `${duration.micro}ms`,
                    }}
                  >
                    REPORT A LEAK
                  </button>
                </Link>

                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button
                    className="w-full transition-all"
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#221f1f',
                      padding: '14px 28px',
                      minHeight: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#f85838',
                      border: 'none',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transitionDuration: `${duration.fast}ms`,
                    }}
                  >
                    REQUEST DEMO
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}