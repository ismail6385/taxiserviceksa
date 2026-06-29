import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, BookOpen, Navigation, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tabuk Itinerary Planner 2026: 3-Day Weekend & 5-Day Day Trips',
    description: 'Find the best Tabuk travel itinerary. Day-by-day plans for a 3-day weekend escape or a 5-day adventure covering Wadi Al-Disah, mountains, and Red Sea beaches.',
    keywords: ['Tabuk travel itinerary 2026', 'Tabuk 3 day itinerary', 'Tabuk weekend guide', 'Tabuk day trips', 'how many days in Tabuk'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/tabuk-travel-itinerary-planning/' },
    openGraph: { title: 'Tabuk Itinerary Planner 2026: 3-Day Weekend & 5-Day Day Trips', description: 'Detailed step-by-step itineraries to explore the historic sites, beaches, and canyons of Tabuk.', type: 'article', url: 'https://taxiserviceksa.com/blog/tabuk-travel-itinerary-planning/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the best day trip from Tabuk city?', acceptedAnswer: { '@type': 'Answer', text: 'Wadi Al-Disah is the absolute best day trip. Located about 220 km south of Tabuk, the drive takes 2 to 2.5 hours. It features a spectacular sandstone canyon with freshwater springs, lush date palm oases, and ancient ruins, best explored by 4x4.' } },
        { '@type': 'Question', name: 'How many days do I need to explore Tabuk fully?', acceptedAnswer: { '@type': 'Answer', text: 'A 3-day itinerary is great for covering the city monuments and Wadi Al-Disah. However, a 5-day to 7-day trip is ideal if you want to include the coastal areas (Sharma beach, Umluj, and the Catalina seaplane wreck at Haql) or climb the mountains of Jabal Al-Lawz.' } },
    ],
};

export default function TabukItineraryPage() {
    const dayPlans = [
        { day: 'Day 1', title: 'Historic Tabuk City & Museum', items: ['Morning: Visit the 16th-century Tabuk Castle and learn about pilgrim routes.', 'Midday: Explore the historic Hejaz Railway Station Museum.', 'Afternoon: Walk through Souq Tawaheen to buy traditional souvenirs and dates.', 'Sunset: Relax at King Abdulaziz Park, followed by traditional Saudi dining.'] },
        { day: 'Day 2', title: 'Wadi Al-Disah Sandstone Canyon', items: ['Morning: Depart early from Tabuk city to Wadi Al-Disah (2-hour drive).', 'Midday: Hire a local 4x4 to explore the deep canyon, springs, and palms.', 'Afternoon: Have an outdoor picnic lunch in the shade of soaring red cliffs.', 'Sunset: Return to Tabuk city; enjoy specialty coffee at a modern boulevard cafe.'] },
        { day: 'Day 3', title: 'Jabal Al-Lawz or Red Sea Coast', items: ['Option A (Winter): Head north to Jabal Al-Lawz to experience snow-capped peaks.', 'Option B (Summer/Spring): Drive to Sharma Beach for swimming and relaxing by the Red Sea.', 'Afternoon: See the ancient tombs of Magna and the natural springs of Tayyib Al-Ism.', 'Evening: Return to Tabuk airport or hire an intercity taxi to your next destination.'] },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-sky-950 via-slate-900 to-cyan-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Tabuk Itinerary</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-cyan-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500">📅 Plan Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Tabuk Itinerary Planner:<br /><span className="text-cyan-300">3-Day Weekend & 5-Day Adventure Guides</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Maximize your trip. Detailed day-by-day planners covering ancient castles, sandstone canyons, and pristine beaches.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Calendar className="w-6 h-6 text-cyan-700" /><h2 className="text-3xl font-black text-gray-900">Recommended 3-Day Itinerary</h2></div>
                    <div className="grid gap-6">
                        {dayPlans.map((d, i) => (
                            <div key={i} className="border border-gray-200 p-6 rounded-2xl hover:border-cyan-300 transition-colors text-gray-700">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full">{d.day}</span>
                                    <h3 className="font-bold text-gray-900 text-lg">{d.title}</h3>
                                </div>
                                <ul className="space-y-2 text-sm">
                                    {d.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-cyan-600 mt-0.5">▸</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Extending to 5 Days (Best Day Trips)</h2>
                    <p className="text-gray-700 leading-relaxed">If you have 5 to 7 days, extend your trip to explore the Red Sea coastlines thoroughly:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Day 4 (Haql & Catalina Wreck):</strong> Visit the port city of Haql and see the half-submerged Catalina seaplane wreck in the Gulf of Aqaba.</li>
                        <li><strong>Day 5 (Umluj Yacht Tour):</strong> Head south to Umluj for an incredible boat tour of pristine coral islands and snorkeling.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-sky-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Tabuk Day Trip Taxi</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Sightseeing in Tabuk requires significant highway driving. Secure a comfortable private taxi with an experienced driver for your day trips.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20a%20private%20taxi%20for%20a%20day%20trip%20in%20Tabuk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/blog/top-places-visit-things-do-tabuk/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Explore Sights <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
