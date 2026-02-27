import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

interface EndpointCardProps {
  method: string;
  path: string;
  description: string;
  delay?: number;
}

export function EndpointCard({ method, path, description, delay = 0 }: EndpointCardProps) {
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
        backgroundColor: "#221f1f",
        border: isHovered ? "1px solid #f85838" : "1px solid #353332",
        borderRadius: "8px",
        padding: "24px",
        transition: "all 350ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
        boxShadow: isHovered
          ? "0 0 20px rgba(248, 88, 56, 0.2)"
          : "none",
      }}
    >
      {/* Method Badge */}
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#f85838",
          color: "#ffffff",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          padding: "4px 8px",
          borderRadius: "3px",
          marginBottom: "12px",
        }}
      >
        {method}
      </div>

      {/* Path */}
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "14px",
          fontWeight: 400,
          color: "#f7f6f5",
          marginBottom: "12px",
          wordBreak: "break-all",
        }}
      >
        {path}
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          color: "#b5aea6",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}
