import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, ArrowRight, Navigation, Info, Luggage, Repeat } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import JsonLdRoute from '@/components/JsonLdRoute';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import PricingTable from '@/components/PricingTable';
import TrainComparison from '@/components/TrainComparison';
import BookingProcess from '@/components/BookingProcess';
import { makkahHotels } from '@/data/makkahHotels';

export const metadata: Metadata = {
    title: 'Jeddah to Makkah Taxi 2026 | Private Transfers | Fixed Rates',
    description: 'Book a private Jeddah to Makkah taxi. Direct door-to-door transfer with professional chauffeurs. Fixed rates from 300 SAR per vehicle, not per person.',
    keywords: ['Jeddah to Makkah Taxi 2026', 'Jeddah to Makkah taxi price', 'Jeddah to Makkah private car'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/jeddah-makkah/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/jeddah-makkah/',
            'ar': 'https://taxiserviceksa.com/ar/routes/jeddah-makkah/',
            'x-default': 'https://taxiserviceksa.com/routes/jeddah-makkah/',
        },
    },
};

export default function JeddahMakkahRoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '85-95 km', icon: Navigation },
        { label: 'Travel Time', value: '60-80 min', icon: Clock },
        { label: '2026 Base Fare', value: 'From 300 SAR', icon: DollarSign },
        { label: 'Service', value: 'Door-to-Door', icon: CheckCircle2 },
    ];

    const pricingRows = [
        { vehicle: 'Standard Sedan', description: 'Toyota Camry or similar — up to 3 passengers.', price: '300', capacity: '3 Pax', isPopular: false },
        { vehicle: 'GMC Yukon XL', description: 'Full-size SUV for families and groups.', price: '600', capacity: '7 Pax', isPopular: true },
        { vehicle: 'Hyundai Staria VIP', description: 'Van with captain seats and dual AC.', price: '350', capacity: '7 Pax', isPopular: false },
        { vehicle: 'Toyota Hiace', description: 'Larger van for bigger groups and luggage.', price: '500', capacity: '11 Pax', isPopular: false },
    ];

    const recommendedVehicles = [
        { name: 'Toyota Camry', best: 'Best for 1-3 passengers', price: '300 SAR', icon: Car },
        { name: 'Hyundai Staria VIP', best: 'Best for families', price: '350 SAR', icon: Users },
        { name: 'Toyota Hiace', best: 'Best for large groups & luggage', price: '500 SAR', icon: Luggage },
        { name: 'GMC Yukon XL', best: 'Best for premium groups', price: '600 SAR', icon: Car },
    ];

    const whyPrivateTaxi = [
        'Direct pickup — no station transfer needed',
        'Private vehicle for you and your group only',
        'Fixed fare agreed before you travel',
        'Luggage stays with you the whole trip',
        'Drop-off at your actual hotel entrance',
        'Flexible departure time, not a fixed timetable',
    ];

    const faqs = [
        { question: "How much is a taxi from Jeddah to Makkah?", shortAnswer: "From 300 SAR", detailedAnswer: "Rates start from 300 SAR for a standard sedan (Toyota Camry). A Hyundai Staria VIP is 350 SAR, a Toyota Hiace is 500 SAR, and a GMC Yukon XL is 600 SAR. All prices are per vehicle, not per person.", perspectives: [] },
        { question: "How long does Jeddah to Makkah take?", shortAnswer: "Typically 60-80 minutes", detailedAnswer: "In normal traffic the drive takes around 60-80 minutes. Allow extra time during Friday traffic, Ramadan, Hajj and other peak Umrah periods.", perspectives: [] },
        { question: "How far is Jeddah from Makkah?", shortAnswer: "Approx. 85-95 km", detailedAnswer: "The distance is approximately 85-95 km by road, depending on your exact pickup point in Jeddah and your hotel's location in Makkah.", perspectives: [] },
        { question: "Is the fare per passenger or per vehicle?", shortAnswer: "Per vehicle", detailedAnswer: "This is a private vehicle service — the quoted price is for the whole vehicle, not per seat. A family of 6 in a Staria VIP still pays 350 SAR total, not per person.", perspectives: [] },
        { question: "Can I book from Jeddah Airport?", shortAnswer: "Yes", detailedAnswer: "Yes, pickup from King Abdulaziz International Airport (JED) is available. Your driver will send you the exact meeting point, vehicle details and contact information before your arrival.", perspectives: [] },
        { question: "Can I book from a Jeddah hotel?", shortAnswer: "Yes", detailedAnswer: "Yes, we can pick you up from any hotel, residence or business address in Jeddah.", perspectives: [] },
        { question: "Can you drop me at a specific Makkah hotel?", shortAnswer: "Yes", detailedAnswer: "Yes, we offer direct drop-off at your Makkah hotel entrance, including hotels near the Haram and Clock Tower area. See our hotel transfer directory below.", perspectives: [] },
        { question: "Which vehicle is best for a family?", shortAnswer: "Hyundai Staria VIP or GMC Yukon XL", detailedAnswer: "For families of 5-7 with luggage, a Hyundai Staria VIP (350 SAR) or GMC Yukon XL (600 SAR) is recommended.", perspectives: [] },
        { question: "Is the Haramain train cheaper than a taxi?", shortAnswer: "Depends on group size", detailedAnswer: "For a solo traveller, the train can be cheaper. For families or groups, a fixed-price private taxi often works out more practical once you add up multiple train tickets plus onward transport from the station.", perspectives: [] },
        { question: "Is the taxi available 24/7?", shortAnswer: "Yes", detailedAnswer: "Yes, bookings are available 24/7, including for late-night or early-morning flight arrivals.", perspectives: [] },
        { question: "Can I book a return trip?", shortAnswer: "Yes", detailedAnswer: "Yes, you can book a one-way transfer or a return trip — either the same day or a different date. Let us know your return date and time when booking and we'll confirm return pricing with you.", perspectives: [] },
        { question: "Do you provide airport meet and greet?", shortAnswer: "Yes", detailedAnswer: "Yes, your driver will meet you after arrivals with your name and be in WhatsApp contact before you land.", perspectives: [] },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdRoute
                from="Jeddah"
                to="Makkah"
                description="Private taxi from Jeddah to Makkah. Fixed rates per vehicle, door-to-door service, professional chauffeurs."
                distance="90 km"
                duration="PT70M"
            />

            <Hero
                images={['/makkah-kaaba-night.webp', '/hero-slide-3.webp']}
                h1Text="Jeddah to Makkah Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        2026 Transfers
                    </span>
                }
                subtitle="Private Door-to-Door Transfers for Pilgrims & Families"
                location="Jeddah Airport → Makkah | Fixed Rates | Verified Chauffeurs"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route=jeddah-makkah">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Jeddah to Makkah Taxi
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="mailto:taxiserviceksa9988@gmail.com">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            Get Custom Quote
                        </Button>
                    </a>
                </div>
                <p className="text-white/60 text-xs mt-6 font-bold uppercase tracking-widest">Prices reviewed: August 2026 • Rates may vary by travel date</p>
            </Hero>

            {/* Route Stats */}
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
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-display leading-tight">Jeddah to Makkah Private Car Service</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Our private Jeddah to Makkah taxi service provides direct door-to-door transportation from any location in Jeddah to your hotel in Makkah — no shared rides, no roadside negotiation.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Fixed rates are agreed before you travel, so the price you see is the price you pay. Need pickup from <Link href="/jeddah-airport-transfer/" className="text-primary font-semibold hover:underline">Jeddah Airport</Link> specifically? See our dedicated airport transfer page for terminal pickup details.
                    </p>
                </div>

                {/* Route info */}
                <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 mb-16">
                    <h3 className="text-2xl font-black text-gray-900 mb-4">Jeddah to Makkah Route: Distance & Travel Time</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                        Jeddah and Makkah are approximately 85-95 km apart by road, depending on your exact pickup point and destination hotel. In normal traffic, the drive typically takes around 60-80 minutes. Travel time can increase during Friday traffic, Ramadan, Hajj and other busy Umrah periods — allow extra time during those dates.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Drivers may select the most suitable available route based on current traffic and road conditions.
                    </p>
                </div>

                {/* Why private taxi */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Why Book a Private Taxi?</h3>
                        <div className="space-y-3">
                            {whyPrivateTaxi.map((reason) => (
                                <div key={reason} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-black text-gray-900 mb-6">Recommended Vehicles</h3>
                        <div className="space-y-4">
                            {recommendedVehicles.map((car) => (
                                <div key={car.name} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100">
                                    <div className="flex gap-4 items-center">
                                        <div className="bg-black text-white p-3 rounded-xl">
                                            <car.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-gray-900 text-sm">{car.name}</h4>
                                            <p className="text-xs text-gray-400 font-bold">{car.best}</p>
                                        </div>
                                    </div>
                                    <span className="font-black text-primary text-sm">{car.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/fleet/" className="text-primary font-semibold hover:underline inline-flex items-center gap-1 text-sm">
                                View Full Fleet <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Pricing Table */}
                <PricingTable
                    title="2026 Price List: Jeddah to Makkah"
                    subtitle="2026 Fixed Rates"
                    rows={pricingRows}
                    disclaimer="All listed fares are per vehicle, not per passenger. Rates include tolls, fuel, and chauffeur fees. Seasonal surcharges may apply during Ramadan and Hajj."
                />

                {/* Pickup / Drop-off locations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                    <div className="bg-white rounded-3xl border border-gray-100 p-8">
                        <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Jeddah Pickup Locations</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>• King Abdulaziz International Airport (JED)</li>
                            <li>• Any Jeddah hotel</li>
                            <li>• Jeddah city addresses and residences</li>
                            <li>• Business districts and offices</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-3xl border border-gray-100 p-8">
                        <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Makkah Drop-Off Locations</h3>
                        <ul className="space-y-2 text-gray-600 text-sm">
                            <li>• Hotels near the Haram and Clock Tower area</li>
                            <li>• Jabal Omar hotels</li>
                            <li>• Aziziyah district</li>
                            <li>• Any other Makkah hotel or address</li>
                        </ul>
                    </div>
                </div>

                {/* Return trip note */}
                <div className="bg-white rounded-3xl border border-gray-100 p-8 mb-16 flex items-start gap-4">
                    <Repeat className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                        <h3 className="text-lg font-black text-gray-900 mb-2">Jeddah to Makkah Round-Trip Taxi</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Both one-way and return transfers can be booked. A return can be arranged the same day (with waiting time) or on a separate date. Let us know your plans when booking and we'll confirm return pricing based on your dates.
                        </p>
                    </div>
                </div>

                {/* Train Comparison */}
                <TrainComparison taxiPrice="300" trainPrice="70-160" />

                {/* Booking Process */}
                <BookingProcess />

                {/* Airport Pickup Instructions */}
                <div className="bg-gray-900 rounded-[40px] p-8 md:p-16 my-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-500 font-black uppercase tracking-widest text-xs mb-4 inline-block">Airport Guide</span>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Meeting Your Driver at Jeddah Airport (JED)</h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Avoid accepting unsolicited transport offers inside the terminal. For your pre-booked transfer, your driver will send you the meeting point, vehicle details and contact information via WhatsApp before your arrival.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-emerald-400 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                                    <div>
                                        <h4 className="text-white font-bold">Confirm before you leave arrivals</h4>
                                        <p className="text-gray-500 text-sm">Match the driver's name, vehicle and meeting point against what was sent to you.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-2 rounded-lg text-emerald-400 mt-1"><CheckCircle2 className="w-4 h-4" /></div>
                                    <div>
                                        <h4 className="text-white font-bold">Exact meeting point sent by WhatsApp</h4>
                                        <p className="text-gray-500 text-sm">Terminal layouts and pickup zones can change — your driver sends current instructions ahead of arrival, not a fixed generic instruction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Info className="w-6 h-6 text-emerald-400" />
                                <h3 className="text-white font-black uppercase tracking-tighter text-xl">Safety Tip</h3>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Avoid accepting unsolicited transport offers inside the terminal. For a pre-booked transfer, confirm the driver's name, vehicle details and meeting point before leaving the arrivals area.
                            </p>
                            <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                                <p className="text-emerald-400 text-xs font-bold leading-relaxed">
                                    Our drivers send their car details and photo via WhatsApp ahead of your arrival.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto py-20 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Jeddah to Makkah Taxi FAQs</h2>
                <MicroSemanticFAQ
                    contextName="Jeddah to Makkah 2026"
                    faqs={faqs}
                />
            </div>

            {/* Hotel-Specific Transfer Directory */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="bg-emerald-100 text-emerald-800 font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">Hotel Directory</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Popular Hotel Transfers in Makkah</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Book a direct transfer to your specific hotel with the exact drop-off point already worked out by our drivers.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/routes/jeddah-to-fairmont-makkah-taxi/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl p-4 transition-colors">
                            <span className="font-bold text-gray-900">Fairmont Clock Tower</span>
                        </Link>
                        <Link href="/routes/jeddah-to-pullman-makkah-taxi/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl p-4 transition-colors">
                            <span className="font-bold text-gray-900">Pullman ZamZam Makkah</span>
                        </Link>
                        <Link href="/routes/jeddah-to-swissotel-makkah-taxi/" className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl p-4 transition-colors">
                            <span className="font-bold text-gray-900">Swissotel Makkah</span>
                        </Link>
                        {makkahHotels.map((hotel) => (
                            <Link
                                key={hotel.slug}
                                href={`/routes/jeddah-to-${hotel.slug}/`}
                                className="bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-500 rounded-xl p-4 transition-colors"
                            >
                                <span className="font-bold text-gray-900">{hotel.shortName}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <RelatedLocations
                currentCity="Jeddah"
                customLinks={[
                    { name: 'Makkah to Madinah', url: '/routes/makkah-madinah/', description: 'Continue your pilgrimage from Makkah to Madinah.' },
                    { name: 'Jeddah to Taif', url: '/routes/jeddah-taif/', description: 'Escape the heat to the mountain city of Taif.' }
                ]}
                labels={{
                    title: 'Continue Your Journey',
                    subtitle: 'Onward transfers for Umrah and Hajj travellers',
                    viewRoutes: 'View Route',
                }}
            />
            <RelatedRoutes originSlug="jeddah" currentSlug="jeddah-makkah" />

            <div className="bg-black py-24 text-center px-4 relative overflow-hidden rounded-3xl mx-4 mb-12">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-block bg-rose-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
                        100% Private Transfers Only • No Shared Taxis
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Get Your Jeddah to Makkah Quote</h2>
                    <p className="text-gray-400 text-lg mb-10">Fixed price, direct to your hotel.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/booking/?route=jeddah-makkah">
                            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-12 py-8 text-xl rounded-2xl h-auto transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                                Reserve Private Car
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-black px-12 py-8 text-xl rounded-2xl h-auto">
                                Email Inquiry
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
