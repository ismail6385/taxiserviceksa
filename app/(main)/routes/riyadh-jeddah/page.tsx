import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car, Clock, MapPin, CheckCircle2, Users, ArrowRight, Navigation, DollarSign, Luggage, Coffee, Moon } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import JsonLdRoute from '@/components/JsonLdRoute';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PricingTable from '@/components/PricingTable';

export const metadata: Metadata = {
    title: 'Riyadh to Jeddah Taxi | Private Car & Chauffeur Service',
    description: 'Book a private Riyadh to Jeddah taxi with professional chauffeurs. Approx. 950 km, 9-10 hours, multiple vehicles, door-to-door pickup and confirmed pricing.',
    keywords: ['Taxi Riyadh to Jeddah', 'Riyadh to Jeddah Taxi', 'Riyadh to Jeddah private car', 'taxi from Riyadh to Jeddah', 'Riyadh to Jeddah by car', 'Riyadh to Jeddah taxi fare', 'Riyadh to Jeddah distance'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/riyadh-jeddah/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/riyadh-jeddah/',
            'ar': 'https://taxiserviceksa.com/ar/routes/riyadh-jeddah/',
            'x-default': 'https://taxiserviceksa.com/routes/riyadh-jeddah/',
        },
    },
};

export default function RiyadhJeddahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: 'Approx. 950 km', icon: Navigation },
        { label: 'Travel Time', value: '9-10 Hours', icon: Clock },
        { label: '2026 Base Fare', value: 'From 1000 SAR', icon: DollarSign },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    const pricingRows = [
        { vehicle: 'Toyota Camry', description: 'Sedan — up to 4 passengers.', price: '1000', capacity: '4 Pax', isPopular: false },
        { vehicle: 'Hyundai Staria VIP', description: 'Van with captain seats, dual AC.', price: '1600', capacity: '7 Pax', isPopular: true },
        { vehicle: 'GMC Yukon XL', description: 'Full-size premium SUV.', price: '2000', capacity: '7 Pax', isPopular: false },
        { vehicle: 'Mercedes S-Class', description: 'VIP sedan for executive travel.', price: '3500', capacity: '3 Pax', isPopular: false },
        { vehicle: 'Mercedes Sprinter', description: 'Large van for bigger groups.', price: '4000', capacity: '14 Pax', isPopular: false },
    ];

    const whyBook = [
        'Door-to-door pickup and drop-off',
        'Private vehicle — no shared passengers',
        'Professional chauffeur',
        'Flexible departure time',
        'Rest stops available on request',
        'Multiple vehicle options for any group size',
        '24/7 booking support',
    ];

    const faqs = [
        { question: "How long does Riyadh to Jeddah take by taxi?", shortAnswer: "Usually around 9-10 hours", detailedAnswer: "Driving time is typically 9-10 hours for the approximately 950 km journey, depending on traffic, rest stops and road conditions.", perspectives: [] },
        { question: "How much is a Riyadh to Jeddah taxi?", shortAnswer: "From 1000 SAR", detailedAnswer: "Rates start from 1000 SAR for a sedan (Toyota Camry). A Hyundai Staria VIP is 1600 SAR, a GMC Yukon XL is 2000 SAR, a Mercedes S-Class is 3500 SAR, and a Mercedes Sprinter (up to 14 passengers) is 4000 SAR. All prices are per vehicle, confirmed before booking.", perspectives: [] },
        { question: "Is the Riyadh to Jeddah taxi private?", shortAnswer: "Yes", detailedAnswer: "Yes, this is a private vehicle and chauffeur — no shared passengers.", perspectives: [] },
        { question: "Is the fare per person or per vehicle?", shortAnswer: "Per vehicle", detailedAnswer: "The quoted price is for the entire vehicle, not per passenger. A group of 6-7 in a GMC Yukon XL pays 2000 SAR total, not per person.", perspectives: [] },
        { question: "Can I book a return trip?", shortAnswer: "Yes", detailedAnswer: "Yes, one-way or return trips can be booked. Let us know your return date when booking and we'll confirm return pricing.", perspectives: [] },
        { question: "Can I book from Riyadh Airport?", shortAnswer: "Yes", detailedAnswer: "Yes, pickup from King Khalid International Airport (RUH) is available.", perspectives: [] },
        { question: "Can you pick me up from my hotel?", shortAnswer: "Yes", detailedAnswer: "Yes, pickup is available from any Riyadh hotel, residence or business address.", perspectives: [] },
        { question: "Can I request rest stops?", shortAnswer: "Yes", detailedAnswer: "Yes, for a 9-10 hour journey you can request planned rest stops for meals, prayer, fuel or refreshments — let us know when booking, especially if travelling with children or elderly passengers.", perspectives: [] },
        { question: "How much luggage can I bring?", shortAnswer: "Depends on the vehicle", detailedAnswer: "A sedan suits smaller loads, while the Staria, GMC Yukon XL and Sprinter offer more space for families and groups. See the vehicle options below for exact capacity.", perspectives: [] },
        { question: "Can I travel overnight?", shortAnswer: "Yes", detailedAnswer: "Yes, for overnight journeys some passengers prefer an evening departure with a morning arrival. Let us know your preferred departure time when booking.", perspectives: [] },
        { question: "Can I book a GMC Yukon?", shortAnswer: "Yes", detailedAnswer: "Yes, the GMC Yukon XL (2000 SAR, 7 passengers) is available for this route, subject to availability.", perspectives: [] },
        { question: "How far is Riyadh from Jeddah?", shortAnswer: "Approx. 950 km", detailedAnswer: "The road distance is approximately 950 km, via Highway 40.", perspectives: [] },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdRoute
                from="Riyadh"
                to="Jeddah"
                description="Private intercity transfer from Riyadh to Jeddah. Approximately 950 km via Highway 40. Door-to-door, private vehicle service."
                distance="950 km"
                duration="PT9H30M"
            />

            <Hero
                images={['/jeddah-corniche-sunset.webp', '/hero-slide-3.webp']}
                imageAlt="Riyadh to Jeddah private taxi — Jeddah Corniche arrival"
                h1Text="Riyadh to Jeddah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug"> Riyadh → Jeddah
                    </span>
                }
                subtitle="Private Door-to-Door Transfers from Riyadh to Jeddah"
                location="Sedan, SUV and VIP van options with professional chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20a%20quote%20for%20Riyadh%20to%20Jeddah%20taxi" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <WhatsAppIcon className="w-5 h-5 mr-2 fill-current" /> Get Quote on WhatsApp
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link href="/booking/?route=riyadh-jeddah">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Book Online
                        </Button>
                    </Link>
                </div>
            </Hero>

            {/* Stats Ribbon */}
            <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {routeDetails.map((detail, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
                                <detail.icon className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{detail.label}</span>
                            <span className="text-lg font-black text-gray-900">{detail.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display">Private Riyadh to Jeddah Car Service</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Travel from Riyadh to Jeddah by private car with door-to-door pickup and drop-off. The journey is approximately 950 km and usually takes around 9-10 hours, depending on traffic, stops and road conditions.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        A private road transfer lets you travel directly from your Riyadh address to your Jeddah destination without airport check-in or airline baggage restrictions. Selected 2026 GMC Yukon and Mercedes S-Class models are available for this route, subject to availability.
                    </p>
                </div>

                {/* Pricing Table */}
                <PricingTable
                    title="Riyadh to Jeddah Taxi Fare"
                    subtitle="2026 Rates"
                    rows={pricingRows}
                    disclaimer="All listed fares are per vehicle, not per passenger. Final pricing depends on vehicle, pickup/drop-off location, travel date and whether you require a return journey — confirmed before booking."
                />

                {/* By road info */}
                <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 my-16">
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Riyadh to Jeddah by Road</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        Driving from Riyadh to Jeddah is approximately 950 km and normally takes around 9-10 hours via Highway 40. A private chauffeur transfer lets you travel door-to-door without needing to drive the entire route yourself.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Journey time can vary with traffic, rest stops and road conditions. For overnight journeys, some passengers prefer an evening departure with a morning arrival — let us know your preferred timing when booking.
                    </p>
                </div>

                {/* Vehicles */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Why Choose a Private Transfer?</h3>
                        <div className="space-y-3">
                            {whyBook.map((reason) => (
                                <div key={reason} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Vehicle Options</h3>
                        <div className="space-y-4">
                            {[
                                { name: 'Toyota Camry', capacity: '4 Pax', luggage: '2 Bags', desc: 'Sedan' },
                                { name: 'Hyundai Staria VIP', capacity: '7 Pax', luggage: '4 Bags', desc: 'Spacious cabin' },
                                { name: 'GMC Yukon XL', capacity: '7 Pax', luggage: '5 Bags', desc: 'Premium SUV, climate control' },
                                { name: 'Mercedes S-Class', capacity: '3 Pax', luggage: '2 Bags', desc: 'VIP sedan' },
                            ].map((car, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <div className="flex gap-4 items-center">
                                        <div className="bg-emerald-600 text-white p-3 rounded-xl">
                                            <Car className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900 text-sm">{car.name}</h4>
                                            <p className="text-xs text-gray-400 font-bold">{car.desc} — {car.capacity} | {car.luggage}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm mt-4">Need a larger group vehicle? Mercedes Sprinter (14 Pax) available on request.</p>
                        <div className="text-center mt-4">
                            <Link href="/fleet/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1 text-sm">
                                View Full Fleet <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Pickup / drop-off */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-white rounded-3xl border border-gray-100 p-8">
                        <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Pickup Locations in Riyadh</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We can collect passengers from residential addresses, hotels, business locations and King Khalid International Airport (RUH), subject to the requested route and booking details.
                        </p>
                    </div>
                    <div className="bg-white rounded-3xl border border-gray-100 p-8">
                        <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Drop-Off Locations in Jeddah</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Drop-off is available at hotels and residences across Jeddah, including the <Link href="/locations/jeddah/corniche/" className="text-primary font-semibold hover:underline">Corniche</Link>, <Link href="/locations/jeddah/al-hamra/" className="text-primary font-semibold hover:underline">Al Hamra</Link> and Obhur areas.
                        </p>
                    </div>
                </div>

                {/* Rest stops & luggage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2"><Coffee className="w-5 h-5 text-emerald-400" /> Rest Stops on the Riyadh–Jeddah Route</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Long-distance passengers can request rest stops for meals, prayer, fuel or refreshments. If you're travelling with children or elderly passengers, let us know when booking so the driver can plan accordingly.
                        </p>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-8 text-white">
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2"><Luggage className="w-5 h-5 text-emerald-400" /> Luggage for Riyadh to Jeddah Transfers</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Luggage capacity depends on the vehicle. A sedan is suitable for smaller loads, while the GMC Yukon XL, Staria and Sprinter provide additional space for families and groups.
                        </p>
                    </div>
                </div>

                {/* Planning section */}
                <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 mb-16">
                    <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2"><Moon className="w-6 h-6 text-primary" /> Planning Your Riyadh to Jeddah Journey</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Recommended departure time</h4>
                            <p className="text-gray-600 text-sm">Early morning or evening departures can help avoid the hottest part of the day.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Rest stops</h4>
                            <p className="text-gray-600 text-sm">For a 9-10 hour journey, passengers can request planned rest stops.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Luggage</h4>
                            <p className="text-gray-600 text-sm">Choose your vehicle based on passenger and luggage count.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2">Long-distance comfort</h4>
                            <p className="text-gray-600 text-sm">For families and groups, consider the GMC Yukon XL, Staria VIP or Sprinter.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-20 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Riyadh to Jeddah Taxi FAQs</h2>
                <MicroSemanticFAQ
                    contextName="Riyadh to Jeddah"
                    faqs={faqs}
                />
            </div>

            <RelatedLocations
                currentCity="Riyadh"
                customLinks={[
                    { name: 'Riyadh to Makkah', url: '/routes/riyadh-makkah/', description: 'Direct pilgrimage transfer to the Holy City.' },
                    { name: 'Jeddah to Riyadh', url: '/routes/jeddah-riyadh/', description: 'Return transfer back to the Saudi Capital.' },
                    { name: 'Riyadh to Dammam', url: '/routes/riyadh-dammam/', description: 'Transfers to the Eastern Province business hub.' }
                ]}
                labels={{
                    title: 'Popular Routes from Riyadh',
                    subtitle: 'Private intercity transfers across Saudi Arabia',
                    viewRoutes: 'View Route',
                }}
            />
            <RelatedRoutes originSlug="riyadh" currentSlug="riyadh-jeddah" />

            <div className="bg-emerald-950 py-24 text-center px-4 relative overflow-hidden rounded-[4rem] mx-4 mb-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to Book Your <br className="hidden sm:block" /> Riyadh to Jeddah Taxi?</h2>
                    <p className="text-emerald-100/60 text-lg mb-10 max-w-2xl mx-auto">Share your pickup location, travel date, passengers and preferred vehicle. We'll confirm availability and price.</p>
                    <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20a%20quote%20for%20Riyadh%20to%20Jeddah%20taxi" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-white hover:bg-emerald-50 text-emerald-900 font-black px-16 py-10 text-2xl rounded-3xl h-auto shadow-2xl transition-transform hover:scale-110"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> Get Quote on WhatsApp</Button>
                    </a>
                </div>
            </div>
        </div>
    );
}
