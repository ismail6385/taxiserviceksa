import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Landmark } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Top Places to Visit & Things to Do in AlUla 2026',
    description: 'The ultimate sightseeing guide to AlUla, Saudi Arabia. Explore UNESCO sites, historical spots, natural wonders, and modern art installations.',
    keywords: ['top places to visit in AlUla', 'things to do in AlUla 2026', 'AlUla must-visit attractions', 'AlUla historical places', 'AlUla UNESCO heritage sites'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/top-places-visit-things-do-alula/' },
    openGraph: { title: 'Top Places to Visit & Things to Do in AlUla 2026', description: 'Your ultimate travel guide to AlUla\'s historical landmarks, nature reserves, and art galleries.', type: 'article', url: 'https://taxiserviceksa.com/blog/top-places-visit-things-do-alula/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the number one thing to do in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Visiting the ancient Nabataean tombs of Hegra (Mada\'in Salih) is the number one attraction in AlUla. It is a UNESCO World Heritage site and offers a preserved window into 1st-century BCE architecture.' } },
        { '@type': 'Question', name: 'Are the historic sites in AlUla open daily?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, most major sites like Hegra, Dadan, Jabal Ikmah, and AlUla Old Town are open daily. However, opening hours vary by season and tickets must be booked online in advance.' } },
    ],
};

export default function AlUlaAttractionsPage() {
    const places = [
        { name: 'Hegra (Mada\'in Salih)', type: 'UNESCO Heritage Site', desc: 'Marvel at 111 monumental tombs carved directly into sandstone formations, including the famous Tomb of Lihyan son of Kuza.', link: '/blog/hegra-madain-salih-visitor-guide/' },
        { name: 'Elephant Rock (Jabal AlFil)', type: 'Natural Rock Landmark', desc: 'AlUla\'s most iconic geological wonder. Sit at the sunken outdoor lounges and enjoy tea as the monolith glows at sunset.', link: '/blog/elephant-rock-alula-natural-landmarks/' },
        { name: 'AlUla Old Town', type: 'Historical Town', desc: 'Wander through a labyrinth of 900 mudbrick houses, watchtowers, and traditional markets dating back to the 12th century.', link: '/blog/alula-old-town-dadan-jabal-ikmah/' },
        { name: 'Maraya Concert Hall', type: 'Architectural Wonder', desc: 'A giant mirrored cube located in Ashar Valley. It holds the Guinness World Record for the largest mirrored building in the world.', link: '/blog/maraya-concert-hall-art-culture-alula/' },
        { name: 'Dadan & Jabal Ikmah', type: 'Archaeological Sites', desc: 'Discover the capital of the Dadan and Lihyan kingdoms, and view hundreds of ancient stone-cut inscriptions in an open-air library.', link: '/blog/alula-old-town-dadan-jabal-ikmah/' },
        { name: 'AlUla Oasis Trail', type: 'Scenic Palm Walk', desc: 'A peaceful, shaded 3 km walk through towering date palms, citrus trees, and historic mud brick walls.', link: '/blog/alula-oasis-heritage-trail-picnic-spots/' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>AlUla Sights</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🏛️ Monuments</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Top Places & Things to Do<br /><span className="text-amber-300">in AlUla 2026: Sightseeing Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Explore the best attractions, archaeological marvels, and dramatic nature trails AlUla has to offer.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Landmark className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Must-Visit AlUla Sights</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">AlUla features a rich catalog of locations spanning ancient history, stunning geology, and contemporary architectural masterpieces. Here are the top sights to add to your list:</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        {places.map((p, i) => (
                            <div key={i} className="border border-gray-200 p-5 rounded-2xl hover:border-amber-300 transition-colors">
                                <span className="text-xs font-black uppercase tracking-widest text-amber-600">{p.type}</span>
                                <h3 className="font-bold text-gray-900 text-lg mt-1 mb-2">{p.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{p.desc}</p>
                                <Link href={p.link} className="inline-flex items-center gap-1 text-amber-700 text-xs font-bold hover:underline">Read Full Guide <ArrowRight className="w-3.5 h-3.5" /></Link>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your AlUla Sightseeing Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Ready to see all these amazing sights? Avoid transit stress by booking a private daily tour taxi with local drivers.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20for%20a%20sightseeing%20tour%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/madinah-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Madinah ⇄ AlUla <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
