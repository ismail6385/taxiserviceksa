import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Navigation, Shield, Users } from 'lucide-react';

import Hero from '@/components/Hero';
import JsonLdLocation from '@/components/JsonLdLocation';
import { Button } from '@/components/ui/button';
import MicroSemanticFAQ, { SemanticFAQItem } from '@/components/seo/MicroSemanticFAQ';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import RouteFleetSection from '@/components/RouteFleetSection';
import AuthorCard from '@/components/AuthorCard';

export interface AlUlaStat {
    label: string;
    value: string;
}

export interface AlUlaStop {
    name: string;
    detail: string;
}

export interface AlUlaLink {
    href: string;
    label: string;
}

export interface AlUlaTransferPageProps {
    /** Schema + FAQ context name, e.g. "Yanbu to AlUla" */
    contextName: string;
    schemaDescription: string;
    h1: string;
    badge: string;
    subtitle: string;
    heroLine: string;
    /** Booking form prefill values */
    bookFrom: string;
    bookTo: string;
    breadcrumb: AlUlaLink[];
    stats: AlUlaStat[];
    introTitle: string;
    intro: string[];
    stopsTitle: string;
    stops: AlUlaStop[];
    tipsTitle: string;
    tips: string[];
    faqs: SemanticFAQItem[];
    relatedLinks: AlUlaLink[];
    /** For RelatedRoutes; omit to hide */
    routeGraph?: { originSlug: string; currentSlug: string };
}

export default function AlUlaTransferPage(p: AlUlaTransferPageProps) {
    const bookingHref = `/booking/?from=${encodeURIComponent(p.bookFrom)}&to=${encodeURIComponent(p.bookTo)}`;

    return (
        <div className="bg-gray-50 min-h-screen">
            <JsonLdLocation
                cityName={p.contextName}
                description={p.schemaDescription}
                services={[
                    { name: `${p.contextName} Private Transfer`, description: 'Pre-booked private car with a professional driver.' },
                    { name: 'Family SUV & Van', description: 'GMC Yukon, Hyundai Staria and Toyota Hiace for families and groups.' },
                    { name: 'AlUla Airport (ULH) Pickup', description: 'Meet and greet at AlUla International Airport arrivals.' },
                ]}
                image="https://taxiserviceksa.com/alula-hegra-tombs.webp"
            />

            <Hero
                images={['/alula-hegra-tombs.webp', '/alula-hegra.webp', '/hero-slide-3.webp']}
                h1Text={p.h1}
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        {p.badge}
                    </span>
                }
                subtitle={p.subtitle}
                location={p.heroLine}
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href={bookingHref}>
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl w-full sm:w-auto group">
                            Get a Fixed Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex flex-wrap items-center gap-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link>
                        {p.breadcrumb.map((b, i) => (
                            <span key={b.href} className="flex items-center gap-2">
                                <span className="text-gray-400">/</span>
                                {i === p.breadcrumb.length - 1 ? (
                                    <span className="text-gray-900 font-semibold">{b.label}</span>
                                ) : (
                                    <Link href={b.href} className="text-gray-500 hover:text-gray-900">{b.label}</Link>
                                )}
                            </span>
                        ))}
                    </nav>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                        {p.stats.map((s) => (
                            <div key={s.label} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200">
                                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">{s.label}</div>
                                <div className="text-xl md:text-2xl font-bold text-gray-900">{s.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">{p.introTitle}</h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            {p.intro.map((para, i) => <p key={i}>{para}</p>)}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="bg-gray-900 rounded-3xl p-8 text-white">
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                                <Navigation className="w-6 h-6" /> {p.stopsTitle}
                            </h2>
                            <ul className="space-y-5">
                                {p.stops.map((s) => (
                                    <li key={s.name} className="flex gap-3">
                                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <div>
                                            <div className="font-bold">{s.name}</div>
                                            <div className="text-sm text-gray-400">{s.detail}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-primary/5 border-2 border-primary/10 rounded-3xl p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Shield className="w-6 h-6 text-primary" /> {p.tipsTitle}
                            </h2>
                            <ul className="space-y-4">
                                {p.tips.map((t, i) => (
                                    <li key={i} className="flex gap-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span>{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Clock, title: '1. Send your trip', text: 'Fill the booking form with date, pickup point and number of passengers.' },
                            { icon: Mail, title: '2. Get a fixed quote', text: 'We reply by email with a fixed price for your vehicle. No meter, no surge.' },
                            { icon: Users, title: '3. Meet your driver', text: 'Your driver waits at the pickup point with your name, on time.' },
                        ].map((step) => (
                            <div key={step.title} className="bg-white border border-gray-200 rounded-2xl p-6">
                                <step.icon className="w-8 h-8 text-primary mb-3" />
                                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ contextName={p.contextName} faqs={p.faqs} />

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Book your AlUla transfer</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Send your trip details and we will confirm a fixed price by email. Questions: <a href="mailto:info@taxiserviceksa.com" className="text-primary underline">info@taxiserviceksa.com</a>
                    </p>
                    <Link href={bookingHref}>
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-xl px-12 py-8 h-auto rounded-2xl">
                            Open Booking Form
                        </Button>
                    </Link>
                </div>
            </section>

            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">More AlUla transport</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                    {p.relatedLinks.map((l) => (
                        <Link key={l.href} href={l.href} className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-primary transition-colors">
                            <span className="font-semibold text-gray-900">{l.label}</span>
                            <ArrowRight className="w-4 h-4 text-primary" />
                        </Link>
                    ))}
                </div>
                {p.routeGraph && <RelatedRoutes originSlug={p.routeGraph.originSlug} currentSlug={p.routeGraph.currentSlug} />}
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-12">
                <AuthorCard authorName="Muhammad Ismail" showBio={true} className="border-2 border-gray-100" />
            </div>
        </div>
    );
}
