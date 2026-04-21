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
    title: 'Khobar to Dammam Airport Taxi | VIP Airport Transfer | Taxi Service KSA',
    description: 'Book a premium taxi from Khobar to King Fahd International Airport (DMM) Dammam. Reliable VIP transfers, punctual pickups, and professional door-to-door service.',
    keywords: ['Khobar to Dammam Airport Taxi', 'Khobar to DMM transfer', 'Al Khobar airport taxi service', 'VIP transport DMM'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/khobar-to-dammam-airport/',
    },
    openGraph: {
        title: 'Khobar to Dammam Airport Taxi | Taxi Service KSA',
        description: 'Book a premium taxi from Khobar to King Fahd International Airport (DMM) Dammam. Reliable VIP transfers, punctual pickups, and professional door-to-door service.',
        url: 'https://taxiserviceksa.com/routes/khobar-to-dammam-airport/',
        type: 'website',
    },
};

export default function KhobarDammamAirportRoutePage() {
    const images = [
        '/hero-slide-2.webp',
        '/hero-slide-3.webp',
        '/jeddah-airport.webp'
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Khobar to Dammam Airport"
                description="Professional VIP private car service from Al Khobar to Dammam Airport (DMM). Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Khobar to Dammam Airport Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport Drop-off', description: 'Timely drop-offs at DMM departure terminal.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Khobar to Dammam Airport Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        VIP Airport Transfer
                    </span>
                }
                subtitle="Punctual & Stress-Free: Khobar to DMM Airport"
                location="Door-to-Door to DMM Airport"
            />

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Punctual Service</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Smart Way from Khobar to DMM Airport
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Don't risk missing your flight. Our professional chauffeur service from Al Khobar to King Fahd International Airport (DMM) ensures you arrive at the terminal relaxed and on time.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We provide door-to-door service from any hotel or residence in Khobar. Our drivers are experts in local traffic patterns, choosing the best routes to avoid congestion on the highway.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Plane className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Terminal Drop-off</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">24/7 Availability</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Home/Hotel Pickup</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Fixed Rates</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Book With Us?</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Always On Time</h4>
                                        <p className="text-sm text-gray-500">We recommend a pickup time that accounts for check-in and traffic, so you never have to rush.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Comfort & Space</h4>
                                        <p className="text-sm text-gray-500">Our SUVs have ample room for all your luggage, ensuring a comfortable ride even for large families.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Professionalism</h4>
                                        <p className="text-sm text-gray-500">Our chauffeurs are courteous, professional, and familiar with all terminal layouts at DMM.</p>
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
                            Watch our video to see the high quality of our fleet and the professional service we provide for airport transfers from Khobar to Dammam Airport.
                        </p>
                    </div>
                    <div className="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/IPPtK1h1PMo" 
                            title="Taxi Service Khobar to Dammam Airport" 
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
                                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-blue-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-gray-900">Standard Sedan</span>
                                        <span className="text-lg font-black text-blue-600">150 SAR</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Toyota Camry or similar (Up to 3 passengers)</p>
                                </div>
                                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-blue-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-gray-900">VIP SUV (GMC/Suburbun)</span>
                                        <span className="text-lg font-black text-blue-600">300 SAR</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Premium experience with extra luggage capacity</p>
                                </div>
                            </div>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs font-semibold">Home/Hotel Pickup Included</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs font-semibold">Reliable & Punctual Drivers</span>
                                </div>
                            </div>
                            <a href="https://wa.me/966505322744?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Khobar%20to%20Dammam%20Airport" className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
                                <WhatsAppIcon className="w-5 h-5 fill-white" />
                                Book on WhatsApp
                            </a>
                        </div>
                        <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl shadow-inner border border-blue-100/50 flex flex-col items-center text-center self-start">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Punctuality Matters</h4>
                            <p className="text-sm text-gray-500">We understand that every minute counts for airport transfers. Our drivers are trained to be always on time.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="Khobar to DMM Airport"
                        points={[
                            {
                                topic: "Departure Time",
                                commonBelief: "Leaving 2 hours before flight is enough.",
                                reality: "For international flights, we recommend leaving Khobar at least 3.5 to 4 hours before departure to account for check-in and traffic.",
                                truthRange: "Recommended Lead Time",
                                factors: ["3-hour Check-in", "50-min Drive"]
                            },
                            {
                                topic: "Pricing",
                                commonBelief: "App-based taxis are cheaper.",
                                reality: "While apps vary with surge pricing, our fixed 150 SAR rate offers predictability and a guaranteed premium vehicle with luggage assistance.",
                                truthRange: "Fixed Value",
                                factors: ["No Surge", "VIP Vehicle"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations 
                    currentCity="Khobar" 
                    customLinks={[
                        { name: 'Kuwait to DMM Airport', url: '/routes/kuwait-to-dammam-airport/', description: 'Book a long-distance cross-border transfer from Kuwait.' },
                        { name: 'Khobar to Bahrain', url: '/routes/khobar-to-bahrain/', description: 'Direct taxi service across the Causeway to Manama.' },
                        { name: 'Khobar to Riyadh', url: '/routes/khobar-riyadh/', description: 'Premium intercity transport from Khobar to the Capital.' },
                        { name: 'DMM Airport to Kuwait', url: '/routes/dammam-airport-to-kuwait/', description: 'VIP transfers from DMM Airport to Kuwait City.' },
                    ]}
                />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the drive from Khobar to DMM Airport?",
                        shortAnswer: "40 to 55 minutes.",
                        detailedAnswer: "The journey is approximately 55 km and usually takes about 45 minutes. However, we recommend scheduling your pickup earlier during peak traffic hours.",
                        perspectives: []
                    },
                    {
                        question: "What is the fare for a taxi from Khobar to the airport?",
                        shortAnswer: "150 SAR (Sedan) / 300 SAR (SUV).",
                        detailedAnswer: "We offer a fixed rate of 150 SAR for a premium sedan and 300 SAR for a VIP SUV like a GMC Yukon.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a taxi for an early morning flight?",
                        shortAnswer: "Yes, 24/7 service.",
                        detailedAnswer: "We operate 24 hours a day. You can book a pickup for any time, including 3 AM or 4 AM flights.",
                        perspectives: []
                    },
                    {
                        question: "Do you pick up from any location in Khobar?",
                        shortAnswer: "Yes, door-to-door.",
                        detailedAnswer: "We pick up from all residential areas, hotels (like Kempinski, Meridien, Intercontinental), and offices in Khobar.",
                        perspectives: []
                    },
                    {
                        question: "Is there enough space for 4 large suitcases?",
                        shortAnswer: "Yes, in our SUVs.",
                        detailedAnswer: "If you have a lot of luggage, we recommend booking our SUV (GMC/Suburban) which has a large dedicated trunk space.",
                        perspectives: []
                    },
                    {
                        question: "Are your drivers familiar with DMM terminals?",
                        shortAnswer: "Yes, experts.",
                        detailedAnswer: "Our drivers know exactly where to drop you off at the departure gates for both domestic and international flights.",
                        perspectives: []
                    },
                    {
                        question: "Can I cancel my booking if my plans change?",
                        shortAnswer: "Yes, with notice.",
                        detailedAnswer: "You can cancel or reschedule your booking. Please notify us at least 2 hours before your scheduled pickup time.",
                        perspectives: []
                    },
                    {
                        question: "Do you provide an invoice for corporate travel?",
                        shortAnswer: "Yes, available.",
                        detailedAnswer: "We can provide digital invoices for your business travel expenses. Please request this via WhatsApp.",
                        perspectives: []
                    },
                    {
                        question: "Are the vehicles child-friendly?",
                        shortAnswer: "Yes, safe and clean.",
                        detailedAnswer: "Our vehicles are clean, smoke-free, and well-maintained. We can provide child seats if requested in advance.",
                        perspectives: []
                    },
                    {
                        question: "How do I confirm my booking?",
                        shortAnswer: "Instant WhatsApp confirmation.",
                        detailedAnswer: "Once you message us on WhatsApp with your details, we will confirm your booking and send you the driver's details before the trip.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
