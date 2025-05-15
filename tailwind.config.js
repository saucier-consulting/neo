// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9E77ED",
          light: "#BFA6F2",
          dark: "#7654C9",
        },
        secondary: {
          DEFAULT: "#F9D174",
          light: "#FBE3A8",
          dark: "#F7BE3F",
        },
        accent: {
          DEFAULT: "#9BF2D2",
          light: "#C0F7E3",
          dark: "#65E9B5",
        },
        gray: {
          100: "#f5f5f5",
          200: "#e0e0e0",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },
      spacing: {
        sidebar: "240px",
        topbar: "60px",
      },
    },
  },
  plugins: [],
};
