import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Time to Visit AlUla 2026: Month-by-Month Weather Guide',
    description: 'Discover the best time to visit AlUla, Saudi Arabia. Month-by-month weather breakdown, temperatures, and guide to the Winter at Tantora festival season.',
    keywords: ['best time to visit AlUla', 'AlUla weather by month', 'AlUla temperature 2026', 'winter at tantora season', 'AlUla summer travel'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/best-time-to-visit-alula-weather/' },
    openGraph: { title: 'Best Time to Visit AlUla 2026: Month-by-Month Weather Guide', description: 'Plan your AlUla trip with our comprehensive month-by-month weather and event guide.', type: 'article', url: 'https://taxiserviceksa.com/blog/best-time-to-visit-alula-weather/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'When is the peak tourist season in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'The peak season in AlUla is during the winter months from October to April. Temperatures range from a pleasant 15°C to 28°C, making it perfect for outdoor sightseeing, desert safaris, and hiking. This is also when AlUla hosts its famous "Winter at Tantora" festival.' } },
        { '@type': 'Question', name: 'Can you visit AlUla during summer?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but be prepared for extreme heat. Summer months (May to September) regularly see temperatures exceeding 40°C (104°F). Outdoor site visits are restricted to early mornings and late evenings. On the plus side, resorts offer significant off-season discounts.' } },
    ],
};

export default function AlUlaWeatherPage() {
    const seasons = [
        { name: '🍂 Autumn (Oct - Nov)', temp: '20°C - 30°C', activities: 'Perfect for hiking, outdoor dining, and visiting Hegra before the winter rush.' },
        { name: '❄️ Winter (Dec - Feb)', temp: '10°C - 22°C (Chilly nights)', activities: 'Peak festival season. Winter at Tantora, hot air balloon flights, and concerts at Maraya.' },
        { name: '🌱 Spring (Mar - Apr)', temp: '18°C - 28°C', activities: 'Oasis trails are lush and green; great daytime weather for desert exploration.' },
        { name: '☀️ Summer (May - Sep)', temp: '30°C - 43°C (Very hot)', activities: 'Indoor museum visits, luxury resort stays, and discounted off-season packages.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>AlUla Weather</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">☀️ Weather Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Best Time to Visit AlUla:<br /><span className="text-amber-300">Month-by-Month Weather Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Plan your desert getaway. Find the best months for pleasant temperatures, vibrant festivals, and cheap resort rates.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Calendar className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">AlUla Seasons at a Glance</h2></div>
                    <div className="grid gap-4">
                        {seasons.map((s, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-amber-300 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-amber-800 text-lg">{s.name}</h3>
                                    <span className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{s.temp}</span>
                                </div>
                                <p className="text-gray-600 text-sm">{s.activities}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Month-by-Month Weather Table</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-amber-800 text-white">
                                    <th className="p-3 text-left rounded-tl-xl">Month</th>
                                    <th className="p-3 text-left">Average High</th>
                                    <th className="p-3 text-left">Average Low</th>
                                    <th className="p-3 text-left rounded-tr-xl">Travel Recommendation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { month: 'January', high: '20°C', low: '8°C', rec: 'Peak winter; very pleasant days, cold nights ❄️' },
                                    { month: 'February', high: '22°C', low: '9°C', rec: 'Great sightseeing weather; peak events 🎭' },
                                    { month: 'March', high: '26°C', low: '12°C', rec: 'Comfortable days, lush oasis green 🌿' },
                                    { month: 'April', high: '31°C', low: '16°C', rec: 'Warm afternoons, beautiful starry nights ✨' },
                                    { month: 'May', high: '37°C', low: '21°C', rec: 'Summer begins; stay hydrated ☀️' },
                                    { month: 'June - August', high: '42°C+', low: '25°C', rec: 'Extreme heat; budget resort deals available 💸' },
                                    { month: 'September', high: '38°C', low: '22°C', rec: 'Warm transitional month; quiet sites 🍂' },
                                    { month: 'October', high: '32°C', low: '17°C', rec: 'Pleasant weather returns; start of tourism season 🟢' },
                                    { month: 'November', high: '26°C', low: '12°C', rec: 'Excellent hiking and outdoor desert dining 🏕️' },
                                    { month: 'December', high: '21°C', low: '9°C', rec: 'Festivals, concerts, and crisp desert winter air ❄️' },
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="p-3 font-bold text-gray-800">{row.month}</td>
                                        <td className="p-3 text-amber-700 font-bold">{row.high}</td>
                                        <td className="p-3 text-gray-600">{row.low}</td>
                                        <td className="p-3 text-gray-500 text-xs">{row.rec}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi to AlUla</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Skip the hassle of driving in the desert. We offer secure, private transfers from Madinah, Jeddah, and Riyadh directly to AlUla.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20transfer%20to%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/madinah-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Madinah → AlUla <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
