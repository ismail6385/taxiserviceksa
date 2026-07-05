import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Calendar, Sparkles, Clock, Music } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Winter at Tantora Festival Guide 2026 | Taxi Service KSA',
    description: 'Complete guide to Winter at Tantora 2026 in AlUla. Event dates, concert schedules, ticket booking tips, heritage site tours, and transport guide.',
    keywords: ['Winter at Tantora 2026', 'AlUla Tantora festival dates', 'Winter at Tantora tickets', 'Maraya concert hall events', 'AlUla winter festival'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-winter-at-tantora-festival-guide-2026/' },
    openGraph: {
        title: 'AlUla Winter at Tantora Festival Guide 2026',
        description: 'Plan your visit to the premier winter arts and heritage festival in AlUla.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/alula-winter-at-tantora-festival-guide-2026/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'When is Winter at Tantora 2026?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Winter at Tantora runs from late December 2025 through late January 2026. The core activities occur over four thematic weekends focusing on music, heritage, art, and sport.'
            }
        },
        {
            '@type': 'Question',
            name: 'How do I book tickets for Winter at Tantora events?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tickets for major concerts at Maraya, hot air balloons, and cultural shows must be booked in advance via the official Experience AlUla website or mobile app. Early booking is highly recommended.'
            }
        }
    ],
};

export default function WinterAtTantoraPage() {
    const highlights = [
        {
            title: 'Maraya Concerts & Shows',
            desc: 'World-class musical performances by Arab and international legends inside the world\'s largest mirrored building, Maraya.',
            icon: Music
        },
        {
            title: 'Tantora Celebration',
            desc: 'Traditional festivities at the sundial (Tantora) in AlUla Old Town, celebrating the start of the winter planting season.',
            icon: Sparkles
        },
        {
            title: 'Hot Air Balloon Flights',
            desc: 'Witness hundreds of colorful balloons soaring over the ancient rock formations and UNESCO heritage tombs of Hegra.',
            icon: Clock
        },
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
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Winter at Tantora</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🎉 Festival Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Winter 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        AlUla Winter at Tantora <br />
                        <span className="text-amber-300">Festival Guide 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Experience the magic of AlUla\'s signature winter festival. Discover musical highlights, cultural heritage shows, dates, and transport planning tips.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">What is Winter at Tantora?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        <strong>Winter at Tantora</strong> is the flagship cultural festival of the AlUla season. Named after the traditional sundial in AlUla Old Town that marked the start of the winter crop season, this event brings together high-end arts, live music, balloon festivals, and historical storytelling.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 pt-4">
                        {highlights.map((h, i) => (
                            <div key={i} className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50 hover:bg-amber-50 transition-colors">
                                <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                    <h.icon className="w-5 h-5 text-amber-700" />
                                    {h.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Important Festival Information</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Venue Locations:</strong> Events are spread between AlUla Old Town, the Ashar Valley (Maraya), and the desert canyons.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Transportation:</strong> Roads become busy. Pre-booking a private driver is essential to ensure you arrive at concerts and tours on time.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Weather:</strong> Winter in the desert is cold. Temperatures can drop below 8°C in the evening, so pack warm layers.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <MapPin className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Festival Chauffeur</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Enjoy the concerts and events without worrying about parking or route navigation. Book a dedicated private taxi in AlUla.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20for%20Winter%20at%20Tantora%20Festival%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
