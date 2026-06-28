import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Madinah Travel Guide: Budget, Luxury, Family & Solo Trips 2026',
    description: 'Complete guide to budget travel, luxury stays, family trips, and solo travel in Madinah. Cost breakdowns, tips, and booking advice for all traveler types.',
    keywords: ['Madinah budget travel guide', 'luxury travel Madinah', 'family travel Madinah', 'solo travel Madinah', 'Madinah trip on a budget 2026'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/madinah-budget-luxury-family-solo-travel/' },
    openGraph: { title: 'Madinah Travel Guide: Budget, Luxury, Family & Solo 2026', description: 'Everything you need for budget, luxury, family, and solo travel in Madinah.', type: 'article', url: 'https://taxiserviceksa.com/blog/madinah-budget-luxury-family-solo-travel/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How much does a budget trip to Madinah cost per day?', acceptedAnswer: { '@type': 'Answer', text: 'A budget traveler can manage on SAR 200–400/day covering a basic hotel (SAR 100–150), meals (SAR 50–80), and local transport. Madinah is relatively affordable, especially with self-catering options and affordable Pakistani and Indian restaurants near the Haram.' } },
        { '@type': 'Question', name: 'Is Madinah good for family travel?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Madinah is one of the best family-friendly destinations in Saudi Arabia. It is very safe, has excellent infrastructure, family prayer halls at Masjid an-Nabawi, child-friendly restaurants, and plenty of educational Ziyarat sites.' } },
    ],
};

export default function MadinahTravelTypesPage() {
    const tiers = [
        { tier: '💸 Budget', who: 'Pilgrims & backpackers', hotel: '1-2 star guesthouses SAR 80–150/night', food: 'Pakistani/Indian restaurants SAR 15–30/meal', transport: 'Shared buses & budget taxis', total: 'SAR 200–350/day', tips: 'Book early, stay in Central Zone, eat near the bazaar.' },
        { tier: '💎 Luxury', who: 'Premium travelers & VIPs', hotel: '5-star like Anantara, Pullman, Movenpick SAR 800+', food: 'Hotel buffets & fine dining', transport: 'Private chauffeur-driven SUV', total: 'SAR 1500–3000/day', tips: 'Opt for Rawdah View suites; some 5-star hotels have direct mosque access.' },
        { tier: '👨‍👩‍👧 Family', who: 'Families with children', hotel: 'Family-suite hotels near Masjid an-Nabawi', food: 'Lebanese, Indian, fast-food restaurants', transport: 'Private 6-seat or 8-seat taxi', total: 'SAR 400–700/day', tips: 'Book the Madinah Hilton or Movenpick for family suites; plan Ziyarat on Day 2 when kids are rested.' },
        { tier: '🧳 Solo', who: 'Individual Muslim travelers', hotel: 'Budget hotels or hostel-style rooms', food: 'Street food and small restaurants', transport: 'Ride apps (Uber/Careem) or taxis', total: 'SAR 200–400/day', tips: 'Solo travelers love the flexibility; use the Nusuk app for fast Rawdah slot booking.' },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Budget Luxury Family Solo Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🧳 All Traveler Types</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Madinah for Everyone:<br /><span className="text-emerald-300">Budget, Luxury, Family & Solo Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Whether you're traveling on a shoestring or in style, this guide breaks down the best way to experience Madinah for every type of traveler.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Travel Tiers at a Glance</h2></div>
                    <div className="grid gap-6">
                        {tiers.map((t) => (
                            <div key={t.tier} className="border border-gray-200 p-6 rounded-2xl hover:border-emerald-300 transition-colors">
                                <h3 className="text-xl font-black text-gray-800 mb-3">{t.tier} <span className="text-sm font-normal text-gray-500">— {t.who}</span></h3>
                                <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                                    <div><strong>🏨 Hotel:</strong> {t.hotel}</div>
                                    <div><strong>🍽 Food:</strong> {t.food}</div>
                                    <div><strong>🚗 Transport:</strong> {t.transport}</div>
                                    <div><strong>💰 Daily Total:</strong> <span className="text-emerald-700 font-bold">{t.total}</span></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-3 italic">💡 {t.tips}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Private Taxis for All Budgets</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Solo, family, budget, or luxury — we have the right vehicle and price point for your Madinah journey.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20in%20Madinah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Now</a>
                        <Link href="/routes/madinah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">View Routes <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
