import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, MapPin, Car, Users, Star, Clock, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Makkah VIP Transport Service | Private Chauffeur & Family Transfer | Taxi Service KSA',
    description: 'Private VIP transport and family chauffeur in Makkah. Hotel to Haram transfers, Ziyarat tours, Jeddah airport to Makkah, and luxury family transport. Licensed drivers 24/7.',
    keywords: [
        'Makkah VIP transport service',
        'Makkah family transport service',
        'private chauffeur Makkah',
        'Makkah hotel to Haram transfer',
        'Jeddah airport to Makkah private transfer',
        'luxury transport Makkah',
        'VIP taxi Makkah',
        'family driver Makkah',
        'Makkah city transport',
        'private car Makkah',
        'Makkah to Madinah private transfer',
        'chauffeur Makkah Saudi Arabia',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/makkah-city-transport/',
    },
    openGraph: {
        title: 'Makkah VIP Transport | Private Family Chauffeur | Taxi Service KSA',
        description: 'VIP and family transport in Makkah. Hotel to Haram, Ziyarat tours, airport transfers, and Makkah to Madinah. Licensed drivers, luxury fleet, 24/7.',
        url: 'https://taxiserviceksa.com/services/makkah-city-transport/',
        type: 'website',
    },
};

export default function MakkahCityTransportPage() {
    const services = [
        { title: 'Hotel to Haram Transfers', desc: 'Private vehicle from any Makkah hotel to Masjid al-Haram. Driver waits for return. Available at all prayer times including Fajr and Isha.', icon: Star },
        { title: 'Jeddah Airport → Makkah', desc: 'Meet-and-greet at King Abdulaziz International Airport (JED) with transfer to Makkah hotels. 80 km, approx. 60–75 minutes.', icon: MapPin },
        { title: 'Makkah Ziyarat Tours', desc: 'Full-day guided Ziyarat driver covering Masjid al-Haram, Cave of Hira, Cave of Thawr, Mina, Muzdalifah, Arafat, and Jabal al-Nour.', icon: Clock },
        { title: 'Makkah → Madinah Transfer', desc: 'Private intercity transfer from Makkah to Madinah (420 km, approx. 4.5 hours). Luxury SUV or van with full comfort.', icon: Car },
        { title: 'VIP Family Transport', desc: 'Spacious GMC Yukon or Toyota Hiace for large families. Multi-stop city itineraries, shopping, and hospital visits within Makkah.', icon: Users },
        { title: 'Late Night & Early Morning', desc: 'Transport available for Tahajjud, Fajr, and Isha prayers. No surge pricing. Reliable pickups at 3 AM, 4 AM, and beyond.', icon: Shield },
    ];

    const routes = [
        { from: 'Jeddah Airport (JED)', to: 'Makkah Hotels', dist: '80 km', time: '60–75 min' },
        { from: 'Makkah', to: 'Madinah', dist: '420 km', time: '4.5 hrs' },
        { from: 'Makkah Hotel', to: 'Masjid al-Haram', dist: '1–5 km', time: '5–20 min' },
        { from: 'Makkah', to: 'Taif', dist: '75 km', time: '1.5 hrs' },
        { from: 'Makkah', to: 'Jeddah', dist: '85 km', time: '60–90 min' },
    ];

    const features = [
        'Non-Muslim drivers do not enter Makkah city centre',
        'All drivers are Muslim — full access to all areas',
        'Ministry of Transport licensed',
        'Flight tracking for JED airport pickups',
        'GMC Yukon & Hiace for large families',
        'English, Arabic, and Urdu speaking',
        '24/7 including prayer times',
        'No shared rides — private vehicle only',
        'Child seats on request',
        'Fixed rates — no surge pricing',
    ];

    const faqs = [
        {
            question: 'Is there a VIP transport service in Makkah?',
            answer: 'Yes. Taxi Service KSA provides VIP private transport in Makkah including hotel-to-Haram transfers, Ziyarat tours, and intercity transfers to Madinah and Jeddah. All drivers are Muslim and can access all areas of Makkah. Vehicles include GMC Yukon XL and Toyota Hiace for families and groups.',
        },
        {
            question: 'How do I get from Jeddah Airport to Makkah by private car?',
            answer: 'Pre-book a private transfer from Jeddah Airport (JED) to Makkah. The distance is 80 km and the journey takes approximately 60–75 minutes. Our driver meets you at the arrivals terminal with a name sign. The vehicle is private — no shared seats. Booking is done via WhatsApp before your flight.',
        },
        {
            question: 'Can I book a private family driver in Makkah?',
            answer: 'Yes. Family transport in Makkah is available with GMC Yukon XL (7 seats), Toyota Hiace (11 seats), or Hyundai Staria VIP (7 seats). The driver is exclusively assigned to your family for the duration of the booking. Multi-stop itineraries — Haram visits, Ziyarat, shopping, and hospital — are all supported.',
        },
        {
            question: 'Is there private transport for Ziyarat in Makkah?',
            answer: 'Yes. Full-day Ziyarat driver packages are available in Makkah. Typical Ziyarat stops include Masjid al-Haram, Cave of Hira (Jabal al-Nour), Cave of Thawr, Mina, Muzdalifah, Arafat (Jabal ar-Rahmah), and the Abraj Al-Bait area. Driver waits at each site. English, Arabic, and Urdu speaking drivers available.',
        },
        {
            question: 'What is the best way to travel from Makkah to Madinah privately?',
            answer: 'The most comfortable option is a private GMC Yukon or Toyota Hiace with driver. The journey from Makkah to Madinah is approximately 420 km and takes 4.5 hours. Fixed rate, air-conditioned vehicle, with optional rest stops en route. This is ideal for families, elderly pilgrims, and groups who prefer comfort over the Haramain High-Speed Railway.',
        },
        {
            question: 'Is there a late-night transport service in Makkah for Fajr prayer?',
            answer: 'Yes. Transport is available at all hours in Makkah, including for Fajr (3–4 AM), Tahajjud (2–3 AM), and Isha prayers. There are no surge prices for late-night or early-morning bookings. Pre-booking is recommended for very early morning pickups.',
        },
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Makkah VIP & Family Transport Service',
        serviceType: 'Private Transport in Makkah',
        provider: { '@type': 'Organization', name: 'Taxi Service KSA', url: 'https://taxiserviceksa.com' },
        areaServed: [
            { '@type': 'City', name: 'Makkah' },
            { '@type': 'AdministrativeArea', name: 'Makkah Province' },
        ],
        description: 'Private VIP and family transport in Makkah. Hotel to Haram, Ziyarat tours, airport transfers, and Makkah to Madinah. All-Muslim drivers with full city access.',
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script id="makkah-transport-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <JsonLdFAQ faqs={faqs} />

            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-1.webp')] bg-cover bg-center" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-6">Makkah Transport</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        VIP & Family Transport<br /><span className="text-white/80">in Makkah</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        Private hotel-to-Haram transfers, Ziyarat tours, Jeddah airport pickups, and Makkah–Madinah intercity transport. All-Muslim drivers with full access to Makkah's sacred areas.
                    </p>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto text-left mb-10">
                        <p className="text-base font-bold text-white mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-400" /> Makkah Transport — Quick Facts</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
                            <li><strong className="text-white">Drivers:</strong> All Muslim — full Makkah access</li>
                            <li><strong className="text-white">JED → Makkah:</strong> 80 km, ~60–75 min</li>
                            <li><strong className="text-white">Makkah → Madinah:</strong> 420 km, ~4.5 hrs</li>
                            <li><strong className="text-white">Availability:</strong> 24/7 including prayer times</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20transport%20in%20Makkah" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                Book Makkah Transport <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl">Email for Quote</Button>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Makkah Transport Services</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div key={i} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <s.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Routes from Makkah</h2>
                    </div>
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
                    <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Makkah Transport</h2></div>
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
                                <li><Link href="/locations/makkah/" className="text-gray-600 hover:text-black">Makkah City Guide</Link></li>
                                <li><Link href="/locations/jeddah/" className="text-gray-600 hover:text-black">Jeddah Transport</Link></li>
                                <li><Link href="/locations/madinah/" className="text-gray-600 hover:text-black">Madinah Transport</Link></li>
                                <li><Link href="/routes/jeddah-makkah/" className="text-gray-600 hover:text-black">Jeddah → Makkah Route</Link></li>
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
                                <li><Link href="/services/airport-transfers/" className="text-gray-600 hover:text-black">Airport Transfers</Link></li>
                                <li><Link href="/services/madinah-city-transport/" className="text-gray-600 hover:text-black">Madinah Transport</Link></li>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Makkah Transport Questions</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Book Private Transport in Makkah</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Hotel to Haram, Ziyarat tours, airport pickups, or Makkah to Madinah — private vehicles with Muslim drivers available 24/7.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="https://wa.me/966552202642?text=Hello,%20I%20need%20transport%20in%20Makkah" target="_blank">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">WhatsApp Booking</Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">Email for Quote</Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
