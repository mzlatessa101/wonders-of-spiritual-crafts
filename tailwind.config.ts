import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#0a0612",
          900: "#120a1f",
          800: "#1a0f2e",
          700: "#261545",
          600: "#3d2066",
        },
        mystic: {
          50: "#f5f0ff",
          100: "#ebe0ff",
          200: "#d4bfff",
          300: "#b894ff",
          400: "#9b6bff",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b0764",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#e8c547",
          500: "#d4af37",
          600: "#b8941f",
          700: "#927016",
        },
        moon: "#e8e0f0",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "starfield": "radial-gradient(ellipse at top, #1a0f2e 0%, #0a0612 70%)",
        "gold-glow": "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 58, 237, 0.25)",
        "glow-gold": "0 0 25px rgba(212, 175, 55, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
