import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Tabuk to Jeddah — Distance, Drive Time & Transport Options 2026',
    description: 'How to get from Tabuk to Jeddah. 800 km by road (8–9 hours) or 1.5 hour flight. Private driver prices, road route, and what to know.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tabuk-to-jeddah-transport-guide/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/tabuk-to-jeddah-transport-guide/',
            'ar': 'https://taxiserviceksa.com/blog/tabuk-to-jeddah-transport-guide/',
            'x-default': 'https://taxiserviceksa.com/blog/tabuk-to-jeddah-transport-guide/',
        },
    },
    openGraph: {
        title: 'Tabuk to Jeddah — Distance, Drive Time & Transport Options 2026',
        description: 'Tabuk to Jeddah: 800 km by road or 1.5 hours by air. Full transport guide with prices, route, and private driver options.',
        url: 'https://taxiserviceksa.com/blog/tabuk-to-jeddah-transport-guide/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tabuk to Jeddah — Distance, Drive Time & Transport Options 2026',
    description: 'Complete guide to travelling from Tabuk to Jeddah: 800 km by road, 1.5 hour flight, private driver prices, and road route via the Hejaz.',
    author: { '@type': 'Person', name: 'Taxi Service KSA Editorial Team' },
    publisher: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
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
            name: 'How far is Tabuk from Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk is approximately 800 km from Jeddah by road. The drive takes 8 to 9 hours via Route 15 south through the Hejaz Mountains. By air the flight takes around 1.5 hours.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get from Tabuk to Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The fastest way is by domestic flight — about 1.5 hours from TUU to JED. Driving takes 8–9 hours via Route 15 and is a viable option for those who want to see the Hejaz countryside. Private hired drivers cover this route for SAR 1,400–1,800 one-way. SAPTCO buses also run but take 10–12 hours.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long does it take to drive from Tabuk to Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The drive from Tabuk to Jeddah takes approximately 8 to 9 hours covering around 800 km via Route 15 south. The road passes through Al Wajh, Umluj, and the Red Sea coastal mountains before reaching Jeddah.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a private driver from Tabuk to Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Private drivers cover the Tabuk to Jeddah route regularly. The cost is SAR 1,400–1,800 one-way depending on vehicle type. This is popular for families with luggage, pilgrims heading to Makkah via Jeddah, and travellers who prefer door-to-door service.',
            },
        },
    ],
};

export default function TabukToJeddahPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Intercity &rsaquo; Jeddah</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Tabuk to Jeddah — Distance, Drive Time &amp; Transport Guide
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance:</strong> ~800 km by road</li>
                        <li>⏱ <strong>Drive time:</strong> 8–9 hours via Route 15</li>
                        <li>✈️ <strong>Flight:</strong> ~1.5 hours (TUU → JED)</li>
                        <li>🚗 <strong>Private driver:</strong> SAR 1,400–1,800 one-way</li>
                        <li>🛣 <strong>Route:</strong> Via Al Wajh, Umluj, Red Sea coast</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Tabuk to Jeddah is one of Saudi Arabia&apos;s most scenic intercity routes — the road hugs the Red Sea coast for much of the journey, passing fishing towns, coastal mountains, and the Hejaz highlands. At 800 km, it is long but doable by car in a day. For those in a hurry, the 1.5-hour flight is the obvious choice.
                    </p>
                </section>

                {/* Transport options */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">All Options: Tabuk → Jeddah</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Option</th>
                                    <th className="border px-3 py-2 text-left">Time</th>
                                    <th className="border px-3 py-2 text-left">Cost</th>
                                    <th className="border px-3 py-2 text-left">Best for</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { opt: 'Domestic flight (TUU→JED)', time: '~1.5 hrs', cost: 'SAR 150–450', best: 'Most travellers' },
                                    { opt: 'Private hired driver', time: '8–9 hrs', cost: 'SAR 1,400–1,800', best: 'Families, pilgrims, door-to-door' },
                                    { opt: 'SAPTCO bus', time: '10–12 hrs', cost: 'SAR 100–150', best: 'Budget travellers' },
                                    { opt: 'Rental car', time: '8–9 hrs', cost: 'SAR 200–350/day + fuel', best: 'Independent road trippers' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.opt}</td>
                                        <td className="border px-3 py-2">{row.time}</td>
                                        <td className="border px-3 py-2">{row.cost}</td>
                                        <td className="border px-3 py-2">{row.best}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* The drive */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">The Drive: Route 15 Coastal Road</h2>
                    <p className="text-sm text-muted-foreground mb-3">The Tabuk–Jeddah road via Route 15 is one of the most scenic drives in Saudi Arabia. It passes through:</p>
                    <div className="space-y-2">
                        {[
                            { km: '0 km', place: 'Tabuk', note: 'Fill fuel. Head south on Route 15.' },
                            { km: '220 km', place: 'Al Wajh', note: 'Coastal town, Red Sea views, fuel stop. ~2.5 hrs from Tabuk.' },
                            { km: '380 km', place: 'Umluj', note: 'The "Maldives of Saudi Arabia" — turquoise lagoons. Worth a stop.' },
                            { km: '500 km', place: 'Al Muwayh junction', note: 'Hejaz Mountains begin. Road climbs into green highlands.' },
                            { km: '650 km', place: 'Rabigh', note: 'Last major town before Jeddah. Fuel and food available.' },
                            { km: '800 km', place: 'Jeddah', note: 'City centre, Corniche, King Abdulaziz Airport (JED).' },
                        ].map((s) => (
                            <div key={s.km} className="flex gap-4 border rounded-lg p-3 text-sm">
                                <div className="w-16 font-bold text-primary shrink-0">{s.km}</div>
                                <div>
                                    <div className="font-semibold">{s.place}</div>
                                    <div className="text-muted-foreground text-xs">{s.note}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Private driver prices */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Private Driver Prices: Tabuk → Jeddah</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Vehicle</th>
                                    <th className="border px-3 py-2 text-left">Passengers</th>
                                    <th className="border px-3 py-2 text-left">One-Way</th>
                                    <th className="border px-3 py-2 text-left">Round Trip</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { v: 'Sedan (Camry/Sonata)', p: '1–3', ow: 'SAR 1,400', rt: 'SAR 2,400' },
                                    { v: 'SUV (Fortuner/Prado)', p: '1–4', ow: 'SAR 1,600', rt: 'SAR 2,800' },
                                    { v: 'Large SUV (GMC Yukon)', p: '1–6', ow: 'SAR 1,800', rt: 'SAR 3,200' },
                                    { v: 'Minivan (H1/Hiace)', p: '5–7', ow: 'SAR 1,900', rt: 'SAR 3,400' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.v}</td>
                                        <td className="border px-3 py-2">{row.p}</td>
                                        <td className="border px-3 py-2">{row.ow}</td>
                                        <td className="border px-3 py-2">{row.rt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book a Private Driver: Tabuk → Jeddah</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Door-to-door service from Tabuk to Jeddah. Popular with families and pilgrims heading to Makkah. English-speaking drivers available.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20driver%20from%20Tabuk%20to%20Jeddah.%20Please%20share%20availability%20and%20price."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Tabuk → Jeddah Transfer
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How far is Tabuk from Jeddah?', a: 'Tabuk is approximately 800 km from Jeddah by road. The drive takes 8 to 9 hours via Route 15 south through the Hejaz Mountains. By air the flight takes around 1.5 hours.' },
                            { q: 'How do I get from Tabuk to Jeddah?', a: 'The fastest way is by domestic flight — about 1.5 hours from TUU to JED. Driving takes 8–9 hours via Route 15 and is a viable option for those who want to see the Hejaz countryside. Private hired drivers cover this route for SAR 1,400–1,800 one-way.' },
                            { q: 'How long does it take to drive from Tabuk to Jeddah?', a: 'The drive from Tabuk to Jeddah takes approximately 8 to 9 hours covering around 800 km via Route 15 south. The road passes through Al Wajh, Umluj, and the Red Sea coastal mountains before reaching Jeddah.' },
                            { q: 'Is there a private driver from Tabuk to Jeddah?', a: 'Yes. Private drivers cover the Tabuk to Jeddah route regularly. The cost is SAR 1,400–1,800 one-way depending on vehicle type. This is popular for families with luggage, pilgrims heading to Makkah via Jeddah, and travellers who prefer door-to-door service.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">More Intercity Routes from Tabuk</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/tabuk-to-madinah-private-car-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Madinah</div>
                            <div className="text-muted-foreground text-xs mt-1">660 km, 6–7 hrs, pilgrim route</div>
                        </Link>
                        <Link href="/blog/tabuk-to-riyadh-transport-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Riyadh</div>
                            <div className="text-muted-foreground text-xs mt-1">1,400 km — fly recommended</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-tabuk-to-alula" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">330 km, 3.5 hrs, private car</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">TUU pickups for all flights</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Full fleet, intercity routes</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your transfer</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, door-to-door</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
