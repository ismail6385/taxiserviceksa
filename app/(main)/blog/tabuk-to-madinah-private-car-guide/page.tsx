import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Tabuk to Madinah — Private Car Guide 2026 (660 km Route)',
    description: 'How to get from Tabuk to Madinah by private car or hired driver. 660 km, 6–7 hours via the Hejaz. Prices, route, and tips for pilgrims and tourists.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tabuk-to-madinah-private-car-guide/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/tabuk-to-madinah-private-car-guide/',
            'ar': 'https://taxiserviceksa.com/blog/tabuk-to-madinah-private-car-guide/',
            'x-default': 'https://taxiserviceksa.com/blog/tabuk-to-madinah-private-car-guide/',
        },
    },
    openGraph: {
        title: 'Tabuk to Madinah — Private Car Guide 2026',
        description: '660 km from Tabuk to Madinah — 6 to 7 hours by private car. Route guide, prices, road tips, and what to know for pilgrims.',
        url: 'https://taxiserviceksa.com/blog/tabuk-to-madinah-private-car-guide/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tabuk to Madinah — Private Car Guide 2026',
    description: 'Complete guide to travelling from Tabuk to Madinah by private car: 660 km route, 6–7 hours, prices, fuel stops, and tips for pilgrims.',
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
            name: 'How far is Tabuk from Madinah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk is approximately 660 km from Madinah by road. The drive takes 6 to 7 hours via Route 15 south through the Hejaz highlands.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does a private car from Tabuk to Madinah cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A private driver from Tabuk to Madinah costs SAR 1,000–1,400 one-way depending on the vehicle. A sedan costs around SAR 1,000, an SUV SAR 1,200, and a larger vehicle or minivan SAR 1,300–1,400. This route is popular with pilgrims and families.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a direct bus from Tabuk to Madinah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'SAPTCO operates intercity bus services that cover the Tabuk to Madinah route. The journey takes approximately 8–10 hours. Check SAPTCO\'s website for current schedules and booking.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can non-Muslims travel from Tabuk to Madinah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Non-Muslims can travel to Madinah city and stay in hotels in the outer city area. However, the Haram (sacred area) around Masjid al-Nabawi is restricted to Muslims only. The road from Tabuk to Madinah is a public highway open to all visitors.',
            },
        },
    ],
};

export default function TabukToMadinahPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Intercity &rsaquo; Madinah</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Tabuk to Madinah — Private Car Guide (660 km Route)
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance:</strong> ~660 km via Route 15</li>
                        <li>⏱ <strong>Drive time:</strong> 6–7 hours</li>
                        <li>🚗 <strong>Private driver:</strong> SAR 1,000–1,400 one-way</li>
                        <li>🚌 <strong>SAPTCO bus:</strong> 8–10 hours, SAR 100–150</li>
                        <li>✈️ <strong>Flight:</strong> ~1.5 hrs (TUU → MED) — also available</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Tabuk to Madinah is one of Saudi Arabia&apos;s most historically significant routes — the ancient Hajj road from the Levant to the holy cities passed through this exact corridor for centuries. Today it is Route 15, a well-maintained highway through the Hejaz highlands. At 660 km, it is a long but scenic one-day drive.
                    </p>
                </section>

                {/* Quick stats */}
                <section className="mb-8">
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { value: '660 km', label: 'Distance' },
                            { value: '6–7 hrs', label: 'Drive time' },
                            { value: 'SAR 1,000+', label: 'Private driver' },
                        ].map((s) => (
                            <div key={s.label} className="bg-muted rounded-lg p-4 text-center">
                                <div className="text-lg font-bold text-primary">{s.value}</div>
                                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Transport options */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Transport Options: Tabuk → Madinah</h2>
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
                                    { opt: 'Private hired driver', time: '6–7 hrs', cost: 'SAR 1,000–1,400', best: 'Pilgrims, families, door-to-door' },
                                    { opt: 'Domestic flight (TUU→MED)', time: '~1.5 hrs', cost: 'SAR 150–400', best: 'Speed — but need onward transfer' },
                                    { opt: 'SAPTCO bus', time: '8–10 hrs', cost: 'SAR 100–150', best: 'Budget travellers' },
                                    { opt: 'Rental car', time: '6–7 hrs', cost: 'SAR 200–350/day + fuel', best: 'Independent travellers with IDP' },
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

                {/* Route */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Route: Tabuk to Madinah via Route 15</h2>
                    <div className="space-y-2">
                        {[
                            { km: '0 km', place: 'Tabuk', note: 'Start. Fill fuel. Take Route 15 south.' },
                            { km: '120 km', place: 'Al Ula junction', note: 'Pass through this area. AlUla city is 30 km east — optional stop.' },
                            { km: '280 km', place: 'Hejaz highlands', note: 'Road climbs into the mountains. Green, cooler, dramatic scenery.' },
                            { km: '420 km', place: 'Badr', note: 'Historic Islamic site. Small town, fuel, food. Worth a stop for Muslims.' },
                            { km: '550 km', place: 'Madinah outskirts', note: 'Ring road begins. Hotels and facilities on the approach.' },
                            { km: '660 km', place: 'Madinah city centre', note: 'Masjid al-Nabawi area. Hotels within walking distance of the mosque.' },
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

                {/* Pricing */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Private Driver Prices: Tabuk → Madinah</h2>
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
                                    { v: 'Sedan (Camry/Sonata)', p: '1–3', ow: 'SAR 1,000', rt: 'SAR 1,700' },
                                    { v: 'SUV (Fortuner/Prado)', p: '1–4', ow: 'SAR 1,200', rt: 'SAR 2,000' },
                                    { v: 'Large SUV (GMC Yukon)', p: '1–6', ow: 'SAR 1,400', rt: 'SAR 2,400' },
                                    { v: 'Minivan (H1/Hiace)', p: '5–7', ow: 'SAR 1,500', rt: 'SAR 2,600' },
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

                {/* Pilgrim note */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Note for Pilgrims &amp; Umrah Visitors</h2>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm">
                        <p className="text-muted-foreground mb-2">
                            Many pilgrims travel from Tabuk to Madinah by private car before continuing to Makkah. A private driver can take you door-to-door from your Tabuk hotel to your Madinah hotel near Masjid al-Nabawi.
                        </p>
                        <ul className="space-y-1 text-muted-foreground list-disc ml-4">
                            <li>Driver can wait in Madinah while you visit the mosque, then continue to Jeddah or Makkah</li>
                            <li>Ihram entry point (Meeqat) for Tabuk route is Dhul Hulayfah — near Madinah</li>
                            <li>Many families prefer private car to avoid crowded buses with luggage</li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book: Tabuk → Madinah Private Transfer</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Popular route for pilgrims and families. Door-to-door, luggage space, English or Arabic-speaking drivers.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20driver%20from%20Tabuk%20to%20Madinah.%20Please%20share%20availability%20and%20price."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Tabuk → Madinah Driver
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How far is Tabuk from Madinah?', a: 'Tabuk is approximately 660 km from Madinah by road. The drive takes 6 to 7 hours via Route 15 south through the Hejaz highlands.' },
                            { q: 'How much does a private car from Tabuk to Madinah cost?', a: 'A private driver from Tabuk to Madinah costs SAR 1,000–1,400 one-way depending on the vehicle. A sedan costs around SAR 1,000, an SUV SAR 1,200, and a larger vehicle or minivan SAR 1,300–1,400.' },
                            { q: 'Is there a direct bus from Tabuk to Madinah?', a: "SAPTCO operates intercity bus services that cover the Tabuk to Madinah route. The journey takes approximately 8–10 hours. Check SAPTCO's website for current schedules and booking." },
                            { q: 'Can non-Muslims travel from Tabuk to Madinah?', a: "Non-Muslims can travel to Madinah city and stay in hotels in the outer city area. However, the Haram (sacred area) around Masjid al-Nabawi is restricted to Muslims only. The road from Tabuk to Madinah is a public highway open to all visitors." },
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
                        <Link href="/blog/tabuk-to-jeddah-transport-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Jeddah</div>
                            <div className="text-muted-foreground text-xs mt-1">800 km, Red Sea coastal route</div>
                        </Link>
                        <Link href="/blog/tabuk-to-riyadh-transport-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Riyadh</div>
                            <div className="text-muted-foreground text-xs mt-1">1,400 km — fly recommended</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-tabuk-to-alula" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to AlUla</div>
                            <div className="text-muted-foreground text-xs mt-1">330 km, 3.5 hrs, Hegra</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">TUU all routes and prices</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City and intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your transfer</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, fixed prices</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
