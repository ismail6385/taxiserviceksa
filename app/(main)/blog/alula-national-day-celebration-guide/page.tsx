import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Calendar, Flag, Award, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla National Day Celebration Guide 2026 | Taxi Service KSA',
    description: 'Discover how AlUla celebrates Saudi National Day on September 23rd. Events schedule, light shows at Elephant Rock, traditional dances, and holiday transport tips.',
    keywords: ['Saudi National Day AlUla 2026', 'AlUla national day events', 'September 23 Saudi Arabia', 'Elephant rock light show', 'AlUla national day activities'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-national-day-celebration-guide/' },
    openGraph: {
        title: 'AlUla National Day Celebration Guide 2026',
        description: 'Celebrate Saudi National Day surrounded by AlUla\'s spectacular ancient heritage.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/alula-national-day-celebration-guide/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'When is Saudi National Day celebrated?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Saudi National Day is celebrated annually on September 23rd, commemorating the unification of the Kingdom of Saudi Arabia.'
            }
        },
        {
            '@type': 'Question',
            name: 'What events are organized in AlUla for National Day?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'AlUla organizes special national-themed projection shows on Elephant Rock, traditional folkloric performances in Old Town, fireworks, and patriotic decorations throughout the city.'
            }
        }
    ],
};

export default function AlUlaNationalDayPage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>National Day Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🇸🇦 National Day</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">September 23</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        AlUla National Day <br />
                        <span className="text-amber-300">Celebration Guide 2026</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Join the patriotic festivities in the ancient valley. Details on local celebrations, light projection shows, and holiday transport.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">Saudi National Day in AlUla</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Saudi National Day (September 23rd) is a public holiday across the Kingdom. In AlUla, this patriotism blends beautifully with the city\'s majestic geology, resulting in striking visual projections, musical events, and cultural exhibitions.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Top Activities & Sights</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Flag className="w-5 h-5 text-amber-700" /> Flag & Decor
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The streets of Al-Jadidah and AlUla Old Town are beautifully decorated with Saudi flags, green lights, and celebratory banners.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-amber-700" /> Projection Shows
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Spectacular light and video projection shows featuring the faces of the Royal Family and Saudi history projected onto Elephant Rock.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Award className="w-5 h-5 text-amber-700" /> Folk Performances
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Watch traditional dances and live Arabic instrumental music in the public squares of the Oasis and Old Town.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">National Day Travel Advice</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Be Ready for Crowds:</strong> Elephant Rock is extremely popular on National Day night. Arrive early to secure a good sitting area.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Green Theme:</strong> Embrace the celebrations by wearing patriotic green or carrying a miniature national flag during public walks.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Pre-Book Rides:</strong> Roads can become highly congested during the evening celebrations. Having a dedicated private driver ensures you navigate easily.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Flag className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your National Day Transport</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Celebrate National Day with ultimate style. Book a private VIP taxi with a dedicated driver to navigate the festive streets of AlUla.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20in%20AlUla%20for%20Saudi%20National%20Day%20Celebrations" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
