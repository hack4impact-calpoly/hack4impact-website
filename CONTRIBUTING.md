# Contributing

If you do all of the following, everything _should_ work

If you're looking for contributing to content, check out Contentful. This is all code

## Running a local copy

### Cloning the repo

Run `git clone https://github.com/hack4impact-calpoly/hack4impact-website.git` from the command line

### Installing packages

From your project directory, run `yarn` from the command line

### Adding .env variables

Secret keys aren't just given to you. You have to ask 🔐

Someone in **#calpoly-website** will know what to do here

Once you get these keys, `mv .env.default .env`

### Running your local version

You're ready to start dev work! `yarn dev` will start a local server for you. Wait a second, then visit http://localhost:3000

## Understanding the repo

This is a Next.js (a React framework) project, so most things follow those standards. `pages/` contains the pages of the site, `styles/` has styles, `public/` has site assets (for dynamic content, see Contentful), and `utils/` holds mini-APIs (to help with Contenful stuff).

Typescript and a linter running the Airbnb style guide are also in play. These make things fun!