import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen, Info } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Masjid an-Nabawi Complete Guide 2026: History, Green Dome & Visit Tips',
    description: 'Complete guide to Masjid an-Nabawi in Madinah. History of the Prophet\'s Mosque, the Green Dome, Rawdah al-Sharif, visiting hours, and what to do inside.',
    keywords: ['Masjid an-Nabawi guide 2026', 'history of Masjid an-Nabawi', 'Green Dome Madinah', 'Prophets mosque visit tips', 'Rawdah al-Sharif Madinah'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/masjid-an-nabawi-complete-guide-history/' },
    openGraph: { title: 'Masjid an-Nabawi Complete Guide 2026', description: 'Everything you need to know about the Prophet\'s Mosque in Madinah.', type: 'article', url: 'https://taxiserviceksa.com/blog/masjid-an-nabawi-complete-guide-history/' },
};

const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Masjid an-Nabawi Complete Guide 2026: History, Green Dome & Visit Tips',
    author: { '@type': 'Organization', name: 'Taxi Service KSA' },
    publisher: { '@type': 'Organization', name: 'Taxi Service KSA', logo: { '@type': 'ImageObject', url: 'https://taxiserviceksa.com/logo.png' } },
    datePublished: '2026-01-01', dateModified: '2026-06-01',
    description: 'Complete guide to Masjid an-Nabawi — the Prophet\'s Mosque in Madinah, Saudi Arabia.',
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'When was Masjid an-Nabawi built?', acceptedAnswer: { '@type': 'Answer', text: 'Masjid an-Nabawi was founded by the Prophet Muhammad ﷺ in 622 CE (1 AH) shortly after the Hijra (migration) to Madinah. It was built on a plot of land adjacent to the Prophet\'s home. Over centuries, it has been expanded by various Islamic caliphs and dynasties, most recently by the Saudi government which made it one of the world\'s largest mosques.' } },
        { '@type': 'Question', name: 'Why is the Green Dome significant?', acceptedAnswer: { '@type': 'Answer', text: 'The Green Dome (Al-Qubbah Al-Khadra) stands above the burial chamber of the Prophet Muhammad ﷺ. It was first built as a wooden dome in 1279 CE, then rebuilt in stone, and painted green in 1837 CE during Ottoman rule. It serves as a universally recognized symbol of Islam and Madinah.' } },
        { '@type': 'Question', name: 'Can non-Muslims enter Masjid an-Nabawi?', acceptedAnswer: { '@type': 'Answer', text: 'No. Like the Grand Mosque in Makkah, Masjid an-Nabawi is exclusively accessible to Muslims. The entire Madinah Haram area is restricted to Muslim visitors only.' } },
    ],
};

export default function MasjidNabawiGuidePage() {
    const fastFacts = [
        { label: 'Founded', value: '622 CE (1 AH)' },
        { label: 'Location', value: 'Madinah, Saudi Arabia' },
        { label: 'Capacity', value: '1 million+ worshippers' },
        { label: 'Area', value: '400,000 m² (current)' },
        { label: 'Green Dome Color', value: 'Painted green since 1837' },
        { label: 'Opening Hours', value: 'Open 24 hours for prayers' },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Masjid an-Nabawi Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Sacred Site</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">⏱ 8 min read</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Masjid an-Nabawi<br /><span className="text-emerald-300">Complete Guide: History & Visit Tips 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The Prophet's Mosque is the second holiest site in Islam. Here is everything you need to know before you visit.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {fastFacts.map((f) => (
                            <div key={f.label} className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center">
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-1">{f.label}</p>
                                <p className="text-sm font-black text-emerald-900">{f.value}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">History of Masjid an-Nabawi</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">When the Prophet Muhammad ﷺ arrived in Madinah in 622 CE after the Hijra, his camel Qaswa knelt at a plot of land owned by two orphan boys. The Prophet ﷺ purchased this land and began constructing the mosque with his own hands alongside his companions. The original structure was simple — palm trunks as pillars and palm fronds as a roof — yet it became the center of the emerging Islamic civilization.</p>
                    <p className="text-gray-700 leading-relaxed">Over centuries, caliphs including Umar ibn al-Khattab, Uthman ibn Affan, and later the Umayyad, Abbasid, Mamluk, and Ottoman rulers each expanded and beautified the mosque. The greatest modern expansions were initiated by the Saudi government in 1955 and continuing into the 21st century, transforming it into a mosque capable of accommodating over a million worshippers.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">The Green Dome (Al-Qubbah Al-Khadra)</h2>
                    <p className="text-gray-700 leading-relaxed">The iconic green dome rises above the burial chamber of the Prophet ﷺ, his two companions Abu Bakr al-Siddiq (R.A) and Umar ibn al-Khattab (R.A) are also buried nearby. The dome was originally built by the Mamluk Sultan Qalawun in 1279 CE. It was painted green in the Ottoman era in 1837 CE, a color it has retained ever since. Seeing the green dome for the first time is a deeply emotional moment for most pilgrims.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">What to Do Inside Masjid an-Nabawi</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Offer Salah (prayers) in the main prayer hall — one prayer here equals 1,000 prayers elsewhere.</li>
                        <li>Visit the Rawdah al-Sharif — book via the Nusuk app for a time slot.</li>
                        <li>Send Salawat (blessings) on the Prophet ﷺ near the burial chamber.</li>
                        <li>Visit Jannat al-Baqi cemetery through the mosque's eastern gate.</li>
                        <li>Attend the five daily congregational prayers led by world-class imams.</li>
                    </ul>
                    <Link href="/blog/how-to-book-visit-rawdah-madinah/" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:underline">How to Book Rawdah Visit → <ArrowRight className="w-4 h-4" /></Link>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visitor Etiquette & Rules</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Dress modestly — full modest clothing for men; abaya/jilbab + hijab for women.</li>
                        <li>Keep voices very low, especially near the Prophet's ﷺ burial area.</li>
                        <li>Photography is only allowed in outdoor courtyards, not in main prayer halls.</li>
                        <li>Enter with right foot first and recite the du'a for entering the mosque.</li>
                        <li>Follow instructions from security personnel without hesitation.</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Arrive at Madinah in Comfort</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Book a direct private transfer from Makkah, Jeddah, or Madinah Airport to your hotel near Masjid an-Nabawi.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20to%20Madinah%20near%20Masjid%20an-Nabawi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/makkah-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Makkah → Madinah <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
