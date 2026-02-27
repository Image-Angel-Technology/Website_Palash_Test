import { Check, X } from "lucide-react";
import { useState } from "react";

interface ComparisonRow {
  feature: string;
  withIA: string;
  without: string;
}

const rows: ComparisonRow[] = [
  {
    feature: "Regulatory compliance",
    withIA: "Demonstrable proactive measures",
    without: "Reactive-only policies",
  },
  {
    feature: "Leak accountability",
    withIA: "Individual-level traceability",
    without: "No forensic capability",
  },
  {
    feature: "Creator trust",
    withIA: "Visible protection commitment",
    without: "Platform-side risk only",
  },
  {
    feature: "Integration effort",
    withIA: "Server-side only, weeks",
    without: "N/A",
  },
  {
    feature: "Storage cost",
    withIA: "Zero additional storage",
    without: "N/A",
  },
  {
    feature: "User experience",
    withIA: "Unchanged, invisible",
    without: "N/A",
  },
];

export function ComparisonTable() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="overflow-x-auto">
      <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#221f1f",
                color: "#ffffff",
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                padding: "16px 24px",
                textAlign: "left",
                borderTopLeftRadius: "8px",
              }}
            >
              Feature
            </th>
            <th
              style={{
                backgroundColor: "#e6f0ec",
                color: "#221f1f",
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                padding: "16px 24px",
                textAlign: "left",
              }}
            >
              With Image Angel
            </th>
            <th
              style={{
                backgroundColor: "#fce8e6",
                color: "#221f1f",
                fontFamily: "'Aktiv Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                padding: "16px 24px",
                textAlign: "left",
                borderTopRightRadius: "8px",
              }}
            >
              Without
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                transition: "background-color 200ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
              }}
            >
              <td
                style={{
                  backgroundColor:
                    hoveredRow === index ? "#f7f6f5" : "#ffffff",
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#221f1f",
                  padding: "20px 24px",
                  borderBottom: "1px solid #dededb",
                  transition: "background-color 200ms",
                }}
              >
                {row.feature}
              </td>
              <td
                style={{
                  backgroundColor:
                    hoveredRow === index ? "#f0f5f2" : "#e6f0ec",
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#000000",
                  padding: "20px 24px",
                  borderBottom: "1px solid #dededb",
                  transition: "background-color 200ms",
                }}
              >
                <div className="flex items-center gap-3">
                  <Check
                    className="flex-shrink-0"
                    size={18}
                    style={{ color: "#5e8c7b" }}
                  />
                  <span>{row.withIA}</span>
                </div>
              </td>
              <td
                style={{
                  backgroundColor:
                    hoveredRow === index ? "#fef0ef" : "#fce8e6",
                  fontFamily: "'Aktiv Grotesk', sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#000000",
                  padding: "20px 24px",
                  borderBottom: "1px solid #dededb",
                  transition: "background-color 200ms",
                }}
              >
                <div className="flex items-center gap-3">
                  <X
                    className="flex-shrink-0"
                    size={18}
                    style={{ color: "#c53d2f" }}
                  />
                  <span>{row.without}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
