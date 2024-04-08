/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/shared/styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "13.49.185.119",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
    ],
  },
};

module.exports = nextConfig;
