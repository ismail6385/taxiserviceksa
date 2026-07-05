import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, Sun, Calendar, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Best Sunrise & Sunset Spots in AlUla | Taxi Service KSA',
    description: 'Discover the most spectacular sunrise and sunset spots in AlUla. Complete guide to Harrat Viewpoint, Elephant Rock, Hegra, and Maraya reflection views.',
    keywords: ['AlUla sunrise spots', 'best sunset AlUla', 'Harrat viewpoint AlUla', 'Elephant rock sunset', 'Maraya concert hall reflections'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/best-sunrise-sunset-spots-alula/' },
    openGraph: {
        title: 'Best Sunrise & Sunset Spots in AlUla',
        description: 'Where to watch the sun rise and set in the ancient desert valleys of AlUla.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/best-sunrise-sunset-spots-alula/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is Harrat Viewpoint open for sunrise?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Harrat Viewpoint is typically open from late afternoon through midnight. While it is perfect for sunset and night stargazing, check seasonal schedules on the official app before planning a sunrise trip.'
            }
        },
        {
            '@type': 'Question',
            name: 'Can I visit Elephant Rock at night?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Elephant Rock remains open late. After sunset, the area is beautifully lit, and you can relax in sunken seating areas with fire pits, enjoying drinks and desserts from local cafes.'
            }
        }
    ],
};

export default function BestSunriseSunsetSpotsPage() {
    const locations = [
        {
            name: 'Harrat Viewpoint (Sunset)',
            features: 'Panoramic views, high-end cafe, mountain breeze',
            desc: 'Climb the winding mountain road to AlUla\'s highest public viewpoint. Witness the sun sink below the vast valley, lighting up the oasis and sandstone canyons in gold.'
        },
        {
            name: 'Elephant Rock (Sunset & Night)',
            features: 'Sunken lounge seating, fire pits, cafes',
            desc: 'As the sun sets behind the massive three-story-high rock formation, it casts dramatic shadows over the desert. Beautifully illuminated at night.'
        },
        {
            name: 'Maraya Concert Hall (Sunrise)',
            features: 'Mirrored reflections, silent desert valley',
            desc: 'Watch the sun rise over the Ashar Valley cliffs, reflecting off Maraya\'s mirrored panels in a breathtaking dance of light and canyon colors.'
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
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Sunrise & Sunset</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🌅 Viewpoints</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Photography Sights</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        Best Sunrise & Sunset <br />
                        <span className="text-amber-300">Spots in AlUla</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Capture the golden hour in the desert. The top viewpoints and natural monuments to watch the sunrise and sunset in AlUla.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">Top Golden Hour Sights</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        The desert canyon landscapes of AlUla are famous for their changing colors. During the golden hour, the ancient red sandstone rocks reflect shades of gold, amber, and purple. Here are the best spots to experience this natural show:
                    </p>
                    
                    <div className="grid gap-6">
                        {locations.map((loc, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:border-amber-300 transition-colors">
                                <h3 className="font-bold text-gray-900 text-xl mb-2 flex items-center gap-2">
                                    <Sun className="w-5 h-5 text-amber-700" />
                                    {loc.name}
                                </h3>
                                <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-4">
                                    🌟 Features: {loc.features}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{loc.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Golden Hour Tips</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Arrive 45 Mins Early:</strong> The best colors appear during the twilight transition, so don\'t wait until the sun hits the horizon.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Harrat Temperature:</strong> Harrat Viewpoint is high above the valley and can be very windy and cold, so bring a jacket.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Book Chauffeur:</strong> Since viewpoints are spread out (Harrat is steep and winding), having a private chauffeur is the safest way to travel during sunset.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Star className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Sunset Chauffeur</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Enjoy the sunset and subsequent stargazing without worry. Book a private driver to transport you between your resort and AlUla\'s best viewpoints.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20for%20a%20sunset%20tour%20to%20Harrat%20Viewpoint%20and%20Elephant%20Rock%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
