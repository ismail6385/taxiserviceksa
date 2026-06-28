import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jabal al-Noor Makkah Guide 2026 | Mountain of Light',
    description: 'The ultimate guide to climbing Jabal al-Noor (Mountain of Light) in Makkah. Learn about the Cave of Hira, climb times, safety tips, and history.',
    keywords: [
        'Jabal al Noor Makkah guide 2026',
        'mountain of light Cave of Hira',
        'climbing Jabal al Noor steps',
        'how long to climb Jabal al Noor',
        'Cave of Hira history and location',
        'Makkah ziyarat mountain tours',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/jabal-al-noor-guide/',
    },
    openGraph: {
        title: 'Jabal al-Noor Makkah Guide 2026 | Mountain of Light',
        description: 'Plan your visit to Jabal al-Noor in Makkah. Discover climb duration, history of Cave of Hira, and essential safety guidelines.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/jabal-al-noor-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How long does it take to climb Jabal al-Noor?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Climbing Jabal al-Noor to reach the summit and the Cave of Hira takes approximately 1 to 2 hours, depending on your physical fitness. The path consists of stone steps, which can be steep and demanding.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best time of day to climb the mountain?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best time to climb Jabal al-Noor is during the early morning after Fajr prayer or late afternoon before Maghrib. Avoid climbing during mid-day hours when temperatures in Makkah can exceed 40°C.',
            },
        },
        {
            '@type': 'Question',
            name: 'Are there facilities or shops on the mountain?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'There are small kiosks along the stairs selling bottled water, soft drinks, and light snacks. However, prices might be higher than in the city, so it is recommended to carry your own hydration.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Jabal al-Noor (Mountain of Light) Makkah: Climber\'s Guide & History',
    description: 'Learn the historical background of Jabal al-Noor, step-by-step hiking details, Cave of Hira facts, and safety tips for pilgrims in 2026.',
    datePublished: '2026-02-10T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/jabal-al-noor-guide/' },
};

export default function JabalAlNoorPage() {
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
                        <span>Jabal al-Noor Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🏔️ Ziyarat Mountain</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 7 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Jabal al-Noor Guide:<br />
                        <span className="text-emerald-300">Climbing Hira Mountain 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Climb the famous Mountain of Light to see where the first revelations of the Holy Quran were sent down to the Prophet Muhammad ﷺ.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Climb Alert</h4>
                        <p className="leading-relaxed">
                            Due to steep stairs and high altitude, this climb is not recommended for individuals with severe cardiac conditions, knee issues, or breathing difficulties. Elderly pilgrims should evaluate their fitness carefully.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Historical & Spiritual Context</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Jabal al-Noor (literally meaning the Mountain of Light) holds a unique status in Islamic history. Near the summit of this peak is the Cave of Hira, where the Prophet Muhammad ﷺ would spend long periods meditating. In 610 CE, during the month of Ramadan, Angel Jibril descended with the first five verses of Surah Al-Alaq: <em>"Iqra\' bismi Rabbika alladhi khalaq..."</em> (Read, in the name of your Lord who created...).
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Climbing Tips & Guidelines</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To ensure a safe and spiritual journey up Jabal al-Noor, keep the following guidelines in mind:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Hydration:</strong> Carry at least 2 liters of water per person.</li>
                        <li><strong>Footwear:</strong> Wear sports shoes or hiking sandals with a good grip. Standard flip-flops or slippers can be hazardous.</li>
                        <li><strong>Trash disposal:</strong> Keep the mountain clean. Carry a small bag for your trash and dispose of it at the bottom bins.</li>
                        <li><strong>Avoid rush:</strong> Climb slowly, taking regular breaks at the resting stations along the concrete steps.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The Cave of Hira Experience</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Cave of Hira is a small natural cavern, about 3.7 meters long and 1.6 meters wide. It faces the direction of the Holy Kaaba. Pilgrims visit to offer voluntary prayers and reflect on the historical beginnings of Islam.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Makkah Ziyarat Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Avoid transport hassles. Hire a private vehicle with a professional driver to pick you up from your hotel and drop you at the foot of Jabal al-Noor.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Jabal%20al-Noor" target="_blank" rel="noopener noreferrer"
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
