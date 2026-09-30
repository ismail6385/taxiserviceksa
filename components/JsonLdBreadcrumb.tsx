'use client';

import { usePathname } from 'next/navigation';

// Segments whose capitalisation can't be derived from the slug.
const NAME_OVERRIDES: Record<string, string> = { neom: 'NEOM', 'khobar-to-qatar-taxi': 'Al Khobar to Qatar', 'khayber-fort': 'Khaybar', uhud: 'Mount Uhud', 'taxi-king-fahd-causeway-border-crossing': 'King Fahd Causeway', alula: 'AlUla', quba: 'Masjid Quba', 'madinah-makkah': 'Madinah to Makkah', 'jeddah-taif': 'Jeddah to Taif', 'taif-jeddah': 'Taif to Jeddah' };

export default function JsonLdBreadcrumb() {
    const pathname = usePathname();

    const baseUrl = 'https://taxiserviceksa.com';

    // Split path and remove empty strings
    const segments = pathname.split('/').filter(Boolean);

    const itemListElement = [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
        },
        ...segments.map((segment, index) => {
            const url = `${baseUrl}/${segments.slice(0, index + 1).join('/')}/`;

            // Format name: replace hyphens with spaces and capitalize words
            const name = NAME_OVERRIDES[segment] ?? segment
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (char) => char.toUpperCase());

            return {
                '@type': 'ListItem',
                position: index + 2,
                name: name,
                item: url,
            };
        }),
    ];

    const graph = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement,
    };

    return (
        <script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
    );
}
