/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'calpoly.hack4impact.org'],
    loader: 'imgix',
    path: 'https://calpoly.hack4impact.org/',
  },
};
