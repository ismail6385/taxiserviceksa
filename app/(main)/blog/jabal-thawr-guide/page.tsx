import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jabal Thawr Makkah Guide 2026 | Mountain of the Cave',
    description: 'A complete visitor guide to Jabal Thawr (Ghar Thawr) in Makkah. Learn the history of the Hijrah migration, climb times, and visitor tips.',
    keywords: [
        'Jabal Thawr Makkah guide 2026',
        'Ghar Thawr cave history',
        'Hijrah migration Prophet Muhammad',
        'climbing Jabal Thawr steps',
        'how long to climb Jabal Thawr',
        'Makkah ziyarat private tours',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/jabal-thawr-guide/',
    },
    openGraph: {
        title: 'Jabal Thawr Makkah Guide 2026 | Mountain of the Cave',
        description: 'Read the historical significance and climbing advice for Jabal Thawr in Makkah, where the Prophet ﷺ hid during the Hijrah.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/jabal-thawr-guide/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the significance of Jabal Thawr?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Jabal Thawr houses the Cave of Thawr (Ghar Thawr). The Prophet Muhammad ﷺ and his companion Abu Bakr Al-Siddiq hid in this cave for three days to escape the Quraysh during their migration (Hijrah) from Makkah to Madinah.',
            },
        },
        {
            '@type': 'Question',
            name: 'How long does it take to climb Jabal Thawr?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Climbing Jabal Thawr is a demanding hike that takes approximately 1.5 to 2.5 hours depending on your fitness level. The mountain is higher and steeper than Jabal al-Noor, with less-developed paths.',
            },
        },
        {
            '@type': 'Question',
            name: 'What miracles happened at the Cave of Thawr?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'According to Islamic narratives, when the Quraysh trackers reached the mouth of the cave, they saw a spider web spun across the opening and a nesting pigeon. Believing no one could have entered without destroying the web, they abandoned the search.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Jabal Thawr (Mountain of the Cave) Makkah: History & Climbing Guide',
    description: 'Explore the history of the Hijrah migration, the Cave of Thawr, climbing durations, and safety guidelines for pilgrims climbing Jabal Thawr.',
    datePublished: '2026-02-20T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/jabal-thawr-guide/' },
};

export default function JabalThawrGuidePage() {
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
                        <span>Jabal Thawr Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🏔️ Ziyarat Mountain</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 6 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Jabal Thawr Guide:<br />
                        <span className="text-emerald-300">Hijrah History & Climbing Tips</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Climb the historic Jabal Thawr and visit the cave where the Prophet Muhammad ﷺ and Abu Bakr took shelter during their historic migration.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Climbing Difficulty</h4>
                        <p className="leading-relaxed">
                            Jabal Thawr is a challenging climb. The path is rocky, steep, and has few handrails. It is recommended to climb only if you are in good physical health. Ensure you carry sufficient water and go in groups.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">The Hijrah Migration Milestone</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        In 622 CE, the Prophet Muhammad ﷺ was commanded to leave Makkah due to intensifying persecution by the Quraysh. Along with Abu Bakr, they slipped out of the city at night. Knowing the Quraysh would search the routes to Madinah, they travelled south instead, taking shelter in the Cave of Thawr near the peak of Jabal Thawr.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Quranic Reference</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The event is referenced in Surah At-Tawbah (9:40): <em>"...when they were in the cave and he said to his companion, 'Do not grieve; indeed Allah is with us.' And Allah sent down his tranquility upon him..."</em>
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Climbing Recommendations</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Start early:</strong> Begin the climb around 4:00 AM or 5:00 PM.</li>
                        <li><strong>Pack light:</strong> Keep your backpack light. Carry water, hydration salts, and a flashlight if climbing near dusk.</li>
                        <li><strong>Taxi drop-off:</strong> Arrange a taxi to drop you at the parking area at the base of the mountain to save energy.</li>
                    </ul>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Makkah Ziyarat & Mountain Cabs</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Hire a private Sedan or a GMC Yukon for your family ziyarat tour in Makkah. Enjoy air-conditioned comfort and professional local service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20Jabal%20Thawr" target="_blank" rel="noopener noreferrer"
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
