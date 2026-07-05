import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, Clock, Calendar, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Hot Air Balloon in AlUla: Flights, Prices & Booking | Taxi Service KSA',
    description: 'Everything you need to know about hot air balloon flights in AlUla. Compare flight prices, find booking times, learn about the AlUla Skies Festival, and get tips.',
    keywords: ['hot air balloon AlUla', 'AlUla skies festival 2026', 'hot air balloon price Saudi Arabia', 'Hegra balloon rides', 'AlUla balloon festival booking'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/hot-air-balloon-alula-guide/' },
    openGraph: {
        title: 'Hot Air Balloon in AlUla: Flights, Prices & Booking',
        description: 'Soar above ancient Nabataean tombs and dramatic sandstone canyons in a hot air balloon over AlUla.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/hot-air-balloon-alula-guide/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How much does a hot air balloon ride in AlUla cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'A standard shared hot air balloon flight in AlUla starts from approximately 990 SAR per person. Private charters are also available for couples or families at higher rates.'
            }
        },
        {
            '@type': 'Question',
            name: 'When is the hot air balloon season in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Balloon flights are available from late winter to early spring, with peak activity during the AlUla Skies Festival (usually held in March or April).'
            }
        }
    ],
};

export default function HotAirBalloonGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Hot Air Balloon</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🎈 Balloon Ride</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">AlUla Skies</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        Hot Air Balloon in AlUla: <br />
                        <span className="text-amber-300">Everything You Need to Know</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Float silently over Hegra\'s tombs and volcanic plains. Details on booking slots, flight pricing, best season, and weather rules.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">Why Fly in AlUla?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Viewing AlUla from the sky is a once-in-a-lifetime experience. As the sun rises, it paints the sandstone canyons and Nabataean tombs of Hegra (Mada\'in Salih) in shades of orange and gold. The sheer scale of the landscape is best appreciated from 1,000 feet in the air.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">What to Expect on Your Flight</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-amber-700" /> Early Wakeup
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Flights take off at sunrise (around 5:30 AM). You must arrive at the launch field in the dark for safety briefings and to watch the balloon inflate.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-amber-700" /> Flight Duration
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The flight lasts approximately 45 to 60 minutes, depending on wind conditions, drifting gently over the ancient ruins and date groves.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Navigation className="w-5 h-5 text-amber-700" /> Landing Ceremony
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                After landing safely in the desert sands, you will receive a flight certificate and enjoy fresh Arabic coffee and dates.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Booking & Flying Tips</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Book Early:</strong> Balloon rides are highly popular and have limited seats. Book through the official portal weeks in advance.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Dress Warmly:</strong> It is freezing before sunrise in the desert, so bring a heavy jacket, a scarf, and closed shoes.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Reliable Ride:</strong> Since launch fields are located in remote desert sands and require 5:00 AM arrivals, pre-arrange a private taxi transfer with a driver.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Sunrise Launch Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Don\'t miss your morning takeoff. Book a professional private driver to pick you up at 4:30 AM and take you directly to the balloon launch field.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20for%20a%20sunrise%20hot%20air%20balloon%20ride%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
