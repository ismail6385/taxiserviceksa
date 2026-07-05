import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Sun, Snowflake, Info, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Summer vs Winter Travel Comparison: When to Go | Taxi Service KSA',
    description: 'Detailed comparison of traveling to AlUla in Summer vs. Winter. Compare temperatures, hotel prices, resort rates, festival schedules, and outdoor activities.',
    keywords: ['AlUla summer vs winter', 'best season to visit AlUla', 'AlUla temperature summer', 'AlUla hotel prices winter', 'Hegra tours in summer'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-summer-vs-winter-travel-comparison/' },
    openGraph: {
        title: 'AlUla Summer vs Winter Travel Comparison: When to Go',
        description: 'Decide when to visit AlUla by comparing summer and winter travel experiences.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/alula-summer-vs-winter-travel-comparison/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is AlUla too hot in the summer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Summer (June to August) temperatures in AlUla routinely exceed 40°C. Outdoor activities during midday are not recommended, but early morning and late afternoon tours of Hegra are still operational, and hotel rates drop significantly.'
            }
        },
        {
            '@type': 'Question',
            name: 'When is the peak tourist season in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The peak season is winter (November to March). Temperatures are pleasant (15°C - 25°C), and all major festivals, concerts, and outdoor dining pop-ups are active.'
            }
        }
    ],
};

export default function AlUlaSummerWinterPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Summer vs Winter</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">⚖️ Comparison</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Travel Seasons</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        AlUla Summer vs Winter <br />
                        <span className="text-amber-300">Travel Comparison: When to Visit</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Compare weather, hotel prices, tourist crowds, and activities in AlUla to choose the perfect season for your journey.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">Comparing AlUla\'s Travel Seasons</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        AlUla\'s desert climate dictates two distinct travel seasons. The vibrant, busy, cold winter months contrast heavily with the quiet, hot, and highly budget-friendly summer months.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Season Comparison Table</h2>
                    <div className="overflow-x-auto border border-gray-200 rounded-2xl">
                        <table className="min-w-full divide-y divide-gray-200 text-sm">
                            <thead className="bg-amber-50">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold text-gray-900">Feature</th>
                                    <th className="px-6 py-4 text-left font-bold text-gray-900 flex items-center gap-1.5"><Sun className="w-4 h-4 text-amber-700" /> Summer (May-Sep)</th>
                                    <th className="px-6 py-4 text-left font-bold text-gray-900"><div className="flex items-center gap-1.5"><Snowflake className="w-4 h-4 text-blue-500" /> Winter (Oct-Apr)</div></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-gray-700">
                                <tr>
                                    <td className="px-6 py-4 font-bold text-gray-900">Temperature</td>
                                    <td className="px-6 py-4">Very Hot (35°C - 45°C)</td>
                                    <td className="px-6 py-4">Cool & Pleasant (12°C - 25°C)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-gray-900">Hotel Fares</td>
                                    <td className="px-6 py-4">Low Season (Deep discounts)</td>
                                    <td className="px-6 py-4">High Season (Premium pricing)</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-gray-900">Festivals</td>
                                    <td className="px-6 py-4">Minimal events</td>
                                    <td className="px-6 py-4">Winter at Tantora, balloon events</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-gray-900">Crowds</td>
                                    <td className="px-6 py-4">Very quiet (Great for solo photography)</td>
                                    <td className="px-6 py-4">Extremely busy (Tombs fully booked)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Which Should You Choose?</h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Choose Winter if:</strong> You want pleasant weather, outdoor hiking, dining at open-air pop-up restaurants, and experiencing concerts or hot air balloon festivals.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Choose Summer if:</strong> You are traveling on a budget, want to stay in luxury resorts (like Banyan Tree or Habitas) at a fraction of their winter rates, and prefer taking photos of Hegra without crowds.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Info className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your AlUla Chauffeur</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Whether visiting in hot summer or cool winter, travel in air-conditioned VIP comfort. Pre-book a dedicated private taxi in AlUla.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20in%20AlUla.%20Please%20send%20rates." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
