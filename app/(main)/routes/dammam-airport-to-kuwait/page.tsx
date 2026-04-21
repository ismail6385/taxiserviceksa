import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight, Plane, ShieldCheck, FileText, Presentation, ExternalLink } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import WhatsAppIcon from '@/components/WhatsAppIcon';


export const metadata: Metadata = {
    title: 'Dammam Airport to Kuwait Taxi | VIP Cross-Border Transfer | Taxi Service KSA',
    description: 'Book a premium taxi from King Fahd International Airport (DMM) Dammam to Kuwait. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service.',
    keywords: ['Dammam Airport to Kuwait Taxi', 'DMM to Kuwait transfer', 'Dammam airport cross border taxi', 'VIP transport Dammam Kuwait'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/dammam-airport-to-kuwait/',
    },
    openGraph: {
        title: 'Dammam Airport to Kuwait Taxi | Taxi Service KSA',
        description: 'Book a premium taxi from King Fahd International Airport (DMM) Dammam to Kuwait. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service.',
        url: 'https://taxiserviceksa.com/routes/dammam-airport-to-kuwait/',
        type: 'website',
    },
};

export default function DammamAirportKuwaitRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Dammam Airport to Kuwait"
                description="Professional VIP private car service from Dammam Airport (DMM) to Kuwait. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Dammam Airport to Kuwait Taxi', description: 'Premium private transfer with guaranteed fixed rates.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport Pickup & Drop-off', description: 'Convenient pickups at DMM and drop-offs in Kuwait.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Dammam Airport to Kuwait Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        DMM Airport Transfer
                    </span>
                }
                subtitle="VIP Cross-Border Service: DMM Airport to Kuwait"
                location="King Fahd International Airport (DMM)"
            />

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Airport to Border</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Direct Transfer from DMM Airport to Kuwait
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Land at King Fahd International Airport (DMM) and travel directly to Kuwait without the stress of multiple transfers. Our meet-and-greet service ensures your driver is waiting at the arrivals gate.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                The journey from DMM Airport to Kuwait is approximately 430 km. With our professional chauffeurs, you avoid the hassle of rental cars or public transport, enjoying a comfortable ride in a luxury SUV.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Plane className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Meet & Greet at DMM</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">4.5 - 5.5 hours</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Door-to-Door</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">GCC Cross-Border</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Airport Pickup Included</h4>
                                        <p className="text-sm text-gray-500">We track your flight and wait for you at the arrivals hall with a name sign, even if your flight is delayed.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Expert Border Handling</h4>
                                        <p className="text-sm text-gray-500">Our drivers are familiar with the Khafji/Nuwaiseeb border crossing procedures, ensuring a smooth transition.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Premium Fleet</h4>
                                        <p className="text-sm text-gray-500">Travel in the latest models of GMC Yukon, Chevrolet Suburban, or luxury sedans with ample space for luggage.</p>
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
                        <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Experience the Quality</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">VIP Taxi Journey from DMM Airport to Kuwait</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Watch our detailed video guide to see the comfort of our premium fleet and the professional chauffeur service we provide.
                        </p>
                    </div>
                    <div className="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-10">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/IPPtK1h1PMo" 
                            title="Taxi Service Dammam Airport to Kuwait Video Guide" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="flex justify-center">
                        <a href="https://wa.me/966505322744?text=Hello,%20I%20saw%20your%20journey%20video%20and%20want%20to%20book%20DMM%20to%20Kuwait%20taxi" className="inline-flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 font-bold py-4 px-10 rounded-2xl shadow-xl transition-all hover:scale-105">
                            <WhatsAppIcon className="w-5 h-5 fill-white" />
                            Book Your VIP Ride Now
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Interactive Route Guide</h3>
                            <p className="text-lg text-gray-600 mb-6">
                                View our complete transfer guide below. You can also download it for offline use during your journey.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <a href="/Dammam_to_Kuwait_Transfer.pdf" download className="inline-flex items-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 font-bold py-3 px-6 rounded-xl transition-colors">
                                    <FileText className="w-5 h-5" />
                                    Download PDF
                                </a>
                                <a href="/Dammam_to_Kuwait_Transfer.pptx" download className="inline-flex items-center gap-2 bg-white text-emerald-800 border-2 border-emerald-200 hover:bg-emerald-50 font-bold py-3 px-6 rounded-xl transition-colors">
                                    <Presentation className="w-5 h-5" />
                                    Download Slides
                                </a>
                            </div>

                            {/* Embedded PDF Viewer - Responsive */}
                            <div className="w-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative">
                                {/* Desktop/Tablet Viewer */}
                                <div className="hidden md:block h-[600px]">
                                    <iframe 
                                        src="/Dammam_to_Kuwait_Transfer.pdf#toolbar=0" 
                                        className="w-full h-full border-none"
                                        title="Dammam to Kuwait Transfer Guide"
                                    ></iframe>
                                </div>
                                {/* Mobile Fallback */}
                                <div className="md:hidden p-8 text-center flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                                        <FileText className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <h4 className="font-bold text-gray-900">View Detailed Route PDF</h4>
                                    <p className="text-sm text-gray-500">The PDF viewer is optimized for larger screens. Click below to view the full guide on your mobile device.</p>
                                    <a 
                                        href="/Dammam_to_Kuwait_Transfer.pdf" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Open Full Guide
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 flex flex-col gap-6 self-start">
                            {/* Verified Info Card */}
                            <div className="bg-white p-6 rounded-2xl shadow-inner border border-emerald-100/50 flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-8 h-8 text-emerald-600" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Verified Information</h4>
                                <p className="text-sm text-gray-500">Our guides are updated weekly for accurate border info.</p>
                            </div>

                            {/* Booking CTA Card */}
                            <div className="bg-emerald-600 p-8 rounded-2xl shadow-xl text-white">
                                <h4 className="text-xl font-bold mb-4">Pricing & Booking</h4>
                                <div className="space-y-4 mb-8">
                                    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold">Toyota Fortuner</span>
                                            <span className="text-lg font-black text-emerald-300">150 KWD</span>
                                        </div>
                                        <p className="text-xs text-emerald-100">Comfortable SUV for 4-5 passengers</p>
                                    </div>
                                    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold">GMC Yukon/Suburban</span>
                                            <span className="text-lg font-black text-emerald-300">180 KWD</span>
                                        </div>
                                        <p className="text-xs text-emerald-100">Premium VIP SUV for 6-7 passengers</p>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                                        <span className="text-xs font-semibold">Door-to-Door Pickup</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                                        <span className="text-xs font-semibold">Border Assistance Included</span>
                                    </div>
                                </div>
                                <a href="https://wa.me/966505322744?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Dammam%20Airport%20to%20Kuwait" className="w-full bg-white text-emerald-600 hover:bg-gray-100 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
                                    <WhatsAppIcon className="w-5 h-5 fill-emerald-600" />
                                    Book Now
                                </a>
                            </div>

                            {/* Need Help? */}
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-2">Need Custom Help?</h4>
                                <p className="text-xs text-gray-500 mb-4">Our support team is available 24/7 for custom requests.</p>
                                <Link href="/contact" className="text-emerald-600 font-bold text-sm hover:underline flex items-center gap-1">
                                    Contact Support <ArrowRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="DMM Airport to Kuwait"
                        points={[
                            {
                                topic: "Visas",
                                commonBelief: "Drivers handle all visas.",
                                reality: "Passengers must ensure they have valid GCC visas/e-visas. Drivers assist with the process but cannot provide visas.",
                                truthRange: "Passenger Responsibility",
                                factors: ["Valid Passport", "Kuwait E-visa"]
                            },
                            {
                                topic: "Travel Time",
                                commonBelief: "It takes the same time as flying.",
                                reality: "While flying is faster, door-to-door taxi saves time on airport check-ins, security, and transfers on both ends.",
                                truthRange: "Competitive Total Time",
                                factors: ["430 km Drive", "Border Processing"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations 
                    currentCity="Dammam" 
                    customLinks={[
                        { name: 'Khobar (Al Khobar)', url: '/routes/dammam-airport-to-khobar/', description: 'Quick and reliable transfers to the Khobar Corniche and business districts.' },
                        { name: 'Dhahran (Aramco)', url: '/locations/dhahran/', description: 'Direct service to Dhahran residential and industrial hubs.' },
                        { name: 'Jubail Industrial City', url: '/locations/jubail/', description: 'Professional chauffeur service for business travel to Jubail.' },
                        { name: 'Bahrain (Cross-Border)', url: '/routes/dammam-bahrain/', description: 'Seamless VIP transfers across the King Fahd Causeway to Manama.' },
                        { name: 'Qatif City', url: '/locations/qatif/', description: 'Reliable taxi services for Qatif and surrounding areas.' },
                        { name: 'Al Ahsa (Hofuf)', url: '/locations/al-ahsa/', description: 'Intercity transfers to the historic Oasis city of Al Ahsa.' },
                        { name: 'Ras Tanura', url: '/locations/ras-tanura/', description: 'Professional transport to the Ras Tanura industrial zone.' },
                        { name: 'Riyadh (Capital City)', url: '/locations/riyadh/', description: 'Luxury intercity chauffeur service between Dammam and Riyadh.' },
                    ]}
                />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does it take from Dammam Airport to Kuwait?",
                        shortAnswer: "4.5 to 5.5 hours",
                        detailedAnswer: "The drive takes about 4.5 to 5 hours depending on traffic and border crossing times, which can vary between 30 minutes to 1.5 hours.",
                        perspectives: []
                    },
                    {
                        question: "Do you offer meet and greet at King Fahd Airport?",
                        shortAnswer: "Yes, included.",
                        detailedAnswer: "Yes, our driver will be waiting at the arrival terminal with your name on a signboard for a seamless pickup.",
                        perspectives: []
                    },
                    {
                        question: "Is there enough space for luggage?",
                        shortAnswer: "Yes, in our SUVs.",
                        detailedAnswer: "Our premium SUVs (GMC/Suburban) have large trunk space perfect for 5-7 large suitcases plus carry-ons.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a return taxi from Kuwait to Dammam Airport?",
                        shortAnswer: "Yes, 24/7 service.",
                        detailedAnswer: "We offer round-trip services. You can book your return journey from Kuwait to DMM Airport at the same time for a coordinated experience.",
                        perspectives: []
                    },
                    {
                        question: "What documents are needed for the Saudi-Kuwait border?",
                        shortAnswer: "Passport & Valid Visas.",
                        detailedAnswer: "You need an original passport, a valid GCC ID (for citizens), and appropriate visas/iqamas. Our drivers help guide you through the process at the border.",
                        perspectives: []
                    },
                    {
                        question: "Do you provide child seats for families?",
                        shortAnswer: "Yes, upon request.",
                        detailedAnswer: "We provide clean and safe child seats. Please mention the number of children and their ages when booking on WhatsApp.",
                        perspectives: []
                    },
                    {
                        question: "Is the price fixed or based on a meter?",
                        shortAnswer: "Strictly fixed rates.",
                        detailedAnswer: "Our prices are 100% fixed. Once we provide a quote on WhatsApp, that is exactly what you pay—no hidden parking or toll fees.",
                        perspectives: []
                    },
                    {
                        question: "Can I make stops for prayer or refreshments?",
                        shortAnswer: "Yes, absolutely.",
                        detailedAnswer: "This is a private transfer. You can request stops for prayer, snacks, or rest at any high-quality service station along the highway.",
                        perspectives: []
                    },
                    {
                        question: "What payment methods do you accept?",
                        shortAnswer: "Cash and Online.",
                        detailedAnswer: "We accept cash payments in SAR or KWD. For corporate bookings, we can also arrange online transfers or invoice payments.",
                        perspectives: []
                    },
                    {
                        question: "Is the service available during Eid or weekends?",
                        shortAnswer: "Yes, we operate 24/7.",
                        detailedAnswer: "Our service is available every day of the year, including public holidays and weekends. We recommend early booking for holiday seasons.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
