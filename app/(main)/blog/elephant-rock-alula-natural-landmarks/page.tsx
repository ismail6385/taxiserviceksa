import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Elephant Rock (Jabal AlFil) AlUla: Complete Visit Guide 2026',
    description: 'Detailed guide to visiting Elephant Rock (Jabal AlFil) in AlUla. Learn about geological facts, best sunset times, seating, dining options, and entry details.',
    keywords: ['Elephant Rock AlUla guide 2026', 'Jabal AlFil rock formation', 'AlUla natural landmarks', 'Elephant rock sunset cafe', 'free things to do in AlUla'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/elephant-rock-alula-natural-landmarks/' },
    openGraph: { title: 'Elephant Rock (Jabal AlFil) AlUla: Complete Visit Guide 2026', description: 'Explore Jabal AlFil — AlUla\'s spectacular elephant-shaped sandstone monolith with this complete guide.', type: 'article', url: 'https://taxiserviceksa.com/blog/elephant-rock-alula-natural-landmarks/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Is there an entry fee for Elephant Rock in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'No. Visiting Elephant Rock (Jabal AlFil) is completely free of charge. You do not need to purchase tickets in advance, unlike Hegra or Dadan. However, you may pay for drinks and food at the surrounding cafes.' } },
        { '@type': 'Question', name: 'What is the best time of day to visit Elephant Rock?', acceptedAnswer: { '@type': 'Answer', text: 'The absolute best time to visit is in the late afternoon, about 1 hour before sunset. The sandstone rock glows in brilliant hues of orange, red, and gold, and the surrounding outdoor cafes light up fire pits as the desert temperature drops.' } },
        { '@type': 'Question', name: 'Are there restaurants or cafes at Elephant Rock?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The site features multiple popular dining outlets, including the famous SALT burger joint and local specialty coffee carts. Seating is designed as cozy sunken couches directly in the sand.' } },
    ],
};

export default function ElephantRockGuidePage() {
    const formations = [
        { name: 'Elephant Rock (Jabal AlFil)', desc: 'A 52-meter-tall monolithic sandstone structure carved by millions of years of wind and water erosion, resembling an elephant with a long trunk.' },
        { name: 'Face Rock (Jabal AlWajh)', desc: 'A dramatic natural formation that resembles a human face looking sideways into the desert skyline, located near Hegra.' },
        { name: 'The Jar Rock', desc: 'A hollowed-out rock resembling a traditional water jar, standing tall in AlUla\'s canyons.' },
        { name: 'Rainbow Rock', desc: 'A stunning natural arch shape that spans across sandstone canyons, popular for photography.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Elephant Rock Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🐘 Geology</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Elephant Rock (Jabal AlFil):<br /><span className="text-amber-300">Complete Visit Guide & Rock Formations</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Discover AlUla's most iconic geological masterpiece. Cozy sand-sunken cafes, dramatic sunsets, and natural rock arches.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Visiting Elephant Rock</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Elephant Rock (known locally as Jabal AlFil) is a towering monolithic arch carved by nature. Standing 52 meters high, its shape is remarkably similar to an elephant with its trunk resting on the desert floor. Today, it serves as the ultimate evening lounge spot in AlUla. The sand surrounding the rock is filled with cozy sunken seating circles complete with fire pits, allowing visitors to relax under the stars.</p>
                    <p className="text-gray-700 leading-relaxed">There is no entry fee or booking ticket required to visit. Simply drive up, grab a couch, order a warm cardamom tea or a burger from SALT, and enjoy the magical desert scenery.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Other Famous Rock Formations in AlUla</h2>
                    <p className="text-gray-700 leading-relaxed">AlUla\'s unique sandstone geology has created dozens of natural landmarks. Don\'t miss these other iconic rock shapes:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {formations.map((f, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                                <h3 className="font-bold text-amber-800 text-sm mb-2">{f.name}</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Visiting Tips for Jabal AlFil</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Timings:</strong> The site officially opens around 4:00 PM and runs late into the night. It is closed during hot midday hours.</li>
                        <li><strong>What to wear:</strong> Wear comfortable shoes (you will be walking on loose sand) and pack a heavy sweater or jacket — winter desert nights are surprisingly cold.</li>
                        <li><strong>Location:</strong> Located approximately 11 km northeast of AlUla town center (a 15-minute taxi ride).</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Elephant Rock Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Relax and enjoy your evening drinks. Let our private taxi drivers handle your transport to and from Elephant Rock safely.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20ride%20to%20Elephant%20Rock%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
