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
        green: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        brand: {
          primary: "#16a34a",
          dark:    "#0f4c24",
          light:   "#dcfce7",
        },
      },
      fontFamily: {
        sans: ["Cabin", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter:  "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
