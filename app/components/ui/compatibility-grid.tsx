import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Image, Video, Code2 } from "lucide-react";

interface CompatItem {
  category: string;
  items: string[];
  icon: typeof Image;
}

const compatData: CompatItem[] = [
  {
    category: "Images",
    items: ["JPEG", "PNG", "WebP"],
    icon: Image,
  },
  {
    category: "Video",
    items: ["MP4", "WebM", "Rotating overlays"],
    icon: Video,
  },
  {
    category: "Processing Tools",
    items: ["ImageMagick", "Sharp", "GD", "Pillow"],
    icon: Code2,
  },
];

export function CompatibilityGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {compatData.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              ease: [0.0, 0.0, 0.2, 1.0],
              delay: index * 0.1,
            }}
            style={{
              backgroundColor: "#f5f3f0",
              border: "1px solid #dededb",
              borderRadius: "8px",
              padding: "32px",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon size={24} style={{ color: "#f85838" }} />
              <h3
                style={{
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#221f1f",
                }}
              >
                {item.category}
              </h3>
            </div>
            <ul className="space-y-2">
              {item.items.map((subItem, idx) => (
                <li
                  key={idx}
                  style={{
                    fontFamily: "'Aktiv Grotesk', sans-serif",
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "#6e6c6a",
                    paddingLeft: "12px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      color: "#5e8c7b",
                    }}
                  >
                    •
                  </span>
                  {subItem}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
