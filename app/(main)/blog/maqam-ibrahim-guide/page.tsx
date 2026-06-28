import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Maqam Ibrahim Complete Guide 2026 | History & Prayers',
    description: 'Learn the history, significance, and location of Maqam Ibrahim (the Station of Abraham) in Masjid al-Haram. Find out where to pray after Tawaf.',
    keywords: [
        'Maqam Ibrahim history Makkah',
        'station of Abraham Grand Mosque',
        'praying 2 rakat behind Maqam Ibrahim',
        'footprints of Prophet Ibrahim',
        'Maqam Ibrahim golden dome casing',
        'what is Maqam Ibrahim',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/maqam-ibrahim-guide/',
    },
    openGraph: {
        title: 'Maqam Ibrahim Complete Guide 2026 | History & Prayers',
        description: 'A comprehensive pilgrim guide on Maqam Ibrahim inside the Grand Mosque. Discover the history of the sacred stone and prayers guidelines.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/maqam-ibrahim-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is Maqam Ibrahim?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Maqam Ibrahim (the Station of Ibrahim) is a square-shaped stone containing the miraculous footprints of Prophet Ibrahim (Abraham). He stood upon this stone while building the upper sections of the Holy Kaaba.',
            },
        },
        {
            '@type': 'Question',
            name: 'Where should I pray the two Rakats after performing Tawaf?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'It is Sunnah to perform a two-Rakat prayer behind Maqam Ibrahim. However, if the area is crowded, you can perform these two Rakats anywhere inside Masjid al-Haram to avoid blocking the flow of pilgrims doing Tawaf.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can you touch or see the actual footprints inside the glass casing?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The footprints are preserved inside a sealed golden metal frame with thick glass panes. While you can look inside the structure to view the silver casing enclosing the stone, pilgrims are not allowed to open or touch the actual relic.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Maqam Ibrahim Complete Guide: History, Significance & Prayer Rules',
    description: 'Understand the historical importance, Quranic references, and pilgrimage rites associated with Maqam Ibrahim inside Masjid al-Haram.',
    datePublished: '2026-01-25T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/maqam-ibrahim-guide/' },
};

export default function MaqamIbrahimGuidePage() {
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
                        <span>Maqam Ibrahim Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕋 Sacred Station</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Maqam Ibrahim:<br />
                        <span className="text-emerald-300">History, Rites & Guide 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Discover the story behind the Station of Abraham, its role in the Umrah and Hajj rites, and the proper etiquette for prayers.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Quranic Command</h4>
                        <p className="leading-relaxed">
                            Allah mentions in Surah Al-Baqarah (2:125): <em>"And take, [O believers], from the standing place of Abraham a place of prayer."</em> This makes performing two Rakats here a central Sunnah of Tawaf.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">The Story of the Miraculous Stone</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        When Prophet Ibrahim was constructing the Kaaba, the walls rose beyond his reach. His son Ismail brought him a large stone to stand on. Miraculously, the stone softened under his feet, leaving two distinct footprints. It also rose and lowered to act as a natural elevator, allowing Ibrahim to complete the masonry.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Location and Design</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Maqam Ibrahim is situated on the eastern side of the Mataf, directly opposite the Kaaba door. Historically, the stone was housed in different structures. Today, it is placed inside an elegant, gold-plated bronze casing decorated with glass panes, set atop a white marble pedestal.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Prayer Rites After Tawaf</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Upon completing the seventh circuit of Tawaf, pilgrims should:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Move towards the area behind Maqam Ibrahim if the crowd allows.</li>
                        <li>Perform a brief 2-Rakat prayer (reciting Surah Al-Kafirun in the first Rakat and Surah Al-Ikhlas in the second Rakat).</li>
                        <li>If the Mataf is crowded, step back to the outer circles or upper levels of the mosque to perform these Rakats to prevent pushing.</li>
                    </ul>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Makkah Ziyarat Transport Services</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Planning to visit the holy sites of Makkah and Madinah? Book our private taxi service for comfortable rides with local drivers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20for%20Makkah%20Ziyarat" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Check Taxi Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
