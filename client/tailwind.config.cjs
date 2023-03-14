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
          '.nav-footer': {
              backgroundColor: "var(--nav-footer)", /* red */
              color: "white",
              opacity: 0.9
          },
          '.lighter-blue': {
              color: "var(--lighter-blue)",
              fontWeight: "bold"
          }
        })
    })
  ]
}
