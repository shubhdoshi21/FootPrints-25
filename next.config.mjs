/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Debugging: Log the build config
      console.log('Custom Webpack Config:', config);
  
      // Optional: Disable CSS minification temporarily
      config.optimization.minimize = false;
  
      return config;
    },
    // Enable React strict mode and other common settings
    reactStrictMode: true,
    swcMinify: true, // Use SWC for faster builds and minification
  };
  
  export default nextConfig;
  