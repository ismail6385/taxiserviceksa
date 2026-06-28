import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AlUla Travel Itinerary 2026: 2-Day, 3-Day & Weekend Plans',
    description: 'Find the perfect AlUla travel itinerary. Day-by-day plans for a 2-day weekend trip or a 3-day exploration covering Hegra, Old Town, Elephant Rock, and more.',
    keywords: ['AlUla travel itinerary 2 days', 'AlUla itinerary 3 days', 'AlUla weekend guide', 'AlUla trip planner 2026', 'how many days in AlUla'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/alula-travel-itinerary-planning/' },
    openGraph: { title: 'AlUla Travel Itinerary 2026: 2-Day, 3-Day & Weekend Plans', description: 'Plan your AlUla vacation with our detailed 2-day and 3-day step-by-step itineraries.', type: 'article', url: 'https://taxiserviceksa.com/blog/alula-travel-itinerary-planning/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How many days do I need in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'A minimum of 2 days (48 hours) is recommended to cover the core sites: Hegra, Elephant Rock, AlUla Old Town, and Dadan/Jabal Ikmah. A 3-day itinerary is ideal, allowing you to add desert safaris, stargazing at Gharameel, or hiking the Oasis Trail at a relaxed pace.' } },
        { '@type': 'Question', name: 'Is it easy to travel between attractions in AlUla?', acceptedAnswer: { '@type': 'Answer', text: 'AlUla\'s main sights are spread out across 30-40 km. There is no public transit between them. Visitors must either rent a car (4x4 recommended for off-road parts) or book a private taxi tour with a driver.' } },
    ],
};

export default function AlUlaItineraryPage() {
    const itinerary3 = [
        { day: 'Day 1', title: 'Hegra Nabataean Tombs & Elephant Rock', items: ['Morning: Official Hegra tour (visit Tomb of Lihyan son of Kuza)', 'Afternoon: Stroll through AlUla Old Town and lunch in Al-Jadidah', 'Sunset: Relax at the base of Elephant Rock (Jabal AlFil)', 'Evening: Authentic Arabic dining in Old Town'] },
        { day: 'Day 2', title: 'Dadan, Jabal Ikmah & Mirror Hall', items: ['Morning: Dadan (capital of Lihyanite kingdom) archaeological tour', 'Midday: Jabal Ikmah "open library" of ancient rock inscriptions', 'Afternoon: Visit Maraya Concert Hall (Ashar Valley) for photos', 'Night: Stargazing tour at Gharameel desert with dinner'] },
        { day: 'Day 3', title: 'Oasis Walk & Outdoor Adventure', items: ['Morning: Hike the Oasis Heritage Trail (3km shaded palm walk)', 'Afternoon: Adventure zip-lining or hot air balloon flight over canyons', 'Sunset: View AlUla from the Harrat Viewpoint', 'Departure: Transfer to airport or Madinah'] },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-yellow-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>AlUla Itinerary</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-amber-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500">📅 Itinerary</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">AlUla Itinerary Planner:<br /><span className="text-amber-300">2-Day, 3-Day & Weekend Guides</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Maximize your time in Saudi Arabia\'s historic desert oasis. Step-by-step day plans for short weekends and longer escapes.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Calendar className="w-6 h-6 text-amber-700" /><h2 className="text-3xl font-black text-gray-900">Ultimate 3-Day AlUla Itinerary</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">A 3-day itinerary is the absolute best way to experience AlUla, offering a balance of historical discoveries, outdoor adventure, and stargazing under pristine desert skies:</p>
                    
                    <div className="grid gap-6">
                        {itinerary3.map((d, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:border-amber-300 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1.5 rounded-full">{d.day}</span>
                                    <h3 className="font-bold text-gray-900 text-lg">{d.title}</h3>
                                </div>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    {d.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-amber-600 mt-0.5">▸</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">2-Day Weekend Quick Guide</h2>
                    <p className="text-gray-700 leading-relaxed">For a quick 48-hour trip, merge Day 1 and Day 2. Focus on Hegra in the morning of Day 1, visit Elephant Rock for sunset, and spend Day 2 covering AlUla Old Town, the Oasis Trail, and a photo stop at Maraya Hall before departure.</p>
                </section>

                <section className="bg-gradient-to-br from-amber-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book an AlUla Tour Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Make your itinerary stress-free. Book a private taxi driver to transport you between all your scheduled daily spots in AlUla.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20driver%20for%20a%202%20or%203%20day%20itinerary%20in%20AlUla" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/blog/top-places-visit-things-do-alula/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Explore Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
