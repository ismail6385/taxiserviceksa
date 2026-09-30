import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, DollarSign, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RouteFleetSection from '@/components/RouteFleetSection';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import { JEDDAH_TAIF as R, JEDDAH_TAIF_TIME_NOTE } from '@/data/jeddahTaifRoute';
import { vehicles } from '@/lib/supabase';

export const metadata: Metadata = {
    title: 'Taif to Jeddah Private Transfer | Jeddah Airport & City',
    description: 'Pre-booked private transfer from Taif, Al Hada or Al Shafa to Jeddah city or King Abdulaziz International Airport. Quote based on your pickup, vehicle and date.',
    keywords: ['Taif to Jeddah taxi', 'taxi from Taif to Jeddah Airport', 'Taif to Jeddah private transfer', 'Al Hada to Jeddah taxi', 'Taif to Jeddah car with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/taif-jeddah/',
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Taif to Jeddah private transfer | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: 'Taif to Jeddah Private Transfer | Taxi Service KSA',
        description: 'Private door-to-door transfer from Taif to Jeddah city or Jeddah Airport.',
        url: 'https://taxiserviceksa.com/routes/taif-jeddah/',
        type: 'website',
    },
};

// Same route object as /routes/jeddah-taif/, so both directions show the same figures and vehicles.
const FLEET = R.vehicles.flatMap(({ name, cls }) => {
    const v = vehicles.find((x) => x.name === name);
    return v ? [{ name: v.name.split(' /')[0], cls, passengers: v.passengers, luggage: v.luggage }] : [];
});

export default function TaifToJeddahPage() {
    const routeDetails = [
        { label: 'Distance', value: R.distance, icon: MapPin },
        { label: 'Est. Road Time', value: R.roadTime, icon: Clock },
        { label: 'Price', value: 'By quote', icon: DollarSign },
        { label: 'Route', value: `${R.primaryCorridor} or alternate`, icon: CheckCircle2 },
    ];

    const routeImages = [
        '/jeddah-corniche-sunset.webp',
        '/hero-slide-4.webp',
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Taif to Jeddah"
                description="Pre-booked private car service from Taif to Jeddah city and King Abdulaziz International Airport, door to door."
                services={[
                    { name: 'Taif to Jeddah Private Transfer', description: 'Pre-booked door-to-door transfer, quoted per trip.' },
                    { name: 'Taif to Jeddah Airport Transfer', description: 'Departure transfers to King Abdulaziz International Airport.' },
                    { name: 'Family and Group Vehicles', description: 'Vans and larger vehicles for groups with luggage.' },
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={routeImages}
                h1Text="Taif to Jeddah Private Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Taif → Jeddah Route
                    </span>
                }
                subtitle="Door-to-Door Transfer to Jeddah City or Jeddah Airport (KAIA)"
                location={`About ${R.roadTime} | WhatsApp Booking Available`}
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href={`/booking/?${new URLSearchParams({ from: 'Taif', to: 'Jeddah' }).toString()}`}>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Taif to Jeddah
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href={R.href}>
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Going Jeddah → Taif?
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Route Details Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">The Return Journey</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Taif to Jeddah Airport Transfer</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Heading back down from the highlands? A pre-booked private car collects you in Taif, Al Hada or Al Shafa and takes you to King Abdulaziz International Airport (JED) or your Jeddah address.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 text-center mb-16">Exact distance varies by pickup and destination. More detail: <Link href={R.distanceHref} className="underline hover:text-gray-900">Jeddah to Taif distance by road</Link>.</p>

                    {/* Traveler Essentials */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                            Traveler Essentials
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Mountain Route</h4>
                                <p className="text-sm text-gray-600">
                                    {R.corridorNote} The {R.alternateCorridors[0]} road is the usual alternative.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Stops on the Way Down</h4>
                                <p className="text-sm text-gray-600">
                                    If you would like to stop at a market or viewpoint, mention it when requesting your quote so the itinerary can be planned accordingly.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2">Airport Drop-off</h4>
                                <p className="text-sm text-gray-600">
                                    Send your flight time and terminal with the booking. We suggest a pickup time that leaves a margin for the mountain road and airport procedures.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vehicles and pricing */}
                    <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Taif to Jeddah Vehicles &amp; Quote</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                            This route is quoted per trip. The price depends on your {R.priceFactors.slice(0, 4).join(', ').toLowerCase()}, luggage, waiting, stops and date.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {FLEET.map((v) => (
                                <div key={v.name} className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{v.cls}</div>
                                    <div className="text-lg font-bold mb-2">{v.name}</div>
                                    <p className="text-xs text-gray-500">Up to {v.passengers} passengers · about {v.luggage} large bags</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Taif" />
                <RelatedRoutes originSlug="taif" currentSlug="taif-jeddah" />
            </div>

            <MicroSemanticFAQ
                contextName="Taif to Jeddah"
                faqs={[
                    {
                        question: 'How long is the drive from Taif to Jeddah?',
                        shortAnswer: `About ${R.roadTime}`,
                        detailedAnswer: `${JEDDAH_TAIF_TIME_NOTE} The distance is about ${R.distance}.`,
                        perspectives: []
                    },
                    {
                        question: 'Which road does the car take from Taif to Jeddah?',
                        shortAnswer: 'It depends on conditions',
                        detailedAnswer: `${R.corridorNote} The ${R.alternateCorridors[0]} road is the usual alternative.`,
                        perspectives: []
                    },
                    {
                        question: 'How much is a private car from Taif to Jeddah Airport?',
                        shortAnswer: 'Quoted per trip',
                        detailedAnswer: 'The price depends on your pickup point, vehicle, passengers, luggage, date and any waiting or stops. You receive it with the quote, before you confirm.',
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
