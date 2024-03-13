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
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#FFC700",
          "secondary": "#ADA9C3",
          "accent": "#b2679e",
          "neutral": "#23222a",
          "base-100": "#1D1C23",
        },
      },
    ],
  },
}

