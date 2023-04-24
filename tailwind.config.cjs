/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        sans: ["Avenir", "sans-serif"],
      },
      colors: {
        myColor: {
          50: "#ebffff",
          100: "#cdfbff",
          200: "#a1f4ff",
          300: "#60e9ff",
          400: "#18d5f8",
          500: "#00b8de",
          600: "#009eca",
          700: "#087496",
          800: "#105d7a",
          900: "#124e67",
          950: "#053247",
        },
      },
    },
  },
  plugins: [],
};
