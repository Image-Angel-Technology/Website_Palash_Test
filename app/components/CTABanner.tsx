import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';

const enterEasing = [0, 0, 0.2, 1];

export function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#221f1f', padding: 'var(--section-pad-y) 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 text-center">
        <motion.h2
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: enterEasing }}
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            color: '#ffffff',
          }}
        >
          See how it works. Request a demo.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: enterEasing, delay: 0.1 }}
        >
          <Link to="/contact">
            <button
              className="inline-block transition-all duration-300"
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                color: '#ffffff',
                padding: '16px 48px',
                borderRadius: '12px',
                backgroundColor: '#f85838',
                border: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ff6a4d';
                e.currentTarget.style.boxShadow = '0 0 32px rgba(248,88,56,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f85838';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              REQUEST A DEMO
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}