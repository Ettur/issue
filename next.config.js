/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData: `@import "styles/_variables.scss"; @import "styles/_fonts.scss"; @import "styles/_mixins.scss";`,
 },
};

module.exports = nextConfig;
