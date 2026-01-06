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
  async redirects() {
    return [
      // GMC Yukon redirect
      {
        source: '/gmc-yukon-7-seater',
        destination: '/fleet/gmc-yukon',
        permanent: true,
      },
      {
        source: '/gmc-yukon-7-seater/',
        destination: '/fleet/gmc-yukon/',
        permanent: true,
      },
      // Missing image files - redirect .jpg to .webp
      {
        source: '/gmc-yukon.jpg',
        destination: '/gmc-yukon.webp',
        permanent: true,
      },
      {
        source: '/hero-slide-2.jpg',
        destination: '/hero-slide-2.webp',
        permanent: true,
      },
      {
        source: '/toyota-camry.jpg',
        destination: '/toyota-camry.webp',
        permanent: true,
      },
      {
        source: '/toyota-coaster.jpg',
        destination: '/toyota-coaster.webp',
        permanent: true,
      },
      {
        source: '/toyota-hiace.jpg',
        destination: '/toyota-hiace.webp',
        permanent: true,
      },
      {
        source: '/hyundai-starex.jpg',
        destination: '/hyundai-starex.webp',
        permanent: true,
      },
      {
        source: '/jeddah-airport-taxi.jpg',
        destination: '/jeddah-airport.webp',
        permanent: true,
      },
      {
        source: '/taif-rose-festival.webp',
        destination: '/blog/taif-rose-festival.png',
        permanent: true,
      },
      // Author redirects
      {
        source: '/author/ismail',
        destination: '/author/muhammad-ismail',
        permanent: true,
      },
      {
        source: '/author/ismail/',
        destination: '/author/muhammad-ismail/',
        permanent: true,
      },
      // Feed redirects
      {
        source: '/feed',
        destination: '/feed.xml',
        permanent: true,
      },
      {
        source: '/feed/',
        destination: '/feed.xml',
        permanent: true,
      },
      {
        source: '/comments/feed',
        destination: '/feed.xml',
        permanent: true,
      },
      {
        source: '/comments/feed/',
        destination: '/feed.xml',
        permanent: true,
      },
      // WordPress-style date URLs - return 410 Gone via middleware, but add redirects for common patterns
      {
        source: '/2025/:path*',
        destination: '/',
        permanent: false, // Temporary redirect
      },
      // Missing service pages - redirect to services page
      {
        source: '/services/industrial',
        destination: '/services/',
        permanent: false,
      },
      {
        source: '/services/industrial/',
        destination: '/services/',
        permanent: false,
      },
      {
        source: '/services/city-transport',
        destination: '/services/',
        permanent: false,
      },
      {
        source: '/services/city-transport/',
        destination: '/services/',
        permanent: false,
      },
      // Redundant route redirect
      {
        source: '/locations/jeddah-makkah/',
        destination: '/routes/jeddah-makkah/',
        permanent: true,
      },
      // Restructured Route Pages (301)
      {
        source: '/jeddah-airport-to-makkah-taxi',
        destination: '/routes/jeddah-makkah/',
        permanent: true,
      },
      {
        source: '/jeddah-airport-to-makkah-taxi/',
        destination: '/routes/jeddah-makkah/',
        permanent: true,
      },
      {
        source: '/madinah-to-makkah-taxi',
        destination: '/routes/madinah-makkah/',
        permanent: true,
      },
      {
        source: '/madinah-to-makkah-taxi/',
        destination: '/routes/madinah-makkah/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Sitemap rewrites - map .xml URLs to API route handlers
      {
        source: '/sitemap-index.xml',
        destination: '/api/sitemaps/sitemap-index',
      },
      {
        source: '/sitemap-blogs.xml',
        destination: '/api/sitemaps/sitemap-blogs',
      },
      {
        source: '/sitemap-fleet.xml',
        destination: '/api/sitemaps/sitemap-fleet',
      },
      {
        source: '/sitemap-locations.xml',
        destination: '/api/sitemaps/sitemap-locations',
      },
      {
        source: '/sitemap-routes.xml',
        destination: '/api/sitemaps/sitemap-routes',
      },
      {
        source: '/sitemap-services.xml',
        destination: '/api/sitemaps/sitemap-services',
      },
      {
        source: '/sitemap-guides.xml',
        destination: '/api/sitemaps/sitemap-guides',
      },
      {
        source: '/sitemap-static.xml',
        destination: '/api/sitemaps/sitemap-static',
      },
    ];
  },
};

module.exports = nextConfig;
