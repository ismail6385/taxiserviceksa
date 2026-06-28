import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Desert Adventures, Safaris & Outdoor Activities 2026',
    description: 'Ultimate guide to outdoor adventures in AlUla. Hot air balloon rides, desert safaris, ziplining, canyon hiking, and dune buggies in 2026.',
    keywords: ['AlUla desert adventures 2026', 'AlUla hot air balloon guide', 'desert safari AlUla tour', 'canyon hiking AlUla', 'outdoor activities AlUla'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-desert-adventures-safari-activities/' },
    openGraph: { title: 'AlUla Desert Adventures, Safaris & Outdoor Activities 2026', description: 'Experience the thrill of AlUla: hot air ballooning, desert 4x4 safaris, and canyon zip-lining.', type: 'article', url: 'https://taxiserviceksa.com/blog/alula-desert-adventures-safari-activities/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How do you book a hot air balloon flight in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Hot air balloon rides operate during the winter months (typically November to March). You can book flights directly through the official Saudi Aviation Federation or the Experience AlUla platform. Flights take off at sunrise, offering panoramic views of Hegra and the sandstone canyons.' } },
        { '@type': 'Question', name: 'What is the best hiking trail in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'The Adventure Trail is the most famous hike, stretching 8 km through narrow sandstone canyons and ancient petroglyphs. For beginners, the Oasis Heritage Trail (3 km flat walk) or the Ridge Loop Hike (guided, 2.5 hours) are excellent alternatives.' } },
        { '@type': 'Question', name: 'Is zip-lining safe in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The AlUla Zipline is operated by highly certified professional adventure guides. It is the longest and fastest zipline in Saudi Arabia, reaching speeds up to 120 km/h over the dramatic canyons of Harrat AlUla.' } },
    ],
};

export default function AlUlaAdventuresPage() {
    const activities = [
        { name: '🎈 Hot Air Balloon Flight', cost: 'SAR 800 - 1200', details: 'Float silently at sunrise over the sandstone monoliths and monumental tombs of Hegra. An unforgettable visual experience.' },
        { name: '🏎️ Desert Safari & Dune Buggies', cost: 'SAR 300 - 500', details: 'Race across open sand dunes and navigate tight canyon gaps in a guided 4x4 or dune buggy tour.' },
        { name: '🧗 Ziplining over Canyons', cost: 'SAR 180 - 250', details: 'Soar through the air on the Kingdom\'s fastest zipline, suspended hundreds of feet above a dramatic canyon.' },
        { name: '🥾 Adventure Canyon Hiking', cost: 'SAR 100 - 200', details: 'Hike through historic valleys with local guides, viewing 2,000-year-old rock art and unique desert flora.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Desert Adventures</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🧗 Adventure</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">AlUla Desert Adventures:<br /><span className="text-amber-300">Safaris, Ballooning & Hiking Guide</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Unleash your inner explorer. Your ultimate handbook to hot air balloons, desert safaris, ziplines, and canyon hiking in AlUla.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-4">
                    <div className="flex items-center gap-3"><BookOpen className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">AlUla's Outdoor Thrills</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">With its dramatic sandstone canyons, sweeping sand basins, and sheer volcanic plates, AlUla is one of the world's most spectacular playgrounds for outdoor enthusiasts. Beyond the archeology, visitors can experience high-adrenaline sports and deep wilderness excursions led by experienced local guides.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-3xl font-black text-gray-900">Top Adventure Activities & Costs</h2>
                    <div className="grid gap-6">
                        {activities.map((act, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-amber-300 transition-colors text-gray-700">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-black text-amber-800 text-lg">{act.name}</h3>
                                    <span className="text-sm font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">{act.cost}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{act.details}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Safety Precautions for Outdoor Sports</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Always carry a minimum of 2 liters of water per person on any hike or safari.</li>
                        <li>Wear high-factor sunscreen (SPF 50+) and a wide-brimmed hat, even during the cooler winter months.</li>
                        <li>Never hike off designated trails without a registered local guide. Sandstone formations are fragile and crumbly.</li>
                        <li>Ensure your camera and phone have secure wrist straps, especially during balloon flights or zipline rides.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book a Private Taxi for Adventure Tours</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Adventure parks and trailheads are located deep in the canyons. Pre-book a private 4x4 or SUV taxi to pick you up and drop you off directly.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20taxi%20transfer%20to%20adventure%20trailheads%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/alula-travel-itinerary-planning/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Itinerary Ideas <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
