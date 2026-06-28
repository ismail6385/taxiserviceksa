import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Oasis Heritage Trail & Best Picnic Spots Guide 2026',
    description: 'Explore the lush, shaded walkways of the AlUla Oasis Heritage Trail. Discover the best scenic spots, orchards, mudbrick ruins, and family picnic areas.',
    keywords: ['AlUla Oasis Heritage Trail guide 2026', 'best picnic spots in AlUla', 'AlUla palm tree walk', 'AlUla oasis farms', 'family outdoors in AlUla'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-oasis-heritage-trail-picnic-spots/' },
    openGraph: { title: 'AlUla Oasis Heritage Trail & Best Picnic Spots Guide 2026', description: 'Walk under towering date palms and orange orchards on AlUla\'s historic Oasis trail.', type: 'article', url: 'https://taxiserviceksa.com/blog/alula-oasis-heritage-trail-picnic-spots/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How long is the AlUla Oasis Heritage Trail?', acceptedAnswer: { '@type': 'Answer', text: 'The Oasis Heritage Trail is approximately 3 km long, stretching from the Orange Path to Al-Jadidah district. It is a flat, easy dirt path bordered by mudbrick walls, shaded by thousands of date palms, and takes about 60-90 minutes to walk at a relaxed pace.' } },
        { '@type': 'Question', name: 'Is the Oasis Trail free to visit?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the Oasis Heritage Trail is completely free to enter and walk. You do not need to book tickets or register. It is open to the public 24/7, though walking during early morning or late afternoon hours is best to avoid the heat.' } },
        { '@type': 'Question', name: 'Are there picnic spots along the trail?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The trail has multiple wooden viewing decks, bench areas under the shade, and small open clearings perfect for a family picnic. There are also local farm stands selling fresh dates, citrus juice, and mint tea along the path.' } },
    ],
};

export default function AlUlaOasisTrailPage() {
    const picnicSpots = [
        { name: 'Dadan Oasis Picnic Decks', desc: 'Wooden platforms set directly under tall date palms, offering a view of the Dadanite cliff tombs in the distance.' },
        { name: 'Jabal AlFil Sandy Picnic Zone', desc: 'The designated soft-sand seating surrounding Elephant Rock, featuring local food stands and beautiful sunset backdrops.' },
        { name: 'Al-Jadidah Oasis Edge', desc: 'Where the shaded palm groves meet the modern art district. Cozy seating with cafes offering take-out drinks and snacks.' },
        { name: 'Harrat Lookout Benches', desc: 'High-altitude scenic benches offering panoramic views of the entire green oasis valley snaking through desert canyons.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Oasis Trail & Picnics</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🌴 Oasis Trail</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">AlUla Oasis Heritage Trail:<br /><span className="text-amber-300">Scenic Shaded Walk & Picnic Spots</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Escape the desert heat. Walk under towering date palms, citrus groves, and mudbrick ruins, and discover the best picnic spots.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Walking the Oasis Heritage Trail</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">The AlUla Oasis is a lush agricultural sanctuary that has sustained life in the valley for over 2,000 years. The Oasis Heritage Trail offers visitors a beautifully cleared 3 km path running directly through these active farms. Shaded by over 80,000 date palms and orange orchards, the walk is cool, peaceful, and filled with the scent of wild mint and citrus.</p>
                    <p className="text-gray-700 leading-relaxed">As you walk the dirt trail, you will see traditional mudbrick farm walls, historic irrigation canals, and local farmers harvesting dates using centuries-old methods.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Best Scenic Picnic Spots in AlUla</h2>
                    <p className="text-gray-700 leading-relaxed">Looking to pack a basket and relax outdoors? These are the premier spots to set up a picnic blanket:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {picnicSpots.map((spot, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl p-5 hover:border-amber-300 transition-colors">
                                <h3 className="font-bold text-amber-800 text-sm mb-2">{spot.name}</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">{spot.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Important Trail Guidelines</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Do not pick dates or fruits from active orchards — these are private family-owned farms.</li>
                        <li>Stay on the designated gravel path to avoid damaging fragile mudbrick walls.</li>
                        <li>Carry your trash with you; do not litter in the farming zones.</li>
                        <li>Best time to walk: 7:00 AM - 9:30 AM or 4:00 PM - 6:00 PM.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Taxi to the Trailhead</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">We provide private taxi transfers direct to the start of the Orange Path or the Al-Jadidah trailheads. Book your ride now.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20AlUla%20Oasis%20Trail" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Top Attractions <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
