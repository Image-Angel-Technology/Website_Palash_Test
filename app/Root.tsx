import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { SkipToContent } from './components/SkipToContent';
import { CookieConsent } from './components/CookieConsent';
import { trackPageview } from './utils/analytics';

export default function Root() {
  const location = useLocation();
  
  // Scroll to top on route change, or to hash if present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Hash is used for state (e.g. tab selection) but no matching element — scroll to top
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

    // Track pageview on route change
    trackPageview(location.pathname, document.title);
  }, [location]);
  
  return (
    <HelmetProvider>
      <SkipToContent />
      <div className="w-full overflow-x-hidden">
        <Navigation />
        <main id="main-content">
          <Outlet />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </HelmetProvider>
  );
}