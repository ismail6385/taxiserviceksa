import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Tabuk to Sharma Beach — How to Get There (NEOM Coast Guide)',
    description: 'How to get from Tabuk to Sharma beach in the NEOM region. 190 km, 2 hours. Access rules, what to bring, and private driver prices.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tabuk-to-sharma-beach-how-to-get-there/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/tabuk-to-sharma-beach-how-to-get-there/',
            'ar': 'https://taxiserviceksa.com/blog/tabuk-to-sharma-beach-how-to-get-there/',
            'x-default': 'https://taxiserviceksa.com/blog/tabuk-to-sharma-beach-how-to-get-there/',
        },
    },
    openGraph: {
        title: 'Tabuk to Sharma Beach — How to Get There (NEOM Coast)',
        description: 'Sharma is the closest Red Sea beach to Tabuk — 190 km through the NEOM corridor. Here\'s how to get there, what to bring, and what to expect.',
        url: 'https://taxiserviceksa.com/blog/tabuk-to-sharma-beach-how-to-get-there/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tabuk to Sharma Beach — How to Get There',
    description: 'Complete guide to reaching Sharma beach from Tabuk: distance, route, NEOM access rules, what to bring, and private driver options.',
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
            name: 'How do I get from Tabuk to Sharma beach?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sharma is about 190 km northwest of Tabuk via Route 55. The drive takes approximately 2 hours. There is no public bus. A private driver from Tabuk to Sharma costs SAR 450–550 one-way. Fill up with fuel in Tabuk — there are no petrol stations in the Sharma / NEOM coastal corridor.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Sharma beach open to tourists?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Sharma coastal area along the main highway is accessible to tourists with a valid Saudi visa. The beach itself is not inside a restricted NEOM construction zone. However, side roads leading into active NEOM development areas are restricted. Stay on the main coastal road and designated beach areas.',
            },
        },
        {
            '@type': 'Question',
            name: 'How far is Sharma from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sharma is approximately 190 km from Tabuk city, a 2-hour drive northwest via Route 55 along the coastal highway.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is Sharma like?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sharma is a coastal area in the northern NEOM region on the Gulf of Aqaba. It features dramatic mountains meeting crystal-clear Red Sea water, pristine coral reefs, and almost no tourist infrastructure. It is one of the most unspoilt stretches of coastline in the Middle East. Bring all supplies — there is nothing to buy there.',
            },
        },
    ],
};

export default function TabukToSharmaBeachPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Red Sea &rsaquo; Sharma Beach</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Tabuk to Sharma Beach — How to Get There (NEOM Coast Guide)
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance:</strong> ~190 km from Tabuk</li>
                        <li>⏱ <strong>Drive time:</strong> ~2 hours via Route 55</li>
                        <li>✅ <strong>Tourist access:</strong> Yes — coastal road is public</li>
                        <li>⛽ <strong>Fuel:</strong> Fill up in Tabuk — no stations in corridor</li>
                        <li>🏕 <strong>Facilities:</strong> None — bring everything</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Sharma is the closest stretch of Red Sea coastline to Tabuk — about 190 km northwest via the coastal highway that cuts through the NEOM region. The scenery is extraordinary: jagged black mountains dropping vertically into clear turquoise water, with almost no one else around. But it is not a resort beach. It is raw, remote, and completely undeveloped. If you go, you go prepared.
                    </p>
                </section>

                {/* Access rules */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Can Tourists Visit Sharma?</h2>
                    <div className="space-y-3 text-sm">
                        <div className="border-l-4 border-green-400 pl-4 py-2">
                            <div className="font-semibold text-green-800">✅ What is accessible</div>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 mt-1">
                                <li>The main coastal highway (Route 55) through the Sharma area</li>
                                <li>Public beach areas along the coast</li>
                                <li>Stopping to swim, snorkel, and camp on the beach</li>
                                <li>Photography of landscapes (not NEOM infrastructure)</li>
                            </ul>
                        </div>
                        <div className="border-l-4 border-red-400 pl-4 py-2">
                            <div className="font-semibold text-red-800">❌ What is restricted</div>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 mt-1">
                                <li>Side roads into NEOM construction and worker compounds</li>
                                <li>Areas marked with NEOM company signage or barriers</li>
                                <li>Photographing NEOM facilities or security checkpoints</li>
                                <li>Accessing Sindalah Island (not yet open to tourists)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Route */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Route: Tabuk to Sharma</h2>
                    <div className="space-y-2">
                        {[
                            { km: '0 km', place: 'Tabuk City', note: 'Fill fuel completely. Buy all food and water here.' },
                            { km: '40 km', place: 'Tabuk outskirts', note: 'Highway opens. Speed cameras active — 120 km/h limit.' },
                            { km: '90 km', place: 'NEOM region begins', note: 'Checkpoint possible. Have passport ready.' },
                            { km: '150 km', place: 'Coastal views begin', note: 'Mountains meet sea. Spectacular scenery starts here.' },
                            { km: '190 km', place: 'Sharma coastal area', note: 'Pull off at public beach areas. No marked facilities.' },
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

                {/* What to bring */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Essential Checklist for Sharma Beach</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Must bring</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>Full fuel tank — no stations for 200 km</li>
                                <li>Water: 3+ litres per person</li>
                                <li>All food for the day</li>
                                <li>Snorkel mask and fins</li>
                                <li>Sun protection (very exposed, no shade)</li>
                                <li>Offline Google Maps downloaded</li>
                                <li>Passport and Saudi visa</li>
                                <li>Power bank (limited mobile signal)</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">If camping overnight</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>Tent and sleeping gear</li>
                                <li>Additional water (6+ litres)</li>
                                <li>First aid kit</li>
                                <li>Torch and spare batteries</li>
                                <li>Extra food</li>
                                <li>Warm layers (desert nights are cold Oct–Mar)</li>
                                <li>Trash bags — leave no trace</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Best time */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Best Time to Visit Sharma from Tabuk</h2>
                    <p className="text-sm text-muted-foreground mb-3">
                        Sharma is exposed desert coast with little shade. Temperature matters a lot.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Month</th>
                                    <th className="border px-3 py-2 text-left">Air Temp</th>
                                    <th className="border px-3 py-2 text-left">Sea Temp</th>
                                    <th className="border px-3 py-2 text-left">Verdict</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { m: 'Nov – Feb', air: '15–24°C', sea: '22–25°C', v: 'Best', c: 'text-green-600 font-semibold' },
                                    { m: 'Mar – Apr', air: '20–30°C', sea: '24–27°C', v: 'Excellent', c: 'text-green-600' },
                                    { m: 'Oct', air: '22–32°C', sea: '26–28°C', v: 'Good', c: 'text-amber-600' },
                                    { m: 'May – Sep', air: '32–42°C', sea: '28–32°C', v: 'Too hot for beach', c: 'text-red-600' },
                                ].map((row) => (
                                    <tr key={row.m} className="even:bg-muted/30">
                                        <td className="border px-3 py-2">{row.m}</td>
                                        <td className="border px-3 py-2">{row.air}</td>
                                        <td className="border px-3 py-2">{row.sea}</td>
                                        <td className={`border px-3 py-2 ${row.c}`}>{row.v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book a Driver: Tabuk → Sharma Beach</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        We run transfers from Tabuk to the Sharma coastal area. Day trip round trips with driver waiting available from SAR 900.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20want%20to%20visit%20Sharma%20beach%20from%20Tabuk.%20Please%20share%20availability%20and%20prices."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Tabuk → Sharma Trip
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How do I get from Tabuk to Sharma beach?', a: 'Sharma is about 190 km northwest of Tabuk via Route 55. The drive takes approximately 2 hours. There is no public bus. A private driver from Tabuk to Sharma costs SAR 450–550 one-way. Fill up with fuel in Tabuk — there are no petrol stations in the Sharma / NEOM coastal corridor.' },
                            { q: 'Is Sharma beach open to tourists?', a: 'The Sharma coastal area along the main highway is accessible to tourists with a valid Saudi visa. The beach itself is not inside a restricted NEOM construction zone. However, side roads leading into active NEOM development areas are restricted. Stay on the main coastal road and designated beach areas.' },
                            { q: 'How far is Sharma from Tabuk?', a: 'Sharma is approximately 190 km from Tabuk city, a 2-hour drive northwest via Route 55 along the coastal highway.' },
                            { q: 'What is Sharma like?', a: "Sharma is a coastal area in the northern NEOM region on the Gulf of Aqaba. It features dramatic mountains meeting crystal-clear Red Sea water, pristine coral reefs, and almost no tourist infrastructure. It is one of the most unspoilt stretches of coastline in the Middle East. Bring all supplies — there is nothing to buy there." },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">More Tabuk Coastal Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/best-red-sea-beaches-near-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Best Red Sea beaches near Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Haql, Sharma, Al Wajh compared</div>
                        </Link>
                        <Link href="/blog/tabuk-to-haql-transport-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Haql</div>
                            <div className="text-muted-foreground text-xs mt-1">290 km, shipwreck, Gulf of Aqaba</div>
                        </Link>
                        <Link href="/blog/can-tourists-visit-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Can tourists visit NEOM from Tabuk?</div>
                            <div className="text-muted-foreground text-xs mt-1">Full access guide, zones explained</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get to NEOM from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km, checkpoints, vehicles</div>
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
