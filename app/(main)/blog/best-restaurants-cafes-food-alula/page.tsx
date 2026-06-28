import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Utensils } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Restaurants, Cafes & Food Guide to AlUla 2026',
    description: 'The complete dining guide to AlUla. Discover the best fine dining at Maraya, traditional Arabic restaurants, breakfast spots, and specialty coffee shops.',
    keywords: ['best restaurants in AlUla', 'AlUla food guide 2026', 'luxury dining AlUla', 'best cafes AlUla', 'Arabic restaurants AlUla town'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/best-restaurants-cafes-food-alula/' },
    openGraph: { title: 'Best Restaurants, Cafes & Food Guide to AlUla 2026', description: 'Explore the culinary scene of AlUla — from Michelin-starred dining to traditional local oases cafes.', type: 'article', url: 'https://taxiserviceksa.com/blog/best-restaurants-cafes-food-alula/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the most famous luxury restaurant in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Maraya Social, located on the rooftop of the mirrored Maraya Concert Hall, is the most famous fine-dining restaurant in AlUla. Curated by Michelin-starred chef Jason Atherton, it serves creative Mediterranean cuisine with spectacular cliff views.' } },
        { '@type': 'Question', name: 'Where can I try traditional Saudi or Arabic food in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'For authentic Saudi and Arabic food, visit Suhail in AlUla Old Town. They serve high-end, modern interpretations of traditional Saudi dishes like Kabsa, Jareesh, and lamb mandi in a beautiful outdoor mudbrick setting.' } },
        { '@type': 'Question', name: 'Are reservations required for dining in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'For high-end restaurants in Ashar Valley (Maraya Social, Saffron) and Old Town (Suhail, Entrecote), reservations are highly recommended and often required weeks in advance via the MyTable app or official Experience AlUla site.' } },
    ],
};

export default function AlUlaDiningPage() {
    const categories = [
        { cat: '💎 Luxury & Fine Dining', places: ['Maraya Social — Mediterranean on the mirror hall rooftop', 'Saffron — Authentic Thai at Banyan Tree AlUla', 'Harrat — International and Middle Eastern fine dining at Habitas', 'Entrecôte Café de Paris — Famous French steakhouse in Old Town'] },
        { cat: '🇸🇦 Traditional Arabic Dining', places: ['Suhail — High-end modern Saudi cuisine in Old Town', 'Alnakheel — Family-friendly traditional Middle Eastern', 'Somewhere — Mediterranean-Arabian fusion set in a palm farm oasis'] },
        { cat: '☕ Specialty Cafes & Breakfast', places: ['Wacafe — Popular specialty coffee and pastries in Old Town', 'Daimumah Cafe — Beautiful cafe set inside a working palm orchard', 'Pink Camel Pastry Boutique — Famous for macaron and breakfast on the Oasis edge'] },
        { cat: '🌯 Casual & Street Food', places: ['SALT — Legendary burger food truck at Elephant Rock', 'Local cafeterias in AlUla town — Shawarmas, falafel, and fresh juices (SAR 10-25 per meal)'] },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Dining Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🍽️ Food Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Best Restaurants & Cafes<br /><span className="text-amber-300">in AlUla 2026: Complete Food Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">From Michelin-starred dining on a mirrored rooftop to fresh cardamom coffee under orange orchards.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Utensils className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">AlUla Culinary Directory</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">AlUla has quickly established itself as a premier culinary destination in Saudi Arabia. The city blends world-class luxury franchises with organic farm-to-table concepts situated directly inside the date palm oasis. Here is a breakdown of the best dining options by category:</p>
                    
                    <div className="grid gap-6">
                        {categories.map((c, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:border-amber-300 transition-colors text-gray-700">
                                <h3 className="font-black text-amber-800 text-lg mb-3">{c.cat}</h3>
                                <ul className="space-y-2">
                                    {c.places.map((place, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                            <span className="text-amber-600 mt-0.5">▸</span> {place}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Practical Dining Advice</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Apps to use:</strong> Use the <strong>MyTable</strong> and <strong>Chefz</strong> apps to search and reserve tables at top-tier AlUla restaurants.</li>
                        <li><strong>Dress codes:</strong> Fine dining outlets require smart-casual wear. Avoid wearing shorts, flip-flops, or activewear.</li>
                        <li><strong>Ramadan Dining:</strong> During Ramadan, restaurants close during the day and open for lavish Iftar and Suhoor buffets after sunset. Pre-booking is mandatory.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Dining Taxi Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Fine dining spots in Ashar Valley and Al-Jadidah are highly spread out. Book a reliable private taxi to ensure you arrive on time for your dinner reservation.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20for%20my%20dinner%20reservations%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
