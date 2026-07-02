import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0d0f14",
          card: "#161a23",
          elevated: "#1e2433",
        },
        accent: {
          amber: "#e8a045",
          violet: "#6c63d4",
          "amber-dim": "#b87d33",
          "violet-dim": "#4f48a3",
        },
        text: {
          primary: "#f0f0f0",
          secondary: "#a0a8b8",
          muted: "#5a6070",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0d0f14 0%, #1a1528 50%, #0d0f14 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
