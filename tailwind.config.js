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
        'input': '0 0 12px rgba(70, 150, 250, 0.8)',
        'button': '1px 1px 20px 1px rgba(70, 150, 250, 0.6)',
        'button-small': '1px 1px 10px 1px rgba(70, 150, 250, 0.6)',
        'button-hover': '1px 1px 30px 1px rgba(70, 150, 250, 0.8)',
        'button-small-hover': '1px 1px 15px 1px rgba(70, 150, 250, 0.8)',
    }
    ,
      dropShadow: {
        "input": '0 0 8px rgba(70, 150, 250, 0.6)',
      },
      blur: {
        xs: "2px"
      },
      transition: {
        "fadeIn" : "opacity 200ms ease"
      },
      rotate:{
        "24": "24deg"
      },
      fontSize: {
        "2xs": "0.75rem",
        "3xs": "0.625rem",
        "4xs": "0.5rem"
      },
      height: {
        "88": "22rem",
        "120": "20rem",
        "7/8": "87.5%"
      },
      width: {
        "88": "22rem",
        "12/13": "93%",
        "120": "28rem",
        "144": "32rem",
      }
    },
  },
  plugins: [],
}