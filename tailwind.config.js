/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#112F56",
        blue: "#3B7CBA",
        complementary: "#B37A1E",
        grey: "#565659",
        orange: {
          2: "#C83C2A",
        },
      },
      maxWidth: {
        1360: "1360px",
      },
      container: {
        center: true,
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        1: "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        2: "0px 2px 2px 0px rgba(0, 0, 0, 0.12), 0px 0px 2px 0px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
};
