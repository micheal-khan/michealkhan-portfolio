import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0e100f",
        primarytext: "#ffffe3",
        bline: "#323228",
        accentv: "#a374ff",
        accenty: "#ffd074",
        accentc: "#17f1d1",
        accentb: "#18a0fb",
        accentp: "#ee46d3",
        accentg: "#22c55e",
        accento: "#ff8c42",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(6px,-8px)" },
        },
        twinkle: {
          "0%,100%": { opacity: "0.15" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
