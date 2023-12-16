import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.slate,
          0: '#fff',
          1000: '#000'
        }
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
