import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function ApiArchitectureDiagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const nodes = [
    { id: "creator", label: "Creator Uploads", color: "#6e6c6a", top: "50%", left: "0%" },
    { id: "platform", label: "Platform Watermark\n(Layer 1)", color: "#5e8c7b", top: "50%", left: "25%" },
    { id: "distributed", label: "Content\nDistributed", color: "#6e6c6a", top: "50%", left: "50%" },
    { id: "user", label: "User Watermark\n(Layer 2)", color: "#f85838", top: "50%", left: "75%" },
    { id: "leaked", label: "If Leaked", color: "#6e6c6a", top: "20%", left: "90%" },
    { id: "extraction", label: "Extraction", color: "#f85838", top: "80%", left: "90%" },
  ];

  const connections = [
    { from: "creator", to: "platform", delay: 0 },
    { from: "platform", to: "distributed", delay: 0.2 },
    { from: "distributed", to: "user", delay: 0.4 },
    { from: "user", to: "leaked", delay: 0.6 },
    { from: "leaked", to: "extraction", delay: 0.8 },
  ];

  return (
    <div ref={ref} className="relative w-full" style={{ height: "400px", marginBottom: "64px" }}>
      {/* SVG for connection lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#dededb" />
          </marker>
        </defs>
        {connections.map((conn, idx) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const x1 = parseFloat(fromNode.left) + 10;
          const y1 = parseFloat(fromNode.top);
          const x2 = parseFloat(toNode.left) - 2;
          const y2 = parseFloat(toNode.top);

          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#dededb"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: conn.delay,
                ease: [0.0, 0.0, 0.2, 1.0],
              }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.4,
            delay: idx * 0.15,
            ease: [0.0, 0.0, 0.2, 1.0],
          }}
          className="absolute"
          style={{
            top: node.top,
            left: node.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="group cursor-pointer"
            style={{
              backgroundColor: "#f5f3f0",
              border: `2px solid ${node.color}`,
              borderRadius: "8px",
              padding: "16px 24px",
              minWidth: "140px",
              textAlign: "center",
              transition: "all 200ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = `0 4px 20px ${node.color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "#221f1f",
                whiteSpace: "pre-line",
              }}
            >
              {node.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
