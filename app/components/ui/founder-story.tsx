import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface FounderStoryProps {
  heading: string;
  leadParagraph: string;
  paragraphs: string[];
  closingParagraph: string;
  founderImageUrl?: string;
}

export function FounderStory({
  heading,
  leadParagraph,
  paragraphs,
  closingParagraph,
  founderImageUrl,
}: FounderStoryProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Text content */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0] }}
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 800,
            color: "#221f1f",
            marginBottom: "32px",
          }}
        >
          {heading}
        </motion.h2>

        {/* Lead paragraph - larger, emphasized */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0], delay: 0.1 }}
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: "18px",
            fontWeight: 500,
            color: "#000000",
            lineHeight: 1.7,
            paddingBottom: "24px",
            borderBottom: "1px solid #dededb",
          }}
        >
          {leadParagraph}
        </motion.p>

        {/* Body paragraphs */}
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                ease: [0.0, 0.0, 0.2, 1.0],
                delay: 0.2 + index * 0.1,
              }}
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "#000000",
                lineHeight: 1.7,
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Closing paragraph - pull quote style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            ease: [0.0, 0.0, 0.2, 1.0],
            delay: 0.2 + paragraphs.length * 0.1,
          }}
          style={{
            backgroundColor: "#f5f3f0",
            borderLeft: "3px solid #f85838",
            borderRadius: "8px",
            padding: "32px 40px",
            marginTop: "32px",
          }}
        >
          <p
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: "18px",
              fontWeight: 500,
              color: "#221f1f",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            {closingParagraph}
          </p>
        </motion.div>
      </div>

      {/* Founder image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: [0.0, 0.0, 0.2, 1.0], delay: 0.3 }}
        className="lg:sticky lg:top-32"
      >
        <div
          style={{
            backgroundColor: "#f5f3f0",
            border: "1px solid #dededb",
            borderRadius: "8px",
            overflow: "hidden",
            aspectRatio: "3/4",
          }}
        >
          {founderImageUrl ? (
            <img
              src={founderImageUrl}
              alt="Madelaine Thomas, Founder"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              className="flex items-center justify-center h-full"
              style={{
                backgroundColor: "#e6f0ec",
              }}
            >
              <div className="text-center p-8">
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk Extended', sans-serif",
                    fontSize: "11px",
                    fontWeight: 300,
                    color: "#5e8c7b",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  FOUNDER
                </div>
                <div
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#221f1f",
                  }}
                >
                  Madelaine Thomas
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 text-center">
          <p
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#221f1f",
            }}
          >
            Madelaine Thomas
          </p>
          <p
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "#6e6c6a",
            }}
          >
            Founder & CEO
          </p>
        </div>
      </motion.div>
    </div>
  );
}
