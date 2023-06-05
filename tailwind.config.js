/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fill: {
        'gold': '#CAAB72',
      },
      textColor: {
        'custom-white': '#E6E6E6',
        'light-gold': '#C9AA71',
        'gold': '#CAAB72',
        'dark-gold': '#C19144',
        'dimmed': '#888888',
      },
      backgroundColor: {
        'ultra-light-blue': '#2C70B5',
        'light-blue': '#092949',
        'blue': '#061F37',
        'dark-blue': '#060D1E',
      },
      borderColor: {
        'ultra-light-blue': '#2C70B5',
        'light-blue': '#092949',
        'blue': '#061F37',
        'dark-blue': '#060D1E',

        'light-gold': '#C9AA71',
        'gold': '#CAAB72',
        'dark-gold': '#C19144',
      },
    },
  },
  plugins: [],
};
