import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Navigation, Mountain } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import RouteFleetSection from '@/components/RouteFleetSection';

export const metadata: Metadata = {
    title: 'Private Car, Taxi and Chauffeur Transfer from Jazan Airport to Bisha Airport | Taxi Service KSA',
    description: 'Book a private car, taxi and chauffeur transfer from Jazan Airport (GIZ) to Bisha Airport (BHH). Door-to-door service through the Aseer mountains, fixed rates, 24/7 availability.',
    keywords: ['Jazan Airport to Bisha Airport taxi', 'Jazan to Bisha private transfer', 'GIZ to BHH taxi', 'Jazan Airport car with driver', 'Bisha Airport transfer'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jazan-airport-to-bisha-airport-taxi/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Private Car, Taxi and Chauffeur Transfer from Jazan Airport to Bisha Airport | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Private Car, Taxi and Chauffeur Transfer from Jazan Airport to Bisha Airport | Taxi Service KSA',
        description: 'Private door-to-door transfer from Jazan Airport to Bisha Airport. Comfortable SUVs for the mountain route, meet & greet, and fixed pricing.',
        url: 'https://taxiserviceksa.com/routes/jazan-airport-to-bisha-airport-taxi/',
        type: 'website',
    },
};

export default function JazanAirportToBishaAirportPage() {
    const routeDetails = [
        { label: 'Route', value: 'GIZ → BHH', icon: Navigation },
        { label: 'Travel Time', value: '~5-6 Hours', icon: Clock },
        { label: 'Rate', value: 'Fixed Price', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];

    const routeImages = [
        '/hero-slide-4.webp',
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Jazan Airport to Bisha Airport"
                description="Professional private car service from Jazan Airport to Bisha Airport. Reliable, door-to-door long-distance transfers through the Aseer region."
                services={[
                    { name: 'Jazan Airport to Bisha Airport Taxi', description: 'Direct private transfer with professional chauffeurs and meet & greet.' },
                    { name: 'Mountain Route SUV', description: 'Comfortable GMC Yukon and Toyota Hiace options for the Aseer mountain drive.' },
                    { name: 'Long-Distance Chauffeur', description: 'Experienced drivers familiar with the southern Saudi mountain highways.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from Bisha Airport back to Jazan Airport.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-4.webp"
            />

            <Hero
                images={routeImages}
                h1Text="Private Car, Taxi and Chauffeur Transfer from Jazan Airport to Bisha Airport"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GIZ → BHH
                    </span>
                }
                subtitle="Private Car Transfer - Fixed Price"
                location="Meet & Greet at Arrivals | Mountain-Ready Fleet"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jazan-airport-to-bisha-airport-taxi">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Your Transfer
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

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 underline decoration-primary decoration-4 underline-offset-8">Travel from Jazan Airport to Bisha Airport</h2>
                        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
                            <p>Traveling from Jazan Airport to Bisha Airport means crossing a long stretch of southern Saudi Arabia, climbing up through the Aseer mountain region. Instead of dealing with connecting flights or fixed transport schedules, our private car service handles the whole distance door-to-door.</p>
                            <p>The drive typically takes around 5 to 6 hours depending on road and weather conditions in the mountains, so we recommend a comfortable SUV for the journey. Since it's a private vehicle, the pace and stops are set around you, not a fixed timetable.</p>
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
                                <h3 className="text-2xl font-bold text-primary mb-6">Why Travelers Choose Our Service</h3>
                                <p className="text-gray-300 leading-relaxed">The main advantage of booking privately is control: you set the departure time, you decide where to stop on the mountain road to Bisha, and you're not sharing the vehicle with strangers. We agree the fare upfront, and our drivers are familiar with this route and its rest stops.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <Mountain className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">Mountain Route Experience</h4>
                                        <p className="text-sm text-gray-400">Our drivers know the Aseer mountain roads and safe rest points between Jazan and Bisha.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <DollarSign className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">No Hidden Fees</h4>
                                        <p className="text-sm text-gray-400">The price we agree on is what you pay. No extra charges for tolls or fuel.</p>
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
                                { name: 'Toyota Hiace', type: 'Minibus', pax: '1-12' },
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
                                        <p className="text-gray-600 text-sm">Your driver waits inside Jazan Airport arrivals with a name board.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <EntityTrustSignal
                                brandName="TaxiServiceKSA"
                                description="Reliable long-distance transfers for travelers going from Jazan Airport to Bisha Airport."
                                foundingDate="2016"
                                metrics={[
                                    { label: 'Verified', value: '100%', icon: Shield },
                                    { label: 'Support', value: '24/7', icon: Clock }
                                ]}
                            />
                            <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
                                <h4 className="font-bold mb-4 flex items-center gap-2 text-primary"><MapPin /> Door-to-Door</h4>
                                <p className="text-sm text-gray-400">Skip the arrivals queue. We go from Jazan Airport directly to your destination in Bisha.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                contextName="Jazan Airport to Bisha Airport"
                faqs={[
                    {
                        question: "How long is the drive from Jazan Airport to Bisha Airport?",
                        shortAnswer: "~5-6 Hours",
                        detailedAnswer: "The drive typically takes around 5 to 6 hours through the Aseer mountains, depending on road and weather conditions. Exact time can vary during peak travel or poor visibility on the mountain pass.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer meet & greet at Jazan Airport?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, your driver waits inside the arrivals hall with a name board and tracks your flight, so there's no waiting around after landing.",
                        perspectives: []
                    },
                    {
                        question: "What car do you recommend for the mountain route to Bisha?",
                        shortAnswer: "SUV Recommended",
                        detailedAnswer: "For comfort on the mountain roads, we recommend our GMC Yukon or Toyota Hiace, though a standard sedan is available for smaller groups.",
                        perspectives: []
                    },
                    {
                        question: "Is the price for the whole vehicle, not per seat?",
                        shortAnswer: "Whole Vehicle",
                        detailedAnswer: "Yes. The price we quote covers the private vehicle and driver for the full trip to Bisha — you are not sharing the ride with other passengers.",
                        perspectives: []
                    },
                    {
                        question: "Can you also arrange the return trip from Bisha to Jazan Airport?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Absolutely. Let us know your departure flight details and we'll schedule the return pickup directly from Bisha.",
                        perspectives: []
                    },
                ]}
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to Travel to Bisha?</h2>
                    <p className="text-gray-400 mb-10 text-lg">Contact us now for a fixed price and reliable driver from Jazan Airport.</p>
                    <Link href="/booking/?route=jazan-airport-to-bisha-airport-taxi">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-xl px-12 py-9 h-auto rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-1">
                            Book Your Transfer
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Jizan" citySlug="jizan" />
            </div>
        </div>
    );
}
