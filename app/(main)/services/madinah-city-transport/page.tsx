import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Car, Users, Star, Clock, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Madinah Luxury Family Transfer | Private Chauffeur & Transport | Taxi Service KSA',
    description: 'Private family transport and luxury chauffeur in Madinah. Hotel to Prophet\'s Mosque, Ziyarat tours, Madinah airport pickups, and Madinah to Makkah transfers. Licensed drivers 24/7.',
    keywords: [
        'Madinah luxury family transfer',
        'private transport Madinah',
        'Madinah hotel to Haram transfer',
        'Madinah airport taxi',
        'private chauffeur Madinah',
        'Madinah to Makkah private transfer',
        'Madinah Ziyarat driver',
        'family transport Madinah',
        'VIP transport Madinah',
        'luxury transfer Madinah',
        'driver for Madinah',
        'MED airport taxi',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/madinah-city-transport/',
    },
    openGraph: {
        title: 'Madinah Luxury Family Transfer | Private Chauffeur | Taxi Service KSA',
        description: 'Private luxury transport in Madinah. Hotel to Prophet\'s Mosque, Ziyarat tours, airport transfers, and Madinah to Makkah. Family vehicles available 24/7.',
        url: 'https://taxiserviceksa.com/services/madinah-city-transport/',
        type: 'website',
    },
};

export default function MadinahCityTransportPage() {
    const services = [
        { title: "Hotel to Prophet's Mosque", desc: "Private transfer from any Madinah hotel to Masjid an-Nabawi. Driver waits for return. Available at all prayer times including Fajr.", icon: Star },
        { title: 'Madinah Airport Pickup (MED)', desc: "Meet-and-greet at Prince Mohammad bin Abdulaziz Airport (MED). Transfer to Madinah hotels. 20 km, approx. 20–30 minutes.", icon: MapPin },
        { title: 'Madinah Ziyarat Tours', desc: "Full-day Ziyarat driver covering Masjid an-Nabawi, Quba Mosque, Masjid al-Qiblatayn, Uhud Mountain, Al-Baqi cemetery, and dates markets.", icon: Clock },
        { title: 'Madinah → Makkah Transfer', desc: "Private intercity transfer from Madinah to Makkah (420 km, approx. 4.5 hours). Luxury SUV or van with full comfort and rest stops.", icon: Car },
        { title: 'Luxury Family Transport', desc: "GMC Yukon XL or Toyota Hiace for large families. Multi-stop itineraries — mosque visits, Ziyarat, shopping in Madinah's markets.", icon: Users },
        { title: '24/7 Prayer Time Transport', desc: "Available for Tahajjud, Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times. No surge pricing at any hour.", icon: Shield },
    ];

    const routes = [
        { from: 'Madinah Airport (MED)', to: 'Madinah Hotels', dist: '20 km', time: '20–30 min' },
        { from: 'Madinah', to: 'Makkah', dist: '420 km', time: '4.5 hrs' },
        { from: 'Madinah', to: 'Jeddah Airport (JED)', dist: '420 km', time: '4.5 hrs' },
        { from: 'Madinah Hotel', to: "Prophet's Mosque", dist: '1–4 km', time: '5–15 min' },
        { from: 'Madinah', to: 'Yanbu', dist: '220 km', time: '2.5 hrs' },
    ];

    const features = [
        'All drivers are Muslim — full Madinah access',
        'Ministry of Transport licensed',
        'Flight tracking for MED airport pickups',
        'GMC Yukon & Hiace for large families',
        'English, Arabic, and Urdu speaking',
        '24/7 including all prayer times',
        'Private vehicles — no shared rides',
        'Fixed rates — no surge pricing',
        'Child seats available on request',
        'Door-to-door across Madinah',
    ];

    const faqs = [
        {
            question: 'Is there a luxury family transfer service in Madinah?',
            answer: "Yes. Taxi Service KSA provides luxury family transport in Madinah with GMC Yukon XL (7 seats), Toyota Hiace (11 seats), and Hyundai Staria VIP (7 seats). The driver is exclusively assigned to your family. Services include hotel to Prophet's Mosque, Ziyarat tours, and intercity transfers to Makkah and Jeddah Airport.",
        },
        {
            question: "How do I get from Madinah Airport (MED) to Prophet's Mosque by private car?",
            answer: "Pre-book a private transfer from Madinah Airport (MED). The airport is 20 km from the city centre and the journey takes 20–30 minutes. Our driver meets you at the international arrivals exit with a name sign. The vehicle is private and air-conditioned. Booking is done via WhatsApp before your arrival.",
        },
        {
            question: 'Is there a private driver for Ziyarat in Madinah?',
            answer: "Yes. Full-day Ziyarat packages in Madinah include Masjid an-Nabawi, Quba Mosque (first mosque in Islam), Masjid al-Qiblatayn, Mount Uhud and the Uhud battlefield, Al-Baqi Cemetery, Masjid al-Ghamama, and Madinah's famous date markets. Driver waits at each site. Available in English, Arabic, and Urdu.",
        },
        {
            question: 'What is the best way to travel from Madinah to Makkah privately?',
            answer: 'The most comfortable option for families is a private GMC Yukon or Toyota Hiace with driver. The Madinah to Makkah journey is approximately 420 km and takes 4.5 hours by road. Fixed rate with optional rest stops. Ideal for families with elderly members, children, or heavy luggage who prefer door-to-door service over the Haramain train.',
        },
        {
            question: 'Is transport available in Madinah for early morning Fajr prayer?',
            answer: "Yes. Transport in Madinah is available 24/7, including for Fajr (4–5 AM) and Tahajjud (2–3 AM) prayer times. There is no surge pricing for early morning bookings. Pre-booking is recommended for regular Fajr transport during your stay.",
        },
        {
            question: 'Do you provide private transport for Madinah hotel to Masjid an-Nabawi?',
            answer: "Yes. Hotel-to-Haram transfers are available from all Madinah hotels to Masjid an-Nabawi. The driver waits during your prayers and returns you to the hotel. This is especially useful for elderly pilgrims or families with young children who cannot walk long distances. Available at all prayer times, 24 hours a day.",
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Madinah Luxury Family Transport & Private Chauffeur',
        serviceType: 'Private Transport in Madinah',
        provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
        areaServed: [
            { '@type': 'City', name: 'Madinah' },
            { '@type': 'AdministrativeArea', name: 'Madinah Province' },
        ],
        description: "Private luxury and family transport in Madinah. Hotel to Prophet's Mosque, Ziyarat tours, airport transfers, and Madinah to Makkah. All-Muslim drivers, 24/7.",
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="madinah-transport-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">Madinah Transport</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Luxury Family Transfer<br /><span className="text-white/80">in Madinah</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Private hotel transfers, Ziyarat tours, airport pickups, and Madinah–Makkah intercity transport. Comfortable family vehicles with Muslim drivers, available at all prayer times.
                    </p>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" /> Madinah Transport — Quick Facts</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Drivers:</strong> All Muslim — full Madinah access</li>
                            <li><strong className="text-white">MED Airport → City:</strong> 20 km, ~20–30 min</li>
                            <li><strong className="text-white">Madinah → Makkah:</strong> 420 km, ~4.5 hrs</li>
                            <li><strong className="text-white">Availability:</strong> 24/7 including all prayer times</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20transport%20in%20Madinah" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Madinah Transport <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">Email for Quote</Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Madinah Transport Services</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5"><s.icon className="w-7 h-7 text-white" /></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Routes from Madinah</h2></div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th className="px-6 py-4 font-bold">From</th>
                                    <th className="px-6 py-4 font-bold">To</th>
                                    <th className="px-6 py-4 font-bold">Distance</th>
                                    <th className="px-6 py-4 font-bold">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {routes.map((r, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 font-bold text-gray-900">{r.from}</td>
                                        <td className="px-6 py-4 text-gray-700">{r.to}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.dist}</td>
                                        <td className="px-6 py-4 text-gray-600">{r.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center mt-6 text-sm text-gray-500">
                        More routes → <Link href="/routes/" className="text-black font-bold hover:underline">View All Intercity Routes</Link>
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Madinah Transport</h2></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Related Locations</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black">Madinah City Guide</Link></li>
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black">Makkah Transport</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">Jeddah Transport</Link></li>
                                <li><Link href="/routes/madinah-jeddah/" className="text-gray-600 hover:text-black">Madinah → Jeddah Route</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Car className="w-4 h-4" /> Fleet</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-black">GMC Yukon (Families)</Link></li>
                                <li><Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-black">Toyota Hiace (Groups)</Link></li>
                                <li><Link href="/fleet/hyundai-staria/" className="text-gray-600 hover:text-black">Hyundai Staria VIP</Link></li>
                                <li><Link href="/fleet/" className="text-black font-bold hover:underline">All Vehicles →</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2"><Shield className="w-4 h-4" /> Related Services</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/services/umrah-transport/" className="text-gray-600 hover:text-black">Umrah Transport</Link></li>
                                <li><Link href="/services/makkah-city-transport/" className="text-gray-600 hover:text-black">Makkah Transport</Link></li>
                                <li><Link href="/services/madinah-ziyarat/" className="text-gray-600 hover:text-black">Madinah Ziyarat</Link></li>
                                <li><Link href="/services/women-transport/" className="text-gray-600 hover:text-black">Women's Transport</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Madinah Transport Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-base font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Book Private Transport in Madinah</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Hotel to Prophet's Mosque, Ziyarat tours, airport pickups, or Madinah to Makkah — private family vehicles with Muslim drivers available 24/7.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20transport%20in%20Madinah" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">Email for Quote</Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
