import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Masjid Quba Guide 2026: History, Virtues & How to Visit',
    description: 'Complete guide to Masjid Quba in Madinah — the first mosque in Islam. History, virtues, visiting tips, location, and how to get there from Masjid an-Nabawi.',
    keywords: ['Masjid Quba guide 2026', 'first mosque in Islam Quba', 'Quba mosque history', 'visit Quba mosque Madinah', 'Quba mosque virtue reward'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/quba-mosque-history-visit-guide/' },
    openGraph: { title: 'Masjid Quba Guide 2026: History & Visit Tips', description: 'The complete guide to visiting Masjid Quba — the first mosque built in Islamic history.', type: 'article', url: 'https://taxiserviceksa.com/blog/quba-mosque-history-visit-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the reward of praying at Masjid Quba?', acceptedAnswer: { '@type': 'Answer', text: 'The Prophet ﷺ said: "Whoever purifies himself in his house then comes to Masjid Quba and prays in it, he will have a reward like that of Umrah." (Ibn Majah, 1412). This makes Masjid Quba the only mosque in Madinah besides Masjid an-Nabawi with a specific hadith encouraging its visitation.' } },
        { '@type': 'Question', name: 'How far is Masjid Quba from Masjid an-Nabawi?', acceptedAnswer: { '@type': 'Answer', text: 'Masjid Quba is approximately 3.5 km from Masjid an-Nabawi. The walk takes about 40-50 minutes and follows the traditional Quba Road. By taxi or private car it takes about 10-15 minutes depending on traffic.' } },
    ],
};

export default function QubaMosqueGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Quba Mosque Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 First Mosque in Islam</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Masjid Quba: History,<br /><span className="text-emerald-300">Virtues & Complete Visit Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The world's first mosque, built by the Prophet ﷺ himself. Two Rakats here earn the reward of a complete Umrah.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">History of Masjid Quba</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Masjid Quba holds the distinction of being the very first mosque built in the history of Islam. When the Prophet Muhammad ﷺ arrived at the outskirts of Madinah during the Hijra in 622 CE, he stopped in the village of Quba for approximately 14 days before entering the city proper. During this time, he laid the foundation of this mosque with his own blessed hands.</p>
                    <p className="text-gray-700 leading-relaxed">The Quran itself references Masjid Quba: <em>"A mosque founded on piety from the very first day is more worthy that you should stand therein for prayer." (At-Tawbah: 108)</em> The mosque has been expanded multiple times, most recently by the Saudi government in 2020, and now accommodates thousands of worshippers.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The Great Virtue of Masjid Quba</h2>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                        <p className="text-emerald-900 text-lg italic font-medium leading-relaxed">"Whoever purifies himself in his house then comes to Masjid Quba and prays in it, he will have a reward like that of Umrah."</p>
                        <p className="text-emerald-700 text-sm mt-2 font-bold">— Prophet Muhammad ﷺ (Sunan Ibn Majah, 1412 — Sahih)</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">The Prophet ﷺ himself used to visit Masjid Quba every Saturday, sometimes walking and sometimes riding. This established a Sunnah that pilgrims eagerly follow to this day.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visitor Tips for Masjid Quba</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Perform wudu (ablution) at your hotel before leaving — this maximizes the Umrah-equivalent reward.</li>
                        <li>Perform 2 Rakats of Tahiyyat al-Masjid upon entering.</li>
                        <li>Best time to visit: early morning or after Dhuhr when crowds are lighter.</li>
                        <li>Women have a dedicated prayer hall — spacious and well-maintained.</li>
                        <li>The mosque has a small bookshop and ablution areas; allow 45 minutes for a complete visit.</li>
                    </ul>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">How to Get to Masjid Quba</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {[
                            { mode: '🚗 Private Taxi', detail: '10-15 min from Masjid an-Nabawi. Most comfortable option.' },
                            { mode: '🚶 Walk', detail: '40-50 min via Quba Road. Follow the historic pilgrimage route.' },
                            { mode: '🚌 City Bus', detail: 'Bus 99 operates from near Masjid an-Nabawi to Quba area.' },
                        ].map((m) => (
                            <div key={m.mode} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                <p className="font-black text-gray-800 text-sm mb-1">{m.mode}</p>
                                <p className="text-gray-600 text-xs">{m.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Quba Ziyarat Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Include Masjid Quba in your Madinah Ziyarat tour. We'll take you to all key sites in one comfortable trip.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20for%20Ziyarat%20including%20Masjid%20Quba%20in%20Madinah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Madinah Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
