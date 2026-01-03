import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, CheckCircle2, Car, Users, Shield, Plane, Building2, Waves, ArrowRight, User } from 'lucide-react';
import Hero from '@/components/Hero';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import Script from 'next/script';
import DistanceTable from '@/components/seo/DistanceTable';
import SeasonalTravelTips from '@/components/seo/SeasonalTravelTips';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'Taxi Service in Jeddah | Airport Taxi & Makkah Transfers',
    description: 'Taxi service in Jeddah for King Abdulaziz Airport (KAIA) transfers. Direct transport to Makkah hotels and Madinah. Terminal 1 and North Terminal pickups.',
    keywords: ['Jeddah taxi service', 'KAIA airport transfer', 'Jeddah to Makkah taxi', 'Terminal 1 taxi', 'North Terminal pickup', 'Jeddah chauffeur', 'jeddah to madina taxi', 'jeddah to makkah car service', 'rent a car with driver in jeddah', 'jeddah airport to makkah taxi booking', 'private driver jeddah', 'private umrah taxi', 'jeddah to makkah coaster', 'transport madinah to makkah', 'rent a car with driver in saudi arabia', 'toyota hiace for rent in jeddah'],
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
        title: 'Taxi Service in Jeddah | Airport Taxi & Makkah Transfers',
        description: 'Pre-booked private transfers from KAIA Terminal 1 & North Terminal directly to hotels. Fixed rates available.',
        url: 'https://taxiserviceksa.com/locations/jeddah/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/jeddah-corniche-sunset.webp', alt: 'Jeddah Corniche Waterfront' }],
    },
};

export default async function JeddahPage() {
    const services = [
        { name: 'KAIA Airport Taxi', description: 'Meet & Greet at King Abdulaziz International Airport (Terminal 1 & North).', icon: Plane },
        { name: 'Jeddah to Makkah', description: 'Private transfer for Umrah pilgrims. 75 minutes direct to your hotel.', icon: Car },
        { name: 'Jeddah to Madinah', description: 'Long-distance taxi to the Prophet\'s City. Comfortable 4-hour journey.', icon: MapPin },
        { name: 'City Chauffeur', description: 'Hourly rental for business meetings, shopping, or Corniche tours.', icon: User },
    ];

    const jeddahImages = [
        '/jeddah-airport-terminal.webp',
        '/jeddah-corniche-sunset.webp',
        '/jeddah-city-night.webp',
    ];

    const distanceData = [
        { destination: 'Makkah (Haram)', distance: '95 km', time: '1h 15m', route: 'Haramain Expy' },
        { destination: 'Madinah', distance: '415 km', time: '4h', route: 'Route 15' },
        { destination: 'Taif', distance: '170 km', time: '2h 15m', route: 'Al Hada Rd' },
        { destination: 'Obhur (North)', distance: '35 km', time: '40 mins', route: 'Corniche Rd' }
    ];

    const faqs = [
        {
            question: "How much is a taxi from Jeddah Airport to Makkah?",
            answer: "A private sedan starts from SAR 200, while a GMC/SUV for families is around SAR 350. The price is fixed and includes waiting time."
        },
        {
            question: "Where does the driver meet me at KAIA Terminal 1?",
            answer: "For Terminal 1 (New Airport), the meeting point is usually near the Aquarium in the arrival hall. Our driver will hold a name sign."
        },
        {
            question: "Is it better to take the train or a taxi to Makkah?",
            answer: "The train is faster but requires transfers to/from stations. A taxi offers door-to-door service from the airport directly to your hotel lobby, which is much better for families with luggage."
        },
        {
            question: "Do you go to Madinah from Jeddah?",
            answer: "Yes, we offer direct trips from Jeddah Airport to Madinah hotels. The journey takes about 4 hours."
        },
        {
            question: "Can I stop at the Miqat on the way to Makkah?",
            answer: "Yes, absolutely. Just inform the driver, and we will stop at the designated Miqat (usually Qarn al-Manazil or Juhfah depending on route) for you to enter Ihram."
        },
        {
            question: "Is there Uber at Jeddah Airport?",
            answer: "Yes, Uber is available but surge pricing can be high during peak flight times. Our pre-booked service offers a fixed rate guarantee."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="jeddah-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Jeddah Airport Taxi & Transfers",
                        "areaServed": { "@type": "City", "name": "Jeddah" },
                        "description": "Professional 24/7 taxi service for King Abdulaziz International Airport and Makkah transfers."
                    })
                }}
            />

            <Hero
                images={jeddahImages}
                h1Text="Online Taxi Service In Jeddah"
                bookingFormTitle="Book Online Taxi Service in Jeddah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        TaxiServiceKSA™ Jeddah
                    </span>
                }
                subtitle="KAIA Airport Transfers & Makkah Transport"
                location="Jeddah • Makkah • Madinah"
            >
                <div className="max-w-3xl mx-auto mt-8 mb-6">
                </div>
            </Hero>

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

            {/* Main Content & Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="bg-primary/10 text-gray-900 font-semibold tracking-wider uppercase text-sm px-4 py-2 rounded-full inline-block border border-primary/20">
                            Available Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mt-6 mb-4">
                            Jeddah Taxi Services
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            From King Abdulaziz Airport (KAIA) pickups to intercity transfers to Makkah and Madinah.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

                    {/* Strategic Internal Links Hub */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 mb-16 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Car className="w-5 h-5 text-primary" /> Popular Jeddah Routes
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/routes/jeddah-makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Jeddah to Makkah (80km)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/routes/jeddah-madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Jeddah to Madinah (450km)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/routes/jeddah-taif/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Jeddah to Taif (170km)</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" /> Recommended Fleet
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Elite VIP GMC Yukon</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                            <span>Spacious Toyota HiAce Bus</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/fleet/" className="text-primary font-bold hover:underline">View Entire Fleet →</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Content Block - Cheap Taxi */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
                                <Plane className="w-4 h-4 text-black" />
                                <span className="text-sm font-semibold text-gray-900">Airport & Makkah Transfers</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                                Cheap Taxi Service in Jeddah
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    We offer affordable and reliable <strong>online taxi service in Jeddah</strong>. Whether you are arriving at King Abdulaziz International Airport (Terminal 1 or North) or need a ride to Makkah for Umrah, our fixed rates save you money compared to airport meters.
                                </p>

                                <p>
                                    Jeddah traffic can be challenging. Our professional drivers use the best routes via <span className="font-semibold text-gray-900">Haramain Expressway</span> to ensure you reach your destination on time. Avoid the humidity and long taxi queues by booking your private ride in advance.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                                <p className="text-sm text-gray-900 font-semibold flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    Flight Delayed? We track your flight and wait for free up to 90 minutes!
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-30"></div>
                                <Image
                                    src="/jeddah-airport-terminal.webp"
                                    alt="Jeddah KAIA Airport Taxi Pickup"
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

            {/* Essential Logistics */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white" id="logistics-guide">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-4">Jeddah Distances</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Key travel times from King Abdulaziz Airport.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <DistanceTable origin="KAIA Airport" locations={distanceData} />
                        <SeasonalTravelTips city="Jeddah" />
                    </div>
                </div>
            </section>

            {/* Pricing Information */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Fixed Rates</span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Transparent Pricing
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            No surge pricing. The price you see is the price you pay.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Plane className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Airport to City</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 100
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                KAIA to Jeddah Hotels
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white hover:text-black px-4 py-1 rounded-full text-xs font-bold">
                                BEST SELLER
                            </div>
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Car className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">Airport to Makkah</div>
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
                            <div className="text-xl font-bold text-gray-900 mb-3">Airport to Madinah</div>
                            <div className="text-4xl font-black text-primary mb-3">
                                <span className="text-2xl">From</span> SAR 450
                            </div>
                            <div className="text-sm text-gray-600 leading-relaxed">
                                Long Distance Transfer
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

            {/* Reviews */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-semibold text-yellow-900">Guest Reviews</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Trusted in Jeddah
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Driver was waiting for us at Terminal 1 with a name card. Very smooth ride to our hotel in Al Hamra."</p>
                            <div className="font-bold text-gray-900">- James W. from UK</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Excellent service for Umrah. The GMC was spacious for our family and 6 bags. Highly recommended."</p>
                            <div className="font-bold text-gray-900">- Ahmed K. from UAE</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6">"Cheaper than the airport taxi queue and much cleaner cars. Will book again."</p>
                            <div className="font-bold text-gray-900">- Sarah L.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-gray-900 mb-6">
                            Jeddah Taxi FAQ
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

            {/* CTA Block */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-12 shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 text-center max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Phone className="w-4 h-4 text-black" />
                            <span className="text-sm font-semibold text-black">24/7 Booking</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-black mb-4">
                            Need a Ride in Jeddah?
                        </h2>
                        <p className="text-lg md:text-xl text-black/90 mb-8 max-w-2xl mx-auto font-medium">
                            Book your airport transfer or Makkah taxi in under 2 minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <Link href="/booking/">
                                <Button className="bg-black text-white hover:bg-black/90 font-bold px-10 py-7 text-lg rounded-2xl h-auto shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group">
                                    Book Now
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                <Button variant="outline" className="bg-white/20 backdrop-blur-sm text-black border-2 border-black/30 hover:bg-white/30 font-bold px-10 py-7 text-lg rounded-2xl h-auto">
                                    <Phone className="mr-2 w-5 h-5" />
                                    Email Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RelatedLocations currentCity="Jeddah" />
            </div>
        </div >
    );
}
