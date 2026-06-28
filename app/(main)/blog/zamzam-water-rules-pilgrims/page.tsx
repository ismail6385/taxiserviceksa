import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, CheckCircle2, Navigation, Droplets } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Official Zamzam Water Rules 2026 | Airport & Airline Guide',
    description: 'Latest 2026 Zamzam water regulations for international pilgrims. Learn how to buy official 5L bottles, airport baggage rules, and airline policies.',
    keywords: [
        'Zamzam water rules 2026',
        'carrying Zamzam from Jeddah airport',
        'how to buy Zamzam bottle Makkah',
        'Zamzam allowance Saudi Airlines',
        'can tourist visa carry Zamzam',
        'official Zamzam price Kudai',
        'checking Zamzam water on flight',
        'Jeddah airport Terminal 1 Zamzam sales',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/zamzam-water-rules-pilgrims/',
    },
    openGraph: {
        title: 'Official Zamzam Water Rules 2026 | Airport & Airline Guide',
        description: 'Complete guide on carrying Zamzam water home. Understand airport luggage rules, official purchase locations, and airline allowance guidelines.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/zamzam-water-rules-pilgrims/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can tourist visa holders carry Zamzam water?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, under the current regulations, international travelers holding either an Umrah visa or a valid tourist visa are permitted to purchase and carry the official 5-liter Zamzam water bottle from the designated airport sales points, provided they are flying out of international airports like Jeddah (JED) or Madinah (MED).',
            },
        },
        {
            '@type': 'Question',
            name: 'Where can I buy the official Zamzam water bottle?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The official 5-liter Zamzam water bottle can be purchased directly at Jeddah Airport (Terminal 1 and North Terminal) and Madinah Airport outside the departure halls at the dedicated government-run booths. In Makkah, you can buy it at the Kudai Zamzam Water Distribution Center. The official fixed price is 8.5 SAR per bottle.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I put Zamzam water inside my checked suitcase?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Airport security authorities in Saudi Arabia strictly prohibit placing any liquid containers, including Zamzam water, inside your standard checked suitcases. Standard bags containing liquids will be flagged by scanners and held at baggage check. Zamzam must be checked separately as a standalone, officially packed bottle with a plastic protective wrap.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is Zamzam water carried free of charge by airlines?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most major airlines flying out of Saudi Arabia (such as Saudi Arabian Airlines, Flynas, flyadeal, Emirates, Qatar Airways, Gulf Air, and Pakistan International Airlines) carry one official 5L Zamzam bottle per pilgrim free of charge as an additional baggage item. However, budget international carriers may charge a small handling fee or require it to fit within your purchased weight limit. Always check with your specific airline in advance.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Official Zamzam Water Rules: Buying, Packaging, and Airport Carriage Regulations',
    description: 'A comprehensive guide explaining the official guidelines for purchasing, packing, and checking in Zamzam water at Saudi Arabian airports for international travel.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/zamzam-water-rules-pilgrims/' },
};

const rulesList = [
    {
        title: '🏷️ 1. Official Sealed Bottles Only',
        desc: 'You are only allowed to fly out with the official 5-liter Zamzam water bottle manufactured and wrapped by the Project of King Abdullah bin Abdulaziz for Zamzam. These bottles come in a protective plastic bag with a barcode. Custom bottles filled by hand inside the Haram or bought from unauthorized street vendors will be confiscated at the airport checkpoints.',
    },
    {
        title: '📦 2. No Liquid in Suitcases',
        desc: 'Do not pack Zamzam water inside your standard checked suitcases or carry-on backpacks. X-ray scanners at Jeddah (JED) and Madinah (MED) airports will detect the liquid, leading to your bag being opened and delayed. The official 5L bottle must be checked in separately at the dedicated Zamzam baggage counter.',
    },
    {
        title: '🎟️ 3. One Bottle Per Passport Limit',
        desc: 'Each international passenger is strictly limited to checking in exactly ONE 5-liter bottle of Zamzam. You cannot check multiple bottles under a single passport, even if you are willing to pay extra luggage fees.',
    },
    {
        title: '💸 4. Fixed Official Pricing',
        desc: 'The official price set by the government for a 5-liter packed Zamzam bottle is 8.5 SAR (approx. $2.25 USD). You can purchase it using cash, local cards, or Apple Pay at the airport departure terminals.',
    },
];

export default function ZamzamRulesPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog/" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span>Zamzam Rules</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">💧 Zamzam Regulation</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 7 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Official Zamzam Water Rules<br />
                        <span className="text-emerald-300">Airport & Airline Guide 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Bringing Zamzam water back to your home country requires adhering to strict packaging and airport luggage regulations. Read the official rules to avoid customs confiscation.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20transfer%20to%20Jeddah%20Airport%20with%20trunk%20space%20for%20my%20luggage%20and%20Zamzam" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Airport Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Check Taxi Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Droplets className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Official King Abdullah Zamzam Project</h4>
                        <p className="leading-relaxed">
                            To protect pilgrims from fraud and maintain high hygienic standards, the Saudi government regulates the bottling and distribution of Zamzam water. Only official plastic-packaged bottles sold at airport terminals are permitted for international flights.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Why are there rules for Zamzam?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Zamzam water holds deep spiritual significance for Muslims. Returning home with a bottle of Zamzam for family and friends is a cherished tradition for every pilgrim completing Umrah or Hajj.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        However, because Zamzam is a liquid and is transported in large volumes, airports and airlines enforce strict regulations to prevent spills that could damage aircraft electronics, baggage, or other passenger bags. Furthermore, the government regulates the distribution to prevent the commercial exploitation or sale of water.
                    </p>
                </section>

                {/* The 4 Core Rules */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">The 4 Golden Rules of Zamzam Carriage</h2>
                    <div className="space-y-6">
                        {rulesList.map((rule, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-2">
                                <h3 className="text-lg font-black text-emerald-950 font-serif">{rule.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{rule.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Where to Purchase official bottle */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Where to Buy Official Zamzam Bottles</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Official 5-liter Zamzam bottles are distributed only at authorized government centers to prevent counterfeiting:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 text-xs text-gray-800">
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                            <strong>1. Airport Booths (Best option)</strong>
                            <p className="text-gray-500 mt-2">Located directly outside the departure terminals at Jeddah (JED) Terminal 1 and Madinah (MED) Airport. You can buy it immediately before checking in your luggage.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                            <strong>2. Kudai Center Makkah</strong>
                            <p className="text-gray-500 mt-2">The main distribution center located in the Kudai area of Makkah. Best if you are traveling by road (private car/bus) to other GCC nations.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                            <strong>3. Authorized Retailers</strong>
                            <p className="text-gray-500 mt-2">Select major supermarkets in Makkah and Madinah (like Bin Dawood) occasionally stock official bottles under strict quotas.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Zamzam Rules FAQ</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related pilgrim links */}
                <section className="bg-gray-50 rounded-3xl p-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-6">Related Pilgrim Guides</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Transporting Zamzam: Makkah to Madinah', href: '/blog/zamzam-water-transport-makkah-madinah/', emoji: '🚆' },
                            { title: 'Rules of Ihram for Umrah & Hajj', href: '/blog/ihram-rules-umrah-pilgrims/', emoji: '🧵' },
                            { title: 'Tawaf Guide — 7 Circuits of the Kaaba', href: '/blog/tawaf-guide-hajj-umrah/', emoji: '🕋' },
                            { title: 'Complete Sa\'i Guide (Safa to Marwa)', href: '/blog/sai-guide-hajj-umrah/', emoji: '🏃' },
                        ].map((b, i) => (
                            <Link key={i} href={b.href} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 transition-all flex gap-3 items-start">
                                <span className="text-2xl">{b.emoji}</span>
                                <p className="font-bold text-gray-900 text-sm leading-snug">{b.title}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Comfortable Airport Transfers with Extra Trunk Space</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Checking in Zamzam and multiple suitcases requires sufficient luggage space. Book a spacious sedan or family SUV (GMC Yukon/Hyundai Staria) to transport your luggage and blessed water safely to the airport.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20heading%20to%20the%20airport%20and%20need%20a%20taxi%20with%20luggage/Zamzam%20space" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Transfer Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
