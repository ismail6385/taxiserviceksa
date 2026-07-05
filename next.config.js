/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' because API routes need dynamic rendering
  // If you need static export, you'll need to use a different email solution
  // (like serverless functions or external API)
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'flagcdn.com' },
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'maps.googleapis.com' },
      { protocol: 'https', hostname: 'taxiserviceksa.com' },
      { protocol: 'https', hostname: '**.googleapis.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    const wellKnownJson = [
      '/.well-known/ucp',
      '/.well-known/openid-configuration',
      '/.well-known/oauth-protected-resource',
      '/.well-known/http-message-signatures-directory',
    ];

    const securityHeaders = [
      // Force HTTPS for 1 year, include all subdomains
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
      },
      // Prevent MIME type sniffing
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      // Block site from being embedded in iframes on other domains
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      // Control referrer information sent with requests
      {
        key: 'Referrer-Policy',
        value: 'no-referrer-when-downgrade',
      },
      // Disable unused browser features
      {
        key: 'Permissions-Policy',
        value: 'geolocation=(), midi=(), accelerometer=(), gyroscope=(), magnetometer=(), camera=(), microphone=(), payment=(), usb=(), fullscreen=(self)',
      },
      // Content Security Policy — upgrade HTTP to HTTPS + restrict sources
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://static.hotjar.com https://script.hotjar.com https://*.clarity.ms https://*.trustpilot.com https://widget.trustpilot.com",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com data:",
          "img-src 'self' data: blob: https: https://www.google-analytics.com https://www.googletagmanager.com https://flagcdn.com https://*.supabase.co https://*.clarity.ms https://*.bing.com",
          "connect-src 'self' blob: https://*.supabase.co https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://vitals.vercel-insights.com https://*.clarity.ms https://e.clarity.ms https://*.bing.com https://*.google-analytics.com https://*.g.doubleclick.net https://stats.g.doubleclick.net",
          "worker-src 'self' blob: https://*.clarity.ms",
          "media-src 'self' blob: https://*.clarity.ms",
          "frame-src 'self' https://www.google.com https://www.youtube.com https://*.trustpilot.com",
          "object-src 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "upgrade-insecure-requests",
        ].join('; '),
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: [
          ...securityHeaders,
          {
            key: 'Link',
            value: [
              '</.well-known/api-catalog>; rel="api-catalog"',
              '</.well-known/agent-card.json>; rel="https://a2a-protocol.org/rel/agent-card"',
              '</.well-known/agent-skills/index.json>; rel="https://agentskills.io/rel/skills-index"',
              '</.well-known/mcp/server-card.json>; rel="https://modelcontextprotocol.io/rel/server-card"',
            ].join(', '),
          },
        ],
      },
      {
        source: '/.well-known/api-catalog',
        headers: [
          { key: 'Content-Type', value: 'application/linkset+json' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      ...wellKnownJson.map((source) => ({
        source,
        headers: [
          { key: 'Content-Type', value: 'application/json; charset=utf-8' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      })),
    ];
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
      // URL variant redirects - May 2026
      {
        source: '/locations/al-quwayiyah',
        destination: '/locations/al-quway-iyah/',
        permanent: true,
      },
      {
        source: '/locations/al-quwayiyah/',
        destination: '/locations/al-quway-iyah/',
        permanent: true,
      },
      {
        source: '/locations/al-majmaah',
        destination: '/locations/al-majma-ah/',
        permanent: true,
      },
      {
        source: '/locations/al-majmaah/',
        destination: '/locations/al-majma-ah/',
        permanent: true,
      },
      // 404 Error Fixes - May 2026
      {
        source: '/routes/riy',
        destination: '/routes/riyadh-makkah/',
        permanent: true,
      },
      {
        source: '/routes/riy/',
        destination: '/routes/riyadh-makkah/',
        permanent: true,
      },
      {
        source: '/riyadh-zoo-explore-the-official-saudi/feed',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/riyadh-zoo-explore-the-official-saudi/feed/',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/apple-app-site-association',
        destination: '/',
        permanent: true,
      },
      {
        source: '/apple-app-site-association/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/.well-known/apple-app-site-association',
        destination: '/',
        permanent: true,
      },
      {
        source: '/.well-known/apple-app-site-association/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/maraya-concert-hall-al-ula-guide',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/blog/maraya-concert-hall-al-ula-guide/',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/fleet/',
        permanent: true,
      },
      {
        source: '/pricing/',
        destination: '/fleet/',
        permanent: true,
      },
      {
        source: '/services/ziyarat-tours',
        destination: '/services/madinah-ziyarat/',
        permanent: true,
      },
      {
        source: '/services/ziyarat-tours/',
        destination: '/services/madinah-ziyarat/',
        permanent: true,
      },
      {
        source: '/services/business-executive-transport',
        destination: '/services/business/',
        permanent: true,
      },
      {
        source: '/services/business-executive-transport/',
        destination: '/services/business/',
        permanent: true,
      },
      {
        source: '/routes/dammam-airport-to-kuwait',
        destination: '/routes/dammam-kuwait/',
        permanent: true,
      },
      {
        source: '/routes/dammam-airport-to-kuwait/',
        destination: '/routes/dammam-kuwait/',
        permanent: true,
      },
      {
        source: '/jeddah-to-pullman-makkah',
        destination: '/routes/jeddah-to-pullman-makkah/',
        permanent: true,
      },
      {
        source: '/jeddah-to-pullman-makkah/',
        destination: '/routes/jeddah-to-pullman-makkah/',
        permanent: true,
      },
      {
        source: '/category/uncategorized',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/category/uncategorized/',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/jeddah-to-fairmont-makkah',
        destination: '/routes/jeddah-to-fairmont-makkah/',
        permanent: true,
      },
      {
        source: '/jeddah-to-fairmont-makkah/',
        destination: '/routes/jeddah-to-fairmont-makkah/',
        permanent: true,
      },
      {
        source: '/makkah-taxi/makkah-to-madinah-staria-7-seater',
        destination: '/routes/makkah-madinah/',
        permanent: true,
      },
      {
        source: '/makkah-taxi/makkah-to-madinah-staria-7-seater/',
        destination: '/routes/makkah-madinah/',
        permanent: true,
      },
      {
        source: '/jeddah-to-swissotel-makkah',
        destination: '/routes/jeddah-to-swissotel-makkah/',
        permanent: true,
      },
      {
        source: '/jeddah-to-swissotel-makkah/',
        destination: '/routes/jeddah-to-swissotel-makkah/',
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
