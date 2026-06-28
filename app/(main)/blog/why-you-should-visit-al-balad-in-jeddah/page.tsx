import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Star, ArrowRight, Phone, Landmark, Shield, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Why You Should Visit Al-Balad in Jeddah | Historic Hejaz Guide',
    description: 'Explore Al-Balad, the UNESCO World Heritage heart of Jeddah. Learn why you must visit this 1,400-year-old historic gate to Makkah, Nassif House, coral architecture, and traditional souqs.',
    keywords: [
        'visit Al-Balad Jeddah',
        'why visit Al Balad',
        'historic Jeddah guide',
        'UNESCO Al Balad Saudi Arabia',
        'Nassif House Jeddah',
        'Hejazi architecture Rawasheen',
        'things to do in Al Balad',
        'Al Balad souqs guide',
        'getting to Al Balad',
        'Jeddah historic district taxi',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/why-you-should-visit-al-balad-in-jeddah/',
    },
    openGraph: {
        title: 'Why You Should Visit Al-Balad in Jeddah | Historic Hejaz Guide',
        description: 'Explore the UNESCO-listed coral-stone streets, ancient palaces, and traditional souqs of Historic Jeddah (Al-Balad) with our complete visitor guide.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/why-you-should-visit-al-balad-in-jeddah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Why is Al-Balad famous?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Al-Balad is famous for its unique Hejazi coral-stone architecture with towering multi-story buildings and ornate wooden balconies (Rawasheen). Inscribed as a UNESCO World Heritage Site in 2014, it has been the historical gate to Makkah for pilgrims arriving by sea since 647 CE.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there an entry fee for Al-Balad Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, entering the historic Al-Balad district is completely free. You can walk its lanes, explore public squares, and visit the souqs without any tickets. Some specific museums or restored houses may charge a nominal entrance fee of SAR 10–20 (~$3–5 USD).',
            },
        },
        {
            '@type': 'Question',
            name: 'How do you get to Al-Balad in Jeddah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best way is by pre-booked private taxi or chauffeur. Driving yourself is not recommended due to narrow alleys, heavy traffic, and extremely limited parking spaces. A private transfer from central Jeddah hotels to Al-Balad starts from SAR 40–60 (~$11–16 USD) one way.',
            },
        },
        {
            '@type': 'Question',
            name: 'What should I wear when visiting Al-Balad?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Modest dress is highly recommended when visiting Al-Balad. Both men and women should cover their shoulders and knees. While women do not need to wear an abaya or headscarf in the streets, having one is necessary if you intend to step inside active historic mosques.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why You Should Visit Al-Balad in Jeddah: A Guide to Historic Hejaz',
    description: 'A deep-dive guide to Al-Balad, Jeddah\'s historic UNESCO World Heritage site, showcasing its coral-stone houses, Rawasheen balconies, traditional souqs, and unique travel tips.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-27T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/why-you-should-visit-al-balad-in-jeddah/' },
};

export default function WhyVisitAlBaladPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-amber-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Why Visit Al-Balad</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🏛️ UNESCO World Heritage</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Why You Should Visit<br />
                        <span className="text-amber-300">Al-Balad in Jeddah</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Step back in time inside Saudi Arabia\'s most captivating historical district. From coral-stone architecture and wooden Rawasheen balconies to centuries-old souqs and historic merchant palaces.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20driver%20to%20visit%20Al-Balad%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Chauffeur to Al-Balad
                        </a>
                        <Link href="/transfers/al-balad-jeddah-taxi/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Chauffeur Details <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Summary Grid */}
            <div className="bg-amber-50 border-b border-amber-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Founded', value: '7th Century', icon: '🏛️' },
                            { label: 'UNESCO Status', value: 'Since 2014', icon: '🌍' },
                            { label: 'Entry Fee', value: 'Free', icon: '🆓' },
                            { label: 'Best Hours', value: '4 PM – 10 PM', icon: '🌙' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-amber-100">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-xl font-black text-amber-700">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">

                {/* Section 1: Introduction */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">A Living Time Capsule of the Red Sea</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        If Riyadh is the futuristic steel-and-glass powerhouse of Saudi Arabia, <strong>Al-Balad (Historic Jeddah)</strong> is its beating, historical heart. Established in the 7th century CE as the primary maritime gateway for pilgrims traveling to the holy city of Makkah, Al-Balad is a labyrinth of ancient alleyways, coral-stone merchant palaces, and buzzing traditional souqs.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        For decades, it remained a hidden gem known mostly to local traders and pilgrims. In 2014, Al-Balad was officially inscribed as a **UNESCO World Heritage Site**, sparking a massive restoration effort. Today, it stands as the ultimate tourist destination in the western region — a place where centuries-old Arabian history meets modern boutique culture. Here is why Al-Balad belongs on your Saudi travel bucket list.
                    </p>
                </section>

                {/* Reason 1 */}
                <section className="space-y-4 bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🧱</span>
                        <h3 className="text-2xl font-black text-gray-900">1. Unique Coral-Stone Hejazi Architecture</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Unlike anything else in the Arabian Peninsula, the buildings of Al-Balad are constructed using blocks of **natural coral stone** excavated from the nearby Red Sea reefs. To hold the coral blocks together, builders used mud, plaster, and timber beams.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The defining feature of these towering, multi-story buildings is the **Rawasheen** — heavy, intricately carved wooden lattice balconies and window screens. These architectural gems served three key purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                        <li><strong>Cooling:</strong> They allowed the humid sea breeze to circulate through the house while keeping out the sun.</li>
                        <li><strong>Privacy:</strong> Residents inside could look down at the street below, but passersby on the street could not see inside.</li>
                        <li><strong>Water storage:</strong> Ornate brackets held porous clay jars of drinking water, using the breeze to cool them via evaporation.</li>
                    </ul>
                </section>

                {/* Reason 2 */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">👑</span>
                        <h3 className="text-2xl font-black text-gray-900">2. Historic Palaces & Heritage Houses</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Al-Balad is dotted with restored palaces that once belonged to wealthy merchant families. The most famous is **Nassif House (Beit Nassif)**, a grand 106-room mansion built in 1881. It is historically significant because **King Abdulaziz Al Saud**, the founder of modern Saudi Arabia, stayed here in 1925 upon entering Jeddah.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Other must-visit structures include **Beit Sharbatly**, known for its massive green wooden Rawasheen, and **Beit Salloum**, which has been fully restored as a museum showing how a wealthy Hejazi merchant family lived in the 19th century, complete with traditional furniture, clothing, and housewares.
                    </p>
                </section>

                {/* Reason 3 */}
                <section className="space-y-4 bg-amber-50/50 p-8 rounded-3xl border border-amber-100">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🌶️</span>
                        <h3 className="text-2xl font-black text-gray-900">3. The Scent and Sound of Ancient Souqs</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        To experience the authentic energy of old Arabia, walk through Al-Balad\'s covered markets (souqs). The most popular is **Souq Al-Alawi**, which runs through the heart of the district. 
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Here, the air is thick with the scent of burning frankincense (bakhoor), raw saffron, and oud perfume oils. Stalls overflow with colorful Hejazi fabrics, local dates, hand-woven prayer rugs, Yemeni honey, and silver jewelry. Bargaining is standard, and shopkeepers are incredibly hospitable, often offering a small cup of cardamom-spiced Saudi coffee (Qahwa) to visitors.
                    </p>
                </section>

                {/* Reason 4 */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">☕</span>
                        <h3 className="text-2xl font-black text-gray-900">4. The Thriving Café & Art Culture</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Al-Balad is not just a place for history; it is a hub for young Saudi artists and designers. Under Saudi Arabia\'s social reforms, many ancient buildings have been converted into trendy art galleries, boutique design studios, and chic rooftop cafes.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        After sunset, the historic lanes come alive. Visitors sit on outdoor wooden benches, drinking Hejazi tea or specialty coffee, listening to local musicians, and soaking up the atmospheric lighting cast upon the coral walls. It is a perfect blend of ancient heritage and modern youth culture.
                    </p>
                </section>

                {/* Logistics & Practical Tips */}
                <section className="space-y-6 pt-6 border-t border-gray-100">
                    <h2 className="text-3xl font-black text-gray-900">Practical Travel Guide to Al-Balad</h2>
                    
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex gap-4">
                        <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-red-900 mb-2">Crucial Transport Warning for Tourists</h4>
                            <p className="text-red-800 text-sm leading-relaxed">
                                **Do NOT attempt to drive to Al-Balad.** The streets inside the historic district are pedestrian-only. The surrounding ring roads are extremely congested, parking spaces are non-existent, and traffic wardens active. Always pre-book a private driver who can drop you at the designated pedestrian gates (such as Bab Makkah or Bab Jadid) and pick you up at a pre-arranged time.
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">⏱️ Best Time to Visit</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                **4:00 PM to 10:00 PM.** The district is quiet and hot during the morning and afternoon. After 4:00 PM, the shops open, the temperatures cool down, and the atmospheric evening lighting turns on.
                            </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-2">👗 Dress Code</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Cover shoulders and knees. Lightweight, loose-fitting linen clothing is ideal due to the humidity. Women do not need an abaya, but having a scarf is recommended if entering active mosques.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Distance Table */}
                <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-amber-950 text-white px-6 py-4">
                        <h3 className="font-bold text-lg">Travel Distances to Al-Balad</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                                <tr>
                                    <th className="text-left px-5 py-3">From</th>
                                    <th className="text-left px-5 py-3">Distance</th>
                                    <th className="text-left px-5 py-3">Drive Time</th>
                                    <th className="text-left px-5 py-3">Private Taxi (Camry / SUV)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { from: 'Jeddah Airport (JED) Terminal 1', dist: '28 km', time: '35–45 min', price: 'SAR 80 / SAR 150' },
                                    { from: 'Jeddah Corniche (Central Hotel Strip)', dist: '8 km', time: '15–20 min', price: 'SAR 40 / SAR 80' },
                                    { from: 'Jeddah Islamic Port', dist: '3 km', time: '10 min', price: 'SAR 30 / SAR 60' },
                                    { from: 'Makkah Al Haram Hotels', dist: '85 km', time: '55 min', price: 'SAR 300 / SAR 600' },
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                        <td className="px-5 py-3 font-medium text-gray-800">{row.from}</td>
                                        <td className="px-5 py-3 text-gray-600">{row.dist}</td>
                                        <td className="px-5 py-3 text-gray-600">{row.time}</td>
                                        <td className="px-5 py-3 font-bold text-amber-700">{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Landmark className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Driver to Al-Balad</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Don\'t stress about traffic and non-existent parking. Pre-book a premium private chauffeur to drop you directly at the gates of Al-Balad. Fixed rates, English-speaking drivers, and 24/7 service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20driver%20to%20visit%20Al-Balad%20in%20Jeddah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp (English)
                        </a>
                        <Link href="/transfers/al-balad-jeddah-taxi/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            View Route Details <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
