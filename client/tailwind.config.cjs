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
          '.bg-carrousel': {
            backgroundColor: "var(--marine-blue)"
          },
          '.lighter-blue': {
              color: "var(--lighter-blue)",
              fontWeight: "bold"
          },
          '.testimonials': {
            backgroundColor: "var(--bg-testimonials)",
            padding: "10px"
          },
          '.btn-home': {
            color: "var(--lighter-blue)",
            borderBottom: "3px solid var(--lighter-blue)",
            fontSize: "2rem",
            fontWeight: "bold",
            lineHeight: "2rem",
            display: "flex",
            justifyContent: "center",
            transition: "0.1s",
            textTransform: "uppercase"
          },
          '.btn-home:hover': {
            color: "var(--hover-blue-btn)",
            borderBottom: "3px solid var(--hover-blue-btn)"
          }
        })
    })
  ]
}
