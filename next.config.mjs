/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,  // Enables React Strict Mode
  swcMinify: true,       // Uses the SWC compiler for minification
  experimental: {
    optimizeCss: true,   // Enables CSS optimization (set to false if debugging CSS issues)
  },
};

export default nextConfig;
