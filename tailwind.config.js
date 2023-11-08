const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "0rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      mainGreen: { 100: "#1AC073", 200: "#2EBF91", 50: "#F0FAF7" },
      mainYellew: { 200: "#F3BA00" },
      mainRed: { 200: "#F20505" },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
