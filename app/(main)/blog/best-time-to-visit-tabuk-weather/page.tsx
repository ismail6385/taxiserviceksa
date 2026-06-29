import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Time to Visit Tabuk 2026: Month-by-Month Weather Guide',
    description: 'Discover the best time to visit Tabuk, Saudi Arabia. Month-by-month weather breakdown, temperatures, snowfall season, and beach timing for 2026.',
    keywords: ['best time to visit Tabuk', 'Tabuk weather by month', 'Tabuk temperature 2026', 'snow in Tabuk Jabal Al Lawz', 'Tabuk beach season'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/best-time-to-visit-tabuk-weather/' },
    openGraph: { title: 'Best Time to Visit Tabuk 2026: Month-by-Month Weather Guide', description: 'Plan your Tabuk trip with our comprehensive month-by-month weather and activity guide.', type: 'article', url: 'https://taxiserviceksa.com/blog/best-time-to-visit-tabuk-weather/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Does it snow in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Tabuk is one of the very few places in Saudi Arabia that receives snowfall. Jabal Al-Lawz (2,580m elevation) and surrounding highlands typically see snow between December and February. In rare heavy snowfall years, even parts of Tabuk city receive a light dusting.' } },
        { '@type': 'Question', name: 'How many days should I spend in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'A minimum of 3-4 days is recommended. Spend Day 1 exploring Tabuk city and castle, Day 2 at Wadi Al-Disah, Day 3 visiting Sharma/Haql beaches, and Day 4 for Jabal Al-Lawz or a NEOM border day trip. Adventure lovers can easily fill 7 days.' } },
    ],
};

export default function TabukWeatherPage() {
    const months = [
        { month: 'January', high: '16°C', low: '4°C', rec: '❄️ Peak snow season on Jabal Al-Lawz. Cold nights, clear days.' },
        { month: 'February', high: '18°C', low: '5°C', rec: '❄️ Last snow chance. Great hiking weather in canyons.' },
        { month: 'March', high: '22°C', low: '9°C', rec: '🌿 Spring wildflowers in Wadi Al-Disah. Perfect camping.' },
        { month: 'April', high: '27°C', low: '13°C', rec: '🏖️ Beach season begins. Warm days, cool evenings.' },
        { month: 'May', high: '33°C', low: '18°C', rec: '☀️ Hot days. Beach and early-morning desert trips only.' },
        { month: 'June - August', high: '38-40°C', low: '22°C', rec: '🔥 Extreme heat. Budget hotel deals available.' },
        { month: 'September', high: '35°C', low: '20°C', rec: '🍂 Heat easing. Good for Red Sea diving.' },
        { month: 'October', high: '29°C', low: '15°C', rec: '🟢 Tourism season starts. Pleasant for all activities.' },
        { month: 'November', high: '22°C', low: '9°C', rec: '⛺ Best camping and hiking month. Cool, dry air.' },
        { month: 'December', high: '17°C', low: '5°C', rec: '❄️ Snow watch begins. Cozy desert campfire nights.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6"><MapPin className="w-4 h-4" /><Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Tabuk Weather</span></div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">☀️ Weather Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Best Time to Visit Tabuk:<br /><span className="text-cyan-300">Month-by-Month Weather Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Plan your trip around snow season, beach weather, or perfect hiking temperatures.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Calendar className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Tabuk Weather Table</h2></div>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead><tr className="bg-sky-800 text-white"><th className="p-3 text-left rounded-tl-xl">Month</th><th className="p-3 text-left">Avg High</th><th className="p-3 text-left">Avg Low</th><th className="p-3 text-left rounded-tr-xl">Recommendation</th></tr></thead>
                            <tbody>{months.map((r, i) => (<tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}><td className="p-3 font-bold text-gray-800">{r.month}</td><td className="p-3 text-cyan-700 font-bold">{r.high}</td><td className="p-3 text-gray-600">{r.low}</td><td className="p-3 text-gray-500 text-xs">{r.rec}</td></tr>))}</tbody>
                        </table>
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Best Seasons Summary</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Winter (Dec–Feb):</strong> Best for snow on Jabal Al-Lawz, cozy camping, and city sightseeing. Pack warm layers.</li>
                        <li><strong>Spring (Mar–Apr):</strong> Perfect canyon hiking weather. Wadi Al-Disah blooms with wildflowers. Pleasant beach days.</li>
                        <li><strong>Summer (May–Sep):</strong> Extreme desert heat. Only suitable for Red Sea beach trips (early morning) or budget hotel stays.</li>
                        <li><strong>Autumn (Oct–Nov):</strong> Prime tourism season. Ideal temperatures for every activity from diving to desert camping.</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Tabuk Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Skip long bus journeys. Private taxis from Madinah, Jeddah, and AlUla to Tabuk available year-round.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20to%20Tabuk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/complete-tabuk-travel-guide/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Full Guide <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
