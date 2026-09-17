import { listApprovedDrivers } from '@/lib/driverOnboardingService';

// Individual driver profiles (/drivers/{slug}/) became indexable on
// 2026-09-14 (see app/(main)/drivers/[slug]/page.tsx) — this sitemap is
// what actually gets them discovered/crawled, since they were previously
// noindex and never listed anywhere.
//
// force-dynamic: this route queries Supabase, so it must not run during
// `next build` (no DB egress in the build environment — it would hang the
// build forever). Deferring it to request time also keeps the driver list
// fresh on every crawl.
export const dynamic = 'force-dynamic';

export async function GET() {
    const baseUrl = 'https://taxiserviceksa.com';

    const drivers = await listApprovedDrivers({});

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <!-- Drivers Index -->
        <url>
            <loc>${baseUrl}/drivers/</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.6</priority>
        </url>

        <!-- Individual Driver Profiles -->
        ${drivers.map((driver: any) => {
        const lastMod = driver.approved_at ? new Date(driver.approved_at).toISOString() : new Date().toISOString();
        return `
        <url>
            <loc>${baseUrl}/drivers/${driver.slug}/</loc>
            <lastmod>${lastMod}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.5</priority>
        </url>
        `;
    }).join('')}
    </urlset>`;

    return new Response(sitemapXml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
