module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#04467B',
          DEFAULT: '#065798',
          light: '#0B6DBB',
          lightest: '#EEF7FF',
        },
        coolGray: {
          lightest: '#FAFAFA',
        },
      },
    },
    minWidth: {
      1.5: '0.375rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
