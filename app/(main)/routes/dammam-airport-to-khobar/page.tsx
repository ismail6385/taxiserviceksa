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
    title: 'Dammam Airport to Khobar Taxi | VIP Airport Transfer | Taxi Service KSA',
    description: 'Book a premium taxi from King Fahd International Airport (DMM) Dammam to Khobar. Reliable VIP transfers, comfortable SUVs, and professional door-to-door service.',
    keywords: ['Dammam Airport to Khobar Taxi', 'DMM to Khobar transfer', 'Dammam airport taxi service', 'VIP transport Khobar'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/dammam-airport-to-khobar/',
    },
    openGraph: {
        title: 'Dammam Airport to Khobar Taxi | Taxi Service KSA',
        description: 'Book a premium taxi from King Fahd International Airport (DMM) Dammam to Khobar. Reliable VIP transfers, comfortable SUVs, and professional door-to-door service.',
        url: 'https://taxiserviceksa.com/routes/dammam-airport-to-khobar/',
        type: 'website',
    },
};

export default function DammamAirportKhobarRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Dammam Airport to Khobar"
                description="Professional VIP private car service from Dammam Airport (DMM) to Al Khobar. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Dammam Airport to Khobar Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport Pickup', description: 'Meet and greet service at DMM arrivals.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Dammam Airport to Khobar Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Airport Transfer
                    </span>
                }
                subtitle="Reliable & Comfortable: DMM Airport to Al Khobar"
                location="King Fahd International Airport (DMM)"
            />

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Efficient Transfer</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Premium Way from DMM Airport to Khobar
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Avoid the long taxi queues and the stress of navigating after a flight. Our pre-booked VIP service from King Fahd International Airport (DMM) to Khobar guarantees a professional driver waiting for you.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Whether you are traveling for business to the Khobar Corniche or arriving for a family visit, our luxury sedans and spacious SUVs provide the perfect start to your trip in the Eastern Province.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Plane className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Meet & Greet at DMM</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">40 - 50 Minutes</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Door-to-Door</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Al Khobar Wide</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Flight Tracking</h4>
                                        <p className="text-sm text-gray-500">We monitor your flight arrival time at DMM to ensure your driver is ready when you land, regardless of delays.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Direct Route</h4>
                                        <p className="text-sm text-gray-500">No unnecessary stops. Your chauffeur takes the most efficient route directly to your Khobar destination.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Luxury Fleet</h4>
                                        <p className="text-sm text-gray-500">From executive sedans to family-sized GMC Suburbans, we have the right vehicle for every group size.</p>
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
                            Watch our video to see the high quality of our fleet and the professional service we provide for airport transfers in Dammam and Khobar.
                        </p>
                    </div>
                    <div className="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/IPPtK1h1PMo" 
                            title="Taxi Service Dammam Airport to Khobar" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pricing & Booking</h3>
                            <div className="space-y-4 mb-8">
                                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-emerald-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-gray-900">Standard Sedan</span>
                                        <span className="text-lg font-black text-emerald-600">150 SAR</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Toyota Camry or similar (Up to 3 passengers)</p>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-emerald-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-gray-900">VIP SUV (GMC/Suburbun)</span>
                                        <span className="text-lg font-black text-emerald-600">300 SAR</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Premium experience with extra luggage capacity</p>
                                </div>
                            </div>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span className="text-xs font-semibold">Airport Meet & Greet Included</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span className="text-xs font-semibold">No Hidden Charges</span>
                                </div>
                            </div>
                            <a href="https://wa.me/966505322744?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Dammam%20Airport%20to%20Khobar" className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
                                <WhatsAppIcon className="w-5 h-5 fill-white" />
                                Book on WhatsApp
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-inner border border-emerald-100/50 flex flex-col items-center text-center self-start">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Safe & Reliable</h4>
                            <p className="text-sm text-gray-500">Your safety is our priority. Our vehicles are regularly inspected and our drivers are background-checked professionals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="DMM Airport to Khobar"
                        points={[
                            {
                                topic: "Traffic",
                                commonBelief: "It's a quick 30-minute drive.",
                                reality: "While the distance is short, peak hour traffic can double the travel time. We recommend planning for at least 50 minutes.",
                                truthRange: "Travel Time",
                                factors: ["Time of Day", "Highway Congestion"]
                            },
                            {
                                topic: "Booking",
                                commonBelief: "Airport taxis are cheaper.",
                                reality: "Pre-booked VIP services offer fixed rates and personalized attention, often being more cost-effective than metered airport taxis for groups and families.",
                                truthRange: "Value Comparison",
                                factors: ["Fixed Price", "Professional Driver"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations 
                    currentCity="Khobar" 
                    customLinks={[
                        { name: 'DMM Airport to Kuwait', url: '/routes/dammam-airport-to-kuwait/', description: 'Book a long-distance cross-border transfer to Kuwait City.' },
                        { name: 'Khobar to Bahrain', url: '/routes/khobar-to-bahrain/', description: 'Direct taxi service across the Causeway to Manama.' },
                        { name: 'Jubail Industrial City', url: '/locations/jubail/', description: 'Professional transport from Khobar to the Jubail industrial hub.' },
                        { name: 'Dammam City Center', url: '/locations/dammam/', description: 'Quick city-to-city transfers between Khobar and Dammam.' },
                    ]}
                />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "What is the taxi fare from Dammam Airport to Khobar?",
                        shortAnswer: "150 SAR (Sedan) / 300 SAR (SUV).",
                        detailedAnswer: "Our fixed rates are 150 SAR for a standard sedan and 300 SAR for a premium VIP SUV. This includes meet and greet service.",
                        perspectives: []
                    },
                    {
                        question: "How long does it take to get to Khobar from the airport?",
                        shortAnswer: "40 to 55 minutes.",
                        detailedAnswer: "The journey is about 55 km. In normal traffic, it takes about 40-45 minutes. During rush hours, it can take up to 60 minutes.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer pickup from DMM arrivals?",
                        shortAnswer: "Yes, with meet & greet.",
                        detailedAnswer: "Our driver will wait for you at the arrivals gate with a name sign. We track your flight to ensure we are there exactly when you land.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a taxi for a family of 6?",
                        shortAnswer: "Yes, in our GMC SUVs.",
                        detailedAnswer: "Our premium GMC Yukon and Chevrolet Suburban vehicles can comfortably accommodate up to 7 passengers with luggage.",
                        perspectives: []
                    },
                    {
                        question: "Is the price inclusive of parking fees?",
                        shortAnswer: "Yes, all included.",
                        detailedAnswer: "Our 150 SAR rate is all-inclusive. You don't have to pay extra for airport parking or road tolls.",
                        perspectives: []
                    },
                    {
                        question: "How do I find my driver at DMM Airport?",
                        shortAnswer: "Arrivals gate with name sign.",
                        detailedAnswer: "After clearing customs, look for our driver holding a 'Taxi Service KSA' sign with your name on it at the terminal exit.",
                        perspectives: []
                    },
                    {
                        question: "Do you have baby seats available?",
                        shortAnswer: "Yes, upon request.",
                        detailedAnswer: "We can provide child safety seats for airport transfers. Please request this during your WhatsApp booking.",
                        perspectives: []
                    },
                    {
                        question: "Can I pay with a credit card?",
                        shortAnswer: "Cash or Online Transfer.",
                        detailedAnswer: "We currently accept cash (SAR) and local/international bank transfers. Online payment links can be provided upon request.",
                        perspectives: []
                    },
                    {
                        question: "What if my flight is delayed?",
                        shortAnswer: "No extra charge.",
                        detailedAnswer: "We track your flight number. If your flight is delayed, your driver will adjust the pickup time automatically at no additional cost.",
                        perspectives: []
                    },
                    {
                        question: "Is your service available 24/7?",
                        shortAnswer: "Yes, around the clock.",
                        detailedAnswer: "We provide airport transfers 24 hours a day, 7 days a week, including early morning and late-night arrivals.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
