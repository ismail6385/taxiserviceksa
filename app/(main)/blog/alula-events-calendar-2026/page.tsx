import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Calendar, Clock, Sparkles, Star } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Events Calendar 2026: Festivals, Concerts & Sports | Taxi Service KSA',
    description: 'The complete AlUla events calendar for 2026. Dates and details for Winter at Tantora, AlUla Skies Balloon Festival, Wellness Festival, Desert Polo, and concerts.',
    keywords: ['AlUla events calendar 2026', 'AlUla festival dates', 'Maraya concerts 2026', 'AlUla hot air balloon festival', 'Desert polo AlUla'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-events-calendar-2026/' },
    openGraph: {
        title: 'AlUla Events Calendar 2026: Festivals, Concerts & Sports',
        description: 'Plan your trip around AlUla\'s spectacular yearly events and festivals.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/alula-events-calendar-2026/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What are the main festivals in AlUla in 2026?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The main festivals are Winter at Tantora (Dec-Jan), AlUla Wellness Festival (Feb), AlUla Skies (Mar-Apr), and AlUla Catwalk (May).'
            }
        },
        {
            '@type': 'Question',
            name: 'When is the hot air balloon festival in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The AlUla Skies Festival, which features hot air balloon rides over Hegra and astronomical events, is scheduled for Spring 2026 (typically late March or April).'
            }
        }
    ],
};

export default function AlUlaEventsCalendarPage() {
    const calendarEvents = [
        { season: 'Winter (Dec - Jan)', title: 'Winter at Tantora', desc: 'Music concerts at Maraya, heritage festivals, culinary events, and light shows in Old Town.' },
        { season: 'Late Winter (Feb)', title: 'AlUla Wellness Festival', desc: 'Yoga workshops, meditation retreats, health dining pop-ups, and holistic therapy sessions.' },
        { season: 'Spring (Mar - Apr)', title: 'AlUla Skies Festival', desc: 'Hot air balloon flights over Hegra, stargazing tours, and stargazing concerts.' },
        { season: 'All Year Round', title: 'Hegra & Dadan Heritage Tours', desc: 'Daily guided excursions to Saudi Arabia\'s most iconic UNESCO World Heritage tombs and ruins.' },
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
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Events Calendar</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">📅 Calendar 2026</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Official Schedule</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        AlUla Events Calendar 2026: <br />
                        <span className="text-amber-300">Your Year-Round Festival Guide</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Never miss a beat in the ancient city. Discover the dates for major concerts, arts festivals, sporting events, and cultural shows.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">AlUla Festival Seasons</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        AlUla organizes its yearly calendar under the &quot;AlUla Moments&quot; umbrella. These festivals feature a mix of local culture, arts, luxury dining, and sports.
                    </p>
                    
                    <div className="grid gap-6">
                        {calendarEvents.map((event, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:border-amber-300 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full">{event.season}</span>
                                    <h3 className="font-bold text-gray-900 text-lg">{event.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Key Events You Can\'t Miss</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Sparkles className="w-5 h-5 text-amber-700" /> Desert Polo</h3>
                            <p className="text-sm text-gray-600">The world\'s only modern desert polo tournament, bringing international stars to play on a custom sand arena.</p>
                        </div>
                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-amber-700" /> Richard Mille AlUla Desert Trail</h3>
                            <p className="text-sm text-gray-600">An adventurous trail run through the spectacular canyons and natural monuments of AlUla.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Clock className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Event Ride Today</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Secure a luxury private car to travel smoothly between your hotel and the different event arenas in AlUla.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20for%20events%20in%20AlUla%20during%202026" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Explore Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
