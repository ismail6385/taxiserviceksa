import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Info, Compass } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Complete AlUla Travel Guide 2026: First-Time Visitor Handbook',
    description: 'The ultimate guide to AlUla, Saudi Arabia. Learn why to visit, how to get there, entry requirements, visitor information, and top highlights for 2026.',
    keywords: ['complete AlUla travel guide 2026', 'AlUla first time visitor handbook', 'why visit AlUla', 'AlUla city guide Saudi Arabia', 'AlUla visitor information'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/complete-alula-travel-guide/' },
    openGraph: { title: 'Complete AlUla Travel Guide 2026: First-Time Visitor Handbook', description: 'Your all-in-one visitor handbook to AlUla — from visa to archaeological highlights.', type: 'article', url: 'https://taxiserviceksa.com/blog/complete-alula-travel-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Why should I visit AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'AlUla is home to Hegra, Saudi Arabia\'s first UNESCO World Heritage site, showcasing 2,000-year-old Nabataean tombs. It offers a stunning blend of deep history, modern art installations (like Maraya), dramatic desert landscapes, and luxury eco-resorts, making it one of the world\'s most unique travel destinations.' } },
        { '@type': 'Question', name: 'Do I need a special permit to visit AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'No special permit is needed to enter the AlUla region. However, you must book individual tickets in advance for specific heritage sites like Hegra, Dadan, and Jabal Ikmah on the official Experience AlUla website or through your tour agency.' } },
        { '@type': 'Question', name: 'What is the closest airport to AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'AlUla International Airport (ULH) is located 25 km southeast of the town center and receives domestic flights from Riyadh, Jeddah, and Dammam, as well as seasonal international flights. Alternatively, visitors often fly to Madinah and hire a private taxi (a 3.5-hour drive).' } },
    ],
};

export default function CompleteAlUlaGuidePage() {
    const highlights = [
        { title: 'Hegra (Mada\'in Salih)', desc: 'The southern capital of the Nabataean kingdom, featuring over 110 remarkably preserved monumental tombs cut into sandstone hills.' },
        { title: 'Elephant Rock (Jabal AlFil)', desc: 'A stunning 52-meter-tall natural monolithic sandstone arch that resembles an elephant, surrounded by cozy desert seating.' },
        { title: 'AlUla Old Town', desc: 'An ancient maze of nearly 900 mudbrick dwellings, occupied from the 12th century until the late 20th century.' },
        { title: 'Maraya Concert Hall', desc: 'The world\'s largest mirror-covered building, reflecting the breathtaking desert canyons of Ashar Valley.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>AlUla Complete Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🌵 Essential Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Complete AlUla Travel Guide:<br /><span className="text-amber-300">First-Time Visitor's Handbook 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Discover AlUla, Saudi Arabia's premier cultural and archaeological masterpiece. From Nabataean tombs to mirror halls, plan your perfect trip.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Why Visit AlUla?</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">AlUla is a place of extraordinary history and natural beauty. Located in northwestern Saudi Arabia, this ancient oasis has served as a crossroads of civilizations for millennia. It is home to Hegra, the country's first UNESCO World Heritage site, which mirrors the famous Petra in Jordan with its rock-cut Nabataean tombs.</p>
                    <p className="text-gray-700 leading-relaxed">But AlUla is not just an open-air museum. Today, it stands as a global hub for art, wellness, and luxury travel, hosting spectacular music festivals in the mirrored Maraya hall, luxury eco-resorts nestled in canyons, and thrilling desert adventures.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Top AlUla Highlights</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((h, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-amber-300 transition-colors">
                                <h3 className="font-bold text-amber-800 text-base mb-2">{h.title}</h3>
                                <p className="text-gray-600 text-sm">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Practical Visitor Information</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>How to get there:</strong> Fly directly into AlUla International Airport (ULH), or fly to Madinah Airport (MED) and hire a private intercity taxi.</li>
                        <li><strong>Currency:</strong> Saudi Riyal (SAR). Credit cards are universally accepted, but carry some cash for old town bazaars.</li>
                        <li><strong>Language:</strong> Arabic is the official language. English is widely spoken in hotels, restaurants, and tourist sites.</li>
                        <li><strong>Tickets:</strong> Book entry tickets for Hegra, Dadan, and Jabal Ikmah in advance via the official <em>experiencealula.com</em> website.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Private Taxi to AlUla</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Traveling to AlUla from Madinah, Jeddah, or Tabuk? Our private intercity taxis offer a direct, comfortable, and scenic ride.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20transfer%20to%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/jeddah-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Jeddah → AlUla <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
