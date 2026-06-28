import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'The Zamzam Well History & Miraculous Facts | 2026 Guide',
    description: 'Explore the miraculous history, source, and scientific facts of the Zamzam Well in Makkah. Learn how the spring began and how it is managed today.',
    keywords: [
        'Zamzam well history Makkah',
        'miraculous facts about Zamzam water',
        'source of Zamzam water spring',
        'where is Zamzam well located',
        'Zamzam water mineral content',
        'Hajar and Ismail Zamzam story',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/zamzam-well-history-facts/',
    },
    openGraph: {
        title: 'The Zamzam Well History & Miraculous Facts | 2026 Guide',
        description: 'Read the complete history and incredible facts of the holy Zamzam water. Understand its origin and current distribution system.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/zamzam-well-history-facts/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How did the Zamzam Well begin?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Zamzam Well began as a miraculous spring of water that gushed out under the feet of infant Prophet Ismail. His mother Hajar was searching for water between the hills of Safa and Marwah to save her crying child. Angel Jibril struck the ground, causing the water to flow.',
            },
        },
        {
            '@type': 'Question',
            name: 'Where is the Zamzam Well located today?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Zamzam Well is located inside Masjid al-Haram, approximately 21 meters east of the Holy Kaaba. Although the physical well-house is no longer visible on the Mataf floor to allow more room for pilgrims, it continues to pump water through modern underground pipelines.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does the Zamzam Well ever dry up?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Despite supplying millions of gallons of water daily to pilgrims in Makkah and Madinah for thousands of years, the Zamzam Well has never run dry. The spring replenishes itself continuously through rainfall and natural aquifers.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Zamzam Well: Miraculous History & Scientific Facts',
    description: 'A deep dive into the history, religious significance, mineral composition, and high-tech distribution system of Zamzam water in Saudi Arabia.',
    datePublished: '2026-02-01T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/zamzam-well-history-facts/' },
};

export default function ZamzamWellPage() {
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
                        <span>Zamzam Well Facts</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">💧 Blessed Water</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 6 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        The Zamzam Well:<br />
                        <span className="text-emerald-300">History, Science & Miracles</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Discover the story of Hajar and Ismail, the mineral composition of this holy water, and the modern systems used to preserve the well.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Scientific Content</h4>
                        <p className="leading-relaxed">
                            Zamzam water has higher levels of calcium, magnesium, and fluorides compared to standard tap water, providing natural energy and antibacterial properties. It has no biological growth or odors.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Origins in the Valley of Makkah</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The history of Zamzam is tied to the origins of Makkah. Prophet Ibrahim left his wife Hajar and infant son Ismail in a barren valley with minimal supplies. When their water ran out, Hajar ran back and forth between Safa and Marwah hills. Her faith was rewarded when the Angel Jibril struck the ground, releasing a spring. Hajar fenced the water with sand, calling out <em>"Zam Zam"</em> (meaning stop or bind).
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The Modern Distribution System</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The well itself is about 30.5 meters deep. Modern pumps draw water, passing it through multi-stage sand filters, carbon filters, and UV sterilization at the Kudai Water Plant. It is then transported via thermal trucks and pipes to Masjid al-Haram and Masjid Nabawi in Madinah.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Scientific Observations</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Hydrological studies confirm that the well draws water from alluvial deposits and fractures in the bedrock. The constant recharge and high mineral purity of Zamzam water have intrigued scientists for decades, highlighting its unique qualities.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Taxi Services in Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Need comfortable transport around Makkah or to Jeddah Airport? Book our private cars with extra space for luggage and official Zamzam bottles.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20in%20Makkah" target="_blank" rel="noopener noreferrer"
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
