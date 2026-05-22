import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How to Get from Tabuk to AlUla — Transport Options 2026',
    description: 'Complete guide to travelling from Tabuk to AlUla. Private car, rental, drive time, road conditions, and prices. 330 km route explained.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-to-alula/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-to-alula/',
            'ar': 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-to-alula/',
            'x-default': 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-to-alula/',
        },
    },
    openGraph: {
        title: 'How to Get from Tabuk to AlUla — Transport Options 2026',
        description: 'Private car, rental, or hired driver — your options for the 330 km Tabuk to AlUla journey explained with prices and road tips.',
        url: 'https://taxiserviceksa.com/blog/how-to-get-from-tabuk-to-alula/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get from Tabuk to AlUla — Transport Options 2026',
    description: 'Guide to the 330 km Tabuk to AlUla journey: transport options, road conditions, checkpoints, and hiring a private driver.',
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
            name: 'How do I get from Tabuk to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best way is by private car or hired driver. The route is approximately 330 km via Route 375 south, taking 3.5 to 4 hours. There is no direct public bus or train. Hiring a private driver from Tabuk costs SAR 600–900 one-way and removes the stress of navigation and fuel stops.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long does it take to drive from Tabuk to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The drive from Tabuk to AlUla takes approximately 3.5 to 4 hours covering around 330 km. The road is a single-lane highway in stretches and speed cameras are frequent — budget extra time and do not rush.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a bus from Tabuk to AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'SAPTCO operates occasional intercity bus routes but there is no reliable direct daily bus between Tabuk and AlUla. Most travellers use private transfers or rental cars. Check SAPTCO\'s website for the latest schedule.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does a private driver from Tabuk to AlUla cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A private driver from Tabuk to AlUla costs SAR 600–900 one-way depending on the vehicle type. A sedan costs around SAR 600, an SUV SAR 700–800, and a premium vehicle or minivan SAR 850–900. Round trips with waiting are available from SAR 1,100.',
            },
        },
    ],
};

export default function TabukToAlulaPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; AlUla &rsaquo; Transport Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        How to Get from Tabuk to AlUla — Transport Options 2026
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance:</strong> ~330 km via Route 375</li>
                        <li>⏱ <strong>Drive time:</strong> 3.5 – 4 hours</li>
                        <li>🚌 <strong>Public bus:</strong> No reliable direct service</li>
                        <li>🚗 <strong>Best option:</strong> Private driver or rental car</li>
                        <li>💰 <strong>Private driver cost:</strong> SAR 600–900 one-way</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        AlUla is one of Saudi Arabia&apos;s most spectacular destinations — ancient Nabataean tombs, dramatic sandstone cliffs, and the UNESCO-listed Hegra site. From Tabuk, it&apos;s a 330 km drive southeast through open desert and highland terrain. This guide covers every way to make the journey.
                    </p>
                </section>

                {/* Transport options */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Your Transport Options: Tabuk → AlUla</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Option</th>
                                    <th className="border px-3 py-2 text-left">Time</th>
                                    <th className="border px-3 py-2 text-left">Cost</th>
                                    <th className="border px-3 py-2 text-left">Best For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">Private driver</td>
                                    <td className="border px-3 py-2">3.5–4 hrs</td>
                                    <td className="border px-3 py-2">SAR 600–900</td>
                                    <td className="border px-3 py-2">Most travellers</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2 font-medium">Rental car</td>
                                    <td className="border px-3 py-2">3.5–4 hrs</td>
                                    <td className="border px-3 py-2">SAR 200–350/day</td>
                                    <td className="border px-3 py-2">Independent travellers with Int&apos;l DL</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">SAPTCO bus</td>
                                    <td className="border px-3 py-2">5–6 hrs</td>
                                    <td className="border px-3 py-2">SAR 80–120</td>
                                    <td className="border px-3 py-2">Budget, if available</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2 font-medium">Domestic flight</td>
                                    <td className="border px-3 py-2">1 hr flight + transfer</td>
                                    <td className="border px-3 py-2">SAR 250–500</td>
                                    <td className="border px-3 py-2">Time-sensitive travellers</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2 font-medium">Uber / Careem</td>
                                    <td className="border px-3 py-2">N/A</td>
                                    <td className="border px-3 py-2">Not available</td>
                                    <td className="border px-3 py-2">Does not cover this route</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* The drive */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">The Drive: Route &amp; Road Conditions</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        The main route from Tabuk to AlUla runs south on Route 375, passing through the towns of Al Bad, Sharma, and Tayma before reaching AlUla. The road is well-surfaced but passes through long stretches of empty desert with limited fuel stops.
                    </p>
                    <div className="space-y-3">
                        {[
                            { km: '0 km', loc: 'Tabuk city', note: 'Fill up fuel before leaving. Last major fuel station.' },
                            { km: '85 km', loc: 'Al Bad junction', note: 'Small town, basic services. Optional stop.' },
                            { km: '160 km', loc: 'Sharma area', note: 'Coastal NEOM region. Some checkpoints on side roads.' },
                            { km: '230 km', loc: 'Tayma', note: 'Historic oasis town. Good place to stop for coffee.' },
                            { km: '330 km', loc: 'AlUla', note: 'City centre, hotels, Hegra entrance.' },
                        ].map((stop) => (
                            <div key={stop.km} className="flex gap-4 border rounded-lg p-3 text-sm">
                                <div className="w-16 font-bold text-primary shrink-0">{stop.km}</div>
                                <div>
                                    <div className="font-semibold">{stop.loc}</div>
                                    <div className="text-muted-foreground">{stop.note}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing table */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Private Driver Prices: Tabuk → AlUla</h2>
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
                                <tr>
                                    <td className="border px-3 py-2">Sedan (Camry/Sonata)</td>
                                    <td className="border px-3 py-2">1–3</td>
                                    <td className="border px-3 py-2">SAR 600</td>
                                    <td className="border px-3 py-2">SAR 1,000</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2">SUV (Fortuner/Prado)</td>
                                    <td className="border px-3 py-2">1–4</td>
                                    <td className="border px-3 py-2">SAR 700</td>
                                    <td className="border px-3 py-2">SAR 1,150</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Large SUV (GMC Yukon)</td>
                                    <td className="border px-3 py-2">1–6</td>
                                    <td className="border px-3 py-2">SAR 800</td>
                                    <td className="border px-3 py-2">SAR 1,300</td>
                                </tr>
                                <tr className="bg-muted/30">
                                    <td className="border px-3 py-2">Minivan (H1/Hiace)</td>
                                    <td className="border px-3 py-2">5–7</td>
                                    <td className="border px-3 py-2">SAR 850</td>
                                    <td className="border px-3 py-2">SAR 1,400</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Premium (Lexus/S-Class)</td>
                                    <td className="border px-3 py-2">1–3</td>
                                    <td className="border px-3 py-2">SAR 900</td>
                                    <td className="border px-3 py-2">SAR 1,500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Round trip includes driver waiting up to 8 hours in AlUla.</p>
                </section>

                {/* Tips */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Driving Tips for This Route</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { title: 'Fill up in Tabuk', desc: 'Fuel stations are scarce between Tabuk and Tayma. Do not rely on finding one mid-route.' },
                            { title: 'Leave early', desc: 'Start by 7–8am to arrive mid-morning, giving you a full day at Hegra before afternoon heat.' },
                            { title: 'Speed cameras everywhere', desc: 'The speed limit is 120 km/h. Cameras are frequent and fines are automatic. Do not speed.' },
                            { title: 'Download offline maps', desc: 'Google Maps works but mobile signal drops in desert stretches. Download the offline map for the Tabuk–AlUla corridor.' },
                            { title: 'Carry water', desc: 'Pack at least 2 litres per person. If you break down in the desert, you need time to wait for help.' },
                            { title: 'Book AlUla entry in advance', desc: 'Hegra requires pre-booked tickets. Book via the Experience AlUla app before your trip — walk-ins are not guaranteed.' },
                        ].map((tip, i) => (
                            <div key={i} className="border rounded-lg p-3">
                                <div className="font-semibold mb-1">{tip.title}</div>
                                <div className="text-muted-foreground">{tip.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book a Private Driver: Tabuk → AlUla</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        English-speaking drivers, door-to-door pickup, no meter surprises. Available for one-way, round trip, or full-day AlUla tours.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20driver%20from%20Tabuk%20to%20AlUla.%20Please%20share%20availability%20and%20price."
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
                                q: 'How do I get from Tabuk to AlUla?',
                                a: 'The best way is by private car or hired driver. The route is approximately 330 km via Route 375 south, taking 3.5 to 4 hours. There is no direct public bus or train. Hiring a private driver from Tabuk costs SAR 600–900 one-way and removes the stress of navigation and fuel stops.',
                            },
                            {
                                q: 'How long does it take to drive from Tabuk to AlUla?',
                                a: 'The drive from Tabuk to AlUla takes approximately 3.5 to 4 hours covering around 330 km. The road is a single-lane highway in stretches and speed cameras are frequent — budget extra time and do not rush.',
                            },
                            {
                                q: 'Is there a bus from Tabuk to AlUla?',
                                a: "SAPTCO operates occasional intercity bus routes but there is no reliable direct daily bus between Tabuk and AlUla. Most travellers use private transfers or rental cars. Check SAPTCO's website for the latest schedule.",
                            },
                            {
                                q: 'How much does a private driver from Tabuk to AlUla cost?',
                                a: 'A private driver from Tabuk to AlUla costs SAR 600–900 one-way depending on vehicle type. A sedan costs around SAR 600, an SUV SAR 700–800, and a premium vehicle or minivan SAR 850–900. Round trips with waiting are available from SAR 1,100.',
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
                    <h2 className="text-xl font-bold mb-4">More Tabuk Travel Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/tabuk-to-alula-distance-drive-time" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to AlUla — distance &amp; drive time</div>
                            <div className="text-muted-foreground text-xs mt-1">Detailed milestone map, road conditions</div>
                        </Link>
                        <Link href="/blog/alula-visitor-guide-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">AlUla visitor guide from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">What to see, Hegra tickets, best time</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get to NEOM from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km northwest, checkpoint guide</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport (TUU) transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Arrivals guide, all routes from TUU</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City rides, intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your transfer online</div>
                            <div className="text-muted-foreground text-xs mt-1">Instant quote, English-speaking drivers</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
