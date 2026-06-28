import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Hotels in Madinah 2026: Budget, Luxury & Family Near Masjid Nabawi',
    description: 'Find the best budget, luxury, and family hotels in Madinah near Masjid an-Nabawi. Includes room prices, key features, and expert booking tips.',
    keywords: ['best hotels in Madinah 2026', 'budget hotels Madinah', 'luxury hotels near Masjid Nabawi', 'family hotels Madinah', 'hotels near Masjid an-Nabawi'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/madinah-hotels-budget-luxury-family/' },
    openGraph: { title: 'Best Hotels in Madinah 2026: Budget, Luxury & Family Near Masjid Nabawi', description: 'The complete hotel guide to Madinah covering budget, luxury and family-friendly options.', type: 'article', url: 'https://taxiserviceksa.com/blog/madinah-hotels-budget-luxury-family/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Which is the best hotel nearest to Masjid an-Nabawi?', acceptedAnswer: { '@type': 'Answer', text: 'The Anantara Al Madinah Madinah Hotel, Movenpick Hotel & Residences, and Pullman Zamzam Madinah are considered the closest 5-star options, some with direct walkways to the mosque. For budget options, Al-Eiman Royal Hotel offers excellent value within 200m of the mosque gates.' } },
        { '@type': 'Question', name: 'When should I book hotels in Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'For peak seasons (Ramadan, Hajj, school holidays), book 3-6 months in advance. For off-peak travel (Muharram, Safar months), 2-4 weeks advance booking is usually sufficient.' } },
    ],
};

export default function MadinahHotelsPage() {
    const luxuryHotels = [
        { name: 'Anantara Al Madinah', stars: 5, from: 'SAR 750/night', dist: '150m from mosque', note: 'Premium views of the minarets' },
        { name: 'Movenpick Hotel & Res.', stars: 5, from: 'SAR 650/night', dist: '200m from mosque', note: 'Excellent buffet, family suites' },
        { name: 'Pullman Zamzam Madinah', stars: 5, from: 'SAR 700/night', dist: '300m from mosque', note: 'Rooftop mosque views' },
        { name: 'Marriott Madinah', stars: 5, from: 'SAR 620/night', dist: '500m from mosque', note: 'Great breakfast, large rooms' },
    ];
    const budgetHotels = [
        { name: 'Al-Eiman Royal Hotel', stars: 3, from: 'SAR 150/night', dist: '200m from mosque', note: 'Top value pick near Haram' },
        { name: 'Dar Al-Iman Grand', stars: 3, from: 'SAR 120/night', dist: '400m from mosque', note: 'Clean rooms, easy walking' },
        { name: 'Bab Al Madinah Hotel', stars: 2, from: 'SAR 90/night', dist: '600m from mosque', note: 'Very affordable, basic rooms' },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Madinah Hotels Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🏨 Hotel Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Best Hotels in Madinah 2026<br /><span className="text-emerald-300">Budget, Luxury & Family Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Where to stay in Madinah — from affordable guesthouses to luxury 5-star towers steps from Masjid an-Nabawi.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Star className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Top Luxury Hotels Near Masjid an-Nabawi</h2></div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {luxuryHotels.map((h) => (
                            <div key={h.name} className="border border-emerald-200 bg-emerald-50 rounded-2xl p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-black text-emerald-900 text-sm">{h.name}</h3>
                                    <span className="text-yellow-500 text-xs">{'⭐'.repeat(h.stars)}</span>
                                </div>
                                <p className="text-emerald-700 font-bold text-sm mb-1">{h.from}</p>
                                <p className="text-gray-600 text-xs">{h.dist}</p>
                                <p className="text-gray-500 text-xs mt-1 italic">{h.note}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Budget Hotels in Madinah</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {budgetHotels.map((h) => (
                            <div key={h.name} className="border border-gray-200 rounded-2xl p-5">
                                <h3 className="font-black text-gray-800 text-sm mb-2">{h.name}</h3>
                                <p className="text-emerald-700 font-bold text-sm mb-1">{h.from}</p>
                                <p className="text-gray-500 text-xs">{h.dist}</p>
                                <p className="text-gray-400 text-xs mt-1 italic">{h.note}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Tips for Booking Madinah Hotels</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>The closer to the mosque, the faster it sells out — book 3 months early for Ramadan.</li>
                        <li>Check if the hotel includes Rawdah access corridors (some 5-stars have direct covered walkways).</li>
                        <li>Family suites at Movenpick and Marriott can accommodate 5-6 people, ideal for families.</li>
                        <li>Use Booking.com with free cancellation options for flexibility.</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Need a Transfer to Your Hotel?</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Arrive at your hotel stress-free. We offer direct transfers from Madinah Airport, Makkah, Jeddah, and all cities.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20an%20airport%20transfer%20to%20my%20hotel%20in%20Madinah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book Transfer</a>
                        <Link href="/routes/madinah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">View Routes <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
