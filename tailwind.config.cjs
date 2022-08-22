/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        35: '8.75rem',
        105: '26.25rem'
      },
      fontSize: {
        '3xl': ['1.75rem', '2.25rem'],
        '4xl': ['2rem', '2.25rem']
      },
      colors: {
        primary: '#6A33F8',
        secondary: '#301E5F',
        danger: '#C72424',
        'gray-300': '#F8F8F8',
        'gray-500': '#B9B9B9',
        'gray-600': '#797979'
      },
      borderWidth: {
        3: '3px',
        40: '40px'
      }
    }
  },
  plugins: []
}
