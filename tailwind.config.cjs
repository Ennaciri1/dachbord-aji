/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',   // toutes tes pages et composants
  ],
  darkMode: 'class',        // 'media' ou false si tu ne veux pas
  theme: {
    extend: {},
  },
  plugins: [],
};
