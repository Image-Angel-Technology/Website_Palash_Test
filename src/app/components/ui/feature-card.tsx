import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ title, description, delay = 0 }: FeatureCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0], delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #dededb",
        borderRadius: "8px",
        padding: "32px",
        transition: "all 350ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
        borderLeft: isHovered ? "3px solid #f85838" : "1px solid #dededb",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 10px 25px rgba(0,0,0,0.1)"
          : "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <h3
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "24px",
          fontWeight: 700,
          color: "#221f1f",
          marginBottom: "16px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          color: "#000000",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}
