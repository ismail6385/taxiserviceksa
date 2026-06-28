import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Top Places to Visit & Things to Do in Madinah 2026',
    description: 'Discover the top attractions, activities, and things to do in Madinah. From Masjid an-Nabawi to Mount Uhud and Quba Mosque — your complete city guide.',
    keywords: ['top places to visit in Madinah', 'things to do in Madinah 2026', 'Madinah city guide', 'Madinah attractions for tourists', 'best sightseeing in Madinah'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/top-places-visit-things-do-madinah/' },
    openGraph: { title: 'Top Places to Visit & Things to Do in Madinah 2026', description: 'The complete city guide to Madinah attractions, activities, and sacred landmarks.', type: 'article', url: 'https://taxiserviceksa.com/blog/top-places-visit-things-do-madinah/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What are the top 5 things to do in Madinah?', acceptedAnswer: { '@type': 'Answer', text: '1) Pray at Masjid an-Nabawi and visit the Rawdah. 2) Climb Mount Uhud and visit the martyrs\' cemetery. 3) Perform two Rakats at Masjid Quba. 4) Visit Jannat al-Baqi cemetery. 5) Explore the Madinah Museum and date markets.' } },
        { '@type': 'Question', name: 'Can tourists visit all historical sites in Madinah freely?', acceptedAnswer: { '@type': 'Answer', text: 'Most historical and religious sites in Madinah are open to Muslim visitors. The inner prayer halls of Masjid an-Nabawi are restricted to Muslims only. Tourist sites like the Madinah Museum and date markets are open to all visitors.' } },
    ],
};

export default function TopPlacesMadinahPage() {
    const places = [
        { num: '01', name: 'Masjid an-Nabawi', desc: 'The Prophet\'s Mosque — the spiritual heart of Madinah. Pray at the Rawdah, visit the green dome, and experience unforgettable congregational prayers.', link: '/blog/masjid-an-nabawi-complete-guide-history/' },
        { num: '02', name: 'Masjid Quba', desc: 'The first mosque in Islamic history. Performing two Rakats here earns the reward of a complete Umrah according to Hadith.', link: '/blog/quba-mosque-history-visit-guide/' },
        { num: '03', name: 'Mount Uhud', desc: 'Site of the famous Battle of Uhud. Visit the graves of the 70 martyrs including Hamza (R.A), the uncle of the Prophet ﷺ.', link: null },
        { num: '04', name: 'Jannat al-Baqi', desc: 'The sacred cemetery adjacent to Masjid an-Nabawi, housing the graves of the Prophet\'s family and companions.', link: '/blog/jannat-al-baqi-madinah-cemetery-guide/' },
        { num: '05', name: 'Masjid al-Qiblatain', desc: 'The Mosque of Two Qiblas — where the command to change the prayer direction was revealed, making it a unique site in Islamic history.', link: '/blog/qiblatain-mosque-seven-mosques-guide/' },
        { num: '06', name: 'Al-Madinah Museum', desc: 'Discover the pre-Islamic and early Islamic archaeological treasures of Madinah through comprehensive exhibits.', link: null },
        { num: '07', name: 'Date Markets & Bazaars', desc: 'Sample and shop from hundreds of Ajwa, Medjool, and Safawi date varieties in the traditional markets near the mosque.', link: '/blog/shopping-guide-malls-dates-perfumes-madinah/' },
        { num: '08', name: 'Madinah Museum', desc: 'A modern museum covering Madinah\'s historical layers from ancient civilizations to the Ottoman era.', link: null },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Top Places Madinah</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">📍 City Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 7 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Top Places & Things to Do<br /><span className="text-emerald-300">in Madinah 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Explore the best attractions, sacred landmarks, bazaars, and spiritual experiences Madinah has to offer.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Must-Visit Places in Madinah</h2></div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {places.map((p) => (
                            <div key={p.num} className="border border-gray-200 p-5 rounded-2xl hover:border-emerald-300 transition-colors">
                                <span className="text-3xl font-black text-emerald-200">{p.num}</span>
                                <h3 className="font-bold text-emerald-800 text-base mt-2 mb-2">{p.name}</h3>
                                <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
                                {p.link && <Link href={p.link} className="text-emerald-600 text-xs font-bold hover:underline flex items-center gap-1">Read Full Guide <ArrowRight className="w-3 h-3" /></Link>}
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">How to Get Around Madinah</h2>
                    <p className="text-gray-700 leading-relaxed">Most of the key Ziyarat sites are located within a 10–25 km radius of Masjid an-Nabawi. Hiring a private taxi for a half-day tour is the most efficient way to cover Quba, Qiblatain, Uhud, the Seven Mosques, and Jannat al-Baqi in a single trip.</p>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Madinah Ziyarat Taxi Tour</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Cover all top places in Madinah comfortably with our private family taxis and spacious SUVs.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20Madinah%20Ziyarat%20taxi%20tour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/makkah-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Taxi Rates <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
