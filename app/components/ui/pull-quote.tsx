import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface PullQuoteProps {
  quote: string;
  attribution: string;
  ctaText?: string;
  ctaLink?: string;
}

export function PullQuote({ quote, attribution, ctaText, ctaLink }: PullQuoteProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0] }}
      style={{
        backgroundColor: "#f5f3f0",
        borderLeft: "3px solid #f85838",
        borderRadius: "8px",
        padding: "32px 40px",
      }}
    >
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "20px",
          fontWeight: 400,
          color: "#221f1f",
          lineHeight: 1.6,
          fontStyle: "italic",
          marginBottom: "16px",
        }}
      >
        "{quote}"
      </p>
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "14px",
          fontWeight: 700,
          color: "#6e6c6a",
          marginBottom: ctaText ? "16px" : "0",
        }}
      >
        {attribution}
      </p>
      {ctaText && ctaLink && (
        <a
          href={ctaLink}
          style={{
            fontFamily: "'Aktiv Grotesk Extended', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#f85838",
            letterSpacing: "0.05em",
            textDecoration: "none",
            transition: "opacity 200ms",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.8";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {ctaText}
        </a>
      )}
    </motion.div>
  );
}
