import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Plane, Clock, CheckCircle2, Car, Users, Shield, MapPin, ArrowRight, Navigation, DollarSign, Luggage, PhoneCall, FileCheck, Baby } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import AuthorCard from '@/components/AuthorCard';
import JsonLdLocation from '@/components/JsonLdLocation';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Private Airport Transfer Service in Saudi Arabia | Taxi Service KSA',
    description: 'Private airport transfer service across 8 Saudi airports — Jeddah, Riyadh, Madinah, Dammam, Taif, Yanbu, Tabuk and AlUla. Flight tracking, meet-and-greet, fixed rates, 24/7 booking.',
    keywords: ['airport transfer Saudi Arabia', 'private airport taxi Saudi Arabia', 'Jeddah airport transfer', 'Riyadh airport transfer', 'airport pickup Saudi Arabia'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/airport-transfers/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/airport-transfers/',
            'ar': 'https://taxiserviceksa.com/ar/services/airport-transfers/',
            'ur': 'https://taxiserviceksa.com/ur/services/airport-transfers/',
            'x-default': 'https://taxiserviceksa.com/services/airport-transfers/',
        },
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private Airport Transfer Service in Saudi Arabia | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Private Airport Transfer Service in Saudi Arabia | Taxi Service KSA',
        description: 'Private airport transfer service across 8 Saudi airports. Flight tracking, meet-and-greet, fixed rates, 24/7 booking.',
        url: 'https://taxiserviceksa.com/services/airport-transfers/',
        type: 'website',
    },
};

export default function AirportTransfersPage() {
    const airports = [
        {
            name: 'King Abdulaziz International Airport (JED)',
            city: 'Jeddah',
            code: 'JED',
            description: (
                <>
                    The main gateway for Umrah and the busiest airport we serve. See our{' '}
                    <Link href="/guides/jeddah-airport-guide/" className="text-emerald-700 hover:underline">
                        Jeddah Airport guide
                    </Link>{' '}
                    for terminal navigation.
                </>
            ),
            routes: [
                { label: 'JED → Makkah', href: '/routes/jeddah-makkah/' },
                { label: 'JED → Jeddah Hotels', href: '/locations/jeddah/' },
                { label: 'JED → Madinah', href: '/routes/jeddah-madinah/' },
                { label: 'JED → Taif', href: '/routes/jeddah-taif/' },
            ],
            link: '/locations/jeddah/',
            isHub: true
        },
        {
            name: 'King Khalid International Airport (RUH)',
            city: 'Riyadh',
            code: 'RUH',
            description: 'The capital\'s airport and our busiest hub for business and executive travel.',
            routes: [
                { label: 'RUH → Riyadh City', href: '/riyadh-airport-taxi/' },
                { label: 'RUH → KAFD', href: '/riyadh-airport-taxi/' },
                { label: 'RUH → Diplomatic Quarter', href: '/riyadh-airport-taxi/' },
            ],
            link: '/riyadh-airport-taxi/',
            isHub: true
        },
        {
            name: 'King Fahd International Airport (DMM)',
            city: 'Dammam',
            code: 'DMM',
            description: 'Eastern Province gateway, close to Al Khobar and the King Fahd Causeway to Bahrain.',
            routes: [
                { label: 'DMM → Dammam City', href: '/dammam-airport-taxi/' },
                { label: 'DMM → Al Khobar', href: '/dammam-airport-taxi/' },
                { label: 'DMM → Bahrain (Causeway)', href: '/border-crossings/taxi-king-fahd-causeway-border-crossing/' },
            ],
            link: '/dammam-airport-taxi/',
            isHub: true
        },
        {
            name: "Prince Mohammad bin Abdulaziz Airport (MED)",
            city: 'Madinah',
            code: 'MED',
            description: "Serves Madinah, with direct access to the Prophet's Mosque area.",
            routes: [
                { label: "MED → Madinah Hotels", href: '/locations/madinah/' },
                { label: "MED → Prophet's Mosque", href: '/locations/madinah/' },
                { label: 'MED → Makkah', href: '/routes/madinah-makkah/' },
            ],
            link: '/locations/madinah/',
        },
        {
            name: 'Taif Regional Airport (TIF)',
            city: 'Taif',
            code: 'TIF',
            description: 'Mountain resort airport with a cooler climate, popular in summer.',
            routes: [
                { label: 'TIF → Taif Hotels', href: '/locations/taif/' },
                { label: 'TIF → Jeddah', href: '/routes/jeddah-taif/' },
            ],
            link: '/locations/taif/',
        },
        {
            name: 'Prince Abdul Mohsin bin Abdulaziz Airport (YNB)',
            city: 'Yanbu',
            code: 'YNB',
            description: 'Serves the industrial city and Red Sea coastal area.',
            routes: [
                { label: 'YNB → Yanbu Hotels', href: '/locations/yanbu/' },
                { label: 'YNB → Madinah', href: '/locations/madinah/' },
            ],
            link: '/locations/yanbu/',
        },
        {
            name: 'Tabuk Regional Airport (TUU)',
            city: 'Tabuk',
            code: 'TUU',
            description: 'Northwest gateway, serving Tabuk city and connections toward NEOM.',
            routes: [
                { label: 'TUU → Tabuk City', href: '/tabuk-airport-taxi/' },
            ],
            link: '/tabuk-airport-taxi/',
        },
        {
            name: 'AlUla International Airport (ULH)',
            city: 'AlUla',
            code: 'ULH',
            description: 'Tourism airport for the UNESCO heritage sites, gateway to Hegra and Dadan.',
            routes: [
                { label: 'ULH → AlUla Hotels', href: '/locations/alula/' },
                { label: 'ULH → Hegra', href: '/locations/alula/' },
            ],
            link: '/locations/alula/',
        },
    ];

    const bookingInfo = [
        'Airport (which of the 8 we serve)',
        'Flight number',
        'Arrival or departure date and time',
        'Terminal, if known',
        'Destination or hotel name',
        'Number of passengers',
        'Number and size of bags',
        'Vehicle preference',
        'Child seat, if needed',
    ];

    const airportGuides = [
        { title: 'Jeddah to Makkah Taxi Fare Guide 2026', href: '/blog/jeddah-airport-makkah-taxi-fare-2026/' },
        { title: 'Jeddah Airport Complete Guide (JED)', href: '/guides/jeddah-airport-guide/' },
        { title: 'How to Get from Riyadh Airport to City Centre', href: '/blog/how-to-get-from-riyadh-airport-to-city/' },
        { title: 'How Much Is a Taxi from Riyadh Airport', href: '/blog/how-much-is-taxi-from-riyadh-airport/' },
        { title: 'Madinah Airport Taxi & Transfer Guide', href: '/blog/madinah-airport-taxi-transfer-guide/' },
        { title: 'How to Get from Dammam Airport to City', href: '/blog/how-to-get-from-dammam-airport-to-city/' },
        { title: 'How to Get from Tabuk Airport to City', href: '/blog/how-to-get-from-tabuk-airport-to-city/' },
        { title: 'VIP Airport Lounges in Saudi Arabia', href: '/blog/vip-airport-lounges-saudi-arabia-guide-2026/' },
    ];

    const vehicles = [
        { name: 'Toyota Camry', capacity: '1-3 passengers', luggage: '2 large bags', ideal: 'Business travelers, couples', link: '/fleet/toyota-camry/' },
        { name: 'GMC Yukon XL', capacity: '5-7 passengers', luggage: '4-5 large bags', ideal: 'Families, group travelers', link: '/fleet/gmc-yukon/' },
        { name: 'Hyundai Staria', capacity: '5-7 passengers', luggage: '4+ large bags', ideal: 'Families wanting extra comfort', link: '/fleet/hyundai-staria/' },
        { name: 'Toyota Hiace', capacity: '8-11 passengers', luggage: 'Large group capacity', ideal: 'Larger groups', link: '/fleet/toyota-hiace/' },
        { name: 'Mercedes-Benz Sprinter', capacity: '12-14 passengers', luggage: 'Depends on seating configuration', ideal: 'Large VIP groups', link: '/fleet/mercedes-sprinter/' },
    ];

    const faqs = [
        {
            question: "How does the meet-and-greet service work at Saudi airports?",
            answer: "Your driver waits in the arrivals hall with a name sign. The exact meeting point can vary by terminal and airport, so your booking confirmation will specify the current meeting point and terminal instructions for your specific flight."
        },
        {
            question: "Is it better to use Uber, Careem, or a private transfer from the airport?",
            answer: "Ride-hailing apps are available but often face surge pricing and pickup-zone restrictions during busy arrival periods. A pre-booked private transfer gives you a fixed price agreed in advance, a driver waiting for you specifically, and larger vehicles (GMC, Hiace) for families or heavy luggage that aren't always available on-demand."
        },
        {
            question: "What happens if my flight is delayed?",
            answer: "We monitor the flight information provided with your booking. If your arrival time changes because of a delay, the pickup time adjusts accordingly at no extra charge for delays up to 3 hours. For longer delays, message us on WhatsApp to confirm the updated arrival details."
        },
        {
            question: "Do you provide airport transfers for late-night or early-morning flights?",
            answer: "Yes, service runs 24/7 for all flight times, including late-night and early-morning arrivals, at the same fixed rates as daytime service. We recommend booking 24-48 hours ahead for flights between midnight and 5 AM."
        },
        {
            question: "How much waiting time is included after landing?",
            answer: "Free waiting time is 60 minutes for domestic flights and 90 minutes for international flights, counted from actual landing time (not the scheduled time), to allow for baggage claim and immigration."
        },
        {
            question: "What if I have oversized or extra luggage?",
            answer: "Tell us your bag count and any oversized items when booking, and we'll match you to a vehicle with enough space — a GMC Yukon or Toyota Hiace instead of a sedan, for example. This avoids arriving to find your vehicle can't fit everything."
        },
        {
            question: "Can I travel from Jeddah Airport to Makkah directly?",
            answer: (
                <>
                    Yes. The{' '}
                    <Link href='/routes/jeddah-makkah/' className='text-primary hover:underline'>
                        Jeddah Airport to Makkah route
                    </Link>{' '}
                    is our most-booked transfer — about 80km, usually 60-90 minutes, with a fixed rate that includes the arrivals meet-and-greet.
                </>
            )
        },
        {
            question: "Can I book a return airport transfer?",
            answer: "Yes, return transfers are available for all 8 airports at the same rate as pickup. For departures, we recommend the driver arrive 3-4 hours before international flights and 2-3 hours before domestic flights, depending on your airline's check-in requirements."
        },
        {
            question: "Can I request child seats?",
            answer: "Yes, infant, toddler, and booster seats are available on request at no extra charge — just specify the child's age when booking so the right seat is ready."
        },
        {
            question: "Do drivers speak English for international travelers?",
            answer: "Yes, all drivers speak English and Arabic, and many also speak Urdu. Drivers can help with basic directions and local information for international passengers."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Saudi Arabia Airport"
                description="Private airport transfer service across 8 Saudi Arabian airports: Jeddah, Riyadh, Dammam, Madinah, Taif, Yanbu, Tabuk and AlUla. Meet-and-greet, flight tracking, fixed rates."
                services={[
                    { name: 'Airport Pickup', description: 'Meet-and-greet service at arrivals across 8 Saudi airports.' },
                    { name: 'Airport Drop-off', description: 'Departure transfers from your hotel or residence.' },
                    { name: 'Flight Tracking', description: 'Automatic pickup adjustment for delayed or early flights.' },
                    { name: 'Family & Group Vehicles', description: 'GMC Yukon, Hyundai Staria, Hiace and Sprinter for groups and luggage.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-3.webp"
            />
            <JsonLdFAQ faqs={faqs.map(f => ({
                question: f.question,
                answer: typeof f.answer === 'string'
                    ? f.answer
                    : "Yes. The Jeddah Airport to Makkah route is our most-booked transfer — about 80km, usually 60-90 minutes, with a fixed rate that includes the arrivals meet-and-greet."
            }))} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-primary/20 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-sm border border-primary/20">
                        Airport Transfers
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 px-4 leading-tight">
                        Private Airport Transfer Service in Saudi Arabia
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-10">
                        Private airport taxis, executive cars, and chauffeur-driven transfers across <strong>8 Saudi airports</strong> — pre-booked, fixed-rate, with flight tracking and a driver waiting for you at arrivals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-12">
                        <Button asChild size="lg" className="bg-primary hover:bg-emerald-600 text-white font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <Link href="https://wa.me/966563573531?text=Hello,%20I%20want%20to%20book%20Airport%20Transfer" target="_blank">
                                Book via WhatsApp
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl transition-all w-full sm:w-auto">
                            <Link href="#airports">
                                See Airports We Serve
                            </Link>
                        </Button>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl mb-4 text-left max-w-4xl mx-auto">
                        <p className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Plane className="w-5 h-5 text-primary" />
                            Quick Facts
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-sm">
                            <li><strong className="text-white">Airports Covered:</strong> JED, RUH, DMM, MED, TIF, YNB, TUU, ULH.</li>
                            <li><strong className="text-white">Wait Policy:</strong> 60 mins domestic, 90 mins international, free.</li>
                            <li><strong className="text-white">Tracking:</strong> Flight status monitored for every booking.</li>
                            <li><strong className="text-white">Meeting Point:</strong> Confirmed with your booking for your specific flight.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Intro — replaces the old Enterprise SEO section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Saudi Arabia Airport Transfer Service</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                        <p>
                            We run private, pre-booked transfers at 8 airports across the Kingdom — Jeddah, Riyadh, Dammam, Madinah, Taif, Yanbu, Tabuk, and AlUla. Every booking covers airport pickup, airport drop-off, hotel transfers, and intercity connections such as Jeddah Airport to Makkah or Madinah.
                        </p>
                        <p>
                            Each transfer includes flight monitoring, a driver waiting at the agreed arrivals meeting point with your name, and luggage assistance to the vehicle. Vehicles range from a standard sedan for one or two passengers up to a Mercedes Sprinter for larger groups — see <Link href="#vehicles" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">vehicle options below</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* How Airport Pickup Works */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Our Saudi Airport Transfers Work</h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Book Your Transfer', desc: 'Send your flight number, arrival time, terminal (if known), and destination on WhatsApp.' },
                            { step: '2', title: 'We Monitor Your Flight', desc: 'Your pickup timing adjusts automatically if your flight is delayed or arrives early.' },
                            { step: '3', title: 'Meet Your Driver', desc: 'Your driver waits at the agreed arrivals meeting point with a name sign — the exact spot is confirmed in your booking.' },
                            { step: '4', title: 'Luggage Assistance', desc: 'The driver helps with your bags and escorts you to the vehicle.' },
                            { step: '5', title: 'Direct Transfer', desc: 'Travel directly to your hotel, residence, business location, or connecting city — one vehicle, no transfers.' },
                        ].map((s) => (
                            <div key={s.step} className="flex gap-6 bg-white p-6 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-lg shrink-0">{s.step}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Airports Coverage Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="airports">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Saudi Airports We Serve</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Pre-booked private transfers only — we don't cover local street-hail requests.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {airports.map((airport, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-primary transition-all h-full flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                                        <Plane className="w-7 h-7 text-white" />
                                    </div>
                                    {airport.isHub && (
                                        <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                                            MAJOR HUB
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {airport.name}
                                </h3>
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">{airport.city}</span>
                                    <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded">
                                        {airport.code}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4 flex-1 text-sm">{airport.description}</p>

                                <div className="mb-4">
                                    <div className="text-sm font-bold text-gray-900 mb-2">Popular Transfers:</div>
                                    <div className="space-y-1">
                                        {airport.routes.map((route, idx) => (
                                            <Link key={idx} href={route.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors group">
                                                <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:bg-primary shrink-0"></div>
                                                <span>{route.label}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <Link href={airport.link} className="flex items-center justify-between text-primary font-bold text-sm hover:underline">
                                        <span>View {airport.city} Transfers</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="vehicles">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Choose Your Vehicle</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Matched to your passenger count and luggage, from a solo sedan to a full-group Sprinter.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100 bg-gray-50">
                                        <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Vehicle</th>
                                        <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Passengers</th>
                                        <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Luggage</th>
                                        <th className="py-4 px-6 text-xs font-black text-gray-400 uppercase tracking-wider">Best For</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {vehicles.map((v) => (
                                        <tr key={v.name} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="py-5 px-6">
                                                <Link href={v.link} className="font-bold text-gray-900 text-sm hover:text-primary">{v.name}</Link>
                                            </td>
                                            <td className="py-5 px-6 text-gray-600 text-sm">{v.capacity}</td>
                                            <td className="py-5 px-6 text-gray-600 text-sm">{v.luggage}</td>
                                            <td className="py-5 px-6 text-gray-600 text-sm">{v.ideal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/fleet/" className="text-primary font-bold hover:underline">Explore Entire Fleet →</Link>
                    </div>
                </div>
            </section>

            {/* Booking info block */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We Need to Book Your Airport Transfer</h2>
                    </div>
                    <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {bookingInfo.map((item) => (
                            <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100">
                                <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                                <span className="text-sm font-bold text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Book a Private Transfer?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            'Flight tracking with automatic delay adjustment',
                            'Ministry of Transport licensed drivers',
                            'Name sign at the arrivals meeting point',
                            'Luggage assistance included',
                            'No self-drive — every vehicle has a licensed driver',
                            'Fixed rates, no surge pricing',
                            '24/7 service for every flight time',
                            '60 min domestic / 90 min international free waiting',
                            'Child seats available on request',
                            'English, Arabic and Urdu-speaking drivers',
                        ].map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium leading-relaxed text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Internal Links Hub */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Navigation className="w-5 h-5 text-primary" /> Popular Airport Routes
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/routes/jeddah-makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Jeddah Airport (JED) to Makkah</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/routes/jeddah-to-aziziyah-makkah-taxi/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Jeddah Airport to Aziziyah, Makkah</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/routes/" className="text-primary font-bold hover:underline">Explore All Saudi Airport Transfers →</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Car className="w-5 h-5 text-primary" /> Recommended Airport Fleet
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>GMC Yukon (Family SUV)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Toyota Hiace (Large Groups)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/fleet/" className="text-primary font-bold hover:underline">Explore Entire Fleet →</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Car className="w-5 h-5 text-primary" /> Related Services
                                </h4>
                                <ul className="space-y-3 text-sm">
                                    <li><Link href="/services/riyadh-hotel-transfer/" className="text-gray-600 hover:text-primary transition-colors">Riyadh Hotel Transfer</Link></li>
                                    <li><Link href="/services/vip-chauffeur/" className="text-gray-600 hover:text-primary transition-colors">Chauffeur Service</Link></li>
                                    <li><Link href="/services/bilingual-chauffeur/" className="text-gray-600 hover:text-primary transition-colors">English-Speaking Driver</Link></li>
                                    <li><Link href="/services/women-transport/" className="text-gray-600 hover:text-primary transition-colors">Women's Private Transport</Link></li>
                                    <li><Link href="/services/group-hiace-hire/" className="text-gray-600 hover:text-primary transition-colors">Group Van (Hiace) Hire</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Airport Transfer Guides — real, on-topic content only */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Guides</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Airport Transfer Guides</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Fares, terminals, and practical arrival information for the airports we serve.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {airportGuides.map((g) => (
                            <Link key={g.href} href={g.href} className="bg-white hover:bg-primary/5 border border-gray-100 hover:border-primary rounded-xl p-4 transition-colors">
                                <span className="font-bold text-gray-900 text-sm">{g.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-black text-white font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left hover:no-underline py-4">
                                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4">
                                    <p className="text-gray-600 leading-relaxed pt-2">{faq.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Author Section */}
            <div className="max-w-4xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-sky-50" />
            </div>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Book Your Saudi Airport Transfer
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Send us your airport, flight number, destination, date, passengers, and luggage. We'll confirm vehicle availability and give you a fixed transfer quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                            <Link href="/booking?service=airport-transfer">
                                <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                Email for Custom Quote
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
