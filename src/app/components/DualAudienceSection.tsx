import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { Check } from 'lucide-react';
import { duration, easing, stagger, distance, shouldReduceMotion, spring } from '../config/motion';

function BulletItem({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const reduceMotion = shouldReduceMotion();
  
  return (
    <motion.li
      initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
      whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: duration.fast / 1000, ease: easing.enterEase, delay }}
      className="flex items-start"
      style={{ gap: '12px' }}
    >
      <motion.span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
          flexShrink: 0,
          marginTop: '1px',
        }}
        initial={reduceMotion ? { scale: 1 } : { scale: 0 }}
        whileInView={reduceMotion ? {} : { scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: delay + 0.1,
          ...spring.springConfig,
        }}
      >
        <Check size={16} strokeWidth={2.5} color="#5e8c7b" />
      </motion.span>
      <span
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '15px',
          fontWeight: 400,
          color: '#6e6c6a',
          lineHeight: 1.55,
        }}
      >
        {text}
      </span>
    </motion.li>
  );
}

function AudienceBlock({
  title,
  bullets,
  ctaText,
  ctaHref,
  delay = 0,
  slideDirection = 'left',
}: {
  title: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  delay?: number;
  slideDirection?: 'left' | 'right';
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = shouldReduceMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? { opacity: 1, x: 0 } : { 
        opacity: 0, 
        x: slideDirection === 'left' ? -20 : 20 
      }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: duration.medium / 1000, ease: easing.enterEase, delay }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <h3
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: 'clamp(22px, 2.5vw, 28px)',
          fontWeight: 700,
          color: '#221f1f',
          marginBottom: '24px',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h3>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          marginBottom: '32px',
          flex: 1,
        }}
      >
        {bullets.map((bullet, i) => (
          <BulletItem
            key={bullet}
            text={bullet}
            delay={delay + i * (stagger.tight / 1000)}
          />
        ))}
      </ul>

      <div style={{ marginTop: 'auto' }}>
        <Link to={ctaHref}>
          <motion.button
            className="transition-all"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: '12px',
              backgroundColor: '#f85838',
              border: 'none',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              width: '100%',
              cursor: 'pointer',
              transitionDuration: `${duration.fast}ms`,
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
            {ctaText}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

const platformBullets = [
  'UK Online Safety Act compliant — proactive, proportionate, demonstrable',
  'Individual-level traceability without surveillance',
  'Sub-100ms latency — zero impact on user experience',
  'Zero additional storage — overlays applied, never stored',
  'Server-side integration — no client changes required',
  'Live in weeks via standard REST API',
];

const creatorBullets = [
  "Invisible protection — doesn't change how your content looks or loads",
  'Traces leaks to the individual who shared it',
  'Survives screenshots, cropping, compression, and re-encoding',
  'WordPress plugin — five minutes, no code',
  'Zero personal data embedded in the watermark',
  'Forensic-grade proof you can act on',
];

export function DualAudienceSection() {
  return (
    <section
      style={{ backgroundColor: '#f7f6f5', padding: 'var(--section-pad-y) 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <AudienceBlock
            title="For Platforms."
            bullets={platformBullets}
            ctaText="PROTECT YOUR PLATFORM"
            ctaHref="/solutions#platforms"
            delay={0}
            slideDirection="left"
          />

          <AudienceBlock
            title="For Creators."
            bullets={creatorBullets}
            ctaText="PROTECT YOUR CONTENT"
            ctaHref="/solutions#creators"
            delay={0.1}
            slideDirection="right"
          />
        </div>
      </div>
    </section>
  );
}