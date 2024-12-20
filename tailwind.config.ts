import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        "65": "0.65",
        "55": "0.55",
      },
      colors: {
        primary: "#ec2128",
        secondary: "#f4ac1d",
      },
    },
  },
  plugins: [],
} satisfies Config;
