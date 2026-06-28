import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Complete Madinah Ziyarat Guide 2026: All Sacred Sites, Museums & Landmarks',
    description: 'The most comprehensive Madinah Ziyarat guide. All sacred sites, Islamic landmarks, museums, and hidden gems with visiting tips and a suggested tour order.',
    keywords: ['Madinah Ziyarat guide 2026', 'Islamic landmarks Madinah', 'best Ziyarat places Madinah', 'Madinah museums guide', 'Madinah religious sites list'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/madinah-ziyarat-places-museums-landmarks/' },
    openGraph: { title: 'Complete Madinah Ziyarat Guide 2026', description: 'All sacred sites, museums, and landmarks in Madinah with visiting order and expert tips.', type: 'article', url: 'https://taxiserviceksa.com/blog/madinah-ziyarat-places-museums-landmarks/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What are the most important Ziyarat places in Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'The key Ziyarat sites in Madinah are: 1) Masjid an-Nabawi and Rawdah. 2) Jannat al-Baqi. 3) Masjid Quba. 4) Mount Uhud and martyrs\' graves. 5) Masjid al-Qiblatain. 6) The Seven Mosques of Al-Khandaq. 7) Masjid al-Ghamama. 8) The Madinah Museum. 9) Al-Hijr area (ancient city). 10) Masjid Bilal (R.A) site.' } },
        { '@type': 'Question', name: 'How long does a full Madinah Ziyarat tour take?', acceptedAnswer: { '@type': 'Answer', text: 'A full Madinah Ziyarat tour covering all major sites typically takes 6-8 hours by private taxi. Most organized Ziyarat tours are half-day (3-4 hours) covering the main sites: Quba, Qiblatain, Seven Mosques, Uhud, and Baqi. Extended tours also include the date markets and Madinah Museum.' } },
    ],
};

export default function MadinahZiyaratGuidePage() {
    const sites = [
        { cat: '🕌 Mosques', places: ['Masjid an-Nabawi — Rawdah visit required', 'Masjid Quba — Umrah reward', 'Masjid al-Qiblatain — Two Qiblas site', 'Seven Mosques of Al-Khandaq', 'Masjid al-Ghamama — where Eid prayers were held'] },
        { cat: '⛰ Historical Sites', places: ['Mount Uhud & Martyrs Graves', 'Al-Khandaq (Trench battlefield)', 'Masjid al-Fath on hilltop', 'Bir Ali (Meeqat Mosque) — 12km south'] },
        { cat: '🌿 Sacred Cemeteries', places: ['Jannat al-Baqi — main Madinah cemetery', 'Shuhada Uhud Cemetery', 'Masjid al-Ijabah area graves'] },
        { cat: '🏛 Museums & Culture', places: ['Al-Madinah Museum — Islamic history exhibits', 'Swords & Arms exhibition near Uhud', 'Madinah Regional Museum in old city'] },
        { cat: '🌴 Nature & Dates', places: ['Wadi al-Aqiq — ancient palm valley', 'Date farms near Quba', 'Al-Anbariyah date market'] },
    ];
    const tourOrder = [
        { stop: '1', name: 'Masjid Quba', time: '45 min' },
        { stop: '2', name: 'Masjid al-Qiblatain', time: '30 min' },
        { stop: '3', name: 'Seven Mosques', time: '45 min' },
        { stop: '4', name: 'Mount Uhud', time: '90 min' },
        { stop: '5', name: 'Jannat al-Baqi', time: '30 min' },
        { stop: '6', name: 'Date Markets', time: '60 min' },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Madinah Ziyarat Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">📍 Complete Ziyarat</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Madinah Ziyarat Guide 2026:<br /><span className="text-emerald-300">All Sacred Sites, Museums & Landmarks</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The most complete Ziyarat guide to Madinah — covering every sacred site, historical landmark, museum, and hidden gem.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">All Madinah Ziyarat Sites by Category</h2></div>
                    <div className="grid gap-6">
                        {sites.map((s) => (
                            <div key={s.cat} className="border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 transition-colors">
                                <h3 className="font-black text-gray-900 text-lg mb-3">{s.cat}</h3>
                                <ul className="space-y-1.5">
                                    {s.places.map((p, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <span className="text-emerald-500 mt-0.5">▸</span> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Recommended Ziyarat Tour Order</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {tourOrder.map((t) => (
                            <div key={t.stop} className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
                                <span className="text-2xl font-black text-emerald-300">{t.stop}</span>
                                <p className="font-black text-emerald-900 text-sm mt-1">{t.name}</p>
                                <p className="text-gray-500 text-xs mt-1">⏱ {t.time}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Full Madinah Ziyarat Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Cover all Ziyarat sites in a single comfortable private tour. We know every stop on the route.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20full%20Madinah%20Ziyarat%20taxi%20tour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/madinah-travel-itinerary-planning/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">View Itinerary <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
