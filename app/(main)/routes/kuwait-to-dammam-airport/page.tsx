import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight, Plane, ShieldCheck, FileText, Presentation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export const metadata: Metadata = {
    title: 'Kuwait to Dammam Airport Taxi | VIP Cross-Border Transfer | Taxi Service KSA',
    description: 'Book a premium taxi from Kuwait to King Fahd International Airport (DMM) Dammam. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service.',
    keywords: ['Kuwait to Dammam Airport Taxi', 'Kuwait to DMM transfer', 'Kuwait Dammam airport cross border taxi', 'VIP transport Kuwait Dammam'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/kuwait-to-dammam-airport/',
    },
    openGraph: {
        title: 'Kuwait to Dammam Airport Taxi | Taxi Service KSA',
        description: 'Book a premium taxi from Kuwait to King Fahd International Airport (DMM) Dammam. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service.',
        url: 'https://taxiserviceksa.com/routes/kuwait-to-dammam-airport/',
        type: 'website',
    },
};

export default function KuwaitDammamAirportRoutePage() {
    const images = [
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
        '/jeddah-airport.webp'
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Kuwait to Dammam Airport"
                description="Professional VIP private car service from Kuwait to Dammam Airport (DMM). Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Kuwait to Dammam Airport Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport Drop-off at DMM', description: 'Convenient pickups in Kuwait and drop-offs at DMM terminal.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Kuwait to Dammam Airport Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        DMM Airport Transfer
                    </span>
                }
                subtitle="VIP Cross-Border Service: Kuwait to DMM Airport"
                location="Door-to-Door to DMM Airport"
            />

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">International Transfer</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Reliable Way from Kuwait to DMM Airport
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Catch your flight from King Fahd International Airport (DMM) with peace of mind. We pick you up from any location in Kuwait and deliver you directly to the departure terminal at DMM.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our cross-border experts handle the nuances of the journey, ensuring you arrive on time for your check-in. Skip the border queues with our experienced drivers who know the fastest routes.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Plane className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Terminal Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Prompt Pickup</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Door-to-Airport</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">GCC Wide Service</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Punctual Pickups</h4>
                                        <p className="text-sm text-gray-500">We understand the importance of flight timings. Our drivers arrive at your doorstep in Kuwait ahead of schedule.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Luggage Assistance</h4>
                                        <p className="text-sm text-gray-500">From your door to the airport trolley, we help manage your bags so you can travel comfortably.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Border Expertise</h4>
                                        <p className="text-sm text-gray-500">Smooth navigation through customs and passport control between Kuwait and Saudi Arabia.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience the Journey</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Watch our detailed video guide to see the comfort of our fleet and the professional service you can expect on your trip to Dammam Airport.
                        </p>
                    </div>
                    <div className="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/IPPtK1h1PMo" 
                            title="Taxi Service Kuwait to Dammam Airport" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pricing & Booking</h3>
                            <div className="space-y-4 mb-8">
                                <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-blue-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-gray-900">Toyota Fortuner</span>
                                        <span className="text-lg font-black text-blue-600">150 KWD</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Ideal for small families and business travelers</p>
                                </div>
                                <div className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-blue-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-gray-900">GMC Yukon/Suburban</span>
                                        <span className="text-lg font-black text-blue-600">180 KWD</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Premium VIP SUV with extra luggage space</p>
                                </div>
                            </div>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs font-semibold">Door-to-Airport Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs font-semibold">Professional English-Speaking Drivers</span>
                                </div>
                            </div>
                            <a href="https://wa.me/966505322744?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Kuwait%20to%20Dammam%20Airport" className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
                                <WhatsAppIcon className="w-5 h-5 fill-white" />
                                Book Return Trip
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-inner border border-blue-100/50 flex flex-col items-center text-center self-start">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Punctuality Guaranteed</h4>
                            <p className="text-sm text-gray-500">We prioritize your flight schedule. Our drivers ensure you reach DMM Airport with plenty of time to spare.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="Kuwait to DMM Airport"
                        points={[
                            {
                                topic: "Timing",
                                commonBelief: "3 hours is enough.",
                                reality: "We recommend leaving at least 6-7 hours before your flight to account for driving time (4.5h) and potential border delays.",
                                truthRange: "Recommended Departure",
                                factors: ["Flight Check-in", "Border Variability"]
                            },
                            {
                                topic: "Documents",
                                commonBelief: "ID card is enough.",
                                reality: "While GCC citizens can use IDs, all other residents/expats must have their original passports and valid exit/re-entry or visit visas.",
                                truthRange: "Mandatory Requirements",
                                factors: ["Original Passport", "Valid Visas"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations 
                    currentCity="Kuwait" 
                    customLinks={[
                        { name: 'DMM Airport to Kuwait', url: '/routes/dammam-airport-to-kuwait/', description: 'Book your arrival transfer from Dammam Airport back to Kuwait.' },
                        { name: 'Dammam City', url: '/locations/dammam/', description: 'Direct taxi service from Kuwait to Dammam city center.' },
                        { name: 'Khobar Corniche', url: '/locations/khobar/', description: 'Travel comfortably from Kuwait to the beautiful Khobar waterfront.' },
                        { name: 'Riyadh (Long Distance)', url: '/locations/riyadh/', description: 'VIP intercity transport from Kuwait to the Saudi Capital.' },
                    ]}
                />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "What is the travel time from Kuwait to DMM Airport?",
                        shortAnswer: "4.5 to 5.5 hours.",
                        detailedAnswer: "The journey typically takes 4.5 to 5 hours, but we recommend scheduling your pickup 7 hours before your flight to account for border processing.",
                        perspectives: []
                    },
                    {
                        question: "How do I book a taxi from Kuwait to Dammam?",
                        shortAnswer: "WhatsApp Booking.",
                        detailedAnswer: "You can book directly via WhatsApp. Just provide your pickup location in Kuwait and your flight details for DMM Airport.",
                        perspectives: []
                    },
                    {
                        question: "What are the rates for Kuwait to DMM Airport?",
                        shortAnswer: "150 KWD - 180 KWD.",
                        detailedAnswer: "Our rates are 150 KWD for a Toyota Fortuner and 180 KWD for a premium GMC Yukon or Chevrolet Suburban.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer door-to-door service in Kuwait?",
                        shortAnswer: "Yes, anywhere in Kuwait.",
                        detailedAnswer: "We pick up from any residential address, hotel, or office in Kuwait City and all surrounding governorates.",
                        perspectives: []
                    },
                    {
                        question: "Is there a limit on luggage?",
                        shortAnswer: "Spacious SUVs for all bags.",
                        detailedAnswer: "Our GMC vehicles can accommodate up to 7 large suitcases. If you have extra-large items, please inform us in advance.",
                        perspectives: []
                    },
                    {
                        question: "Can I pay in Kuwaiti Dinars (KWD)?",
                        shortAnswer: "Yes, KWD or SAR.",
                        detailedAnswer: "We accept payments in both Kuwaiti Dinars and Saudi Riyals for your convenience.",
                        perspectives: []
                    },
                    {
                        question: "Is border assistance provided?",
                        shortAnswer: "Yes, expert guidance.",
                        detailedAnswer: "Our drivers are very experienced with the Khafji border and will guide you through the process for a smooth crossing.",
                        perspectives: []
                    },
                    {
                        question: "Are your cars cleaned and sanitized?",
                        shortAnswer: "Yes, after every trip.",
                        detailedAnswer: "All our vehicles undergo thorough cleaning and sanitization after each journey to ensure a hygienic environment for our VIP guests.",
                        perspectives: []
                    },
                    {
                        question: "Do you have female-friendly services?",
                        shortAnswer: "Yes, safe and reliable.",
                        detailedAnswer: "We provide highly professional and respectful drivers, making our service a preferred choice for families and solo female travelers.",
                        perspectives: []
                    },
                    {
                        question: "What happens if my flight is rescheduled?",
                        shortAnswer: "Flexible booking.",
                        detailedAnswer: "If your flight time changes, please notify us as soon as possible. We will adjust your pickup time at no extra cost.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
