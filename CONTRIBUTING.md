# Contributing

If you do all of the following, everything _should_ work

If you're looking for contributing to content, check out Contentful. This is all code

## Running a local copy

### Cloning the repo

Run `git clone https://github.com/hack4impact-calpoly/hack4impact-website.git` from the command line

### Installing packages

From your project directory, run `yarn` from the command line

### Setting up the linter

ESLint is used to enforce code standards. If you are using VSCode, [install the ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Adding .env variables

Secret keys aren't just given to you. You have to ask 🔐

Someone in **#calpoly-website** will know what to do here

Once you get these keys, `mv .env.default .env`

### Running your local version

You're ready to start dev work! `yarn dev` will start a local server for you. Wait a second, then visit http://localhost:3000

## Understanding the repo

This is a Next.js (a React framework) project, so most things follow those standards. `pages/` contains the pages of the site, `styles/` has styles, `public/` has site assets (for dynamic content, see Contentful), and `utils/` holds mini-APIs (to help with Contenful stuff).

Typescript and a linter running the Airbnb style guide are also in play. These make things fun!

## Writing code

Tackling issues is fun. For the sake of organization let's agree on some standards.

- Assign yourself to an issue you want to tackle
- Create a feature branch for development
- Write good code (and follow specs in the issue)
- Make a PR when done
- Get someone to review the PR/provide feedback/make changes

## the `main` branch

Anything pushed into this goes live. Be careful.