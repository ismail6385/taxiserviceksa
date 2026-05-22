import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Is There Uber in Tabuk? Apps, Alternatives & What Actually Works',
    description: 'Yes, Uber and Careem work in Tabuk — but with limitations. Here\'s what actually works for getting around Tabuk city, the airport, and long distances.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/is-there-uber-in-tabuk/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/is-there-uber-in-tabuk/',
            'ar': 'https://taxiserviceksa.com/blog/is-there-uber-in-tabuk/',
            'x-default': 'https://taxiserviceksa.com/blog/is-there-uber-in-tabuk/',
        },
    },
    openGraph: {
        title: 'Is There Uber in Tabuk? Apps, Alternatives & What Actually Works',
        description: 'Uber and Careem are in Tabuk, but they don\'t work for airport pickups or long-distance routes. Here\'s the honest guide to getting around.',
        url: 'https://taxiserviceksa.com/blog/is-there-uber-in-tabuk/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Is There Uber in Tabuk? Apps, Alternatives & What Actually Works',
    description: 'Honest guide to ride-hailing in Tabuk: what Uber and Careem cover, where they fall short, and the best alternatives for airport and intercity travel.',
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
            name: 'Is Uber available in Tabuk Saudi Arabia?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Uber operates in Tabuk. Careem (owned by Uber) also works in the city. However, driver availability is lower than in Riyadh or Jeddah, especially late at night, early morning, or at the airport. For city rides Uber works well; for airport pickups or intercity travel, pre-booked private transfers are more reliable.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does Careem work in Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Careem is available in Tabuk and is often more popular than Uber in smaller Saudi cities. It functions similarly — book via the app, pay by card or cash. Availability is best in central Tabuk during daytime hours.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I take Uber from Tabuk to NEOM?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Uber and Careem do not cover intercity routes like Tabuk to NEOM (190 km) or Tabuk to AlUla (330 km). For these routes you need a private hired driver or rental car. Our service covers all intercity routes from Tabuk.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best app for taxis in Tabuk?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For city rides in Tabuk, Careem is the most widely used app. Uber also works. For airport pickups or long-distance travel to NEOM or AlUla, a pre-booked private transfer service like ours is more reliable than any app.',
            },
        },
    ],
};

export default function IsThereUberInTabukPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Tabuk &rsaquo; Getting Around &rsaquo; Ride Apps</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Is There Uber in Tabuk? Apps, Alternatives &amp; What Actually Works
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated May 2026 &bull; 4 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>✅ <strong>Uber:</strong> Works in Tabuk city — inconsistent at airport</li>
                        <li>✅ <strong>Careem:</strong> Works in Tabuk — generally more available than Uber</li>
                        <li>❌ <strong>NEOM / AlUla routes:</strong> Neither app covers intercity routes</li>
                        <li>❌ <strong>Airport pickup:</strong> Unreliable — pre-book instead</li>
                        <li>🚗 <strong>Best for airport + intercity:</strong> Pre-booked private driver</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p>
                        Short answer: yes, Uber and Careem both operate in Tabuk. But &quot;available in Tabuk&quot; doesn&apos;t mean they work equally well for every type of journey. Here&apos;s an honest breakdown of when to use them and when to book a private driver instead.
                    </p>
                </section>

                {/* App comparison */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Uber vs Careem in Tabuk</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Feature</th>
                                    <th className="border px-3 py-2 text-left">Uber</th>
                                    <th className="border px-3 py-2 text-left">Careem</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feat: 'Available in Tabuk', uber: '✅ Yes', careem: '✅ Yes' },
                                    { feat: 'City rides', uber: '✅ Good', careem: '✅ Good' },
                                    { feat: 'Airport pickup', uber: '⚠️ Inconsistent', careem: '⚠️ Inconsistent' },
                                    { feat: 'NEOM / AlUla routes', uber: '❌ No', careem: '❌ No' },
                                    { feat: 'English-speaking driver', uber: '⚠️ Not guaranteed', careem: '⚠️ Not guaranteed' },
                                    { feat: 'Card payment', uber: '✅ Yes', careem: '✅ Yes' },
                                    { feat: 'Cash payment', uber: '✅ Yes', careem: '✅ Yes' },
                                    { feat: 'Surge pricing', uber: '⚠️ Yes', careem: '⚠️ Yes' },
                                    { feat: 'Driver availability (late night)', uber: '⚠️ Low', careem: '⚠️ Low' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.feat}</td>
                                        <td className="border px-3 py-2">{row.uber}</td>
                                        <td className="border px-3 py-2">{row.careem}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* When to use */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">When Uber/Careem Works Fine in Tabuk</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { title: 'Short city rides', desc: 'Hotel to restaurant, mall, or attractions within Tabuk city. 5–20 minute rides. Both apps usually have drivers available.' },
                            { title: 'Daytime hours', desc: 'Between 8am and 10pm, driver availability in central Tabuk is reasonable. Expect 5–10 minute wait times.' },
                            { title: 'Tabuk Castle area', desc: 'Central tourist areas have better app coverage. The historic district and hotel zones are well served.' },
                            { title: 'Budget rides', desc: 'For cheap city hops, Uber/Careem is cheaper than a private driver. A 10 km city ride costs SAR 20–40.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-3 border-green-300 bg-green-50">
                                <div className="font-semibold text-green-800 mb-1">{item.title}</div>
                                <div className="text-green-700 text-xs">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* When not to use */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">When NOT to Rely on Uber/Careem in Tabuk</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { title: 'Airport pickup', desc: 'Driver availability at TUU is unreliable. A late flight + no Uber = stranded. Pre-book a private transfer for all airport journeys.' },
                            { title: 'NEOM or AlUla travel', desc: 'Neither app offers intercity routes. You cannot book a 190 km Uber to NEOM or a 330 km ride to AlUla. Private driver only.' },
                            { title: 'Late night / early morning', desc: 'After midnight and before 6am, finding a driver in Tabuk can take 30+ minutes or fail entirely. Pre-book.' },
                            { title: 'Large groups or luggage', desc: 'Standard Uber cars seat 3–4 and have limited boot space. For families or heavy luggage, a pre-booked SUV or van is better.' },
                            { title: 'Remote areas', desc: 'Outside central Tabuk — Al Disah Valley, desert areas, rural checkpoints — apps will not work. Private driver is the only option.' },
                            { title: 'Fixed-price guarantee', desc: 'Surge pricing applies during busy periods in Tabuk (Eid, season events). A pre-booked private transfer is a fixed price, always.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-3 border-red-200 bg-red-50">
                                <div className="font-semibold text-red-800 mb-1">{item.title}</div>
                                <div className="text-red-700 text-xs">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Private driver comparison */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Uber vs Private Driver in Tabuk</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Journey type</th>
                                    <th className="border px-3 py-2 text-left">Use Uber?</th>
                                    <th className="border px-3 py-2 text-left">Use private driver?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { journey: 'Hotel to restaurant in city', uber: '✅ Yes', private: 'Optional' },
                                    { journey: 'Airport pickup', uber: '⚠️ Risky', private: '✅ Yes' },
                                    { journey: 'Airport drop-off', uber: '✅ Usually fine', private: '✅ Yes' },
                                    { journey: 'City sightseeing (half day)', uber: '⚠️ Expensive with waits', private: '✅ Better value' },
                                    { journey: 'Tabuk → NEOM', uber: '❌ Not available', private: '✅ Only option' },
                                    { journey: 'Tabuk → AlUla', uber: '❌ Not available', private: '✅ Only option' },
                                    { journey: 'Midnight arrival at TUU', uber: '❌ Unreliable', private: '✅ Yes' },
                                ].map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2">{row.journey}</td>
                                        <td className="border px-3 py-2">{row.uber}</td>
                                        <td className="border px-3 py-2">{row.private}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Need a Reliable Driver in Tabuk?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Available for airport pickups, city rides, and long-distance routes to NEOM, AlUla, and beyond. English-speaking drivers, fixed prices, 24/7 availability.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20driver%20in%20Tabuk.%20Please%20share%20availability%20and%20pricing."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book a Tabuk Driver
                    </a>
                </div>

                {/* FAQ */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'Is Uber available in Tabuk Saudi Arabia?',
                                a: 'Yes, Uber operates in Tabuk. Careem (owned by Uber) also works in the city. However, driver availability is lower than in Riyadh or Jeddah, especially late at night, early morning, or at the airport. For city rides Uber works well; for airport pickups or intercity travel, pre-booked private transfers are more reliable.',
                            },
                            {
                                q: 'Does Careem work in Tabuk?',
                                a: 'Yes, Careem is available in Tabuk and is often more popular than Uber in smaller Saudi cities. It functions similarly — book via the app, pay by card or cash. Availability is best in central Tabuk during daytime hours.',
                            },
                            {
                                q: 'Can I take Uber from Tabuk to NEOM?',
                                a: 'No. Uber and Careem do not cover intercity routes like Tabuk to NEOM (190 km) or Tabuk to AlUla (330 km). For these routes you need a private hired driver or rental car.',
                            },
                            {
                                q: 'What is the best app for taxis in Tabuk?',
                                a: 'For city rides in Tabuk, Careem is the most widely used app. Uber also works. For airport pickups or long-distance travel to NEOM or AlUla, a pre-booked private transfer service is more reliable than any app.',
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
                    <h2 className="text-xl font-bold mb-4">More Tabuk Transport Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/blog/tabuk-airport-tuu-arrivals-guide" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">TUU arrivals guide</div>
                            <div className="text-muted-foreground text-xs mt-1">Immigration, baggage, transport from airport</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-tabuk-airport-to-city" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">TUU → Tabuk city centre</div>
                            <div className="text-muted-foreground text-xs mt-1">All options, prices, hotel distances</div>
                        </Link>
                        <Link href="/blog/how-to-get-to-neom-from-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to NEOM guide</div>
                            <div className="text-muted-foreground text-xs mt-1">190 km, private driver only</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-tabuk-to-alula" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Tabuk to AlUla guide</div>
                            <div className="text-muted-foreground text-xs mt-1">330 km, transport options</div>
                        </Link>
                        <Link href="/services/taxi-in-tabuk" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Tabuk</div>
                            <div className="text-muted-foreground text-xs mt-1">Full fleet, city and intercity</div>
                        </Link>
                        <Link href="/booking" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Book your driver</div>
                            <div className="text-muted-foreground text-xs mt-1">Fixed prices, 24/7, English-speaking</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </main>
        </>
    );
}
