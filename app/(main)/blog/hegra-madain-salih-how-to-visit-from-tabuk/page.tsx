import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Hegra (Mada\'in Salih) — How to Visit from Tabuk 2026',
    description: 'How to visit Hegra (Mada\'in Salih) from Tabuk. Distance, tickets, transport, opening hours, and what to expect at this UNESCO World Heritage Site.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/hegra-madain-salih-how-to-visit-from-tabuk/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/hegra-madain-salih-how-to-visit-from-tabuk/',
            'ar': 'https://taxiserviceksa.com/blog/hegra-madain-salih-how-to-visit-from-tabuk/',
            'x-default': 'https://taxiserviceksa.com/blog/hegra-madain-salih-how-to-visit-from-tabuk/',
        },
    },
    openGraph: {
        title: 'Hegra (Mada\'in Salih) — How to Visit from Tabuk 2026',
        description: 'UNESCO-listed Nabataean tombs at Hegra — how to get there from Tabuk, book tickets, and what to see at Saudi Arabia\'s most ancient site.',
        url: 'https://taxiserviceksa.com/blog/hegra-madain-salih-how-to-visit-from-tabuk/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Hegra (Mada'in Salih) — How to Visit from Tabuk 2026",
    description: 'Complete visitor guide to Hegra from Tabuk: transport, tickets, opening hours, what to see, and practical tips.',
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
            name: 'How do I get to Hegra from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Hegra is located about 345 km from Tabuk, near AlUla city. The fastest way is by private car or hired driver — a 3.5 to 4 hour drive via Route 375 south. There is no direct public transport from Tabuk to Hegra.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need to book Hegra tickets in advance?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Hegra (Mada\'in Salih) requires pre-booked tickets purchased through the Experience AlUla website or app. Walk-in entry is not guaranteed and is often unavailable, especially during peak season (October to March). Book at least 48 hours in advance.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Hegra worth visiting from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. Hegra is Saudi Arabia\'s first UNESCO World Heritage Site and contains over 100 well-preserved Nabataean tombs carved into sandstone mountains. It is one of the most impressive ancient sites in the Middle East, comparable to Petra in Jordan. The 3.5-hour drive from Tabuk is very much worth it.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best time to visit Hegra from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best time to visit Hegra is between October and March when temperatures are comfortable (15–25°C). Summer temperatures exceed 40°C, making outdoor site visits very difficult. Leave Tabuk early in the morning (6–7am) to arrive and tour the site before midday heat.',
            },
        },
    ],
};

export default function HegraMadainSalihPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; AlUla &rsaquo; Hegra Visitor Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Hegra (Mada&apos;in Salih) — How to Visit from Tabuk
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 6 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance from Tabuk:</strong> ~345 km (near AlUla)</li>
                        <li>⏱ <strong>Drive time:</strong> 3.5 – 4 hours</li>
                        <li>🎟 <strong>Tickets:</strong> Must be pre-booked via Experience AlUla app</li>
                        <li>🌡 <strong>Best season:</strong> October – March</li>
                        <li>🚗 <strong>Transport:</strong> Private driver from Tabuk (SAR 700–900)</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Hegra — also known by its Arabic name Mada&apos;in Salih — is Saudi Arabia&apos;s most spectacular ancient site. Over 100 monumental Nabataean tombs are carved directly into sandstone rock formations, dating back more than 2,000 years. In 2008 it became Saudi Arabia&apos;s first UNESCO World Heritage Site.
                    </p>
                    <p>
                        From Tabuk, Hegra is about 345 km southeast — a 3.5 to 4 hour drive that passes through dramatic desert landscapes. This guide tells you exactly how to get there, what to book, and what to expect when you arrive.
                    </p>
                </section>

                {/* What is Hegra */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What Is Hegra?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        {[
                            { value: '2,000+', label: 'Years old' },
                            { value: '111', label: 'Carved tombs' },
                            { value: 'UNESCO', label: 'World Heritage Site' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-muted rounded-lg p-4 text-center">
                                <div className="text-xl font-bold text-primary">{stat.value}</div>
                                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Hegra was the southern capital of the Nabataean Kingdom — the same civilisation that built Petra in Jordan. The tombs are carved into massive sandstone outcrops called &quot;jebels&quot; (mountains). Unlike Petra, Hegra is far less visited, meaning you often have the site almost to yourself during quieter months.
                    </p>
                </section>

                {/* How to get there */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Getting from Tabuk to Hegra</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Hegra is located about 20 km north of AlUla city, so the journey from Tabuk is essentially the same as Tabuk to AlUla with an extra 15–20 minutes to reach the Hegra site entrance.
                    </p>
                    <div className="overflow-x-auto mb-4">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">From</th>
                                    <th className="border px-3 py-2 text-left">To</th>
                                    <th className="border px-3 py-2 text-left">Distance</th>
                                    <th className="border px-3 py-2 text-left">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2">Tabuk City</td>
                                    <td className="border px-3 py-2">AlUla City</td>
                                    <td className="border px-3 py-2">330 km</td>
                                    <td className="border px-3 py-2">3.5 hrs</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2">AlUla City</td>
                                    <td className="border px-3 py-2">Hegra Entrance</td>
                                    <td className="border px-3 py-2">15 km</td>
                                    <td className="border px-3 py-2">15 min</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-semibold">Tabuk City</td>
                                    <td className="border px-3 py-2 font-semibold">Hegra Entrance</td>
                                    <td className="border px-3 py-2 font-semibold">~345 km</td>
                                    <td className="border px-3 py-2 font-semibold">~4 hrs</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
                        <p className="font-semibold text-amber-800 mb-1">Important:</p>
                        <p className="text-amber-700">Visitors cannot drive their own vehicles inside the Hegra archaeological site. A shuttle bus from the Hegra Visitor Centre takes you to the tomb areas. Your transport (private car or rental) stays at the visitor centre car park.</p>
                    </div>
                </section>

                {/* Tickets */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Booking Hegra Tickets</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        Entry to Hegra must be pre-booked. You cannot show up without a ticket. Tickets are sold through the official Experience AlUla platform.
                    </p>
                    <div className="space-y-3">
                        {[
                            {
                                step: '1',
                                title: 'Download the Experience AlUla app',
                                desc: 'Available on iOS and Android. Create an account with your email and passport details.',
                            },
                            {
                                step: '2',
                                title: 'Select Hegra and choose a date',
                                desc: 'Entry is by time slot. Morning slots (8am–11am) are best to avoid heat. Book at least 48–72 hours in advance during peak season.',
                            },
                            {
                                step: '3',
                                title: 'Pay and receive confirmation',
                                desc: 'Tickets cost SAR 95 per adult (2026 pricing). Children under 12 are free. The ticket includes the shuttle bus inside the site.',
                            },
                            {
                                step: '4',
                                title: 'Present QR code at the gate',
                                desc: 'Show your ticket on your phone at the Hegra Visitor Centre entrance. Download it offline in case of poor signal.',
                            },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-4 border rounded-lg p-4 text-sm">
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">{item.title}</div>
                                    <div className="text-muted-foreground">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What to see */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What to See at Hegra</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            {
                                name: 'Qasr Al Farid',
                                desc: 'The most photographed tomb — a single massive rock with an unfinished four-storey facade. Also called "The Lonely Castle".',
                            },
                            {
                                name: 'Jabal Al Ahmar',
                                desc: 'The Red Mountain cluster — multiple tombs in the red sandstone face, with excellent preserved inscriptions.',
                            },
                            {
                                name: 'Jabal Al Banat',
                                desc: 'Mountain of the girls — a cluster of large tombs with richly decorated facades and carved Nabataean text.',
                            },
                            {
                                name: 'Jabal Ithlib',
                                desc: 'An ancient Nabataean temple and processional route carved into a natural rock canyon. Particularly atmospheric.',
                            },
                            {
                                name: 'Diwan of Jabal Ithlib',
                                desc: 'A large rock-cut hall used for religious banquets and gatherings by the Nabataeans.',
                            },
                            {
                                name: 'Hegra Visitor Centre',
                                desc: 'Start here. Museum displays, orientation film, café, and toilets. Site shuttle departs from here.',
                            },
                        ].map((place) => (
                            <div key={place.name} className="border rounded-lg p-3">
                                <div className="font-semibold mb-1">{place.name}</div>
                                <div className="text-muted-foreground text-xs">{place.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Practical info */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Practical Information</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2 font-medium bg-muted">Opening hours</td>
                                    <td className="border px-3 py-2">8am – 6pm (site closes for entry at 4pm)</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium bg-muted">Closed days</td>
                                    <td className="border px-3 py-2">Tuesday (check latest schedule — may vary)</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium bg-muted">Ticket price</td>
                                    <td className="border px-3 py-2">SAR 95 adult / Free for children under 12</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium bg-muted">Time needed</td>
                                    <td className="border px-3 py-2">3–4 hours minimum on site</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium bg-muted">Dress code</td>
                                    <td className="border px-3 py-2">Modest clothing required — covered shoulders and knees for all visitors</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium bg-muted">Photography</td>
                                    <td className="border px-3 py-2">Permitted throughout. No flash photography inside structures.</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium bg-muted">Food &amp; water</td>
                                    <td className="border px-3 py-2">Café at visitor centre. Bring extra water — site is exposed desert.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book a Tabuk → Hegra Private Transfer</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        We run daily transfers from Tabuk to AlUla and Hegra. Round trip with waiting available — driver waits at AlUla while you tour the site. English-speaking drivers.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20driver%20from%20Tabuk%20to%20Hegra%20%2F%20AlUla.%20Please%20share%20availability%20and%20round%20trip%20price."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Tabuk → Hegra Transfer
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How do I get to Hegra from Tabuk?',
                                a: 'Hegra is located about 345 km from Tabuk, near AlUla city. The fastest way is by private car or hired driver — a 3.5 to 4 hour drive via Route 375 south. There is no direct public transport from Tabuk to Hegra.',
                            },
                            {
                                q: 'Do I need to book Hegra tickets in advance?',
                                a: "Yes, Hegra (Mada'in Salih) requires pre-booked tickets purchased through the Experience AlUla website or app. Walk-in entry is not guaranteed and is often unavailable, especially during peak season (October to March). Book at least 48 hours in advance.",
                            },
                            {
                                q: 'Is Hegra worth visiting from Tabuk?',
                                a: "Absolutely. Hegra is Saudi Arabia's first UNESCO World Heritage Site and contains over 100 well-preserved Nabataean tombs carved into sandstone mountains. It is one of the most impressive ancient sites in the Middle East, comparable to Petra in Jordan. The 3.5-hour drive from Tabuk is very much worth it.",
                            },
                            {
                                q: 'What is the best time to visit Hegra from Tabuk?',
                                a: 'The best time to visit Hegra is between October and March when temperatures are comfortable (15–25°C). Summer temperatures exceed 40°C, making outdoor site visits very difficult. Leave Tabuk early in the morning (6–7am) to arrive and tour the site before midday heat.',
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
                    <h2 className="text-xl font-bold mb-4">Related Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/how-to-get-from-tabuk-to-alula" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get from Tabuk to AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">Transport options, pricing, route</div>
                        </Link>
                        <Link href="/blog/tabuk-to-alula-distance-drive-time" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to AlUla distance &amp; drive time</div>
                            <div className="text-muted-foreground text-xs mt-1">330 km, milestone map, fuel stops</div>
                        </Link>
                        <Link href="/blog/alula-visitor-guide-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">AlUla visitor guide from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Full AlUla trip planning from Tabuk</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport (TUU) transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Fly into Tabuk, transfer to AlUla</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City rides, long-distance, fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your transfer</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, English-speaking drivers</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
