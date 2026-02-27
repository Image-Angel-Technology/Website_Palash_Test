import { motion, useScroll } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router";
import { duration, spring, easing, shouldReduceMotion } from "../config/motion";

export function FloatingCtaButton() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = shouldReduceMotion();

  // Debounced scroll handler for performance
  const handleScroll = useCallback(() => {
    // Show after scrolling past 600px
    const scrolledEnough = window.scrollY > 600;

    // Hide when footer is visible (with 300ms debounce handled by requestAnimationFrame)
    const footer = document.querySelector("footer");
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      const footerVisible = footerRect.top < window.innerHeight;
      setIsVisible(scrolledEnough && !footerVisible);
    } else {
      setIsVisible(scrolledEnough);
    }
  }, []);

  useEffect(() => {
    let rafId: number;
    let timeout: NodeJS.Timeout;

    const throttledScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        clearTimeout(timeout);
        timeout = setTimeout(handleScroll, 100);
      });
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (timeout) clearTimeout(timeout);
    };
  }, [handleScroll]);

  return (
    <>
      {/* Desktop version - pill in bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={reduceMotion ? { duration: 0 } : spring.springConfig}
        className="fixed bottom-4 right-4 z-[900] hidden md:block"
        style={{
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <Link to="/contact">
          <motion.div
            className="inline-block"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "#ffffff",
              padding: "14px 28px",
              borderRadius: "12px",
              backgroundColor: "#f85838",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transitionDuration: `${duration.fast}ms`,
            }}
            whileHover={reduceMotion ? {} : {
              backgroundColor: '#ff6a4d',
              boxShadow: "0 0 32px rgba(248,88,56,0.35)",
            }}
            whileTap={reduceMotion ? {} : {
              scale: 0.95,
            }}
          >
            REQUEST DEMO
          </motion.div>
        </Link>
      </motion.div>

      {/* Mobile version - full width bar at bottom with safe-area-inset */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={reduceMotion ? { duration: 0 } : { 
          duration: 0.35, 
          ease: easing.enterEase 
        }}
        className="fixed bottom-0 left-0 right-0 z-[900] md:hidden"
        style={{
          pointerEvents: isVisible ? "auto" : "none",
          backgroundColor: "#ffffff",
          borderTop: "1px solid #dededb",
          padding: "12px 16px",
          paddingBottom: "max(12px, env(safe-area-inset-bottom))",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          minHeight: "56px",
        }}
      >
        <Link
          to="/contact"
          className="block text-center transition-all"
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            color: "#ffffff",
            padding: "14px 24px",
            borderRadius: "12px",
            backgroundColor: "#f85838",
            textDecoration: "none",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            transitionDuration: `${duration.micro}ms`,
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.backgroundColor = "#ff6a4d";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.backgroundColor = "#f85838";
          }}
        >
          REQUEST DEMO
        </Link>
      </motion.div>
    </>
  );
}