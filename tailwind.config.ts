import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "golden-sand": {
          "50": "#fdfbed",
          "100": "#f8f1cd",
          "200": "#f0e397",
          "300": "#ebd56f",
          "400": "#e4bf3b",
          "500": "#dba125",
          "600": "#c27e1d",
          "700": "#a15e1c",
          "800": "#84491c",
          "900": "#6d3d1a",
          "950": "#3e1f0a",
        },
        "ecru-white": {
          "50": "#f8f8f2",
          "100": "#efeee2",
          "200": "#d5d2b2",
          "300": "#bfb98a",
          "400": "#b0a66f",
          "500": "#a3925d",
          "600": "#8f7a50",
          "700": "#786145",
          "800": "#64503c",
          "900": "#534334",
          "950": "#2e231a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
