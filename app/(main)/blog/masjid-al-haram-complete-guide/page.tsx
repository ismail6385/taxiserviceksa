import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Masjid al-Haram Complete Guide 2026 | Rules, History & Layout',
    description: 'The ultimate visitor guide to Masjid al-Haram in Makkah for 2026. Learn about gates, prayer areas, courtyard rules, wheelchair services, and historical facts.',
    keywords: [
        'Masjid al-Haram guide 2026',
        'Grand Mosque Makkah layout',
        'Masjid al-Haram gates list',
        'Haram wheelchair services',
        'praying in Masjid al-Haram rules',
        'Grand Mosque guide international pilgrims',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/masjid-al-haram-complete-guide/',
    },
    openGraph: {
        title: 'Masjid al-Haram Complete Guide 2026 | Rules, History & Layout',
        description: 'Plan your visit to the Grand Mosque of Makkah with our comprehensive layout, entry gates, prayer etiquette, and historical insights.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/masjid-al-haram-complete-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Which gate should I use to enter Masjid al-Haram for Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For Umrah pilgrims entering in Ihram, King Abdulaziz Gate (Gate 1), King Fahd Gate (Gate 79), and the new King Abdullah Gate are the primary entrances leading directly to the Mataf (Kaaba courtyard area). Check local signs as crowd management flow changes during peak times like Ramadan.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are wheelchair services available inside Masjid al-Haram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, official motor-powered and manual wheelchairs are available for elderly and disabled pilgrims. You can rent them through the Tanaqol app or directly at the designated wheelchair entrances on the ground and first floors of the mosque.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is photography allowed inside the Grand Mosque?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'While personal photos or videos on mobile phones for memory are generally tolerated, professional cameras, tripods, and extensive filming are strictly prohibited. Pilgrims should respect others praying and avoid blocking pathways to take selfies.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Masjid al-Haram Complete Guide: Rules, History & Layout',
    description: 'A comprehensive visitor guide to the Grand Mosque in Makkah, detailing history, expansion projects, entry gates, wheelchair services, and travel advice.',
    datePublished: '2026-01-10T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/masjid-al-haram-complete-guide/' },
};

export default function MasjidAlHaramGuidePage() {
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
                        <span>Masjid al-Haram Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Makkah Sacred Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 9 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Masjid al-Haram Guide:<br />
                        <span className="text-emerald-300">Rules, Layout & History 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Masjid al-Haram, the Grand Mosque of Makkah, is the most sacred site in Islam. Learn how to navigate the massive complex, its key gates, prayer areas, and rules for a smooth experience.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20transfer%20to%20Masjid%20al-Haram%20in%20Makkah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-4 h-4" /> Book Makkah Taxi
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5">
                            Jeddah to Makkah Rates <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">2026 Visitor Notice</h4>
                        <p className="leading-relaxed">
                            Due to ongoing smart expansions and digital crowd controls, pilgrims are advised to download the Nusuk app for permits. Keep electronic copies of your visa handy when passing through the checkpoints.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Significance of Masjid al-Haram</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        As the focal point of Islamic prayers worldwide, Masjid al-Haram houses the Holy Kaaba, the Maqam Ibrahim, the Safa and Marwah hills, and the blessed Zamzam Well. For centuries, the mosque has been expanded to accommodate millions of pilgrims during the annual Hajj pilgrimage and the year-round Umrah.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Layout and Core Sections</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Grand Mosque consists of several key floors and outdoor expansion arenas:
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6 mt-4">
                        <div className="border border-gray-200 p-5 rounded-2xl">
                            <h3 className="font-bold text-emerald-800 text-base mb-2">1. The Mataf (Kaaba Courtyard)</h3>
                            <p className="text-gray-600 text-sm">The open courtyard surrounding the Kaaba where pilgrims perform Tawaf. Primarily reserved for pilgrims in Ihram during peak hours.</p>
                        </div>
                        <div className="border border-gray-200 p-5 rounded-2xl">
                            <h3 className="font-bold text-emerald-800 text-base mb-2">2. The Masaa</h3>
                            <p className="text-gray-600 text-sm">The multi-level corridor connecting Safa and Marwah hills where pilgrims perform Sa\'i. Features air-conditioned halls and baby stroller paths.</p>
                        </div>
                        <div className="border border-gray-200 p-5 rounded-2xl">
                            <h3 className="font-bold text-emerald-800 text-base mb-2">3. The King Abdullah Expansion</h3>
                            <p className="text-gray-600 text-sm">The northern side of the mosque, providing massive prayer halls with advanced ventilation systems and premium marble carpets.</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Major Gates of Masjid al-Haram</h2>
                    <p className="text-gray-700 leading-relaxed">
                        With over 200 gates, knowing the main landmarks can prevent getting lost:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>King Abdulaziz Gate (Gate 1):</strong> Located on the southern side, leading directly to the hotel towers.</li>
                        <li><strong>King Fahd Gate (Gate 79):</strong> Located on the western side, heavily utilized by pilgrims staying in the Jabal Omar area.</li>
                        <li><strong>Bab Al Umrah (Gate 62):</strong> Located on the northwestern side, traditionally the main gate for entering to perform Tawaf.</li>
                        <li><strong>King Abdullah Gate:</strong> The newest massive gate on the northern extension.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Key Rules & Etiquette</h2>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                        <div className="flex gap-2">
                            <Eye className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                            <p className="text-sm text-gray-700"><strong>Modest Clothing:</strong> Men should wear proper Ihram or loose clothing. Women must wear loose abayas covering the entire body.</p>
                        </div>
                        <div className="flex gap-2">
                            <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                            <p className="text-sm text-gray-700"><strong>Luggage Policy:</strong> Large travel bags, suitcases, and baby carriages are not allowed inside the main prayer halls. Store them in lockers outside.</p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Need a Reliable Makkah Taxi?</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Arriving at Jeddah Airport? Book a direct, premium airport transfer to Masjid al-Haram with our professional drivers. We provide clean, comfortable SUVs and Sedans.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Masjid%20al-Haram" target="_blank" rel="noopener noreferrer"
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
