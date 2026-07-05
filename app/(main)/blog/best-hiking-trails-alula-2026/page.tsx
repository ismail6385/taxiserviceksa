import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, Calendar, Flame, Eye } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Hiking Trails in AlUla 2026: Routes & Maps | Taxi Service KSA',
    description: 'Explore the best hiking trails in AlUla. Complete guide to the Oasis Heritage Trail, Adventure Trail, Ridge Walk, and hidden canyon hikes.',
    keywords: ['AlUla hiking trails 2026', 'Oasis Heritage Trail AlUla', 'AlUla hiking routes', 'adventure trail AlUla', 'canyon walk AlUla'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/best-hiking-trails-alula-2026/' },
    openGraph: {
        title: 'Best Hiking Trails in AlUla 2026: Routes & Maps',
        description: 'Discover the spectacular desert and oasis hikes of AlUla with route maps and safety tips.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/best-hiking-trails-alula-2026/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Do I need a guide to go hiking in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The Oasis Heritage Trail can be hiked easily without a guide as it is flat and paved. However, more challenging routes like the Adventure Trail or Ridge Walk require booking an official guide for safety.'
            }
        },
        {
            '@type': 'Question',
            name: 'What is the best time of day to hike in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Early morning (starting around 6:00 AM) or late afternoon (starting around 4:00 PM) are the best times to hike to avoid the midday sun and enjoy cooler temperatures.'
            }
        }
    ],
};

export default function BestHikingTrailsPage() {
    const trails = [
        {
            name: 'Oasis Heritage Trail',
            distance: '3.0 km (One-way)',
            difficulty: 'Easy (Flat, shaded)',
            desc: 'A beautiful walk under the shade of towering date palms, passing mudbrick houses and farming fields. Perfect for families.'
        },
        {
            name: 'The Adventure Trail',
            distance: '8.0 km (Loop)',
            difficulty: 'Moderate (Uneven rocks)',
            desc: 'A rugged hike through ancient Nabataean trade paths. Features spectacular sandstone canyons and ancient rock art.'
        },
        {
            name: 'Ridge Walk Trail',
            distance: '4.0 km (Loop)',
            difficulty: 'Hard (Steep incline)',
            desc: 'Climb to the high rim overlooking the Ashar Valley. Offers stunning panoramic views of the canyons and luxury resorts.'
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Hiking Trails</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🥾 Hiking Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        Best Hiking Trails <br />
                        <span className="text-amber-300">in AlUla 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Explore AlUla\'s spectacular volcanic plateaus, date palm oases, and ancient sandstone canyons on foot. Details on distance, difficulty, and tips.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">AlUla\'s Top Hiking Trails</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Hiking in AlUla is one of the most rewarding ways to experience the desert. From flat, leisure trails through historical agricultural areas to steep canyon climbs, here are the top trails you can explore:
                    </p>
                    
                    <div className="grid gap-6">
                        {trails.map((trail, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:border-amber-300 transition-colors">
                                <h3 className="font-bold text-gray-900 text-xl mb-3">{trail.name}</h3>
                                <div className="flex flex-wrap gap-4 mb-4 text-xs font-bold uppercase tracking-wider text-amber-800">
                                    <span>📏 Distance: {trail.distance}</span>
                                    <span>🔥 Difficulty: {trail.difficulty}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{trail.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">What to Bring & Safety Rules</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Water:</strong> Bring at least 2 liters of water per person. Desert hydration is crucial even during cooler winter months.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Shoes:</strong> Sturdy hiking shoes with solid grip are essential for canyon walks and loose rocks.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Leave No Trace:</strong> Pack out all trash and respect the delicate archaeological structures and inscriptions.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Hiking Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Most hiking trail heads are located 20-30 km away from the main resorts. Book a private driver to drop you off and pick you up at the trail head.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20transfer%20to%20hiking%20trails%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
