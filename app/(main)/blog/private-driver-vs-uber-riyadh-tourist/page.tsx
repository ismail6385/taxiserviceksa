import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2, ArrowRight, AlertTriangle, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthorCard from '@/components/AuthorCard';

export const metadata: Metadata = {
    title: 'Private Driver vs Uber in Riyadh: Which is Better for Tourists? (2026) | Taxi Service KSA',
    description: 'Honest comparison for tourists: private driver vs Uber vs Careem in Riyadh. Costs, surge pricing, safety, English speakers, wait times. Which wins for your trip?',
    keywords: [
        'private driver vs Uber Riyadh',
        'is Uber better than private driver Saudi Arabia',
        'Careem vs private chauffeur Riyadh',
        'how to get around Riyadh as a tourist',
        'Uber Riyadh tourist',
        'best way to get around Riyadh',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/private-driver-vs-uber-riyadh-tourist/',
        languages: {
            'en': 'https://taxiserviceksa.com/blog/private-driver-vs-uber-riyadh-tourist/',
            'x-default': 'https://taxiserviceksa.com/blog/private-driver-vs-uber-riyadh-tourist/',
        },
    },
    openGraph: {
        title: 'Private Driver vs Uber in Riyadh: Which is Better for Tourists?',
        description: 'Surge pricing, safety, English speakers, wait times — everything a tourist needs to know before getting around Riyadh.',
        url: 'https://taxiserviceksa.com/blog/private-driver-vs-uber-riyadh-tourist/',
        type: 'article',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is Uber available in Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Uber operates in Riyadh and is widely used. Careem (owned by Uber) is also available and popular with local users. Both apps work reliably in central Riyadh but can have longer wait times in outer districts and surge pricing during peak hours, Ramadan, and Riyadh Season.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does Uber cost in Riyadh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Uber in Riyadh costs approximately SAR 1.5–2.5 per km plus a base fare of SAR 6–10. A typical city centre trip of 10–15 km costs SAR 25–55 during normal hours. Airport transfers (35 km to city) cost SAR 80–150 standard, rising to SAR 200–300+ during surge. Surge pricing is common during morning rush (7–9 AM), evening rush (5–8 PM), Ramadan nights, and Riyadh Season events.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do Uber drivers in Riyadh speak English?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'English proficiency among Uber and Careem drivers in Riyadh is inconsistent. Many drivers speak basic English sufficient for navigation, but detailed conversation or specific instructions may be difficult. If English communication is important — for business visitors, tourists with complex itineraries, or solo female travelers — a pre-booked private driver who is confirmed as English-speaking is the more reliable choice.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is it safe to use Uber in Saudi Arabia?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Uber and Careem are generally safe in Saudi Arabia. Drivers are registered and tracked through the app. However, for solo female travelers, business visitors, or those arriving late at night, a pre-booked private transfer is safer — driver details (name, photo, plate) are shared in advance, you know exactly who is coming, and the vehicle type is guaranteed. Uber cannot guarantee a specific driver or vehicle class.',
            },
        },
    ],
};

export default function PrivateDriverVsUberRiyadhPage() {

    const comparison = [
        { factor: 'Price (city trip)', uber: 'SAR 25–55 (can surge 2–3×)', driver: 'Fixed rate, agreed in advance' },
        { factor: 'Price (airport, 35 km)', uber: 'SAR 80–300+ (surge varies)', driver: 'SAR 120–180 fixed' },
        { factor: 'Booking', uber: 'On-demand via app', driver: 'WhatsApp, 30 min confirmation' },
        { factor: 'Wait time', uber: '5–25 min at airport/peak', driver: 'Driver waiting before you arrive' },
        { factor: 'English speaking', uber: 'Inconsistent', driver: 'Confirmed in advance' },
        { factor: 'Vehicle type', uber: 'Random assignment', driver: 'You choose (Camry to Escalade)' },
        { factor: 'Surge pricing', uber: 'Yes — heavy at peak times', driver: 'Never — fixed rate always' },
        { factor: 'Driver details before arrival', uber: 'Name + photo in app', driver: 'Name, photo, plate via WhatsApp' },
        { factor: 'Waiting between stops', uber: 'Not possible (new trip each time)', driver: 'Included — driver waits' },
        { factor: 'Full-day hire', uber: 'Not available', driver: 'Available (8–10 hrs)' },
        { factor: 'Female-friendly confirmed', uber: 'Cannot guarantee', driver: 'Requested and confirmed' },
        { factor: 'Cancellation risk', uber: 'Driver can cancel', driver: 'Driver pre-assigned, no cancel' },
    ];

    const uberWins = [
        'Short single trips within the same district',
        'Last-minute, unplanned rides',
        'Budget travel — short hops under 10 km',
        'Late-night after events when you need instant pickup',
    ];

    const driverWins = [
        'Airport arrivals — driver waiting, no queue',
        'Full days of sightseeing with multiple stops',
        'Business meetings — arrive professionally',
        'Groups and families (GMC Yukon, Hiace)',
        'Solo female travelers — driver confirmed in advance',
        'Any time surge pricing is active',
        'Tours of Diriyah, Edge of the World, multiple sites',
        'Long-distance intercity (Riyadh → Jeddah, Dammam)',
    ];

    return (
        <div className="bg-white min-h-screen">
            <Script id="faq-uber-driver" type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Riyadh Transport Guide 2026
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Private Driver vs Uber in Riyadh<br />
                        <span className="text-white/70 text-2xl md:text-3xl">Which is Better for Tourists?</span>
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        Both options work in Riyadh — but they are not equal. Here is an honest comparison for international visitors: when Uber is fine, and when you need a pre-booked private driver.
                    </p>
                    <div className="bg-white/10 rounded-2xl p-5 text-left text-sm border border-white/20 tldr-summary">
                        <p className="font-bold text-white mb-2">Quick Answer</p>
                        <p className="text-gray-300 speakable-answer"><strong className="text-white">Uber works fine for short, single city trips</strong> but surges heavily at airport and peak times. A <strong className="text-white">private driver</strong> is better for airport arrivals, full-day sightseeing, business meetings, groups, and female travelers — fixed price, driver waiting, no surge, vehicle choice.</p>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-3 text-sm">
                    <nav className="flex items-center space-x-2 text-gray-500">
                        <Link href="/" className="hover:text-gray-900">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-gray-900">Blog</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium">Private Driver vs Uber Riyadh</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Uber overview */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Using Uber and Careem in Riyadh as a Tourist</h2>
                    <div className="prose prose-lg prose-gray max-w-none">
                        <p>
                            Uber and Careem both operate throughout Riyadh and are a reliable, familiar option for tourists. The apps work identically to how they do at home — open the app, enter your destination, request a ride, track the driver.
                        </p>
                        <p>
                            In central Riyadh (Al Olaya, KAFD, Diplomatic Quarter), wait times are typically 5–10 minutes. At King Khalid Airport, wait times are longer — 15–25 minutes — because the drop-off and pickup zone is far from the terminal exits.
                        </p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-amber-900">
                            <strong>Surge pricing warning:</strong> Riyadh has significant surge events — Riyadh Season (Oct–Feb), National Day (Sep 23), Ramadan nights, Eid, and major concert events. During these periods, Uber and Careem prices can triple or more. If you are arriving during an event period, pre-booking a private transfer at a fixed rate is the sensible choice.
                        </div>
                    </div>
                </section>

                {/* Full comparison table */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Full Comparison: Uber vs Private Driver Riyadh</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-5 py-3 font-bold">Factor</th>
                                    <th className="px-5 py-3 font-bold text-yellow-400">Uber / Careem</th>
                                    <th className="px-5 py-3 font-bold text-emerald-400">Private Driver</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {comparison.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-5 py-3 font-medium text-gray-900">{row.factor}</td>
                                        <td className="px-5 py-3 text-gray-600">{row.uber}</td>
                                        <td className="px-5 py-3 text-emerald-700 font-medium">{row.driver}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* When each wins */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Smartphone className="w-5 h-5" /> When Uber/Careem is Fine
                            </h3>
                            <ul className="space-y-3">
                                {uberWins.map((w, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" /> {w}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> When Private Driver is Better
                            </h3>
                            <ul className="space-y-3">
                                {driverWins.map((w, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> {w}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Practical scenarios */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Real Tourist Scenarios</h2>
                    <div className="space-y-4">
                        {[
                            {
                                label: 'You land at RUH at 11 PM and need to reach your hotel',
                                verdict: 'Private driver',
                                reason: 'Uber wait at RUH is 15–25 min late at night. Surge is likely. Pre-booked driver is waiting at arrivals with your name sign — walk straight to the car.',
                                color: 'bg-emerald-50 border-emerald-200',
                            },
                            {
                                label: 'You want to go from your hotel to one mall and back',
                                verdict: 'Either works',
                                reason: 'A short single trip to Mall of Arabia or Kingdom Centre during off-peak hours is fine on Uber. Expect SAR 20–40 each way.',
                                color: 'bg-blue-50 border-blue-200',
                            },
                            {
                                label: 'You have a full day visiting Diriyah, Al-Masmak, and Kingdom Tower',
                                verdict: 'Private driver',
                                reason: 'Three stops, 40+ km across the city. A full-day driver (SAR 450–600) waits at each site and drives to the next. With Uber you would book 6 separate rides, pay surge on several, and waste 30+ min waiting each time.',
                                color: 'bg-emerald-50 border-emerald-200',
                            },
                            {
                                label: 'You are a solo female traveler in Riyadh for 2 days',
                                verdict: 'Private driver',
                                reason: 'Driver details confirmed in advance, female-friendly driver on request. Far safer and more comfortable than randomly assigned Uber drivers for a first-time solo female visitor.',
                                color: 'bg-emerald-50 border-emerald-200',
                            },
                            {
                                label: 'You are a group of 6 traveling from airport with luggage',
                                verdict: 'Private driver',
                                reason: 'Uber cannot guarantee a 7-seat vehicle at the airport. A pre-booked GMC Yukon XL (7 seats, 5 bags) handles the whole group in one trip at a fixed price.',
                                color: 'bg-emerald-50 border-emerald-200',
                            },
                        ].map((s, i) => (
                            <div key={i} className={`rounded-2xl border p-5 ${s.color}`}>
                                <div className="flex flex-wrap gap-3 items-start justify-between mb-2">
                                    <p className="font-bold text-gray-900 text-sm flex-1">{s.label}</p>
                                    <span className="bg-black text-white font-bold text-xs px-3 py-1 rounded-full flex-shrink-0">→ {s.verdict}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{s.reason}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">FAQ: Uber vs Private Driver Riyadh</h2>
                    <div className="space-y-5">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                                <h3 className="font-bold text-gray-900 mb-3">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed speakable-answer">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="mb-16 bg-black text-white rounded-3xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Book a Private Driver for Your Riyadh Visit</h2>
                    <p className="text-gray-400 mb-6 max-w-xl mx-auto">Airport pickup, full-day sightseeing, or business meetings — one professional English-speaking driver for your entire trip. Fixed rate, no surge.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20a%20private%20driver%20in%20Riyadh%20for%20tourism" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-bold px-8">
                                Book via WhatsApp <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/riyadh-chauffeur/">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold px-8">
                                View Riyadh Chauffeur
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* Internal links */}
                <section className="mb-16 border-t border-gray-200 pt-10">
                    <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <Link href="/blog/how-to-get-from-riyadh-airport-to-city/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            All Transport Options: RUH Airport
                        </Link>
                        <Link href="/blog/should-i-rent-a-car-in-saudi-arabia/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Should I Rent a Car in Saudi Arabia?
                        </Link>
                        <Link href="/services/tourism-transport/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Tourist Transport Packages
                        </Link>
                        <Link href="/services/women-transport/" className="flex items-center gap-2 text-gray-700 hover:text-black group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            Women&apos;s Transport Saudi Arabia
                        </Link>
                    </div>
                </section>

                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border border-gray-200" />
            </div>
        </div>
    );
}
