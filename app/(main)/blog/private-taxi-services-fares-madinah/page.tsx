import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Madinah Intercity Taxi Services: Fares to Makkah, Jeddah & Yanbu 2026',
    description: 'Detailed guide to private intercity taxi services from Madinah. Compare standard sedan and SUV taxi fares to Makkah, Jeddah, Taif, Yanbu, and Badr.',
    keywords: ['Madinah intercity taxi services', 'taxi fare Madinah to Makkah 2026', 'Jeddah to Madinah taxi cost', 'private taxi Yanbu Taif', 'GMC SUV taxi Madinah'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/private-taxi-services-fares-madinah/' },
    openGraph: { title: 'Madinah Intercity Taxi Services: Fares to Makkah, Jeddah & Yanbu 2026', description: 'Everything about intercity taxi rates from Madinah to Makkah, Jeddah, Yanbu, and Taif.', type: 'article', url: 'https://taxiserviceksa.com/blog/private-taxi-services-fares-madinah/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How much is a private taxi from Madinah to Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Private taxi fares from Madinah to Makkah start around SAR 400 - 450 for a standard sedan (Hyundai Elantra/Toyota Camry) and SAR 600 - 750 for large SUVs (GMC Yukon/Ford Expedition/Hyundai H-1). Fares may rise during peak seasons like Ramadan and Hajj.' } },
        { '@type': 'Question', name: 'What is the distance and travel time between Madinah and Makkah by road?', acceptedAnswer: { '@type': 'Answer', text: 'The road distance between Madinah and Makkah is approximately 450 km via the main Route 15 (Haramain Expressway). By taxi, the journey takes around 4 to 4.5 hours under normal conditions.' } },
        { '@type': 'Question', name: 'Can I stop at Meeqat Mosque (Bir Ali) on my way from Madinah to Makkah?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all private intercity taxis heading to Makkah for Umrah will stop at the Bir Ali Mosque (Meeqat of Madinah) so you can enter Ihram, pray two Rakats, and make intention for Umrah. There is no extra charge for this stop in pre-booked private transfers.' } },
    ],
};

export default function MadinahIntercityFaresPage() {
    const routeFares = [
        { destination: 'Makkah Mukarramah', dist: '450 km', time: '4.5 hours', sedan: 'SAR 400 - 450', suv: 'SAR 600 - 750', stop: 'Bir Ali Meeqat' },
        { destination: 'Jeddah Airport / City', dist: '410 km', time: '4 hours', sedan: 'SAR 380 - 420', suv: 'SAR 550 - 700', stop: 'Optional rest areas' },
        { destination: 'Yanbu (Port City)', dist: '230 km', time: '2.5 hours', sedan: 'SAR 250 - 300', suv: 'SAR 400 - 500', stop: 'Historic sites' },
        { destination: 'Taif (Mountain City)', dist: '480 km', time: '5 hours', sedan: 'SAR 450 - 550', suv: 'SAR 700 - 850', stop: 'Highland route stops' },
        { destination: 'Badr (Battlefield Site)', dist: '150 km', time: '1.5 hours', sedan: 'SAR 200 - 250', suv: 'SAR 350 - 450', stop: 'Historic wells/battlefield' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Intercity Taxi Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">🚗 Intercity Rates</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Madinah Intercity Taxi Fares:<br /><span className="text-emerald-300">Rates to Makkah, Jeddah & More</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Planning to travel beyond Madinah? Read our full breakdown of private taxi options, vehicle sizes, and flat-rate fares across Saudi Arabia.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><DollarSign className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Intercity Taxi Fares from Madinah 2026</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Private intercity transfers are the most comfortable and flexible way to explore Saudi Arabia, allowing you to stop at religious landmarks and travel with peace of mind. Here are the average flat-rate fares:</p>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-emerald-800 text-white">
                                    <th className="p-3 text-left rounded-tl-xl">Destination</th>
                                    <th className="p-3 text-left">Distance & Time</th>
                                    <th className="p-3 text-left">Standard Sedan</th>
                                    <th className="p-3 text-left">Spacious SUV</th>
                                    <th className="p-3 text-left rounded-tr-xl">Included Stops</th>
                                </tr>
                            </thead>
                            <tbody>
                                {routeFares.map((row, i) => (
                                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="p-3 font-bold text-gray-800">{row.destination}</td>
                                        <td className="p-3 text-gray-600">{row.dist} ({row.time})</td>
                                        <td className="p-3 text-emerald-700 font-bold">{row.sedan}</td>
                                        <td className="p-3 text-teal-700 font-bold">{row.suv}</td>
                                        <td className="p-3 text-gray-500 text-xs italic">{row.stop}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Why Choose Private Taxi Transfers?</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Door-to-door comfort:</strong> No lugging bags to bus stations or train terminals. Get picked up directly from your hotel lobby in Madinah and dropped at your hotel in Makkah, Jeddah, or Taif.</li>
                        <li><strong>Flexible timing:</strong> Travel when it suits you — early morning, late night, or right after prayer. Trains and buses operate on strict, limited schedules.</li>
                        <li><strong>Easy Meeqat stop:</strong> Pre-booked drivers are fully accustomed to pausing at Bir Ali Mosque for pilgrims to perform wudu, wear Ihram, and make intention without feeling rushed.</li>
                        <li><strong>Great for groups and family:</strong> Our GMC SUVs and Hyundai H-1 minivans can comfortably seat up to 7 passengers with generous luggage space.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Book Your Intercity Transfer Today</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Get reliable, fixed-price private transfers between Madinah, Makkah, Jeddah, and all cities. English & Urdu speaking drivers available.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20to%20book%20a%20private%20intercity%20transfer%20from%20Madinah" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> WhatsApp Booking</a>
                        <Link href="/routes/makkah-madinah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Makkah ⇄ Madinah <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
