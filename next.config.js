/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    THUNDERFOREST_API_KEY: process.env.THUNDERFOREST_API_KEY,
    GEOAPIFY_API_KEY: process.env.GEOAPIFY_API_KEY,
    BACKEND_URL: process.env.BACKEND_URL,
    BACKEND_VERSION: process.env.BACKEND_VERSION,
  },
  images: {
    remotePatterns: [
      {
        hostname: "bahareshirafkan.ir",
        protocol: "https",
      },
      {
        hostname: "*",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
