/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9C27B0",
          dark: "#7B1FA2",
          light: "#E1BEE7",
        },
        secondary: {
          DEFAULT: "#009688",
          dark: "#317973",
          light: "#90D4CE",
        },
        dark: "#212121",
        gray: "#757575",
        danger: "#F44336",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    boxShadow: {
      'button': '0px 0px 2px 3px #90D4CE',
    }
  },
  plugins: [],
};
