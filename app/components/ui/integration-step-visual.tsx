import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  "Get Credentials",
  "Call API",
  "Apply Overlay",
  "Cache & Serve",
];

export function IntegrationStepVisual() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.4,
              delay: index * 0.15,
              ease: [0.0, 0.0, 0.2, 1.0],
            }}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #dededb",
              borderRadius: "8px",
              padding: "20px 24px",
              minWidth: "140px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                fontSize: "11px",
                fontWeight: 300,
                color: "#f85838",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              STEP {index + 1}
            </div>
            <div
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "#221f1f",
              }}
            >
              {step}
            </div>
          </motion.div>

          {index < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{
                duration: 0.3,
                delay: index * 0.15 + 0.2,
                ease: [0.0, 0.0, 0.2, 1.0],
              }}
              className="hidden md:block"
            >
              <ArrowRight size={20} style={{ color: "#dededb" }} />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
