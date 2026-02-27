import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface TimelineStep {
  title: string;
  description: string;
}

const steps: TimelineStep[] = [
  {
    title: "NDA & Agreement",
    description: "Legal frameworks, compliance documentation, and SLA commitments.",
  },
  {
    title: "Credentials & Staging",
    description: "API keys provisioned, staging environment configured.",
  },
  {
    title: "Integration",
    description: "Overlay endpoint added to your image rendering pipeline.",
  },
  {
    title: "Testing & Validation",
    description: "Watermark extraction tests, performance benchmarks, QA sign-off.",
  },
  {
    title: "Go-Live",
    description: "Production deployment with monitoring and alerting enabled.",
  },
  {
    title: "Ongoing Support",
    description: "24/7 technical support, quarterly compliance reviews, feature updates.",
  },
];

export function TimelineVertical() {
  return (
    <div className="max-w-[800px] mx-auto">
      {steps.map((step, index) => (
        <TimelineNode
          key={index}
          step={step}
          index={index}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}

function TimelineNode({
  step,
  index,
  isLast,
}: {
  step: TimelineStep;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="relative flex gap-6 pb-8">
      {/* Vertical Line */}
      {!isLast && (
        <div
          className="absolute left-[6px] top-[24px] bottom-0"
          style={{
            width: "2px",
            backgroundColor: inView ? "#f85838" : "#dededb",
            transition: "background-color 500ms cubic-bezier(0.0, 0.0, 0.2, 1.0)",
            transitionDelay: `${index * 100}ms`,
          }}
        />
      )}

      {/* Node Circle */}
      <motion.div
        initial={{ scale: 0, backgroundColor: "#dededb" }}
        animate={
          inView
            ? { scale: 1, backgroundColor: "#f85838" }
            : { scale: 0, backgroundColor: "#dededb" }
        }
        transition={{
          duration: 0.3,
          ease: [0.0, 0.0, 0.2, 1.0],
          delay: index * 0.1,
        }}
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          flexShrink: 0,
          marginTop: "6px",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{
          duration: 0.5,
          ease: [0.0, 0.0, 0.2, 1.0],
          delay: index * 0.1 + 0.1,
        }}
        className="flex-1"
      >
        <h4
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#221f1f",
            marginBottom: "8px",
          }}
        >
          {step.title}
        </h4>
        <p
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: "15px",
            fontWeight: 400,
            color: "#6e6c6a",
            lineHeight: 1.6,
          }}
        >
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}
