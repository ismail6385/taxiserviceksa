import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Travel Styles Guide: Budget, Luxury, Family & Solo Stays 2026',
    description: 'Learn how to experience AlUla according to your style. Tips for budget travel, luxury eco-resorts, family itineraries, solo exploration, and romantic trips in 2026.',
    keywords: ['AlUla budget travel guide', 'luxury travel AlUla resorts', 'family travel AlUla', 'solo travel AlUla', 'romantic getaway AlUla'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-budget-luxury-family-solo-travel/' },
    openGraph: { title: 'AlUla Travel Styles Guide: Budget, Luxury, Family & Solo 2026', description: 'Practical advice, costs, and itineraries for budget, luxury, family, and solo travelers in AlUla.', type: 'article', url: 'https://taxiserviceksa.com/blog/alula-budget-luxury-family-solo-travel/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Can you visit AlUla on a budget?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. While AlUla is famous for luxury resorts like Habitas and Banyan Tree, budget travelers can stay in local apartments or guesthouses in AlUla town (Al-Jadidah/Muwada district) for SAR 150-250/night, dine at local Arabic cafeterias, and travel via local shared buses or pre-booked budget taxis.' } },
        { '@type': 'Question', name: 'Is AlUla suitable for families with kids?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, AlUla is very family-friendly. Popular family activities include the Oasis Heritage Trail walk, stargazing in Gharameel, adventure zip-lining, and seeing the massive Elephant Rock. Most upscale hotels offer family suites and kids clubs.' } },
    ],
};

export default function AlUlaTravelStylesPage() {
    const travelStyles = [
        { title: '💸 Budget Traveler', stay: 'Local guesthouses & apartments in AlUla town', food: 'Local cafeterias, shawarma shops, and street markets', activity: 'Walk the Oasis trail, visit Elephant Rock, and take budget group tours', tips: 'Visit during summer or shoulder season (May or Sept) for 50%+ off accommodation rates.' },
        { title: '💎 Luxury & Romance', stay: 'Habitas AlUla, Banyan Tree, or Sharaan Resort', food: 'Fine dining at Maraya Social, Saffron, and Harrat', activity: 'Private helicopter flights, vintage Land Rover Hegra tours, and VIP stargazing', tips: 'Book a pool villa in Ashar Valley for ultimate privacy and spectacular sandstone views.' },
        { title: '👨‍👩‍👧 Family Travel', stay: 'Sahary AlUla Resort or family-friendly villas', food: 'Casual dining in Al-Jadidah and pizza spots in Old Town', activity: 'Stargazing at Gharameel, visiting local citrus farms, and light hiking', tips: 'Book a larger private SUV for comfortable transport between spread-out attractions.' },
        { title: '🧳 Solo Adventurer', stay: 'Boutique hostels, camps, or shared rooms', food: 'Traditional Arabic dining and local food stalls', activity: 'Adventure hiking, canyon zip-lining, and group desert safaris', tips: 'Join group tours for Hegra and Dadan to save on ticket costs and meet fellow travelers.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>AlUla Travel Styles</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🧳 Travel Styles</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">AlUla for Every Traveler:<br /><span className="text-amber-300">Budget, Luxury, Family & Solo Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Whether you are planning a high-end luxury honeymoon, a family holiday, a solo backpacking trip, or a budget adventure, AlUla has a perfect path for you.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">AlUla Travel Style Breakdown</h2></div>
                    <div className="grid gap-6 text-gray-700">
                        {travelStyles.map((style, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-amber-300 transition-colors">
                                <h3 className="text-xl font-black text-amber-800 mb-3">{style.title}</h3>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm mb-3">
                                    <div><strong>🏨 Accommodation:</strong> {style.stay}</div>
                                    <div><strong>🍽️ Dining:</strong> {style.food}</div>
                                    <div><strong>🌵 Recommended Activity:</strong> {style.activity}</div>
                                </div>
                                <p className="text-xs text-gray-500 italic bg-amber-50 p-2 rounded-lg border border-amber-100">💡 <strong>Pro Tip:</strong> {style.tips}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Comfortable SUV & Sedan Taxis for AlUla</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">We have sedans for solo/budget travelers, and premium 4WD SUVs for families and luxury tourists. Book your intercity ride now.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20for%20my%20AlUla%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/tabuk-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Tabuk → AlUla <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
