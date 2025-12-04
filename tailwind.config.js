// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#fff0f5",
            primary: {
              DEFAULT: "#ff8fa3",
              foreground: "#ffffff",
            },
          },
        },
        dark: {
          colors: {
            background: "#0f0f13",
            primary: {
              DEFAULT: "#a78bfa",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};
