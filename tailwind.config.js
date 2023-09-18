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
        forth: "#343460"

      },
    },
  },
  plugins: [],
}