import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Best Red Sea Beaches Near Tabuk — Snorkelling & Coastal Guide 2026',
    description: 'The best beaches and snorkelling spots near Tabuk on the Red Sea and Gulf of Aqaba. Haql, Sharma, Al Wajh, and more — with access tips and transport.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/best-red-sea-beaches-near-tabuk/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/best-red-sea-beaches-near-tabuk/',
            'ar': 'https://taxiserviceksa.com/blog/best-red-sea-beaches-near-tabuk/',
            'x-default': 'https://taxiserviceksa.com/blog/best-red-sea-beaches-near-tabuk/',
        },
    },
    openGraph: {
        title: 'Best Red Sea Beaches Near Tabuk — Snorkelling & Coastal Guide 2026',
        description: 'Top Red Sea beaches near Tabuk: Haql, Sharma, Al Wajh coast, and NEOM coastline. What to see, how to get there, and best season.',
        url: 'https://taxiserviceksa.com/blog/best-red-sea-beaches-near-tabuk/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Red Sea Beaches Near Tabuk — Snorkelling & Coastal Guide 2026',
    description: 'Guide to the best beaches and coastal areas within reach of Tabuk: Haql, Sharma, Al Wajh, and the NEOM coastline, with distances and access tips.',
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
            name: 'Are there beaches near Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Tabuk is in northwestern Saudi Arabia and is the closest major city to the Gulf of Aqaba and the Red Sea coast. The nearest beach is roughly 190 km away near Sharma in the NEOM region, with more beaches at Haql (290 km) and Al Wajh (220 km south). These are some of the most pristine and least-visited beaches in the world.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is snorkelling good near Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Red Sea and Gulf of Aqaba near Tabuk offer exceptional snorkelling — clear visibility up to 30 metres, vibrant coral reefs, and abundant marine life. The Haql area is particularly famous for the SS Georgios G shipwreck, which is accessible directly from the shore.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get from Tabuk to the beach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'There is no public transport from Tabuk to the coastal areas. A private driver or rental car is required. The closest accessible beach (Sharma coastal area) is about 190 km and 2 hours from Tabuk. Haql is 290 km (3 hours). A private driver from Tabuk to the coast costs SAR 450–700 depending on destination.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best beach near Tabuk for families?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Haql is generally the most accessible and family-friendly beach near Tabuk. It has a proper town nearby with basic facilities, the famous shipwreck for snorkelling, and calm shallow waters. The Sharma area is more remote but has more dramatic scenery.',
            },
        },
    ],
};

const beaches = [
    {
        name: 'Haql Beach',
        dist: '290 km',
        time: '3 hrs',
        highlight: 'SS Georgios G shipwreck, Gulf of Aqaba views',
        access: 'Public road, small town facilities',
        snorkel: '⭐⭐⭐⭐⭐',
        swim: '⭐⭐⭐⭐',
        facilities: '⭐⭐⭐',
        best: 'Snorkelling, photography',
    },
    {
        name: 'Sharma Coast (NEOM)',
        dist: '190 km',
        time: '2 hrs',
        highlight: 'Dramatic mountains meeting sea, pristine coral',
        access: 'NEOM coastal road — public highway accessible',
        snorkel: '⭐⭐⭐⭐⭐',
        swim: '⭐⭐⭐⭐⭐',
        facilities: '⭐⭐',
        best: 'Wilderness, unspoilt beach',
    },
    {
        name: 'Al Wajh Coast',
        dist: '220 km south',
        time: '2.5 hrs',
        highlight: 'Mangroves, coral islands, sea turtles',
        access: 'Public road, small town',
        snorkel: '⭐⭐⭐⭐',
        swim: '⭐⭐⭐⭐',
        facilities: '⭐⭐⭐',
        best: 'Nature, boat trips',
    },
    {
        name: 'Duba Coast',
        dist: '260 km south',
        time: '2.5 hrs',
        highlight: 'Red Sea port town, fishing boats, local atmosphere',
        access: 'Public road, town with services',
        snorkel: '⭐⭐⭐',
        swim: '⭐⭐⭐',
        facilities: '⭐⭐⭐⭐',
        best: 'Cultural experience, food',
    },
];

export default function BestRedSeaBeachesTabukPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Red Sea &rsaquo; Beach Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Best Red Sea Beaches Near Tabuk — Snorkelling &amp; Coastal Guide
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 6 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>🏖 <strong>Closest beach:</strong> Sharma coast, 190 km (2 hrs from Tabuk)</li>
                        <li>🤿 <strong>Best snorkelling:</strong> Haql — shipwreck + coral reef</li>
                        <li>🏝 <strong>Most remote:</strong> NEOM coastal zone (pristine, no facilities)</li>
                        <li>🚗 <strong>Transport:</strong> Private car only — no public buses to coast</li>
                        <li>🌡 <strong>Best season:</strong> October – April</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Tabuk sits at the gateway to one of the world&apos;s most spectacular and least-visited stretches of coastline. The Gulf of Aqaba and the northwestern Red Sea are home to some of the clearest waters on earth — with coral reefs, shipwrecks, and sea life that rival anything in the Indian Ocean. And almost no one knows about them.
                    </p>
                    <p>
                        None of these beaches are within walking distance of Tabuk city — you need a car. But for anyone willing to drive 2–3 hours, the reward is extraordinary.
                    </p>
                </section>

                {/* Beach comparison */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Best Coastal Spots Near Tabuk — At a Glance</h2>
                    <div className="space-y-4">
                        {beaches.map((b, i) => (
                            <div key={i} className="border rounded-lg p-4 text-sm">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="font-bold text-base">{b.name}</h3>
                                    <div className="text-right shrink-0">
                                        <div className="text-primary font-semibold">{b.dist}</div>
                                        <div className="text-xs text-muted-foreground">{b.time} drive</div>
                                    </div>
                                </div>
                                <p className="text-muted-foreground mb-3">{b.highlight}</p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs mb-2">
                                    <div><span className="text-muted-foreground">Snorkelling: </span>{b.snorkel}</div>
                                    <div><span className="text-muted-foreground">Swimming: </span>{b.swim}</div>
                                    <div><span className="text-muted-foreground">Facilities: </span>{b.facilities}</div>
                                    <div><span className="text-muted-foreground">Best for: </span>{b.best}</div>
                                </div>
                                <div className="text-xs text-muted-foreground border-t pt-2 mt-2">Access: {b.access}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Haql detail */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Haql — The Best Day Trip from Tabuk</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Haql is the most rewarding coastal day trip from Tabuk. The town sits on the Gulf of Aqaba with Jordan visible across the narrow strait — on a clear day you can see Aqaba&apos;s port cranes and the hills of Israel beyond.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm mb-4">
                        <p className="font-semibold text-blue-800 mb-2">The SS Georgios G Shipwreck</p>
                        <p className="text-blue-700">A Greek cargo ship that grounded near Haql in 1978. The rust-red hull is partially above water and the wreck can be snorkelled in very shallow water from shore — no boat or diving certification required. One of the most accessible shipwrecks in the world.</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Bring your own snorkel mask — there is no rental equipment in Haql. The water is warm year-round (24–29°C) but October to April is ideal for comfort on land.
                    </p>
                </section>

                {/* Sharma */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Sharma (NEOM Coast) — Untouched Wilderness</h2>
                    <p className="text-sm text-muted-foreground mb-3">
                        The Sharma coastal area within the NEOM region is the closest beach to Tabuk (190 km). It is accessible via the main coastal highway but has virtually no tourist infrastructure — no hotels, no restaurants, no rentals. You bring everything you need.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="border rounded-lg p-3">
                            <div className="font-semibold mb-2">What to bring</div>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>All food and water for the day</li>
                                <li>Snorkel mask and fins</li>
                                <li>Sun protection (very exposed)</li>
                                <li>Full fuel tank — no stations</li>
                                <li>Offline maps downloaded</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-3">
                            <div className="font-semibold mb-2">What to expect</div>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>Crystal clear water, minimal visitors</li>
                                <li>Mountains dropping straight to sea</li>
                                <li>Dramatic landscape unlike anything nearby</li>
                                <li>No crowds, no noise</li>
                                <li>Basic camping possible (bring gear)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Transport */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Getting to the Beaches from Tabuk</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Destination</th>
                                    <th className="border px-3 py-2 text-left">Distance</th>
                                    <th className="border px-3 py-2 text-left">Time</th>
                                    <th className="border px-3 py-2 text-left">Private Driver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: 'Sharma (NEOM coast)', dist: '190 km', time: '2 hrs', price: 'SAR 450–550' },
                                    { dest: 'Al Wajh', dist: '220 km', time: '2.5 hrs', price: 'SAR 450–600' },
                                    { dest: 'Haql', dist: '290 km', time: '3 hrs', price: 'SAR 500–650' },
                                    { dest: 'Duba', dist: '260 km', time: '2.5 hrs', price: 'SAR 480–620' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.dest}</td>
                                        <td className="border px-3 py-2">{row.dist}</td>
                                        <td className="border px-3 py-2">{row.time}</td>
                                        <td className="border px-3 py-2">{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book a Coastal Day Trip from Tabuk</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Private driver day trips to Haql, Sharma, Al Wajh, and all Red Sea coastal areas. Driver waits while you explore.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20want%20to%20book%20a%20day%20trip%20to%20the%20Red%20Sea%20coast%20from%20Tabuk.%20Please%20share%20options%20and%20prices."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Red Sea Day Trip
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Are there beaches near Tabuk?', a: 'Yes. Tabuk is in northwestern Saudi Arabia and is the closest major city to the Gulf of Aqaba and the Red Sea coast. The nearest beach is roughly 190 km away near Sharma in the NEOM region, with more beaches at Haql (290 km) and Al Wajh (220 km south). These are some of the most pristine beaches in the world.' },
                            { q: 'Is snorkelling good near Tabuk?', a: 'The Red Sea and Gulf of Aqaba near Tabuk offer exceptional snorkelling — clear visibility up to 30 metres, vibrant coral reefs, and abundant marine life. The Haql area is particularly famous for the SS Georgios G shipwreck, which is accessible directly from the shore.' },
                            { q: 'How do I get from Tabuk to the beach?', a: 'There is no public transport from Tabuk to the coastal areas. A private driver or rental car is required. The closest accessible beach (Sharma coastal area) is about 190 km and 2 hours from Tabuk. Haql is 290 km (3 hours). A private driver from Tabuk to the coast costs SAR 450–700 depending on destination.' },
                            { q: 'What is the best beach near Tabuk for families?', a: 'Haql is generally the most accessible and family-friendly beach near Tabuk. It has a proper town nearby with basic facilities, the famous shipwreck for snorkelling, and calm shallow waters. The Sharma area is more remote but has more dramatic scenery.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Related Tabuk Coastal Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/tabuk-to-haql-transport-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Haql — transport guide</div>
                            <div className="text-muted-foreground text-xs mt-1">290 km, shipwreck, prices</div>
                        </Link>
                        <Link href="/blog/tabuk-to-sharma-beach-how-to-get-there" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Sharma beach</div>
                            <div className="text-muted-foreground text-xs mt-1">NEOM coastal zone, 190 km, access guide</div>
                        </Link>
                        <Link href="/blog/can-tourists-visit-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Can tourists visit NEOM from Tabuk?</div>
                            <div className="text-muted-foreground text-xs mt-1">Access zones, permits, what&apos;s open</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Fly in, explore the coast</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City and intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your driver</div>
                            <div className="text-muted-foreground text-xs mt-1">Fixed prices, English-speaking</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
