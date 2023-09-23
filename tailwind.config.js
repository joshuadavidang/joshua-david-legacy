/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#121212',
        midnight: '#000024',
        white: '#FFFFFF',
        gray: '#8492A6',
        graySecond: '#718096',
        lightGray: '#F2F2F2',
        purple: '#6868F6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        sen: ['Sen', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
