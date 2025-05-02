module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6F0FF',
          200: '#CCE0FF',
          300: '#99C0FF',
          400: '#66A0FF',
          500: '#3380FF',
          600: '#0066FF',
          700: '#0052CC',
          800: '#003D99',
          900: '#002966',
        },
        secondary: {
          100: '#E6F7FF',
          200: '#B3E5FC',
          300: '#81D4FA',
          400: '#4FC3F7',
          500: '#29B6F6',
          600: '#03A9F4',
          700: '#0288D1',
          800: '#0277BD',
          900: '#01579B',
        },
        accent: {
          100: '#E1F5FE',
          200: '#B3E5FC',
          300: '#81D4FA',
          400: '#4FC3F7',
          500: '#29B6F6',
          600: '#03A9F4',
          700: '#0288D1',
          800: '#0277BD',
          900: '#01579B',
        }
      },
      fontFamily: {
        sans: ['Roboto', 'Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 