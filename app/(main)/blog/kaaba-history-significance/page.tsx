import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'The History and Significance of the Kaaba | 2026 Pilgrim Guide',
    description: 'Explore the history of the Holy Kaaba in Makkah. From its initial construction by Prophet Ibrahim and Ismail to modern-day restorations.',
    keywords: [
        'history of the Kaaba',
        'who built the Kaaba first',
        'Kaaba architectural dimensions',
        'Kiswa cover history Makkah',
        'Holy Kaaba interior details',
        'performing Tawaf around Kaaba',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/kaaba-history-significance/',
    },
    openGraph: {
        title: 'The History and Significance of the Kaaba | 2026 Pilgrim Guide',
        description: 'Read the comprehensive history of the Kaaba, the House of Allah, detailing its reconstruction phases and deep spiritual role.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/kaaba-history-significance/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Who built the Kaaba first according to Islamic tradition?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'According to Islamic history and Quranic texts, the foundations of the Kaaba were first raised by Prophet Ibrahim (Abraham) and his son Prophet Ismail (Ishmael) under divine command.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is inside the Kaaba?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The interior of the Kaaba is a simple room with three wooden pillars supporting the roof, hanging gold and silver lamps, a table for perfumes, and walls covered in green marble and calligraphic inscriptions.',
            },
        },
        {
            '@type': 'Question',
            name: 'Why is the Kaaba covered in a black cloth?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Kaaba is covered in the Kiswa, a black silk cloth embroidered with gold and silver threads of Quranic verses. It is replaced annually during the Hajj season, a tradition carried out by the King Abdulaziz Complex for Holy Kaaba Kiswa.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The History and Significance of the Kaaba',
    description: 'Learn about the historical timeline, architectural dimensions, reconstruction phases, and spiritual significance of the Holy Kaaba in Makkah.',
    datePublished: '2026-01-15T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/kaaba-history-significance/' },
};

export default function KaabaHistoryPage() {
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
                        <span>Kaaba History</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕋 History</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        History & Significance<br />
                        <span className="text-emerald-300">of the Holy Kaaba</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Explore the historical timeline, dimensions, and profound religious importance of the Kaaba—the house towards which Muslims pray five times a day.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Spiritual Significance</h4>
                        <p className="leading-relaxed">
                            The Kaaba does not contain any idols nor represents an object of worship. It serves as the unifying Qibla (direction of prayer) for Muslims worldwide, symbolizing unity, equality, and devotion to the One Creator.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Historical Construction & Reconstruction</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        According to Islamic tradition, the Kaaba was built several times. The first structural foundations were raised by Prophet Ibrahim and Prophet Ismail. In the pre-Islamic era, the Quraysh rebuilt it, a process in which Prophet Muhammad ﷺ famously resolved a dispute regarding the placement of the Black Stone.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Throughout subsequent eras, expansions and restorations were carried out by Abdullah bin al-Zubayr, Hajjaj bin Yusuf, the Ottoman sultans, and in modern times, the extensive renovation phases managed by the Saudi government.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Dimensions & Architecture</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Kaaba is a near-cubical masonry structure made of granite quarry stones from the Makkah hills. It stands approximately 13.1 meters (43 feet) high, with sides measuring 11.03 meters by 12.86 meters.
                    </p>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                        <p className="text-sm text-gray-700"><strong>The Rukn al-Aswad (Black Stone Corner):</strong> Located in the eastern corner, where the Tawaf circumambulation begins and ends.</p>
                        <p className="text-sm text-gray-700"><strong>The Multazam:</strong> The space between the Kaaba door and the Black Stone, widely regarded as a key place for personal supplications (Dua).</p>
                        <p className="text-sm text-gray-700"><strong>Hateem (Hijr Ismail):</strong> The semi-circular low wall adjacent to the northwest wall of the Kaaba, considered part of the interior of the Kaaba.</p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Modern Preservation and Restorations</h2>
                    <p className="text-gray-700 leading-relaxed">
                        In 2026, state-of-the-art conservation techniques are utilized to clean and restore the structure. The Kiswa is manufactured locally in Makkah with premium imported raw silk, custom gold embroidery, and precise automated looms.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi to Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Ensure a comfortable pilgrimage experience. Get dynamic rates for private cars from Jeddah, Madinah, or Taif directly to Makkah. Safe, reliable, and premium services.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Makkah%20to%20see%20the%20Kaaba" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> WhatsApp Booking
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
