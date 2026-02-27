interface AudienceTabSelectorProps {
  activeTab: "platforms" | "creators";
  onTabChange: (tab: "platforms" | "creators") => void;
}

export function AudienceTabSelector({
  activeTab,
  onTabChange,
}: AudienceTabSelectorProps) {
  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        backgroundColor: "#6e6c6a",
        borderRadius: "4px",
        padding: "4px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4px",
      }}
    >
      <button
        onClick={() => onTabChange("platforms")}
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          color: "#ffffff",
          height: "52px",
          borderRadius: "4px",
          backgroundColor: activeTab === "platforms" ? "#f85838" : "transparent",
          border: "none",
          cursor: "pointer",
          transition: "background-color 350ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
        }}
      >
        For Platforms
      </button>
      <button
        onClick={() => onTabChange("creators")}
        style={{
          fontFamily: "'Aktiv Grotesk', sans-serif",
          fontSize: "20px",
          fontWeight: 700,
          color: "#ffffff",
          height: "52px",
          borderRadius: "4px",
          backgroundColor: activeTab === "creators" ? "#f85838" : "transparent",
          border: "none",
          cursor: "pointer",
          transition: "background-color 350ms cubic-bezier(0.25, 0.1, 0.25, 1.0)",
        }}
      >
        For Creators
      </button>
    </div>
  );
}
