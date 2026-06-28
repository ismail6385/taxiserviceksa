import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'The Cave of Hira History & Spiritual Significance | 2026',
    description: 'Discover the profound history and significance of the Cave of Hira in Makkah. Read about the first revelation of the Holy Quran to Prophet Muhammad ﷺ.',
    keywords: [
        'Cave of Hira history Makkah',
        'first revelation of Quran',
        'Prophet Muhammad in Cave of Hira',
        'angel Jibril first meeting Hira',
        'inside the Cave of Hira',
        'climbing Jabal al Noor Cave Hira',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/cave-of-hira-history/',
    },
    openGraph: {
        title: 'The Cave of Hira History & Spiritual Significance | 2026',
        description: 'A deep dive into the history and spiritual meaning of the Cave of Hira on Jabal al-Noor, Makkah.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/cave-of-hira-history/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What happened inside the Cave of Hira?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Cave of Hira is the site where the Prophet Muhammad ﷺ received the first divine revelations of the Holy Quran from Allah, conveyed by the Angel Jibril (Gabriel) in the year 610 CE.',
            },
        },
        {
            '@type': 'Question',
            name: 'What are the first verses revealed in the Cave of Hira?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The first verses revealed were the opening five verses of Surah Al-Alaq: "Recite in the name of your Lord who created - Created man from a clinging substance. Recite, and your Lord is the most Generous - Who taught by the pen - Taught man that which he knew not."',
            },
        },
        {
            '@type': 'Question',
            name: 'Is visiting the Cave of Hira a mandatory part of Umrah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No, visiting the Cave of Hira is not a mandatory ritual of Umrah or Hajj. It is purely a voluntary historical visit (Ziyarat) to reflect on the early history of Islam.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Cave of Hira: History, Revelation & Spiritual Importance',
    description: 'Learn about the historical events that transpired inside the Cave of Hira, the first revelation of the Quran, and tips for visiting this holy site.',
    datePublished: '2026-02-15T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/cave-of-hira-history/' },
};

export default function CaveOfHiraHistoryPage() {
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
                        <span>Cave of Hira History</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">📖 Islamic History</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Cave of Hira History:<br />
                        <span className="text-emerald-300">The Birthplace of Revelation</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Read the deep history of the Cave of Hira, the angelic encounter between Jibril and the Prophet Muhammad ﷺ, and its impact on humanity.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Spiritual reflection</h4>
                        <p className="leading-relaxed">
                            SCHOLARS ADVISE: When visiting historical sites like the Cave of Hira, keep in mind that acts of worship should be directed solely to Allah. Avoid calling upon the mountain, rubbing the stones for blessings, or placing amulets.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Solitude and Meditation</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Before receiving prophethood, Muhammad ﷺ grew concerned with the moral decay and idolatry in Mecca. He sought retreat in the quiet cavern of Hira, situated near the peak of Jabal al-Noor. He spent days and nights praying and reflecting in absolute solitude, carrying simple provisions like barley bread and water.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The First Revelation</h2>
                    <p className="text-gray-700 leading-relaxed">
                        In the final third of Ramadan, the Angel Jibril appeared in human form and commanded the Prophet: <em>"Iqra!"</em> (Read/Proclaim). Muhammad ﷺ replied: <em>"Ma ana bi qari"</em> (I am not a reader). The angel embraced him tightly and repeated the command three times, before reciting the first five verses of Surah Al-Alaq, initiating the light of Islamic message.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visiting the Cave Today</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The cave is narrow, offering enough room for only one or two people to pray at a time. The opening faces the Kaaba. Millions of pilgrims climb to the cave each year to stand where the Prophet ﷺ once stood.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Private Tour of Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Explore the historical sites of Makkah in absolute comfort. We provide private cabs, GMCs, and luxury vehicles for airport transfers and Ziyarat.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20for%20Makkah%20Ziyarat" target="_blank" rel="noopener noreferrer"
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
