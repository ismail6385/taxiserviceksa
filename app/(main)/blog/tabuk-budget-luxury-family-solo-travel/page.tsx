import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tabuk Accommodation & Travel Styles Guide: Budget, Luxury, Family & Solo 2026',
    description: 'Find the best hotels, luxury resorts, and budget accommodation in Tabuk. Learn how to plan according to your travel style: family, solo, or budget.',
    keywords: ['where to stay in Tabuk 2026', 'best areas to stay Tabuk', 'Tabuk budget travel', 'luxury hotels Tabuk', 'family hotels Tabuk'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/tabuk-budget-luxury-family-solo-travel/' },
    openGraph: { title: 'Tabuk Accommodation & Travel Styles Guide: Budget, Luxury, Family & Solo 2026', description: 'Your guide to choosing the best hotels, resorts, and travel style options in Tabuk Province.', type: 'article', url: 'https://taxiserviceksa.com/blog/tabuk-budget-luxury-family-solo-travel/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Which are the best areas to stay in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'For business travelers and short stays, the Central Business District (along Prince Fahad Bin Sultan Road) is best for hotel access. Families and leisure tourists often prefer staying near the King Abdulaziz Road area or booking Red Sea coastal resorts in Sharma or Umluj for a beach retreat.' } },
        { '@type': 'Question', name: 'Is Tabuk good for solo travelers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Tabuk is highly welcoming and safe. Solo travelers should stay in central Tabuk city hotels to easily coordinate with tour guides, access local dining, or join group day trips to Wadi Al-Disah.' } },
    ],
};

export default function TabukTravelStylesPage() {
    const segments = [
        { title: '💸 Budget Travel', stay: 'Local rental apartments and 3-star central hotels (SAR 150-250/night).', food: 'Enjoy traditional shawarma, foul, tamiya, and local Arabic grills.', activity: 'Explore Tabuk Castle, walk the old Souq, and visit free beach areas in Haql.' },
        { title: '💎 Luxury & Coastal Resorts', stay: 'Luxury beach resorts in Sharma, Royal Tulip Tabuk, or Grand Millennium.', food: 'Fine dining at top hotel restaurants and premium cafes in Tabuk Boulevard.', activity: 'Private yacht charter in Umluj, premium guided tour of Al-Disah, or VIP desert camps.' },
        { title: '👨‍👩‍👧 Family Holidays', stay: 'Spacious hotel suites in central Tabuk or coastal family chalets.', food: 'Casual dining at shopping malls and family-friendly Arabic restaurants.', activity: 'Picnic at King Abdulaziz Park, visit the Railway Museum, and take light beach tours.' },
        { title: '🧳 Solo Adventurer', stay: 'Boutique hotels or shared apartments in Tabuk city.', food: 'Eat at bustling street food markets and local coffee shops.', activity: 'Backpacking or camping in Hisma Desert, trekking in Wadi Al-Disah, and climbing mountains.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Tabuk Travel Styles</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🏨 Stay Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Where to Stay in Tabuk:<br /><span className="text-cyan-300">Budget, Luxury, Family & Solo Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Choose the best hotels, resorts, and areas to stay. Plan a custom trip mapped directly to your personal travel style.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Tabuk Travel Style Directory</h2></div>
                    <div className="grid gap-6">
                        {segments.map((s, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-cyan-300 transition-colors text-gray-700">
                                <h3 className="text-xl font-black text-cyan-800 mb-3">{s.title}</h3>
                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    <div><strong>🏨 Accommodation:</strong> {s.stay}</div>
                                    <div><strong>🍽️ Dining:</strong> {s.food}</div>
                                    <div><strong>🛶 Top Experience:</strong> {s.activity}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Best Areas to Stay in Tabuk</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Tabuk City Center (Central):</strong> Best for general tourists who want proximity to Tabuk Castle, railway museum, local markets, and a wide array of dining.</li>
                        <li><strong>Sharma & Umluj (Coastal):</strong> Best for beach lovers. Offers luxury resorts and beach houses right on the Red Sea coastline.</li>
                        <li><strong>Jabal Al-Lawz Highlands (Winter Campers):</strong> Best for winter adventure seekers who plan to camp out near the snow mountain peaks.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi in Tabuk</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">We have standard sedans for budget solo travelers and luxurious GMC SUVs for families. Reach your hotel or resort comfortably.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20for%20my%20Tabuk%20stay" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/complete-tabuk-travel-guide/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Tabuk Guide <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
