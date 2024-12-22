import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neometric: ['"FSP DEMO Neometric Alt Black"', "sans-serif"],
        myraidpro: ['"Myraid Pro"', "sans-serif"],
      },
      scale: {
        85: "0.85",
        65: "0.65",
        55: "0.55",
      },
      colors: {
        primary: "#ec2128",
        secondary: "#f4ac1d",
      },
    },
  },
  plugins: [],
};

export default config;
