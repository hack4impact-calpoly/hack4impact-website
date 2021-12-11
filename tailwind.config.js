module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      strong: ['"Sofia Pro Bold"'],
    },
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
      backgroundImage: {
        'home-header': "url('/assets/illustrations/home.png')",
        'nonprofit-header': "url('/assets/illustrations/nonprofits.png')",
        'projects-header': "url('/assets/illustrations/projects.png')",
        'student-header': "url('/assets/illustrations/students.png')",
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
