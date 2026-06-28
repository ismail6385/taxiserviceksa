import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen, Moon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Visiting Madinah During Ramadan & Hajj Season 2026: Complete Guide',
    description: 'Essential guide for visiting Madinah during Ramadan and Hajj season 2026. What to expect, crowd tips, Rawdah booking, Iftar spots, and transport advice.',
    keywords: ['Madinah Ramadan guide 2026', 'visit Madinah Hajj season', 'Madinah during Ramadan tips', 'Madinah peak season travel', 'Madinah Umrah Ramadan'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/visiting-madinah-ramadan-hajj-season/' },
    openGraph: { title: 'Visiting Madinah During Ramadan & Hajj Season 2026', description: 'Essential tips for navigating Madinah at its busiest and most spiritually rewarding time.', type: 'article', url: 'https://taxiserviceksa.com/blog/visiting-madinah-ramadan-hajj-season/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Is Madinah more crowded during Ramadan or Hajj?', acceptedAnswer: { '@type': 'Answer', text: 'Both seasons bring massive crowds, but they differ in nature. During Ramadan (especially the last 10 nights), pilgrims flood Masjid an-Nabawi for Tahajjud and Tarawih. During Hajj season, pilgrims pass through Madinah before or after performing Hajj. The last 10 nights of Ramadan and the days immediately before Hajj are the absolute peak periods.' } },
        { '@type': 'Question', name: 'How do I book Rawdah during Ramadan?', acceptedAnswer: { '@type': 'Answer', text: 'Rawdah slots during Ramadan are extremely competitive. Use the Nusuk app and set notifications for slot openings — they typically open 3 days in advance at midnight KSA time. During the last 10 nights, you may need to try multiple consecutive days before securing a slot.' } },
    ],
};

export default function MadinahRamadanHajjPage() {
    const ramadanTips = [
        'Book hotel 3-6 months in advance for Ramadan — prices triple in the last 10 nights.',
        'Download Nusuk app and set alerts for Rawdah slot release (usually midnight KSA time).',
        'Attend Tarawih at Masjid an-Nabawi — one of the most moving spiritual experiences in the world.',
        'Iftar buffets are set up in mosque courtyards — arrive 30 min before Maghrib to secure a spot.',
        'Last 10 nights (Ashra) are the busiest — expect massive crowds but immense spiritual reward.',
        'Book a private taxi in advance for Suhoor-time Ziyarat trips — roads are quieter pre-Fajr.',
    ];
    const hajjTips = [
        'Most Hajj pilgrims spend 8 days in Madinah before or after Hajj.',
        'Hotel prices near the Haram are highest in Dhul Hijja — book 6+ months ahead.',
        'Madinah is calmer than Makkah during Hajj itself — use this time for in-depth Ziyarat.',
        'Taxis to Makkah spike in price during Hajj season — book intercity transfers in advance.',
        'The Madinah Airport handles 6+ million passengers during Hajj — allow 3+ hours for transit.',
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Ramadan & Hajj Season Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🌙 Ramadan & Hajj</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Madinah During Ramadan<br /><span className="text-emerald-300">& Hajj Season: Complete Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Visiting Madinah at peak season requires planning. Here is everything you need to navigate the crowds and maximize your spiritual experience.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Moon className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Madinah During Ramadan</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Ramadan transforms Madinah into the most spiritually charged city on Earth. Millions descend for Umrah and extended stays. The atmosphere around Masjid an-Nabawi at night — with Tarawih prayers, the sound of Quran recitation, and pilgrims from every corner of the world — is unlike anything else in the world.</p>
                    <ul className="space-y-3">
                        {ramadanTips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-3 border border-emerald-100 bg-emerald-50 rounded-xl p-4">
                                <span className="text-emerald-600 font-black flex-shrink-0">💡</span>
                                <span className="text-gray-700 text-sm">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Madinah During Hajj Season</h2>
                    <p className="text-gray-700 leading-relaxed">Hajj pilgrims visit Madinah either before (Pre-Hajj Madinah) or after completing the Hajj rituals in Makkah and Mina. Madinah during Hajj is calmer than Makkah and provides a beautiful spiritual conclusion to the pilgrimage experience.</p>
                    <ul className="space-y-3">
                        {hajjTips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-3 border border-gray-200 rounded-xl p-4">
                                <span className="text-emerald-500 flex-shrink-0 mt-0.5">▸</span>
                                <span className="text-gray-700 text-sm">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Peak Season Price Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-emerald-800 text-white">
                                    <th className="p-3 text-left rounded-tl-xl">Season</th>
                                    <th className="p-3 text-left">Hotel (per night)</th>
                                    <th className="p-3 text-left rounded-tr-xl">Crowd Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { season: 'Off-Peak (Muharram)', hotel: 'SAR 100–200', crowd: 'Low 🟢' },
                                    { season: 'School holidays', hotel: 'SAR 200–400', crowd: 'Medium 🟡' },
                                    { season: 'Ramadan (1st 20 days)', hotel: 'SAR 400–800', crowd: 'High 🟠' },
                                    { season: 'Ramadan Last 10 Nights', hotel: 'SAR 800–2000+', crowd: 'Extreme 🔴' },
                                    { season: 'Hajj Season', hotel: 'SAR 600–1500', crowd: 'Very High 🔴' },
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="p-3 font-medium text-gray-800">{row.season}</td>
                                        <td className="p-3 text-emerald-700 font-bold">{row.hotel}</td>
                                        <td className="p-3 text-gray-700">{row.crowd}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Pre-Book Your Ramadan & Hajj Transfers</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Taxis book out weeks in advance during peak season. Secure your Makkah–Madinah transfer now.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20from%20Makkah%20to%20Madinah%20during%20Ramadan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/makkah-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">View Transfer Fares <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
