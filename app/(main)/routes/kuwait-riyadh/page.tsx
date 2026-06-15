import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight, CreditCard, Star, Users, Briefcase, Baby, HeartPulse, UserCheck, Plane, Moon, GraduationCap, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import TrustSignals from '@/components/TrustSignals';
import TravelRequirements from '@/components/TravelRequirements';
import PricingTable from '@/components/PricingTable';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceComparison from '@/components/ServiceComparison';

export const metadata: Metadata = {
    title: 'Private Car Transfer from Kuwait City to Riyadh | Taxi Service KSA',
    description: 'Book a private car transfer from Kuwait City to Riyadh from 170 KD. Door-to-door VIP SUV, bilingual driver, Nuwaiseeb border assistance included. Fixed rates, 24/7.',
    keywords: ['private car transfer Kuwait City Riyadh', 'Kuwait to Riyadh taxi', 'Kuwait Riyadh transfer', 'cross border taxi Saudi Arabia', 'VIP transport Kuwait Riyadh'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/kuwait-riyadh/',
    },
    openGraph: {
        title: 'Private Car Transfer from Kuwait City to Riyadh | Taxi Service KSA',
        description: 'Book a private car transfer from Kuwait City to Riyadh from 170 KD. Door-to-door VIP SUV, bilingual driver, Nuwaiseeb border assistance included. Fixed rates, 24/7.',
        url: 'https://taxiserviceksa.com/routes/kuwait-riyadh/',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/hero-slide-1.webp', width: 1200, height: 630, alt: 'Private car transfer from Kuwait City to Riyadh — VIP SUV service' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Private Car Transfer from Kuwait City to Riyadh | Taxi Service KSA',
        description: 'Book a private car transfer from Kuwait City to Riyadh from 170 KD. Door-to-door VIP SUV, bilingual driver, Nuwaiseeb border assistance included. Fixed rates, 24/7.',
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
            heading: "For families with children",
            body: "Our GMC Tahoe and Fortuner SUVs have ample space for car seats, strollers, and children's bags. Drivers make rest stops on request and are experienced traveling with young families. Book at least 24 hours ahead to guarantee a child-friendly vehicle."
        },
        {
            icon: <Briefcase className="w-5 h-5 text-emerald-600" />,
            heading: "For business executives",
            body: "Private, quiet, and on schedule — our executive transfers are used by corporate clients who need to arrive in Riyadh ready to work. The driver handles everything so you can take calls, review documents, or rest. Pre-registered driver IDs allow access to gated business districts including KAFD."
        },
        {
            icon: <Globe className="w-5 h-5 text-emerald-600" />,
            heading: "For expats relocating to Riyadh",
            body: "Relocating from Kuwait with multiple suitcases, boxes, or excess luggage? Our large SUVs accommodate heavy loads. We verify your Iqama and visa details before departure and guide you through the Nuwaiseeb crossing process step by step — essential for first-time cross-border movers."
        },
        {
            icon: <Star className="w-5 h-5 text-emerald-600" />,
            heading: "For Umrah pilgrims",
            body: "Many pilgrims travel Kuwait to Riyadh as the first leg of an Umrah journey, continuing onward to Makkah or Madinah. We coordinate onward transfers from Riyadh and offer special rates for multi-leg pilgrim trips. Our drivers understand Ihram restrictions and will accommodate rest and prayer stops."
        },
        {
            icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
            heading: "For solo female travelers",
            body: "We assign professional, vetted male drivers with full ID verification and operate a live-tracking policy. Your driver's details (name, photo, plate number) are shared in advance via WhatsApp. Our solo female passengers consistently rate the service 5-star for safety and comfort."
        },
        {
            icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
            heading: "For seniors",
            body: "Our drivers assist with luggage loading, help passengers in and out of vehicles, and drive at a comfortable pace with longer rest stops on request. The spacious SUV seating is significantly more comfortable than economy airline seating for elderly passengers with back or mobility issues."
        },
        {
            icon: <HeartPulse className="w-5 h-5 text-emerald-600" />,
            heading: "For medical tourists",
            body: "Patients traveling from Kuwait to Riyadh for medical appointments at hospitals like King Faisal Specialist or Saudi German Hospital benefit from our door-to-hospital service. We accommodate wheelchairs (folded) and medical equipment. Flexible scheduling available for post-procedure travel."
        },
        {
            icon: <Baby className="w-5 h-5 text-emerald-600" />,
            heading: "For pregnant travelers",
            body: "We recommend booking a Fortuner or Tahoe SUV for maximum comfort and seat recline. Drivers make frequent stops on request and maintain a smooth, unhurried pace. Please inform us of your due date when booking so we can advise on suitability and plan rest breaks accordingly."
        },
        {
            icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
            heading: "For students",
            body: "Students starting or finishing a semester in Riyadh often travel with laptops, luggage, and equipment that airlines charge heavily for. Our per-vehicle fixed rate means a group of 3–4 students splits a very cost-effective fare. We serve all major universities in Riyadh including KFUPM and KSU."
        },
        {
            icon: <Moon className="w-5 h-5 text-emerald-600" />,
            heading: "For late-night arrivals",
            body: "Unlike airlines with fixed schedules, we operate 24/7 including overnight departures. A 2 AM pick-up from Kuwait arriving in Riyadh by 9–10 AM avoids traffic in both cities. Our drivers are experienced with night driving on the Kuwait–Riyadh highway and stay alert throughout."
        },
        {
            icon: <Plane className="w-5 h-5 text-emerald-600" />,
            heading: "For airport dropoff in Riyadh",
            body: "If you need to catch a connecting flight at King Khalid International Airport (RUH) after arriving from Kuwait by road, we coordinate timing precisely. Your driver tracks your required check-in time and adjusts the departure from Kuwait accordingly to ensure a comfortable connection buffer."
        },
        {
            icon: <Users className="w-5 h-5 text-emerald-600" />,
            heading: "For large groups",
            body: "Groups of 8 or more can be accommodated with two vehicles traveling together in convoy. Both drivers coordinate at the border crossing for a seamless group experience. Group rates are available — contact us via WhatsApp with your group size for a custom quote."
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName="Kuwait to Riyadh"
                description="Professional private car transfer from Kuwait City to Riyadh. Reliable 24/7 door-to-door transfers with luxury SUVs and professional bilingual chauffeurs."
                services={[
                    { name: 'Private Car Transfer Kuwait to Riyadh', description: 'Premium private transfer with guaranteed fixed rates starting from 170 KD.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family SUV Service', description: 'Spacious vehicles perfect for groups with luggage.' },
                    { name: 'Airport & Hotel Transfers', description: 'Convenient pickups and drop-offs at all major locations.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            <Hero
                images={images}
                h1Text="Private Car Transfer from Kuwait City to Riyadh"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Private transfer in ~6h 50min — Door-to-Door, No Shared Passengers"
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
                        <a href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Riyadh%20taxi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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

            {/* Urgency Banner */}
            <div className="bg-amber-50 border-y border-amber-200 py-3 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-amber-800 text-sm sm:text-base">
                    <Clock className="w-5 h-5 shrink-0" />
                    <p><strong>High Demand Notice:</strong> Weekend cross-border transfers are booking fast. Please reserve your SUV at least 24-48 hours in advance.</p>
                </div>
            </div>

            {/* Your trip at a glance */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your trip at a glance</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { label: "Route", value: "Kuwait City → Riyadh" },
                            { label: "Duration", value: "~6h 50min – 8h" },
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
                                The Premium Way from Kuwait to Riyadh
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Traveling between Kuwait City and Riyadh by road is a popular option for families, businessmen, and GCC residents. The distance is approximately 650 km, and the journey typically takes 6h 50min to 8 hours via the Nuwaiseeb border crossing.
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
                                    <span className="font-semibold text-gray-800">~6h 50min Journey</span>
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

            {/* Fleet */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Cross-Border Fleet</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">For the ~7-hour journey between Kuwait and Riyadh, comfort is non-negotiable. Our fleet primarily consists of brand-new <strong>GMC Yukon, Chevrolet Tahoe, and Toyota Fortuner</strong> SUVs.</p>
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
                            <Image src="/hero-slide-1.webp" alt="GMC SUV VIP Fleet for Kuwait to Riyadh transfer" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
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

            {/* What's included */}
            <section className="bg-white py-16 border-b border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">No hidden extras</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">What&apos;s included</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Private vehicle", desc: "No shared passengers — the entire car is yours for the journey" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Bilingual driver", desc: "Arabic & English speaking, experienced at the Nuwaiseeb border" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Border insurance", desc: "Cross-border vehicle insurance required for Saudi entry, fully covered" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Fuel & tolls", desc: "All highway tolls and fuel for the 650 km journey included" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Door-to-door", desc: "Picked up from your address in Kuwait, dropped at your Riyadh destination" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Border paperwork", desc: "Driver assists with all crossing formalities at Nuwaiseeb/Khafji" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Rest stops", desc: "Driver stops at petrol stations or rest areas on request at no charge" },
                            { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "24/7 support", desc: "WhatsApp support throughout your journey for any issues or updates" },
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
                        title="Kuwait to Riyadh Taxi Fares"
                        subtitle="Transparent Pricing — Per Vehicle, All-Inclusive"
                        rows={pricingRows}
                        currency="KD"
                        disclaimer="Prices include fuel, border crossing vehicle insurance, and tolls. No hidden charges. Approx. 170 KD ≈ 2,050 SAR / $545 USD for reference."
                    />

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

            {/* Good to know */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Practical info</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Good to know</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Everything your driver already knows — but useful for you to know too before you travel.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Nuwaiseeb border is open 24/7",
                                detail: "The Nuwaiseeb/Khafji crossing operates around the clock every day of the year. However, Thursday night and Friday morning are peak times when thousands of weekend travelers cross simultaneously — expect 1–2 hours at the crossing. Tuesday and Wednesday mornings are the fastest. We always advise departing Kuwait City by 5–6 AM for minimum border wait."
                            },
                            {
                                title: "Have these documents at the window",
                                detail: "When your vehicle reaches the border booth, have your original passport open to the photo page, your Kuwait Iqama (for residents), your Saudi entry visa or e-visa confirmation, and the vehicle insurance document (which our driver carries). Do not put documents away between the Kuwait exit and Saudi entry — there are two separate checkpoints within 500 metres of each other."
                            },
                            {
                                title: "The driver handles the paperwork — you just wait",
                                detail: "At the Nuwaiseeb crossing, passengers typically wait in a lounge or remain in the vehicle while the driver submits paperwork at the vehicle inspection lane. You will be called to the passport counter to stamp out of Kuwait and then stamp into Saudi Arabia. The entire process is straightforward — our drivers have done this crossing hundreds of times."
                            },
                            {
                                title: "Rest stops: where and when",
                                detail: "There are two main rest stops on the Kuwait–Riyadh highway. The first is at Hafr Al-Batin (~3.5 hours in), which has petrol stations, clean toilets, fast food restaurants, and a mosque. The second is at Buraydah (~5.5 hours in) which has larger facilities including pharmacies and supermarkets. Your driver will stop at whichever is most convenient for your group."
                            },
                            {
                                title: "Prayer times during the journey",
                                detail: "The journey typically spans 2–3 prayer times (Fajr, Dhuhr, Asr, Maghrib depending on departure time). Our drivers stop at mosques or petrol station prayer areas on request. Facilities at Hafr Al-Batin and Buraydah both have well-maintained mosques adjacent to the highway. Inform us of your preference when booking and we factor prayer stops into the timing."
                            },
                            {
                                title: "No cash payment is required at the border",
                                detail: "Unlike some GCC crossings, there is no toll or fee payable in cash by passengers at the Nuwaiseeb/Khafji border. The vehicle insurance and crossing fees are handled by our team before your departure. Saudi highway tolls (SALIK equivalent) are also covered in your quoted fare. You pay only the driver on completion of the journey."
                            },
                        ].map(({ title, detail }) => (
                            <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
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

            <section className="bg-white py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <ServiceComparison />
                </div>
            </section>

            {/* Reviews */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">What Our Cross-Border Clients Say</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Real reviews from passengers who traveled between Kuwait and Riyadh with our VIP SUV service.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                name: "Ahmed Al-Rashidi",
                                initials: "A",
                                route: "Kuwait City → Riyadh",
                                date: "May 2026",
                                title: "Smooth border crossing, highly professional",
                                review: "I travel this route every month for business. The driver arrived 15 minutes early, had all my documents organized at the Nuwaiseeb crossing, and I was in my Riyadh hotel within 7 hours. No stress, no surprises — exactly what I need."
                            },
                            {
                                name: "Fatima Al-Mutairi",
                                initials: "F",
                                route: "Salmiya → Riyadh",
                                date: "April 2026",
                                title: "Perfect for family travel with kids",
                                review: "Traveled with my three children and all our luggage from Salmiya. The GMC Tahoe was spacious and spotlessly clean. Driver was patient and stopped twice for rest. Border took about 45 minutes — driver handled everything. Will definitely book again."
                            },
                            {
                                name: "Rajesh Kumar",
                                initials: "R",
                                route: "Mahboula → Riyadh",
                                date: "March 2026",
                                title: "Best option for expats relocating",
                                review: "I was relocating from Kuwait to Riyadh with six suitcases. The team pre-checked my Iqama and visa before departure which saved me time at the border. Price was fair for the service level — much better than paying for airline checked baggage fees."
                            },
                            {
                                name: "Omar Al-Dosari",
                                initials: "O",
                                route: "Jabriya → Riyadh",
                                date: "June 2026",
                                title: "24/7 service — booked at midnight, arrived next day",
                                review: "Had an urgent family situation and needed to reach Riyadh immediately. Booked at midnight via WhatsApp and the car was at my door in Jabriya by 5 AM. The driver was calm, professional, and got me to my destination safely. Truly 24/7."
                            }
                        ].map((review) => (
                            <div key={review.name} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{review.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{review.review}&rdquo;</p>
                                <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                                        {review.initials}
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold text-gray-900 block">{review.name}</span>
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">{review.route}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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

            {/* Flight vs Road */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Road vs Air</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Kuwait to Riyadh: Fly or Drive?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">A practical comparison for families, expats, and business travelers to help you choose the right option.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="py-4 px-6 text-sm font-bold">Factor</th>
                                    <th className="py-4 px-6 text-sm font-bold text-center">✈ Flying</th>
                                    <th className="py-4 px-6 text-sm font-bold text-center text-emerald-400">🚗 Private Transfer</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[
                                    ["Cost (4 passengers)", "320–600 KD (4 × tickets) + bags", "250 KD total — per vehicle"],
                                    ["Door-to-door time", "4–5 hrs (airport + flight + arrival transfer)", "~7 hrs — but from home to destination"],
                                    ["Luggage", "Strict limits, fees per extra bag", "No luggage fees — 2 bags per person"],
                                    ["Flexibility", "Fixed departure times only", "Depart whenever suits you, 24/7"],
                                    ["Comfort", "Economy cabin, shared space", "Private luxury SUV, your own space"],
                                    ["Border hassle", "None (internal GCC flight)", "30–90 min crossing — driver handles it"],
                                    ["Best for", "Solo/couple traveling light", "Families, expats with luggage, groups"],
                                ].map(([factor, fly, taxi], i) => (
                                    <tr key={i} className="hover:bg-gray-50/50">
                                        <td className="py-4 px-6 font-semibold text-gray-800 text-sm">{factor}</td>
                                        <td className="py-4 px-6 text-gray-500 text-sm text-center">{fly}</td>
                                        <td className="py-4 px-6 text-emerald-700 font-semibold text-sm text-center">{taxi}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 text-center">Flight cost estimates based on Kuwait Airways/Flynas economy fares. Transfer costs based on our GMC Tahoe rate (7 passengers).</p>
                </div>
            </section>

            {/* Sights along the way */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">The Route</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Visit these sights on the way</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">The Kuwait–Riyadh highway passes through several interesting stops. Your driver knows all of them and can pause on request.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: "Nuwaiseeb Border Area",
                                km: "~60 km from Kuwait City",
                                desc: "The main Kuwait–Saudi land border crossing. An iconic gateway for GCC road travelers — the bridge and border plaza make for a memorable photo stop. Your driver handles the crossing process smoothly on both sides."
                            },
                            {
                                name: "Hafr Al-Batin",
                                km: "~320 km into Saudi Arabia",
                                desc: "The natural halfway point on the route. A good place to stop for a full meal, prayer, and fuel. The city has several well-known restaurant chains and clean rest facilities off the main highway."
                            },
                            {
                                name: "Al-Qaisumah",
                                km: "~380 km into Saudi Arabia",
                                desc: "A smaller town along Highway 65 known for its date palms and traditional market. If you pass through early morning, the local souk is worth a 15-minute stop before the final stretch into Riyadh."
                            },
                        ].map(({ name, km, desc }) => (
                            <div key={name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">{km}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Traveler types */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Every type of traveler</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Explore transfers tailored for you</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Our Kuwait to Riyadh private car service is designed around your specific travel needs — whoever you are.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {travelerTypes.map(({ icon, heading, body }) => (
                            <div key={heading} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="Riyadh" />
            </div>

            {/* SEO: Kuwait coverage areas */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Door-to-Door Coverage</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Kuwait City to Riyadh Taxi Service</h2>
                        <p className="text-gray-600 max-w-3xl">We provide comprehensive coverage across all major areas in Kuwait. Whether you need a ride from the capital or the surrounding governorates, our premium drivers will come directly to your doorstep.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Taxi from Salmiya to Riyadh</h3>
                            <p className="text-gray-600 text-sm">Enjoy direct VIP pick-ups from anywhere in Salmiya. Our chauffeurs come to your doorstep, handle your luggage, and prepare all border paperwork in advance. The journey from Salmiya to central Riyadh typically takes 7–8 hours via the Nuwaiseeb border crossing, with fixed rates starting from 170 KD.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Taxi from Jabriya to Riyadh</h3>
                            <p className="text-gray-600 text-sm">We offer timely pick-ups from Jabriya with spacious GMC or Fortuner SUVs perfect for families traveling across the border. Our drivers are familiar with all major residential areas in Jabriya and will arrive at your building entrance. Fixed, all-inclusive pricing means no surprises at the border or destination.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Taxi from Fahaheel to Riyadh</h3>
                            <p className="text-gray-600 text-sm">Fast and reliable cross-border transfers from Fahaheel — a popular southern district for travelers heading to Saudi Arabia. Skip airport queues and travel directly to your hotel or business meeting in Riyadh. Our Fahaheel pick-up service operates 24/7, including early morning and late-night departures.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Taxi from Mangaf to Riyadh</h3>
                            <p className="text-gray-600 text-sm">Convenient door-to-door pick-ups from Mangaf with professional drivers experienced in GCC highway routes. We cover all areas in Mangaf including its residential complexes popular with expat families. Share your passport and Iqama details via WhatsApp in advance and we handle the rest.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Taxi from Mahboula to Riyadh</h3>
                            <p className="text-gray-600 text-sm">Traveling from Mahboula? Reserve our premium fleet for the entire 650 km journey in VIP comfort. Mahboula is one of our most frequently served areas, particularly popular with South Asian expats relocating between Kuwait and Riyadh. Our SUVs accommodate large families with multiple suitcases at no extra luggage fee.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Taxi from Salwa Kuwait to Riyadh</h3>
                            <p className="text-gray-600 text-sm">Direct, private transfers from Salwa with full border documentation assistance. Our team pre-verifies your travel documents before departure so you pass the Nuwaiseeb crossing without delays. Salwa residents benefit from our central Kuwait City pick-up zone with no additional collection surcharge.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Taxi from Sabah Al Salem to Riyadh</h3>
                            <p className="text-gray-600 text-sm">Reliable pick-ups from Sabah Al Salem with guaranteed fixed rates and zero hidden fees upon arrival in Saudi Arabia. We service both the old and new residential areas of Sabah Al Salem. Book at least 24 hours in advance for weekend travel to secure your preferred vehicle type.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Kuwait to Riyadh Taxi Fare & Ticket Price</h3>
                            <p className="text-gray-600 mb-6">We believe in transparent pricing. The Kuwait to Riyadh taxi ticket price starts at 170 KD for standard sedans and goes up to 250 KD for premium GMC/Tahoe SUVs. Unlike buses or airlines, this is a per-vehicle rate, making it highly cost-effective for groups. The fare includes fuel, border crossing vehicle insurance, and tolls.</p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Kuwait to Riyadh Taxi Number & Timing</h3>
                            <p className="text-gray-600 mb-6">Need an urgent ride? Our Kuwait to Riyadh taxi timing is strictly 24/7. We operate around the clock to accommodate your schedule. You can instantly book or request a custom quote by contacting our Kuwait to Riyadh taxi number via WhatsApp directly through this page.</p>
                        </div>
                        <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Kuwait to Riyadh by Car (Distance & Route)</h3>
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
                                        <p className="text-sm text-gray-700">The journey takes around 6h 50min to 8 hours. This includes standard driving time plus the average processing time at the Nuwaiseeb / Khafji border crossing.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular drop-off areas in Riyadh */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Riyadh Coverage</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Popular drop-off areas in Riyadh</h2>
                        <p className="text-gray-600 max-w-3xl">We drop you directly to your destination anywhere in Riyadh. Here are the most frequently requested areas from Kuwait travelers.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                area: "KAFD — King Abdullah Financial District",
                                tag: "Business hub",
                                desc: "Riyadh's premium corporate district, home to major banks, law firms, and multinationals. Our driver IDs are registered for KAFD gate access — no delays at the security checkpoint. Ideal for business travelers arriving from Kuwait."
                            },
                            {
                                area: "Al Olaya & Al Sulaimaniyah",
                                tag: "Central Riyadh",
                                desc: "The main commercial strip of Riyadh with five-star hotels (Ritz-Carlton, Marriott, Sheraton), restaurants, and shopping malls. The most common drop-off zone for Kuwait travelers staying in central Riyadh."
                            },
                            {
                                area: "King Khalid International Airport (RUH)",
                                tag: "Connecting flights",
                                desc: "If you're using the Kuwait–Riyadh road leg to catch an onward flight, we coordinate timing with your departure. Drop-off at Terminal 1, 2, or 5 depending on your airline. Driver tracks your check-in window from departure."
                            },
                            {
                                area: "Diplomatic Quarter (DQ)",
                                tag: "Embassies & expats",
                                desc: "Home to embassies, international schools, and expat residences. Our vehicles hold the required access clearance for the DQ. Popular with embassy staff and expats relocating from Kuwait to Riyadh."
                            },
                            {
                                area: "Al Malaz & Al Murabba",
                                tag: "Historic central",
                                desc: "The historic heart of Riyadh, close to government ministries and older residential areas. Also home to Murabba Palace and the National Museum. Frequently requested by families visiting relatives in older Riyadh neighbourhoods."
                            },
                            {
                                area: "Al Diriyah & Al Bujairi District",
                                tag: "Heritage & tourism",
                                desc: "UNESCO World Heritage Site and one of Saudi Arabia's premier tourism destinations. If you're visiting Al Diriyah or staying in the adjacent boutique hotels, we drop directly to the At-Turaif gate or the Al Bujairi Heritage Park entrance."
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

            {/* Things to do in Riyadh */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">At your destination</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Things to do in Riyadh</h2>
                        <p className="text-gray-600 max-w-3xl">Once your private transfer drops you in Riyadh, here are the top experiences worth planning into your visit.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "National Museum of Saudi Arabia",
                                category: "History & Culture",
                                desc: "One of the most important museums in the Arab world. Eight galleries trace the history of Arabia from prehistoric times through the modern Saudi state. Located on King Faisal Road, 10 minutes from central Riyadh.",
                                hours: "Open Sat–Thu, 9am–9pm"
                            },
                            {
                                name: "Masmak Fortress",
                                category: "Historic Landmark",
                                desc: "The mud-brick fort where Ibn Saud recaptured Riyadh in 1902 — the founding moment of modern Saudi Arabia. A fascinating museum inside a perfectly preserved 19th-century fortress in the heart of old Riyadh.",
                                hours: "Open daily except Fri mornings"
                            },
                            {
                                name: "Al Faisaliyah Centre",
                                category: "Architecture & Views",
                                desc: "Riyadh's first skyscraper and an iconic landmark. Visit the glass globe observation deck for panoramic city views, or dine at one of the award-winning restaurants inside. A must for first-time visitors.",
                                hours: "Globe Café open daily"
                            },
                            {
                                name: "Al Diriyah (UNESCO Site)",
                                category: "Heritage & Dining",
                                desc: "The birthplace of the Saudi state, now a UNESCO World Heritage Site. The restored mud-brick At-Turaif District and the adjacent Al Bujairi Heritage Park with its outdoor restaurants make for a full half-day visit.",
                                hours: "Open Sat–Thu, 9am–11pm"
                            },
                            {
                                name: "Kingdom Centre Tower",
                                category: "Iconic Skyline",
                                desc: "Riyadh's tallest and most recognisable building with a 300-metre SkyBridge connecting its two towers. The observation deck offers the best aerial view of the city. The adjacent Kingdom Mall is one of Riyadh's premier shopping destinations.",
                                hours: "SkyBridge open daily"
                            },
                            {
                                name: "Murabba Palace",
                                category: "Royal History",
                                desc: "Built by King Abdulaziz in 1936, this palace offers a rare look at royal Saudi architecture from the early 20th century. Compact, uncrowded, and often overlooked by tourists — a hidden gem in the Al Murabba district.",
                                hours: "Open Sat–Thu, 8am–8pm"
                            },
                            {
                                name: "Riyadh Season Events",
                                category: "Entertainment",
                                desc: "Riyadh hosts one of the world's largest entertainment festivals each year, featuring concerts, sports events, theatre, and pop-up experiences across the city. Check the current season calendar to plan around live events.",
                                hours: "Seasonal — check dates"
                            },
                            {
                                name: "Thumamah National Park",
                                category: "Nature & Outdoors",
                                desc: "A vast natural reserve 40 km north of Riyadh with dunes, desert landscapes, and zip lines. Popular with families and outdoor enthusiasts. One of the few places near Riyadh to experience authentic Arabian desert terrain.",
                                hours: "Open daily, sunrise–sunset"
                            },
                        ].map(({ name, category, desc, hours }) => (
                            <div key={name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{category}</span>
                                <h3 className="text-base font-bold text-gray-900 mt-2 mb-2">{name}</h3>
                                <p className="text-gray-600 text-xs leading-relaxed mb-3">{desc}</p>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{hours}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does a taxi take from Kuwait to Riyadh?",
                        shortAnswer: "~6h 50min to 8 hours",
                        detailedAnswer: "The total journey is around 6h 50min to 8 hours. Driving time on the highway is approximately 5–6 hours, plus an average of 30 minutes to 1.5 hours at the Nuwaiseeb/Khafji border crossing. Weekend crossings (Thursday–Friday) can take longer — we recommend an early morning departure to avoid peak border queues.",
                        perspectives: []
                    },
                    {
                        question: "What vehicle options do you have for this route?",
                        shortAnswer: "Sedan, SUV, or Large SUV",
                        detailedAnswer: "We offer three vehicle tiers: a comfortable Camry/Sonata sedan (up to 4 passengers, 170 KD), a Toyota Fortuner mid-size SUV (up to 6 passengers, 200 KD), and a GMC Yukon/Chevrolet Tahoe large SUV (up to 7 passengers, 250 KD). For the 650 km journey we strongly recommend an SUV for comfort and luggage space.",
                        perspectives: []
                    },
                    {
                        question: "Is the border vehicle insurance included in the price?",
                        shortAnswer: "Yes, fully included",
                        detailedAnswer: "Yes. All quoted prices include the cross-border vehicle insurance required to enter Saudi Arabia, plus all highway tolls and fuel. There are no add-ons or surprise charges at the border. Personal travel insurance for passengers is optional and the passenger's own responsibility.",
                        perspectives: []
                    },
                    {
                        question: "Can I pay in Kuwaiti Dinar or Saudi Riyal?",
                        shortAnswer: "Yes — multiple currencies accepted",
                        detailedAnswer: "We accept KWD, SAR, AED, USD, EUR, and GBP. Payment is typically made to the driver in cash on the day of travel, or via an agreed electronic method. There is no currency conversion fee — simply pay in whichever currency you have.",
                        perspectives: []
                    },
                    {
                        question: "Which border crossing do you use for Kuwait to Riyadh?",
                        shortAnswer: "Nuwaiseeb / Khafji border",
                        detailedAnswer: "We use the Nuwaiseeb border crossing on the Kuwait side and the Khafji crossing on the Saudi side. This is the standard land route between the two countries and is the most direct option for Riyadh-bound travelers. Our drivers are experienced with this crossing and know the fastest lanes and procedures.",
                        perspectives: []
                    },
                    {
                        question: "Can expats (Indian, Pakistani, Filipino nationals) travel this route?",
                        shortAnswer: "Yes, with valid documents",
                        detailedAnswer: "Expatriates of any nationality can travel from Kuwait to Saudi Arabia by road provided they have a valid passport, a valid Kuwait Iqama (residence permit), and an appropriate Saudi entry visa (work, visit, or tourist e-visa). Our team reviews your documents via WhatsApp before departure to flag any potential issues in advance.",
                        perspectives: []
                    },
                    {
                        question: "What happens if there is a border delay or closure?",
                        shortAnswer: "Driver waits; you are not charged extra",
                        detailedAnswer: "Border delays due to queues, inspections, or temporary closures are beyond anyone's control. Our driver will wait with you throughout the process at no extra charge. In the rare event of a full border closure (which is extremely uncommon), we will coordinate an alternative plan with you and your safety is always the priority.",
                        perspectives: []
                    },
                    {
                        question: "How much luggage can I bring?",
                        shortAnswer: "2 large suitcases per person in an SUV",
                        detailedAnswer: "Our SUVs accommodate approximately 2 large suitcases per passenger within normal capacity. If you have oversized items, additional bags, or travel with heavy cargo, please let us know when booking. Extra luggage can often be accommodated but must be declared in advance so we can assign the right vehicle.",
                        perspectives: []
                    },
                    {
                        question: "Is it cheaper to fly or take a taxi from Kuwait to Riyadh?",
                        shortAnswer: "For groups, the private transfer is often cheaper",
                        detailedAnswer: "A one-way flight ticket from Kuwait to Riyadh typically costs 80–150 KD per person. For a family of 4, that is 320–600 KD in flights alone — plus airport transfers, checked baggage fees, and the time cost of arriving 2+ hours early. Our private SUV transfer starts at 250 KD total for up to 7 passengers, is door-to-door, and includes all luggage with no fees.",
                        perspectives: []
                    },
                    {
                        question: "What companies run services between Kuwait and Riyadh?",
                        shortAnswer: "Airlines, SAPTCO bus, and private transfer companies",
                        detailedAnswer: "Several options exist: (1) Airlines — Kuwait Airways, Flynas, Air Arabia, and flydubai operate direct and connecting flights from Kuwait International Airport (KWI) to King Khalid International Airport (RUH), typically 1h 20min flight time. (2) SAPTCO and Gulf Transport run long-distance shared buses from Kuwait to Riyadh, taking 12–14 hours. (3) Private car transfer companies like Taxi Service KSA provide door-to-door private transfers via road in ~7 hours. There is no direct train service between Kuwait and Riyadh. For families or groups, the private transfer is typically the most comfortable and cost-effective option.",
                        perspectives: []
                    }
                ]}
            />

            {/* More routes from Kuwait */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">Popular GCC Routes</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">More routes from Kuwait</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We cover all major Saudi destinations from Kuwait. Book any route via WhatsApp for a custom quote.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            {
                                from: "Kuwait City",
                                to: "Jeddah",
                                time: "~10–12 hrs",
                                distance: "~1,150 km",
                                note: "Via Nuwaiseeb border → Hafr Al-Batin → Riyadh bypass → Taif → Jeddah. Popular for Umrah travelers flying out of Jeddah or visiting the Red Sea coast.",
                                href: "https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Jeddah%20transfer"
                            },
                            {
                                from: "Kuwait City",
                                to: "Dammam",
                                time: "~4–5 hrs",
                                distance: "~430 km",
                                note: "The shortest Kuwait–Saudi road route. Via Nuwaiseeb border into the Eastern Province. Popular with oil & gas professionals and families visiting the Gulf coast.",
                                href: "https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Dammam%20transfer"
                            },
                            {
                                from: "Kuwait City",
                                to: "Makkah",
                                time: "~12–14 hrs",
                                distance: "~1,350 km",
                                note: "Direct Umrah transfer from Kuwait. Our drivers accommodate Ihram protocols and schedule prayer stops. We also coordinate Makkah → Madinah onward transfers.",
                                href: "https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Makkah%20transfer"
                            },
                            {
                                from: "Kuwait City",
                                to: "Madinah",
                                time: "~13–15 hrs",
                                distance: "~1,450 km",
                                note: "Door-to-door transfer for Ziyarat and Umrah pilgrims. Drop-off near the Prophet's Mosque gates. Available as a round-trip or one-way booking.",
                                href: "https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Madinah%20transfer"
                            },
                            {
                                from: "Kuwait City",
                                to: "Al Ahsa (Hofuf)",
                                time: "~3–4 hrs",
                                distance: "~340 km",
                                note: "Al Ahsa is one of Saudi Arabia's most underrated destinations — a UNESCO-listed oasis city. Our shortest regular route from Kuwait, ideal for a quick weekend trip.",
                                href: "https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Al%20Ahsa%20transfer"
                            },
                            {
                                from: "Kuwait City",
                                to: "Riyadh Airport (RUH)",
                                time: "~7–8 hrs",
                                distance: "~650 km",
                                note: "If you need to catch a flight from King Khalid International Airport, we time your departure from Kuwait to give you a safe check-in window. Covers all RUH terminals.",
                                href: "https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Riyadh%20Airport%20transfer"
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
                        Private SUV from 170 KD · Door-to-door · Border assistance included · 24/7
                    </p>
                    <p className="text-gray-500 text-sm mb-10">
                        WhatsApp us your travel date, Kuwait pickup address, and Riyadh destination — we confirm within minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20Kuwait%20to%20Riyadh%20private%20car%20transfer"
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
                    <p className="text-gray-600 text-xs mt-8">TGA Licensed · Fixed Rates · No Hidden Fees · 25,000+ Travelers Served</p>
                </div>
            </section>
        </div>
    );
}
