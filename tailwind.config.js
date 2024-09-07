/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        leftBg: "#565758",
        rightBg: "#363c43",
        darkGray: "#171717",
        btnBg: "#24272a"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

