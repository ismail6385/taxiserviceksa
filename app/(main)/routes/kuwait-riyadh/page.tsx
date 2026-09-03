import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight, CreditCard, Star, Users, Briefcase, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteFleetSection from '@/components/RouteFleetSection';
import TrustSignals from '@/components/TrustSignals';
import TravelRequirements from '@/components/TravelRequirements';
import PricingTable from '@/components/PricingTable';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import ReviewForm from '@/components/seo/ReviewForm';

export const metadata: Metadata = {
    title: 'Kuwait to Riyadh Taxi & Private Car Transfer | Taxi Service KSA',
    description: 'Book a private car transfer from Kuwait City to Riyadh from 170 KD. Door-to-door SUV, bilingual driver, Nuwaiseeb border crossing assistance. Fixed per-vehicle rates, 24/7.',
    keywords: ['Kuwait to Riyadh taxi', 'private car transfer Kuwait City Riyadh', 'Kuwait Riyadh transfer', 'cross border taxi Saudi Arabia', 'Nuwaiseeb border crossing taxi'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/kuwait-riyadh/',
    },
    openGraph: {
        title: 'Kuwait to Riyadh Taxi & Private Car Transfer | Taxi Service KSA',
        description: 'Book a private car transfer from Kuwait City to Riyadh from 170 KD. Door-to-door SUV, bilingual driver, Nuwaiseeb border crossing assistance. Fixed per-vehicle rates, 24/7.',
        url: 'https://taxiserviceksa.com/routes/kuwait-riyadh/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-1.webp', width: 1200, height: 630, alt: 'Private car transfer from Kuwait City to Riyadh' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kuwait to Riyadh Taxi & Private Car Transfer | Taxi Service KSA',
        description: 'Book a private car transfer from Kuwait City to Riyadh from 170 KD. Door-to-door SUV, bilingual driver, Nuwaiseeb border crossing assistance. Fixed per-vehicle rates, 24/7.',
        images: ['https://taxiserviceksa.com/hero-slide-1.webp'],
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

    const travelerTypes = [
        {
            icon: <Users className="w-5 h-5 text-emerald-600" />,
            heading: "Families",
            body: "Our Fortuner and Tahoe SUVs have room for car seats, strollers, and children's bags. Drivers make rest stops on request. Book at least 24 hours ahead to help guarantee a family-sized vehicle."
        },
        {
            icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
            heading: "Business Travelers",
            body: "A private, quiet vehicle booked specifically for your schedule. Vehicle and driver details can be shared with building security in advance if your destination requires it, such as KAFD."
        },
        {
            icon: <Globe className="w-5 h-5 text-emerald-600" />,
            heading: "Expats Relocating to Riyadh",
            body: "Moving with multiple suitcases or boxes? Our SUVs accommodate heavier loads than a sedan. Share your Iqama and visa details in advance and our team will flag anything that needs attention before departure."
        },
        {
            icon: <Star className="w-5 h-5 text-emerald-600" />,
            heading: "Umrah Travelers",
            body: "Many travelers use Kuwait to Riyadh as the first leg of an Umrah journey, continuing onward to Makkah or Madinah. We can help coordinate an onward transfer from Riyadh, and drivers accommodate prayer and rest stops."
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Kuwait to Riyadh"
                description="Private car transfer from Kuwait City to Riyadh. Door-to-door transfers with SUVs and bilingual drivers."
                services={[
                    { name: 'Private Car Transfer Kuwait to Riyadh', description: 'Private transfer with fixed per-vehicle rates starting from 170 KD.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family SUV Service', description: 'Spacious vehicles for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Pickups and drop-offs at major locations in Riyadh.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Kuwait to Riyadh Taxi & Private Car Transfer"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Approximately 7-8 hours, depending on traffic and border processing — Door-to-Door, Private Vehicle"
                location="~650 km via Nuwaiseeb Border"
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
                        <a href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Riyadh%20taxi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full">
                                <WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Quotation
                            </Button>
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

            {/* Your trip at a glance */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your trip at a glance</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { label: "Route", value: "Kuwait City → Riyadh" },
                            { label: "Duration", value: "~7-8 hours" },
                            { label: "Distance", value: "~650 km" },
                            { label: "Border", value: "Nuwaiseeb / Khafji" },
                            { label: "Transfer type", value: "100% Private" },
                            { label: "Availability", value: "24/7, any day" },
                        ].map(({ label, value }) => (
                            <div key={label} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                                <p className="text-sm font-bold text-gray-900 leading-snug">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">International Border</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Private Transfer from Kuwait to Riyadh
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Traveling between Kuwait City and Riyadh by road is a popular option for families, business travelers, and GCC residents. The distance is approximately 650 km, and the journey typically takes 7-8 hours via the Nuwaiseeb (Kuwait side) / Khafji (Saudi side) border crossing, depending on traffic and border processing time.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our driver assists with the vehicle-side documentation and guides you through the crossing process. Passengers remain responsible for their own passport, visa and immigration requirements.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Globe className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Border Assistance</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Clock className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">~7-8 Hour Journey</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <Building2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Door-to-Door</span>
                                </div>
                                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                    <span className="font-semibold text-gray-800">Private Vehicle</span>
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
                                        <p className="text-sm text-gray-500">Send copies of passports/Iqamas so our team can prepare the vehicle-side border documentation in advance.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shrink-0 shadow-sm text-white font-bold"><CheckCircle2 className="w-5 h-5" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Travel</h4>
                                        <p className="text-sm text-gray-500">Your vehicle arrives at your doorstep in Kuwait and takes you directly to your Riyadh destination.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How the border crossing works */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Border Process</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">How the Kuwait-Saudi Border Crossing Works</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Kuwait Departure Checkpoint', desc: 'Passenger presents required travel documents at the Nuwaiseeb checkpoint.' },
                            { step: '2', title: 'Vehicle & Document Inspection', desc: 'Driver handles the vehicle-side requirements and insurance paperwork.' },
                            { step: '3', title: 'Saudi Entry Checkpoint', desc: 'Passengers complete immigration procedures at the Khafji checkpoint.' },
                            { step: '4', title: 'Continue to Riyadh', desc: 'Once cleared, the journey continues south toward Riyadh.' },
                        ].map((s) => (
                            <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-sm mb-3">{s.step}</div>
                                <h4 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-6 max-w-2xl mx-auto">
                        Border wait times vary by day, traffic and passenger volume. Weekends and holiday periods can be busier, so allow additional time.
                    </p>
                </div>
            </section>

            {/* What's included */}
            <section className="bg-white py-16 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Transparent Fixed Fare</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">What&apos;s included</h2>
                        <p className="text-gray-500 mt-2">Inclusions are confirmed with you before booking.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Private vehicle", desc: "No shared passengers — the entire car is yours for the journey" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Bilingual driver", desc: "Arabic & English speaking, experienced with the Nuwaiseeb crossing" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Border insurance", desc: "Cross-border vehicle insurance required for Saudi entry, included in the fare" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Fuel & tolls", desc: "Fuel and applicable highway charges for the journey included in the fare" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Door-to-door", desc: "Picked up from your address in Kuwait, dropped at your Riyadh destination" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Border assistance", desc: "Driver assists with vehicle-side documentation at Nuwaiseeb/Khafji" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Rest stops", desc: "Driver stops at petrol stations or rest areas on request" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "WhatsApp support", desc: "Reachable throughout your journey for questions or updates" },
                        ].map(({ icon, title, desc }) => (
                            <div key={title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="shrink-0 mt-0.5">{icon}</div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="bg-gray-50 py-16 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4">
                    <PricingTable
                        title="Kuwait to Riyadh Taxi Prices"
                        subtitle="Starting Fares — Per Vehicle, All-Inclusive"
                        rows={pricingRows}
                        currency="KD"
                        disclaimer="Starting fares — confirm the current price and full inclusions before booking. Approx. 170 KD ≈ 2,050 SAR / $545 USD for reference. Prices include fuel, border crossing vehicle insurance, and applicable tolls."
                    />

                    <div className="mt-8 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">What Can Change Your Fare?</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                            {['Vehicle type', 'Passenger count', 'Pickup area', 'Luggage requirements', 'One-way vs return', 'Additional waiting', 'Special stops', 'Date / season'].map((f) => (
                                <span key={f} className="bg-gray-50 border border-gray-100 text-gray-700 text-xs font-semibold px-3 py-2 rounded-lg text-center">{f}</span>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">The quoted fare will confirm exactly what is included before you book.</p>
                    </div>

                    <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-center gap-4 shadow-sm text-center md:text-left">
                        <CreditCard className="w-8 h-8 text-primary shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-900">Payment</h4>
                            <p className="text-sm text-gray-500">Pay the driver directly on completion of the journey, in KWD or SAR. Other currencies (AED, USD, EUR, GBP) can be arranged — confirm with our team when booking.</p>
                        </div>
                    </div>
                </div>
            </section>

            <TravelRequirements />

            {/* One-way vs return */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">One-Way vs Return</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Both one-way and return transfers are available. If you already know your return date, let us know when booking and we'll quote the return leg alongside your outbound trip.
                    </p>
                </div>
            </section>

            {/* Good to know */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Practical info</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Good to know</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Practical information to help you prepare for the crossing.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Nuwaiseeb border is open 24/7",
                                detail: "The Nuwaiseeb (Kuwait) / Khafji (Saudi) crossing operates around the clock every day of the year. Border wait times vary by day, traffic and passenger volume — weekends and holiday periods can be busier, so allow additional time when planning your departure."
                            },
                            {
                                title: "Have these documents at the window",
                                detail: "When your vehicle reaches the border booth, have your original passport open to the photo page, your Kuwait Iqama (for residents), and your Saudi entry visa or e-visa confirmation ready. There are two separate checkpoints a short distance apart — keep documents accessible for both."
                            },
                            {
                                title: "What to expect at the crossing",
                                detail: "At the Nuwaiseeb crossing, passengers typically wait in a lounge or remain in the vehicle while the driver handles the vehicle inspection lane. You will be called to the passport counter to stamp out of Kuwait and then stamp into Saudi Arabia."
                            },
                            {
                                title: "Rest stops",
                                detail: "Common rest opportunities include major fuel and service areas around Hafr Al-Batin and further south toward Buraydah. Your driver can arrange stops according to your group's needs — let us know your preference when booking."
                            },
                            {
                                title: "Prayer times during the journey",
                                detail: "The journey typically spans two to three prayer times depending on departure time. Drivers stop at mosques or petrol station prayer areas on request — let us know your preference when booking."
                            },
                            {
                                title: "Payment at the border",
                                detail: "The vehicle insurance and crossing-related fees for the vehicle are arranged by our team before departure and included in your quoted fare. You pay the driver directly on completion of the journey."
                            },
                        ].map(({ title, detail }) => (
                            <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicle options */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Vehicle Options</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">For the 7-8 hour journey between Kuwait and Riyadh, our fleet for this route is primarily <strong>Toyota Camry/Sonata sedans, Toyota Fortuner, and GMC Yukon/Chevrolet Tahoe</strong> SUVs.</p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Comfortable seating with ample legroom</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Rear AC vents & climate control</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Spacious trunks for luggage</li>
                            </ul>

                            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                                <h3 className="text-xl font-bold mb-2">Bilingual Chauffeurs</h3>
                                <p className="text-sm text-gray-400">Our drivers speak both Arabic and English and are experienced with the Nuwaiseeb/Khafji crossing.</p>
                            </div>
                        </div>
                        <div className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image src="/hero-slide-1.webp" alt="SUV fleet for Kuwait to Riyadh transfer" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div>
                                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Most Popular</span>
                                    <h4 className="text-xl font-bold text-white">GMC / Chevrolet SUV</h4>
                                    <p className="text-gray-300 text-sm">Suitable for families of 4-7 members.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is this best for */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Who Is This Transfer Best For?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {travelerTypes.map(({ icon, heading, body }) => (
                            <div key={heading} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
                                <div className="shrink-0 w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center">
                                    {icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-2">{heading}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kuwait pickup areas */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Door-to-Door Coverage</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Kuwait Pickup Areas</h2>
                        <p className="text-gray-600 max-w-3xl">We provide door-to-door pickup across Kuwait City and the surrounding areas, including:</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {['Kuwait City', 'Salmiya', 'Jabriya', 'Fahaheel', 'Mangaf', 'Mahboula', 'Salwa', 'Sabah Al Salem'].map((area) => (
                            <span key={area} className="bg-white border border-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-xl text-sm">{area}</span>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-6">Share your exact pickup address via WhatsApp when booking and we'll confirm coverage and timing.</p>
                </div>
            </section>

            {/* Popular drop-off areas in Riyadh */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Riyadh Coverage</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Popular Drop-off Areas in Riyadh</h2>
                        <p className="text-gray-600 max-w-3xl">We drop you directly at your destination anywhere in Riyadh. These are the most frequently requested areas from Kuwait travelers.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                area: "KAFD — King Abdullah Financial District",
                                tag: "Business hub",
                                desc: "Riyadh's corporate district, home to major banks and multinationals. Vehicle and driver details can be shared with security in advance if your building requires it."
                            },
                            {
                                area: "Al Olaya & Al Sulaimaniyah",
                                tag: "Central Riyadh",
                                desc: "The main commercial strip of Riyadh with hotels, restaurants, and shopping malls — the most common drop-off zone for Kuwait travelers staying in central Riyadh."
                            },
                            {
                                area: "King Khalid International Airport (RUH)",
                                tag: "Connecting flights",
                                desc: "If you're using the road leg to catch an onward flight, tell us your check-in time and we'll plan the departure from Kuwait to give you a comfortable buffer."
                            },
                            {
                                area: "Diplomatic Quarter (DQ)",
                                tag: "Embassies & expats",
                                desc: "Home to embassies, international schools, and expat residences. Popular with embassy staff and expats relocating from Kuwait to Riyadh."
                            },
                            {
                                area: "Al Malaz & Al Murabba",
                                tag: "Historic central",
                                desc: "Central Riyadh, close to government ministries and older residential areas, and the Murabba Palace / National Museum area."
                            },
                            {
                                area: "Al Diriyah & Al Bujairi District",
                                tag: "Heritage & tourism",
                                desc: "UNESCO World Heritage Site. If you're staying near Al Diriyah, we can drop directly at the At-Turaif gate or the Al Bujairi Heritage Park entrance."
                            },
                        ].map(({ area, tag, desc }) => (
                            <div key={area} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full inline-block mb-3">{tag}</span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{area}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
                <RelatedRoutes originSlug="kuwait" currentSlug="kuwait-riyadh" />
            </div>

            {/* Reviews */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Kuwait to Riyadh — Traveler Reviews</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Reviews are submitted by travelers and verified before publishing.</p>
                    </div>
                    <div className="mb-12">
                        <ReviewsDisplay location="Riyadh" limit={4} />
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <ReviewForm locationName="Kuwait to Riyadh" />
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does a taxi take from Kuwait to Riyadh?",
                        shortAnswer: "~7-8 hours",
                        detailedAnswer: "The total journey is approximately 7-8 hours. Driving time on the highway is roughly 5-6 hours, plus border processing time at the Nuwaiseeb/Khafji crossing, which varies by day and traffic. Weekend crossings can take longer — an earlier departure gives you more buffer.",
                        perspectives: []
                    },
                    {
                        question: "What vehicle options do you have for this route?",
                        shortAnswer: "Sedan, SUV, or Large SUV",
                        detailedAnswer: "We offer three vehicle tiers: a Camry/Sonata sedan (up to 4 passengers, 170 KD), a Toyota Fortuner mid-size SUV (up to 6 passengers, 200 KD), and a GMC Yukon/Chevrolet Tahoe large SUV (up to 7 passengers, 250 KD). For the 650 km journey we recommend an SUV for comfort and luggage space.",
                        perspectives: []
                    },
                    {
                        question: "Is the border vehicle insurance included in the price?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes. Quoted prices include the cross-border vehicle insurance required to enter Saudi Arabia, plus fuel and applicable highway tolls. Personal travel insurance for passengers is optional and remains the passenger's own responsibility.",
                        perspectives: []
                    },
                    {
                        question: "How do I pay for the trip?",
                        shortAnswer: "Directly to the driver, in KWD or SAR",
                        detailedAnswer: "Payment is made directly to the driver on completion of the journey, typically in KWD or SAR. Other currencies can sometimes be arranged — confirm with our team when booking.",
                        perspectives: []
                    },
                    {
                        question: "Which border crossing do you use for Kuwait to Riyadh?",
                        shortAnswer: "Nuwaiseeb / Khafji border",
                        detailedAnswer: "We use the Nuwaiseeb crossing on the Kuwait side and the Khafji crossing on the Saudi side — the standard land route between the two countries. Our drivers are experienced with this crossing.",
                        perspectives: []
                    },
                    {
                        question: "Can expats travel this route?",
                        shortAnswer: "Yes, with valid documents",
                        detailedAnswer: "Expats of any nationality can travel from Kuwait to Saudi Arabia by road provided they have a valid passport, a valid Kuwait Iqama, and the Saudi entry permission appropriate for their nationality and status. Entry requirements vary — check current Saudi entry requirements before departure.",
                        perspectives: []
                    },
                    {
                        question: "What happens if there is a border delay?",
                        shortAnswer: "The driver waits with you at no extra charge",
                        detailedAnswer: "Border delays due to queues or inspections happen occasionally and are outside anyone's control. Our driver waits with you throughout the process at no extra charge. In the rare event of a border closure, we will coordinate an alternative plan with you.",
                        perspectives: []
                    },
                    {
                        question: "How much luggage can I bring?",
                        shortAnswer: "Around 2 large suitcases per person in an SUV, as a guide",
                        detailedAnswer: "Our SUVs accommodate approximately 2 large suitcases per passenger as a general guide. If you have oversized items or extra bags, let us know when booking so we can confirm it fits or recommend a larger vehicle.",
                        perspectives: []
                    },
                    {
                        question: "Is it cheaper to fly or take a taxi from Kuwait to Riyadh?",
                        shortAnswer: "For groups, the private transfer is often cheaper",
                        detailedAnswer: "A one-way flight ticket from Kuwait to Riyadh typically costs 80-150 KD per person, so a family of 4 could pay 320-600 KD in flights alone, plus airport transfers and checked baggage fees. Our private SUV transfer starts at 250 KD total for up to 7 passengers, door-to-door, with no per-person luggage fees.",
                        perspectives: []
                    },
                    {
                        question: "Can I book a return transfer?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, both one-way and return transfers are available. If you know your return date, tell us when booking and we'll quote the return leg alongside your outbound trip.",
                        perspectives: []
                    }
                ]}
            />

            {/* More routes from Kuwait */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Other Kuwait to Saudi Routes</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">More Routes from Kuwait</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We cover other major Saudi destinations from Kuwait. Book any route via WhatsApp for a custom quote.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                from: "Kuwait City",
                                to: "Jeddah",
                                time: "~10-12 hrs",
                                distance: "~1,150 km",
                                note: "Via Nuwaiseeb border → Hafr Al-Batin → Riyadh bypass → Taif → Jeddah. Popular for Umrah travelers flying out of Jeddah or visiting the Red Sea coast.",
                                href: "https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Jeddah%20transfer"
                            },
                            {
                                from: "Kuwait City",
                                to: "Dammam",
                                time: "~4-5 hrs",
                                distance: "~430 km",
                                note: "The shortest Kuwait-Saudi road route. Via Nuwaiseeb border into the Eastern Province.",
                                href: "https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Dammam%20transfer"
                            },
                            {
                                from: "Kuwait City",
                                to: "Makkah",
                                time: "~12-14 hrs",
                                distance: "~1,350 km",
                                note: "Direct Umrah transfer from Kuwait. Drivers accommodate prayer stops. We also coordinate Makkah → Madinah onward transfers.",
                                href: "https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Makkah%20transfer"
                            },
                            {
                                from: "Kuwait City",
                                to: "Madinah",
                                time: "~13-15 hrs",
                                distance: "~1,450 km",
                                note: "Door-to-door transfer for Ziyarat and Umrah travelers. Available as a round-trip or one-way booking.",
                                href: "https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Madinah%20transfer"
                            },
                            {
                                from: "Kuwait City",
                                to: "Al Ahsa (Hofuf)",
                                time: "~3-4 hrs",
                                distance: "~340 km",
                                note: "A UNESCO-listed oasis city — our shortest regular route from Kuwait, ideal for a quick trip.",
                                href: "https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Al%20Ahsa%20transfer"
                            },
                        ].map(({ from, to, time, distance, note, href }) => (
                            <div key={to} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span className="font-black text-gray-900 text-sm">{from} → {to}</span>
                                </div>
                                <div className="flex gap-4 mb-3">
                                    <span className="text-[11px] bg-white border border-gray-200 text-gray-600 font-bold px-2 py-1 rounded-lg">{time}</span>
                                    <span className="text-[11px] bg-white border border-gray-200 text-gray-600 font-bold px-2 py-1 rounded-lg">{distance}</span>
                                </div>
                                <p className="text-gray-600 text-xs leading-relaxed mb-4 flex-1">{note}</p>
                                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors">
                                    <WhatsAppIcon className="w-4 h-4 fill-current" /> Get Quote
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm">Ready to travel?</span>
                    <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">
                        Book your Kuwait to Riyadh transfer today
                    </h2>
                    <p className="text-gray-400 text-lg mb-4 leading-relaxed">
                        Private vehicle from 170 KD · Door-to-door · Border assistance included · 24/7
                    </p>
                    <p className="text-gray-500 text-sm mb-10">
                        WhatsApp us your travel date, Kuwait pickup address, and Riyadh destination — we confirm within minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/966590209905?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Riyadh%20private%20car%20transfer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-xl transition-all hover:scale-105"
                        >
                            <WhatsAppIcon className="w-6 h-6 fill-current" />
                            Book on WhatsApp
                        </a>
                        <Link
                            href="/booking?pickup=Kuwait&dropoff=Riyadh"
                            className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all"
                        >
                            Online Booking
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                    <p className="text-gray-600 text-xs mt-8">Licensed Drivers · Fixed Rates · Transparent Pricing</p>
                </div>
            </section>
        </div>
    );
}
