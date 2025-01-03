/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Agregar Poppins como fuente principal
      },
      colors: {
        primary: '#6a1b9a', // Lila principal
        secondary: '#D6BBE8', // Lila claro
        lightGray: '#F4F4F9', // Gris claro
        darkGray: '#6E6E6E', // Gris oscuro
        actionBlue: '#5DADE2', // Azul claro
      },
    },
  },
  plugins: [],
};
