/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",                       // ← usamos la clase 'dark'
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Acentos NEON Hack (no cambian entre modos)
        "pink-brand":  "#FF4EB5",          // rosa neón
        "green-brand": "#00F8A9",          // verde neón

        // Neutros del modo oscuro
        "surface-dark": "#1A1A1A",         // fondo principal
        "text-dark":    "#E5E7EB",         // texto gris claro
      },
      boxShadow: {
        // glow suave para hover
        neon: "0 0 10px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};
