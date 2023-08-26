/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      DarkBrown: "var(--Dark-brown)",
      MediumBrown: "var(--Medium-brown)",
      Cream: "var(--Cream)",
      PaleOrange: "var(--Very-pale-orange)",
    },
  },
  extend: {},
  plugins: [],
};
