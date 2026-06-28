import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, ShoppingBag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Shopping Guide 2026: Souvenirs, Markets & Date Shops',
    description: 'The complete AlUla shopping guide. Discover the best markets in Old Town, boutique souvenirs, organic date shops, and local perfume outlets in 2026.',
    keywords: ['AlUla shopping guide 2026', 'best souvenirs to buy in AlUla', 'AlUla date shops', 'Old town markets AlUla', 'perfume shops AlUla'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/shopping-guide-souvenirs-markets-alula/' },
    openGraph: { title: 'AlUla Shopping Guide 2026: Souvenirs, Markets & Date Shops', description: 'Your guide to shopping in AlUla — from local citrus products to hand-poured perfumes and heritage crafts.', type: 'article', url: 'https://taxiserviceksa.com/blog/shopping-guide-souvenirs-markets-alula/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What are the best souvenirs to buy in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Top souvenirs include: 1) Barni dates (AlUla\'s signature sweet date). 2) Local citrus products (perfumes, oils, dehydrated fruits). 3) Hand-crafted ceramics and woven palm baskets from Madrasat AdDeera. 4) Sandstone carvings and Arabic calligraphy items. 5) Luxury oud and rose perfumes.' } },
        { '@type': 'Question', name: 'Where are the best shopping markets in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'The Old Town Souq (Heritage Market) and the adjacent Al-Jadidah arts district are the premier shopping areas. They feature beautifully designed open-air walkways with local artisan stalls, high-end boutiques, and traditional date shops.' } },
        { '@type': 'Question', name: 'What is special about AlUla dates?', acceptedAnswer: { '@type': 'Answer', text: 'AlUla\'s oasis has over 2 million date palms. The region is famous for producing "Barni" dates, which are incredibly sweet, chewy, and rich in nutrients. They are highly sought after across Saudi Arabia and are sold fresh, dried, or vacuum-sealed.' } },
    ],
};

export default function AlUlaShoppingPage() {
    const sections = [
        { icon: '🌴', title: 'Best Date & Citrus Shops', items: ['AlUla Date Farmers Market — buy direct from local producers', 'Barni Date Outlets in Old Town — premium gift packs', 'Citrus Festival stalls (runs in January) — fresh oranges, lemons, and essential oils'] },
        { icon: '🛍️ Heritage Markets & Souqs', items: ['Old Town Souq — beautifully restored mudbrick market stalls selling handicrafts', 'Al-Jadidah Arts Area — trendy fashion boutiques and design galleries', 'Madrasat AdDeera Showroom — supporting local female artisans and traditional weavers'] },
        { icon: '🧴 Perfume & Oud Boutiques', items: ['Arabian Oud — premium Saudi perfume chain in Old Town', 'Abdul Samad Al Qurashi — high-end rose attar and oud oil', 'Local craft stalls selling hand-made citrus and desert mint fragrances'] },
        { icon: '🎁 Unique Souvenirs', items: ['Hand-woven palm leaf baskets (traditional "Khoos")', 'Sandstone replicas of Hegra tomb facades', 'Calligraphy scrolls featuring ancient Dadanitic script'] },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Shopping Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🛍️ Shopping</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">AlUla Shopping Guide 2026:<br /><span className="text-amber-300">Souvenirs, Markets & Date Shops</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The ultimate guide to buying local oases dates, hand-crafted heritage souvenirs, and luxury perfumes in AlUla.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><ShoppingBag className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Where to Shop in AlUla</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">AlUla offers a beautiful shopping experience that focuses on heritage, local agriculture, and high-end design. Unlike other Saudi cities with large indoor malls, AlUla's primary shopping zones are designed as open-air pedestrian avenues winding through restored mudbrick quarters and lush palm farms. Here is what to buy and where to buy it:</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {sections.map((sec, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-amber-300 transition-colors">
                                <h3 className="font-bold text-gray-950 text-base mb-3">{sec.icon} {sec.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {sec.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-amber-600 mt-0.5">▸</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Tips for AlUla Shoppers</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Cash vs Card:</strong> Credit cards and digital payments (Apple Pay) are widely accepted, but it is useful to carry some cash (Saudi Riyals) when shopping at local farmers' markets.</li>
                        <li><strong>Support local artisans:</strong> Products sold at Madrasat AdDeera and local old town stalls directly support local families and the preservation of traditional weaving, pottery, and silver craft skills.</li>
                        <li><strong>Mailing souvenirs home:</strong> Standard dates are vacuum-sealed and can easily be carried in checked luggage. Make sure to check customs rules if traveling internationally.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Taxi Services with Ample Luggage Space</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Done with your shopping tour? Our private taxis and family SUVs have massive trunk space to secure all your local dates, souvenirs, and suitcases comfortably.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20for%20shopping%20tours%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
