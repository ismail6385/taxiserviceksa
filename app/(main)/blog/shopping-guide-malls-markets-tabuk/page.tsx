import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tabuk Shopping Guide 2026: Malls, Souqs & Date Markets',
    description: 'The complete shopping guide to Tabuk, Saudi Arabia. Discover the best malls, historic souqs, organic date shops, and local perfume outlets.',
    keywords: ['Tabuk shopping guide 2026', 'best shopping malls in Tabuk', 'Tabuk markets souq', 'Tabuk date shops', 'perfume shops Tabuk'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/shopping-guide-malls-markets-tabuk/' },
    openGraph: { title: 'Tabuk Shopping Guide 2026: Malls, Souqs & Date Markets', description: 'Explore Tabuk\'s local markets and modern shopping malls for traditional dates, carpets, perfumes, and international brands.', type: 'article', url: 'https://taxiserviceksa.com/blog/shopping-guide-malls-markets-tabuk/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the biggest modern shopping mall in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'Tabuk Park Mall is the largest and most modern shopping mall in the region. It features a wide variety of international fashion brands, hypermarkets, a massive family entertainment zone, a multi-screen cinema, and popular international food courts.' } },
        { '@type': 'Question', name: 'Where can I buy traditional souvenirs and dates in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'Souq Tawaheen (the old Bedouin market) is the best spot for traditional items like hand-woven camel hair rugs, brass coffee pots, local dates, honey, and natural spices. For premium dates, the Tabuk central dates market offers the freshest regional harvest.' } },
    ],
};

export default function TabukShoppingPage() {
    const categories = [
        { title: '🛍️ Modern Malls & Boulevard', items: ['Tabuk Park Mall — international fashion, hypermarket, dining, and cinema', 'Al Hokair Mall — popular central shopping complex with family arcade and fashion outlets', 'Tabuk Boulevard — premium open-air avenue with upscale boutiques and cafes'] },
        { title: '🏺 Historic Souqs & Bedouin Markets', items: ['Souq Tawaheen — historic market for traditional Bedouin camel saddles, carpets, and spices', 'Souq Al-Salihiyah — historic open-air market for cheap daily goods, garments, and housewares'] },
        { title: '🌴 Date & Honey Specialty Markets', items: ['Tabuk Central Dates Market — bulk and gift packs of regional Barni and Mabroom dates', 'Local Honey stands — organic wild acacia and sidr honey sourced from northern mountains'] },
        { title: '🧴 Perfume & Oud Boutiques', items: ['Arabian Oud — premium Saudi perfume outlet in Tabuk Park Mall', 'Abdul Samad Al Qurashi — famous rose attar, oud oils, and musk sprays', 'Ajmal Perfumes — quality budget-friendly oriental and floral fragrances'] },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Shopping Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🛍️ Shopping</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Tabuk Shopping Guide 2026:<br /><span className="text-cyan-300">Malls, Historic Souqs & Date Shops</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Your shopping handbook: from modern hypermarkets to Bedouin markets selling camel wool carpets and mountain honey.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><ShoppingBag className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Where to Shop in Tabuk</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Tabuk is the commercial hub of northwestern Saudi Arabia, offering a unique mix of high-end metropolitan malls and centuries-old Bedouin souqs. Whether you are looking for international apparel, hand-woven carpets, local agricultural dates, or rich oud perfumes, here is where to shop:</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {categories.map((cat, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-cyan-300 transition-colors">
                                <h3 className="font-bold text-gray-950 text-base mb-3">{cat.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {cat.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-cyan-600 mt-0.5">▸</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Practical Shopping Advice</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Bargaining:</strong> Bargaining is highly expected at older Bedouin markets like Souq Tawaheen. Start by offering 20-30% lower than the quoted price and bargain politely. Do not bargain at modern retail stores inside malls.</li>
                        <li><strong>Currency:</strong> Cards are accepted everywhere, but have some cash Riyals for small Bedouin carpet shops and local date markets.</li>
                        <li><strong>Date Quality:</strong> Tabuk Central Dates Market is highly recommended to buy dates. Inspect the vacuum seals to make sure they remain airtight for transport.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Taxi Services with Ample Luggage Space</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Done with your shopping tour? Our private taxis and family SUVs have massive trunk space to secure all your local dates, carpets, and shopping bags comfortably.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20for%20shopping%20tours%20in%20Tabuk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-tabuk/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
