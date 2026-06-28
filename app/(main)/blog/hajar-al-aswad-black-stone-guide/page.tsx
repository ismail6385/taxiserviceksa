import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hajar al-Aswad (Black Stone) Guide | History & Meaning',
    description: 'Learn the history, origins, and spiritual rules of kissing or gesturing toward the Black Stone (Hajar al-Aswad) during Tawaf in Masjid al-Haram.',
    keywords: [
        'Hajar al-Aswad black stone guide',
        'history of black stone Kaaba',
        'is black stone from heaven',
        'kissing the black stone rules',
        'istilam gesturing black stone',
        'Kaaba corners guide',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/hajar-al-aswad-black-stone-guide/',
    },
    openGraph: {
        title: 'Hajar al-Aswad (Black Stone) Guide | History & Meaning',
        description: 'Discover the history, origin, and spiritual significance of the Hajar al-Aswad, and how to perform Istilam safely during Tawaf.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/hajar-al-aswad-black-stone-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the origin of the Black Stone (Hajar al-Aswad)?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'According to Islamic traditions, the Black Stone was brought down by the Angel Jibril (Gabriel) from Jannah (Paradise) and given to Prophet Ibrahim to place at the corner of the Kaaba.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is it mandatory to kiss the Black Stone during Tawaf?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, kissing the Black Stone is a Sunnah (tradition of the Prophet) and not a mandatory requirement for Tawaf. Given the massive crowds, pilgrims can simply gesture toward the stone with their hands from a distance, saying "Bismillahi Allahu Akbar". This gesture is called Istilam.',
            },
        },
        {
            '@type': 'Question',
            name: 'Why is the Black Stone broken into pieces?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Black Stone has suffered damage over the centuries due to fires, floods, and historical thefts (notably by the Qarmatians). Today, it is preserved as eight small fragments held together within a silver frame.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hajar al-Aswad (Black Stone) Guide: History, Origin & Etiquette',
    description: 'A complete pilgrim guide on Hajar al-Aswad (Black Stone), covering its heavenly origins, historical challenges, and rules for Istilam.',
    datePublished: '2026-01-20T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/hajar-al-aswad-black-stone-guide/' },
};

export default function BlackStoneGuidePage() {
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
                        <span>Black Stone Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕋 Sacred Relic</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 6 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Hajar al-Aswad Guide:<br />
                        <span className="text-emerald-300">History, Meaning & Rules</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        The Black Stone of the Kaaba is a revered symbol of Islamic heritage. Learn about its origins, historical preservation, and how to perform Istilam safely.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Safety First</h4>
                        <p className="leading-relaxed">
                            Crowd density around the Black Stone can be extremely high. Attempting to force your way to touch or kiss the stone can result in injury or distress to other pilgrims. Islamic scholars emphasize that gesturing from a distance (Istilam) holds the same spiritual merit.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Origins and Heavenly Significance</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        According to ancient narrative, Hajar al-Aswad is a stone of celestial origin. The Prophet Muhammad ﷺ said: "The Black Stone descended from Paradise, and it was whiter than milk, then it was blackened by the sins of the sons of Adam." It signifies the starting point of the circumambulation during Hajj and Umrah.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Historical Preservation and The Silver Casing</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The stone is set in the eastern corner of the Kaaba. Over the centuries, it was damaged by fires, heavy rainfall, and was stolen in 930 CE by the Qarmatians. It was recovered two decades later, but was broken into several small fragments. Today, these fragments are set in a dark cement matrix and protected by a polished sterling silver casing designed to safeguard it from wear.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">How to Perform Istilam</h2>
                    <p className="text-gray-700 leading-relaxed">
                        During each of the seven rounds of Tawaf, when a pilgrim aligns with the Black Stone corner:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Face the Black Stone directly.</li>
                        <li>Raise your right hand towards the stone, palm facing it.</li>
                        <li>Recite: <em>"Bismillahi Allahu Akbar"</em> (In the name of Allah, Allah is the Greatest).</li>
                        <li>Kiss your hand if you touched the stone, or simply continue walking without kissing your hand if you gestured from a distance.</li>
                    </ul>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Hassle-Free Airport Transfers to Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Arrive relaxed and ready for your Umrah rituals. Book your private car or spacious family van from Jeddah Airport directly to Makkah.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Makkah%20for%20Umrah" target="_blank" rel="noopener noreferrer"
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
