/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds - we'll run it separately
    ignoreDuringBuilds: true
  },
  images: {
    // Add image configuration to optimize image handling
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Increase memory limit for Node.js
  experimental: {
    // Set the memory limit for the browser build to help with the "RangeError: Maximum call stack size exceeded"
    largePageDataBytes: 128 * 1000, // 128KB, default is 128KB
  }
}

module.exports = nextConfig 