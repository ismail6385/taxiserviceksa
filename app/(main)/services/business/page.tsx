import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Building2, Briefcase, Clock, Shield, Wifi, FileText, CheckCircle2, Car, Star, MapPin, ArrowRight, Zap, Users, Plane, Users2, Calendar, PhoneCall, FileCheck } from 'lucide-react';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import RelatedServices from '@/components/seo/RelatedServices';
import ReviewForm from '@/components/seo/ReviewForm';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import AuthorCard from '@/components/AuthorCard';
import JsonLdFAQ from '@/components/JsonLdFAQ';

export const metadata: Metadata = {
    title: 'Business Chauffeur Service in Saudi Arabia | Taxi Service KSA',
    description: 'Private chauffeur-driven cars for business meetings, airport transfers, client visits and intercity business travel across Saudi Arabia. No account required, pay per trip.',
    keywords: ['business chauffeur service Saudi Arabia', 'corporate chauffeur service', 'business travel chauffeur Saudi Arabia', 'executive car Riyadh', 'business chauffeur Jeddah'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/services/business/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/business/',
            'ar': 'https://taxiserviceksa.com/ar/services/business/',
            'ur': 'https://taxiserviceksa.com/ur/services/business/',
            'x-default': 'https://taxiserviceksa.com/services/business/',
        },
    },
};

const businessServices = [
    { icon: Plane, title: 'Airport Pickup', desc: 'Meet-and-greet at arrivals with flight tracking, straight to your hotel or first meeting.' },
    { icon: Building2, title: 'Meeting Transfers', desc: 'Point-to-point transport between offices, or a driver on call for multiple meetings in one day.' },
    { icon: Users2, title: 'Client Transportation', desc: 'Professional chauffeur-driven transport arranged for visiting clients and partners.' },
    { icon: Clock, title: 'Hourly Chauffeur', desc: 'Car and driver booked by the hour, with the driver waiting between appointments.' },
    { icon: Calendar, title: 'Full-Day Chauffeur', desc: 'A dedicated vehicle and driver for the full business day, or several days on a trip.' },
    { icon: MapPin, title: 'Intercity Business Travel', desc: 'Riyadh, Jeddah, Dammam, and Khobar connected by private car for business trips between cities.' },
    { icon: Briefcase, title: 'Conference & Event Transportation', desc: 'Transfers between hotel, venue, and airport for conferences and corporate events.' },
];

const useCases = [
    { title: 'Visiting Executives', desc: 'Airport pickup, hotel transfer, and meeting transport in one coordinated booking.' },
    { title: 'C-Suite & VIP Travelers', desc: 'Mercedes S-Class or BMW 7 Series for senior executives who need a premium ride.' },
    { title: 'Business Meetings', desc: 'Point-to-point transport between your hotel and each meeting on your schedule.' },
    { title: 'Client Hosting', desc: 'Professional chauffeur transport arranged for guests and business partners.' },
    { title: 'Roadshows', desc: 'Multiple business locations covered in one day, with the driver on call throughout.' },
    { title: 'Conferences', desc: 'Coordinated transfers between hotel, venue, and airport for the full event.' },
    { title: 'Intercity Business Trips', desc: 'Riyadh to Dammam/Khobar, Riyadh to Jeddah, and other city-to-city business routes.' },
];

const fleet = [
    { name: 'Mercedes S-Class', desc: 'Best for C-suite executives and VIP clients.', capacity: '3 Pax', link: '/fleet/mercedes-s-class/' },
    { name: 'BMW 7 Series', desc: 'Best for executive airport transfers and meetings.', capacity: '3 Pax', link: '/fleet/bmw-7-series/' },
    { name: 'Genesis G80', desc: 'Best for comfortable business travel at a lower price point.', capacity: '3 Pax', link: '/fleet/genesis-g80/' },
    { name: 'GMC Yukon XL', desc: 'Best for executives traveling with colleagues or luggage.', capacity: '6 Pax', link: '/fleet/gmc-yukon-xl/' },
];

const bookingInfo = [
    'Pickup location',
    'Destination',
    'Date and time',
    'Number of passengers',
    'Vehicle preference',
    'Single trip, hourly, or full-day',
    'Contact number for the driver',
    'Company name, for the invoice',
];

const faqs = [
    {
        question: 'Do I need a corporate account to book a business chauffeur?',
        answer: 'No. Individual business travelers can book a single chauffeur transfer without opening a corporate account or signing a long-term agreement. Send us your pickup location, destination, date and time through WhatsApp and we\'ll confirm availability and pricing.',
    },
    {
        question: 'Can I book a chauffeur for only one meeting?',
        answer: 'Yes. Most business-traveler bookings are exactly this — an airport pickup, a single client meeting, or a few hours during a short visit. Each trip is booked and paid for individually, with no minimum.',
    },
    {
        question: 'Can the driver wait while I attend a meeting?',
        answer: 'Yes, when booked as an hourly or full-day chauffeur, the driver waits and stays available between appointments rather than being booked as separate point-to-point trips.',
    },
    {
        question: 'Do you offer hourly chauffeur service?',
        answer: 'Yes. Book a car and driver by the hour, half-day, or full day. This suits a schedule with multiple stops, since the same driver and vehicle stay with you throughout rather than booking each leg separately.',
    },
    {
        question: 'Can you provide airport pickup for visiting executives?',
        answer: 'Yes, we track the flight and meet the passenger at arrivals with a name sign, then transfer directly to the hotel or first meeting.',
    },
    {
        question: 'Can I book transportation for a client or business partner?',
        answer: 'Yes, you can book on behalf of a visiting client or partner — just provide their contact details and travel schedule when you book.',
    },
    {
        question: 'Do you provide business transportation between Saudi cities?',
        answer: 'Yes, intercity business travel is available between Riyadh, Jeddah, Dammam, Khobar, and other major cities, in the same vehicle for the whole trip.',
    },
    {
        question: 'Can I request an English-speaking chauffeur?',
        answer: 'Yes, English-speaking drivers are available — mention this when booking so the right driver is assigned.',
    },
    {
        question: 'Can I get a receipt for business expenses?',
        answer: 'Yes, every trip generates a digital invoice emailed to you after the ride, formatted for expense reports.',
    },
    {
        question: 'What if I need transport every day for a month or longer?',
        answer: 'For ongoing, multi-trip business travel with monthly invoicing and a dedicated account manager, our Corporate Travel service is the better fit — see the comparison below.',
    },
];

const schemas = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Chauffeur Service Saudi Arabia",
    "description": "Private chauffeur-driven cars for business meetings, airport transfers, client visits and intercity business travel across Saudi Arabia.",
    "areaServed": "Saudi Arabia",
    "serviceType": "Business Chauffeur Service"
};

export default function BusinessPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/hero-slide-3.webp')] bg-cover bg-center"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="bg-primary/20 text-primary font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-sm border border-primary/20">
                        No Account Required
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 px-4 leading-tight">
                        Business Chauffeur Service in Saudi Arabia
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mb-10">
                        Need a professional car for one meeting, an airport pickup, or a business day? Book a chauffeur without opening a corporate account or signing a long-term contract.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-12">
                        <Button asChild size="lg" className="bg-primary hover:bg-emerald-600 text-white font-black text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            <Link href="https://wa.me/966590209905?text=Hello,%20I%20need%20a%20car%20for%20a%20business%20trip" target="_blank">
                                Book via WhatsApp
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl transition-all w-full sm:w-auto">
                            <Link href="/booking/">
                                Get a Quote
                            </Link>
                        </Button>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm mb-4 max-w-4xl mx-auto text-left">
                        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                            Quick Facts
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-sm">
                            <li><strong className="text-gray-900">No Account:</strong> Book a single trip with no sign-up or minimum — pay per ride.</li>
                            <li><strong className="text-gray-900">Billing:</strong> Digital receipt for expense reports, per trip.</li>
                            <li><strong className="text-gray-900">Fleet:</strong> Mercedes S-Class, BMW 7 Series, GMC Yukon XL and Genesis G80.</li>
                            <li><strong className="text-gray-900">Need it daily instead?</strong> See our <Link href="/services/corporate-travel/" className="text-emerald-700 underline font-semibold">Corporate Travel account</Link> for monthly billing.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Business Chauffeur Services */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Chauffeur Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Every stage of a business trip, covered by one service.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {businessServices.map((s) => (
                            <div key={s.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <s.icon className="w-8 h-8 text-emerald-600 mb-3" />
                                <h3 className="font-bold text-gray-900 mb-2 text-sm">{s.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Business Chauffeur Booking Works</h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            { step: '1', title: 'Tell Us Your Schedule', desc: 'Send pickup, destination, date, time and passenger details on WhatsApp.' },
                            { step: '2', title: 'Choose Your Vehicle', desc: 'Select a sedan, luxury vehicle, or SUV based on your needs.' },
                            { step: '3', title: 'Receive Your Quote', desc: 'We confirm availability and give you the trip price up front.' },
                            { step: '4', title: 'Driver Assigned', desc: 'You receive your driver\'s name and pickup details before the trip.' },
                            { step: '5', title: 'Travel', desc: 'Your chauffeur handles the driving while you focus on business.' },
                        ].map((s) => (
                            <div key={s.step} className="flex gap-6 bg-white p-6 rounded-2xl border border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-lg shrink-0">{s.step}</div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Travel We Handle</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((u) => (
                            <div key={u.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                                <h3 className="font-black text-gray-900 mb-2 text-sm">{u.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{u.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location coverage */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Chauffeur Service Across Saudi Arabia</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-4">Riyadh</h3>
                            <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                <li>King Khalid International Airport</li>
                                <li>King Abdullah Financial District (KAFD)</li>
                                <li>Diplomatic Quarter</li>
                                <li>Hotels, offices and conferences</li>
                            </ul>
                            <Link href="/riyadh-airport-taxi/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">Riyadh Airport Taxi <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-4">Jeddah</h3>
                            <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                <li>King Abdulaziz International Airport (JED)</li>
                                <li>Business hotels</li>
                                <li>Business districts and client meetings</li>
                            </ul>
                            <Link href="/locations/jeddah/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">Jeddah Transfers <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-4">Dammam &amp; Khobar</h3>
                            <ul className="space-y-2 text-sm text-gray-600 mb-4">
                                <li>King Fahd International Airport (DMM)</li>
                                <li>Dhahran and Khobar business areas</li>
                                <li>Industrial and corporate offices</li>
                            </ul>
                            <Link href="/dammam-airport-taxi/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2">Dammam Airport Taxi <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Showcase */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 text-center">Choose Your Business Vehicle</h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">Matched to who's travelling and what the trip is for.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {fleet.map((car) => (
                            <Link key={car.name} href={car.link} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-colors group">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{car.name}</h3>
                                <p className="text-gray-400 text-sm mb-3">{car.desc}</p>
                                <div className="text-gray-400 text-xs flex items-center gap-2">
                                    <Users className="w-4 h-4" /> Up to {car.capacity}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/fleet/" className="text-primary font-bold hover:underline">Explore Entire Fleet →</Link>
                    </div>
                </div>
            </section>

            {/* One-off vs Corporate Account */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Business Chauffeur or Corporate Account?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Two different services for two different needs — pick the one that matches how often you travel.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
                            <h3 className="text-xl font-black text-gray-900 mb-2">Business Chauffeur</h3>
                            <p className="text-sm text-gray-600 mb-4">For individuals and visiting executives</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> One-off ride</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> No account needed</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> No contract</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Pay per trip</li>
                            </ul>
                            <p className="text-xs text-emerald-700 font-bold mt-4">You are here</p>
                        </div>
                        <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
                            <h3 className="text-xl font-black text-gray-900 mb-2">Corporate Travel</h3>
                            <p className="text-sm text-gray-600 mb-4">For companies with recurring transport needs</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0" /> Company account</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0" /> Monthly billing</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0" /> Recurring bookings</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400 shrink-0" /> Employee/client transportation</li>
                            </ul>
                            <Link href="/services/corporate-travel/" className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-2 mt-4">See Corporate Travel <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why choose us - specific, not adjectives */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Business Travelers Choose Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-white rounded-xl border border-gray-200">
                            <Zap className="w-10 h-10 text-emerald-700 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">No Account Needed</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Book a single ride for one trip — no sign-up, no contract, no minimum. Pay per trip via WhatsApp.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl border border-gray-200">
                            <Clock className="w-10 h-10 text-emerald-700 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Planned Around Your Schedule</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Drivers are instructed to arrive ahead of the scheduled pickup time, giving a buffer for business appointments and departures.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl border border-gray-200">
                            <Shield className="w-10 h-10 text-emerald-700 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Discreet Service</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Business bookings are handled with a focus on discretion, professional conduct, and passenger privacy.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl border border-gray-200">
                            <Wifi className="w-10 h-10 text-emerald-700 mb-4" />
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Wi-Fi on Selected Vehicles</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Wi-Fi is available on selected executive vehicles — mention it when booking if it's needed for your trip.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking info block */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Booking Information</h2>
                        <p className="text-gray-600">What we need to confirm your quote.</p>
                    </div>
                    <div className="bg-gray-50 rounded-3xl border border-gray-100 p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {bookingInfo.map((item) => (
                            <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100">
                                <FileCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                                <span className="text-sm font-bold text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <MicroSemanticFAQ
                        contextName="Business"
                        faqs={faqs.map(f => ({
                            question: f.question,
                            shortAnswer: f.answer.split('.')[0] + '.',
                            detailedAnswer: f.answer,
                            perspectives: []
                        }))}
                    />
                </div>
            </section>

            {/* Real client reviews */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-8">Real Client Reviews</h2>
                    <div className="space-y-12">
                        <ReviewsDisplay location="Business" />
                    </div>
                    <div className="mt-12 max-w-2xl mx-auto">
                        <ReviewForm locationName="Business" />
                    </div>
                </div>
            </section>

            <RelatedServices
                services={[
                    {
                        name: 'Corporate Travel (Monthly Account)',
                        description: 'Need transport every day, not just once? Open a company account with monthly billing instead.',
                        href: '/services/corporate-travel',
                        icon: Building2
                    },
                    {
                        name: 'Airport Transfers',
                        description: 'Reliable airport pickups for your executives and guests.',
                        href: '/services/airport-transfers',
                        icon: Star
                    },
                    {
                        name: 'Intercity Travel',
                        description: 'Travel between branches in different cities comfortably.',
                        href: '/services/intercity',
                        icon: MapPin
                    }
                ]}
                title="Related Corporate Services"
                description=""
            />

            {/* Author Section */}
            <div className="max-w-4xl mx-auto border-t border-gray-100 pt-16 mb-20 px-4 sm:px-6 lg:px-8">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-emerald-50" />
            </div>

            {/* Bottom CTA */}
            <div className="max-w-4xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white">
                    <h2 className="text-3xl font-black mb-4">Book Your Business Chauffeur</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Send your pickup, destination, date and passenger count for a fixed-rate quote.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            <Link href="https://wa.me/966590209905?text=Hello,%20I%20need%20a%20business%20chauffeur" target="_blank">
                                WhatsApp Booking
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            <a href="mailto:taxiserviceksa9988@gmail.com">
                                Email for Quote
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
