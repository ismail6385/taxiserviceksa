import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Shield, CheckCircle2, Navigation, Moon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Ramadan Umrah Guide 2026 | Virtues, Nusuk Permits & Tips',
    description: 'Planning to perform Umrah during Ramadan 2026? Learn about the immense rewards, Nusuk permit bookings, crowd management, Iftar at the Haram, and travel tips.',
    keywords: [
        'Ramadan Umrah guide 2026',
        'Umrah in Ramadan virtues',
        'Nusuk permit Ramadan booking',
        'Iftar in Masjid al Haram',
        'Taraweeh Makkah guide',
        'last 10 nights Umrah',
        'Ramadan Makkah crowd management',
        'Jeddah to Makkah Ramadan taxi',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/ramadan-umrah-guide/',
    },
    openGraph: {
        title: 'Ramadan Umrah Guide 2026 | Virtues, Nusuk Permits & Tips',
        description: 'Complete pilgrim guide for Ramadan Umrah. Understand rewards, how to secure permits, manage crowds, and plan your transport.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/ramadan-umrah-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How do I book an Umrah permit for Ramadan?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'All pilgrims must book their Umrah permits via the official Nusuk App. During Ramadan, demand is exceptionally high, and slots are released in batches weeks in advance. It is highly recommended to check the app regularly and book your slot as soon as your travel dates are finalized.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I perform multiple Umrahs during Ramadan?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'To manage the extreme crowd density and ensure everyone has a chance, the Saudi Ministry of Hajj & Umrah typically restricts pilgrims to performing only ONE Umrah during the entire month of Ramadan. The Nusuk App will enforce this rule by not allowing you to book a second permit.',
            },
        },
        {
            '@type': 'Question',
            name: 'Where can I eat Iftar inside Al-Masjid al-Haram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Inside the mosque, Iftar is highly structured. Pilgrims sit on designated plastic mats spread shortly before Maghrib. The only food items allowed inside the mosque halls are dates, water (Zamzam), bread, and solid yogurt/cream. Full hot meals are not permitted inside the mosque but are served in the outer courtyards and surrounding hotels.',
            },
        },
        {
            '@type': 'Question',
            name: 'What are the road closure rules in Makkah during Ramadan?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'To keep the Haram area safe for pedestrians, Makkah traffic authorities close most roads leading directly to the Grand Mosque to private vehicles during prayer times — especially around Iftar, Taraweeh, and Tahajjud. Taxis and private transfers must drop off and pick up at designated transport hubs like Kudai, Jarwal, or hotel shuttle stations.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ramadan Umrah Guide: Virtues, Permits, and Crowd Management Tips',
    description: 'A comprehensive guide to performing Umrah in Makkah during the holy month of Ramadan, including spiritual virtues, permit systems, and survival strategies for massive crowds.',
    datePublished: '2026-01-01T00:00:00+03:00',
    dateModified: '2026-06-28T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/ramadan-umrah-guide/' },
};

const tips = [
    { title: '⏰ Choose Off-Peak Ritual Hours', detail: 'Avoid performing Tawaf immediately after Asr, Maghrib, or Isha. The best times during Ramadan are between 11:00 PM and 2:00 AM (after Taraweeh) or between 8:00 AM and 11:00 AM when the temperature is warm but the mosque has fewer day-visitors.' },
    { title: '🎟️ Secure Permits Early', detail: 'Nusuk permits are mandatory. The Ministry strictly monitors access gates. Keep your active Nusuk permit QR code ready on your phone when approaching the outer security checkpoints.' },
    { title: '🥖 Plan Your Iftar Location', detail: 'If you want to have Iftar inside the Haram, enter by 4:30 PM. The gates are closed once capacity is reached. Bring a small bag to put your shoes in, as you will be sitting on the carpets for a long time.' },
    { title: '🚶 Be Patient with Transportation', detail: 'Traffic in Makkah is extremely congested. Chauffeurs cannot enter the immediate ring road. Pre-book your taxi to drop you off at key transport interchange points, and walk or use the free bus loops to reach your hotel.' },
];

export default function RamadanUmrahGuidePage() {
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
                        <span>Ramadan Umrah Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🌙 Holy Month Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 10 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated June 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Ramadan Umrah Guide<br />
                        <span className="text-emerald-300">Virtues, Permits & Tips 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Performing Umrah in Ramadan is a life-changing experience equivalent in reward to Hajj with the Prophet ﷺ. Discover critical advice on Nusuk bookings, Makkah crowd safety, and travel arrangements.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20from%20Jeddah%20Airport%20to%20Makkah%20for%20Umrah%20in%20Ramadan" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Ramadan Makkah Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Check Rates <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Virtues Highlight Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Moon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">The Great Virtue of Ramadan Umrah</h4>
                        <p className="leading-relaxed font-serif italic">
                            🕋 The Prophet Muhammad ﷺ said: &quot;When Ramadan comes, perform Umrah, for indeed an Umrah in Ramadan is equal to Hajj (with me) in reward.&quot; — (Sahih al-Bukhari)
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-16">

                {/* Introduction */}
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Why Ramadan Umrah is Unique</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Ramadan is a month of immense blessings, and performing Umrah during this time represents the ultimate spiritual retreat for millions of Muslims. The atmospheric beauty of Al-Masjid al-Haram during the nights of Taraweeh and Tahajjud is matchless.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        However, this spiritual blessing comes with severe logistical challenges. Makkah runs at maximum capacity. Hotel rates triple, flights are packed, and the physical effort of performing Tawaf and Sa&apos;i while fasting under the Saudi sun requires deep patience and preparation.
                    </p>
                </section>

                {/* Key Rules & Regulations in Ramadan */}
                <section className="bg-amber-50/50 rounded-3xl border border-amber-100 p-8 space-y-5">
                    <div className="flex items-center gap-3">
                        <Shield className="w-6 h-6 text-amber-700" />
                        <h2 className="text-2xl font-black text-gray-900">Special Ministry Rulings for Ramadan</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                        <div className="bg-white rounded-xl p-4 border border-amber-100">
                            <p className="font-bold text-gray-900 mb-1">🎫 Single Umrah Rule</p>
                            <p className="text-xs leading-relaxed text-gray-600">To allow everyone a fair chance and prevent overcrowding, the Ministry of Hajj & Umrah limits pilgrims to only **one Umrah permit** during the entire month of Ramadan. Multiple Umrahs are blocked on the Nusuk system.</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-amber-100">
                            <p className="font-bold text-gray-900 mb-1">🚦 Access Gate Controls</p>
                            <p className="text-xs leading-relaxed text-gray-600">The Mataf ground floor is strictly reserved for pilgrims in Ihram clothing who hold valid Nusuk Umrah permits. Regular prayer-goers are directed to the upper floors and outer courtyards.</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-amber-100">
                            <p className="font-bold text-gray-900 mb-1">🚌 Shuttle & Public Transport</p>
                            <p className="text-xs leading-relaxed text-gray-600">All local roads around the Haram are blocked to private cars. Pilgrims must use the official SAPTCO transport shuttles running from parking lots like Kudai and Prince Mutaib.</p>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-amber-100">
                            <p className="font-bold text-gray-900 mb-1">🕋 Rawdah Permits</p>
                            <p className="text-xs leading-relaxed text-gray-600">Visiting the Rawdah in Madinah (Riyadhul Jannah) requires a slot booking on Nusuk. Slots for Ramadan are extremely limited and disappear within seconds of release.</p>
                        </div>
                    </div>
                </section>

                {/* Practical Survival Steps */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">How to Succeed: Step-by-Step Survival Tips</h2>
                    <div className="space-y-6">
                        {tips.map((step, idx) => (
                            <div key={idx} className="flex gap-5">
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-950 text-white rounded-2xl flex items-center justify-center font-black text-lg">
                                    0{idx + 1}
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex-1">
                                    <h3 className="font-black text-gray-900 mb-2 text-lg">{step.title}</h3>
                                    <p className="text-gray-700 leading-relaxed text-sm">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Iftar at the Haram */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Experience Iftar Inside the Grand Mosque</h2>
                    <p className="text-gray-700 leading-relaxed">
                        One of the most emotional highlights of Ramadan is sharing Iftar inside Al-Masjid al-Haram. Shortly before the Maghrib Adhan, massive plastic mats (Sufrahs) are rolled out by local charity groups and Makkah families.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 text-xs text-gray-800">
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                            <strong>What is allowed:</strong> Only dry foods are permitted inside to protect the carpets. This includes premium dates, Zamzam water cups, dry bread, and yogurt/cream.
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                            <strong>What is prohibited:</strong> Any hot rice meals, meat, juice, or sodas are strictly prohibited inside. Hot meals are distributed in the outer plazas after Maghrib prayer.
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section>
                    <h2 className="text-3xl font-black text-gray-900 mb-8">Ramadan Umrah FAQ</h2>
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
                            { title: 'Tawaf Guide — 7 Circuits of the Kaaba', href: '/blog/tawaf-guide-hajj-umrah/', emoji: '🕋' },
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
                    <h2 className="text-3xl font-black mb-4">Book Your Ramadan Airport Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        With heavy traffic and road closures in Makkah, reliable transport is critical. Book your comfortable private taxi from Jeddah Airport (JED) straight to Makkah in advance to ensure a smooth transition.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20am%20performing%20Umrah%20in%20Ramadan%20and%20need%20a%20taxi%20transfer" target="_blank" rel="noopener noreferrer"
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
