import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface StatBlockProps {
  value: string;
  label: string;
  context: string;
  variant?: "light" | "dark";
}

// Animated counter component for stats
function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  inView,
}: {
  end: number | string;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || typeof end === "string") return;

    let start = 0;
    const duration = 800;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span>
      {prefix}
      {typeof end === "string" ? end : count}
      {suffix}
    </span>
  );
}

export function StatBlock({ value, label, context, variant = "light" }: StatBlockProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  // Extract numeric value if present
  const numericMatch = value.match(/\d+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0]) : null;
  const hasPrefix = value.startsWith("£") || value.startsWith("<");
  const hasSuffix = value.endsWith("%") || value.includes("ms") || value.includes("KB") || value.includes("/min");
  
  // Extract prefix and suffix
  let prefix = "";
  let suffix = "";
  if (hasPrefix) {
    if (value.startsWith("£")) prefix = "£";
    if (value.startsWith("<")) prefix = "<";
  }
  if (hasSuffix) {
    suffix = value.replace(/[\d£<]/g, "");
  }

  const isDark = variant === "dark";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0] }}
      className="text-center"
    >
      <div
        style={{
          fontFamily: "'Aktiv Grotesk Extended', sans-serif",
          fontSize: "48px",
          fontWeight: 900,
          color: "#f85838",
          lineHeight: 1,
          marginBottom: "12px",
        }}
      >
        {numericValue !== null ? (
          <AnimatedCounter
            end={numericValue}
            prefix={prefix}
            suffix={suffix}
            inView={inView}
          />
        ) : (
          value
        )}
      </div>
      <div
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          color: isDark ? "#ffffff" : "#221f1f",
          marginBottom: "8px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "14px",
          fontWeight: 400,
          color: isDark ? "#b5aea6" : "#6e6c6a",
        }}
      >
        {context}
      </div>
    </motion.div>
  );
}
