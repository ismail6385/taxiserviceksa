import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Star, ArrowRight, Phone, Landmark, Shield, Info } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Floating Mosque (Al Rahma) Travel Guide | Jeddah Landmark',
    description: 'Visit the famous Floating Mosque (Al Rahma Mosque) in Jeddah. Discover opening hours, high tide schedules, entry guidelines, architecture, and transportation tips in 2026.',
    keywords: [
        'Floating Mosque Jeddah',
        'Al Rahma Mosque guide',
        'Jeddah floating mosque guide 2026',
        'floating mosque opening hours',
        'floating mosque entry fee',
        'mosque on pillars Red Sea',
        'things to do in Jeddah',
        'Jeddah Corniche attractions',
        'Jeddah sightseeing private taxi',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/floating-mosque-al-rahma-mosque-travel-guide/',
    },
    openGraph: {
        title: 'Floating Mosque (Al Rahma) Travel Guide | Jeddah Landmark',
        description: 'Complete visitor guide to the Floating Mosque (Al Rahma) in Jeddah. Learn when to visit for the best views, dress code guidelines, and transit info.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/floating-mosque-al-rahma-mosque-travel-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can non-Muslims visit the Floating Mosque in Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, non-Muslim tourists are welcome to visit the grounds, courtyard, and public walkways surrounding the Al Rahma Floating Mosque. However, entry into the main prayer hall is reserved exclusively for Muslims, especially during the five daily prayer times.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there an entry fee for the Floating Mosque?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, entry to the Al Rahma Floating Mosque is completely free for all visitors. There are no tickets or parking fees for visiting the seaside promenade next to the mosque.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best time to see the floating effect?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The floating effect is visible only during high tide when the Red Sea water level rises around the supporting pillars of the mosque. The best times of day to visit are golden hour (just before sunset) or early morning at sunrise when reflections on the water are most prominent.',
            },
        },
        {
            '@type': 'Question',
            name: 'What should I wear when visiting the Floating Mosque?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'All visitors must dress modestly. Both men and women should wear clothing that covers their shoulders and knees. Women do not need to cover their head on the public walkways, but must wear a headscarf (hijab) and abaya if they qualify and plan to enter the interior prayer spaces.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Floating Mosque (Al Rahma Mosque) Travel Guide: Everything Visitors Need to Know',
    description: 'A detailed visitor guide for the Floating Mosque in Jeddah, covering history, Hejazi architectural details, tide times, dress code, and local transport options.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-27T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/floating-mosque-al-rahma-mosque-travel-guide/' },
};

export default function FloatingMosqueGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Floating Mosque Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🕌 Spiritual Landmark</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 6 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Floating Mosque<br />
                        <span className="text-cyan-300">Al Rahma Travel Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Discover the breathtaking mosque built over the Red Sea. Learn how to time your visit for high tide, understand architectural heritage, and get details on transport and dress codes.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20driver%20to%20visit%20the%20Floating%20Mosque%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Driver to Floating Mosque
                        </a>
                        <Link href="/jeddah-airport-transfer/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Chauffeur Details <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Fact Grid */}
            <div className="bg-blue-50 border-b border-blue-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Built In', value: '1985', icon: '🏗️' },
                            { label: 'Built Over', value: 'Red Sea', icon: '🌊' },
                            { label: 'Entrance Fee', value: 'Free', icon: '🆓' },
                            { label: 'Capacity', value: '1,500 people', icon: '👥' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-xl font-black text-blue-700">{stat.value}</div>
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
                    <h2 className="text-3xl font-black text-gray-900">Jeddah\'s Iconic Sanctuary on the Waves</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Among the dozens of spectacular modern developments lining the Red Sea, the **Al Rahma Mosque (مسجد الرحمة)**, universally known as the **Floating Mosque**, is Jeddah\'s most beloved spiritual and visual landmark. 
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Constructed in 1985 on the northern edge of the Jeddah Corniche, this architectural masterpiece sits on giant concrete pillars anchored directly into the seabed. During high tide, the surrounding water rises to submerge the pillars, creating the magical illusion that the entire mosque is floating freely on the turquoise waters of the Red Sea.
                    </p>
                </section>

                {/* Section 2: Architecture */}
                <section className="space-y-4 bg-blue-50/40 p-8 rounded-3xl border border-blue-100">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🕌</span>
                        <h3 className="text-2xl font-black text-gray-900">The Architecture: Traditional Meets Modern</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        The Floating Mosque is a brilliant combination of classic Islamic building methods and late 20th-century design. Its exterior features a central dome clad in pale turquoise and white colors, matching the changing tones of the Red Sea. Surrounding the main dome are smaller domes and a single, tall white minaret that acts as a beacon for incoming maritime traffic.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Inside, the main prayer hall is a showcase of traditional craftsmanship. Natural light pours in through detailed stained glass windows, illuminating classic Andalusian geometric tiles, custom carpet, and a grand central chandelier. The hall also features a suspended wooden balcony dedicated as a prayer space for women.
                    </p>
                </section>

                {/* Section 3: Golden Hours */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🌅</span>
                        <h3 className="text-2xl font-black text-gray-900">When is the Best Time to Visit?</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        To capture the most beautiful photos and experience the mosque at its best, timing is everything:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                        <li><strong>Golden Hour (Sunset):</strong> Watching the sun sink into the Red Sea directly behind the mosque, casting red and golden hues across its white domes, is one of the most stunning sights in Saudi Arabia.</li>
                        <li><strong>High Tide:</strong> The "floating" effect is only complete when the tide is high. Check local Jeddah tide forecasts before heading out.</li>
                        <li><strong>Sunrise (Fajr):</strong> For a calm, spiritual experience, arrive at dawn. The morning light reflecting off the mirror-flat Red Sea is highly peaceful.</li>
                    </ul>
                </section>

                {/* Section 4: Rules & Guidelines */}
                <section className="space-y-4 bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-amber-700" />
                        <h3 className="text-2xl font-black text-gray-900">Guidelines for International Visitors</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        As a fully active house of worship, visitors must respect local religious customs:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mt-2">
                        <div className="bg-white rounded-xl p-4 border border-amber-100 text-sm">
                            <strong>👗 Modest Clothing:</strong> Both men and women must cover their shoulders and knees. Tight-fitting clothing or beachwear is strictly prohibited.
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-amber-100 text-sm">
                            <strong>🧣 Head Coverings:</strong> Women do not need to cover their head while walking around the exterior courtyard, but must wear a hijab to go inside.
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-amber-100 text-sm">
                            <strong>🚪 Non-Muslim Entry:</strong> Walkways, courtyards, and gardens are open to all. The indoor prayer hall is only open for Muslim prayers.
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-amber-100 text-sm">
                            <strong>🔇 Respect Quiet Hours:</strong> During the five daily call to prayers (Adhan), ensure phones are silent and avoid loud conversations.
                        </div>
                    </div>
                </section>

                {/* Section 5: Transportation */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">How to Get to the Floating Mosque</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The mosque is located in the northern sector of the Jeddah Corniche (Al Shati District), approximately 25 km north of downtown Jeddah and 20 km south of Obhur Creek. 
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Pre-booking a private driver is highly recommended. The parking areas near the mosque get congested, especially on Fridays. Having a private driver ensures you get dropped directly at the pedestrian entrance walkway and picked up without hassle.
                    </p>

                    {/* Pricing Table */}
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mt-4">
                        <div className="bg-blue-950 text-white px-6 py-4">
                            <h3 className="font-bold text-lg">Private Car Transfer Rates to Floating Mosque</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                                    <tr>
                                        <th className="text-left px-5 py-3">From Location</th>
                                        <th className="text-left px-5 py-3">Distance</th>
                                        <th className="text-left px-5 py-3">Drive Time</th>
                                        <th className="text-left px-5 py-3">Fixed Rate (Sedan / Luxury SUV)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { from: 'Jeddah Airport (JED)', dist: '18 km', time: '20–25 min', price: 'SAR 80 / SAR 150' },
                                        { from: 'Al Hamra Corniche Hotels', dist: '14 km', time: '20 min', price: 'SAR 60 / SAR 100' },
                                        { from: 'Al Balad (Historic Old Town)', dist: '20 km', time: '25–30 min', price: 'SAR 70 / SAR 130' },
                                        { from: 'Makkah Al Haram Hotels', dist: '95 km', time: '70 min', price: 'SAR 300 / SAR 600' },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-5 py-3 font-medium text-gray-800">{row.from}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.dist}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.time}</td>
                                            <td className="px-5 py-3 font-bold text-blue-700">{row.price}</td>
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
                <section className="bg-gradient-to-br from-blue-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Landmark className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Ride to the Floating Mosque</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Combine your visit to the Floating Mosque with a complete tour of the Jeddah Corniche. English-speaking drivers, luxury vehicles, and 24/7 service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20taxi%20transfer%20to%20the%20Floating%20Mosque%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp (English)
                        </a>
                        <Link href="/jeddah-airport-transfer/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Airport Pickup details <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
