import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'The Cave of Thawr Hijra History | Prophet Companion Guide',
    description: 'Discover the profound historical events of the Cave of Thawr (Ghar Thawr) in Makkah. Learn how the Prophet Muhammad ﷺ and Abu Bakr hid from the Quraysh.',
    keywords: [
        'Cave of Thawr history Makkah',
        'Hijrah migration cave story',
        'Prophet Muhammad Abu Bakr cave',
        'spider web miracle Cave of Thawr',
        'Ghar Thawr historical facts',
        'Makkah ziyarat historical sites',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/cave-of-thawr-hijra-history/',
    },
    openGraph: {
        title: 'The Cave of Thawr Hijra History | Prophet Companion Guide',
        description: 'Read the miraculous events of the Hijrah migration that transpired inside the Cave of Thawr, Makkah.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/cave-of-thawr-hijra-history/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Why did the Prophet ﷺ and Abu Bakr hide in the Cave of Thawr?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'They hid in the Cave of Thawr to seek refuge from the Quraysh tribesmen who had plotted to assassinate the Prophet ﷺ and were tracking them during their migration (Hijrah) from Makkah to Madinah.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long did they stay in the Cave of Thawr?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'They stayed inside the Cave of Thawr for three nights (Thursday, Friday, and Saturday), while Abu Bakr\'s family members secretly brought them news and food under the cover of night.',
            },
        },
        {
            '@type': 'Question',
            name: 'What was the spider web miracle at the Cave of Thawr?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'When the Quraysh tracking team reached the mouth of the cave, they saw a spider web spun across the opening and a pigeon nesting. Believing no one could have entered without tearing the web and disturbing the pigeon, they turned back, showcasing Allah\'s divine protection.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Cave of Thawr: Hijra History and Miracles',
    description: 'Learn the complete narrative of the Hijrah migration, the role of Abu Bakr, the miracles of the spider web and pigeon, and the historical legacy of the Cave of Thawr.',
    datePublished: '2026-03-15T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/cave-of-thawr-hijra-history/' },
};

export default function CaveOfThawrHistoryPage() {
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
                        <span>Cave of Thawr History</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">📖 Hijrah Migration</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Cave of Thawr History:<br />
                        <span className="text-emerald-300">Miracles of the Hijrah</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Read the historic account of the Cave of Thawr, the loyalty of Hazrat Abu Bakr, and the divine intervention that saved the message of Islam.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Historical Milestone</h4>
                        <p className="leading-relaxed">
                            The Hijrah migration from Makkah to Madinah marks the starting point of the Islamic Hijri calendar, representing a transition from persecution to establishing the first Islamic state.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">The Stealthy Departure</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Under search by the Quraysh, the Prophet ﷺ and Abu Bakr had to plan their exit carefully. The Prophet\'s cousin Hazrat Ali lay in the Prophet\'s bed as a decoy. Muhammad ﷺ and Abu Bakr walked out under divine protection, travelling south to the rugged cliffs of Jabal Thawr.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Inside the Cave of Thawr</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Cave of Thawr is a hollow space inside a massive rock formation. Abu Bakr entered first to inspect the cave and seal any snake holes with pieces of his clothing to protect the Prophet ﷺ. During their stay, Abu Bakr\'s daughter Asma (R.A) brought them food, and his son Abdullah brought news of Mecca, risking their lives.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The Divine Consolidation</h2>
                    <p className="text-gray-700 leading-relaxed">
                        At one point, the Quraysh search party stood just inches from the cave entrance. Abu Bakr expressed fear, saying: "If one of them looks down at his feet, he will see us." The Prophet ﷺ replied with profound faith: <em>"La tahzan, inna Allaha ma\'ana"</em> (Do not grieve; indeed Allah is with us). Soon after, the trackers left, and the migration continued towards Madinah.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Makkah Ziyarat Transport</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Planning to visit the historical Cave of Thawr? Hire a private car or van with a professional local driver for a comfortable journey.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Cave%20of%20Thawr" target="_blank" rel="noopener noreferrer"
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
