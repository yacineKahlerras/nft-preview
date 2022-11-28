/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        "very-dark-blue-bg": "hsl(217, 54%, 11%)",
        "very-dark-blue-card": "hsl(216, 50%, 16%)",
        "very-dark-blue-line": "hsl(215, 32%, 27%)",
      },
      fontFamily: {
        outfit: ["Outfit", sans - serif],
      },
    },
  },
  plugins: [],
};
