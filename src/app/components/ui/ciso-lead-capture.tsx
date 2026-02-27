import { useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function CisoLeadCapture() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In production, this would send to an API and trigger PDF download
    console.log("CISO brief requested:", email);
    // Simulate download
    setTimeout(() => {
      window.open("/documents/image-angel-ciso-brief.pdf", "_blank");
    }, 500);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.0, 0.0, 0.2, 1.0] }}
      style={{
        backgroundColor: "#e6f0ec",
        borderRadius: "8px",
        padding: "40px",
        border: "1px solid #5e8c7b",
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
        Download the CISO summary.
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
        A 2-page technical brief covering architecture, privacy model, failure modes,
        and regulatory mapping. Built for your security review.
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
          ✓ Check your email for the download link!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              required
              style={{
                width: "100%",
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                color: "#221f1f",
                padding: "12px 16px",
                border: `1px solid ${isFocused || email ? "#5e8c7b" : "#dededb"}`,
                borderRadius: "4px",
                backgroundColor: "#ffffff",
                outline: "none",
                transition: "border-color 200ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
              }}
            />
            <label
              style={{
                position: "absolute",
                left: "16px",
                top: isFocused || email ? "-8px" : "50%",
                transform: isFocused || email ? "none" : "translateY(-50%)",
                backgroundColor: "#ffffff",
                padding: "0 4px",
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: isFocused || email ? "12px" : "15px",
                fontWeight: 400,
                color: isFocused ? "#5e8c7b" : "#6e6c6a",
                pointerEvents: "none",
                transition: "all 200ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
              }}
            >
              Work email address
            </label>
          </div>
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
            DOWNLOAD COMPLIANCE BRIEF
          </button>
        </form>
      )}
    </motion.div>
  );
}