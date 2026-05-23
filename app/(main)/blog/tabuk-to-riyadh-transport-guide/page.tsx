import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Tabuk to Riyadh — Distance, Flight, Drive & Transfer Guide 2026',
    description: 'How to get from Tabuk to Riyadh. Fly in 2 hours or drive 1,400 km. Flight prices, private transfer costs, and what to expect on this intercity route.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tabuk-to-riyadh-transport-guide/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/tabuk-to-riyadh-transport-guide/',
            'ar': 'https://taxiserviceksa.com/blog/tabuk-to-riyadh-transport-guide/',
            'x-default': 'https://taxiserviceksa.com/blog/tabuk-to-riyadh-transport-guide/',
        },
    },
    openGraph: {
        title: 'Tabuk to Riyadh — Distance, Flight, Drive & Transfer Guide 2026',
        description: 'Tabuk to Riyadh is 1,400 km by road or 2 hours by air. All transport options with prices, travel times, and honest recommendations.',
        url: 'https://taxiserviceksa.com/blog/tabuk-to-riyadh-transport-guide/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tabuk to Riyadh — Distance, Flight, Drive & Transfer Guide 2026',
    description: 'Complete guide to travelling from Tabuk to Riyadh: flights, private car, SAPTCO bus, drive time, and prices for all options.',
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
            name: 'How far is Tabuk from Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tabuk is approximately 1,400 km from Riyadh by road — around 13–14 hours of driving. By air, the distance is closer to 1,100 km and the flight takes about 2 hours. Flying is by far the most practical option for this route.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a flight from Tabuk to Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Multiple daily flights operate between Tabuk Airport (TUU) and Riyadh King Khalid International Airport (RUH) with Saudia, flyadeal, and flynas. Flight time is approximately 2 hours. Prices range from SAR 150–600 depending on airline and advance booking.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I drive from Tabuk to Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, you can drive from Tabuk to Riyadh. The distance is around 1,400 km via Route 15 south then the main Riyadh highway — approximately 13–14 hours without stops. This is a very long drive and only practical if you are moving belongings or have no other option. Flying is strongly recommended.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a bus from Tabuk to Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'SAPTCO operates an intercity bus route between Tabuk and Riyadh. The journey takes approximately 18–20 hours and costs around SAR 150–200. It is a long, uncomfortable option — flying is preferable for most travellers.',
            },
        },
    ],
};

export default function TabukToRiyadhPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Intercity &rsaquo; Riyadh</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Tabuk to Riyadh — Distance, Flight &amp; Transport Guide 2026
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>✈️ <strong>Best option:</strong> Fly — 2 hours, SAR 150–600</li>
                        <li>🚗 <strong>Drive:</strong> 1,400 km, 13–14 hours — not recommended</li>
                        <li>🚌 <strong>Bus (SAPTCO):</strong> 18–20 hours — budget option only</li>
                        <li>📍 <strong>Airports:</strong> TUU (Tabuk) → RUH (Riyadh)</li>
                        <li>🔄 <strong>Frequency:</strong> Multiple flights daily</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Tabuk and Riyadh are at opposite ends of Saudi Arabia — the northwest and the central interior. At 1,400 km by road, this is not a route you want to drive unless you have a very good reason. Fortunately, the flight takes just 2 hours and runs multiple times daily at competitive prices.
                    </p>
                </section>

                {/* All options */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">All Transport Options: Tabuk → Riyadh</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Option</th>
                                    <th className="border px-3 py-2 text-left">Time</th>
                                    <th className="border px-3 py-2 text-left">Cost</th>
                                    <th className="border px-3 py-2 text-left">Verdict</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { opt: 'Domestic flight (TUU→RUH)', time: '~2 hrs', cost: 'SAR 150–600', verdict: '✅ Best option' },
                                    { opt: 'Private car / hired driver', time: '13–14 hrs', cost: 'SAR 2,500–4,000', verdict: '⚠️ Only for cargo/move' },
                                    { opt: 'SAPTCO bus', time: '18–20 hrs', cost: 'SAR 150–200', verdict: '⚠️ Budget only' },
                                    { opt: 'Rental car', time: '13–14 hrs', cost: 'SAR 200–400/day + fuel', verdict: '❌ Not practical' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.opt}</td>
                                        <td className="border px-3 py-2">{row.time}</td>
                                        <td className="border px-3 py-2">{row.cost}</td>
                                        <td className="border px-3 py-2">{row.verdict}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Flights */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Flights: Tabuk (TUU) to Riyadh (RUH)</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        {[
                            { label: 'Flight time', value: '~2 hours' },
                            { label: 'Daily flights', value: '4–8 per day' },
                            { label: 'Price range', value: 'SAR 150–600' },
                        ].map((s) => (
                            <div key={s.label} className="bg-muted rounded-lg p-4 text-center">
                                <div className="text-lg font-bold text-primary">{s.value}</div>
                                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Airline</th>
                                    <th className="border px-3 py-2 text-left">Type</th>
                                    <th className="border px-3 py-2 text-left">Price (economy)</th>
                                    <th className="border px-3 py-2 text-left">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { airline: 'Saudia', type: 'Full service', price: 'SAR 250–600', note: 'Luggage included, meals on some flights' },
                                    { airline: 'flyadeal', type: 'Budget', price: 'SAR 150–350', note: 'Luggage extra, book early for best price' },
                                    { airline: 'flynas', type: 'Budget', price: 'SAR 150–350', note: 'Luggage extra, frequent promotions' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.airline}</td>
                                        <td className="border px-3 py-2">{row.type}</td>
                                        <td className="border px-3 py-2">{row.price}</td>
                                        <td className="border px-3 py-2 text-muted-foreground text-xs">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Book via Saudia.com, flyadeal.com, flynas.com, or comparison sites like Google Flights or Almosafer.</p>
                </section>

                {/* Airport transfers */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Airport Transfers at Both Ends</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Tabuk side (TUU)</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>TUU is 14 km from city centre</li>
                                <li>Pre-booked transfer: SAR 60–100</li>
                                <li>Uber/Careem: unreliable at airport</li>
                                <li>Book in advance for guaranteed pickup</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Riyadh side (RUH)</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>RUH is 35 km from Riyadh city centre</li>
                                <li>Uber/Careem widely available at RUH</li>
                                <li>Metro Line 4 connects airport to city</li>
                                <li>Private transfer: SAR 80–150</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Drive info */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Driving Tabuk to Riyadh — Is It Worth It?</h2>
                    <p className="text-sm text-muted-foreground mb-3">
                        The 1,400 km drive takes 13–14 hours via Route 15 south through Madinah then east to Riyadh. It crosses through multiple climate zones — the green highlands of the Hejaz, the Nejd plateau, and the flat central desert.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
                        <p className="font-semibold text-amber-800 mb-1">Only drive if:</p>
                        <ul className="space-y-1 text-amber-700 list-disc ml-4">
                            <li>You are relocating and transporting belongings</li>
                            <li>You want a road trip experience across Saudi Arabia</li>
                            <li>Flights are fully booked on your required date</li>
                        </ul>
                        <p className="font-semibold text-amber-800 mt-3 mb-1">Do not drive if:</p>
                        <ul className="space-y-1 text-amber-700 list-disc ml-4">
                            <li>You are a tourist or business traveller — just fly</li>
                            <li>You are travelling in summer (extreme heat, dangerous breakdown risk)</li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Need a Transfer at Tabuk Airport?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Pre-book your TUU airport pickup or drop-off. Fixed price, meet &amp; greet, available for any flight time.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20transfer%20to%20or%20from%20Tabuk%20Airport%20(TUU).%20Please%20share%20price%20and%20availability."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book TUU Airport Transfer
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How far is Tabuk from Riyadh?', a: 'Tabuk is approximately 1,400 km from Riyadh by road — around 13–14 hours of driving. By air, the distance is closer to 1,100 km and the flight takes about 2 hours. Flying is by far the most practical option for this route.' },
                            { q: 'Is there a flight from Tabuk to Riyadh?', a: 'Yes. Multiple daily flights operate between Tabuk Airport (TUU) and Riyadh King Khalid International Airport (RUH) with Saudia, flyadeal, and flynas. Flight time is approximately 2 hours. Prices range from SAR 150–600 depending on airline and advance booking.' },
                            { q: 'Can I drive from Tabuk to Riyadh?', a: 'Yes, you can drive from Tabuk to Riyadh. The distance is around 1,400 km via Route 15 south then the main Riyadh highway — approximately 13–14 hours without stops. This is a very long drive and only practical if you are moving belongings or have no other option. Flying is strongly recommended.' },
                            { q: 'Is there a bus from Tabuk to Riyadh?', a: 'SAPTCO operates an intercity bus route between Tabuk and Riyadh. The journey takes approximately 18–20 hours and costs around SAR 150–200. It is a long, uncomfortable option — flying is preferable for most travellers.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">More Tabuk Intercity Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/tabuk-to-jeddah-transport-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Jeddah</div>
                            <div className="text-muted-foreground text-xs mt-1">800 km — fly or drive guide</div>
                        </Link>
                        <Link href="/blog/tabuk-to-madinah-private-car-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Madinah</div>
                            <div className="text-muted-foreground text-xs mt-1">660 km — popular pilgrim route</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to NEOM</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km northwest, private driver</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">TUU pickups and drop-offs</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City and intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your transfer</div>
                            <div className="text-muted-foreground text-xs mt-1">Fixed prices, 24/7</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
