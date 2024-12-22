/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: false, // Disable CSS minification for debugging
  },
};

module.exports = nextConfig;
