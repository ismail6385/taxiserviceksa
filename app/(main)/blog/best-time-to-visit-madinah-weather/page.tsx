import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Eye, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Time to Visit Madinah | Weather by Month 2026 Guide',
    description: 'Find the best time to visit Madinah. Monthly weather breakdown, summer temperature survival, winter benefits, and spiritual season tips.',
    keywords: [
        'best time to visit Madinah 2026',
        'Madinah weather by month',
        'is Madinah hot in summer',
        'winter season in Madinah temperature',
        'best month for ziyarat Madinah',
        'performing prayers in Nabawi weather tips',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/blog/best-time-to-visit-madinah-weather/',
    },
    openGraph: {
        title: 'Best Time to Visit Madinah | Weather by Month 2026 Guide',
        description: 'Read the monthly weather breakdown of Madinah. Find out when temperatures are pleasant for visiting and performing prayers comfortably.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/best-time-to-visit-madinah-weather/',
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'When is the weather most pleasant in Madinah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The weather is most pleasant from November to March (winter months) when daytime temperatures range between 20°C to 28°C, and nights are cool and refreshing.',
            },
        },
        {
            '@type': 'Question',
            name: 'How hot does it get in Madinah during the summer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'During the summer months of June, July, and August, daytime temperatures in Madinah can exceed 45°C (113°F). High heat makes outdoor ziyarat and walking long distances difficult during midday hours.',
            },
        },
        {
            '@type': 'Question',
            name: 'What should I pack for winter in Madinah?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For winter visits, we recommend packing light jackets, sweaters, and shawls, as early morning and late evening prayers at Masjid an-Nabawi can be quite breezy and cold.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Time to Visit Madinah: Weather by Month & Seasons',
    description: 'A comprehensive monthly breakdown of Madinah\'s climate and tips for planning your trip.',
    datePublished: '2026-05-03T00:00:00+03:00',
    dateModified: '2026-06-29T00:00:00+03:00',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: {
        '@type': 'Organization',
        name: 'Taxi Service KSA',
        logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://taxiserviceksa.com/blog/best-time-to-visit-madinah-weather/' },
};

export default function MadinahWeatherPage() {
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
                        <span>Best Time to Visit Madinah</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🌤️ Climate Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 5 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
                        Best Time to Visit Madinah:<br />
                        <span className="text-emerald-300">Weather & Season Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Plan your trip with our month-by-month guide. Understand winter benefits, summer heat precautions, and optimal timing for prayers.
                    </p>
                </div>
            </section>

            {/* Info Callout */}
            <div className="bg-emerald-50 border-b border-emerald-100">
                <div className="max-w-4xl mx-auto px-4 py-6 flex items-start gap-4 text-emerald-950 text-sm">
                    <Info className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-black text-emerald-900 text-base mb-1">Seasonal Notice</h4>
                        <p className="leading-relaxed">
                            Winter months see a massive influx of international pilgrims due to the favorable weather. Book your hotel rooms and taxi services well in advance to avoid high peak prices.
                        </p>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-3xl font-black text-gray-900">Seasons in Madinah</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Madinah has a hot desert climate. Winters are mild and pleasant, while summers are extremely hot with minimal rain. Let\'s explore the three distinct periods to help you schedule your visit:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>November to March (Winter — Highly Recommended):</strong> Temperatures range between 15°C to 28°C. Best time for walking, historical Ziyarat, and outdoor prayers.</li>
                        <li><strong>April, May, September, October (Shoulder Seasons):</strong> Temperatures are moderate, ranging between 28°C to 38°C. Ideal if you want to avoid massive winter crowds.</li>
                        <li><strong>June, July, August (Summer):</strong> Temperatures regularly exceed 42°C. Keep your visits restricted to early mornings and late nights.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Monthly Temperature Table</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-50 text-gray-800 font-bold">
                                    <th className="p-3 border border-gray-200">Months</th>
                                    <th className="p-3 border border-gray-200">Avg High (°C)</th>
                                    <th className="p-3 border border-gray-200">Avg Low (°C)</th>
                                    <th className="p-3 border border-gray-200">Recommendation</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm">
                                <tr>
                                    <td className="p-3 border border-gray-200">Dec - Feb</td>
                                    <td className="p-3 border border-gray-200">23°C - 25°C</td>
                                    <td className="p-3 border border-gray-200">12°C - 14°C</td>
                                    <td className="p-3 border border-gray-200 text-emerald-600 font-bold">Excellent</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-gray-200">Mar - May</td>
                                    <td className="p-3 border border-gray-200">29°C - 37°C</td>
                                    <td className="p-3 border border-gray-200">17°C - 23°C</td>
                                    <td className="p-3 border border-gray-200">Good</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-gray-200">Jun - Aug</td>
                                    <td className="p-3 border border-gray-200">42°C - 45°C</td>
                                    <td className="p-3 border border-gray-200">28°C - 30°C</td>
                                    <td className="p-3 border border-gray-200 text-red-600 font-bold">Very Hot</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border border-gray-200">Sep - Nov</td>
                                    <td className="p-3 border border-gray-200">32°C - 40°C</td>
                                    <td className="p-3 border border-gray-200">19°C - 25°C</td>
                                    <td className="p-3 border border-gray-200">Moderate</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Madinah Taxi Service</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
                        Need reliable airport pick-up, intercity hotel-to-hotel rides, or a customized Ziyarat driving tour? Book our private cars and vans.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20taxi%20transfer%20in%20Madinah" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            <Phone className="w-5 h-5" /> Book via WhatsApp
                        </a>
                        <Link href="/routes/makkah-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">
                            Rates <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
