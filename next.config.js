/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    THUNDERFOREST_API_KEY: process.env.THUNDERFOREST_API_KEY,
    GEOAPIFY_API_KEY:process.env.GEOAPIFY_API_KEY,
    BACKEND_URL:process.env.BACKEND_URL,
    BACKEND_VERSION:process.env.BACKEND_VERSION
  },
};

module.exports = nextConfig;
