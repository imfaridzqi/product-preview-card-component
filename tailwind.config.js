/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        cream: "hsl(30, 38%, 92%)",
        darkCyan: "hsl(158, 36%, 37%)",
      },
      fontFamily: {
        montserrat: "Montserrat",
        fraunces: "Fraunces",
      },
    },
  },
  plugins: [],
};
