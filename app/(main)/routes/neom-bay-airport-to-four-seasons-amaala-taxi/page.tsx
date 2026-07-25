import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Navigation, Building2 } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import RouteFleetSection from '@/components/RouteFleetSection';

export const metadata: Metadata = {
    title: 'NEOM Bay Airport to Four Seasons AMAALA Taxi | Private Transfer - Fixed Price | Taxi Service KSA',
    description: 'Book a private car transfer from NEOM Bay Airport (NUM) to Four Seasons Resort AMAALA. Door-to-door service in a premium SUV, fixed rates, and 24/7 availability.',
    keywords: ['NEOM Bay Airport to Amaala taxi', 'Four Seasons Amaala transfer', 'NEOM Bay Airport private car', 'Amaala Triple Bay taxi', 'NUM airport to Amaala transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/neom-bay-airport-to-four-seasons-amaala-taxi/',
    },
    openGraph: {
        title: 'NEOM Bay Airport to Four Seasons AMAALA | Private Transfer | Taxi Service KSA',
        description: 'Private door-to-door transfer from NEOM Bay Airport to Four Seasons Resort AMAALA. Premium SUVs, meet & greet, and fixed pricing.',
        url: 'https://taxiserviceksa.com/routes/neom-bay-airport-to-four-seasons-amaala-taxi/',
        type: 'website',
    },
};

export default function NeomBayAirportToFourSeasonsAmaalaPage() {
    const routeDetails = [
        { label: 'Route', value: 'NUM → Amaala', icon: Navigation },
        { label: 'Travel Time', value: '~2.5-3 Hours', icon: Clock },
        { label: 'Rate', value: 'Fixed Price', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];

    const routeImages = [
        '/jeddah-airport.webp',
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="NEOM Bay Airport to Four Seasons Amaala"
                description="Professional private car service from NEOM Bay Airport to Four Seasons Resort AMAALA. Reliable, door-to-door coastal transfers for leisure and executive guests."
                services={[
                    { name: 'NEOM Bay Airport to Amaala Taxi', description: 'Direct private transfer with professional chauffeurs and meet & greet.' },
                    { name: 'Luxury SUV Transfer', description: 'Premium GMC Yukon and Cadillac Escalade options for the coastal drive to Amaala.' },
                    { name: 'Executive Chauffeur', description: 'Experienced drivers familiar with the NEOM and Amaala development routes.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from Four Seasons Amaala back to NEOM Bay Airport.' }
                ]}
                image="https://taxiserviceksa.com/jeddah-airport.webp"
            />

            <Hero
                images={routeImages}
                h1Text="NEOM Bay Airport to Four Seasons AMAALA"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        NUM → Amaala Triple Bay
                    </span>
                }
                subtitle="Private Car Transfer - Fixed Price"
                location="Meet & Greet at Arrivals | Luxury SUV Fleet"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=neom-bay-airport-to-four-seasons-amaala-taxi">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Your Amaala Transfer
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email for Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* Route Note */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        Amaala is an active development zone. Please share your exact resort/site access details when booking.
                    </p>
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 underline decoration-primary decoration-4 underline-offset-8">Travel from NEOM Bay Airport to Amaala</h2>
                        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
                            <p>Four Seasons Resort AMAALA sits within the Triple Bay destination on the Red Sea coast, a scenic but long drive south of NEOM Bay Airport (NUM). Instead of arranging transport on arrival, our private car service has your driver waiting inside the terminal, ready to take you straight to the resort.</p>
                            <p>The coastal drive takes roughly 2.5 to 3 hours depending on current road conditions in the area, so we recommend a spacious, comfortable SUV for the journey. Since it's a private vehicle, your pace and stops are entirely up to you.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 shadow-sm">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden mb-16">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Built for Four Seasons Guests</h3>
                                <p className="text-gray-300 leading-relaxed">Guests flying into NEOM Bay Airport for Amaala expect a smooth, private arrival. We agree the fare upfront, track your flight for delays, and send a driver who knows the coastal route and current site access points.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <Building2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">Direct Resort Drop-off</h4>
                                        <p className="text-sm text-gray-400">Straight from the airport gate to the Four Seasons AMAALA entrance, no transfers or waiting.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <DollarSign className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">No Hidden Fees</h4>
                                        <p className="text-sm text-gray-400">The price we agree on is what you pay. No extra charges for tolls or fuel on this route.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Available Cars for Your Trip</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: 'Toyota Camry', type: 'Standard Sedan', pax: '1-4' },
                                { name: 'GMC Yukon', type: 'Premium SUV', pax: '1-7' },
                                { name: 'Cadillac Escalade', type: 'Luxury SUV', pax: '1-6' },
                                { name: 'Hyundai Staria', type: 'Family Van', pax: '1-7' }
                            ].map((v, i) => (
                                <div key={i} className="bg-white border-2 border-gray-50 rounded-[2rem] p-8 shadow-sm hover:border-primary transition-all group">
                                    <Car className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-xl mb-1">{v.name}</h4>
                                    <p className="text-sm text-gray-400 uppercase font-bold tracking-tighter mb-4">{v.type}</p>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Users className="w-4 h-4 text-primary" /> {v.pax} Passengers
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                        <div className="bg-primary/5 p-10 rounded-[3rem] border-2 border-primary/10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Clock className="text-primary" /> Booking is Simple</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">01</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Get a Quote</h4>
                                        <p className="text-gray-600 text-sm">Submit your request via our booking form or email us for a custom quote.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">02</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Confirm Vehicle</h4>
                                        <p className="text-gray-600 text-sm">Pick the car that fits your group size and luggage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">03</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Meet the Driver</h4>
                                        <p className="text-gray-600 text-sm">Your driver waits inside NEOM Bay Airport arrivals with a name board.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <EntityTrustSignal
                                brandName="TaxiServiceKSA"
                                description="Reliable coastal transfers for guests traveling from NEOM Bay Airport to Amaala resorts."
                                foundingDate="2016"
                                metrics={[
                                    { label: 'Verified', value: '100%', icon: Shield },
                                    { label: 'Support', value: '24/7', icon: Clock }
                                ]}
                            />
                            <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
                                <h4 className="font-bold mb-4 flex items-center gap-2 text-primary"><MapPin /> Door-to-Door</h4>
                                <p className="text-sm text-gray-400">Skip the arrivals queue. We go from NEOM Bay Airport directly to your Four Seasons AMAALA reservation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                contextName="NEOM Bay Airport to Four Seasons Amaala"
                faqs={[
                    {
                        question: "How long is the drive from NEOM Bay Airport to Four Seasons AMAALA?",
                        shortAnswer: "~2.5-3 Hours",
                        detailedAnswer: "The coastal drive typically takes around 2.5 to 3 hours, depending on current road conditions in the developing Amaala and NEOM area.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer meet & greet at NEOM Bay Airport?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, your driver waits inside the arrivals hall with a name board and tracks your flight, so there's no waiting around after landing.",
                        perspectives: []
                    },
                    {
                        question: "What car do you recommend for Four Seasons AMAALA guests?",
                        shortAnswer: "GMC Yukon or Escalade",
                        detailedAnswer: "For the long coastal drive, we recommend our GMC Yukon or Cadillac Escalade for extra comfort and luggage space, though a standard sedan is available too.",
                        perspectives: []
                    },
                    {
                        question: "Is the price for the whole vehicle, not per seat?",
                        shortAnswer: "Whole Vehicle",
                        detailedAnswer: "Yes. The price we quote covers the private vehicle and driver for the full trip to Amaala — you are not sharing the ride with other passengers.",
                        perspectives: []
                    },
                    {
                        question: "Can you also arrange the return trip from Amaala to NEOM Bay Airport?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Absolutely. Let us know your departure flight details and we'll schedule the return pickup directly from the resort.",
                        perspectives: []
                    },
                ]}
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready for AMAALA?</h2>
                    <p className="text-gray-400 mb-10 text-lg">Contact us now for a fixed price and reliable driver from NEOM Bay Airport.</p>
                    <Link href="/booking/?route=neom-bay-airport-to-four-seasons-amaala-taxi">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-xl px-12 py-9 h-auto rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-1">
                            Book Your Transfer
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Tabuk" citySlug="neom" />
            </div>
        </div>
    );
}
