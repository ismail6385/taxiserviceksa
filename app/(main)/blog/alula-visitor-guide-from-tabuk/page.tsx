import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'AlUla Visitor Guide from Tabuk — What to See, When to Go',
    description: 'Planning a trip to AlUla from Tabuk? This visitor guide covers what to see, how to book Hegra, best time to visit, where to stay, and transport options.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/alula-visitor-guide-from-tabuk/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/alula-visitor-guide-from-tabuk/',
            'ar': 'https://taxiserviceksa.com/blog/alula-visitor-guide-from-tabuk/',
            'x-default': 'https://taxiserviceksa.com/blog/alula-visitor-guide-from-tabuk/',
        },
    },
    openGraph: {
        title: 'AlUla Visitor Guide from Tabuk — What to See, When to Go',
        description: 'Everything you need to plan a trip to AlUla from Tabuk: top attractions, Hegra tickets, where to stay, best season, and travel tips.',
        url: 'https://taxiserviceksa.com/blog/alula-visitor-guide-from-tabuk/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AlUla Visitor Guide from Tabuk — What to See, When to Go',
    description: 'Complete guide to visiting AlUla from Tabuk: top attractions, how to book Hegra, where to stay, best time to visit, and private transfer options.',
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
            name: 'Is AlUla worth visiting from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Yes. AlUla is one of Saudi Arabia's most spectacular destinations. It contains Hegra — Saudi Arabia's first UNESCO World Heritage Site — along with the AlUla Old Town, Dadan ruins, Elephant Rock, and Maraya concert hall. The 330 km drive from Tabuk takes 3.5–4 hours and is absolutely worth it for a day trip or overnight stay.",
            },
        },
        {
            '@type': 'Question',
            name: 'How many days do you need in AlUla from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "For a day trip from Tabuk, you can see 1–2 main attractions (Hegra + Elephant Rock is the popular combination). For the full AlUla experience including Hegra, Dadan, Old Town, and surrounding landscapes, plan 2 nights minimum. October to March is the ideal season for multiple days.",
            },
        },
        {
            '@type': 'Question',
            name: 'What is AlUla known for?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "AlUla is known for Hegra (Mada'in Salih) — over 100 Nabataean tombs carved into sandstone cliffs, Saudi Arabia's first UNESCO World Heritage Site. It is also famous for its dramatic desert landscapes, red sandstone mountains, AlUla Old Town, and the iconic Elephant Rock (Jabal Al Fil). AlUla has recently become a major luxury tourism destination with new hotels and the Winter at Tantora festival.",
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best time to visit AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: "The best time to visit AlUla is October to March. Temperatures are comfortable (15–25°C), and the famous Winter at Tantora festival runs from December to March with outdoor concerts, markets, and events at Maraya. Summer (May–September) is too hot for comfortable outdoor sightseeing — temperatures exceed 40°C.",
            },
        },
    ],
};

const attractions = [
    {
        name: 'Hegra (Mada\'in Salih)',
        type: 'UNESCO Heritage Site',
        desc: '111 Nabataean rock-cut tombs. Saudi Arabia\'s most impressive ancient site. Pre-booked tickets required (SAR 95).',
        time: '3–4 hours',
        must: true,
    },
    {
        name: 'Elephant Rock (Jabal Al Fil)',
        type: 'Natural landmark',
        desc: 'Massive sandstone rock naturally eroded into the shape of an elephant. Spectacular at sunset. Free entry.',
        time: '30–45 min',
        must: true,
    },
    {
        name: 'AlUla Old Town',
        type: 'Historic district',
        desc: '900-year-old mud-brick city. Narrow lanes, ancient houses, and a restored souk. Self-guided walk.',
        time: '1–2 hours',
        must: false,
    },
    {
        name: 'Dadan & Ikmah',
        type: 'Archaeological site',
        desc: 'Ancient Lihyanite and Dedanite kingdom ruins predating the Nabataeans. Rock inscriptions and carved lions.',
        time: '2–3 hours',
        must: false,
    },
    {
        name: 'Maraya',
        type: 'Architecture / Events',
        desc: 'The world\'s largest mirrored building in the desert. Hosts concerts and the Winter at Tantora festival. Photo stop.',
        time: '30 min',
        must: false,
    },
    {
        name: 'Harrat Viewpoint',
        type: 'Scenic viewpoint',
        desc: 'Panoramic view over AlUla valley and the surrounding red sandstone formations. Best at golden hour.',
        time: '30 min',
        must: false,
    },
];

export default function AlulaVisitorGuidePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; AlUla &rsaquo; Visitor Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        AlUla Visitor Guide from Tabuk — What to See &amp; When to Go
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 7 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance from Tabuk:</strong> 330 km (~3.5 hrs)</li>
                        <li>🏆 <strong>Must-see:</strong> Hegra + Elephant Rock</li>
                        <li>🎟 <strong>Hegra tickets:</strong> Pre-book via Experience AlUla app (SAR 95)</li>
                        <li>🌡 <strong>Best season:</strong> October – March</li>
                        <li>📅 <strong>How many days:</strong> Day trip possible, 2 nights ideal</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        AlUla is Saudi Arabia&apos;s most extraordinary destination — ancient Nabataean tombs, dramatic red sandstone canyons, a 900-year-old mud-brick town, and one of the world&apos;s most unusual concert venues. From Tabuk, it&apos;s a 330 km drive southeast that takes 3.5 to 4 hours. This guide helps you make the most of your visit whether you have one day or three.
                    </p>
                </section>

                {/* Top attractions */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Top Attractions in AlUla</h2>
                    <div className="space-y-3">
                        {attractions.map((place) => (
                            <div key={place.name} className={`border rounded-lg p-4 text-sm ${place.must ? 'border-primary/40 bg-primary/5' : ''}`}>
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <div className="font-semibold">{place.name}</div>
                                    {place.must && (
                                        <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded shrink-0">Must-see</span>
                                    )}
                                </div>
                                <div className="text-xs text-muted-foreground mb-1">{place.type} &bull; {place.time}</div>
                                <div className="text-muted-foreground text-xs">{place.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Day trip vs overnight */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Day Trip vs Overnight — What Works from Tabuk</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Day trip from Tabuk ✅ Possible</h3>
                            <p className="text-muted-foreground mb-2">Leave Tabuk at 6am, arrive by 10am. Tour Hegra (3 hrs), lunch in AlUla, visit Elephant Rock at sunset, drive back by 9pm.</p>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>Works best October–March (cooler weather)</li>
                                <li>Pre-book Hegra tickets before leaving</li>
                                <li>Hire a driver so you can rest on return journey</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">2 nights (recommended)</h3>
                            <p className="text-muted-foreground mb-2">Day 1: Hegra + Old Town. Day 2: Dadan, Elephant Rock, Maraya. Drive home on Day 3.</p>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>Covers everything without rushing</li>
                                <li>Time for sunrise / sunset at major sites</li>
                                <li>Winter at Tantora festival events in the evenings</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Best time */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Best Time to Visit AlUla</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Month</th>
                                    <th className="border px-3 py-2 text-left">Temp</th>
                                    <th className="border px-3 py-2 text-left">Events</th>
                                    <th className="border px-3 py-2 text-left">Verdict</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { month: 'Oct – Nov', temp: '18–28°C', events: '—', verdict: 'Great', color: 'text-green-600' },
                                    { month: 'Dec – Feb', temp: '10–22°C', events: 'Winter at Tantora', verdict: 'Best season', color: 'text-green-700 font-semibold' },
                                    { month: 'March', temp: '15–25°C', events: 'Tantora (ends Mar)', verdict: 'Excellent', color: 'text-green-600' },
                                    { month: 'April', temp: '20–32°C', events: '—', verdict: 'Good', color: 'text-amber-600' },
                                    { month: 'May – Sep', temp: '32–42°C', events: '—', verdict: 'Avoid if possible', color: 'text-red-600' },
                                ].map((row) => (
                                    <tr key={row.month} className="even:bg-muted/30">
                                        <td className="border px-3 py-2">{row.month}</td>
                                        <td className="border px-3 py-2">{row.temp}</td>
                                        <td className="border px-3 py-2">{row.events}</td>
                                        <td className={`border px-3 py-2 ${row.color}`}>{row.verdict}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Where to stay */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Where to Stay in AlUla</h2>
                    <div className="space-y-3 text-sm">
                        {[
                            {
                                name: 'Shaden Resort',
                                type: 'Luxury',
                                desc: 'Tented resort set in the AlUla valley with stunning views of the rock formations. Close to Hegra.',
                                price: 'SAR 1,500–2,500/night',
                            },
                            {
                                name: 'Banyan Tree AlUla',
                                type: 'Ultra-luxury',
                                desc: 'Clifftop villas overlooking the desert. One of the most unique hotel experiences in Saudi Arabia.',
                                price: 'SAR 2,500–5,000/night',
                            },
                            {
                                name: 'Habitas AlUla',
                                type: 'Boutique',
                                desc: 'Eco-conscious desert camp with stylish rooms, restaurant, and a community vibe. Popular with younger travellers.',
                                price: 'SAR 1,000–1,800/night',
                            },
                            {
                                name: 'AlUla Hotels (City)',
                                type: 'Mid-range',
                                desc: 'Several three and four-star hotels in AlUla city centre. More affordable option, 15 km from Hegra.',
                                price: 'SAR 350–700/night',
                            },
                        ].map((hotel) => (
                            <div key={hotel.name} className="border rounded-lg p-4">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="font-semibold">{hotel.name}</div>
                                    <span className="text-xs bg-muted px-2 py-0.5 rounded shrink-0">{hotel.type}</span>
                                </div>
                                <div className="text-muted-foreground text-xs mt-1">{hotel.desc}</div>
                                <div className="text-primary text-xs font-medium mt-1">{hotel.price}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">Book AlUla accommodation well in advance during peak season (Dec–Feb) — rooms sell out months ahead.</p>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book a Tabuk → AlUla Private Transfer</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        We offer door-to-door transfers from Tabuk to AlUla. One-way, round trip, or full-day tours with an English-speaking driver who knows the route.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20want%20to%20book%20a%20private%20transfer%20from%20Tabuk%20to%20AlUla.%20Please%20share%20availability%20and%20price."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Tabuk → AlUla Transfer
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'Is AlUla worth visiting from Tabuk?',
                                a: "Yes. AlUla is one of Saudi Arabia's most spectacular destinations. It contains Hegra — Saudi Arabia's first UNESCO World Heritage Site — along with the AlUla Old Town, Dadan ruins, Elephant Rock, and Maraya concert hall. The 330 km drive from Tabuk takes 3.5–4 hours and is absolutely worth it for a day trip or overnight stay.",
                            },
                            {
                                q: 'How many days do you need in AlUla from Tabuk?',
                                a: 'For a day trip from Tabuk, you can see 1–2 main attractions (Hegra + Elephant Rock is the popular combination). For the full AlUla experience including Hegra, Dadan, Old Town, and surrounding landscapes, plan 2 nights minimum.',
                            },
                            {
                                q: 'What is AlUla known for?',
                                a: "AlUla is known for Hegra (Mada'in Salih) — over 100 Nabataean tombs carved into sandstone cliffs, Saudi Arabia's first UNESCO World Heritage Site. It is also famous for its dramatic desert landscapes, red sandstone mountains, AlUla Old Town, and the iconic Elephant Rock.",
                            },
                            {
                                q: 'What is the best time to visit AlUla?',
                                a: 'The best time to visit AlUla is October to March. Temperatures are comfortable (15–25°C), and the famous Winter at Tantora festival runs from December to March with outdoor concerts, markets, and events at Maraya. Summer (May–September) is too hot for comfortable outdoor sightseeing.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Plan Your AlUla Trip</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/how-to-get-from-tabuk-to-alula" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get from Tabuk to AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">Transport options, bus, rental, driver prices</div>
                        </Link>
                        <Link href="/blog/tabuk-to-alula-distance-drive-time" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to AlUla distance &amp; drive time</div>
                            <div className="text-muted-foreground text-xs mt-1">330 km, 3.5–4 hrs, fuel stops, tips</div>
                        </Link>
                        <Link href="/blog/hegra-madain-salih-how-to-visit-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Hegra — how to visit from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Tickets, opening hours, what to see</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport (TUU) transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Fly into Tabuk, transfer to AlUla</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City rides, intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your transfer</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, door-to-door service</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
