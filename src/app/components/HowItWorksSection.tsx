import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Fingerprint, ScanSearch, UserCheck } from 'lucide-react';
import { duration, easing, stagger, distance, shouldReduceMotion, spring } from '../config/motion';

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: any;
  title: string;
  description: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = shouldReduceMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration.medium / 1000, ease: easing.enterEase, delay }}
      className="flex flex-row md:flex-col items-start md:items-center gap-4 md:gap-0"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: 'clamp(20px, 3vw, 32px)',
      }}
      whileHover={reduceMotion ? {} : {
        y: -4,
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        transition: { duration: duration.micro / 1000, ...spring.springConfig },
      }}
      whileTap={reduceMotion ? {} : {
        scale: 0.98,
        transition: { duration: 0.15, ...spring.springConfig },
      }}
    >
      <motion.div
        className="flex-shrink-0 md:mb-5"
        initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          duration: 0.4,
          delay: delay + 0.2,
          ...spring.springConfig,
        }}
      >
        <motion.div
          whileHover={reduceMotion ? {} : {
            scale: 1.08,
            transition: { duration: duration.micro / 1000, ...spring.springConfig },
          }}
        >
          <Icon
            size={32}
            className="md:!w-12 md:!h-12"
            strokeWidth={1.5}
            style={{
              color: '#8f877d',
              transition: `color ${duration.micro}ms ease`,
            }}
          />
        </motion.div>
      </motion.div>

      <div className="text-left md:text-center">
        <h3
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 700,
            color: '#221f1f',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            color: '#6e6c6a',
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = shouldReduceMotion();

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#dededb', padding: 'var(--section-pad-y) 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <motion.h2
          className="text-center mb-10 md:mb-16"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.standard }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: duration.medium / 1000, ease: easing.enterEase }}
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: 'clamp(26px, 3.5vw, 32px)',
            fontWeight: 800,
            color: '#221f1f',
          }}
        >
          Embed. Trace. Attribute.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
          <FeatureCard
            icon={Fingerprint}
            title="Embed"
            description="Invisible forensic marks are embedded every time content is viewed. Unique to the viewer. Permanent in the file."
            delay={0}
          />
          <FeatureCard
            icon={ScanSearch}
            title="Trace"
            description="Leaked content is analysed and the embedded data extracted. Survives screenshots, cropping, and compression."
            delay={stagger.regular / 1000}
          />
          <FeatureCard
            icon={UserCheck}
            title="Attribute"
            description="The data identifies the account that accessed the content before it leaked. Platform ID. Session ID. Timestamp. 90%+ confidence."
            delay={(stagger.regular * 2) / 1000}
          />
        </div>
      </div>
    </section>
  );
}