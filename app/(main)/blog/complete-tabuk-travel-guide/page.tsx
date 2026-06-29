import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Compass } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Complete Tabuk Travel Guide 2026: First-Time Visitor Handbook',
    description: 'The ultimate guide to Tabuk, Saudi Arabia. Discover why to visit, entry tips, attractions overview, and practical visitor information for first-timers in 2026.',
    keywords: ['complete Tabuk travel guide 2026', 'Tabuk first time visitor guide', 'why visit Tabuk Saudi Arabia', 'Tabuk city guide', 'Tabuk visitor information'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/complete-tabuk-travel-guide/' },
    openGraph: { title: 'Complete Tabuk Travel Guide 2026: First-Time Visitor Handbook', description: 'Your all-in-one handbook to Tabuk — from Red Sea beaches to snow-capped mountains.', type: 'article', url: 'https://taxiserviceksa.com/blog/complete-tabuk-travel-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Why should I visit Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'Tabuk is one of Saudi Arabia\'s most geographically diverse regions. It offers pristine Red Sea beaches at Sharma and Haql, dramatic desert canyons at Wadi Al-Disah, snow-capped peaks at Jabal Al-Lawz in winter, ancient Nabataean ruins, and proximity to NEOM — the futuristic mega-city under construction.' } },
        { '@type': 'Question', name: 'Is Tabuk safe for tourists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Tabuk is very safe. Crime rates are extremely low, and the region is well-policed. The main safety concerns are desert driving conditions (sand drifts, unmarked roads) and extreme summer heat.' } },
        { '@type': 'Question', name: 'How do I get to Tabuk?', acceptedAnswer: { '@type': 'Answer', text: 'Tabuk has its own international airport (TUU) with direct flights from Riyadh, Jeddah, and Dammam. Alternatively, you can hire a private intercity taxi from Madinah (5.5 hours), Jeddah (8 hours), or AlUla (3.5 hours).' } },
    ],
};

export default function CompleteTabukGuidePage() {
    const highlights = [
        { title: '🏖️ Red Sea Coastline', desc: 'Crystal-clear turquoise waters at Sharma, Haql, and Umluj — often called the "Maldives of Saudi Arabia" — with untouched coral reefs and white sand beaches.' },
        { title: '🏜️ Wadi Al-Disah', desc: 'A stunning palm-filled canyon with soaring red sandstone cliffs, natural springs, and hiking trails — one of the most photogenic locations in the Middle East.' },
        { title: '⛰️ Jabal Al-Lawz', desc: 'Saudi Arabia\'s legendary snow mountain, rising 2,580m above sea level. In winter, it transforms into a rare Arabian snowscape.' },
        { title: '🏰 Tabuk Castle', desc: 'A historic Ottoman-era fortress dating back to 1559 CE, built to protect pilgrims on the Hajj route from Damascus to Makkah.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Tabuk Complete Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">🌊 Essential Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Complete Tabuk Travel Guide:<br /><span className="text-cyan-300">First-Time Visitor Handbook 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">From Red Sea beaches to snow-capped mountains — Tabuk is Saudi Arabia's most geographically stunning region. Plan your perfect trip.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><Compass className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Why Visit Tabuk?</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Tabuk Province, located in northwestern Saudi Arabia, is a vast region stretching from the Jordanian border in the north to the Red Sea coastline in the west. It offers an incredible variety of landscapes: pristine beaches, deep desert canyons, volcanic lava fields, ancient ruins, and — in winter — actual snowfall on Jabal Al-Lawz.</p>
                    <p className="text-gray-700 leading-relaxed">As Saudi Arabia rapidly opens to international tourism, Tabuk is emerging as a must-visit adventure destination, combining outdoor thrills with rich historical heritage and proximity to the futuristic NEOM project.</p>
                </section>
                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Top Tabuk Highlights</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((h, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-cyan-300 transition-colors">
                                <h3 className="font-bold text-cyan-800 text-base mb-2">{h.title}</h3>
                                <p className="text-gray-600 text-sm">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Practical Visitor Info</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Getting there:</strong> Fly into Tabuk Airport (TUU) or hire a private intercity taxi from Madinah, Jeddah, or AlUla.</li>
                        <li><strong>Currency:</strong> Saudi Riyal (SAR). Cards widely accepted; carry cash for rural areas and roadside cafes.</li>
                        <li><strong>Language:</strong> Arabic is the main language; English is spoken in hotels and tourist sites.</li>
                        <li><strong>Getting around:</strong> A 4x4 rental or private taxi driver is essential — Tabuk's attractions are spread across vast distances.</li>
                    </ul>
                </section>
                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi in Tabuk</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Explore Tabuk region comfortably with our experienced private drivers who know every canyon, beach road, and mountain pass.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20in%20Tabuk%20region" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/tabuk-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Tabuk → AlUla <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
