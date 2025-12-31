/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' because API routes need dynamic rendering
  // If you need static export, you'll need to use a different email solution
  // (like serverless functions or external API)
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
