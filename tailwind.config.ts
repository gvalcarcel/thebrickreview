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
        editorial: {
          dark: "#18181B",
          light: "#FAFAFA",
          muted: "#71717A",
          border: "#E4E4E7",
          accent: "#D97706",
          "accent-hover": "#B45309",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Merriweather", "Georgia", "serif"],
      },
      maxWidth: {
        reading: "720px",
      },
    },
  },
  plugins: [],
};

export default config;
