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
        // as of now, tailwind and next does not include these on build
        // see `styles/globals.css` for a workaround
        // (these are kept here in the hopes that this gets fixed soon..)
        'home-header': "url('/assets/illustrations/home.png')",
        'nonprofit-header': "url('/assets/illustrations/nonprofits.png')",
        'projects-header': "url('/assets/illustrations/projects.png')",
        'student-header': "url('/assets/illustrations/students.png')",
        'donate-header': "url('/assets/illustrations/donate.png')",
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
