import { useState } from "react";
import { motion } from "motion/react";

export function BeforeAfterComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="relative select-none"
      style={{
        width: "100%",
        height: "400px",
        backgroundColor: "#f5f3f0",
        border: "1px solid #dededb",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {/* "Original" side */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundColor: "#e6f0ec",
        }}
      >
        <div className="text-center">
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
            ORIGINAL
          </div>
          <div
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "#6e6c6a",
            }}
          >
            Sample image without watermark
          </div>
        </div>
      </div>

      {/* "Watermarked" side - clipped by slider */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundColor: "#fce8e6",
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          transition: isDragging ? "none" : "clip-path 0.1s",
        }}
      >
        <div className="text-center">
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
            WATERMARKED
          </div>
          <div
            style={{
              fontFamily: "'Aktiv Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              color: "#6e6c6a",
            }}
          >
            Forensically protected (identical to eye)
          </div>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: `${sliderPosition}%`,
          width: "4px",
          backgroundColor: "#f85838",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "32px",
            height: "32px",
            backgroundColor: "#f85838",
            borderRadius: "50%",
            border: "3px solid #ffffff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        />
      </div>

      {/* Labels at bottom */}
      <div
        className="absolute bottom-4 left-4"
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "12px",
          fontWeight: 400,
          color: "#6e6c6a",
          opacity: 0.7,
        }}
      >
        Drag slider to compare →
      </div>
    </div>
  );
}
