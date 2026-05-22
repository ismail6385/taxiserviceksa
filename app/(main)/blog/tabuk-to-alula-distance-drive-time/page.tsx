import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Tabuk to AlUla Distance & Drive Time — Complete Route Guide',
    description: 'Tabuk to AlUla is 330 km — 3.5 to 4 hours by car. Milestone map, fuel stops, speed cameras, and best departure time explained.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tabuk-to-alula-distance-drive-time/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/tabuk-to-alula-distance-drive-time/',
            'ar': 'https://taxiserviceksa.com/blog/tabuk-to-alula-distance-drive-time/',
            'x-default': 'https://taxiserviceksa.com/blog/tabuk-to-alula-distance-drive-time/',
        },
    },
    openGraph: {
        title: 'Tabuk to AlUla Distance & Drive Time — Complete Route Guide',
        description: '330 km, 3.5–4 hours. Full milestone map from Tabuk to AlUla with fuel stops, road tips, and what to expect en route.',
        url: 'https://taxiserviceksa.com/blog/tabuk-to-alula-distance-drive-time/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tabuk to AlUla Distance & Drive Time — Complete Route Guide',
    description: 'How far is Tabuk from AlUla and how long does it take to drive? 330 km, 3.5–4 hours, with full route breakdown.',
    author: { '@type': 'Person', name: 'Taxi Service KSA Editorial Team' },
    publisher: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
    datePublished: '2026-05-22',
    dateModified: '2026-05-22',
    speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.tldr-summary', '.speakable-answer'],
    },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How far is Tabuk from AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk is approximately 330 km from AlUla by road, taking the Route 375 south through Tayma. The straight-line distance is shorter, but there is no direct shortcut road.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long does it take to drive from Tabuk to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The drive takes 3.5 to 4 hours depending on traffic, checkpoints, and driving speed. Speed cameras limit you to 120 km/h on the main highway. Budget 4 hours to be safe, especially if you stop in Tayma.',
            },
        },
        {
            '@type': 'Question',
            name: 'What road do you take from Tabuk to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The main route is Route 375 heading southeast from Tabuk. It passes through Al Bad, Sharma, and Tayma before reaching AlUla. Google Maps and Apple Maps both correctly route this journey.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are there fuel stations on the Tabuk to AlUla road?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Fuel stations are available in Tabuk city, the town of Al Bad (around 85 km), and Tayma (around 230 km). There are long desert stretches with no services in between. Always start with a full tank from Tabuk.',
            },
        },
    ],
};

const milestones = [
    { km: '0', place: 'Tabuk City Centre', time: '0 min', notes: 'Start here. Fill fuel — last major station for 85 km.' },
    { km: '45', place: 'Tabuk City Outskirts', time: '30 min', notes: 'Highway opens up. Speed limit 120 km/h, cameras active.' },
    { km: '85', place: 'Al Bad Town', time: '50 min', notes: 'Small town, basic fuel and snacks. Optional stop.' },
    { km: '160', place: 'Sharma Coastal Area', time: '1h 40min', notes: 'NEOM region begins. Side roads restricted. Stay on Route 375.' },
    { km: '230', place: 'Tayma Oasis Town', time: '2h 20min', notes: 'Recommended stop. Fuel, food, toilets. Historic oasis with ancient ruins.' },
    { km: '290', place: 'Hejaz Region Entry', time: '3h 00min', notes: 'Landscape shifts. Sandstone formations begin. AlUla getting close.' },
    { km: '330', place: 'AlUla City Centre', time: '3h 30min', notes: 'Arrival. Hotels, Old Town, Hegra entrance 15 km north.' },
];

export default function TabukToAlulaDistancePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; AlUla &rsaquo; Route Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Tabuk to AlUla — Distance &amp; Drive Time Guide
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance:</strong> ~330 km</li>
                        <li>⏱ <strong>Drive time:</strong> 3.5 – 4 hours</li>
                        <li>🛣 <strong>Route:</strong> Route 375 south via Tayma</li>
                        <li>⛽ <strong>Fuel stops:</strong> Tabuk → Al Bad (85 km) → Tayma (230 km)</li>
                        <li>📷 <strong>Speed limit:</strong> 120 km/h — cameras frequent</li>
                    </ul>
                </div>

                {/* Quick numbers */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Key Numbers at a Glance</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                            { value: '330 km', label: 'Total distance' },
                            { value: '3.5–4 hrs', label: 'Drive time' },
                            { value: '120 km/h', label: 'Speed limit' },
                            { value: '2 fuel stops', label: 'En route' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-muted rounded-lg p-4 text-center">
                                <div className="text-xl font-bold text-primary">{stat.value}</div>
                                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Milestone map */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Milestone Map: Tabuk to AlUla</h2>
                    <div className="space-y-2">
                        {milestones.map((m) => (
                            <div key={m.km} className="flex gap-3 border rounded-lg p-3 text-sm">
                                <div className="shrink-0 text-center w-14">
                                    <div className="font-bold text-primary">{m.km} km</div>
                                    <div className="text-xs text-muted-foreground">{m.time}</div>
                                </div>
                                <div>
                                    <div className="font-semibold">{m.place}</div>
                                    <div className="text-muted-foreground text-xs mt-0.5">{m.notes}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tayma detour */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Tayma — Worth a Stop?</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Tayma is an ancient oasis city roughly halfway between Tabuk and AlUla. It has been inhabited for over 3,000 years and contains ruins, a historic well (Bi&apos;r Hadaj), and a small museum. If you have time, it&apos;s worth 30–45 minutes.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">What to see in Tayma</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                                <li>Bi&apos;r Hadaj — ancient stone well, one of the largest in Arabia</li>
                                <li>Tayma Museum — small but informative</li>
                                <li>Old city walls and ruins</li>
                                <li>Palm groves and oasis atmosphere</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Practical notes</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                                <li>Fuel station on the main highway</li>
                                <li>Restaurants and cafes available</li>
                                <li>Museum has limited hours — check before visiting</li>
                                <li>Adds ~45 min to total journey time</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Drive tips */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Road Tips for Tabuk to AlUla</h2>
                    <div className="space-y-3 text-sm">
                        {[
                            {
                                tip: 'Leave Tabuk by 7am',
                                detail: 'This gets you to AlUla by 11am — enough time to visit Hegra before the afternoon heat peaks above 35°C in warmer months.',
                            },
                            {
                                tip: 'No shortcuts across the desert',
                                detail: 'Do not attempt off-road shortcuts. The terrain between the highway and AlUla is loose sand and gravel. Stick to Route 375.',
                            },
                            {
                                tip: 'Speed cameras are everywhere',
                                detail: 'Saudi traffic cameras log every vehicle automatically. A SAR 600 fine for 130 km/h in a 120 zone is not worth it. Set cruise control.',
                            },
                            {
                                tip: 'Download offline maps',
                                detail: 'Signal drops in several stretches. Google Maps offline mode covers this route well. Download before leaving Tabuk.',
                            },
                            {
                                tip: 'Book Hegra tickets in advance',
                                detail: 'The main AlUla attraction — Hegra (Mada\'in Salih) — requires pre-booked tickets through the Experience AlUla app. Walk-ins are often turned away.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="border-l-4 border-primary/30 pl-4 py-1">
                                <div className="font-semibold">{item.tip}</div>
                                <div className="text-muted-foreground">{item.detail}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Skip the drive — hire a driver</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        A private driver from Tabuk to AlUla costs SAR 600–900 one-way. You arrive relaxed, no navigation stress, no fuel worries.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20driver%20from%20Tabuk%20to%20AlUla.%20Please%20send%20availability%20and%20price."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Tabuk → AlUla Driver
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How far is Tabuk from AlUla?',
                                a: 'Tabuk is approximately 330 km from AlUla by road, taking Route 375 south through Tayma. The straight-line distance is shorter, but there is no direct shortcut road.',
                            },
                            {
                                q: 'How long does it take to drive from Tabuk to AlUla?',
                                a: 'The drive takes 3.5 to 4 hours depending on traffic, checkpoints, and driving speed. Speed cameras limit you to 120 km/h on the main highway. Budget 4 hours to be safe, especially if you stop in Tayma.',
                            },
                            {
                                q: 'What road do you take from Tabuk to AlUla?',
                                a: 'The main route is Route 375 heading southeast from Tabuk. It passes through Al Bad, Sharma, and Tayma before reaching AlUla. Google Maps and Apple Maps both correctly route this journey.',
                            },
                            {
                                q: 'Are there fuel stations on the Tabuk to AlUla road?',
                                a: 'Fuel stations are available in Tabuk city, the town of Al Bad (around 85 km), and Tayma (around 230 km). There are long desert stretches with no services in between. Always start with a full tank from Tabuk.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Internal links */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Related Tabuk Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/how-to-get-from-tabuk-to-alula" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get from Tabuk to AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">All transport options, pricing table</div>
                        </Link>
                        <Link href="/blog/alula-visitor-guide-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">AlUla visitor guide from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Hegra, what to see, best season</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get to NEOM from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km northwest, checkpoint guide</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport (TUU) transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Arrivals, all routes from TUU</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City rides, intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book online</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, English-speaking drivers</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
