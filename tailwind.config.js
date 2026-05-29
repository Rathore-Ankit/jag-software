/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        techDark: '#080c14',
        techSurface: '#101726',
        techAccent: '#00f2fe',
        techPurple: '#a855f7',
      }
    },
  },
  plugins: [],
}