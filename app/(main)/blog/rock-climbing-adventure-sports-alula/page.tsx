import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, Flame, Eye, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Rock Climbing & Adventure Sports in AlUla | Taxi Service KSA',
    description: 'The complete guide to rock climbing, via ferrata, zip-lining, and adventure sports in AlUla. Learn about climbing routes, booking tickets, and safety tips.',
    keywords: ['rock climbing AlUla', 'via ferrata AlUla', 'AlUla zipline price', 'adventure sports Saudi Arabia', 'AlUla canyon climbing'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/rock-climbing-adventure-sports-alula/' },
    openGraph: {
        title: 'Rock Climbing & Adventure Sports in AlUla',
        description: 'Scale ancient cliffs and soar over desert canyons. Complete guide to adventure sports in AlUla.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/rock-climbing-adventure-sports-alula/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is there a zip-line in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, AlUla is home to Saudi Arabia\'s longest and fastest zip-line, letting riders fly over the spectacular canyon landscape at speeds of up to 120 km/h.'
            }
        },
        {
            '@type': 'Question',
            name: 'Do I need climbing experience for Via Ferrata in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'No prior climbing experience is necessary for the Via Ferrata. Participants are securely harnessed and guided along a steel cable system built into the canyon cliffs.'
            }
        }
    ],
};

export default function RockClimbingAdventureSportsPage() {
    const activities = [
        {
            name: 'Via Ferrata & Canyon Climb',
            duration: '2 - 3 Hours',
            price: 'From 250 SAR',
            desc: 'Scale vertical sandstone walls securely connected to safety cables. Climb up suspended ladders and traverse narrow cliff ledges for an adrenaline rush.'
        },
        {
            name: 'AlUla Giant Zipline',
            duration: '1 Hour',
            price: 'From 180 SAR',
            desc: 'Saudi Arabia\'s longest and fastest zipline. Fly suspended above mountain valleys, taking in the spectacular geology of AlUla at high speeds.'
        },
        {
            name: 'Rock Climbing Trails',
            duration: 'Half Day',
            price: 'Varies',
            desc: 'Explore fully bolted sports climbing routes in designated canyon zones, ranging from beginner slabs to expert overhangs.'
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
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Adventure Sports</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🧗 Adventure</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Climbing Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        Rock Climbing & Adventure <br />
                        <span className="text-amber-300">Sports in AlUla</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Scale ancient sandstone cliffs and fly over deep valleys. Compare adventure routes, zipline tickets, prices, and safety rules.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Flame className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">AlUla\'s Outdoor Thrills</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        With its towering vertical sandstone canyons and dramatic rock arches, AlUla is quickly becoming Saudi Arabia\'s premier hub for adventure sports and climbing. Here are the top adventure sports activities you can book:
                    </p>
                    
                    <div className="grid gap-6">
                        {activities.map((act, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:border-amber-300 transition-colors">
                                <h3 className="font-bold text-gray-900 text-xl mb-3 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-amber-700" />
                                    {act.name}
                                </h3>
                                <div className="flex flex-wrap gap-4 mb-4 text-xs font-bold uppercase tracking-wider text-amber-800">
                                    <span>⏱️ Duration: {act.duration}</span>
                                    <span>💰 Price: {act.price}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{act.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Adventure Safety & Logistics</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Certified Instructors:</strong> All major climbs and zipline systems are supervised by fully certified safety instructors.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Health Requirements:</strong> Adventure activities require a basic level of physical fitness and are not recommended for pregnant women or individuals with back conditions.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Hassle-Free Logistics:</strong> Since adventure activity centers are located far out in the desert canyons, pre-arrange a private taxi with a driver for transport.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Eye className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Adventure Hub Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Stay focused on the thrill. Book a private driver to handle your timely drop-off and pickup at AlUla\'s adventure centers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20for%20adventure%20sports%20and%20ziplining%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
