export const INDICATOR_STYLES: Record<string, { dot: string; text: string; badge: string; label: string }> = {
  none: { dot: "bg-success", text: "text-success", badge: "badge-success", label: "Operational" },
  minor: { dot: "bg-warning", text: "text-warning", badge: "badge-warning", label: "Minor" },
  major: { dot: "bg-accent", text: "text-accent", badge: "badge-accent", label: "Major" },
  critical: { dot: "bg-error", text: "text-error", badge: "badge-error", label: "Critical" },
  maintenance: { dot: "bg-info", text: "text-info", badge: "badge-info", label: "Under maintenance" },
};

export const FALLBACK_STYLE = {
  dot: "bg-base-content/20",
  text: "text-base-content/50",
  badge: "badge-ghost",
  label: "Unknown",
};
