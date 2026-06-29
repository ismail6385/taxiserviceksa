import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jabal Al-Lawz & Hisma Desert Tabuk: Mountains & Desert Guide 2026',
    description: 'Explore the spectacular highlands of Tabuk. Complete guide to Jabal Al-Lawz snow mountain and the majestic red sands of Hisma Desert.',
    keywords: ['Jabal Al Lawz snow Tabuk 2026', 'Hisma Desert sand dunes', 'Tabuk mountain hiking', 'desert camping Tabuk', 'Jabal Al Lawz petroglyphs'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/jabal-al-lawz-hisma-desert-guide/' },
    openGraph: { title: 'Jabal Al-Lawz & Hisma Desert Tabuk: Mountains & Desert Guide 2026', description: 'Your guide to hiking, camping, and witnessing winter snow in Tabuk\'s highlands.', type: 'article', url: 'https://taxiserviceksa.com/blog/jabal-al-lawz-hisma-desert-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'When does it snow on Jabal Al-Lawz?', acceptedAnswer: { '@type': 'Answer', text: 'Snow typically falls on Jabal Al-Lawz between December and February. Due to its elevation of 2,580 meters, temperatures drop below freezing, drawing thousands of Saudi and international tourists to witness the rare snowy desert landscape.' } },
        { '@type': 'Question', name: 'What is the Hisma Desert famous for?', acceptedAnswer: { '@type': 'Answer', text: 'The Hisma Desert is famous for its brilliant red sand dunes and thousands of bizarrely shaped sandstone rock columns. It is also an ancient historical site, containing thousands of Thamudic and early Arabic inscriptions carved into the rock facades.' } },
    ],
};

export default function TabukMountainsDesertPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Highlands & Desert Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🏔️ Highlands</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Jabal Al-Lawz & Hisma Desert:<br /><span className="text-cyan-300">Tabuk Mountain & Desert Travel Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Experience winter snow in Arabia and camp out among the red sand dunes of the spectacular Hisma Desert.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Jabal Al-Lawz: The Almond Mountain</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Jabal Al-Lawz (meaning "Almond Mountain" in Arabic due to the almond trees that once grew on its slopes) is the highest peak in the Tabuk region, rising 2,580 meters. During the winter, it regularly becomes covered in thick snow, transforming the desert into a spectacular alpine wonderland. Beyond winter sports, the mountain contains significant archaeological interest, including ancient petroglyphs of horned cattle and inscriptions dating back thousands of years.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Hisma Desert: Red Sands & Inscriptions</h2>
                    <p className="text-gray-700 leading-relaxed">Bordering Jordan, the Hisma Desert is a continuation of the famous Wadi Rum desert landscape. It features deep red sand basins and massive rock pillars. For hikers and history buffs, the rocks of Hisma serve as an open-air historical archive, covered in ancient Thamudic rock art, early Nabataean messages, and early Islamic Kufic script carvings.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Camping & Off-Road Tips</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Desert Camping:</strong> Hisma is an incredible spot for wild camping under the stars. Bring warm thermal sleeping bags, fire wood, and plenty of lighting.</li>
                        <li><strong>4x4 is Mandatory:</strong> The deep sand tracks in Hisma and the steep mountain passes of Jabal Al-Lawz require a high-clearance 4x4 vehicle.</li>
                        <li><strong>Police checkpoints:</strong> Ensure you carry your passport or Iqama, as there are border guard checkpoints throughout the mountain region.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private 4x4 Tour Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Traveling to Jabal Al-Lawz or Hisma? Pre-book one of our premium SUV taxis with a local driver who knows the terrain inside out.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%204x4%20taxi%20for%20Jabal%20Al-Lawz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-tabuk/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
