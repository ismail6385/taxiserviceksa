/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' because API routes need dynamic rendering
  // If you need static export, you'll need to use a different email solution
  // (like serverless functions or external API)
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  // Redirect www to non-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.taxiserviceksa.com',
          },
        ],
        destination: 'https://taxiserviceksa.com/:path*',
        permanent: true,
        statusCode: 308,
      },
    ];
  },
};

module.exports = nextConfig;
