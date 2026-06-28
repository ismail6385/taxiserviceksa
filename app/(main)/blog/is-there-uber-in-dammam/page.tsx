import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Is There Uber in Dammam? Apps, Alternatives & What Actually Works (2026)',
    description: 'Yes, Uber and Careem work in Dammam — but they have real limits. Honest guide to ride apps in Dammam, Al Khobar, and the Eastern Province.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/is-there-uber-in-dammam/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/is-there-uber-in-dammam/',
            'ar': 'https://taxiserviceksa.com/blog/is-there-uber-in-dammam/',
            'x-default': 'https://taxiserviceksa.com/blog/is-there-uber-in-dammam/',
        },
    },
    openGraph: {
        title: 'Is There Uber in Dammam? Apps, Alternatives & What Actually Works',
        description: 'Uber and Careem operate in Dammam — but they won\'t work for Bahrain Causeway, airport pickups, or Aramco transfers. Here\'s the full breakdown.',
        url: 'https://taxiserviceksa.com/blog/is-there-uber-in-dammam/',
        siteName: 'Taxi Service KSA',
        type: 'article',
        locale: 'en_US',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Is There Uber in Dammam? Apps, Alternatives & What Actually Works',
    description: 'Honest guide to ride-hailing in Dammam and Eastern Province: what Uber and Careem cover, where they fall short, and the best alternatives for airport and Bahrain transfers.',
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
            name: 'Is Uber available in Dammam Saudi Arabia?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Uber operates in Dammam and Al Khobar. Careem (owned by Uber) is also available. Both work well for short city rides. However, for airport pickups at King Fahd International Airport (DMM), cross-border trips to Bahrain, and Aramco Dhahran transfers, a pre-booked private driver is more reliable.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does Careem work in Dammam?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Careem operates in Dammam, Al Khobar, and Dhahran. It is often the more popular app in Eastern Province. Availability is best during daytime hours in central Dammam and the Al Khobar Corniche area.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I take Uber from Dammam to Bahrain?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Uber and Careem do not cover cross-border trips. Dammam to Bahrain (95 km via King Fahd Causeway) requires a pre-booked private car service. Our drivers are experienced with the Causeway border crossing and handle this route regularly.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Uber available at Dammam Airport (DMM)?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'App availability at King Fahd International Airport is inconsistent, especially for late-night and early-morning arrivals. Surge pricing is common when multiple flights land simultaneously. Pre-booking a private transfer guarantees a driver with a name sign waiting at arrivals.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I get Uber from Dammam to Aramco (Dhahran)?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Uber and Careem cars can technically go to Dhahran (it\'s a short 15 km city ride), but they cannot access the Aramco compound. For Saudi Aramco compound entrances and visitor procedures, a pre-booked private driver who knows the gates is the right option.',
            },
        },
    ],
};

export default function IsThereUberInDammamPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="max-w-3xl mx-auto px-4 py-10">

                <header className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Dammam &rsaquo; Getting Around &rsaquo; Ride Apps</p>
                    <h1 className="text-3xl font-bold leading-tight mb-4">
                        Is There Uber in Dammam? Apps, Alternatives &amp; What Actually Works (2026)
                    </h1>
                    <p className="text-muted-foreground text-sm">Updated June 2026 &bull; 5 min read</p>
                </header>

                <div className="tldr-summary bg-muted border-l-4 border-primary rounded-r-lg p-5 mb-8">
                    <p className="font-semibold text-sm uppercase tracking-wide mb-2">TL;DR</p>
                    <ul className="space-y-1 text-sm">
                        <li>✅ <strong>Uber:</strong> Works in Dammam &amp; Al Khobar city — unreliable at airport</li>
                        <li>✅ <strong>Careem:</strong> More widely used in Eastern Province — good for city rides</li>
                        <li>❌ <strong>Bahrain Causeway:</strong> Neither app covers cross-border trips</li>
                        <li>❌ <strong>Airport (DMM):</strong> Inconsistent pickup — pre-book for all flights</li>
                        <li>❌ <strong>Aramco compound access:</strong> App drivers cannot enter — private driver only</li>
                        <li>🚗 <strong>Best for airport, Bahrain &amp; Aramco:</strong> Pre-booked private driver</li>
                    </ul>
                </div>

                <section className="mb-8 prose prose-sm max-w-none">
                    <p className="speakable-answer">
                        Short answer: yes, Uber and Careem both operate in Dammam and Al Khobar. But &quot;available in Dammam&quot; doesn&apos;t mean they work for every type of journey in the Eastern Province. Here&apos;s an honest breakdown of when to use them and when to book a private driver instead.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Uber vs Careem in Dammam</h2>
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
                                    { feat: 'Available in Dammam', uber: '✅ Yes', careem: '✅ Yes' },
                                    { feat: 'Available in Al Khobar', uber: '✅ Yes', careem: '✅ Yes' },
                                    { feat: 'Available in Dhahran', uber: '✅ Yes', careem: '✅ Yes' },
                                    { feat: 'City rides', uber: '✅ Good', careem: '✅ Good' },
                                    { feat: 'DMM Airport pickup', uber: '⚠️ Inconsistent', careem: '⚠️ Inconsistent' },
                                    { feat: 'Dammam → Bahrain (cross-border)', uber: '❌ Not available', careem: '❌ Not available' },
                                    { feat: 'Aramco compound access', uber: '❌ No entry', careem: '❌ No entry' },
                                    { feat: 'English-speaking driver', uber: '⚠️ Not guaranteed', careem: '⚠️ Not guaranteed' },
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

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">When Uber/Careem Works Fine in Dammam</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { title: 'Short city rides in Dammam', desc: 'Hotel to mall, corniche, or business district. 10–25 minute rides. Both apps have reasonable driver availability in central Dammam during the day.' },
                            { title: 'Al Khobar city rides', desc: 'The Corniche strip, shopping districts, and business hotels in Al Khobar are well served. Expect 5–15 minute wait times.' },
                            { title: 'Dammam to Al Khobar', desc: 'The 20 km connection between Dammam and Al Khobar is covered by both apps. It\'s a quick city-to-city hop that works fine.' },
                            { title: 'Budget rides', desc: 'For short hops where price matters more than certainty, Uber and Careem are cheaper than a private driver. A 15 km city ride costs SAR 25–50.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-3 border-green-300 bg-green-50">
                                <div className="font-semibold text-green-800 mb-1">{item.title}</div>
                                <div className="text-green-700 text-xs">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">When NOT to Rely on Uber/Careem in Dammam</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        {[
                            { title: 'Dammam Airport (DMM) pickup', desc: 'King Fahd International Airport is 35 km from the city. App availability at arrivals is inconsistent — especially for late-night flights. A pre-booked private transfer guarantees your driver is waiting with a name sign.' },
                            { title: 'Bahrain Causeway transfers', desc: 'Neither Uber nor Careem offers cross-border trips. For the 95 km journey from Dammam to Bahrain (Manama) via King Fahd Causeway, you need a pre-booked private car with a driver experienced in the border crossing.' },
                            { title: 'Saudi Aramco / Dhahran compound', desc: 'Aramco compound entrances require advance visitor registration. Regular ride-hailing drivers do not know the correct gates and cannot enter. Our drivers know the compound procedures for employee and contractor visits.' },
                            { title: 'Jubail Industrial City', desc: 'Jubail is 95 km north of Dammam. Uber and Careem do not cover this distance. A pre-booked private car is the only practical option for Jubail transfers.' },
                            { title: 'Large families and groups', desc: 'Standard app cars seat 3–4 passengers with limited luggage. For families with multiple bags, GMC Yukon XL or Toyota Hiace pre-bookings offer far more comfort and space.' },
                            { title: 'Fixed-price guarantee', desc: 'Surge pricing applies during Eid and peak travel periods. A pre-booked private transfer is a fixed rate agreed before the journey — no meter, no surprises at the Causeway.' },
                        ].map((item, i) => (
                            <div key={i} className="border rounded-lg p-3 border-red-200 bg-red-50">
                                <div className="font-semibold text-red-800 mb-1">{item.title}</div>
                                <div className="text-red-700 text-xs">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Uber vs Private Driver in Dammam &amp; Eastern Province</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="border px-3 py-2 text-left">Journey type</th>
                                    <th className="border px-3 py-2 text-left">Use Uber/Careem?</th>
                                    <th className="border px-3 py-2 text-left">Use private driver?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { journey: 'Hotel to restaurant in Dammam city', uber: '✅ Fine', private: 'Optional' },
                                    { journey: 'Dammam to Al Khobar', uber: '✅ Fine', private: 'Optional' },
                                    { journey: 'DMM Airport pickup', uber: '⚠️ Risky', private: '✅ Yes — guaranteed' },
                                    { journey: 'DMM Airport drop-off', uber: '✅ Usually fine', private: '✅ Yes' },
                                    { journey: 'Dammam → Bahrain (Manama)', uber: '❌ Not available', private: '✅ Only option' },
                                    { journey: 'Dammam → Aramco Dhahran', uber: '⚠️ Partial (no compound access)', private: '✅ Yes' },
                                    { journey: 'Dammam → Jubail', uber: '❌ Not available', private: '✅ Only option' },
                                    { journey: 'Dammam → Riyadh', uber: '❌ Not available', private: '✅ Only option' },
                                    { journey: 'Late-night or early-morning flights', uber: '❌ Unreliable', private: '✅ Yes — 24/7' },
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

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-5 mb-8">
                    <h3 className="font-semibold mb-2">Need a Reliable Driver in Dammam?</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                        Available for DMM Airport pickups, Bahrain Causeway transfers, Aramco Dhahran visits, and all Eastern Province routes. English-speaking drivers, fixed prices, 24/7 availability.
                    </p>
                    <a
                        href="https://wa.me/966553270009?text=Hi%2C%20I%20need%20a%20private%20driver%20in%20Dammam.%20Please%20share%20availability%20and%20pricing."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                    >
                        WhatsApp: Book a Dammam Driver
                    </a>
                </div>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'Is Uber available in Dammam Saudi Arabia?',
                                a: 'Yes, Uber operates in Dammam and Al Khobar. Careem (owned by Uber) is also available. Both work well for short city rides. However, for airport pickups at King Fahd International Airport (DMM), cross-border trips to Bahrain, and Aramco Dhahran transfers, a pre-booked private driver is more reliable.',
                            },
                            {
                                q: 'Does Careem work in Dammam?',
                                a: 'Yes, Careem operates in Dammam, Al Khobar, and Dhahran. It is often the more popular app in Eastern Province. Availability is best during daytime hours in central Dammam and the Al Khobar Corniche area.',
                            },
                            {
                                q: 'Can I take Uber from Dammam to Bahrain?',
                                a: 'No. Uber and Careem do not cover cross-border trips. Dammam to Bahrain (95 km via King Fahd Causeway) requires a pre-booked private car service. Our drivers are experienced with the Causeway border crossing and handle this route regularly.',
                            },
                            {
                                q: 'Is Uber available at Dammam Airport (DMM)?',
                                a: 'App availability at King Fahd International Airport is inconsistent, especially for late-night and early-morning arrivals. Surge pricing is common when multiple flights land simultaneously. Pre-booking a private transfer guarantees a driver with a name sign waiting at arrivals.',
                            },
                            {
                                q: 'Can I get Uber from Dammam to Aramco (Dhahran)?',
                                a: 'Uber and Careem cars can go to Dhahran city (it\'s a short 15 km ride), but they cannot access the Aramco compound. For Saudi Aramco compound entrances and visitor procedures, a pre-booked private driver who knows the gates is the right option.',
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
                    <h2 className="text-xl font-bold mb-4">More Dammam Transport Guides</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <Link href="/dammam-airport-taxi/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam Airport Taxi (DMM)</div>
                            <div className="text-muted-foreground text-xs mt-1">Meet-and-greet, fixed rates, 24/7 from King Fahd Airport</div>
                        </Link>
                        <Link href="/blog/how-to-get-from-dammam-airport-to-city/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">DMM Airport → Dammam city guide</div>
                            <div className="text-muted-foreground text-xs mt-1">All transport options, prices, Al Khobar distances</div>
                        </Link>
                        <Link href="/routes/dammam-bahrain/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam → Bahrain route</div>
                            <div className="text-muted-foreground text-xs mt-1">95 km, King Fahd Causeway, private car only</div>
                        </Link>
                        <Link href="/services/taxi-in-dammam/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Taxi service in Dammam</div>
                            <div className="text-muted-foreground text-xs mt-1">Eastern Province private car hire — all routes</div>
                        </Link>
                        <Link href="/blog/how-much-is-taxi-from-dammam-to-al-khobar/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam to Al Khobar taxi price</div>
                            <div className="text-muted-foreground text-xs mt-1">Costs, distance, how long it takes</div>
                        </Link>
                        <Link href="/routes/dammam-riyadh/" className="border rounded-lg p-3 hover:bg-muted transition-colors">
                            <div className="font-medium">Dammam → Riyadh route</div>
                            <div className="text-muted-foreground text-xs mt-1">400 km intercity private car transfer</div>
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} />
            </main>
        </>
    );
}
