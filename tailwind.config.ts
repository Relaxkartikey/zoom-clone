import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f5f1e8",
        ink: "#171512",
        accent: {
          yellow: "#f4c531",
          pink: "#ff7fb0",
          green: "#3fae6a",
          blue: "#3a6df0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(23,21,18,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,21,18,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
      boxShadow: {
        paper: "0 2px 0 rgba(23,21,18,0.9)",
        card: "6px 6px 0 rgba(23,21,18,0.9)",
        cardHover: "9px 9px 0 rgba(23,21,18,0.9)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--rot,0deg))" },
          "50%": { transform: "translateY(-6px) rotate(var(--rot,0deg))" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        float: "float 4.5s ease-in-out infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
