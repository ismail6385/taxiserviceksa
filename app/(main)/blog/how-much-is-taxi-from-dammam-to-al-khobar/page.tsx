import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'How Much Is a Taxi from Dammam to Al Khobar? (2026 Prices)',
    description: 'Taxi from Dammam to Al Khobar costs SAR 80–150 depending on vehicle and route. Private car, Uber, and metered taxi — actual 2026 prices compared.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/how-much-is-taxi-from-dammam-to-al-khobar/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/how-much-is-taxi-from-dammam-to-al-khobar/',
            'ar': 'https://taxiserviceksa.com/blog/how-much-is-taxi-from-dammam-to-al-khobar/',
            'x-default': 'https://taxiserviceksa.com/blog/how-much-is-taxi-from-dammam-to-al-khobar/',
        },
    },
    openGraph: {
        title: 'Taxi from Dammam to Al Khobar — 2026 Prices & Options',
        description: 'Dammam to Al Khobar is 20 km — about 20–30 minutes by car. Private taxi costs SAR 80–150. Here\'s what to expect and when to pre-book.',
        url: 'https://taxiserviceksa.com/blog/how-much-is-taxi-from-dammam-to-al-khobar/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Is a Taxi from Dammam to Al Khobar? (2026 Prices)',
    description: 'Actual 2026 taxi prices from Dammam to Al Khobar. Includes private transfer, Uber, and metered taxi costs, plus how long the journey takes.',
    author: { '@type': 'Person', name: 'Muhammad Ismail' },
    publisher: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
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
            name: 'How much is a taxi from Dammam to Al Khobar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A private taxi from Dammam city to Al Khobar costs approximately SAR 80–150 depending on the vehicle and exact pickup/drop-off location. Uber and Careem typically cost SAR 60–120 but may include surge pricing. Metered taxis are available but prices vary. A pre-booked private car offers a fixed price agreed in advance.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long does it take to drive from Dammam to Al Khobar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The drive from Dammam to Al Khobar takes approximately 20–30 minutes on a normal day. The distance is about 20 km. During peak hours (7–9am and 4–7pm on weekdays), traffic on the King Fahd road can add 10–20 minutes.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there Uber between Dammam and Al Khobar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Uber and Careem both cover the Dammam to Al Khobar route. It is a short city-to-city hop and app availability is generally good during daytime hours. Surge pricing can apply during evening rush hour and Eid periods.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I get a private car from Dammam to Al Khobar?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Taxi Service KSA provides private car transfers from Dammam to Al Khobar at a fixed rate — no meter, no surge. Toyota Camry is standard. GMC Yukon XL is available for families or groups. Half-day hire is available if you need the driver to wait between stops in Al Khobar.',
            },
        },
    ],
};

export default function DammamToAlKhobarTaxiPricePage() {
    const priceTable = [
        { option: 'Uber / Careem (standard car)', price: 'SAR 60–120', notes: 'Surge pricing may apply at peak times' },
        { option: 'Metered airport taxi', price: 'SAR 80–140 (estimated)', notes: 'Meter running — final price varies' },
        { option: 'Pre-booked private car (Toyota Camry)', price: 'SAR 80–150', notes: 'Fixed rate — agreed before trip' },
        { option: 'Pre-booked private car (GMC Yukon XL)', price: 'SAR 150–200', notes: 'For families, groups, extra luggage' },
        { option: 'Pre-booked private car (Cadillac Escalade)', price: 'SAR 200–280', notes: 'VIP/executive class' },
    ];

    const dropoffs = [
        { place: 'Al Khobar Corniche', time: '20–30 min', note: 'Coastal strip, restaurants, hotels' },
        { place: 'Al Khobar City Centre (Al Rashid Mall area)', time: '25–35 min', note: 'Shopping, business district' },
        { place: 'Half Moon Bay', time: '35–50 min', note: 'South of Al Khobar, beach resort area' },
        { place: 'Al Khobar Business Gate', time: '20–25 min', note: 'Corporate office towers' },
        { place: 'Dhahran (Aramco area)', time: '15–20 min from Dammam', note: 'Between Dammam and Al Khobar' },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Dammam &rsaquo; Eastern Province &rsaquo; Taxi Prices</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        How Much Is a Taxi from Dammam to Al Khobar? (2026 Prices)
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated June 2026 &bull; 4 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR — Quick Answer</p>
                    <ul className="space-y-1 text-sm">
                        <li>📍 <strong>Distance:</strong> ~20 km from Dammam city to Al Khobar city</li>
                        <li>⏱️ <strong>Drive time:</strong> 20–30 min (longer in rush hour)</li>
                        <li>💰 <strong>Uber/Careem:</strong> SAR 60–120 (surge pricing possible)</li>
                        <li>💰 <strong>Private pre-booked:</strong> SAR 80–150 (fixed rate)</li>
                        <li>✅ <strong>Best option:</strong> Uber for quick city hops; pre-booked car for groups or airport connections</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p className="speakable-answer">
                        Dammam to Al Khobar is one of the most frequently travelled routes in the Eastern Province. The two cities are essentially neighbours — 20 km apart, connected by the King Fahd highway. A normal trip takes 20–30 minutes. For most people, Uber or Careem works fine for this route during the day. If you need a fixed price, a larger vehicle, or a transfer connected to the airport, a pre-booked private car is the better choice.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-4">Dammam to Al Khobar Taxi Prices (2026)</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Option</th>
                                    <th className="border px-3 py-2 text-left">Approx Cost</th>
                                    <th className="border px-3 py-2 text-left">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {priceTable.map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.option}</td>
                                        <td className="border px-3 py-2">{row.price}</td>
                                        <td className="border px-3 py-2 text-muted-foreground text-xs">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Prices are estimates as of June 2026. Exact rates depend on pickup/drop-off location and vehicle class.</p>
                </section>

                <section className="mb-10">
                    <h2 className="text-xl font-bold mb-4">Travel Times to Key Al Khobar Destinations</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Destination</th>
                                    <th className="border px-3 py-2 text-left">Drive Time from Dammam</th>
                                    <th className="border px-3 py-2 text-left">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dropoffs.map((row, i) => (
                                    <tr key={i} className="even:bg-muted/30">
                                        <td className="border px-3 py-2 font-medium">{row.place}</td>
                                        <td className="border px-3 py-2">{row.time}</td>
                                        <td className="border px-3 py-2 text-muted-foreground text-xs">{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">When to Use Uber vs Pre-booked Private Car</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="border rounded-lg p-4 border-green-300 bg-green-50">
                            <h3 className="font-semibold text-green-800 mb-2">Use Uber/Careem when:</h3>
                            <ul className="space-y-1 text-green-700 text-xs">
                                <li>✅ Short city hop — hotel to Corniche</li>
                                <li>✅ Travelling solo or with one bag</li>
                                <li>✅ Daytime (8am–10pm)</li>
                                <li>✅ Not connecting to airport or Bahrain</li>
                                <li>✅ Budget priority over certainty</li>
                            </ul>
                        </div>
                        <div className="border rounded-lg p-4 border-blue-200 bg-blue-50">
                            <h3 className="font-semibold text-blue-800 mb-2">Use pre-booked private car when:</h3>
                            <ul className="space-y-1 text-blue-700 text-xs">
                                <li>✅ Fixed price required (corporate, reimbursement)</li>
                                <li>✅ Family with luggage — need Yukon XL or Hiace</li>
                                <li>✅ Connecting from DMM Airport</li>
                                <li>✅ Continuing to Bahrain Causeway</li>
                                <li>✅ Early morning or late-night journey</li>
                                <li>✅ English-speaking driver needed</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Book a Private Car from Dammam to Al Khobar</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Fixed rate, no surge pricing. Toyota Camry to GMC Yukon XL. English-speaking driver available. Half-day hire if you need waiting time between stops.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20taxi%20from%20Dammam%20to%20Al%20Khobar.%20Please%20send%20the%20price."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Get a Quote
                    </a>
                </div>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'How much is a taxi from Dammam to Al Khobar?',
                                a: 'A private taxi from Dammam city to Al Khobar costs approximately SAR 80–150 depending on the vehicle and exact route. Uber and Careem typically cost SAR 60–120 but surge pricing may apply. A pre-booked private car offers a fixed rate agreed in advance.',
                            },
                            {
                                q: 'How long does it take to drive from Dammam to Al Khobar?',
                                a: 'The drive from Dammam to Al Khobar takes approximately 20–30 minutes. The distance is about 20 km. During peak hours (7–9am and 4–7pm on weekdays), traffic can add 10–20 minutes.',
                            },
                            {
                                q: 'Is there Uber between Dammam and Al Khobar?',
                                a: 'Yes. Uber and Careem both cover the Dammam to Al Khobar route. It is a short city-to-city hop and app availability is generally good during daytime hours. Surge pricing can apply during rush hour.',
                            },
                            {
                                q: 'Can I get a private car from Dammam to Al Khobar?',
                                a: 'Yes. Taxi Service KSA provides private car transfers from Dammam to Al Khobar at a fixed rate. Toyota Camry is standard. GMC Yukon XL is available for families or groups. Half-day hire is available if you need the driver to wait between stops.',
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
                    <h2 className="text-xl font-bold mb-4">Related Eastern Province Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/services/taxi-in-dammam/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Dammam</div>
                            <div className="text-muted-foreground text-xs mt-1">All Eastern Province routes</div>
                        </Link>
                        <Link href="/dammam-airport-taxi/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam Airport (DMM) transfers</div>
                            <div className="text-muted-foreground text-xs mt-1">Airport pickup and drop-off</div>
                        </Link>
                        <Link href="/routes/dammam-bahrain/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam → Bahrain route</div>
                            <div className="text-muted-foreground text-xs mt-1">Causeway crossing, private car</div>
                        </Link>
                        <Link href="/blog/is-there-uber-in-dammam/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Is there Uber in Dammam?</div>
                            <div className="text-muted-foreground text-xs mt-1">App guide for Eastern Province</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} />
            </main>
        </>
    );
}
