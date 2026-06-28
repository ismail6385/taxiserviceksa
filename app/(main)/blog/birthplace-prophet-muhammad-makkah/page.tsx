import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'The Birthplace of Prophet Muhammad ﷺ in Makkah | 2026 Guide',
    description: 'Learn about the historical site of the birthplace of the Prophet Muhammad ﷺ in Makkah (now Makkah Library). Find location, history, and visitor details.',
    keywords: [
        'birthplace of Prophet Muhammad Makkah',
        'Makkah library Prophet birth site',
        'where was Prophet Muhammad born',
        'historical sites in Makkah library',
        'Prophet birthplace location map',
        'Makkah ziyarat historical guide',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/birthplace-prophet-muhammad-makkah/',
    },
    openGraph: {
        title: 'The Birthplace of Prophet Muhammad ﷺ in Makkah | 2026 Guide',
        description: 'A visitor guide to the historical birth site of Prophet Muhammad ﷺ in Makkah, detailing history and modern-day preservation.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/birthplace-prophet-muhammad-makkah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Where was the Prophet Muhammad ﷺ born?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Prophet Muhammad ﷺ was born in a house located in the Shib Abi Talib valley (now near the eastern courtyard of Masjid al-Haram) in Makkah.',
            },
        },
        {
            '@type': 'Question',
            name: 'What stands at the birthplace site today?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The original house has been replaced by a modest two-story brick building that houses the Makkah Library (Maktabat Makkah al-Mukarramah). This was done to preserve the location while preventing improper ritual practices at the site.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can you go inside the birthplace building?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Makkah Library is generally closed to the general public for tours to manage crowds, but pilgrims can easily view the exterior structure and take photographs from the eastern expansion plaza of the Grand Mosque.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Birthplace of Prophet Muhammad ﷺ in Makkah: History & Location',
    description: 'Discover the history of the house where the Prophet ﷺ was born, its transition into the Makkah Library, and how to find the location near the Grand Mosque.',
    datePublished: '2026-03-20T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/birthplace-prophet-muhammad-makkah/' },
};

export default function BirthplaceProphetPage() {
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
                        <span>Prophet Birthplace Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Sacred Birthplace</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Birthplace of Prophet ﷺ:<br />
                        <span className="text-emerald-300">History & Location Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Learn about the historical site in Makkah where the Prophet Muhammad ﷺ was born in the Year of the Elephant (570 CE).
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Makkah Library</h4>
                        <p className="leading-relaxed">
                            To prevent pilgrims from engaging in non-legislated practices (such as bowing or rubbing the walls for blessings), the local authorities converted the site into a public library in 1950, named <em>Maktabat Makkah al-Mukarramah</em>.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Historical & Family Context</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The Prophet Muhammad ﷺ was born on a Monday in the month of Rabi\' al-Awwal. His father Abdullah died before his birth, and his mother Aminah gave birth to him in the house of his grandfather, Abdul Muttalib, in the Shib Abi Talib valley. This area was home to the Banu Hashim clan of the Quraysh tribe.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Location Near Masjid al-Haram</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The site is located just northeast of the main Mataf structure, past the Safa and Marwah exit doors. As you walk towards the tunnels of Jabal Khandama, you will see a modest yellow-brick building standing alone on a raised platform, with a sign reading "Makkah Library".
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visiting Guidelines</h2>
                    <p className="text-gray-700 leading-relaxed">
                        You can easily visit the site on foot during your time in Makkah. It is an excellent place for photography and reflecting on the early years of the Prophet ﷺ. Make sure to maintain quietness as it is a library and located in a busy plaza.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Taxi Transfers to Masjid al-Haram</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Need reliable transport to your hotel in Makkah from Jeddah Airport? Book our clean, premium Sedans and GMCs with professional drivers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Makkah" target="_blank" rel="noopener noreferrer"
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
