/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during builds - we'll run it separately
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 