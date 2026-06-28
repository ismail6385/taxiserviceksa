import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, Star, ArrowRight, Phone, Shield, BookOpen, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Rules of Ihram for Umrah & Hajj Pilgrims | Essential Guide 2026',
    description: 'Learn the essential rules of Ihram for Umrah and Hajj in 2026. Discover clothing guidelines for men & women, prohibitions, Miqat boundaries, and transport tips.',
    keywords: [
        'Ihram rules',
        'rules of Ihram Umrah',
        'Ihram clothing men',
        'Ihram clothing women',
        'prohibitions of Ihram',
        'where to enter Ihram',
        'Miqat boundaries Jeddah',
        'Jeddah airport to Makkah Ihram',
        'Umrah travel guide 2026',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/ihram-rules-umrah-pilgrims/',
    },
    openGraph: {
        title: 'Rules of Ihram for Umrah & Hajj Pilgrims | Essential Guide 2026',
        description: 'Complete guide to Ihram rules — clothing specifications, prohibitions, Miqat boundaries, and practical transit advice for international pilgrims.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/ihram-rules-umrah-pilgrims/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are the main rules of Ihram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The main rules of Ihram include wearing the specified Ihram clothing (unstitched sheets for men, modest clothing for women), making the sincere intention (Niyyah) for Umrah/Hajj, and avoiding prohibitions such as cutting hair/nails, wearing perfume, hunting, cutting trees, and engaging in marital relations.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can men wear stitched undergarments under Ihram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, men are strictly forbidden from wearing any stitched clothing, including undergarments, shirts, trousers, or socks, once they enter the state of Ihram. They must wear only two unstitched sheets (Izar and Rida) and sandals that leave the ankles and upper foot exposed.',
            },
        },
        {
            '@type': 'Question',
            name: 'Where do pilgrims arriving at Jeddah Airport enter Ihram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pilgrims flying directly to Jeddah (KAIA) must enter the state of Ihram and make their Niyyah before their airplane crosses the designated Miqat boundary in the air. The airline crew will announce the Miqat crossing approximately 30 minutes before landing. Alternatively, those staying in Jeddah hotels first can enter Ihram at their hotel or at the Masjid Aisha (Taneem) before traveling to Makkah.',
            },
        },
        {
            '@type': 'Question',
            name: 'What happens if you break an Ihram rule?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'If a pilgrim accidentally or intentionally violates a restriction of Ihram (such as clipping nails, trimming hair, or wearing perfume), they are generally required to pay an expiation (Fidya/Dam), which usually involves sacrificing a sheep in Makkah and distributing its meat to the poor, or feeding six poor persons, or fasting for three days.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Rules of Ihram for Umrah & Hajj Pilgrims: Clothing, Prohibitions & Miqat Boundaries',
    description: 'An essential guide explaining the rules of Ihram for international pilgrims performing Hajj or Umrah, outlining clothing standards, prohibitions, and transport logistics.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/ihram-rules-umrah-pilgrims/' },
};

export default function IhramRulesBlogPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Rules of Ihram</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Pilgrim Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Essential Rules of Ihram<br />
                        <span className="text-emerald-300">for Hajj & Umrah</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Entering the sacred state of Ihram is the first step of your spiritual journey. Learn the clothing requirements, key prohibitions, Miqat points, and practical tips for a valid pilgrimage.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20in%20Ihram%20and%20need%20a%20private%20taxi%20from%20Jeddah%20to%20Makkah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book private Ihram Taxi
                        </a>
                        <Link href="/routes/jeddah-makk/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Route Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Fact Grid */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Ihram is', value: 'Spiritual State', icon: '🕊️' },
                            { label: 'Men Clothing', value: '2 Unstitched Sheets', icon: '🧵' },
                            { label: 'Women Clothing', value: 'Modest Dress', icon: '🧕' },
                            { label: 'Expiation', value: 'Fidya/Dam', icon: '🐑' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <div className="text-xl font-black text-emerald-700">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">

                {/* Section 1: What is Ihram */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900 font-serif">What is the State of Ihram?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Ihram (إحرام) is not merely the physical acts of wearing white sheets or modest dresses. It is a **sacred spiritual state** that a pilgrim must enter before crossing the designated boundary (Miqat) surrounding Makkah. It represents a state of absolute purity, equality, and detachment from worldly comforts.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        To enter the state of Ihram properly, a pilgrim must complete three steps: perform physical purification (shaving, bathing, trimming nails), change into the designated Ihram attire, and make the formal intention (**Niyyah**) followed by reciting the **Talbiyah** (*"Labbayk Allahumma Labbayk..."*). Once this is done, the restrictions of Ihram become active.
                    </p>
                </section>

                {/* Section 2: Clothing for Men */}
                <section className="space-y-4 bg-emerald-50/30 p-8 rounded-3xl border border-emerald-100">
                    <h3 className="text-2xl font-black text-gray-900 font-serif">Ihram Clothing Guidelines for Men</h3>
                    <p className="text-gray-700 leading-relaxed">
                        The physical clothing for men consists of **two unstitched, plain white sheets** of fabric (ideally cotton or toweling material to handle the Saudi heat):
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        <li><strong>Izar:</strong> The lower sheet wrapped around the waist, covering from the navel to below the knees. It is secured by a belt or clip.</li>
                        <li><strong>Rida:</strong> The upper sheet draped over the shoulders. During the circumambulation of the Kaaba (Tawaf), men practice *Idtiba* — leaving the right shoulder exposed.</li>
                        <li><strong>❌ Strictly Stitched Clothing:</strong> Men cannot wear underwear, socks, trousers, shirts, hats, or turbans. All stitched garments must be removed.</li>
                        <li><strong>👡 Footwear:</strong> Men must wear sandals or shoes that leave the ankles and the instep (the top arch of the foot) completely exposed.</li>
                    </ul>
                </section>

                {/* Section 3: Clothing for Women */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-black text-gray-900 font-serif">Ihram Clothing Guidelines for Women</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Unlike men, women do not have a specific uniform like unstitched sheets. Their Ihram is their **regular modest clothing**:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        <li><strong>Modest Attire:</strong> Loose-fitting clothing that covers the entire body (Abaya) is required. Any color is permissible, though white, black, or neutral tones are commonly worn.</li>
                        <li><strong>Face and Hands:</strong> According to Islamic rulings, a woman's face and hands must remain exposed while in the state of Ihram. Standard face veils (Niqab) and gloves are prohibited. However, women can drape a headscarf over their face if they wish to veil in front of non-mahram men.</li>
                        <li><strong>Footwear:</strong> Women are fully permitted to wear regular stitched shoes, socks, and undergarments.</li>
                    </ul>
                </section>

                {/* Section 4: Key Prohibitions */}
                <section className="space-y-4 bg-red-50/40 p-8 rounded-3xl border border-red-100">
                    <div className="flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-red-700" />
                        <h3 className="text-2xl font-black text-red-950 font-serif">Prohibitions (Restrictions) of Ihram</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Once you enter the state of Ihram, the following acts become strictly prohibited (Haram) until you complete your Umrah and perform the hair-cutting ritual (Halq/Taqsir):
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 text-xs text-red-950">
                        <div className="bg-white p-4 rounded-xl border border-red-100">
                            <strong>🚫 Hair and Nails:</strong> No clipping of nails or cutting, shaving, or plucking of body hair is allowed.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-red-100">
                            <strong>🚫 Perfume & Scents:</strong> No scented soaps, perfumes, deodorants, or scented wet wipes can be applied to the body or Ihram sheets.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-red-100">
                            <strong>🚫 Hunting & Nature:</strong> Killing or hunting land animals, as well as breaking or cutting trees within the sacred boundary of Makkah, is forbidden.
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-red-100">
                            <strong>🚫 Intimacy:</strong> Marital relations, proposal of marriage, or wedding contracts are not permitted while in Ihram.
                        </div>
                    </div>
                </section>

                {/* Section 5: Miqat Boundaries */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-emerald-700" />
                        <h3 className="text-2xl font-black text-gray-900 font-serif">Miqat Boundaries: Where to Enter Ihram</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        A pilgrim cannot cross the geographic boundaries of the Haram area without being in the state of Ihram. These boundaries are called **Miqats**:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4 text-sm">
                        <li><strong>Dhu al-Hulayfah (Abyar Ali):</strong> For pilgrims traveling from Madinah.</li>
                        <li><strong>Al-Juhfah:</strong> For those arriving from Egypt, Syria, or North Africa (located near Rabigh, north of Jeddah).</li>
                        <li><strong>Qarn al-Manazil (As-Sayl al-Kabir):</strong> For pilgrims coming from Riyadh, Najd, or Taif.</li>
                        <li><strong>Yalamlam:</strong> For pilgrims traveling from Yemen or arriving via the southern seas.</li>
                    </ul>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-5 my-6 text-yellow-950 text-sm">
                        <strong>✈️ Flying to Jeddah Airport:</strong> If your flight lands at King Abdulaziz International Airport (JED) and you plan to go straight to Makkah for Umrah, you must put on your Ihram clothing and make your intention (Niyyah) **on the aircraft before it crosses the Miqat line**. The cabin crew will announce the crossing in advance.
                    </div>
                </section>

                {/* Section 6: Travel Info & Private Taxis */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900 font-serif">Transportation in Ihram: Jeddah to Makkah</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Once you land in Jeddah Airport in the state of Ihram, the transition to Makkah can be physically exhausting due to the weight of your luggage and the warm weather. 
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Pre-booking a private, air-conditioned taxi or luxury SUV (like a GMC Yukon XL) is the most comfortable way to ensure you arrive at your Makkah hotel in a peaceful state of mind, ready to perform your Umrah rituals. Our drivers are Muslim-certified and fully familiar with all the checkpoint entries into the Makkah Haram boundary.
                    </p>

                    {/* Rates Table */}
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mt-4">
                        <div className="bg-emerald-950 text-white px-6 py-4">
                            <h3 className="font-bold text-lg">Jeddah Airport to Makkah Private Transfer Rates</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                                    <tr>
                                        <th className="text-left px-5 py-3">Vehicle Class</th>
                                        <th className="text-left px-5 py-3">Luggage Capacity</th>
                                        <th className="text-left px-5 py-3">Passenger Capacity</th>
                                        <th className="text-left px-5 py-3">Fixed Price (SAR / USD)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        { car: 'Toyota Camry / Sedan', luggage: '2 Bags', pax: '4 Passengers', price: 'SAR 300 / $80 USD' },
                                        { car: 'Hyundai H1 / Staria Van', luggage: '6 Bags', pax: '7 Passengers', price: 'SAR 350 / $93 USD' },
                                        { car: 'GMC Yukon XL / Luxury SUV', luggage: '6 Bags', pax: '7 Passengers', price: 'SAR 600 / $160 USD' },
                                        { car: 'Toyota Hiace (Large Group)', luggage: '10 Bags', pax: '12 Passengers', price: 'SAR 500 / $133 USD' },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="px-5 py-3 font-medium text-gray-800">{row.car}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.luggage}</td>
                                            <td className="px-5 py-3 text-gray-600">{row.pax}</td>
                                            <td className="px-5 py-3 font-bold text-emerald-700">{row.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section>
                    <h2 className="text-2xl font-black text-gray-900 mb-6 font-serif">Frequently Asked Questions</h2>
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
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Travel Peacefully from Jeddah to Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Pre-book your private Muslim driver for a comfortable journey to Makkah in a state of Ihram. Fixed rates, meet & greet at Jeddah Airport arrivals, and no surge pricing.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20will%20be%20in%20Ihram%20and%20need%20a%20taxi%20from%20Jeddah%20Airport%20to%20Makkah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp (English)
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            View All Route Details <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
