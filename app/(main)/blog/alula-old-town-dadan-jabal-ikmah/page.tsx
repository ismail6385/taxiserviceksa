import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Old Town, Dadan & Jabal Ikmah: Heritage Guide 2026',
    description: 'Explore the historical core of AlUla. Complete guide to AlUla Old Town, the ancient tombs of Dadan, and the rock inscriptions of Jabal Ikmah.',
    keywords: ['AlUla Old Town guide 2026', 'Dadan archaeological site AlUla', 'Jabal Ikmah inscriptions', 'ancient history of AlUla', 'Lihyanite kingdom tombs'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-old-town-dadan-jabal-ikmah/' },
    openGraph: { title: 'AlUla Old Town, Dadan & Jabal Ikmah: Heritage Guide 2026', description: 'Your guide to exploring AlUla Old Town, Dadan ruins, and the open-air inscriptions library at Jabal Ikmah.', type: 'article', url: 'https://taxiserviceksa.com/blog/alula-old-town-dadan-jabal-ikmah/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is Jabal Ikmah in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Jabal Ikmah is a stunning desert canyon in AlUla known as an "open-air library." It features hundreds of rock-cut inscriptions in ancient languages like Dadanitic, Safaitic, Thamudic, and Minaic, documenting laws, religious rituals, and personal messages from civilizations dating back to the 1st millennium BCE.' } },
        { '@type': 'Question', name: 'Can you visit AlUla Old Town without a guide?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, visitors can walk through the modern, active street parts of AlUla Old Town (including its markets and cafes in Al-Jadidah) freely without a ticket. However, to access the preserved, fragile mudbrick ruins of the old town fort, you must purchase a ticket for an official guided tour.' } },
        { '@type': 'Question', name: 'What were the kingdoms of Dadan and Lihyan?', acceptedAnswer: { '@type': 'Answer', text: 'Dadan and Lihyan were powerful ancient kingdoms that ruled the region before the arrival of the Nabataeans. The Dadan archaeological site features the ruins of their capital city, stone houses, and towering tombs carved into cliff faces, including the famous Lion Tombs.' } },
    ],
};

export default function AlUlaOldTownDadanPage() {
    const highlights = [
        { name: 'AlUla Old Town Ruins', period: '12th Century CE', desc: 'A dense labyrinth of nearly 900 mudbrick houses and stone watchtowers built to defend the vital incense trade route. It was inhabited until the 1980s.' },
        { name: 'Dadan (Ancient Capital)', period: '9th - 2nd Century BCE', desc: 'The sophisticated stone-cut city of the Dadanite and Lihyanite kingdoms, famous for its deep square tombs carved high into rock faces, adorned with lions symbolizing royal power.' },
        { name: 'Jabal Ikmah', period: '1st Millennium BCE', desc: 'A sheer canyon covered in ancient carvings. It represents the highest concentration of Dadanitic inscriptions in the world, offering vital clues about pre-Islamic Saudi Arabia.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Old Town & Archaeology</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">📜 History</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">AlUla Old Town, Dadan<br /><span className="text-amber-300">& Jabal Ikmah Archaeology Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Explore the ancient heart of AlUla. From mudbrick townhouses and royal lion tombs to the open-air inscriptions library of Jabal Ikmah.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Historical Core of AlUla</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">While Hegra captures the grandeur of the Nabataeans, AlUla's valley hides a deeper history. For centuries, the mudbrick village of Old Town and the stone ruins of Dadan served as the primary centers of population and commerce. Jabal Ikmah, located nearby in a quiet canyon, recorded the religious laws, offerings, and personal stories of these early kingdoms in stone.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">The Heritage Sites Detailed</h2>
                    <div className="grid gap-6">
                        {highlights.map((h, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-amber-300 transition-colors">
                                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">{h.period}</span>
                                <h3 className="font-bold text-gray-900 text-lg mt-3 mb-2">{h.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visitor Tips & Tickets</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Dadan and Jabal Ikmah are usually toured together in a single ticket (starts at **SAR 95**).</li>
                        <li>Guided tours of AlUla Old Town Ruins last about 90 minutes and must be pre-booked.</li>
                        <li>The Old Town Outdoor Market (Al-Jadidah) is fully open to the public without tickets, featuring modern craft shops, art installations, and upscale restaurants.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Hire an AlUla Private Tour Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Reach Old Town, Dadan, and Jabal Ikmah comfortably. Pre-book your taxi to drop you at the visitor centers.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20AlUla%20Old%20Town%20and%20archaeological%20sites" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
