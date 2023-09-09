/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1b2635",
        bgLighter: "#27374d",
        text: "white",
        textSoft: "#9DB2BF",
        soft: "#5d88a9",
      },
    },
  },
  plugins: [],
};
