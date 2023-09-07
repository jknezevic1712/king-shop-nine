import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2560px",
      },
      colors: {
        "dark-highlight": "#ef4444",
        "light-higlight": "#ea580c",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
