/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        'white': '#E6E6E6',
        'light-gold': '#C9AA71',
        'gold': '#CAAB72',
        'dark-gold': '#C19144',
      },
      backgroundColor: {
        'ultra-light-blue': '#2C70B5',
        'light-blue': '#092949',
        'blue': '#061F37',
        'dark-blue': '#060D1E',
      },
    },
  },
  plugins: [],
};
