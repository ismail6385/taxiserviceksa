import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight, CreditCard } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import TrustSignals from '@/components/TrustSignals';
import TravelRequirements from '@/components/TravelRequirements';
import PricingTable from '@/components/PricingTable';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ServiceComparison from '@/components/ServiceComparison';

export const metadata: Metadata = {
    title: 'Kuwait to Riyadh Taxi | VIP Cross-Border Transfer | Taxi Service KSA',
    description: 'Request a premium quote from Kuwait to Riyadh. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service across the GCC.',
    keywords: ['Taxi Kuwait to Riyadh', 'Kuwait to Riyadh transfer', 'cross border taxi Saudi Arabia', 'VIP transport Kuwait Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/kuwait-riyadh/',
    },
    openGraph: {
        title: 'Kuwait to Riyadh Taxi | Taxi Service KSA',
        description: 'Request a premium quote from Kuwait to Riyadh. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service across the GCC.',
        url: 'https://taxiserviceksa.com/routes/kuwait-riyadh/',
        type: 'website',
    },
};

export default function KuwaitRiyadhRoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    const pricingRows = [
        {
            vehicle: "Sedan (Camry/Sonata)",
            description: "Comfortable standard sedan",
            price: "170",
            capacity: "4 Passengers",
        },
        {
            vehicle: "Toyota Fortuner",
            description: "Mid-size SUV for families",
            price: "200",
            capacity: "6 Passengers",
            isPopular: true
        },
        {
            vehicle: "GMC / Chevrolet Tahoe",
            description: "Spacious premium VIP SUV",
            price: "250",
            capacity: "7 Passengers",
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Kuwait to Riyadh"
                description="Professional VIP private car service for Kuwait to Riyadh. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Kuwait to Riyadh Taxi', description: 'Premium private transfer with guaranteed fixed rates starting from 170 KD.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family Van Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Kuwait to Riyadh Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless VIP Transfers: Kuwait to Riyadh"
                location="Door-to-Door Service"
            >
                <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col items-center">
                    <div className="bg-emerald-600 text-white font-bold px-6 py-2 rounded-full mb-6 shadow-lg inline-flex items-center gap-2 text-lg">
                        <CheckCircle2 className="w-5 h-5" /> Starting from 170 KD
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                        <Link href="/booking?pickup=Kuwait&dropoff=Riyadh" className="w-full sm:w-auto">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full">
                                Book Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20Kuwait%20to%20Riyadh" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Quotation</Button>
                        </a>
                    </div>
                </div>
            </Hero>

            <div className="bg-white py-4 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs />
                </div>
            </div>

            <TrustSignals />

            {/* Urgency / Scarcity Banner */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-amber-800 text-sm sm:text-base">
                    <Clock className="w-5 h-5 shrink-0" />
                    <p><strong>High Demand Notice:</strong> Weekend cross-border transfers are booking fast. Please reserve your SUV at least 24-48 hours in advance.</p>
                </div>
            </div>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">International Border</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Premium Way from Kuwait to Riyadh
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Traveling between Kuwait and Riyadh by road is a popular option for families, businessmen, and GCC residents. The distance is approximately 650 km, and the journey typically takes 6-8 hours.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Avoid the hassle of airport queues and strict baggage allowances. Our professional chauffeurs handle the border crossing paperwork, vehicle insurance, and navigate the journey while you relax in a spacious SUV.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Border Assistance</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">6-8 hours Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Door-to-Door</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">VIP Comfort</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works: 3 Easy Steps</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Send a WhatsApp</h4>
                                        <p className="text-sm text-gray-500">Tap the WhatsApp button, share your Kuwait pickup location, Riyadh destination, and travel date.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Share Documents</h4>
                                        <p className="text-sm text-gray-500">Securely send copies of passports/Iqamas so our team can prepare the border crossing paperwork in advance.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shrink-0 shadow-sm text-white font-bold"><CheckCircle2 className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Enjoy the VIP Ride</h4>
                                        <p className="text-sm text-gray-500">Your premium SUV arrives at your doorstep. Sit back, relax, and enjoy the 650km journey.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet & Chauffeur Showcase */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Cross-Border Fleet</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">For the 8-hour journey between Kuwait and Riyadh, comfort is non-negotiable. Our fleet primarily consists of brand-new <strong>GMC Yukon, Chevrolet Tahoe, and Toyota Fortuner</strong> SUVs.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Premium leather seating with ample legroom</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Rear AC vents & climate control</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Spacious trunks for international luggage</li>
                            </ul>
                            
                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-2">Expert Bilingual Chauffeurs</h3>
                                <p className="text-sm text-gray-400">Our drivers aren't just captains; they are GCC border experts. They speak both Arabic and English, know the Nuwaiseeb/Khafji border protocols inside out, and ensure a smooth, polite, and completely professional experience.</p>
                            </div>
                        </div>
                        <div className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            {/* Note: Using hero-slide-1 as a placeholder for a fleet image */}
                            <img src="/hero-slide-1.webp" alt="GMC SUV VIP Fleet" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div>
                                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Most Popular</span>
                                    <h4 className="text-xl font-bold text-white">GMC / Chevrolet VIP SUV</h4>
                                    <p className="text-gray-300 text-sm">Perfect for families of 4-7 members.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <PricingTable 
                        title="Kuwait to Riyadh Taxi Fares" 
                        subtitle="Transparent Pricing" 
                        rows={pricingRows.map(row => ({...row, price: row.price + " KD"}))}
                        disclaimer="Prices include fuel, border crossing vehicle insurance, and tolls. No hidden charges."
                    />

                    {/* Currencies Accepted */}
                    <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-center gap-6 shadow-sm">
                        <div className="flex items-center gap-3">
                            <CreditCard className="w-8 h-8 text-primary" />
                            <div>
                                <h4 className="font-bold text-gray-900">Flexible Payment Options</h4>
                                <p className="text-sm text-gray-500">Pay in your preferred currency</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['KWD', 'SAR', 'AED', 'USD ($)', 'EUR (€)', 'GBP (£)'].map(curr => (
                                <span key={curr} className="bg-gray-100 text-gray-800 font-bold px-4 py-2 rounded-lg text-sm border border-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                                    {curr}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <TravelRequirements />

            <section className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <ServiceComparison />
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">What Our Cross-Border Clients Say</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Real reviews from passengers who traveled between Kuwait and Riyadh with our VIP SUV service.</p>
                    </div>
                    <ReviewsDisplay />
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
                        contextName="Kuwait to Riyadh"
                        points={[
                            {
                                topic: "Visas & ID",
                                commonBelief: "Just jump in and go.",
                                reality: "You must have a valid passport, Iqama/GCC ID, and appropriate visas depending on your nationality. The driver assists but cannot issue visas.",
                                truthRange: "Passenger Responsibility",
                                factors: ["Valid Passport", "GCC Visa"]
                            },
                            {
                                topic: "Pricing",
                                commonBelief: "It's expensive for groups.",
                                reality: "For families or groups of 4-6 people, a private VIP SUV transfer is often cheaper than buying multiple flight tickets.",
                                truthRange: "Highly Cost-Effective",
                                factors: ["Per-Vehicle Price", "No Luggage Fees"]
                            }
                        ]}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
            </div>

            {/* SEO Content Section: Popular Locations & Journey Details */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Door-to-Door Coverage</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Kuwait City to Riyadh Taxi Service</h2>
                        <p className="text-gray-600 max-w-3xl">We provide comprehensive coverage across all major areas in Kuwait. Whether you need a ride from the capital or the surrounding governorates, our premium drivers will come directly to your doorstep.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Taxi from Salmiya to Riyadh</h2>
                            <p className="text-gray-600 text-sm">Enjoy direct VIP pick-ups from anywhere in Salmiya. Our chauffeurs handle your luggage, ensuring a seamless start to your Saudi journey.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Taxi from Jabriya to Riyadh</h2>
                            <p className="text-gray-600 text-sm">Booking a ride from Jabriya? We offer timely arrivals and spacious SUVs perfect for families traveling across the border.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Taxi from Fahaheel to Riyadh</h2>
                            <p className="text-gray-600 text-sm">Fast and reliable cross-border transfers from Fahaheel. Skip the airport lines and travel directly to your hotel or business meeting.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Taxi from Mangaf to Riyadh</h2>
                            <p className="text-gray-600 text-sm">Convenient pick-ups from Mangaf with professional drivers experienced in navigating the GCC highway routes safely.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Taxi from Mahboula to Riyadh</h2>
                            <p className="text-gray-600 text-sm">Traveling from Mahboula? Reserve our premium fleet and relax in VIP comfort for the entire 650 km journey.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Taxi from Salwa Kuwait to Riyadh</h2>
                            <p className="text-gray-600 text-sm">Direct, private transfers from Salwa. We assist with all border documentation so you can enjoy a stress-free trip.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Taxi from Sabah Al Salem to Riyadh</h2>
                            <p className="text-gray-600 text-sm">Reliable pick-ups from Sabah Al Salem with guaranteed fixed rates and no hidden fees upon arrival in Saudi Arabia.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kuwait to Riyadh Taxi Fare & Ticket Price</h2>
                            <p className="text-gray-600 mb-6">We believe in transparent pricing. The Kuwait to Riyadh taxi ticket price starts at 170 KD for standard sedans and goes up to 250 KD for premium GMC/Tahoe SUVs. Unlike buses or airlines, this is a per-vehicle rate, making it highly cost-effective for groups. The fare includes fuel, border crossing vehicle insurance, and tolls.</p>
                            
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kuwait to Riyadh Taxi Number & Timing</h2>
                            <p className="text-gray-600 mb-6">Need an urgent ride? Our Kuwait to Riyadh taxi timing is strictly 24/7. We operate around the clock to accommodate your schedule. You can instantly book or request a custom quote by contacting our Kuwait to Riyadh taxi number via WhatsApp directly through this page.</p>
                        </div>
                        <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Kuwait to Riyadh by Car (Distance & Route)</h2>
                            <p className="text-gray-600 mb-4">Traveling from Kuwait to Riyadh by car is a preferred choice for many due to the direct highway links and the convenience of avoiding flight delays.</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                                    <div>
                                        <span className="font-bold text-gray-900">Kuwait to Riyadh Distance:</span>
                                        <p className="text-sm text-gray-700">The total driving distance is approximately 650 kilometers (403 miles) depending on your exact pick-up and drop-off locations.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                                    <div>
                                        <span className="font-bold text-gray-900">Estimated Travel Time:</span>
                                        <p className="text-sm text-gray-700">The journey takes around 6 to 8 hours. This includes standard driving time plus the average processing time at the Nuwaiseeb / Khafji border crossing.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does a taxi take from Kuwait to Riyadh?",
                        shortAnswer: "6-8 hours",
                        detailedAnswer: "The total driving time is around 6-8 hours. Please note that border crossing times can vary between 30 minutes to 2 hours depending on the season, weekends, and time of day.",
                        perspectives: []
                    },
                    {
                        question: "What vehicle options do you have for this route?",
                        shortAnswer: "SUVs & Sedans",
                        detailedAnswer: "We offer comfortable sedans for 1-2 passengers and premium SUVs (like GMC Yukon or Chevy Suburban) which are highly recommended for the long 650 km journey.",
                        perspectives: []
                    },
                    {
                        question: "Is the border vehicle insurance included in the price?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, our quoted prices include the vehicle crossing insurance and toll fees.",
                        perspectives: []
                    },
                    {
                        question: "Can I pay in Kuwaiti Dinar or Saudi Riyal?",
                        shortAnswer: "Yes",
                        detailedAnswer: "We accept multiple currencies including KWD, SAR, AED, USD, EUR, and GBP. You can pay the driver directly in cash or via agreed electronic payment methods.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
