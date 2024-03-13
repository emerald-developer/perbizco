/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,html}",
  ],
  plugins: [
    // require('@tailwindcss/forms'),
    require("daisyui"),
  ],
  theme: {
    extend: {
      fontFamily : {
        pacifico : ["Pacifico"]
      }
    },
  },
  daisyui: {
    themes: [
        "dim"
    ],
  },
}