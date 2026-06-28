import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Makkah Museum Guide 2026 | Location, Hours & Tickets',
    description: 'The complete guide to Makkah Museum (formerly Al-Zahir Palace Museum) and the Exhibition of the Two Holy Mosques. Learn hours, tickets, and exhibits.',
    keywords: [
        'Makkah Museum visitor guide 2026',
        'Al Zahir Palace Museum Makkah',
        'Exhibition of Two Holy Mosques Makkah',
        'Makkah historical museum ticket price',
        'Islamic relics museum Makkah',
        'best museums to visit Makkah',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/makkah-museum-guide/',
    },
    openGraph: {
        title: 'Makkah Museum Guide 2026 | Location, Hours & Tickets',
        description: 'Plan your visit to Makkah\'s historical museums. Discover exhibits of ancient Islamic coins, calligraphic scripts, and old Kaaba doors.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/makkah-museum-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Where is the main Makkah Museum located?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The main Makkah Museum (Al-Zahir Palace) is located in the Al-Zahir district along Al-Medina Al-Munawwarah Road, about 3.5 kilometers northwest of Masjid al-Haram.',
            },
        },
        {
            '@type': 'Question',
            name: 'What can I see at the Exhibition of the Two Holy Mosques Architecture?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Located in the Umm al-Joud district, this museum houses historical architectural models, old wooden doors of the Kaaba, the old copper casing of Maqam Ibrahim, ancient well parts, and dynamic photographic records of expansion projects.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do I need tickets or permits to visit these museums?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Many government-run museums in Makkah are free to enter. However, certain exhibitions require pre-registration or tour bookings via local tourism platforms. It is highly recommended to check opening hours in advance as they vary during Hajj and Ramadan.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Makkah Museum Complete Guide: Location, Opening Hours & Exhibits',
    description: 'Explore the top museums in Makkah including Al-Zahir Palace and the Exhibition of the Two Holy Mosques. Find out how to visit them.',
    datePublished: '2026-03-10T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/makkah-museum-guide/' },
};

export default function MakkahMuseumGuidePage() {
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
                        <span>Makkah Museum Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🏛️ Historical Museum</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Makkah Museum Guide:<br />
                        <span className="text-emerald-300">Exhibits, Hours & Booking 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Enrich your pilgrimage experience by exploring the ancient history of Makkah, archaeological findings, and the development of the Holy Mosques.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Exhibition Directory</h4>
                        <p className="leading-relaxed">
                            Makkah hosts several museums. The two most popular are <strong>Makkah Museum (Al-Zahir Palace)</strong> and the <strong>Exhibition of the Two Holy Mosques Architecture</strong> (located in Umm al-Joud, near the Kiswa Factory).
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Al-Zahir Palace Museum (Makkah Museum)</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Housed in an elegant palace constructed in 1944, this museum covers pre-Islamic archaeological findings in the Makkah region, early geological formations, calligraphic Quran manuscripts, and collections of ancient coins and pottery. It provides an excellent educational summary of Saudi Arabia\'s heritage.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Exhibition of the Two Holy Mosques Architecture</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This museum is dedicated to the evolutionary construction of Masjid al-Haram and Masjid Nabawi. Exhibits include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Historical Columns:</strong> Ancient wooden and marble pillars dating back to various Islamic dynasties.</li>
                        <li><strong>Kaaba Keys & Doors:</strong> Older brass locks, keys, and beautifully carved wooden doors of the Kaaba.</li>
                        <li><strong>Minbars:</strong> Historical pulpits used for delivering sermons in the Grand Mosque.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">How to Plan Your Visit</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Both museums are situated outside the immediate Haram courtyard area. It is best to plan your visit on a weekday morning when crowd levels are low. Hire a private taxi to take you to the Kiswa Factory and the Umm al-Joud museum on the same trip.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Ziyarat & Museum Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Plan a customized tour to the Makkah Museum, Kiswa Factory, and Jabal al-Noor in our spacious vehicles. Safe, reliable, and air-conditioned cars.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Makkah%20museums" target="_blank" rel="noopener noreferrer"
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
