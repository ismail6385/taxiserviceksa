import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Masjid Qiblatain & Seven Mosques Madinah Guide 2026',
    description: 'Complete guide to Masjid al-Qiblatain (Mosque of Two Qiblas) and the Seven Mosques of Madinah. History, visiting tips, and locations for pilgrims.',
    keywords: ['Masjid Qiblatain guide', 'seven mosques Madinah', 'Mosque of Two Qiblas history', 'Al-Ahzab mosques Madinah', 'visit Qiblatain mosque Madinah 2026'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/qiblatain-mosque-seven-mosques-guide/' },
    openGraph: { title: 'Masjid Qiblatain & Seven Mosques Madinah Guide 2026', description: 'Visit the Mosque of Two Qiblas and all Seven Mosques of Madinah with this expert guide.', type: 'article', url: 'https://taxiserviceksa.com/blog/qiblatain-mosque-seven-mosques-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Why is Masjid al-Qiblatain called the Mosque of Two Qiblas?', acceptedAnswer: { '@type': 'Answer', text: 'Masjid al-Qiblatain is called the Mosque of Two Qiblas because it is where, during the 2nd year of Hijra (624 CE), Allah ﷻ commanded the Prophet ﷺ mid-prayer to change the direction of prayer (Qibla) from Jerusalem (Al-Aqsa) to the Kaaba in Makkah. Some companions changed direction during the same prayer, hence the mosque was historically designed with two mihrabs (prayer niches).' } },
        { '@type': 'Question', name: 'What are the Seven Mosques of Madinah?', acceptedAnswer: { '@type': 'Answer', text: 'The Seven Mosques (Al-Masajid al-Sab\'ah) are historically associated with the Battle of the Trench (Ghazwat al-Khandaq). They include: Masjid al-Fath (Victory Mosque), Masjid Salman al-Farsi, Masjid Abu Bakr, Masjid Umar ibn al-Khattab, Masjid Ali ibn Abi Talib, Masjid Fatimah al-Zahra, and Masjid al-Qiblatain (sometimes included in this grouping).' } },
    ],
};

export default function QiblatainSevenMosquesPage() {
    const sevenMosques = [
        { name: 'Masjid al-Fath', sig: 'Site where the Prophet ﷺ made du\'a during the Siege of Madinah. Du\'as were accepted here on three consecutive days.' },
        { name: 'Masjid Salman al-Farsi', sig: 'Built at the spot where Salman al-Farsi (R.A) suggested digging the trench — a strategy that saved Madinah.' },
        { name: 'Masjid Abu Bakr al-Siddiq', sig: 'Marks the position of Abu Bakr (R.A) during the Battle of Khandaq.' },
        { name: 'Masjid Umar ibn al-Khattab', sig: 'Marks the battle position of Umar (R.A), built near the trench site.' },
        { name: 'Masjid Ali ibn Abi Talib', sig: 'Commemorates the position of Ali (R.A) during the trench battle.' },
        { name: 'Masjid Fatimah al-Zahra', sig: 'A small mosque commemorating the Prophet\'s ﷺ daughter, Fatimah (R.A).' },
        { name: 'Masjid al-Qiblatain', sig: 'The famous Mosque of Two Qiblas where the direction of prayer was changed to the Kaaba.' },
    ];
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Qiblatain & Seven Mosques</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🕌 Historic Mosques</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Masjid Qiblatain &<br /><span className="text-emerald-300">Seven Mosques of Madinah Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The historic mosques of the trench battlefield and the mosque where the Qibla changed from Jerusalem to Makkah.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Masjid al-Qiblatain: The Mosque of Two Qiblas</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">In the 2nd year of Hijra (624 CE), during the midday prayer, divine revelation came to the Prophet ﷺ commanding the change of the Qibla from Al-Aqsa mosque in Jerusalem to the Holy Kaaba in Makkah. The Prophet ﷺ immediately pivoted mid-prayer and the companions followed. The mosque has historically featured two mihrabs to commemorate this moment. The modern mosque was renovated extensively and retains its unique historical character.</p>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">The Seven Mosques (Al-Masajid al-Sab'ah)</h2>
                    <p className="text-gray-700 leading-relaxed">These mosques are located in the Al-Ahzab (Khandaq/Trench) area and mark the positions of key companions during the famous siege of Madinah. All are open for prayers and visitation.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {sevenMosques.map((m) => (
                            <div key={m.name} className="border border-gray-200 rounded-xl p-4 hover:border-emerald-300 transition-colors">
                                <h3 className="font-black text-emerald-800 text-sm mb-2">{m.name}</h3>
                                <p className="text-gray-600 text-xs">{m.sig}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">How to Visit All Seven Mosques</h2>
                    <p className="text-gray-700 leading-relaxed">All seven mosques are clustered within a 2 km radius in the Al-Khandaq district, northwest of Masjid an-Nabawi. The most efficient way to visit all of them is to hire a private taxi for half a day, combined with a visit to Masjid Qiblatain which is nearby. Total tour time: approximately 2-3 hours.</p>
                </section>
                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Private Madinah Ziyarat Tour</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Visit Qiblatain, all Seven Mosques, Uhud, Quba and more in a single comfortable private tour.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20Madinah%20Ziyarat%20tour%20including%20Qiblatain%20and%20Seven%20Mosques" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/madinah-ziyarat-places-museums-landmarks/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Full Ziyarat Guide <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
