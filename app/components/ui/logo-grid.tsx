import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface LogoSection {
  title: string;
  logos: {
    name: string;
    url?: string;
  }[];
}

interface LogoGridProps {
  sections: LogoSection[];
}

export function LogoGrid({ sections }: LogoGridProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="space-y-12">
      {sections.map((section, sectionIndex) => (
        <div key={section.title}>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              ease: [0.0, 0.0, 0.2, 1.0],
              delay: sectionIndex * 0.15,
            }}
            style={{
              fontFamily: "'Aktiv Grotesk Extended', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              color: "#6e6c6a",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            {section.title}
          </motion.h3>

          <div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
            style={{
              minHeight: "80px",
            }}
          >
            {section.logos.map((logo, logoIndex) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{
                  duration: 0.4,
                  ease: [0.0, 0.0, 0.2, 1.0],
                  delay: sectionIndex * 0.15 + logoIndex * 0.05,
                }}
                className="flex items-center justify-center"
                style={{
                  transition: "transform 350ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {logo.url ? (
                  <img
                    src={logo.url}
                    alt={logo.name}
                    style={{
                      maxHeight: "40px",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      fontFamily: "'Aktiv Grotesk', sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#6e6c6a",
                      textAlign: "center",
                      padding: "12px 16px",
                      border: "1px solid #dededb",
                      borderRadius: "4px",
                      backgroundColor: "#f5f3f0",
                    }}
                  >
                    {logo.name}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
