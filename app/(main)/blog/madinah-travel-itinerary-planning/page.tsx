import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Madinah Travel Itinerary 2026: 3 Day, 5 Day & 7 Day Plans',
    description: 'Ready-to-use Madinah travel itineraries for 3, 5, and 7-day trips. Covers Masjid an-Nabawi, Quba, Uhud, date markets, Ziyarat spots, and more.',
    keywords: ['Madinah travel itinerary 3 days', '5 day Madinah itinerary', '7 day Madinah plan', 'Madinah trip planner 2026', 'best itinerary for Madinah Umrah'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/madinah-travel-itinerary-planning/' },
    openGraph: { title: 'Madinah Travel Itinerary 2026: 3, 5 & 7-Day Plans', description: 'Plan your perfect Madinah trip with our detailed day-by-day itineraries.', type: 'article', url: 'https://taxiserviceksa.com/blog/madinah-travel-itinerary-planning/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How many days are enough for Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'A minimum of 3 days is ideal for Madinah if you plan to pray at Masjid an-Nabawi, complete Ziyarat of key sites (Uhud, Quba, Jannat al-Baqi), and visit the date markets. 5-7 days allows for a more relaxed pace and deeper spiritual experience.' } },
        { '@type': 'Question', name: 'What is the best order for Madinah Ziyarat?', acceptedAnswer: { '@type': 'Answer', text: 'Recommended order: Day 1 - Masjid an-Nabawi, Rawdah, Jannat al-Baqi. Day 2 - Masjid Quba, Masjid Qiblatain, Seven Mosques. Day 3 - Mount Uhud, Al-Khandaq battlefield, date markets.' } },
    ],
};

export default function MadinahItineraryPage() {
    const days3 = [
        { day: 'Day 1', title: 'Masjid an-Nabawi & Rawdah', items: ['Fajr at Masjid an-Nabawi', 'Rawdah visit (book via Nusuk app)', 'Visit Green Dome area', 'Jannat al-Baqi cemetery', 'Evening: date markets & shopping'] },
        { day: 'Day 2', title: 'Quba & Mosques Circuit', items: ['Masjid Quba — 2 Rakats', 'Masjid Qiblatain', 'Seven Mosques / Al-Ahzab area', 'Al-Madinah Museum', 'Return for Isha at Masjid an-Nabawi'] },
        { day: 'Day 3', title: 'Mount Uhud & Departure', items: ['Mount Uhud — visit martyrs\' graves', 'See the battlefield of Uhud', 'Last prayers at Masjid an-Nabawi', 'Final date shopping', 'Airport transfer'] },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Madinah Itinerary</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">📅 Itinerary Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Madinah Travel Itinerary 2026<br /><span className="text-emerald-300">3-Day, 5-Day & 7-Day Plans</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Day-by-day itineraries for short and extended Madinah trips — covering all sacred sites and experiences.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Calendar className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">3-Day Madinah Itinerary</h2></div>
                    <div className="grid gap-6">
                        {days3.map((d) => (
                            <div key={d.day} className="border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1.5 rounded-full">{d.day}</span>
                                    <h3 className="font-black text-gray-900 text-lg">{d.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {d.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <span className="text-emerald-500 mt-0.5">▸</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">5-Day & 7-Day Extensions</h2>
                    <p className="text-gray-700 leading-relaxed">For a 5-day trip, add Day 4 (Al-Hijr / Mada'in Salih day trip from Madinah) and Day 5 (relaxed prayers + date market shopping). For a full 7-day itinerary, include a day trip to Al-Ula and one full day dedicated solely to Masjid an-Nabawi worship and reflection.</p>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Hire a Taxi for Your Full Itinerary</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">A private taxi makes your day-by-day itinerary stress-free. Book once, visit everywhere on your schedule.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20for%20my%20Madinah%20itinerary" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">View Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
