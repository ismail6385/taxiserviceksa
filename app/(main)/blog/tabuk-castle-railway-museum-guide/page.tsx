import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tabuk Castle & Hejaz Railway Museum: Heritage Guide 2026',
    description: 'Explore the rich history of Tabuk city. Complete visitor guide to Tabuk Castle, Hejaz Railway Station Museum, and other historical landmarks.',
    keywords: ['Tabuk Castle visitor guide 2026', 'Hejaz Railway Station Museum Tabuk', 'historical places in Tabuk', 'Tabuk museums guide', 'Saudi Arabia history'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/tabuk-castle-railway-museum-guide/' },
    openGraph: { title: 'Tabuk Castle & Hejaz Railway Museum: Heritage Guide 2026', description: 'Step back in time to the Ottoman era and Hejaz railway history in Tabuk city.', type: 'article', url: 'https://taxiserviceksa.com/blog/tabuk-castle-railway-museum-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How old is Tabuk Castle?', acceptedAnswer: { '@type': 'Answer', text: 'Tabuk Castle dates back to 1559 CE, built during the reign of the Ottoman Sultan Suleiman the Magnificent. It was restored in 1653 CE and again recently to serve as an archaeological museum open to the public.' } },
        { '@type': 'Question', name: 'Is there an entry fee for the Hejaz Railway Museum in Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'No. Visiting the restored Hejaz Railway Station Museum grounds in Tabuk is generally free of charge. You can see historical locomotives, railway tracks, and old telegraph rooms dating back to the early 20th century.' } },
    ],
};

export default function TabukCastleRailwayPage() {
    const highlights = [
        { name: 'Ottoman Tabuk Castle', period: '1559 CE', desc: 'A double-story stone fortress featuring a courtyard, historical watchtowers, a small mosque, and well-preserved chambers displaying maps, artifacts, and Hajj route details.' },
        { name: 'Hejaz Railway Station Museum', period: '1906 CE', desc: 'A beautifully restored railway complex built to connect Damascus to Medina. Features original steam engines, passenger cars, tracks, and museum galleries detailing the construction of the railway.' },
        { name: 'Ain Sugar (Sugar Spring)', period: 'Ancient Springs', desc: 'A historic natural spring mentioned in Islamic history during the Battle of Tabuk, located near the castle grounds.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Castle & Railway Museum</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🏰 Heritage</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Tabuk Castle & Hejaz Railway:<br /><span className="text-cyan-300">Complete Historical Visitor Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Discover the historical core of Tabuk city. From Ottoman castles protecting Hajj pilgrims to restored steam trains of the early 20th century.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Historical Core of Tabuk</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Before Tabuk became a modern administrative capital and gateway to the futuristic NEOM project, it was a vital rest station for trade caravans and religious pilgrims traveling from Damascus to the holy cities of Medina and Makkah. The city center preserves these eras beautifully through its architecture and museum collections.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Detailed Heritage Landmarks</h2>
                    <div className="grid gap-6">
                        {highlights.map((h, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-cyan-300 transition-colors text-gray-700">
                                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">{h.period}</span>
                                <h3 className="font-bold text-gray-900 text-lg mt-3 mb-2">{h.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visitor Tips & Hours</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Castle Entry:</strong> Tabuk Castle is open from 8:00 AM to 8:00 PM (closed mid-afternoon on Fridays). Entry is cheap (approx. SAR 10-20).</li>
                        <li><strong>Railway Museum:</strong> The museum complex is open daily. Early mornings and late afternoons are the best times to walk around the outdoor train platforms without direct sun.</li>
                        <li><strong>Location:</strong> Located in the older, central market district of Tabuk city, easily accessible by taxi.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Historical Tour Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Want to see all the historical sights in Tabuk city? Book a private city transfer and enjoy a stress-free tour.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20historical%20sites%20in%20Tabuk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-tabuk/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
