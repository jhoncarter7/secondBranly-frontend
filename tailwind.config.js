/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#5046e5',
        secondary: '#e1e8ff'
      }
    },
  },
  plugins: [],
}