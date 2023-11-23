/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7790A7',
          dark: '#3D567D',
          light: '#ACD0F2'
        }
      }
    }
  },
  plugins: []
}
