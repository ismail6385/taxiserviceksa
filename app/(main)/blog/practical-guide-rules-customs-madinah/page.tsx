import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Madinah Practical Travel Guide 2026: SIM Cards, Dress Code & Rules',
    description: 'A practical visitor guide to Madinah. Learn about rules, local customs, dress code for men and women, safety, SIM cards, currency exchange, and general travel FAQs.',
    keywords: ['Madinah rules and regulations 2026', 'dress code in Madinah for women', 'SIM card at Madinah airport', 'is Madinah safe for tourists', 'Saudi Arabia local customs pilgrims'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/practical-guide-rules-customs-madinah/' },
    openGraph: { title: 'Madinah Practical Travel Guide 2026: SIM Cards, Dress Code & Rules', description: 'Essential rules, local customs, and practical tips for a respectful and smooth trip to Madinah.', type: 'article', url: 'https://taxiserviceksa.com/blog/practical-guide-rules-customs-madinah/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the dress code in Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'For women, a loose abaya (robe) and a hijab (headscarf) are required near Masjid an-Nabawi and all holy sites. Men should wear long trousers and shirts covering the shoulders. Shorts, sleeveless shirts, and tight clothes are highly discouraged inside and around sacred areas.' } },
        { '@type': 'Question', name: 'Where can I get a local SIM card in Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'You can buy local SIM cards from STC, Mobily, or Zain kiosks located at the arrivals hall of Madinah Airport (MED). Alternatively, there are official telecom stores around the Central Area (Haram) district, though they can be very crowded during peak prayer times.' } },
        { '@type': 'Question', name: 'Is Madinah safe for female solo travelers?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Madinah is considered extremely safe for everyone, including female solo travelers. The area around the Haram is heavily monitored and populated 24/7. There is a strong security presence from the Saudi police to assist pilgrims and tourists.' } },
    ],
};

export default function MadinahPracticalGuidePage() {
    const rules = [
        { title: '👗 Dress Code', desc: 'Women should wear an abaya and headscarf (hijab). Men must wear long trousers and avoid short, tight, or sleeveless attire.' },
        { title: '🤫 Haram Etiquette', desc: 'Lower your voice. Avoid laughing loudly or making unnecessary noise. Keep your mobile phone silent inside the mosque.' },
        { title: '📸 Photography', desc: 'Taking pictures inside the main prayer halls of Masjid an-Nabawi is strictly prohibited. Avoid photographing locals without explicit permission.' },
        { title: '📿 Respecting Worship', desc: 'Do not walk directly in front of someone praying. Walk behind them or wait until they finish.' },
        { title: '💰 Money & Payments', desc: 'Saudi Arabia is highly digital; Apple Pay and credit cards are accepted almost everywhere. Keep small cash (Saudi Riyals) for buying street food and date market bargaining.' },
        { title: '📶 SIM Cards & Data', desc: 'Buy a local SIM card at the airport upon arrival. STC offers the best network coverage in holy sites, followed by Mobily and Zain.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Practical Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">📜 Practical Info</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Madinah Practical Travel Guide:<br /><span className="text-emerald-300">Rules, Dress Code, SIMs & Customs 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Ensure a respectful, smooth, and spiritually enriching visit to Madinah. Learn about essential rules, cultural expectations, and practical tips.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Key Customs, Rules, & Regulations</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">As one of Islam's two holiest cities, Madinah maintains high cultural and spiritual standards. Familiarizing yourself with these local rules ensures you show respect and avoid potential fines or conflicts during your pilgrimage or visit:</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                        {rules.map((rule) => (
                            <div key={rule.title} className="border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 transition-colors">
                                <h3 className="font-black text-emerald-800 text-base mb-2">{rule.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{rule.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Health & Safety in Madinah</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Heat and Sun protection:</strong> Temperatures in Madinah can exceed 45°C (113°F) during summer. Carry an umbrella, stay hydrated with Zamzam water, and avoid walking long distances in direct afternoon sun.</li>
                        <li><strong>Emergency numbers:</strong> Dial 911 for all emergencies in Saudi Arabia (Ambulance, Police, Traffic accidents).</li>
                        <li><strong>Tap Water:</strong> Tap water is generally not recommended for drinking. Stick to bottled mineral water or the free Zamzam water coolers located inside and outside Masjid an-Nabawi.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Madinah Taxi Tour</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Travel around Madinah comfortably and safely with our professional, local drivers who know the city\'s roads and customs inside out.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20in%20Madinah%20for%20a%20tour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Places to Visit <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
