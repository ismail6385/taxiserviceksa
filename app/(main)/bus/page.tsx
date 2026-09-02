import { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowRight, Bus, Users, Building2, Plane, Globe2, CheckCircle2,
    ExternalLink, ShieldCheck, MapPin, Luggage, FileText, Clock,
} from 'lucide-react';

import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import CoachOptionsSection from '@/components/bus/CoachOptionsSection';
import { getAllBusRoutes, VERIFIED_COACH } from '@/data/busRoutes';

export const metadata: Metadata = {
    title: 'Saudi Arabia Bus & Coach Transportation | Taxi Service KSA',
    description: 'Private and group bus/coach transportation across Saudi Arabia and selected GCC routes, for families, companies and groups. Request a quote.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/bus/',
    },
    openGraph: {
        title: 'Saudi Arabia Bus & Coach Transportation',
        description: 'Private and group bus/coach transportation across Saudi Arabia and selected GCC routes, for families, companies and groups.',
        url: 'https://taxiserviceksa.com/bus/',
        siteName: 'Taxi Service KSA',
        type: 'website',
    },
};

const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Saudi Arabia Bus & Coach Transportation',
    description: 'Private and group bus/coach transportation across Saudi Arabia and selected GCC routes.',
    url: 'https://taxiserviceksa.com/bus/',
    isPartOf: {
        '@type': 'WebSite',
        name: 'Taxi Service KSA',
        url: 'https://taxiserviceksa.com',
    },
};

const hubFaqs = [
    {
        question: 'Does TaxiServiceKSA run scheduled bus trips?',
        shortAnswer: 'Not on a fixed daily schedule',
        detailedAnswer: "We don't currently operate a fixed daily scheduled bus service. Seat-based scheduled trips may be arrangeable on select routes and dates, but this depends on demand and availability — contact us to check for your specific route and date rather than assuming a standing timetable.",
    },
    {
        question: 'How is bus/coach different from your taxi service?',
        shortAnswer: 'Bus is for larger groups; taxi is for individuals and small groups',
        detailedAnswer: "Our taxi service uses private cars and SUVs, typically for 1-7 passengers. Bus/coach service is built for larger families, groups and companies who need everyone traveling together on one vehicle rather than splitting across multiple cars.",
    },
    {
        question: 'Can I book a private coach charter?',
        shortAnswer: 'Yes',
        detailedAnswer: "Yes — every bus/coach booking on this site is arranged as a private charter for your group, family or company rather than individual seat sales, unless we've confirmed scheduled seating is available for your specific route and date.",
    },
    {
        question: 'Is bus/coach available for cross-border GCC routes?',
        shortAnswer: 'It can be arranged, subject to confirmation',
        detailedAnswer: "Cross-border coach travel between Saudi Arabia and GCC destinations like Bahrain or the UAE can be arranged, but vehicle eligibility, border documentation and availability depend on the specific route and are confirmed at the time of booking — they aren't a guaranteed standing service in the way our private car cross-border routes are.",
    },
    {
        question: 'How much does a bus/coach charter cost?',
        shortAnswer: 'Request a quote',
        detailedAnswer: "We don't publish fixed bus/coach prices, since cost depends on route, distance, group size and vehicle. Contact us with your route and group size for a quote.",
    },
    {
        question: 'Can companies book employee or delegation transportation?',
        shortAnswer: 'Yes',
        detailedAnswer: "Yes — corporate transportation is one of our core bus/coach use cases, covering employee transport, business delegations, conferences, events and site visits.",
    },
    {
        question: 'What documents do I need for a cross-border coach route?',
        shortAnswer: 'A valid passport and correct visa/entry permission for every passenger',
        detailedAnswer: "Every passenger on a cross-border route needs a valid passport and the correct visa or entry permission for their nationality and residency status. Requirements vary by passenger and by destination — confirm eligibility before booking. We are a transport provider, not a visa or immigration authority.",
    },
    {
        question: 'How do I get a quote?',
        shortAnswer: 'WhatsApp us your route, date and group size',
        detailedAnswer: "Send us your route, travel date and passenger/group size via WhatsApp, and we'll confirm coach availability and a quote.",
    },
];

export default function BusHubPage() {
    const routes = getAllBusRoutes();
    const internationalRoutes = routes.filter((r) => r.isInternational);
    const whatsappHref = "https://wa.me/966569487569?text=Hello%2C%20I%20want%20a%20quote%20for%20a%20bus%2Fcoach%20charter.";

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Bus', item: '/bus' },
                ]}
            />
            <script
                id="bus-hub-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />

            {/* 1. Hero + 2. Main booking CTA */}
            <section className="bg-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Group &amp; Coach Transport</span>
                    <h1 className="text-3xl sm:text-5xl font-black mt-4 mb-6 leading-tight">
                        Saudi Arabia Bus &amp; Coach Transportation
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        Private and group bus/coach transportation across Saudi Arabia and selected GCC routes, with comfortable coaches for individuals, families, companies and groups.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                        <Link href={VERIFIED_COACH.bookingUrl}>
                            <span className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-primary/90 transition-colors w-full sm:w-auto">
                                Book Bus / Coach
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                        <a href={whatsappHref} target="_blank" rel="nofollow noopener noreferrer">
                            <span className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/20 text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-white/20 transition-colors w-full sm:w-auto">
                                WhatsApp a Quote
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. Bus service types */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">Bus &amp; Coach Service Types</h2>
                    <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">Coach transportation arranged around how your group actually needs to travel.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Clock,
                                title: 'Scheduled Bus Trips',
                                desc: "Seat-based transportation on selected routes where scheduled departures are actually available. We don't run a fixed daily timetable — availability depends on route and date, so check with us before assuming a standing schedule.",
                            },
                            {
                                icon: Bus,
                                title: 'Private Bus / Coach Charter',
                                desc: 'The full coach reserved exclusively for your party — families, weddings, school groups, sports teams, tour groups, religious groups and other large private parties.',
                            },
                            {
                                icon: Building2,
                                title: 'Corporate Transportation',
                                desc: 'Employee transportation, business delegations, conferences, events and site visits, arranged as a private charter for your company.',
                            },
                            {
                                icon: Plane,
                                title: 'Airport Group Transfers',
                                desc: 'Group airport pickup and drop-off, plus hotel transfers for arriving groups who need to move together from the airport.',
                            },
                            {
                                icon: Globe2,
                                title: 'GCC Cross-Border Coach',
                                desc: 'Coach transportation between Saudi Arabia and eligible GCC destinations. Availability, vehicle eligibility and border requirements depend on the specific route — confirmed per booking, not a standing guarantee.',
                            },
                            {
                                icon: Users,
                                title: 'Family & Group Bookings',
                                desc: 'Keep your whole family or group together on one vehicle instead of coordinating several private cars for the same trip.',
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Popular routes */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">Bus &amp; Coach Routes</h2>
                    <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">Request a quote for any of these routes, or contact us about a route not listed here.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {routes.map((route) => (
                            <Link
                                key={route.slug}
                                href={`/bus/${route.slug}/`}
                                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">{route.origin} → {route.destination}</span>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="font-black text-gray-900 text-lg mb-2">{route.h1}</h3>
                                {route.distanceRange && (
                                    <p className="text-sm text-gray-500">{route.distanceRange}{route.journeyDurationRange ? ` · ${route.journeyDurationRange.replace('approximately ', '~').replace(', before border processing', '')}` : ''}</p>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Why choose our bus service */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose Our Bus &amp; Coach Service</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Users, title: 'One Vehicle for the Whole Group', desc: 'Everyone travels together instead of splitting across several private cars.' },
                            { icon: ShieldCheck, title: 'Professional Drivers', desc: 'Experienced drivers for long-distance and group logistics.' },
                            { icon: Building2, title: 'Family, Group & Corporate Options', desc: 'The same private-charter model works for families, tour groups and companies alike.' },
                            { icon: CheckCircle2, title: 'Confirmed Before You Travel', desc: 'Vehicle, route and pricing confirmed with you before the journey, not left to chance.' },
                        ].map((item) => (
                            <div key={item.title} className="text-center">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Fleet / coach options */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <CoachOptionsSection />
            </div>

            {/* 7. How booking works */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">How Booking Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { step: '1', title: 'Choose Route & Date', desc: 'Tell us your route and preferred travel date.' },
                        { step: '2', title: 'Share Passenger/Group Size', desc: 'Let us know how many people are traveling so we can confirm the right coach.' },
                        { step: '3', title: 'Confirm Vehicle & Service', desc: 'We confirm coach availability and the service option that fits your group.' },
                        { step: '4', title: 'Receive Confirmation', desc: 'You receive your booking confirmation and pickup details ahead of travel.' },
                    ].map((s) => (
                        <div key={s.step} className="flex gap-4 bg-white rounded-2xl p-5 border border-gray-100">
                            <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center font-black text-sm shrink-0">{s.step}</div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 8. Travel-day process */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Travel-Day Process</h2>
                <ul className="space-y-3">
                    {[
                        'Your group arrives at the agreed pickup point.',
                        'Passengers check in with the driver/coordinator and luggage is loaded.',
                        'The coach departs on the confirmed route.',
                        'Passengers travel together to the destination, with rest stops as needed on longer routes.',
                        'The coach arrives and passengers disembark at the confirmed drop-off point.',
                    ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700">{step}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* 9. Group transportation + 10. Corporate transportation */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <Users className="w-8 h-8 text-primary mb-4" />
                        <h2 className="text-xl font-bold text-gray-900 mb-3">Group Transportation</h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            For families, weddings, school groups, sports teams, tour groups, religious groups and other large private parties who want to travel together on one vehicle.
                        </p>
                        <ul className="space-y-2">
                            {['Families and extended families', 'Weddings and private celebrations', 'School and educational groups', 'Sports teams', 'Tour and religious groups'].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <Building2 className="w-8 h-8 text-primary mb-4" />
                        <h2 className="text-xl font-bold text-gray-900 mb-3">Corporate Transportation</h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            For companies coordinating employee transportation, business delegations, conferences, events and site visits.
                        </p>
                        <ul className="space-y-2">
                            {['Employee transportation', 'Business delegations', 'Conferences and events', 'Site visits', 'Corporate group travel'].map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 11. Cross-border coach travel */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">GCC Cross-Border Coach Travel</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    We cover a growing set of routes between Saudi Arabia and nearby GCC destinations, including {internationalRoutes.map((r) => r.destination).filter((v, i, a) => a.indexOf(v) === i).join(' and ')}.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Cross-border coach travel involves vehicle eligibility and documentation requirements beyond a standard private car crossing. Availability, permitted vehicle types and border requirements depend on the specific route and are confirmed at the time of booking — this is not a standing guaranteed service in the way our private car cross-border routes are. Contact us with your route, date and group size to confirm coach eligibility before finalizing your plans.
                </p>
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-5">
                    <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900">We are a transport provider, not a visa or immigration authority. Border processing time varies and is never guaranteed as fixed.</p>
                </div>
            </section>

            {/* 12. Luggage information */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 flex items-center gap-3"><Luggage className="w-7 h-7 text-primary" /> Luggage</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Luggage allowance is confirmed during booking based on the selected coach and passenger count.
                </p>
            </section>

            {/* 13. Documents / border information */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 flex items-center gap-3"><FileText className="w-7 h-7 text-primary" /> Documents &amp; Border Information</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    For any cross-border route, every passenger is responsible for carrying a valid passport and the correct visa or entry permission for their nationality and residency status — requirements vary by passenger and by destination, so confirm eligibility before booking.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Border processing time isn't fixed and can vary by day, time and season. See the individual route page for the specific border crossing used and route-specific details.
                </p>
            </section>

            {/* 14. FAQ */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
                <MicroSemanticFAQ contextName="Bus &amp; Coach Transportation" faqs={hubFaqs.map((f) => ({ ...f, perspectives: [] }))} />
            </div>

            {/* 15. Final booking CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <div>
                        <h3 className="text-2xl font-black mb-2">Book Your Bus / Coach</h3>
                        <p className="text-gray-400">Send your route, travel date and group size via WhatsApp for a quote.</p>
                    </div>
                    <a href={whatsappHref} target="_blank" rel="nofollow noopener noreferrer" className="shrink-0">
                        <span className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 font-bold px-7 py-3.5 rounded-2xl transition-colors">
                            WhatsApp Us <ExternalLink className="w-4 h-4" />
                        </span>
                    </a>
                </div>
            </section>
        </div>
    );
}
