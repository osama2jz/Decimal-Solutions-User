/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      cardBreak2: "1300px",
      // => @media (min-width: 640px) { ... }
      cardBreak3: "1880px",
    },
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        accentColor: "#A4238C",
        textColor: "#3F3F3F",
        borderColor: "#C7C7C7",
        boxColor: "#C4C4C4",
      },
    },
  },
  plugins: [],
};
