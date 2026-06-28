import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone, Navigation, BookOpen, Plane } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Madinah Airport Taxi & Transfer Guide 2026: Fares & Tips',
    description: 'Complete guide to Madinah Airport (MED) taxis, private transfers, and shuttle options. Learn about official fares, ride-hailing apps, and booking tips for 2026.',
    keywords: ['Madinah Airport taxi guide 2026', 'PRINCE MOHAMMAD BIN ABDULAZIZ AIRPORT transfers', 'MED airport to hotel taxi fare', 'Madinah airport private transfer booking', 'cheap ride from Madinah airport'],
    alternates: { canonical: 'https://taxiserviceksa.com/blog/madinah-airport-taxi-transfer-guide/' },
    openGraph: { title: 'Madinah Airport Taxi & Transfer Guide 2026: Fares & Tips', description: 'Your guide to Prince Mohammad bin Abdulaziz Airport (MED) taxis, private transfers, and booking tips.', type: 'article', url: 'https://taxiserviceksa.com/blog/madinah-airport-taxi-transfer-guide/' },
};

const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How much is a taxi from Madinah Airport to the Haram / Central Area?', acceptedAnswer: { '@type': 'Answer', text: 'Official airport taxis charge flat rates or metered fares ranging from SAR 70 to SAR 120 (approx. $19 to $32 USD) for a standard sedan to the Haram area. Private pre-booked transfers are usually between SAR 100 and SAR 150, offering a meet-and-greet service and fixed pricing.' } },
        { '@type': 'Question', name: 'Is Uber or Careem available at Madinah Airport?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, ride-hailing apps like Uber, Careem, and Kaiian operate at Madinah Airport (MED). However, there can be long pickup wait times and surge pricing during peak arrival hours. A pre-booked private transfer avoids these hassles.' } },
        { '@type': 'Question', name: 'How far is Madinah Airport from Masjid an-Nabawi?', acceptedAnswer: { '@type': 'Answer', text: 'Prince Mohammad Bin Abdulaziz International Airport (MED) is located about 15 to 20 km northeast of Masjid an-Nabawi. Depending on traffic, the drive takes around 20 to 25 minutes.' } },
    ],
};

export default function MadinahAirportTaxiGuidePage() {
    const transitOptions = [
        { name: '🚖 Pre-Booked Private Transfer', cost: 'SAR 100 - 150', wait: 'Zero minutes', pros: 'Meet-and-greet at arrival gate, fixed price, clean family cars/SUVs, luggage support.' },
        { name: '🚕 Regular Airport Taxi', cost: 'SAR 70 - 120', wait: '5 - 20 minutes', pros: 'Available 24/7 at the taxi ranks outside terminal arrivals.' },
        { name: '📱 Ride-Hailing Apps (Uber/Careem)', cost: 'SAR 60 - 95', wait: '10 - 25 minutes', pros: 'Convenient to order via app; may have high demand surge prices.' },
        { name: '🚌 Airport Shuttle Bus', cost: 'SAR 10 - 15', wait: '30 - 60 minutes', pros: 'Cheapest option; drops off at selected points near Haram area.' },
    ];

    return (
        <div className="bg-white min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <Link href="/blog/" className="hover:text-white">Blog</Link><span>/</span><span>Airport Taxi Guide</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-emerald-600/80 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500">✈️ Airport Guide</span>
                        <span className="bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">Updated 2026</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">Madinah Airport Taxi &<br /><span className="text-emerald-300">Transfer Guide 2026</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Arriving at Prince Mohammad Bin Abdulaziz International Airport (MED)? Learn the best ways to reach your hotel near Masjid an-Nabawi comfortably.</p>
                </div>
            </section>
            <article className="max-w-4xl mx-auto px-4 py-16 space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3"><Plane className="w-6 h-6 text-emerald-700" /><h2 className="text-3xl font-black text-gray-900">Comparing Airport Transport Options</h2></div>
                    <p className="text-gray-700 leading-relaxed text-lg">Whether you are arriving for Umrah, Hajj, or business, choosing the right airport transfer can make a huge difference in starting your trip on a stress-free note. Here is a breakdown of MED airport transport options:</p>
                    <div className="grid gap-6">
                        {transitOptions.map((opt) => (
                            <div key={opt.name} className="border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 transition-colors">
                                <h3 className="font-black text-emerald-800 text-lg mb-2">{opt.name}</h3>
                                <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700 mb-2">
                                    <div><strong>💰 Est. Cost:</strong> {opt.cost}</div>
                                    <div><strong>⏱ Wait Time:</strong> {opt.wait}</div>
                                </div>
                                <p className="text-sm text-gray-600"><strong>Note:</strong> {opt.pros}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-3xl font-black text-gray-900">Important Tips for Airport Arrivals</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Avoid unregistered drivers:</strong> Many drivers in the arrivals hall will offer rides. These are unregulated and often charge double the normal rate or lack proper commercial insurance. Always use official taxis or pre-booked private services.</li>
                        <li><strong>Haram road closures:</strong> Keep in mind that during peak prayer times, several roads directly surrounding Masjid an-Nabawi are closed to vehicle traffic. If you arrive near prayer time, pre-booked drivers know exactly which alternate drop-off points to use.</li>
                        <li><strong>Luggage space:</strong> Standard sedans can only fit 2-3 large bags. If you are traveling with family or carrying water/souvenirs on your return, booking an SUV (like an GMC, H-1, or Innova) is highly recommended.</li>
                        <li><strong>SIM card kiosk:</strong> Pick up a local Saudi SIM card (STC, Mobily, or Zain) at the arrivals hall before exiting so you can stay in touch with your driver.</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-10 text-center">
                    <Navigation className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h2 className="text-3xl font-black mb-4">Pre-Book Your Madinah Airport Transfer</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">Skip the long taxi queues and negotiation at the terminal. Get a professional driver waiting for you with a name plaque.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://wa.me/966569487569?text=Hi,%20I%20need%20to%20book%20a%20private%20transfer%20from%20Madinah%20Airport%20to%20my%20hotel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5"><Phone className="w-5 h-5" /> Book via WhatsApp</a>
                        <Link href="/routes/madinah-makkah/" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg hover:-translate-y-0.5">Rates & Route info <ArrowRight className="w-5 h-5" /></Link>
                    </div>
                </section>
            </article>
        </div>
    );
}
