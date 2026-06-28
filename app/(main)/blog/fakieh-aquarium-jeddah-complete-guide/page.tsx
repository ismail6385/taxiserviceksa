import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Star, ArrowRight, Phone, Compass, Info, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Fakieh Aquarium Jeddah 2026 | Ticket Price, Shows & Guide',
    description: 'Planning a visit to Fakieh Aquarium in Jeddah? Discover ticket prices, dolphin show timings, opening hours, marine life highlights, and transportation tips.',
    keywords: [
        'Fakieh Aquarium Jeddah',
        'Fakieh Aquarium ticket price',
        'Fakieh Aquarium dolphin show timings',
        'Fakieh Aquarium opening hours',
        'Jeddah aquarium travel guide 2026',
        'Red Sea marine life Jeddah',
        'things to do in Jeddah for families',
        'Jeddah Corniche attractions taxi',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/fakieh-aquarium-jeddah-complete-guide/',
    },
    openGraph: {
        title: 'Fakieh Aquarium Jeddah 2026 | Ticket Price, Shows & Guide',
        description: 'Your ultimate family guide to visiting Fakieh Aquarium on the Jeddah Corniche. Entry fees, schedules, marine exhibitions, and private chauffeur options.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/fakieh-aquarium-jeddah-complete-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How much is the ticket for Fakieh Aquarium Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The standard entry ticket for Fakieh Aquarium is SAR 55–65 per person. Children under the age of 2 enter for free. The dolphin and sea lion show requires a separate ticket, which is typically SAR 50–55 per person.',
            },
        },
        {
            '@type': 'Question',
            name: 'What are the dolphin show timings at Fakieh Aquarium?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dolphin and sea lion shows run daily in the amphitheater. The usual timings are 6:30 PM and 9:00 PM. On Fridays and public holidays, an additional afternoon show is often added at 4:30 PM. It is highly recommended to check schedules at the ticketing counter upon arrival.',
            },
        },
        {
            '@type': 'Question',
            name: 'What are the opening hours of Fakieh Aquarium?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Fakieh Aquarium is open daily. Saturday to Thursday hours are 1:00 PM to 11:00 PM. On Fridays, the aquarium opens from 1:00 PM to midnight. It is recommended to visit on weekday afternoons for the least crowded experience.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do you get to Fakieh Aquarium?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Fakieh Aquarium is located on the North Corniche Road in Al Shati District, Jeddah. The most convenient transport option for tourists and families is a pre-booked private taxi or family van. A private transfer from central Jeddah hotels costs around SAR 40–60 (~$11–16 USD).',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fakieh Aquarium Jeddah 2026: Complete Visitor Guide & Ticket Info',
    description: 'An in-depth visitor guide for Fakieh Aquarium in Jeddah, covering Red Sea marine life exhibitions, show schedules, ticket details, and family travel tips.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-27T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/fakieh-aquarium-jeddah-complete-guide/' },
};

export default function FakiehAquariumGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-cyan-950 via-slate-900 to-cyan-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Fakieh Aquarium Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🐠 Family Attraction</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Fakieh Aquarium<br />
                        <span className="text-cyan-300">Jeddah Complete Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Explore the only public aquarium in Saudi Arabia. Discover rare marine species from the Red Sea, dolphin show times, entry details, and stress-free transport tips for families.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20van%20to%20visit%20Fakieh%20Aquarium%20with%20my%20family" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Family Van on WhatsApp
                        </a>
                        <Link href="/jeddah-airport-transfer/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Transfer Details <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Facts Grid */}
            <div className="bg-cyan-50 border-b border-cyan-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Entry Fee', value: 'SAR 55–65', icon: '🎟️' },
                            { label: 'Dolphin Show', value: 'SAR 50–55', icon: '🐬' },
                            { label: 'Red Sea Species', value: '200+', icon: '🐠' },
                            { label: 'Location', value: 'North Corniche', icon: '📍' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-cyan-100">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-xl font-black text-cyan-700">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">

                {/* Section 1: Intro */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Discover Red Sea Wonders Without Getting Wet</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        For families, tourists, and nature lovers visiting Saudi Arabia, the **Fakieh Aquarium (فقيه أكواريوم)** is one of the most entertaining and educational destinations on the Jeddah Corniche. 
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        As the only public aquarium in the Kingdom of Saudi Arabia, Fakieh offers a unique window into the marine ecosystems of the Red Sea — globally famous for its rich coral reefs and deep-water biodiversity. With over 200 marine species, the aquarium is a perfect family outing, allowing kids and adults to get up close with rare fish, sharks, and exotic sea life.
                    </p>
                </section>

                {/* Section 2: Key Exhibits */}
                <section className="space-y-4 bg-cyan-50/40 p-8 rounded-3xl border border-cyan-100">
                    <div className="flex items-center gap-3">
                        <Compass className="w-6 h-6 text-cyan-700" />
                        <h3 className="text-2xl font-black text-gray-900">Key Exhibits & Highlights</h3>
                    </div>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                            <div>
                                <strong>🦈 Walk-Through Shark Tunnel:</strong> Walk beneath giant acrylic tunnels while reef sharks, zebra sharks, and massive stingrays glide directly overhead.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                            <div>
                                <strong>🐢 Red Sea Coral Reefs:</strong> Vivid living coral reef displays showcasing thousands of colorful reef fish, including clownfish, angelfish, lionfish, and stonefish.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                            <div>
                                <strong>🐬 Dolphin & Sea Lion Show:</strong> A highly popular daily live performance featuring trained dolphins and sea lions demonstrating stunts, jumps, and games.
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Section 3: Show Timings */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-cyan-700" />
                        <h3 className="text-2xl font-black text-gray-900">Dolphin Show & Daily Timings</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        To make the most of your family visit, it is essential to time your trip around the live shows. 
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The dolphin and sea lion shows run twice daily in the open-air amphitheater. Standard show times are at **6:30 PM** and **9:00 PM**. On weekends (Friday/Saturday) and public holidays, an afternoon show is occasionally added at **4:30 PM**. Ticket booths open at 1:00 PM, and show tickets can be purchased at the main counter or booked as a package.
                    </p>
                </section>

                {/* Section 4: Chauffeur & Van booking */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Getting to Fakieh Aquarium with Family</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Fakieh Aquarium is located on the North Corniche Road, Al Shati District, directly opposite Al-Shallal Theme Park. 
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        If you are traveling with children, seniors, or strollers, public transit is not a viable option. Standard ride-hailing apps can also have surge pricing on the Corniche during evenings. Pre-booking a spacious family van (like a Hyundai H1 or Hyundai Staria) with a private chauffeur ensures a seamless, air-conditioned drop-off directly at the aquarium ticket gates, with a driver ready to pick you up as soon as your visit ends.
                    </p>

                    {/* Pricing Table */}
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mt-4">
                        <div className="bg-cyan-950 text-white px-6 py-4">
                            <h3 className="font-bold text-lg">Private Driver Rates to Fakieh Aquarium</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                                    <tr>
                                        <th className="text-left px-5 py-3">From Location</th>
                                        <th className="text-left px-5 py-3">Distance</th>
                                        <th className="text-left px-5 py-3">Drive Time</th>
                                        <th className="text-left px-5 py-3">Private Sedan / Family Van (SAR)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { from: 'Jeddah Airport (JED)', dist: '20 km', time: '25 min', price: 'SAR 80 / SAR 150' },
                                        { from: 'Jeddah Hilton / Corniche Hotels', dist: '3 km', time: '5–10 min', price: 'SAR 40 / SAR 80' },
                                        { from: 'Al Balad (Historic Old Town)', dist: '18 km', time: '25 min', price: 'SAR 60 / SAR 120' },
                                        { from: 'Makkah Al Haram Hotels', dist: '90 km', time: '65 min', price: 'SAR 300 / SAR 600' },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-5 py-3 font-medium text-gray-800">{row.from}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.dist}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.time}</td>
                                            <td className="px-5 py-3 font-bold text-cyan-700">{row.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section>
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-2 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-cyan-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Compass className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Family Transfer to Fakieh Aquarium</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Arrive comfortably and stress-free. Book a spacious family car or VIP chauffeur to Fakieh Aquarium with door-to-door meet and greet service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20family%20transfer%20to%20Fakieh%20Aquarium%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp (English)
                        </a>
                        <Link href="/services/jeddah-corniche-hotel-taxi/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            View Chauffeur Fleet <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
