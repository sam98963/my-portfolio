/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#22223B",
        secondary: "#FDF2F0",
        tertiary: "#F1F1F1"

      }
    },
  },
  plugins: [],
}