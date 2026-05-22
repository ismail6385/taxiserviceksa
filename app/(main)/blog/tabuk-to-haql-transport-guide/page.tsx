import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Tabuk to Haql — Transport Guide 2026 (Distance, Time, Price)',
    description: 'How to get from Tabuk to Haql on the Saudi-Jordan border. 290 km, 3 hours by private car. Prices, road tips, and what to do in Haql.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/tabuk-to-haql-transport-guide/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/tabuk-to-haql-transport-guide/',
            'ar': 'https://taxiserviceksa.com/blog/tabuk-to-haql-transport-guide/',
            'x-default': 'https://taxiserviceksa.com/blog/tabuk-to-haql-transport-guide/',
        },
    },
    openGraph: {
        title: 'Tabuk to Haql — Transport Guide 2026',
        description: '290 km from Tabuk to Haql on the Gulf of Aqaba. Private driver prices, road conditions, and what to see at Saudi Arabia\'s Red Sea border town.',
        url: 'https://taxiserviceksa.com/blog/tabuk-to-haql-transport-guide/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tabuk to Haql — Transport Guide 2026',
    description: 'Complete guide to travelling from Tabuk to Haql: distance, drive time, private driver prices, road conditions, and what to do in Haql.',
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
            name: 'How far is Haql from Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Haql is approximately 290 km northwest of Tabuk by road. The drive takes around 3 hours via the coastal highway heading towards the Gulf of Aqaba.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get from Tabuk to Haql?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best way is by private car or hired driver. There is no public bus or train service between Tabuk and Haql. A private driver costs SAR 500–650 one-way and takes about 3 hours.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is Haql known for?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Haql is a small Saudi town on the Gulf of Aqaba near the Jordan border. It is known for crystal-clear Red Sea snorkelling and diving, the sunken wreck of the SS Georgios G visible from the shore, and dramatic views across the water to Aqaba, Jordan and Eilat, Israel.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I cross the border from Haql to Jordan?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'There is a land border crossing near Haql (Durra/Al-Durra border crossing), but it is currently open only to Saudi and Jordanian nationals, not to third-country tourists. Check the latest regulations before planning a border crossing.',
            },
        },
    ],
};

export default function TabukToHaqlPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Red Sea &rsaquo; Haql Guide</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Tabuk to Haql — Transport Guide 2026
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance:</strong> ~290 km northwest of Tabuk</li>
                        <li>⏱ <strong>Drive time:</strong> ~3 hours</li>
                        <li>🚗 <strong>Transport:</strong> Private driver only (no public bus)</li>
                        <li>💰 <strong>Private driver:</strong> SAR 500–650 one-way</li>
                        <li>🤿 <strong>Known for:</strong> Red Sea snorkelling, sunken ship wreck, views to Jordan</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Haql is one of Saudi Arabia&apos;s most overlooked Red Sea destinations. Sitting at the northern tip of the Gulf of Aqaba — where Saudi Arabia, Jordan, Israel, and Egypt meet across the water — it offers world-class snorkelling, a famous shipwreck visible from shore, and a frontier-town atmosphere far from the tourist crowds. From Tabuk, it is a 290 km drive northwest along the NEOM coastal corridor.
                    </p>
                </section>

                {/* Key numbers */}
                <section className="mb-8">
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { value: '290 km', label: 'Tabuk to Haql' },
                            { value: '~3 hrs', label: 'Drive time' },
                            { value: 'SAR 500–650', label: 'Private driver' },
                        ].map((s) => (
                            <div key={s.label} className="bg-muted rounded-lg p-4 text-center">
                                <div className="text-lg font-bold text-primary">{s.value}</div>
                                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Route */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">The Route: Tabuk to Haql</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                        From Tabuk, head northwest on Route 55 toward the coast. The road passes through the NEOM region before reaching the Gulf of Aqaba and continuing north to Haql.
                    </p>
                    <div className="space-y-2">
                        {[
                            { km: '0 km', place: 'Tabuk City', note: 'Fill fuel here — limited stations ahead.' },
                            { km: '90 km', place: 'NEOM Region entry', note: 'Coastal highway continues north. Checkpoints possible on side roads.' },
                            { km: '190 km', place: 'Sharma / NEOM coast', note: 'Red Sea coastline begins. Spectacular scenery.' },
                            { km: '240 km', place: 'Gulf of Aqaba', note: 'Road hugs the coast. Views across to Jordan.' },
                            { km: '290 km', place: 'Haql town', note: 'Small coastal town. Beachfront, snorkelling, shipwreck.' },
                        ].map((stop) => (
                            <div key={stop.km} className="flex gap-4 border rounded-lg p-3 text-sm">
                                <div className="w-16 font-bold text-primary shrink-0">{stop.km}</div>
                                <div>
                                    <div className="font-semibold">{stop.place}</div>
                                    <div className="text-muted-foreground text-xs">{stop.note}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* What to do */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What to Do in Haql</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            {
                                name: 'SS Georgios G Shipwreck',
                                desc: 'A Greek cargo ship that ran aground in 1978. The wreck is partially above water and visible from shore — snorkellers can explore it easily. One of the most accessible shipwrecks in the Red Sea.',
                            },
                            {
                                name: 'Red Sea snorkelling',
                                desc: 'The waters around Haql have excellent coral reefs, clear visibility, and abundant marine life. No boat required — wade in from the beach.',
                            },
                            {
                                name: 'Four-country views',
                                desc: 'On a clear day you can see Aqaba (Jordan), Eilat (Israel), and Taba (Egypt) across the water from Haql. Unique perspective on the region.',
                            },
                            {
                                name: 'Desert coast drive',
                                desc: 'The road from Tabuk to Haql passes through some of the most dramatic coastline in northwestern Saudi Arabia — mountains meeting sea.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-3">
                                <div className="font-semibold mb-1">{item.name}</div>
                                <div className="text-muted-foreground text-xs">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Private Driver Prices: Tabuk → Haql</h2>
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
                                    { v: 'Sedan (Camry/Sonata)', p: '1–3', ow: 'SAR 500', rt: 'SAR 850' },
                                    { v: 'SUV (Fortuner/Prado)', p: '1–4', ow: 'SAR 580', rt: 'SAR 950' },
                                    { v: 'Large SUV (GMC Yukon)', p: '1–6', ow: 'SAR 650', rt: 'SAR 1,100' },
                                    { v: 'Minivan (H1/Hiace)', p: '5–7', ow: 'SAR 700', rt: 'SAR 1,200' },
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
                    <h3 className="font-semibold mb-2">Book a Private Driver: Tabuk → Haql</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Door-to-door transfers from Tabuk to Haql. Day trip round trips available — driver waits while you explore.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20driver%20from%20Tabuk%20to%20Haql.%20Please%20share%20availability%20and%20price."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Tabuk → Haql Transfer
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How far is Haql from Tabuk?', a: 'Haql is approximately 290 km northwest of Tabuk by road. The drive takes around 3 hours via the coastal highway heading towards the Gulf of Aqaba.' },
                            { q: 'How do I get from Tabuk to Haql?', a: 'The best way is by private car or hired driver. There is no public bus or train service between Tabuk and Haql. A private driver costs SAR 500–650 one-way and takes about 3 hours.' },
                            { q: 'What is Haql known for?', a: "Haql is a small Saudi town on the Gulf of Aqaba near the Jordan border. It is known for crystal-clear Red Sea snorkelling and diving, the sunken wreck of the SS Georgios G visible from shore, and dramatic views across the water to Aqaba, Jordan and Eilat, Israel." },
                            { q: 'Can I cross the border from Haql to Jordan?', a: 'There is a land border crossing near Haql, but it is currently open only to Saudi and Jordanian nationals, not to third-country tourists. Check the latest regulations before planning a border crossing.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">More Tabuk Red Sea Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/best-red-sea-beaches-near-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Best Red Sea beaches near Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Top beaches, snorkelling spots, access guide</div>
                        </Link>
                        <Link href="/blog/tabuk-to-sharma-beach-how-to-get-there" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to Sharma beach</div>
                            <div className="text-muted-foreground text-xs mt-1">NEOM coastal area, how to reach it</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get to NEOM from Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km route, checkpoints, access guide</div>
                        </Link>
                        <Link href="/tabuk-airport-taxi" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Airport transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Fly in, then travel to the coast</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City rides, intercity, full fleet</div>
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
