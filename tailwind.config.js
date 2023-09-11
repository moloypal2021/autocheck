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
          1: "#F2541B",
          2: "#C83C2A",
        },
        "dark-gray": "#727272",
        graytext: "#757575",
        blue: {
          1: "#072D8E",
          2: "#526EB6",
        },
        dark: {
          1: "#1C1B1F",
        },
        yellow: {
          1: "#F4AA02",
        },
        green: {
          1: "#32970E",
        },
        red: {
          1: "#DF3C3C",
        },
      },
      maxWidth: {
        1360: "1360px",
      },
      container: {
        center: true,
      },
      fontSize: {
        10: "10px",
        15: "15px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        1: "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        2: "0px 2px 2px 0px rgba(0, 0, 0, 0.12), 0px 0px 2px 0px rgba(0, 0, 0, 0.14)",
        3: "0px 2.101351261138916px 2.101351261138916px 0px rgba(0, 0, 0, 0.12), 0px 0px 2.101351261138916px 0px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
