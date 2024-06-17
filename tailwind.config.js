/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        8: "14px",
      },
      rotate: {
        3: "-3deg",
      },
      textDecorationThickness: {
        5: "5px",
        6: "6px",
      },
      width: {
        80: "1280px",
      },
      screens: {
        xs: "355px",
        short: { raw: "(max-height: 799px)" },
        small: "500px",
      },
      padding: {
        18: "4.45rem",
      },
    },
  },
  plugins: [],
};
