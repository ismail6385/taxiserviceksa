import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sacred Places in Makkah | 2026 Pilgrim Directory',
    description: 'Explore the most sacred places in Makkah for Umrah and Hajj pilgrims. Learn about Masjid al-Haram, Kaaba, Safa and Marwah, Mina, and Mount Arafat.',
    keywords: [
        'sacred places in Makkah',
        'holy sites in Mecca',
        'Kaaba and stations Makkah',
        'Mina Muzdalifah Arafat details',
        'historical mosques in Makkah',
        'Makkah ziyarat private drivers',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/sacred-places-makkah/',
    },
    openGraph: {
        title: 'Sacred Places in Makkah | 2026 Pilgrim Directory',
        description: 'Read the complete guide to Makkah\'s holy sites, detailing historical context, significance, and visiting guidelines.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/sacred-places-makkah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are the most sacred places inside Masjid al-Haram?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The most sacred places are the Holy Kaaba, Hajar al-Aswad (Black Stone), Maqam Ibrahim, Hateem (Hijr Ismail), Multazam, and the hills of Safa and Marwah.',
            },
        },
        {
            '@type': 'Question',
            name: 'Which holy sites are visited during the Hajj days?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'During Hajj, pilgrims visit the sacred zones of Mina (tent city), Muzdalifah (open plain), and Mount Arafat (Jabal al-Rahmah). These locations are outside the city center of Makkah.',
            },
        },
        {
            '@type': 'Question',
            name: 'How can international pilgrims visit these sacred places?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pilgrims can access Masjid al-Haram easily on foot from nearby hotels. For Hajj sites and historical mountains, booking a private taxi or joining a guided ziyarat tour is recommended.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Sacred Places in Makkah: A Guide to Holy Sites',
    description: 'Learn about the most sacred spiritual locations in Makkah, their historical significance, Quranic references, and guidelines for visiting.',
    datePublished: '2026-04-10T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/sacred-places-makkah/' },
};

export default function SacredPlacesMakkahPage() {
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
                        <span>Sacred Places Makkah</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Holy Sanctuary</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 6 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Sacred Places in Makkah:<br />
                        <span className="text-emerald-300">A Directory of Holy Sites 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        A comprehensive directory of the holy sites in and around Makkah, highlighting their spiritual value and visitation advice.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Haram Boundaries</h4>
                        <p className="leading-relaxed">
                            Makkah\'s sacred status extends to its Miqat boundaries. Pilgrims entering this zone to perform Umrah or Hajj must be in the state of Ihram.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Sanctuary of Masjid al-Haram</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The Grand Mosque houses multiple sacred relics and landmarks. Pilgrims circumambulate the Holy Kaaba, touch the Black Stone, offer voluntary prayers at Hateem, and drink the blessed Zamzam water. Each of these spots has a unique historical legacy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The Hajj Ritual Landscapes</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The valleys of Mina, Arafat, and Muzdalifah are critical sacred spots:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Mina:</strong> Commemorates Ibrahim\'s sacrifice and hosts the stoning of the Jamarat.</li>
                        <li><strong>Mount Arafat:</strong> Symbolizes the gathering of souls on the Day of Judgment.</li>
                        <li><strong>Muzdalifah:</strong> The place where pilgrims spend the night and collect pebbles.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visiting Guide</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To visit these historical zones comfortably, avoid the scorching afternoon heat. Seek private transportation options to navigate the routes smoothly.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Makkah Ziyarat Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Explore all sacred and historical sites in Makkah with our reliable private taxi transfers. Clean cars and professional drivers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Makkah%20Sacred%20Places" target="_blank" rel="noopener noreferrer"
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
