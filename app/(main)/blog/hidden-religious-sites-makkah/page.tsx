import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hidden Religious Sites in Makkah | 2026 Guide',
    description: 'Explore the lesser-known, hidden religious and historical sites in Makkah. Learn the significance and location of Masjid al-Bayah and Bir Tuwa.',
    keywords: [
        'hidden religious sites in Makkah',
        'Bir Tuwa well history Makkah',
        'Masjid al Bayah pledge mosque',
        'lesser known historical sites Mecca',
        'Makkah ziyarat hidden gems',
        'Makkah private taxi tour',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/hidden-religious-sites-makkah/',
    },
    openGraph: {
        title: 'Hidden Religious Sites in Makkah | 2026 Guide',
        description: 'Read the comprehensive pilgrim guide to Makkah\'s lesser-known sacred monuments. Learn their history, location, and travel guidelines.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/hidden-religious-sites-makkah/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the history of Bir Tuwa?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bir Tuwa (the Well of Tuwa) is a historic well in Makkah. The Prophet Muhammad ﷺ bathed using its water and spent the night nearby before entering Makkah for his Conquest and Farewell Pilgrimage.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is Masjid al-Bayah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Masjid al-Bayah (the Mosque of the Pledge) is a historic mosque in Mina, marking the spot where the Ansar of Madinah met with the Prophet ﷺ and took the Pledge of Aqabah to protect him.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are these sites easily accessible to pilgrims?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bir Tuwa is located in the Jarwal neighborhood near the Grand Mosque and can be seen easily. Masjid al-Bayah is located near the Jamarat bridge in Mina. Private transport or guided tours are recommended to visit them.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hidden Religious Sites in Makkah: Heritage and Visitor Guide',
    description: 'Learn about the top lesser-known historical sites to visit in Makkah, including Bir Tuwa and Masjid al-Bayah.',
    datePublished: '2026-04-20T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/hidden-religious-sites-makkah/' },
};

export default function HiddenSitesPage() {
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
                        <span>Hidden Religious Sites</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Hidden Gems</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Hidden Religious Sites:<br />
                        <span className="text-emerald-300">Discover Makkah\'s Hidden History</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Step off the beaten path and explore the quiet, lesser-known historic monuments of Makkah that bear testimony to early Islamic history.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Accessibility Tip</h4>
                        <p className="leading-relaxed">
                            These sites are rarely crowded, making them ideal places for quiet contemplation and learning. It is recommended to hire a private taxi to reach them easily.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Bir Tuwa (The Well of Tuwa)</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Bir Tuwa is a historic well in the Jarwal neighborhood. The Prophet Muhammad ﷺ bathed using its water and camped nearby before entering Makkah for the Conquest and Farewell Pilgrimage. It stands as a preserved historical relic of his presence.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Masjid al-Bayah (The Mosque of the Pledge)</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Tucked away near the Jamarat bridge in Mina, this small open-roof mosque marks the spot where the Ansar (Helpers) of Madinah met secretly with the Prophet ﷺ to pledge their allegiance, a crucial turning point that led to the Hijrah migration.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visiting Recommendations</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To visit Bir Tuwa and Masjid al-Bayah, consult local taxi operators who have experience driving pilgrims to these historic spots. These locations provide a quiet look into the history of Makkah.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Ziyarat Tour Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Hire a private Sedan or a GMC Yukon for a tailored, air-conditioned tour of all historical sites in Makkah. Premium service with local drivers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20visit%20hidden%20religious%20sites%20in%20Makkah" target="_blank" rel="noopener noreferrer"
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
