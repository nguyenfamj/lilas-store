const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin)', ...defaultTheme.fontFamily.sans],
        crimsontxt: [
          'var(--font-crimsontxt)',
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
