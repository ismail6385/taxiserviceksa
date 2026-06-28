import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Where to Stay in AlUla: Best Hotels, Resorts & Areas 2026',
    description: 'Find the best hotels, luxury resorts, boutique villas, and budget accommodation in AlUla. Complete area breakdown and booking guide for 2026.',
    keywords: ['where to stay in AlUla 2026', 'best resorts in AlUla', 'luxury hotels AlUla', 'budget hotels AlUla town', 'AlUla accommodation guide'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/where-to-stay-alula-hotels-resorts/' },
    openGraph: { title: 'Where to Stay in AlUla: Best Hotels, Resorts & Areas 2026', description: 'The complete hotel guide to AlUla. Choose between luxury eco-villas and budget old town apartments.', type: 'article', url: 'https://taxiserviceksa.com/blog/where-to-stay-alula-hotels-resorts/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the most luxurious resort in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Banyan Tree AlUla and Our Habitas AlUla, both located in the spectacular Ashar Valley, are the premier luxury resorts in AlUla. They offer high-end private pool villas, fine dining, and unique wellness experiences directly under sandstone cliffs.' } },
        { '@type': 'Question', name: 'Where should budget travelers stay in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Budget travelers should stay in AlUla Town (also known as Al-Jadidah or Ad-Dahirah districts). You can find clean apartments, guesthouses, and local hotels for SAR 150 - 300 per night, within walking distance of local restaurants and public parks.' } },
        { '@type': 'Question', name: 'Do resorts in AlUla include airport transfers?', acceptedAnswer: { '@type': 'Answer', text: 'Some luxury 5-star resorts offer airport shuttle services, but they must be booked in advance and often carry high rates. Booking a private taxi is generally a more affordable and direct transfer option.' } },
    ],
};

export default function AlUlaHotelsPage() {
    const areas = [
        { name: '💎 Ashar Valley (Luxury & Romance)', desc: 'Home to AlUla\'s world-famous eco-resorts. Stay in mirrored villas or luxury luxury camps, surrounded by sheer cliff walls. High-end dining and privacy.' },
        { name: '🏡 Al-Jadidah / AlUla Town (Budget & Culture)', desc: 'Perfect for families and solo travelers. Features local hotels, apartments, craft shops, local cafeterias, and direct walking access to Old Town.' },
        { name: '⛺ Desert Canyons & Camps (Adventure)', desc: 'Ideal for stargazers and nature lovers. Stay in traditional bedouin tents, dome camps, or retro Airstream trailers directly under the open skies.' },
    ];

    const topHotels = [
        { name: 'Banyan Tree AlUla', rating: '5 ⭐ Luxury', price: 'SAR 3,000+', desc: 'Spectacular pool villas in Ashar Valley, high-end Thai spa, and pool tucked into canyons.' },
        { name: 'Our Habitas AlUla', rating: '5 ⭐ Eco-Luxury', price: 'SAR 1,800+', desc: 'Sustainable luxury villas focusing on wellness, yoga, organic food, and art installations.' },
        { name: 'Sahary AlUla Resort', rating: '3 ⭐ Mid-Range', price: 'SAR 450+', desc: 'Traditional mudbrick-style chalets with an indoor pool, spacious gardens, and great family value.' },
        { name: 'AlUla Town Apartments', rating: 'Budget / Local', price: 'SAR 150 - 250', desc: 'Clean, spacious furnished flats in the town center, ideal for families and budget travelers.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Where to Stay</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🏨 Hotel Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Where to Stay in AlUla:<br /><span className="text-amber-300">Best Hotels, Resorts & Areas 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">From ultra-luxury pool villas in Ashar Valley to affordable guesthouses in the historic town center.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Best Areas to Stay in AlUla</h2></div>
                    <div className="grid gap-6">
                        {areas.map((area, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-amber-300 transition-colors text-gray-700">
                                <h3 className="font-bold text-gray-900 text-base mb-2">{area.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Recommended Hotels & Resorts</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {topHotels.map((h, i) => (
                            <div key={i} className="border border-amber-200 bg-amber-50/50 rounded-2xl p-5 text-gray-700">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-black text-amber-900 text-sm">{h.name}</h3>
                                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">{h.rating}</span>
                                </div>
                                <p className="text-amber-800 font-bold text-sm mb-1">Starting from {h.price}</p>
                                <p className="text-gray-600 text-xs leading-relaxed">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">AlUla Hotel Booking Tips</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Book months in advance:</strong> AlUla has a limited number of total rooms. During peak winter weekends, hotels and resorts book out 3-6 months ahead.</li>
                        <li><strong>Off-season rates:</strong> If you don\'t mind the heat, 5-star resorts offer up to 60% discounts during the summer months (June to August).</li>
                        <li><strong>Transportation:</strong> Resorts are highly secluded. If you do not have a rental vehicle, make sure to pre-arrange a private taxi driver to avoid high on-demand ride fees.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your AlUla Resort Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Arriving at AlUla Airport or Madinah? Pre-book your private taxi transfer directly to your resort lobby.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20my%20resort%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/jeddah-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Jeddah → AlUla <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
