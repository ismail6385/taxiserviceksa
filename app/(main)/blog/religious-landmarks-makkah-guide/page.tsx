import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Top Religious Landmarks in Makkah | 2026 Guide',
    description: 'Explore the top religious landmarks in Makkah for international pilgrims. Learn about Masjid al-Haram, Mina, Arafat, Jabal al-Noor, and historical spots.',
    keywords: [
        'religious landmarks in Makkah',
        'top historical places in Makkah',
        'holy sites in Mecca list',
        'Jabal al-Noor and Jabal Thawr guide',
        'cemetery of Jannat al-Mualla',
        'Makkah ziyarat private transfers',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/religious-landmarks-makkah-guide/',
    },
    openGraph: {
        title: 'Top Religious Landmarks in Makkah | 2026 Guide',
        description: 'Read the comprehensive pilgrim guide to Makkah\'s sacred monuments and historical sites. Learn their significance and travel tips.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/religious-landmarks-makkah-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are the main religious landmarks in Makkah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The main religious landmarks are Masjid al-Haram (Grand Mosque), the Holy Kaaba, Safa and Marwah hills, Mount Arafat (Jabal al-Rahmah), Mina, Muzdalifah, Jabal al-Noor, and Jabal Thawr.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are these landmarks open to non-Muslim visitors?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, the city of Makkah and its immediate holy boundaries are open to Muslim pilgrims and visitors only. Non-Muslims are not allowed to enter the city limits.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there direct public transport to Makkah\'s landmarks?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'While the Al-Haramain High-Speed Railway connects Makkah with Jeddah and Madinah, local public buses only run on select routes. Private taxi transfers or organized tours are necessary to reach specific locations like the mountain trails.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top Religious Landmarks in Makkah: Spiritual & Historical Sites',
    description: 'A complete overview of the primary religious and historical landmarks within Makkah, designed for Umrah and Hajj travelers.',
    datePublished: '2026-03-30T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/religious-landmarks-makkah-guide/' },
};

export default function ReligiousLandmarksPage() {
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
                        <span>Makkah Landmarks</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Sacred Sites</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 6 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Religious Landmarks:<br />
                        <span className="text-emerald-300">The Spiritual Heart of Makkah</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Navigate the top sacred sites in Makkah, their historical and spiritual context, and tips for planning your visitation schedule.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Travel Planning</h4>
                        <p className="leading-relaxed">
                            It is best to schedule your Ziyarat tours in the early morning after Fajr to beat the hot midday sun and avoid traffic congestion around the Haram area.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Masjid al-Haram (The Grand Mosque)</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The ultimate religious landmark in Makkah. It hosts the Kaaba, the starting point of Tawaf, and represents the absolute focal point of Islamic worship. For a detailed layout, check our <Link href="/blog/masjid-al-haram-complete-guide/" className="text-emerald-600 underline">Masjid al-Haram Guide</Link>.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Mina and Mount Arafat</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Located a few kilometers outside the city center, Mina is the tent city where Hajj pilgrims reside. Mount Arafat (Jabal al-Rahmah) is the Mount of Mercy, where pilgrims pray on the 9th of Dhul Hijjah.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Sacred Caves of Hira & Thawr</h2>
                    <p className="text-gray-700 leading-relaxed">
                        These caves on Jabal al-Noor and Jabal Thawr signify the beginning of the Quranic revelation and the start of the Hijrah migration. They are popular spots for physical and spiritual hikes.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Makkah Ziyarat Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Hire a private Sedan or SUV for a seamless, comfortable tour of all historical sites in Makkah with our local drivers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Makkah%20Landmarks" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
