/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export configuration

  webpack: (config) => {
    console.log('Custom Webpack Config:', config); // Debugging
    config.optimization.minimize = false; // Optional: Disable CSS minification temporarily
    return config;
  },

  reactStrictMode: true,
  swcMinify: true, // Use SWC for faster builds and minification
};

module.exports = nextConfig; // Correct CommonJS syntax
