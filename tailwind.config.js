/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "light-text": "#ACACAC",
        "border-grey": "#CACDD8",
        "border-dark": "#A2A6B0",
        "warning": "#C94D3F",
        "gold": "#E9A426"
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        product: "repeat(3, minmax(0, 50%))",
      },
    },
  },
  plugins: [],
};
