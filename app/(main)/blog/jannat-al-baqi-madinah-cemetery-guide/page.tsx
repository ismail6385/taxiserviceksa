import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jannat al-Baqi Cemetery Madinah: Guide to the Sacred Graveyard 2026',
    description: 'Complete guide to Jannat al-Baqi cemetery in Madinah. Who is buried there, visiting hours, etiquette, and the significance of this sacred graveyard near Masjid an-Nabawi.',
    keywords: ['Jannat al-Baqi guide', 'Madinah cemetery visit', 'who is buried in Jannat al-Baqi', 'Baqi cemetery visiting hours', 'Al-Baqi Madinah pilgrimage'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/jannat-al-baqi-madinah-cemetery-guide/' },
    openGraph: { title: 'Jannat al-Baqi Cemetery Madinah Guide 2026', description: 'The sacred graveyard of Madinah — who is buried there, how to visit, and what to recite.', type: 'article', url: 'https://taxiserviceksa.com/blog/jannat-al-baqi-madinah-cemetery-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Who is buried in Jannat al-Baqi?', acceptedAnswer: { '@type': 'Answer', text: 'Jannat al-Baqi contains the graves of many of the Prophet\'s ﷺ closest family and companions including: his wife Khadijah (buried in Makkah), his daughters Ruqayyah, Umm Kulthum, and Zainab, his son Ibrahim, his grandson Hasan ibn Ali, his wives (Mothers of the Believers), and thousands of companions (Sahabah). It is estimated to contain over 10,000 graves.' } },
        { '@type': 'Question', name: 'Can women visit Jannat al-Baqi?', acceptedAnswer: { '@type': 'Answer', text: 'There is scholarly difference of opinion on this. Currently, during permitted times, both men and women may enter the cemetery in Madinah. Women must observe full Islamic dress code. The cemetery is open after Fajr and Asr prayers typically.' } },
    ],
};

export default function JannatAlBaqiGuidePage() {
    const notables = [
        'Uthman ibn Affan (R.A) — 3rd Caliph of Islam',
        'Hasan ibn Ali (R.A) — grandson of the Prophet ﷺ',
        'Ibrahim ibn Muhammad — infant son of the Prophet ﷺ',
        'Wives of the Prophet ﷺ (Mothers of the Believers)',
        'Daughters of the Prophet ﷺ: Ruqayyah, Umm Kulthum, Zainab',
        'Aqeel ibn Abi Talib (R.A)',
        'Abdullah ibn Umar (R.A)',
        'Thousands of Sahabah (companions)',
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Jannat al-Baqi Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🌿 Sacred Cemetery</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Jannat al-Baqi Madinah:<br /><span className="text-emerald-300">Complete Cemetery Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The Garden of Paradise — the sacred graveyard adjacent to Masjid an-Nabawi where the Prophet's ﷺ family and thousands of companions rest.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">About Jannat al-Baqi</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Jannat al-Baqi (جنة البقيع) — meaning the Garden of the Baqi — is the principal cemetery of Madinah, located directly adjacent to the eastern side of Masjid an-Nabawi. It is the most sacred cemetery in Islam after Jannat al-Mu'alla in Makkah. The Prophet ﷺ regularly visited this cemetery to make du'a for its inhabitants and instructed his companions to do so as well.</p>
                    <p className="text-gray-700 leading-relaxed">The Prophet ﷺ said regarding visiting graves: "I had prohibited you from visiting graves, but now visit them, for they remind you of the Hereafter." (Sahih Muslim)</p>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Notable Companions Buried in Al-Baqi</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {notables.map((n, i) => (
                            <div key={i} className="flex items-start gap-2 border border-gray-200 rounded-xl p-3">
                                <span className="text-emerald-500 text-xs mt-0.5">▸</span>
                                <span className="text-gray-700 text-sm">{n}</span>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visiting Hours & Rules</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Open times:</strong> After Fajr prayer until sunrise, and after Asr prayer. Times may vary — check with mosque staff.</li>
                        <li>Enter through the eastern gate of Masjid an-Nabawi — the cemetery gate is clearly marked.</li>
                        <li>Recite the du'a for visiting graves: <em>"Peace be upon you, O inhabitants of the graves..."</em></li>
                        <li>Do not walk on or over graves. Follow the designated paths.</li>
                        <li>No loud talking, no photography inside the cemetery.</li>
                        <li>Keep visits brief and spiritual — this is a place of reflection, not sightseeing.</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Travel to Madinah with Ease</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Book your private transfer from Makkah, Jeddah, or Madinah Airport directly to your hotel near Al-Baqi.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20to%20Madinah%20for%20Ziyarat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/makkah-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Makkah → Madinah <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
