import Link from 'next/link';
import {
    ArrowRight, CheckCircle2, AlertTriangle, Bus, Users,
    Building2, MapPin, Luggage, FileText, ExternalLink, Route as RouteIcon, Clock,
} from 'lucide-react';

import JsonLdBreadcrumb from '@/components/seo/JsonLdBreadcrumb';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import CoachOptionsSection from '@/components/bus/CoachOptionsSection';
import { getBusRoute, VERIFIED_COACH, type BusRoute } from '@/data/busRoutes';

interface BusRouteTemplateProps {
    route: BusRoute;
}

// Shared structural template for /bus/{slug}/ route pages. Every route in this
// initial batch is international, so the border section always renders — but the
// component is written to support a future domestic route (isInternational: false)
// without changes, matching how the /distance/ template handles the same split.
export default function BusRouteTemplate({ route }: BusRouteTemplateProps) {
    const faqItems = route.faqs.map((f) => ({
        question: f.question,
        shortAnswer: f.shortAnswer,
        detailedAnswer: f.detailedAnswer,
        perspectives: [],
    }));

    const whatsappHref = `https://wa.me/966590209905?text=${encodeURIComponent(`Hello, I want a quote for a bus/coach from ${route.origin} to ${route.destination}.`)}`;

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: route.h1,
        description: route.metaDescription,
        serviceType: 'Bus and Coach Charter Transportation',
        provider: {
            '@type': 'Organization',
            name: 'Taxi Service KSA',
            url: 'https://taxiserviceksa.com',
        },
        areaServed: [
            { '@type': 'City', name: route.originFull },
            { '@type': route.isInternational ? 'Country' : 'City', name: route.destinationFull },
        ],
        url: `https://taxiserviceksa.com/bus/${route.slug}/`,
    };

    const relatedBusRoutes = route.relatedBusSlugs
        .map((slug) => getBusRoute(slug))
        .filter((r): r is BusRoute => Boolean(r));

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdBreadcrumb
                items={[
                    { name: 'Home', item: '/' },
                    { name: 'Bus', item: '/bus' },
                    { name: route.h1, item: `/bus/${route.slug}` },
                ]}
            />
            <script
                id={`${route.slug}-bus-schema`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Header — H1 + hero booking CTA, above the fold */}
            <section className="bg-gray-900 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Bus &amp; Coach Transportation</span>
                    <h1 className="text-3xl sm:text-5xl font-black mt-4 mb-6 leading-tight">
                        {route.h1}
                    </h1>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        Private coach and group transportation from {route.origin} to {route.destination}, arranged for families, companies and groups.{' '}
                        {route.isInternational && `This is a cross-border route${route.borderCrossingName ? ` via ${route.borderCrossingName}` : ''}.`}
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
                                WhatsApp Quote
                            </span>
                        </a>
                    </div>
                    <p className="text-white/40 text-xs mt-6 font-bold uppercase tracking-widest">Figures last checked: {route.lastVerified}</p>
                </div>
            </section>

            {/* Quick route summary */}
            <div className="-mt-8 sm:-mt-10 relative z-10 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
                    {[
                        { icon: MapPin, label: 'Departure', value: route.origin },
                        { icon: RouteIcon, label: 'Destination', value: route.destination },
                        { icon: Bus, label: 'Transport Type', value: 'Private Coach Charter' },
                        { icon: Users, label: 'Booking Style', value: 'Private, pre-arranged' },
                        ...(route.journeyDurationRange ? [{ icon: Clock, label: 'Approx. Journey', value: route.journeyDurationRange.replace('approximately ', '~').replace(', before border processing', '') }] : []),
                        { icon: Luggage, label: 'Luggage', value: 'Confirmed at booking' },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-3">
                                <stat.icon className="w-6 h-6 text-primary" />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-1">{stat.label}</span>
                            <span className="text-base sm:text-lg font-black text-gray-900 leading-tight">{stat.value}</span>
                        </div>
                    ))}
                </div>
                <p className="text-center text-xs text-gray-400 mt-4 max-w-2xl mx-auto">
                    Figures above are estimates for planning purposes. This is a private coach/group charter arranged on request — not a fixed daily scheduled service.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* About the route */}
                <section className="py-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">About the {route.origin} to {route.destination} Route</h2>
                    {route.aboutRouteParagraphs.map((p, i) => (
                        <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">{p}</p>
                    ))}
                    {route.distanceRange && (
                        <p className="text-gray-500 text-sm">
                            Road distance is {route.distanceRange}, {route.journeyDurationRange ? `with ${route.journeyDurationRange}` : ''}. This is a road-distance estimate for planning, not a promised transfer time.
                        </p>
                    )}
                </section>

                {/* Bus service options */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Bus &amp; Coach Service Options</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        This route is arranged as a private coach charter — the whole vehicle is booked for your group rather than sold as individual seats.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <Users className="w-5 h-5 text-primary mb-2" />
                            <h3 className="font-bold text-gray-900 mb-2">Family / Group Booking</h3>
                            <p className="text-sm text-gray-500">One coach for your whole family or group, traveling together for the full {route.origin} to {route.destination} journey.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <Bus className="w-5 h-5 text-primary mb-2" />
                            <h3 className="font-bold text-gray-900 mb-2">Private Coach Charter</h3>
                            <p className="text-sm text-gray-500">The full coach reserved exclusively for your party — weddings, tour groups, religious groups and large private parties.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                            <Building2 className="w-5 h-5 text-primary mb-2" />
                            <h3 className="font-bold text-gray-900 mb-2">Corporate Transportation</h3>
                            <p className="text-sm text-gray-500">Employee transportation, business delegations and event groups, booked the same way as a family charter.</p>
                        </div>
                    </div>
                </section>

                {/* Fleet */}
                <CoachOptionsSection />

                {/* Pickup and drop-off */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Pickup &amp; Drop-off</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Pickup in {route.origin} and drop-off in {route.destination} are confirmed with you directly when you book, based on your group's exact location and the coach's access requirements at that address. We don't publish a fixed list of pickup points here — tell us your address or venue when requesting a quote and we'll confirm whether direct pickup is possible for a coach of this size.
                    </p>
                </section>

                {/* Border information */}
                {route.isInternational && route.borderParagraphs && (
                    <section className="py-10 border-t border-gray-200">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                            {route.originCountry}–{route.destinationCountry} Border Crossing
                        </h2>
                        {route.borderParagraphs.map((p, i) => (
                            <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4">{p}</p>
                        ))}
                        {route.crossBorderCoachNote && (
                            <div className="mt-6 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-5">
                                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-amber-900">{route.crossBorderCoachNote}</p>
                            </div>
                        )}
                        {route.relatedBorderLink && (
                            <Link
                                href={route.relatedBorderLink.url}
                                className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline mt-4"
                            >
                                {route.relatedBorderLink.name} <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                        <div className="mt-4 flex items-start gap-3 bg-gray-100 border border-gray-200 rounded-2xl p-5">
                            <FileText className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700">
                                We are a transport provider, not a visa or immigration authority. Every passenger is responsible for holding valid, eligible travel documents before departure — confirm your own requirements with the relevant embassy or a licensed visa service.
                            </p>
                        </div>
                    </section>
                )}

                {/* Luggage */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Luggage</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Luggage allowance is confirmed during booking based on the selected coach and passenger count.
                    </p>
                </section>

                {/* How booking works */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">How Booking Works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { step: '1', title: 'Choose Route & Date', desc: `Tell us you'd like to travel from ${route.origin} to ${route.destination} and your preferred date.` },
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

                {/* Travel-day process */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Travel-Day Process</h2>
                    <ul className="space-y-3">
                        {[
                            'Your group arrives at the agreed pickup point in ' + route.origin + '.',
                            'Passengers check in with the driver/coordinator and luggage is loaded.',
                            'The coach departs on the confirmed route' + (route.isInternational ? ', including the border crossing.' : '.'),
                            `Passengers travel together to ${route.destination}, with rest stops as needed on longer routes.`,
                            'The coach arrives and passengers disembark at the confirmed drop-off point.',
                        ].map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                <span className="text-gray-700">{step}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Prefer a private car instead? */}
                <section className="py-10 border-t border-gray-200">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Prefer a Private Car Instead?</h2>
                    {route.relatedTaxiRoute ? (
                        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-gray-600 mb-1">Traveling as an individual, couple or small family? A private car may suit you better than a coach.</p>
                                <p className="text-sm text-gray-500">{route.relatedTaxiRoute.description}</p>
                            </div>
                            <Link href={route.relatedTaxiRoute.url} className="shrink-0">
                                <span className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap">
                                    See {route.relatedTaxiRoute.name} <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </div>
                    ) : (
                        <p className="text-gray-600 text-lg leading-relaxed">{route.relatedTaxiRouteNote}</p>
                    )}
                </section>

                {/* Related Distance guide, only if it exists */}
                {route.relatedDistanceRoute && (
                    <section className="py-10 border-t border-gray-200">
                        <Link
                            href={route.relatedDistanceRoute.url}
                            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                        >
                            {route.origin} to {route.destination} distance and driving time <ArrowRight className="w-4 h-4" />
                        </Link>
                    </section>
                )}
            </div>

            {/* FAQs */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
                <MicroSemanticFAQ contextName={`${route.origin} to ${route.destination} Bus`} faqs={faqItems} />
            </div>

            {/* Related Bus routes */}
            {relatedBusRoutes.length > 0 && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-200 pt-16 mt-4 pb-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Related Bus Routes</h2>
                        <p className="text-gray-500 mt-2">Other coach routes we cover</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {relatedBusRoutes.map((r) => (
                            <Link
                                key={r.slug}
                                href={`/bus/${r.slug}/`}
                                className="group block bg-white hover:bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-primary/50 hover:shadow-md transition-all"
                            >
                                <h3 className="font-bold text-gray-900 text-sm group-hover:text-primary transition-colors">{r.h1}</h3>
                                <p className="text-xs text-gray-500 mt-1">{r.origin} → {r.destination}</p>
                            </Link>
                        ))}
                        <Link
                            href="/bus/"
                            className="group flex items-center justify-center gap-2 bg-gray-50 hover:bg-white p-5 rounded-xl border border-dashed border-gray-200 hover:border-primary/40 transition-all"
                        >
                            <span className="font-bold text-gray-700 group-hover:text-primary transition-colors text-sm">Browse All Bus Routes</span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </div>
            )}

            {/* Final CTA */}
            <section className="pb-20 px-4 sm:px-6 lg:px-8 pt-8">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
                    <div>
                        <h3 className="text-2xl font-black mb-2">Book Your Bus / Coach</h3>
                        <p className="text-gray-400">Send your travel date and group size via WhatsApp for a quote on the {route.origin} to {route.destination} route.</p>
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
