/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({
      addComponents }) {
        addComponents({
          //*** buttons ***
          '.btn': {
            padding: '3px 12px',
            border: '1px solid black',
            borderRadius: '50%',
          },
          '.btn-red': {
            backgroundColor: "var(--primary-color)", /* red */
            color: "white"
          },
          '.btn-red:hover': {
            backgroundColor: "#f3cbcb",
            color: "white"
          },
          '.btn-blue': {
            backgroundColor: "var(--secondary-color)", /* blue */
            color: "white"
          },
          '.btn-blue:hover': {
            backgroundColor: "#c5c5e1",
            color: "black"
          },
        })
    })
  ]
}
