import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: `1px solid ${isOpen ? "#f85838" : "#dededb"}`,
        transition: "border-color 350ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left transition-colors duration-200"
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <h3
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            color: isOpen ? "#f85838" : "#221f1f",
            transition: "color 350ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
            paddingRight: "16px",
          }}
        >
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            flexShrink: 0,
            color: isOpen ? "#f85838" : "#6e6c6a",
          }}
        >
          <ChevronRight size={20} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] },
          opacity: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] },
        }}
        style={{ overflow: "hidden" }}
      >
        <p
          style={{
            fontFamily: "'Aktiv Grotesk', sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            color: "#000000",
            lineHeight: 1.6,
            paddingBottom: "24px",
          }}
        >
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
