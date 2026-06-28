import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Complete Madinah Travel Guide 2026 | Holy City Tips',
    description: 'The ultimate visitor guide to Madinah in 2026. Discover key attractions, transportation options, historical sites, hotel zones, and local customs.',
    keywords: [
        'complete Madinah travel guide 2026',
        'things to do in Madinah',
        'Prophets Mosque visitor tips',
        'Madinah ziyarat places list',
        'how to get around Madinah',
        'Madinah itinerary for pilgrims',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/complete-madinah-travel-guide/',
    },
    openGraph: {
        title: 'Complete Madinah Travel Guide 2026 | Holy City Tips',
        description: 'Plan your spiritual and historical journey to Madinah with our complete visitor guide. Get tips on hotels, sites, and local transport.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/complete-madinah-travel-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How many days should I spend in Madinah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We recommend spending at least 3 to 4 days in Madinah. This gives you ample time to perform prayers at Masjid an-Nabawi, visit the Rawdah, tour historical sites like Quba and Uhud, and experience the peaceful atmosphere of the city.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are non-Muslims allowed to enter Madinah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Under current Saudi travel guidelines, non-Muslims are permitted to enter the city of Madinah to explore its historical and cultural landmarks. However, access to the inner courtyard and prayer halls of Masjid an-Nabawi remains strictly reserved for Muslims.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best way to travel from Jeddah Airport to Madinah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The fastest way is the Haramain High-Speed Train, which takes around 2 hours. Alternatively, hiring a private taxi or intercity transfer provides direct hotel-to-hotel convenience, especially if you are travelling with family and heavy luggage.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Madinah Travel Guide: Spiritual and Practical Tips',
    description: 'A comprehensive visitor directory and travel handbook for pilgrims visiting the city of Madinah.',
    datePublished: '2026-05-01T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/complete-madinah-travel-guide/' },
};

export default function CompleteMadinahGuidePage() {
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
                        <span>Madinah Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 City Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Complete Madinah Guide:<br />
                        <span className="text-emerald-300">Spiritual & Practical Tips 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Madinah, the second holiest city in Islam, is known for its peaceful aura (Sakinah). Learn how to plan your stays, Ziyarat visits, and navigate the city with ease.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20transfer%20to%20or%20within%20Madinah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Madinah Taxi
                        </a>
                        <Link href="/routes/makkah-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Makkah to Madinah Rates <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">2026 Tourist Notice</h4>
                        <p className="leading-relaxed">
                            Under the Saudi Vision 2030 initiatives, public transportation links, smart card guides, and tourist apps have been widely integrated in Madinah, making navigation easier than ever.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Introduction to Madinah Al-Munawwarah</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Known as the "Radiant City," Madinah serves as the final resting place of the Prophet Muhammad ﷺ. Unlike the bustling, ritual-focused pace of Makkah, Madinah offers a tranquil, peaceful atmosphere where pilgrims come to reflect, send blessings, and learn about Islamic heritage.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Top Landmarks to Visit</h2>
                    <div className="grid sm:grid-cols-3 gap-6 mt-4">
                        <div className="border border-gray-200 p-5 rounded-2xl">
                            <h3 className="font-bold text-emerald-800 text-base mb-2">1. Masjid an-Nabawi</h3>
                            <p className="text-gray-600 text-sm">The Prophet\'s Mosque, containing the Sacred Rawdah and his resting place. The center of all activities in the city.</p>
                        </div>
                        <div className="border border-gray-200 p-5 rounded-2xl">
                            <h3 className="font-bold text-emerald-800 text-base mb-2">2. Masjid Quba</h3>
                            <p className="text-gray-600 text-sm">The first mosque built in Islam. Performing two Rakats here is equivalent in reward to completing an Umrah.</p>
                        </div>
                        <div className="border border-gray-200 p-5 rounded-2xl">
                            <h3 className="font-bold text-emerald-800 text-base mb-2">3. Mount Uhud</h3>
                            <p className="text-gray-600 text-sm">The site of the famous battle of Uhud, housing the graves of the martyrs including Hamza (R.A).</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Transportation & Getting Around</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Navigating Madinah is straightforward due to its structured layout:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Walking:</strong> Most hotels around the Northern and Southern courtyards of Masjid an-Nabawi are within comfortable walking distance of the mosque.</li>
                        <li><strong>Haramain Railway:</strong> High-speed train connecting Madinah to Makkah and Jeddah Airport.</li>
                        <li><strong>Private Taxis:</strong> Ideal for visiting distant Ziyarat locations like Quba, Qiblatain, and Mount Uhud.</li>
                    </ul>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi in Madinah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Need an airport pickup, intercity transfer to Makkah, or a private Ziyarat driving tour? Book our premium transportation services in Madinah today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20service%20in%20Madinah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/makkah-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Transfer Fares <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
