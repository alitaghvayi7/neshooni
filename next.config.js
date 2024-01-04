/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    THUNDERFOREST_API_KEY: process.env.THUNDERFOREST_API_KEY,
  },
};

module.exports = nextConfig;
