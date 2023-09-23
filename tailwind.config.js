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
        tertiary: "#99b",
        forth: "#343460",
        fifth: "#4696fa"
      },
      boxShadow: {
        'input': '0 0 30px rgba(70, 150, 250, 0.8)',
      },
      blur: {
        xs: "2px"
      }
    },
  },
  plugins: [],
}