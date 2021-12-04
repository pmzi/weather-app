/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['openweathermap.org'],
  },
  sassOptions: {
    additionalData: '@import "~@/styles/imports.scss";',
  },
};
