import { CSSProperties } from "react";

interface CustomBadgeProps {
  isOpen: boolean;
}

export default function CustomBadge({ isOpen }: CustomBadgeProps) {
  const styles = {
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.375rem 0.75rem",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      fontWeight: 500,
      backgroundColor: isOpen ? "#22c55e0f" : "#71717a14",
      color: isOpen ? "#4ade80" : "#a1a1aa",
      border: isOpen ? "1px solid #22c55e26" : "1px solid #71717a33",
      width: "fit-content",
    },
    badgeDot: {
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: isOpen ? "#22c55e" : "#71717a",
      boxShadow: isOpen ? "0 0 0 2px #22c55e33" : "none",
    } as CSSProperties,
  } as const;

  return (
    <div style={styles.badge}>
      <span style={styles.badgeDot} />
      {isOpen ? "Open to work" : "Not available"}
    </div>
  );
}
