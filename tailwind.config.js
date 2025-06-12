/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
        fontFamily: {
          code: ["Source Code Pro", 'monospace'],
        },
      
      colors: {
        'pantone': '#001220', // Or your custom color value
        'secondary': '#28A745', // Or your custom color value
        'tertiary': '#dc3545', // Or your custom color value
      },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
} 