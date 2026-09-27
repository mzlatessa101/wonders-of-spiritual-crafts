/** Decorative phase icon — approximate lit region, not a precise ephemeris. */
const styles: Record<string, { background: string; boxShadow: string }> = {
  new: {
    background: "#0a0612",
    boxShadow: "inset 0 0 0 2px rgba(232,197,71,0.35)",
  },
  "wax-crescent": {
    background: "#0a0612",
    boxShadow:
      "inset -10px 0 0 0 #e8e0f0, inset 0 0 0 2px rgba(232,197,71,0.25)",
  },
  "first-quarter": {
    background: "linear-gradient(90deg, #0a0612 50%, #e8e0f0 50%)",
    boxShadow: "inset 0 0 0 2px rgba(232,197,71,0.25)",
  },
  "wax-gibbous": {
    background: "linear-gradient(90deg, #0a0612 25%, #e8e0f0 25%)",
    boxShadow: "inset 0 0 0 2px rgba(232,197,71,0.25)",
  },
  full: {
    background: "#e8e0f0",
    boxShadow: "0 0 16px rgba(232,197,71,0.35)",
  },
  "wan-gibbous": {
    background: "linear-gradient(90deg, #e8e0f0 75%, #0a0612 75%)",
    boxShadow: "inset 0 0 0 2px rgba(232,197,71,0.25)",
  },
  "last-quarter": {
    background: "linear-gradient(90deg, #e8e0f0 50%, #0a0612 50%)",
    boxShadow: "inset 0 0 0 2px rgba(232,197,71,0.25)",
  },
  "wan-crescent": {
    background: "#0a0612",
    boxShadow:
      "inset 10px 0 0 0 #e8e0f0, inset 0 0 0 2px rgba(232,197,71,0.25)",
  },
};

export default function MoonPhaseVisual({
  visual,
  label,
}: {
  visual: string;
  label: string;
}) {
  const style = styles[visual] || styles.new;
  return (
    <span
      className="inline-block h-12 w-12 shrink-0 rounded-full"
      style={style}
      role="img"
      aria-label={`${label} phase icon`}
    />
  );
}
