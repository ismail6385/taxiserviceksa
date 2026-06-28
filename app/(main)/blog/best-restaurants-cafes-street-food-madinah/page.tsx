import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Utensils } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Restaurants, Cafes & Street Food in Madinah 2026',
    description: 'Discover the best Pakistani, Indian, Arabic restaurants, cafes, and street food spots in Madinah. Full dining guide with locations and must-try dishes.',
    keywords: ['best restaurants in Madinah', 'Pakistani restaurants Madinah', 'Indian food Madinah', 'Arabic restaurants Madinah', 'best cafes Madinah', 'Madinah street food'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/best-restaurants-cafes-street-food-madinah/' },
    openGraph: { title: 'Best Restaurants, Cafes & Street Food in Madinah 2026', description: 'A foodie\'s complete guide to eating in Madinah — from haleem to Arabic mandi.', type: 'article', url: 'https://taxiserviceksa.com/blog/best-restaurants-cafes-street-food-madinah/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the best food to eat in Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'Madinah is famous for Mandi (slow-cooked lamb/chicken with rice), Jareesh (wheat porridge), fresh Ajwa dates, Kabsa, and Sambusa. Pakistani restaurants near the Haram serve excellent biryani, nihari, and haleem. Jordanian and Lebanese chains also have strong representation.' } },
        { '@type': 'Question', name: 'Are there Pakistani and Indian restaurants in Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. There are dozens of Pakistani and Indian restaurants within a 1 km radius of Masjid an-Nabawi, particularly on King Faisal Road and around the central bus station area. Popular Pakistani dishes like karahi, biryani, and halwa puri are widely available.' } },
    ],
};

export default function MadinahRestaurantsPage() {
    const restaurants = [
        { cat: '🇵🇰 Best Pakistani Restaurants', places: ['Al-Madina Karahi & Biryani — King Faisal Road', 'Lahori Kabab House — Central Zone', 'Dilruba Restaurant — near bus station', 'Peshawar Khyber Restaurant — Al-Anbariyah District'] },
        { cat: '🇮🇳 Best Indian Restaurants', places: ['Malabar Indian Kitchen — near Masjid an-Nabawi', 'Zaiqa-e-Mumbai — Al-Haram area', 'Taste of India — Quba Road'] },
        { cat: '🌍 Best Arabic Restaurants', places: ['Al-Romansiah — famous Mandi chain', 'Khayal Restaurant — authentic Hijazi cuisine', 'Mathaam al-Aseel — traditional Saudi Kabsa'] },
        { cat: '☕ Best Cafes', places: ['Starbucks — multiple locations near Haram', 'The Coffee Club — Al-Anbariyah Street', 'Café Blanc — popular with families'] },
        { cat: '🌮 Best Street Food', places: ['Sambousa stalls near the mosque gates (SAR 1–2 each)', 'Fresh Ajwa date vendors — buy 250g bags for gifts', 'Haleem & Nihari pots near the bazaar (evenings only)', 'Charcoal-grilled corn cobs — Uhud Road'] },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Restaurants & Food Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🍽 Food Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Best Restaurants, Cafes<br /><span className="text-emerald-300">& Street Food in Madinah 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">From Pakistani karahi to Arabic mandi and specialty cafes — your complete guide to eating well in Madinah.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Utensils className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Dining Guide by Cuisine Type</h2></div>
                    <div className="grid gap-6">
                        {restaurants.map((r) => (
                            <div key={r.cat} className="border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 transition-colors">
                                <h3 className="font-black text-gray-900 text-lg mb-3">{r.cat}</h3>
                                <ul className="space-y-2">
                                    {r.places.map((p, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <span className="text-emerald-500 mt-0.5">▸</span> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Food Tips for Madinah</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Most restaurants near the Haram offer takeaway — great for eating between prayers.</li>
                        <li>Many places run special Iftar buffets during Ramadan for SAR 50–100 pp.</li>
                        <li>Avoid peak prayer times (especially Dhuhr and Asr) for quicker restaurant service.</li>
                        <li>Street food is best experienced in the evenings after Maghrib prayers.</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Travel Between Madinah & Makkah</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">After dining in Madinah, continue your pilgrimage journey. Book comfortable intercity transfers.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20from%20Madinah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Now</a>
                        <Link href="/routes/madinah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Transfer Rates <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
