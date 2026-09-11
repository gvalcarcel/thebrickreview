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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
          subtle: "var(--color-primary-subtle)",
          border: "var(--color-primary-border)",
        },
        surface: {
          canvas: "var(--surface-canvas)",
          card: "var(--surface-card)",
          subtle: "var(--surface-card-subtle)",
          muted: "var(--surface-card-muted)",
          dark: "var(--surface-dark)",
        },
        radar: {
          blue: "var(--color-accent-blue)",
          yellow: "var(--color-accent-yellow)",
          success: "var(--color-success)",
          warning: "var(--color-warning)",
          danger: "var(--color-danger)",
        },
        editorial: {
          dark: "#18181B",
          light: "#FAFAFA",
          muted: "#71717A",
          border: "#E4E4E7",
          accent: "#e52521",
          "accent-hover": "#c91b17",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        serif: ["var(--font-serif)", "Merriweather", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      maxWidth: {
        reading: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
