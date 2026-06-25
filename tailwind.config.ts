import type { Config } from "tailwindcss";

/**
 * Tokens lifted 1:1 from design_handoff_zanantis_design_system
 * (Kara brand palette + Zanantis mark). Treat as exact / hifi —
 * do not invent new colors outside this scale without updating
 * the design system reference first.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "kara-blue": "#000EAB",
        "zan-navy": "#0E2689",
        "zan-blue": "#2880EA",
        "zan-sky": "#25B5F4",

        "kara-red": "#FF0000",
        "kara-yellow": "#FFFF00",
        "kara-green": "#00FF00",

        "ui-red": "#E5342B",
        "ui-amber": "#FFB81C",
        "ui-green": "#1FA45A",

        ink: {
          50: "#F6F9FD",
          100: "#EEF2F8",
          200: "#E2E8F1",
          300: "#C2CAD8",
          400: "#8893A8",
          600: "#475572",
          800: "#1B2A4E",
          900: "#0B1733",
        },

        // Primary blue scale, 50 -> 800 (400 = --zan-blue, 700 = --zan-navy)
        primary: {
          50: "#EAF2FE",
          100: "#C8DEFB",
          200: "#9CC4F7",
          300: "#6BA5F2",
          400: "#2880EA",
          500: "#1D6FD6",
          600: "#1657B0",
          700: "#0E2689",
          800: "#091A5F",
        },
      },
      fontFamily: {
        display: ["var(--font-quicksand)", "system-ui", "sans-serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        pill: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(14,38,137,.06), 0 1px 3px rgba(14,38,137,.08)",
        md: "0 6px 16px rgba(14,38,137,.10), 0 2px 6px rgba(14,38,137,.06)",
        lg: "0 20px 48px rgba(14,38,137,.16), 0 6px 16px rgba(14,38,137,.08)",
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};

export default config;
