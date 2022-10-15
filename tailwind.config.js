/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'oxford': '#253439',
      'marigold': '#DDA83F',
      'venetian': '#ED5B2D',
      'disabled': '#989D99',
    },
   },
  },
  plugins: [
  ],
}
