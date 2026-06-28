import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Safa and Marwah Guide 2026 | Sa\'i Steps & Meaning',
    description: 'A complete pilgrim guide to Safa and Marwah in Makkah. Learn the history of Hajars search for water and how to perform Sa\'i correctly.',
    keywords: [
        'Safa and Marwah history Makkah',
        'how to perform Sai guide',
        'distance between Safa and Marwah',
        'history of Hajar water search',
        'Sai steps for Umrah 2026',
        'green light run between Safa Marwah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/safa-marwah-guide/',
    },
    openGraph: {
        title: 'Safa and Marwah Guide 2026 | Sa\'i Steps & Meaning',
        description: 'Discover the history and practical steps for performing Sa\'i between the hills of Safa and Marwah inside Masjid al-Haram.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/safa-marwah-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the significance of Safa and Marwah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Safa and Marwah are two historical hills located inside Masjid al-Haram. Walking between them (Sa\'i) is a core rite of Hajj and Umrah, commemorating Hajar\'s search for water for her son Ismail.',
            },
        },
        {
            '@type': 'Question',
            name: 'How many laps are required during Sa\'i?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sa\'i consists of exactly seven laps. A single lap begins at Safa and ends at Marwah. The return journey from Marwah to Safa counts as the second lap, ending the seventh lap at Marwah.',
            },
        },
        {
            '@type': 'Question',
            name: 'What do the green lights between Safa and Marwah indicate?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The green lights on the ceiling mark the area where it is Sunnah for male pilgrims to quicken their pace (jog slightly) if they are physically able. Women should maintain their normal walking pace throughout the entire distance.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Safa and Marwah Guide: History, Sa\'i Rites & Tips',
    description: 'Learn the historical context, step-by-step procedures, distance measurements, and accessibility tips for Safa and Marwah.',
    datePublished: '2026-02-05T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/safa-marwah-guide/' },
};

export default function SafaMarwahGuidePage() {
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
                        <span>Safa and Marwah Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕋 Sa\'i Ritual</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 6 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Safa and Marwah Guide:<br />
                        <span className="text-emerald-300">Sa\'i Meaning & Steps 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Step-by-step instructions for performing Sa\'i, from supplications on the hills to navigating the air-conditioned Masaa corridor.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Masaa Dimensions</h4>
                        <p className="leading-relaxed">
                            The distance between Safa and Marwah is approximately 450 meters (1,476 feet). The total distance walked during the seven laps is about 3.15 kilometers (1.96 miles). Plan accordingly with comfortable footwear.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Historical Legacy</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The ritual of Sa\'i reflects the struggle of Hajar, who ran between the two hills in search of water or passing caravans for her thirsty infant Ismail. Her patience and trust in Allah are commemorated by every pilgrim completing Hajj or Umrah.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Step-by-Step Sa\'i Process</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Follow these simple steps when performing the ritual:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Start at Safa:</strong> Walk towards Safa hill, climb it slightly, face the Qibla (Kaaba direction), and raise your hands in supplication reciting the prescribed Quranic verses and Duas.</li>
                        <li><strong>Walk towards Marwah:</strong> Maintain a steady walking pace. When you reach the zone marked by green lights, men should jog/run slightly.</li>
                        <li><strong>Reach Marwah:</strong> Climb the hill, face the Qibla, recite supplications. This completes one lap.</li>
                        <li><strong>Repeat:</strong> Walk back to Safa (second lap). Complete seven laps, ending at Marwah.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Accessibility & Facilities</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The modern Masaa corridor is fully air-conditioned and has multiple levels (ground floor, first floor, second floor, and roof). Wheelchair lanes are designated on specific floors. Free Zamzam water dispensers are placed at regular intervals along the corridor.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Comfortable Airport Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Ensure a smooth transit from Jeddah Airport to your hotel in Makkah. Book our private transfers with professional local drivers today.
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
