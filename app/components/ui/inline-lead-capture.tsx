import { useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function InlineLeadCapture() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In production, this would send to an API
    console.log("Email submitted:", email);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0] }}
      style={{
        backgroundColor: "#f5f3f0",
        borderRadius: "8px",
        padding: "40px",
        border: "1px solid #dededb",
      }}
    >
      <h3
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "28px",
          fontWeight: 800,
          color: "#221f1f",
          marginBottom: "12px",
        }}
      >
        Self-serve creator accounts are coming.
      </h3>
      <p
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "16px",
          fontWeight: 400,
          color: "#000000",
          lineHeight: 1.6,
          marginBottom: "24px",
        }}
      >
        Be the first to know when you can protect your content with a few clicks. No
        waiting for platform adoption.
      </p>

      {isSubmitted ? (
        <div
          style={{
            backgroundColor: "#e8f4ed",
            border: "1px solid #5e8c7b",
            borderRadius: "4px",
            padding: "16px",
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            color: "#3a7d5c",
          }}
        >
          ✓ Thanks! We'll be in touch when early access opens.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "#221f1f",
              padding: "12px 16px",
              border: "1px solid #dededb",
              borderRadius: "4px",
              backgroundColor: "#ffffff",
              outline: "none",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#f85838";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#dededb";
            }}
          />
          <button
            type="submit"
            className="transition-all duration-200"
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              color: "#ffffff",
              padding: "12px 32px",
              borderRadius: "4px",
              backgroundColor: "#f85838",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ff6a4d";
              e.currentTarget.style.boxShadow = "0 0 32px rgba(248,88,56,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f85838";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            GET EARLY ACCESS
          </button>
        </form>
      )}
    </motion.div>
  );
}