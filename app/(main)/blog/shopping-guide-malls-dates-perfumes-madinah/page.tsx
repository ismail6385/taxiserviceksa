import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Shopping Guide to Madinah 2026: Malls, Dates, Perfumes & Gifts',
    description: 'The complete Madinah shopping guide. Best malls, date markets, perfume shops, and souvenir spots for pilgrims and tourists in 2026.',
    keywords: ['best shopping in Madinah', 'Madinah date market guide', 'perfume shops Madinah', 'best malls Madinah', 'Madinah shopping tips pilgrims'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/shopping-guide-malls-dates-perfumes-madinah/' },
    openGraph: { title: 'Shopping Guide to Madinah 2026: Malls, Dates & Perfumes', description: 'Everything you can shop in Madinah — from premium Ajwa dates to oud perfumes.', type: 'article', url: 'https://taxiserviceksa.com/blog/shopping-guide-malls-dates-perfumes-madinah/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What are the best things to buy in Madinah as souvenirs?', acceptedAnswer: { '@type': 'Answer', text: 'Top souvenirs from Madinah: Ajwa dates (authentic, vacuum-packed), Oud and rose attar perfumes, prayer rugs and turbans, tasbih (prayer beads), Zamzam water (packaged), handmade Islamic calligraphy items, and Saudi gold jewelry.' } },
        { '@type': 'Question', name: 'Where is the best date market in Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'The most famous date markets are in the Al-Anbariyah and Central Zone areas near Masjid an-Nabawi. For bulk dates and wholesale pricing, visit the Al-Seeb Date Market which has over 100 vendors selling 50+ date varieties.' } },
    ],
};

export default function MadinahShoppingPage() {
    const sections = [
        { icon: '🏬', title: 'Best Shopping Malls', items: ['Al-Noor Mall — large retail mall with international brands', 'Taibah Mall — family shopping & food court', 'Al-Rashid Mall — fashion & electronics'] },
        { icon: '🌴', title: 'Best Date Markets', items: ['Al-Anbariyah Market — 200+ date shops near the mosque', 'Al-Seeb Date Market — wholesale & bulk dates', 'Dates inside supermarkets like Panda & Carrefour', 'Premium packed Ajwa dates from Tamr Al-Madinah stores'] },
        { icon: '🧴', title: 'Best Perfume Shops', items: ['Abdul Samad Al-Qurashi — premium Oud & Rose', 'Arabian Oud — popular chain, many locations', 'Al-Haramain Perfumes — affordable high-quality attars', 'Small vendors inside bazaars sell hand-poured attars'] },
        { icon: '🎁', title: 'Souvenir Shopping', items: ['Islamic bookshops near Masjid an-Nabawi gates', 'Prayer beads (Tasbih) — plastic & gemstone varieties', 'Zamzam water containers from official MAWAH stores', 'Saudi silver jewelry and traditional keffiyehs'] },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Madinah Shopping Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🛍 Shopping Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Madinah Shopping Guide 2026<br /><span className="text-emerald-300">Dates, Perfumes, Malls & Gifts</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The complete guide to shopping in Madinah — from premium Ajwa dates to luxury oud perfumes and Islamic souvenirs.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><ShoppingBag className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Where to Shop in Madinah</h2></div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {sections.map((s) => (
                            <div key={s.title} className="border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 transition-colors">
                                <h3 className="font-black text-gray-900 text-base mb-3">{s.icon} {s.title}</h3>
                                <ul className="space-y-1.5">
                                    {s.items.map((item, i) => (
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
                    <h2 className="text-3xl font-black text-gray-900">Pilgrim Shopping Tips</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Buy dates in the first 2 days — you'll have time to compare quality and prices.</li>
                        <li>Vacuum-sealed Ajwa dates last 2+ years — ideal for bringing home as gifts.</li>
                        <li>Haggling is acceptable in bazaars and smaller shops, but not in chain stores.</li>
                        <li>Most shops accept credit cards; bazaars prefer cash (Saudi Riyals).</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Need a Taxi to Date Markets?</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">We'll take you to all date markets and shopping areas with ample room for your shopping bags.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20for%20shopping%20in%20Madinah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/madinah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">View Routes <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
