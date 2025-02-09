/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html", // if your main HTML file is located in public/
    "./src/**/*.{js,jsx,ts,tsx}", // React component files
  ],
  theme: {
    extend: {
      colors: {
        p1: "#F9C06A",
        p2: "#603809",
        p3: "#1E1E1E",
        p4: "#707070",
      },
      boxShadow: {
        p1: "0px 3px 6px rgba(255, 87, 51, 0.25)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        clicker: ['"Clicker Script"', "cursive"],
      },
      fontSize: {
        14: "14px",
        15: "15px",
        17: "17px",
        150: "150px",
      },
    },
  },
  plugins: [],
};
