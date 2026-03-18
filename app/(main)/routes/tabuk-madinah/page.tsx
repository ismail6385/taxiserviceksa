
import { Metadata } from 'next';
import Link from 'next/link';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Shield, Users, ArrowRight, Briefcase, Navigation, Star, Plane, Coffee, User } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import FreshnessStatus from '@/components/seo/FreshnessStatus';
import TLDRSummary from '@/components/seo/TLDRSummary';

export const metadata: Metadata = {
    title: 'Taxi Tabuk to Madinah | Tabuk to Madinah Private Car',
    description: 'Book the best online taxi from Tabuk to Madinah. Direct 6.5-7 hour intercity transfer. Fixed rates, VIP GMC Yukons, and door-to-door service for families.',
    keywords: ['Taxi Tabuk to Madinah', 'Tabuk to Madinah Taxi', 'Tabuk to Madinah private car', 'taxi from Tabuk to Madinah', 'Tabuk to Madinah car hire', 'intercity taxi Saudi Arabia'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/tabuk-madinah/',
    },
};

export default function TabukMadinahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '680 km', icon: Navigation },
        { label: 'Travel Time', value: '6.5 - 7 Hours', icon: Clock },
        { label: 'Destination', value: 'Madinah City', icon: MapPin },
        { label: 'Service', value: '24/7 Door-to-Door', icon: CheckCircle2 },
    ];

    const routeImages = ['/locations/tabuk.webp', '/hero-slide-3.webp'];

    

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation 
                cityName="Tabuk to Madinah"
                description="Professional VIP private car service from Tabuk to Madinah. Reliable, door-to-door long-distance transport for families and business travelers."
                services={[
                    { name: 'Tabuk to Madinah Taxi', description: 'Direct 24/7 private transfer with professional chauffeurs.' },
                    { name: 'Family SUV Transfer', description: 'Spacious and safe GMC Yukons for the drive between Tabuk and Madinah.' },
                    { name: 'Long-Distance Chauffeur', description: 'Comfortable long-distance travel across Saudi Arabia with luxury vehicles.' },
                    { name: 'Return Trip Booking', description: 'Book your return journey from Madinah back to Tabuk at competitive rates.' }
                ]}
                priceRange={{ min: 500, max: 4500, currency: "SAR" }}
                image="https://taxiserviceksa.com/locations/tabuk.webp"
            />

            <Hero
                images={routeImages}
                h1Text="Taxi Tabuk to Madinah"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Tabuk → Madinah Route
                    </span>
                }
                subtitle="Reliable Intercity Private Chauffeur Service"
                location="680 km | Fixed Rates | Door-to-Door"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=tabuk-madinah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book This Route
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:info@taxiserviceksa.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Email for Quote
                        </Button>
                    </a>
                </div>
            </Hero>

            {/* TLDR Summary Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <FreshnessStatus lastVerified="2026-03-15" />
                    <TLDRSummary 
                        title="Tabuk to Madinah Taxi Summary"
                        summary="The most reliable way to travel from Tabuk to the Holy City of Madinah. Our private taxi service offers a direct 680km journey with door-to-door pickup and professional handling of the long desert stretch."
                        points={[
                            "Complete door-to-door service from your Tabuk home/hotel to Madinah",
                            "Specialized intercity drivers with years of experience on the Route 15",
                            "Stop anytime for refreshments at clean highway rest areas",
                            "No luggage limits - carry all your suitcases and travel gear with ease",
                            "Licensed vehicles including VIP GMC Yukon XL for maximum group comfort"
                        ]}
                        pricing="Fixed Rates"
                        duration="6.5 - 7 Hours"
                    />
                </div>
            </section>

            {/* Route Details Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Route Information</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Best Tabuk to Madinah Online Booking</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Booking a <strong>Tabuk to Madinah taxi</strong> online provides a secure and comfortable alternative to public transport. We deliver a <strong>private car hire</strong> that ensures you and your family reach Madinah relaxed and on time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

                    {/* Neighborhood Coverage */}
                    <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-primary" /> Tabuk Pickup Areas
                            </h3>
                            <p className="text-gray-600 mb-6">Prompt 24/7 pickup from any district in Tabuk city.</p>
                            <div className="flex flex-wrap gap-2">
                                {['Al Rawda', 'Al Murooj', 'Al Salam', 'Al Olaya', 'Al Nakhil', 'Al Wurood'].map((zone) => (
                                    <span key={zone} className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl text-sm font-medium text-gray-700">{zone}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Star className="w-6 h-6 text-emerald-600" /> Madinah Arrival
                            </h3>
                            <p className="text-gray-600 mb-6">Direct drop-off at your hotel near the Haram or any other district.</p>
                            <div className="flex flex-wrap gap-2">
                                {['Al Masjid an Nabawi Area', 'Quba District', 'Awali Area', 'Khalidiyah', 'Suhaimah'].map((zone) => (
                                    <span key={zone} className="bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl text-sm font-medium text-gray-700">{zone}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Journey Timeline */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Clock className="w-8 h-8 text-white" />
                            Tabuk to Madinah Timeline
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">1</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Pickup in Tabuk</div>
                                    <p className="text-gray-300 text-sm">Chauffeur arrives at your location. Efficient luggage loading and safety checks.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">2</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Madinah Highway (680 km)</div>
                                    <p className="text-gray-300 text-sm">Consistent cruise via the main north-south highway connecting Tabuk and Madinah.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">3</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Refreshment Break</div>
                                    <p className="text-gray-300 text-sm">Stop at modern service stations for meals, coffee, and prayer breaks.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary text-black font-bold rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">4</div>
                                <div>
                                    <div className="font-bold text-lg mb-1">Arrival in Madinah City</div>
                                    <p className="text-gray-300 text-sm">Direct drop-off at your hotel lobby or specific address in Madinah.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full mb-6">
                            <Star className="w-4 h-4 text-emerald-700" />
                            <span className="text-sm font-semibold text-emerald-900">Fixed Intercity Rates</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-6">
                            Tabuk to Madinah Taxi Price
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <Car className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">Standard Sedan</div>
                            <div className="text-2xl font-black text-emerald-600 mb-2">Fixed Rate</div>
                            <p className="text-gray-500 text-sm">4 Passengers / 2 Bags</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 hover:shadow-xl transition-all text-center relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Best for Long Drive</div>
                            <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">GMC Yukon XL</div>
                            <div className="text-2xl font-black text-emerald-600 mb-2">Executive Rate</div>
                            <p className="text-gray-500 text-sm">7 Passengers / 6 Bags</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all text-center">
                            <Briefcase className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                            <div className="text-xl font-bold mb-3">Group Van</div>
                            <div className="text-2xl font-black text-emerald-600 mb-2">Group Fare</div>
                            <p className="text-gray-500 text-sm">7-9 Passengers</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white py-12 border-t border-gray-100">
                <RelatedLocations currentCity="Tabuk" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long is the taxi ride from Tabuk to Madinah?",
                        shortAnswer: "6.5 - 7 Hours.",
                        detailedAnswer: "The distance between Tabuk and Madinah is approximately 680 km. Our drivers usually complete the trip in under 7 hours including necessary rest stops.",
                        perspectives: []
                    },
                    {
                        question: "What is the price for a taxi from Tabuk to Madinah?",
                        shortAnswer: "Fixed Competitive Fares.",
                        detailedAnswer: "We offer fixed rates for the entire vehicle. For families, the GMC Yukon XL is recommended for better comfort during the 7-hour road trip.",
                        perspectives: []
                    },
                    {
                        question: "Can I Request a quote for a pickup in Tabuk at short notice?",
                        shortAnswer: "Yes, 24/7.",
                        detailedAnswer: "While advance booking is preferred for long intercity trips, we can often arrange a pickup in Tabuk within 1-2 hours of your request.",
                        perspectives: []
                    }
                ]}
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Get a quote for your Taxi Tabuk to Madinah
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Safe, comfortable, and reliable intercity transfers. Professional drivers and VIP vehicles ready to take you from Tabuk to the Holy City.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/booking/?route=tabuk-madinah">
                            <Button size="lg" className="bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Get Quote (Fixed Price)
                            </Button>
                        </Link>
                        <a href="mailto:info@taxiserviceksa.com">
                            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                Email for Quote
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}


