/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008453',
          light: '#e6f5ee',
          dark: '#006940',
        },
        accent: {
          DEFAULT: '#e6b711',
          light: '#fff8e1',
          dark: '#d4a700',
        }
      },
    },
  },
  plugins: [],
}