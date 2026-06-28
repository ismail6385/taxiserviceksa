import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, CheckCircle2, Navigation, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Ultimate Umrah Packing List 2026 | Checklist for Pilgrims',
    description: 'The most comprehensive Umrah packing list for 2026. Discover essential documents, clothing for men & women, unscented toiletries, medications, and spiritual items.',
    keywords: [
        'Umrah packing list',
        'what to pack for Umrah',
        'Umrah checklist 2026',
        'Ihram packing requirements',
        'unscented toiletries Umrah',
        'things to carry to Makkah',
        'Hajj and Umrah essentials',
        'men and women abaya travel',
        'Makkah taxi transport book',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/ultimate-umrah-packing-list/',
    },
    openGraph: {
        title: 'Ultimate Umrah Packing List 2026 | Checklist for Pilgrims',
        description: 'Complete, interactive checklist for Hajj and Umrah pilgrims. Don’t leave anything behind — documents, clothing, health, and spiritual essentials.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/ultimate-umrah-packing-list/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What type of bag should I carry for Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You should pack a large suitcase for your check-in airline luggage, a small cabin trolley/backpack for overnight stays, and a small waist pouch or cross-body sling bag. The sling bag is essential during Tawaf and Sa\'i to keep your passport, money, phone, and hotel key secure at all times.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are unscented toiletries mandatory for Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Once you make the intention (Niyyah) for Umrah and enter the state of Ihram, using scented soap, shampoo, lotion, wipes, or deodorant is strictly forbidden (Haram). Using scented products will require expiation (Fidya). You must pack 100% fragrance-free/unscented toiletries.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best footwear to pack for Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For men in Ihram, sandals or slippers must leave the ankle and the upper arch of the foot (instep) exposed. Women can wear standard closed walking shoes with socks. Everyone should pack a pair of comfortable, worn-in sneakers for general travel to avoid blisters from walking.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I get a local SIM card in Saudi Arabia?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can purchase a local physical SIM or activate an eSIM directly at Jeddah Airport (JED) or Madinah Airport (MED) upon landing. Major providers include STC, Mobily, and Zain. They have booths in the arrivals hall, and you will need your passport to register the line.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Ultimate Umrah Packing List: Complete Checklist for 2026 Pilgrims',
    description: 'A complete itemized guide detailing everything Hajj and Umrah pilgrims need to carry to Saudi Arabia — categorized for quick preparation.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/ultimate-umrah-packing-list/' },
};

const packingCategories = [
    {
        title: '📂 1. Essential Documents & Identification',
        desc: 'Keep these in your carry-on waist pouch or cross-body sling bag. Never pack these in check-in baggage.',
        items: [
            'Passport (valid for at least 6 months from travel date)',
            'Saudi Tourist or Umrah Visa printouts',
            'Flight tickets (return tickets are checked at the airport)',
            'Hotel booking confirmations (Makkah & Madinah)',
            'Nusuk App installed and configured on your phone (for Rawdah permits)',
            'Passport-sized photos (4-6 copies for emergency services)',
            'Vaccination certificates (Meningococcal meningitis printout)',
            'Cash (Saudi Riyals - SAR) and international credit/debit cards',
        ],
    },
    {
        title: '🧵 2. Ihram & Clothing for Men',
        desc: 'Be prepared for the warm climate and the rules of the sacred state of Ihram.',
        items: [
            '2 sets of Ihram sheets (100% white cotton or towelling material)',
            'Ihram belt or pouch (to secure the Izar sheet and store cash/cards)',
            'Safety pins or clips (to hold the Ihram sheet secure)',
            'Unstitched sandals/slippers (exposing ankles and instep)',
            'Lightweight, breathable kurta trousers (for non-Ihram days in Makkah/Madinah)',
            'Sunglasses & umbrella (to protect from the intense sun)',
            'Undergarments (for non-Ihram travel days only)',
        ],
    },
    {
        title: '🧕 3. Clothing & Essentials for Women',
        desc: 'Women do not have a restricted Ihram uniform, but must maintain modesty.',
        items: [
            '3-4 loose-fitting Abayas (neutral, light-colored abayas perform best in heat)',
            'Comfortable, breathable cotton Hijabs/Scarves',
            'Under-hijab caps (to keep hair secure during Tawaf and Sa\'i)',
            'Lightweight cotton trousers/leggings (to wear under Abayas)',
            'Closed walking shoes/sneakers (comfortable for the long walk of Sa\'i)',
            'Cotton socks (multiple pairs to wear during general travel)',
            'Hair clips and safety pins',
        ],
    },
    {
        title: '🧼 4. Unscented Toiletries & Personal Care',
        desc: 'Remember: scented products are strictly forbidden (Haram) once you enter Ihram.',
        items: [
            'Unscented soap / body wash',
            'Unscented shampoo & conditioner',
            'Unscented deodorant (roll-on)',
            'Unscented Vaseline / petroleum jelly (critical to prevent inner-thigh chafing during walking)',
            'Unscented lip balm (to prevent dry lips in dry climate)',
            'Unscented wet wipes & hand sanitizer',
            'Toothbrush, toothpaste, and miswak',
            'Small nail cutter and hair scissors (for exiting Ihram)',
        ],
    },
    {
        title: '💊 5. Health & First-Aid Kit',
        desc: 'The change in environment and crowds can make pilgrims vulnerable to minor illnesses.',
        items: [
            'Pain relievers & fever reducers (Paracetamol/Ibuprofen)',
            'Throat lozenges (crucial due to dry, air-conditioned air)',
            'Cough syrups & allergy antihistamines',
            'Rehydration salts (ORS packets for hydration in intense heat)',
            'Band-aids & blister cushions',
            'Prescription medications (with original doctor prescriptions)',
            'Muscle relief cream (deep heat rub for leg soreness)',
        ],
    },
    {
        title: '⚡ 6. Electronics & Travel Gear',
        desc: 'Stay connected and keep your devices charged during travel.',
        items: [
            'Smartphone with chargers',
            'High-capacity Power Bank (critical for long days inside the Haram)',
            'Saudi UK-style 3-pin power adapter',
            'SIM card ejector tool',
            'eSIM pre-activated (or purchase local SIM at airport arrivals)',
            'Reusable water bottle',
        ],
    },
];

export default function UmrahPackingListPage() {
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
                        <span>Packing List</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🛍️ Packing Checklist</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 9 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Ultimate Umrah Packing List<br />
                        <span className="text-emerald-300">Complete Checklist for 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Packing for Hajj or Umrah requires balancing convenience and compliance with religious guidelines. Use our ultimate, itemized packing checklist to ensure a stress-free journey to Makkah and Madinah.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20from%20Jeddah%20Airport%20to%20Makkah%20for%20Umrah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Airport to Makkah Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Check Taxi Pricing <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Warning Callout */}
            <div className="bg-teal-50 border-b border-teal-100">
                <div className="max-w-4xl mx-auto px-4 py-5 flex items-start gap-3 text-teal-950 text-sm">
                    <ShoppingBag className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                        <strong>💡 Travel Pro Tip:</strong> Keep your Ihram sheets and unstitched sandals in your carry-on luggage. If your check-in baggage is lost or delayed by the airline, you will still be able to make your intention at the flight crossing point and perform your Umrah immediately upon landing in Jeddah.
                    </p>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Section 1: Pre-Departure Check */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">1. Prepare Before You Pack</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Before placing the first item in your suitcase, ensure your administrative checklist is completed. Make sure you have downloaded the <strong>Nusuk App</strong> on your phone. This official app by the Ministry of Hajj & Umrah is required to book slots to perform Umrah and pray in the Rawdah in Madinah.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Additionally, ensure your international banking cards are unlocked for overseas spending in Saudi Arabia. ATMs are widely available, but contactless payment (Apple Pay, Visa, Mastercard) is accepted at almost all shops in Makkah and Madinah.
                    </p>
                </section>

                {/* Interactive Categories */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-black text-gray-900">Categorized Packing Checklist</h2>
                    
                    <div className="grid gap-8">
                        {packingCategories.map((cat, idx) => (
                            <div key={idx} className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm space-y-4">
                                <h3 className="text-2xl font-black text-emerald-950 font-serif pb-2 border-b border-emerald-50">{cat.title}</h3>
                                <p className="text-gray-500 text-xs italic">{cat.desc}</p>
                                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                                    {cat.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Important spiritual items */}
                <section className="bg-emerald-50/40 border border-emerald-100 rounded-3xl p-8 space-y-4">
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-2xl font-black text-gray-900">7. Spiritual Items & Prep</h2>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        While your phone can store electronic PDFs, carrying physical spiritual gear remains popular and helpful:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4 text-xs text-gray-800">
                        <li className="bg-white p-3 rounded-xl border border-emerald-100"><strong>📖 Pocket Dua Book:</strong> Select a reliable, authentic book of supplications from the Quran and Sunnah.</li>
                        <li className="bg-white p-3 rounded-xl border border-emerald-100"><strong>📿 Tasbih / Digital Clicker:</strong> Handheld digital counters are extremely useful for tracking your 7 circuits during Tawaf and Sa&apos;i.</li>
                        <li className="bg-white p-3 rounded-xl border border-emerald-100"><strong>🧎 Lightweight Prayer Mat:</strong> Useful for praying in corridors or outdoor areas of the Haram when the inner halls are full.</li>
                        <li className="bg-white p-3 rounded-xl border border-emerald-100"><strong>👝 Shoe Bag:</strong> A small drawstring bag to carry your shoes when you enter Al-Masjid al-Haram. Never leave shoes at gates where they can be lost.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Umrah Packing FAQ</h2>
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
                            { title: 'Rules of Ihram for Umrah & Hajj', href: '/blog/ihram-rules-umrah-pilgrims/', emoji: '🧵' },
                            { title: 'Tawaf Guide — 7 Circuits around the Kaaba', href: '/blog/tawaf-guide-hajj-umrah/', emoji: '🕋' },
                            { title: 'Complete Sa\'i Guide (Safa to Marwa)', href: '/blog/sai-guide-hajj-umrah/', emoji: '🏃' },
                            { title: 'Common Umrah Mistakes to Avoid', href: '/blog/common-umrah-mistakes-to-avoid/', emoji: '⚠️' },
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
                    <h2 className="text-3xl font-black mb-4">Arrive at Your Makkah Hotel in Comfort</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Avoid airport taxi lines and heavy luggage stress. Pre-book your private airport transfer from Jeddah (JED) straight to Makkah. Clean vehicles, professional drivers, and 24/7 service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20performing%20Umrah%20and%20need%20a%20taxi%20transfer%20to%20Makkah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            View Transfer Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>

            </article>
        </div>
    );
}
