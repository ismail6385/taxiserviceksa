import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Utensils } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Restaurants & Cafes in Tabuk: Food & Dining Guide 2026',
    description: 'Explore the culinary scene of Tabuk. Complete guide to the best restaurants, Arabic cafes, Pakistani/Indian dining, breakfast spots, and street food.',
    keywords: ['best restaurants in Tabuk', 'Tabuk food guide 2026', 'Pakistani restaurants Tabuk', 'Arabic cafes Tabuk', 'best breakfast in Tabuk'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/best-restaurants-cafes-food-tabuk/' },
    openGraph: { title: 'Best Restaurants & Cafes in Tabuk: Food & Dining Guide 2026', description: 'Explore Tabuk\'s local dining scene, including traditional Saudi food, Indian/Pakistani spots, and trendy coffee shops.', type: 'article', url: 'https://taxiserviceksa.com/blog/best-restaurants-cafes-food-tabuk/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Where can I find the best Pakistani or Indian food in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'Tabuk has a vibrant South Asian expat community. Popular spots for authentic biryani, karahi, and naan include Khyber Restaurant, Royal Taj Indian Restaurant, and local pakistani dhabas located in the central Al-Aziziyah district.' } },
        { '@type': 'Question', name: 'What traditional food is Tabuk famous for?', acceptedAnswer: { '@type': 'Answer', text: 'Tabuk is famous for Sayadiyah (Red Sea fish served with spiced brown rice and caramelized onions), Mansaf (traditional Bedouin lamb dish cooked in fermented dried yogurt, highly popular near the Jordan border), and traditional Saudi Kabsa.' } },
    ],
};

export default function TabukDiningPage() {
    const categories = [
        { cat: '🇸🇦 Traditional Arabic & Saudi Food', places: ['Sayadiyah Al Madinah — legendary Red Sea fish and brown rice', 'Jamil Restaurant — local Bedouin Mansaf and Mandi lamb cooked in underground ovens', 'Suhail Tabuk — high-end modern Saudi cuisine and elegant dining'] },
        { cat: '🇵🇰 Pakistani & Indian Cuisine', places: ['Royal Taj Indian Restaurant — premium curry and tandoori grills', 'Khyber Pakistani Restaurant — budget-friendly mutton karahi, biryani, and fresh roti', 'Lahore Restaurant — central Al-Aziziyah street food and dal makhani'] },
        { cat: '☕ Trendy Specialty Cafes & Breakfast', places: ['Caffeine Lab — specialty pour-overs, lattes, and croissants', 'The Boulevard Tabuk — upscale cafes and bakeries popular for brunch', 'Al-Jadidah Cafe — traditional mint tea and Arabic dates inside palm gardens'] },
        { cat: '🌯 Street Food & Bakeries', places: ['Local shawarma stalls along King Abdulaziz Road — hot wraps and fresh juices', 'Al-Ahsa Bakery — famous for traditional Saudi flatbreads and cheese fatayer'] },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Dining Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🍽️ Dining</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Best Restaurants & Cafes<br /><span className="text-cyan-300">in Tabuk 2026: Complete Food Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">From Bedouin Mansaf and Red Sea fish to authentic South Asian curries and specialty coffee shops.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Utensils className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Tabuk Culinary Directory</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Tabuk\'s proximity to Jordan and the Red Sea has shaped a highly unique culinary profile. Visitors can enjoy fresh coastal seafood, rich Bedouin mutton dishes, and spicy Pakistani and Indian food, alongside trendy metropolitan cafes. Here is our breakdown of the best dining options by category:</p>
                    
                    <div className="grid gap-6">
                        {categories.map((c, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-cyan-300 transition-colors text-gray-700">
                                <h3 className="font-black text-cyan-800 text-lg mb-3">{c.cat}</h3>
                                <ul className="space-y-2">
                                    {c.places.map((place, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm">
                                            <span className="text-cyan-600 mt-0.5">▸</span> {place}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Food Highlights</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Sayadiyah Fish:</strong> Must try when visiting Umluj or Sharma. Local restaurants bake fresh Red Sea snapper or sea bass over custom coal pits, served with dark spiced rice.</li>
                        <li><strong>Mansaf:</strong> A traditional Jordan-border dish. Lamb cooked in a sauce of fermented dried yogurt (Jameed), served on flatbread with yellow rice and roasted pine nuts.</li>
                        <li><strong>South Asian Aziziyah:</strong> If you are craving home-style spices, the Al-Aziziyah block features the best Pakistani and Indian flatbreads, karahis, and sweet tea.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Tabuk Dining Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Dining spots in Tabuk are spread across several central suburbs. Avoid navigation hassle — pre-book a private taxi to take you from your hotel direct to your restaurant.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20for%20my%20dinner%20plans%20in%20Tabuk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-tabuk/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
