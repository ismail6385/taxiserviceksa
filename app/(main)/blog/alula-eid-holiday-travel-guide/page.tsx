import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Calendar, Heart, ShieldAlert, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Eid Holiday Travel Guide: Festivals & Bookings | Taxi Service KSA',
    description: 'The ultimate guide to spending Eid Al-Fitr or Eid Al-Adha in AlUla. Learn about festive events, booking resort stays, holiday transportation, and crowd management.',
    keywords: ['AlUla Eid holiday', 'Eid in AlUla events', 'Eid travel Saudi Arabia', 'AlUla hotels Eid', 'Eid Al Fitr AlUla'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-eid-holiday-travel-guide/' },
    openGraph: {
        title: 'AlUla Eid Holiday Travel Guide: Festivals & Bookings',
        description: 'Plan a spectacular and festive Eid holiday getaway in the historic desert oasis of AlUla.',
        type: 'article',
        url: 'https://taxiserviceksa.com/blog/alula-eid-holiday-travel-guide/'
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Is Eid a good time to visit AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Eid is a highly festive time to visit AlUla. The city and resorts organize special dinners, traditional dances, musical performances, and fireworks. However, it is also peak domestic holiday season, so booking early is essential.'
            }
        },
        {
            '@type': 'Question',
            name: 'Do I need to book tours and hotels in advance for Eid in AlUla?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Absolutely. Hotels, flights, tour slots for Hegra, and private transportation options are usually fully booked weeks in advance of the Eid holidays. Last-minute bookings are rarely available.'
            }
        }
    ],
};

export default function AlUlaEidGuidePage() {
    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Eid Holiday Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">🌙 Eid Mubarak</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Holiday Travel</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                        AlUla Eid Holiday <br />
                        <span className="text-amber-300">Travel Guide: Events & Bookings</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Celebrate Eid Al-Fitr or Eid Al-Adha in Saudi Arabia\'s most premium tourist spot. Tips on resort stays, festival activities, and holiday transfers.
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-amber-700" />
                        <h2 className="text-3xl font-black text-gray-900">Why Spend Eid in AlUla?</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Spending the Eid holidays in AlUla is a magical experience. Luxury desert resorts like Habitas, Banyan Tree, and Shaden host special celebratory dinners, traditional Saudi folkloric sword dances (Ardah), and musical shows, creating a high-class festive atmosphere.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Key Holiday Planning Pillars</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-amber-700" /> Festive Dinners
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Most premium restaurants and resorts offer special set menus for Eid dinners, featuring classic Saudi dishes with modern twists.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-amber-700" /> Cultural Activities
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Experience live music performances, traditional artisans, and celebratory lights in AlUla Old Town and Al-Jadidah district.
                            </p>
                        </div>
                        <div className="border border-gray-100 rounded-2xl p-6 bg-amber-50/50">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-amber-700" /> Advance Booking
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Demand is incredibly high. You must secure your flights, resort rooms, Hegra tickets, and transport well in advance.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Practical Holiday Tips</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Secure Hegra Slots:</strong> Tours to the Nabataean tombs sell out fast during holidays. Book tickets on the Experience AlUla portal 3-4 weeks ahead.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Resort Dining:</strong> You do not need to stay at premium resorts to enjoy their restaurants, but you must reserve tables in advance for Eid meals.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">✓</span>
                            <span><strong>Avoid Airport Stress:</strong> Arrange a reliable private transfer from AlUla Airport (ULH) or Tabuk Airport (TUU) to your hotel before you fly in.</span>
                        </li>
                    </ul>
                </section>

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Eid Holiday Ride</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Celebrate Eid with ultimate comfort. Book a luxury private taxi with a professional chauffeur to handle all your transport in AlUla.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20want%20to%20book%20a%20private%20taxi%20in%20AlUla%20for%20the%20Eid%20Holidays" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">All Travel Guides <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
