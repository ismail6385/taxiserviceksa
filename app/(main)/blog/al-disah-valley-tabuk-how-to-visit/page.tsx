import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Al Disah Valley Tabuk — How to Visit, Distance & Guide 2026',
    description: 'How to visit Al Disah Valley (Wadi Disah) from Tabuk. 80 km, 1 hour drive. Palm trees, sandstone cliffs, camping, and what to expect.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/al-disah-valley-tabuk-how-to-visit/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/al-disah-valley-tabuk-how-to-visit/',
            'ar': 'https://taxiserviceksa.com/blog/al-disah-valley-tabuk-how-to-visit/',
            'x-default': 'https://taxiserviceksa.com/blog/al-disah-valley-tabuk-how-to-visit/',
        },
    },
    openGraph: {
        title: 'Al Disah Valley Tabuk — How to Visit, Distance & Guide 2026',
        description: 'Wadi Disah is Tabuk\'s most dramatic natural attraction — towering red sandstone cliffs and a hidden palm valley. Here\'s how to get there.',
        url: 'https://taxiserviceksa.com/blog/al-disah-valley-tabuk-how-to-visit/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Al Disah Valley Tabuk — How to Visit, Distance & Guide 2026',
    description: 'Complete guide to visiting Al Disah Valley (Wadi Disah) from Tabuk: distance, transport, what to see, best time, and camping tips.',
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
            name: 'How do I get from Tabuk to Al Disah Valley?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Al Disah Valley (Wadi Disah) is approximately 80 km south of Tabuk — about 1 hour by car. Take Route 15 south then turn onto the valley road. A private driver from Tabuk costs SAR 200–300 for a round trip with waiting. A 4WD vehicle is recommended for the last section of the road into the valley.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is Al Disah Valley (Wadi Disah)?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Al Disah Valley, also known as Wadi Disah or Wadi Qaraqir, is a dramatic canyon in the Tabuk region of Saudi Arabia. It features towering red and orange sandstone cliffs up to 300 metres high, a freshwater spring, a hidden palm oasis, and some of the most spectacular desert scenery in northwestern Saudi Arabia.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Al Disah Valley good for camping?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Al Disah Valley is one of the most popular camping destinations near Tabuk. The valley floor has flat sandy areas and the towering cliffs provide natural shelter. October to March is the ideal camping season when temperatures are comfortable at night.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need a 4WD to visit Al Disah Valley?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The main road to Al Disah Valley is paved for most of the journey. The final section into the valley can be rough gravel and sandy — a 4WD or high-clearance vehicle is strongly recommended. Standard sedans may struggle with the last few kilometres, especially after rain.',
            },
        },
    ],
};

export default function AlDisahValleyTabukPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Nature &rsaquo; Al Disah Valley</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Al Disah Valley Tabuk — How to Visit (Wadi Disah Guide 2026)
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance from Tabuk:</strong> ~80 km south — 1 hour</li>
                        <li>🚙 <strong>Vehicle:</strong> 4WD recommended for valley road</li>
                        <li>🚗 <strong>Private driver round trip:</strong> SAR 200–300</li>
                        <li>🏕 <strong>Camping:</strong> Excellent — Oct–Mar best season</li>
                        <li>⏱ <strong>Time needed:</strong> Half day minimum, overnight ideal</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Al Disah Valley — locally called Wadi Disah or Wadi Qaraqir — is Tabuk&apos;s most spectacular natural attraction. Towering sandstone cliffs up to 300 metres high frame a hidden valley floor with palm trees, a freshwater spring, and some of the most dramatic desert scenery in Saudi Arabia. It looks like something from another planet and remains almost completely off the international tourist radar.
                    </p>
                </section>

                {/* What to see */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">What to See in Al Disah Valley</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { name: 'Sandstone canyon walls', desc: 'The main event — towering orange and red cliffs rising 200–300 metres on both sides. Colours change dramatically from dawn to dusk.' },
                            { name: 'Hidden palm oasis', desc: 'A freshwater spring feeds a grove of date palms deep in the valley. Unexpected and lush against the desert rock.' },
                            { name: 'Freshwater spring', desc: 'Flowing water year-round through parts of the valley floor. A rare sight in this part of Saudi Arabia.' },
                            { name: 'Narrow canyon passages', desc: 'Some sections narrow enough to touch both walls. Perfect for photography and exploring on foot.' },
                            { name: 'Ancient inscriptions', desc: 'Thamudic and Nabataean rock art and inscriptions are scattered on the cliff faces — thousands of years old.' },
                            { name: 'Camping flat areas', desc: 'The valley floor has wide sandy sections ideal for overnight camping with unobstructed stargazing overhead.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-3">
                                <div className="font-semibold mb-1">{item.name}</div>
                                <div className="text-muted-foreground text-xs">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Getting there */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">How to Get to Al Disah Valley from Tabuk</h2>
                    <div className="space-y-2 mb-4">
                        {[
                            { km: '0 km', place: 'Tabuk City', note: 'Head south on Route 15 (Tabuk–Madinah highway).' },
                            { km: '55 km', note: 'Turn off Route 15 onto the Al Disah valley road heading west.' },
                            { km: '75 km', note: 'Road becomes unpaved gravel. 4WD now needed.' },
                            { km: '80 km', place: 'Al Disah Valley entrance', note: 'Park here and explore on foot or continue deeper by 4WD.' },
                        ].map((s, i) => (
                            <div key={i} className="flex gap-4 border rounded-lg p-3 text-sm">
                                <div className="w-16 font-bold text-primary shrink-0">{s.km}</div>
                                <div>
                                    {s.place && <div className="font-semibold">{s.place}</div>}
                                    <div className="text-muted-foreground text-xs">{s.note}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Option</th>
                                    <th className="border px-3 py-2 text-left">Cost</th>
                                    <th className="border px-3 py-2 text-left">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { opt: 'Private driver (round trip)', cost: 'SAR 200–300', note: 'Driver waits. 4WD included. Best option.' },
                                    { opt: 'Rental car (4WD)', cost: 'SAR 350–500/day', note: 'Need international driving licence. Get a Prado or Land Cruiser.' },
                                    { opt: 'Uber/Careem', cost: 'Not available', note: 'No app coverage outside Tabuk city.' },
                                    { opt: 'Public transport', cost: 'Not available', note: 'No bus service to Al Disah Valley.' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.opt}</td>
                                        <td className="border px-3 py-2">{row.cost}</td>
                                        <td className="border px-3 py-2">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Best time */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Best Time to Visit Al Disah Valley</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Season</th>
                                    <th className="border px-3 py-2 text-left">Temp (day)</th>
                                    <th className="border px-3 py-2 text-left">Temp (night)</th>
                                    <th className="border px-3 py-2 text-left">Verdict</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { s: 'Dec – Feb', day: '15–22°C', night: '5–12°C', v: 'Best for camping', c: 'text-green-700 font-semibold' },
                                    { s: 'Oct – Nov', day: '22–30°C', night: '12–18°C', v: 'Excellent', c: 'text-green-600' },
                                    { s: 'Mar – Apr', day: '25–33°C', night: '14–20°C', v: 'Good', c: 'text-amber-600' },
                                    { s: 'May – Sep', day: '35–44°C', night: '25–32°C', v: 'Not recommended', c: 'text-red-600' },
                                ].map((row) => (
                                    <tr key={row.s} className="even:bg-muted/30">
                                        <td className="border px-3 py-2">{row.s}</td>
                                        <td className="border px-3 py-2">{row.day}</td>
                                        <td className="border px-3 py-2">{row.night}</td>
                                        <td className={`border px-3 py-2 ${row.c}`}>{row.v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Camping checklist */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">Camping Checklist for Al Disah Valley</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Essentials</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>Tent and sleeping bag (nights are cold Oct–Feb)</li>
                                <li>Water: 4+ litres per person per day</li>
                                <li>All food (no shops in the valley)</li>
                                <li>Firewood (limited in valley — bring your own)</li>
                                <li>Torch and spare batteries</li>
                                <li>First aid kit</li>
                                <li>Offline maps downloaded</li>
                                <li>Power bank (no signal, battery drains searching)</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold mb-2">Rules & etiquette</h3>
                            <ul className="space-y-1 text-muted-foreground list-disc ml-4 text-xs">
                                <li>No littering — pack out everything you bring in</li>
                                <li>Do not damage rock art or inscriptions</li>
                                <li>Respect other campers&apos; space</li>
                                <li>Do not pick plants or disturb wildlife</li>
                                <li>Keep noise low after 10pm</li>
                                <li>No alcohol — Saudi law applies</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book a Driver: Tabuk → Al Disah Valley</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        4WD round trips from Tabuk to Al Disah Valley. Driver waits while you explore — day trips or drop-off for camping overnight.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20want%20to%20visit%20Al%20Disah%20Valley%20from%20Tabuk.%20Please%20share%204WD%20options%20and%20prices."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book Tabuk → Al Disah Trip
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'How do I get from Tabuk to Al Disah Valley?', a: 'Al Disah Valley (Wadi Disah) is approximately 80 km south of Tabuk — about 1 hour by car. Take Route 15 south then turn onto the valley road. A private driver from Tabuk costs SAR 200–300 for a round trip with waiting. A 4WD vehicle is recommended for the last section of the road into the valley.' },
                            { q: 'What is Al Disah Valley (Wadi Disah)?', a: 'Al Disah Valley, also known as Wadi Disah or Wadi Qaraqir, is a dramatic canyon in the Tabuk region of Saudi Arabia. It features towering red and orange sandstone cliffs up to 300 metres high, a freshwater spring, a hidden palm oasis, and some of the most spectacular desert scenery in northwestern Saudi Arabia.' },
                            { q: 'Is Al Disah Valley good for camping?', a: 'Yes. Al Disah Valley is one of the most popular camping destinations near Tabuk. The valley floor has flat sandy areas and the towering cliffs provide natural shelter. October to March is the ideal camping season when temperatures are comfortable at night.' },
                            { q: 'Do I need a 4WD to visit Al Disah Valley?', a: 'The main road to Al Disah Valley is paved for most of the journey. The final section into the valley can be rough gravel and sandy — a 4WD or high-clearance vehicle is strongly recommended. Standard sedans may struggle with the last few kilometres, especially after rain.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-4">
                                <h3 className="font-semibold text-sm mb-2">{item.q}</h3>
                                <p className="speakable-answer text-sm text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">More Tabuk Nature &amp; City Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/tabuk-castle-fort-visitor-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk Castle visitor guide</div>
                            <div className="text-muted-foreground text-xs mt-1">Ottoman fort, free entry, history</div>
                        </Link>
                        <Link href="/blog/how-to-get-around-tabuk-as-a-tourist" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">How to get around Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Uber, driver, car rental — full guide</div>
                        </Link>
                        <Link href="/blog/best-red-sea-beaches-near-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Best Red Sea beaches near Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Haql, Sharma, snorkelling spots</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to NEOM guide</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km, transport options</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">City and intercity, full fleet</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your driver</div>
                            <div className="text-muted-foreground text-xs mt-1">4WD available, fixed prices</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
