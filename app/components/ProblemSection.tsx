import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { duration, easing, stagger, distance, shouldReduceMotion, spring } from '../config/motion';

function StatBlock({
  value,
  label,
  context,
  delay = 0,
  isLast = false,
}: {
  value: string;
  label: string;
  context: string;
  delay?: number;
  isLast?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = shouldReduceMotion();

  const numericMatch = value.match(/\d+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0]) : null;
  const hasPrefix = value.startsWith('£');
  const hasSuffix = value.endsWith('%');
  const isZero = value === '0';

  // Use the new useCountUp hook with 1500ms duration
  const count = useCountUp({
    end: numericValue || 0,
    start: 0,
    duration: duration.count,
    enabled: inView && !reduceMotion && numericValue !== null,
  });

  return (
    <motion.div
      ref={ref}
      className={`text-center ${!isLast ? 'border-b md:border-b-0 border-[#e5e5e5] pb-6 mb-6 md:pb-0 md:mb-0' : ''}`}
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.standard }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: duration.medium / 1000, ease: easing.enterEase, delay }}
    >
      <motion.div
        style={{
          fontFamily: "'Aktiv Grotesk Extended', sans-serif",
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 900,
          color: value === '0' ? '#221f1f' : '#f85838',
          lineHeight: 1,
          marginBottom: '16px',
        }}
        // Scale pulse for zero to draw attention
        animate={isZero && inView && !reduceMotion ? {
          scale: 1.05,
        } : {}}
        transition={{
          duration: 0.6,
          delay: delay + 0.3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {numericValue !== null ? (
          <>
            {hasPrefix && '£'}
            {reduceMotion ? numericValue : count}
            {hasSuffix && '%'}
            {value.replace(/[\d£%]/g, '')}
          </>
        ) : (
          value
        )}
      </motion.div>
      <motion.div
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: 'clamp(16px, 2vw, 18px)',
          fontWeight: 700,
          color: '#221f1f',
          marginBottom: '8px',
        }}
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.subtle }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, delay: delay + 0.2, ease: easing.enterEase }}
      >
        {label}
      </motion.div>
      <motion.div
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: '14px',
          fontWeight: 400,
          color: '#8f877d',
          lineHeight: 1.5,
        }}
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.subtle }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, delay: delay + 0.2, ease: easing.enterEase }}
      >
        {context}
      </motion.div>
    </motion.div>
  );
}

export function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const reduceMotion = shouldReduceMotion();

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#ffffff', padding: 'var(--section-pad-y) 0' }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <motion.h2
          className="text-center mb-6"
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
          Leaked Content Has Always Been Untraceable. Until Now.
        </motion.h2>

        <motion.p
          className="text-center mx-auto mb-10 md:mb-16"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance.standard }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: duration.medium / 1000, ease: easing.enterEase, delay: 0.1 }}
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 400,
            color: '#8f877d',
            lineHeight: 1.6,
            maxWidth: '800px',
          }}
        >
          Platforms invest in rapid takedowns and reactive hashing tools, but these measures deliver neither accountability for the perpetrator nor justice for the creator.
          Closing the loop means protecting content at the point of access, tracing it if a leak occurs, and enforcing accountability with clear evidence.
          Without that, harm continues.
        </motion.p>

        {/* Stats Grid - stagger 150ms between each */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12">
          <StatBlock
            value="£18M"
            label="Maximum UK OSA Penalty"
            context="For platforms that fail to take proactive measures."
            delay={0}
          />
          <StatBlock
            value="95%"
            label="Takedown Requests Fail"
            context="Removed content reappears within 24 hours."
            delay={stagger.relaxed / 1000}
          />
          <StatBlock
            value="0"
            label="Ways to Trace a Leak to an Individual"
            context="Before forensic watermarking."
            delay={(stagger.relaxed * 2) / 1000}
            isLast
          />
        </div>
      </div>
    </section>
  );
}