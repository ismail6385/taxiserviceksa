import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'The Islamic History of Makkah | Key Events & Timeline',
    description: 'Explore the rich Islamic history of Makkah. From Prophet Ibrahims construction of the Kaaba to the birth and mission of Prophet Muhammad ﷺ.',
    keywords: [
        'Islamic history of Makkah',
        'history of Mecca pre-Islamic era',
        'Prophet Muhammad mission Makkah',
        'conquest of Makkah history',
        'Abrahas attack on Makkah year of elephant',
        'early Islamic history events',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/islamic-history-makkah/',
    },
    openGraph: {
        title: 'The Islamic History of Makkah | Key Events & Timeline',
        description: 'Read the comprehensive historical overview of Makkah, detailing early Quranic history, the Prophet\'s life, and the conquest of Makkah.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/islamic-history-makkah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What was the pre-Islamic history of Makkah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Before Islam, Makkah was a prominent trade hub in the Arabian Peninsula and the center of pagan worship, hosting hundreds of idols inside the Kaaba until the Conquest of Makkah in 630 CE.',
            },
        },
        {
            '@type': 'Question',
            name: 'When did the Conquest of Makkah occur?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Conquest of Makkah occurred in the year 630 CE (8 AH) when the Prophet Muhammad ﷺ and his army entered the city peacefully, cleansed the Kaaba of idols, and declared a general amnesty.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the Year of the Elephant in Makkah\'s history?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Year of the Elephant (approx. 570 CE) refers to the year the Abyssinian ruler Abraha marched to destroy the Kaaba with a team of elephants, an attack that was miraculously thwarted by flocks of birds (as described in Surah Al-Fil). The Prophet ﷺ was born in this same year.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Islamic History of Makkah: Complete Timeline',
    description: 'Learn about the critical milestones, Quranic narratives, family lineages, and historical battles that shaped the holy city of Makkah.',
    datePublished: '2026-04-05T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/islamic-history-makkah/' },
};

export default function IslamicHistoryPage() {
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
                        <span>Islamic History Makkah</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">📜 History Timeline</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 6 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        The Islamic History:<br />
                        <span className="text-emerald-300">Timeline of Makkah the Blessed</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Read the historical timeline of Makkah, from the spring of Zamzam to the establishment of Islamic governance.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Historic Sanctuary</h4>
                        <p className="leading-relaxed">
                            Makkah has been declared a Haram (sanctuary) by Allah where fighting, cutting trees, and hunting are prohibited. It is a sanctuary of peace for all believers.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Prophet Ibrahim and Ismail</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Makkah\'s history as a sacred city begins with Prophet Ibrahim, who settled his wife Hajar and infant son Ismail in this desert valley under Allah\'s command. The miracle of Zamzam water led to the settlement of the Jurhum tribe, and Ibrahim later returned to build the Kaaba.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Life of the Prophet Muhammad ﷺ</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Born in 570 CE, the Prophet ﷺ spent the first 53 years of his life in Makkah. He received his first revelation at age 40, leading to a 13-year period of preaching. Faced with severe opposition from the Quraysh, the Prophet and his companions migrated to Madinah (The Hijrah) in 622 CE.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The Peaceful Conquest</h2>
                    <p className="text-gray-700 leading-relaxed">
                        In 630 CE, following the violation of the Treaty of Hudaybiyyah by the Quraysh, the Prophet ﷺ marched back to Makkah with 10,000 Muslims. The city surrendered peacefully. The Prophet ﷺ destroyed all idols in the Kaaba, restoring it as the center of monotheism.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Taxi Transfers to Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Travel comfortably to the historical city of Makkah. Hire our premium, air-conditioned taxis from Jeddah Airport, Madinah, or Riyadh.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Makkah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/jeddah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Check Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
