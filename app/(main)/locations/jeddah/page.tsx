import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, Building2, ArrowRight, User, Mail } from 'lucide-react';
import Hero from '@/components/Hero';
import QuestionsDisplay from '@/components/QuestionsDisplay';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';
import QuestionForm from '@/components/seo/QuestionForm';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import RelatedLocations from '@/components/seo/RelatedLocations';
import TopicCluster from '@/components/seo/TopicCluster';
import RouteFleetSection from '@/components/RouteFleetSection';
import JsonLdLocation from '@/components/JsonLdLocation';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { jeddahHotels } from '@/data/jeddahHotels';



export const metadata: Metadata = {
    title: 'Private Car Transfer, Taxi and Chauffeur Service in Jeddah | KAIA Airport Pickup | Taxi Service KSA',
    description: 'Premium private transfer service in Jeddah for King Abdulaziz International Airport (KAIA). Executive chauffeur service to Makkah hotels and Madinah. Professional international standards.',
    keywords: ['Jeddah VIP transfer service', 'KAIA premium airport transfer', 'Jeddah to Makkah VIP transfer', 'Executive chauffeur Jeddah', 'Jeddah airport VIP pickup', 'Luxury private driver Jeddah', 'Jeddah to Makkah premium car', 'Jeddah to Madinah VIP transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/locations/jeddah/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/jeddah/',
            'ar': 'https://taxiserviceksa.com/ar/locations/jeddah/',
            'ur': 'https://taxiserviceksa.com/ur/locations/jeddah/',
            'x-default': 'https://taxiserviceksa.com/locations/jeddah/',
        }
    },
    openGraph: {
        title: 'Best Private Car Transfer, Taxi and Chauffeur Service in Jeddah | Airport & Makkah Transfers | Taxi Service KSA',
        description: 'Pre-booked premium private transfers from KAIA Terminal 1 & North Terminal directly to hotels. Fixed rates available.',
        url: 'https://taxiserviceksa.com/locations/jeddah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/jeddah-corniche-sunset.webp', alt: 'Jeddah Corniche Waterfront' }],
    },
};

export default async function JeddahPage() {
    const services = [
        { name: 'Airport Pickup', description: 'Executive Meet & Greet at KAIA (Terminal 1 & North). Flight tracking included.', icon: Plane },
        { name: 'Jeddah to Makkah', description: 'Premium private transfer for pilgrims. Guaranteed comfort directly to your hotel.', icon: Car },
        { name: 'Jeddah to Madinah', description: 'Executive long-distance transfer to the Prophet\'s City. Spacious & reliable.', icon: MapPin },
        { name: 'Full-Day Chauffeur', description: 'Exclusive hourly or daily hire for business meetings, shopping, or tours.', icon: User },
    ];

    const jeddahImages = [
        '/jeddah-airport-terminal.webp',
        '/jeddah-corniche-sunset.webp',
        '/jeddah-city-night.webp',
    ];

    const distanceData = [
        { destination: 'Makkah (Haram)', distance: '90 km', time: '1h 15m', route: 'Haramain Expy' },
        { destination: 'Madinah', distance: '415 km', time: '4h - 4h 30m', route: 'Route 15' },
        { destination: 'Taif', distance: '170 km', time: '2h', route: 'Al Hada Rd' },
        { destination: 'Obhur (North)', distance: '35 km', time: '40 mins', route: 'Corniche Rd' }
    ];

    const faqs = [
        {
            question: "How much is a taxi from Jeddah Airport to Makkah?",
            answer: "A private sedan starts from SAR 300, while a GMC/SUV for families starts from SAR 600. The price is fixed and includes waiting time and all tolls."
        },
        {
            question: "How much does a private transfer from Jeddah to Madinah cost?",
            answer: "A private sedan from Jeddah to Madinah starts from SAR 450. The 415km journey typically takes 4 to 4.5 hours, and GMC/SUV options are available for families and groups."
        },
        {
            question: "Where does the driver meet passengers at KAIA?",
            answer: "For Terminal 1 (the newer terminal), the meeting point is usually near the Aquarium in the arrival hall. For the North Terminal, the driver waits at the designated arrivals pickup point. Either way, our driver holds a name sign."
        },
        {
            question: "Do you provide airport pickup at Terminal 1?",
            answer: "Yes, we cover both Terminal 1 and the North Terminal at King Abdulaziz International Airport. Let us know your terminal when booking so your driver waits at the right entrance."
        },
        {
            question: "Do you track delayed flights at Jeddah Airport?",
            answer: "Yes. We track your flight status and adjust your driver's arrival time automatically, with up to 90 minutes of free waiting time included."
        },
        {
            question: "Can I book a private car from Jeddah to Makkah for Umrah?",
            answer: "Yes, this is one of our most-booked routes. Vehicles are set up for pilgrims with extra luggage space, and your driver can stop at the designated Miqat (usually Qarn al-Manazil or Juhfah depending on your route) so you can enter Ihram."
        },
        {
            question: "Can I book a GMC or van for a family transfer?",
            answer: "Yes, the GMC Yukon comfortably seats families with luggage, and the Toyota HiAce is available for larger groups. Both can be booked for any Jeddah, Makkah, or Madinah route."
        },
        {
            question: "Can you provide a round-trip Jeddah airport transfer?",
            answer: "Yes, round-trip bookings are available and can be arranged in a single booking — just give us your return flight details when you book the outbound leg."
        },
        {
            question: "Do you provide full-day chauffeur service in Jeddah?",
            answer: "Yes, we offer hourly and full-day chauffeur hire for business meetings, shopping, sightseeing, or multiple stops around the city."
        },
        {
            question: "Can I book a transfer from Jeddah to Taif?",
            answer: "Yes, the 170km drive to Taif via Al Hada Road takes around 2 hours. This route is popular for its cooler mountain climate, especially in summer."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Jeddah"
                description="Professional transfers in Jeddah. Specializing in King Abdulaziz International Airport (KAIA) pickups, premium Makkah and Madinah transfers, and executive city chauffeur services."
                services={[
                    { name: 'KAIA Airport Pickup', description: 'Executive meet & greet at Terminal 1 and North Terminal.' },
                    { name: 'Jeddah to Makkah', description: 'Premium door-to-door transfers for pilgrims and travelers.' },
                    { name: 'Jeddah to Madinah Executive', description: 'Long-distance transfers to the Prophet\'s City.' },
                    { name: 'Full-Day Chauffeur', description: 'Dedicated executive driver for business, shopping, and tours.' }
                ]}

                image="https://taxiserviceksa.com/jeddah-airport-terminal.webp"
            />

            <Hero
                images={jeddahImages}
                h1Text="Private Car Transfer, Taxi and Chauffeur Service in Jeddah"
                bookingFormTitle="WhatsApp Booking for Premium Transfer in Jeddah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Chauffeur Service Jeddah
                    </span>
                }
                subtitle="Premium KAIA Airport Transfers & Executive Makkah Transport"
                location="Jeddah • Makkah • Madinah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                </div>
            </Hero>

            {/* Premium Service Disclaimer */}
            <div className="bg-amber-50 border-y border-amber-200 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        OFFICIAL NOTE: We specialize in pre-booked Airport, Intercity, and Full-Day transfers. We do NOT provide local short-distance hailing.
                    </p>
                </div>
            </div>

            {/* Breadcrumb Navigation */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations/" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Locations
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold">Jeddah</span>
                    </nav>
                </div>
            </section>

            {/* H2 #1 — Jeddah Private Transfer and Chauffeur Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-gray-900 font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full inline-block border border-primary/20">
                            Available Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mt-6 mb-4">
                            Jeddah Private Transfer and Chauffeur Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Experience the highest standard of private transfers in Jeddah — an executive alternative to standard airport taxis, built for international travelers, business executives, and pilgrims. Our service covers KAIA airport pickups, Makkah and Madinah transfers, intercity chauffeur trips, and full-day hire, all with one dedicated driver from pickup to drop-off.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-black/20 hover:shadow-xl transition-all duration-300 text-center group"
                            >
                                <div className="bg-gray-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                                    <service.icon className="w-8 h-8 text-black" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* H2 #2 — Jeddah Airport Transfer from KAIA */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                                <Plane className="w-4 h-4 text-black" />
                                <span className="text-sm font-semibold text-gray-900">Airport Transfers</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Jeddah Airport Transfer from King Abdulaziz International Airport
                            </h2>

                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">KAIA Airport Pickup</h3>
                                    <p className="text-base">We meet you inside the arrivals hall with a name board, whichever terminal you land at, and take you directly to your hotel or destination in one private vehicle.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Terminal 1 Pickup</h3>
                                    <p className="text-base">For Terminal 1, our driver waits near the Aquarium in the arrivals hall — the standard meeting point most international flights use.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">North Terminal Pickup</h3>
                                    <p className="text-base">For the North Terminal, your driver waits at the designated arrivals pickup point, holding your name sign.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Flight Tracking and Delayed Flights</h3>
                                    <p className="text-base">We track your flight status and adjust pickup timing automatically — up to 90 minutes of free waiting is included if your flight is delayed.</p>
                                </div>
                            </div>

                            <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                                <p className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    Flight Delayed? We track your flight and wait for free up to 90 minutes!
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                                <Image
                                    src="/jeddah-airport-terminal.webp"
                                    alt="Chauffeur waiting for airport pickup at King Abdulaziz International Airport Jeddah"
                                    width={700}
                                    height={600}
                                    className="relative rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2 #3 — Jeddah to Makkah */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative order-1">
                            <Image
                                src="/makkah-grand-mosque.webp"
                                alt="Private chauffeur transfer from Jeddah to the Grand Mosque in Makkah"
                                width={700}
                                height={550}
                                className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                            />
                        </div>
                        <div className="order-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Jeddah to Makkah Private Taxi and Chauffeur Service
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                <Link href="/routes/jeddah-makkah/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">
                                    Our Jeddah to Makkah private transfer
                                </Link>{' '}
                                covers the 90km run in around 1 hour 15 minutes via the Haramain Expressway. This is our most-booked route, used daily by pilgrims travelling for Umrah, families, and business travelers heading to Makkah hotels.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Every vehicle on this route carries extra luggage space for Ihram bags, and your driver can stop at the designated Miqat point on request. See full pricing, vehicle options, and route details on our{' '}
                                <Link href="/routes/jeddah-makkah/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">
                                    Jeddah Airport to Makkah transfer page
                                </Link>.
                            </p>
                            <Link href="/routes/jeddah-makkah/">
                                <Button className="bg-gray-900 text-white hover:bg-gray-800 font-bold px-8 py-6 rounded-2xl">
                                    View Jeddah to Makkah Route <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2 #4 — Jeddah to Madinah */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Jeddah to Madinah Private Transfer
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                A{' '}
                                <Link href="/routes/jeddah-madinah/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">
                                    private car from Jeddah to Madinah
                                </Link>{' '}
                                covers the full 415km stretch in around 4 to 4.5 hours, direct to your Madinah hotel or the area around the Prophet's Mosque.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                This is a genuine long-distance journey — our GMC Yukon is the most popular choice here for its stability on the highway. See timings, stops, and pricing on our{' '}
                                <Link href="/routes/jeddah-madinah/" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary">
                                    Jeddah to Madinah taxi page
                                </Link>.
                            </p>
                            <Link href="/routes/jeddah-madinah/">
                                <Button className="bg-gray-900 text-white hover:bg-gray-800 font-bold px-8 py-6 rounded-2xl">
                                    View Jeddah to Madinah Route <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <Image
                                src="/madinah-prophets-mosque.webp"
                                alt="Private car transfer from Jeddah to the Prophet's Mosque in Madinah"
                                width={700}
                                height={550}
                                className="rounded-2xl shadow-2xl w-full h-auto border-4 border-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* H2 #5 — Jeddah to Taif and Other Intercity Transfers */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-6 text-center">
                        Jeddah to Taif and Other Intercity Transfers
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl mx-auto text-center">
                        Beyond Makkah and Madinah, we run regular private transfers to the wider region around Jeddah.
                    </p>
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm max-w-3xl mx-auto">
                        <ul className="space-y-3">
                            <li>
                                <Link href="/routes/jeddah-taif/" className="text-gray-700 hover:text-primary transition-colors flex items-center justify-between group py-2">
                                    <span className="font-semibold">Jeddah to Taif private transfer (170km, ~2h)</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* H2 (pricing) — Jeddah Transfer Prices */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current inline-block" /> WhatsApp Booking</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Jeddah Transfer Prices
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            No surge pricing. These are starting "from" fares — your final price depends on vehicle type, passenger count, luggage, exact pickup/drop-off, date and time, and whether you need a return trip.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">KAIA Airport to Jeddah Hotels</h3>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 100
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                KAIA to any Jeddah hotel
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                BEST SELLER
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Jeddah Airport to Makkah</h3>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 200
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Direct to Hotel / Haram
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Jeddah to Madinah</h3>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 450
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Long Distance Transfer (415km)
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-r-xl text-center">
                        <p className="text-sm text-gray-700">
                            <strong>Note:</strong> Rates depend on vehicle type (Sedan vs GMC) and season. Contact us for group rates.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA #2 — after pricing */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">Travelling to Makkah or Madinah?</h3>
                        <p className="text-gray-600">Get your private transfer quote based on your vehicle and passenger requirements.</p>
                    </div>
                    <Link href="/booking/" className="shrink-0">
                        <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 font-bold px-8 py-6 rounded-2xl w-full md:w-auto">
                            Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* H2 — Jeddah Transfer Distances and Travel Times */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="logistics-guide">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-4">Jeddah Transfer Distances and Travel Times</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Travel Times from King Abdulaziz International Airport.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <DistanceTable origin="KAIA Airport" locations={distanceData} />
                        <SeasonalTravelTips
                            city="Jeddah"
                            labels={{
                                title: "Planning a Jeddah Transfer During Peak Seasons?",
                                subtitle: "What actually changes for your transfer during Ramadan, Hajj, and Umrah peak periods.",
                                summerTitle: "Ramadan & Summer Peak",
                                summerText: "Temperatures can exceed 40°C (104°F) and traffic around the airport and Haramain Expressway gets heavier close to iftar and after taraweeh. Pre-booking your pickup time avoids waiting outside in the heat and lets us plan around known congestion windows.",
                                summerTag: "Book Ahead: Heat & Traffic",
                                winterTitle: "Hajj & Umrah Peak Periods",
                                winterText: "During Hajj season and peak Umrah months, airport congestion and hotel pickup delays increase significantly across Jeddah and Makkah. Pre-booking with flight tracking is the most reliable way to avoid long waits at the terminal.",
                                winterTag: "Traffic Alert: Peak Season"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* H2 — Vehicles Available for Jeddah Transfers */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 font-display italic text-center">Vehicles Available for Jeddah Transfers</h2>
                <p className="text-gray-500 text-center max-w-2xl mx-auto mb-4">Sedan, SUV, or larger group vehicles — every option for your Jeddah, Makkah, or Madinah transfer.</p>
            </div>
            <RouteFleetSection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center">
                <Link href="/fleet/" className="text-primary font-bold hover:underline">View Our Full Fleet →</Link>
            </div>

            {/* H2 — Full-Day Chauffeur Service in Jeddah */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                        Full-Day Chauffeur Service in Jeddah
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                        Beyond point-to-point transfers, we offer a dedicated chauffeur by the hour or the day — for business meetings, hotel-to-meeting transfers, shopping trips, events, sightseeing, or a schedule with multiple stops. One driver, one vehicle, at your pace.
                    </p>
                    <Link href="/booking/">
                        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-6 rounded-2xl">
                            Book a Chauffeur by the Hour <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* CTA #3 — after peak seasons / before reviews */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">Arriving at KAIA?</h3>
                        <p className="text-gray-600">Send us your flight details and we'll arrange your private airport pickup.</p>
                    </div>
                    <Link href="/booking/" className="shrink-0">
                        <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 font-bold px-8 py-6 rounded-2xl w-full md:w-auto">
                            Book KAIA Airport Transfer <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* H2 — Trusted by Travelers in Jeddah (real reviews only) */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Verified Guest Reviews</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Trusted by Travelers in Jeddah
                        </h2>
                    </div>
                    <ReviewsDisplay location="Jeddah" limit={6} />
                    <div className="max-w-2xl mx-auto mt-12">
                        <ReviewForm locationName="Jeddah" />
                    </div>
                </div>
            </section>

            {/* H2 — Jeddah Taxi and Transfer FAQs */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Jeddah Taxi and Transfer FAQs
                        </h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm mb-4">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline text-lg py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA #4 — bottom */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-12 shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Clock className="w-4 h-4 text-black" />
                            <span className="text-sm font-semibold text-black">24/7 Booking</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-black mb-4">
                            Need a Private Car in Jeddah?
                        </h2>
                        <p className="text-lg md:text-xl text-black/90 mb-8 max-w-2xl mx-auto font-medium">
                            Book your airport, intercity or chauffeur transfer today.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <Link href="/booking/">
                                <Button className="bg-black text-white hover:bg-black/90 font-bold px-10 py-7 text-lg rounded-2xl h-auto shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                    WhatsApp Booking
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                <Button variant="outline" className="bg-white/20 backdrop-blur-sm text-black border-2 border-black/30 hover:bg-white/30 font-bold px-10 py-7 text-lg rounded-2xl h-auto">
                                    <Mail className="mr-2 w-5 h-5" />
                                    Request a Quote
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2 — Jeddah Hotel Transfers */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Hotel Directory</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Jeddah Hotel Transfers</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Need a direct transfer from KAIA to your hotel? We provide pre-booked private pickups to major Jeddah hotels and destinations.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {jeddahHotels.map((hotel) => (
                            <Link
                                key={hotel.slug}
                                href={`/routes/jeddah-to-${hotel.slug}/`}
                                className="bg-gray-50 hover:bg-primary/5 border border-gray-100 hover:border-primary rounded-xl p-4 transition-colors"
                            >
                                <span className="font-bold text-gray-900">{hotel.shortName}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* H2 — Private Transfers from Jeddah to Nearby Cities */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">Private Transfers from Jeddah to Nearby Cities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { href: '/routes/jeddah-makkah/', title: 'Makkah', desc: '90 km · ~1h 15m' },
                            { href: '/routes/jeddah-taif/', title: 'Taif', desc: '170 km · ~2h' },
                            { href: '/locations/rabigh/', title: 'Rabigh', desc: 'North coastal route' },
                            { href: '/locations/al-qunfudhah/', title: 'Al-Qunfudhah', desc: 'South coastal route' },
                        ].map((city) => (
                            <Link
                                key={city.href}
                                href={city.href}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all text-center"
                            >
                                <Building2 className="w-6 h-6 text-primary mx-auto mb-2" />
                                <h3 className="font-black text-gray-900">{city.title}</h3>
                                <p className="text-xs text-gray-500 mt-1">{city.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lower-priority UGC — real Q&A system, kept but de-emphasized */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">Questions About Jeddah Transfers?</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Ask a question and our team will answer directly.</p>
                    </div>
                    <div className="space-y-12">
                        <QuestionsDisplay location="Jeddah" />
                    </div>
                    <div className="max-w-2xl mx-auto mt-12">
                        <QuestionForm locationName="Jeddah" />
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="Jeddah" />

                <TopicCluster
                    mainTopic="Jeddah Travel Guides"
                    clusters={[
                        {
                            category: "More Jeddah Guides",
                            relevance: "Tertiary",
                            items: [
                                { label: "Complete Jeddah Guide", url: "/blog/complete-jeddah-guide" },
                                { label: "Top 15 Places to Visit", url: "/blog/top-15-places-to-visit-in-jeddah" },
                                { label: "Best Beaches in Jeddah", url: "/blog/best-beaches-in-jeddah" },
                                { label: "Jeddah Corniche Guide", url: "/blog/jeddah-corniche-guide" },
                                { label: "Why Visit Al-Balad", url: "/blog/why-you-should-visit-al-balad-in-jeddah" },
                                { label: "Floating Mosque (Al Rahma)", url: "/blog/floating-mosque-al-rahma-mosque-travel-guide" },
                                { label: "Fakieh Aquarium Complete Guide", url: "/blog/fakieh-aquarium-jeddah-complete-guide" }
                            ]
                        }
                    ]}
                />
            </div>
        </div >
    );
}
