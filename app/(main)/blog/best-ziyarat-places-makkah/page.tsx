import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: '15 Best Ziyarat Places in Makkah | 2026 Pilgrim Guide',
    description: 'Explore the top historical and religious Ziyarat places to visit in Makkah. Learn details about Mina, Arafat, Muzdalifah, Cave of Hira, and historic mosques.',
    keywords: [
        'best ziyarat places in Makkah',
        'historical sites in Makkah ziyarat',
        'places to visit in Makkah during Umrah',
        'Mina Muzdalifah Arafat tour',
        'Makkah ziyarat taxi service',
        'ziyarat places list pilgrims',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/best-ziyarat-places-makkah/',
    },
    openGraph: {
        title: '15 Best Ziyarat Places in Makkah | 2026 Pilgrim Guide',
        description: 'Plan your historical tour in Makkah. Discover the top 15 Ziyarat places including holy mountains, caves, cemeteries, and Hajj sites.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/best-ziyarat-places-makkah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is Ziyarat in Makkah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ziyarat refers to visiting holy historical sites, mountains, and mosques in and around Makkah to learn about Islamic heritage and reflect on the life of the Prophet Muhammad ﷺ.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long does a complete Makkah Ziyarat tour take?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A standard driving tour covering Hajj sites (Mina, Arafat, Muzdalifah, Jabal al-Rahmah) and mountain bases (Jabal al-Noor, Jabal Thawr) takes about 3 to 4 hours by private taxi. Hiking the mountains requires additional hours.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can you visit Hajj sites like Mina and Arafat outside the Hajj season?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Mina, Arafat, and Muzdalifah are open year-round for pilgrims and tourists. You can walk around the tents in Mina, stand on Jabal al-Rahmah (Mount of Mercy), and view the Jamarat pillars easily.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '15 Best Ziyarat Places in Makkah: Complete Tour Guide',
    description: 'A comprehensive visitor directory of the top 15 historical and spiritual Ziyarat sites in Makkah for Umrah and Hajj pilgrims.',
    datePublished: '2026-03-25T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/best-ziyarat-places-makkah/' },
};

export default function BestZiyaratPlacesPage() {
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
                        <span>Best Ziyarat Places</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Makkah Ziyarat</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        15 Best Ziyarat Places<br />
                        <span className="text-emerald-300">in Makkah Guide 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        A detailed list of the most sacred, historical, and scenic places in Makkah to visit during your Umrah or Hajj pilgrimage.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Tour Booking Recommendation</h4>
                        <p className="leading-relaxed">
                            Public transport (like buses or trains) does not run directly to many historic sites like Jabal Thawr or Cave of Hira. Booking a private taxi or hiring a vehicle for a half-day tour is the most convenient way to visit these locations.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Must-Visit Ziyarat Locations</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Makkah is rich in Islamic heritage. Beyond the Grand Mosque, pilgrims can explore mountains, caves, battlefields, and sites associated with Hajj rituals. Here is the curated list of the top 15 Ziyarat places in Makkah:
                    </p>
                </section>

                <section className="space-y-6">
                    <div className="space-y-6">
                        <div className="border-b border-gray-200 pb-6">
                            <h3 className="text-xl font-bold text-emerald-900 mb-2">1. The Cave of Hira (Jabal al-Noor)</h3>
                            <p className="text-gray-600 text-sm">The sacred site where the Prophet Muhammad ﷺ received the first verses of the Quran. For more details, see our <Link href="/blog/cave-of-hira-history/" className="text-emerald-600 underline">Cave of Hira Guide</Link>.</p>
                        </div>
                        <div className="border-b border-gray-200 pb-6">
                            <h3 className="text-xl font-bold text-emerald-900 mb-2">2. Mount Arafat (Jabal al-Rahmah)</h3>
                            <p className="text-gray-600 text-sm">The Mount of Mercy where the Prophet ﷺ delivered his Farewell Sermon. Standing at Arafat is the most critical rite of Hajj.</p>
                        </div>
                        <div className="border-b border-gray-200 pb-6">
                            <h3 className="text-xl font-bold text-emerald-900 mb-2">3. Mina (The City of Tents)</h3>
                            <p className="text-gray-600 text-sm">The valley where pilgrims stay in white fireproof tents during the Hajj days and perform the stoning of the Jamarat pillars.</p>
                        </div>
                        <div className="border-b border-gray-200 pb-6">
                            <h3 className="text-xl font-bold text-emerald-900 mb-2">4. Cave of Thawr (Jabal Thawr)</h3>
                            <p className="text-gray-600 text-sm">The historic mountain cave where the Prophet ﷺ and Abu Bakr took refuge during their migration. Read our <Link href="/blog/jabal-thawr-guide/" className="text-emerald-600 underline">Jabal Thawr Guide</Link>.</p>
                        </div>
                        <div className="border-b border-gray-200 pb-6">
                            <h3 className="text-xl font-bold text-emerald-900 mb-2">5. Jannat al-Mualla</h3>
                            <p className="text-gray-600 text-sm">The final resting place of Hazrat Khadijah (R.A) and other early companions. Read our <Link href="/blog/jannat-al-mualla-makkah-guide/" className="text-emerald-600 underline">Jannat al-Mualla Guide</Link>.</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-black text-gray-900">How to Hire a Ziyarat Driver</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To get the most out of your Ziyarat tour:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Choose family SUVs:</strong> Vehicles like GMC Yukon or Hyundai Staria provide comfort, especially for kids and senior citizens.</li>
                        <li><strong>Decide a flat rate:</strong> Agree on a fixed fare including parking and waiting times before boarding the car.</li>
                        <li><strong>Local knowledge:</strong> Hire drivers who speak your language and know the historical importance of each spot.</li>
                    </ul>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Makkah Ziyarat Tour</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Explore Makkah\'s historical sites in comfort. Book a half-day private taxi tour with our professional local drivers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20Makkah%20Ziyarat%20taxi%20tour" target="_blank" rel="noopener noreferrer"
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
