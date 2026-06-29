import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Landmark } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Top Places to Visit & Things to Do in Tabuk 2026',
    description: 'Explore the best attractions and sights in Tabuk, Saudi Arabia. Detailed guide to historical ruins, pristine beaches, and canyon hikes.',
    keywords: ['top places to visit in Tabuk', 'things to do in Tabuk 2026', 'Tabuk attractions guide', 'Tabuk sightseeing', 'Tabuk tourism'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/top-places-visit-things-do-tabuk/' },
    openGraph: { title: 'Top Places to Visit & Things to Do in Tabuk 2026', description: 'Plan your Tabuk sightseeing with our complete directory of historical, coastal, and natural highlights.', type: 'article', url: 'https://taxiserviceksa.com/blog/top-places-visit-things-do-tabuk/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the most famous landmark in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'Wadi Al-Disah is the most famous natural landmark in the Tabuk province. For historical sights, Tabuk Castle and the restored Hejaz Railway Station inside Tabuk city are the most popular highlights.' } },
        { '@type': 'Question', name: 'Can I visit the NEOM construction site from Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'While NEOM is actively being built in the northwest part of Tabuk Province, the actual construction zones (like The Line, Trojena, Oxagon) are currently closed to general tourists. You can, however, visit the coastal town of Sharma and surrounding public beach areas.' } },
    ],
};

export default function TabukAttractionsPage() {
    const places = [
        { name: 'Wadi Al-Disah', type: '🏜️ Sandstone Canyon', desc: 'A dramatic gorge lined with tall sandstone columns, dynamic freshwater springs, and wild palm groves.', link: '/blog/wadi-al-disah-valley-visit-guide/' },
        { name: 'Tabuk Castle & Hejaz Railway', type: '🏰 Historic Museum', desc: 'Step back to the Ottoman Empire and the famous railway lines connecting Damascus to Medina.', link: '/blog/tabuk-castle-railway-museum-guide/' },
        { name: 'Jabal Al-Lawz', type: '⛰️ Snow Mountain', desc: 'The "Mountain of Almonds," famous for winter snow sports and ancient rock art carvings.', link: '/blog/jabal-al-lawz-hisma-desert-guide/' },
        { name: 'Sharma & Umluj Beaches', type: '🏖️ Red Sea Coastline', desc: 'Stunning white sands, clear waters, and boat cruises. Often called the Maldives of Saudi Arabia.', link: '/blog/tabuk-red-sea-beaches-magna-tayyib-ism/' },
        { name: 'Tayyib Al-Ism', type: '⛰️ Natural Valley Split', desc: 'A narrow granite canyon opening directly onto the Gulf of Aqaba, home to clear streams and palm trees.', link: '/blog/tabuk-red-sea-beaches-magna-tayyib-ism/' },
        { name: 'Hisma Desert', type: '🏜️ Sandstone Formations', desc: 'Stunning red desert sand and rock arches with historical Nabataean inscriptions.', link: '/blog/jabal-al-lawz-hisma-desert-guide/' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Tabuk Attractions</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🗺️ Attractions</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Top Places & Things to Do<br /><span className="text-cyan-300">in Tabuk 2026: Sightseeing Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Explore the best landmarks, historical sites, and natural escapes in northwestern Saudi Arabia.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Landmark className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Must-See Tabuk Sights</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Tabuk is filled with adventure and history. Here is your ultimate checklist of the top landmarks to visit during your trip:</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {places.map((p, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-cyan-300 transition-colors">
                                <span className="text-xs font-black uppercase tracking-widest text-cyan-600">{p.type}</span>
                                <h3 className="font-bold text-gray-900 text-lg mt-1 mb-2">{p.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{p.desc}</p>
                                <Link href={p.link} className="inline-flex items-center gap-1 text-cyan-700 text-xs font-bold hover:underline">Read Full Guide <ArrowRight className="w-3.5 h-3.5" /></Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Tabuk Sightseeing Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Ready to see all these amazing sights? Avoid driving stress by booking a private daily tour taxi with local drivers.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20for%20a%20sightseeing%20tour%20in%20Tabuk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/tabuk-travel-itinerary-planning/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Explore Itineraries <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
