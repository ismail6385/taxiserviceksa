
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, CityData } from '@/data/cities';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import Script from 'next/script';
import {
    MapPin,
    Car,
    Shield,
    Clock,
    CheckCircle2,
    ArrowRight,
    Plane,
    Star,
    Users
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

interface Props {
    params: {
        city: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const city = cities[params.city];

    if (!city) {
        return {
            title: 'City Not Found',
        };
    }

    return {
        title: city.metaTitle,
        description: city.metaDescription,
        alternates: {
            canonical: `https://taxiserviceksa.com/locations/${city.slug}/`,
        },
        openGraph: {
            title: city.metaTitle,
            description: city.metaDescription,
            url: `https://taxiserviceksa.com/locations/${city.slug}`,
            type: 'website',
        }
    };
}

export async function generateStaticParams() {
    const staticCities = ['jeddah', 'riyadh', 'madinah', 'taif', 'dammam', 'dhahran', 'al-khobar'];
    return Object.keys(cities)
        .filter(city => !staticCities.includes(city))
        .map((city) => ({
            city: city,
        }));
}

export default function LocationPage({ params }: Props) {
    const city: CityData = cities[params.city];

    if (!city) {
        notFound();
    }

    // Dynamic H2 Rotation Logic (Anti-Duplication)
    const h2Variations = [
        `Taxi Services Available in ${city.name}`,
        `${city.name} Taxi for ${city.primaryAudience}`,
        `Airport Transfers to and from ${city.name}`,
        `Why Choose Our Taxi Service in ${city.name}`,
        `Easy Taxi Booking in ${city.name}`
    ];

    // FAQ A/B Rotation Logic
    // For static generation, this will be fixed per build.
    // We use the current time (at build time) to select a set, effectively rotating content on each rebuild.
    const showSetA = new Date().getTime() % 2 === 0;
    const selectedFaqs = showSetA ? city.faqSetA : city.faqSetB;

    // Schema Markup


    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": city.howTo.title,
        "step": city.howTo.steps.map((step, index) => ({
            "@type": "HowToStep",
            "name": step.name,
            "text": step.text,
            "url": `https://taxiserviceksa.com/locations/${city.slug}#step-${index + 1}`
        }))
    };

    // Helper to highlight keywords in green (Programmatic Content Injection)
    const Highlight = ({ text }: { text: string }) => (
        <span className="bg-primary text-white hover:text-black px-1 rounded no-underline">{text}</span>
    );

    return (
        <div className="bg-gray-50 min-h-screen">

            <Script
                id={`howto-schema-${city.slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <JsonLdFAQ faqs={selectedFaqs} />

            {/* Hero Section */}
            <Hero
                h1Text={`Reliable Taxi Service in ${city.name} for Visitors & Locals`}
                title={
                    <span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Taxi Service {city.name}
                    </span>
                }
                subtitle={`Top-Rated ${city.serviceFocus}`}
                location="24/7 Professional Chauffeurs"
            />

            {/* Breadcrumb */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/locations" className="text-gray-500 hover:text-gray-900 transition-colors">
                            Locations
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-900 font-semibold capitalize">{city.name}</span>
                    </nav>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 prose max-w-none text-gray-700">
                        {/* Introduction */}
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{h2Variations[0]}</h2>
                            <p className="lead text-xl text-gray-600 mb-6">{city.description}</p>
                            <p>{city.seoContent.overview}</p>
                        </div>

                        {/* Dynamic Service Section */}
                        <div className="bg-gray-50 p-8 rounded-2xl mb-12 border border-blue-50">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{h2Variations[1]}</h2>
                            <p className="mb-4">
                                Our taxi fleet is specifically equipped to serve {city.primaryAudience}.
                                Whether you are visiting <strong>{city.landmarks[0]}</strong> or need a ride to <strong>{city.landmarks[1]}</strong>, we have you covered.
                            </p>
                            <p>{city.seoContent.services}</p>
                        </div>

                        {/* Why Choose Us */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{h2Variations[3]}</h2>
                            <p>{city.seoContent.whyChoose}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 not-prose">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary w-5 h-5" /> 24/7 Availability
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary w-5 h-5" /> Professional Drivers
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary w-5 h-5" /> Clean Vehicles
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary w-5 h-5" /> Fixed Rates
                                </li>
                            </ul>
                        </div>

                        {/* Contextual Topical Block */}
                        {city.contextualBlock && (
                            <div className="bg-primary/5 p-8 rounded-2xl mb-12 border border-primary/20">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">{city.contextualBlock.title}</h2>
                                <p className="mb-6 text-gray-700 leading-relaxed">
                                    {city.contextualBlock.content}
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 font-medium text-gray-900">
                                    <span className="text-gray-600 font-normal">{city.contextualBlock.internalLink.context}</span>
                                    <Link href={city.contextualBlock.internalLink.url} className="text-black bg-primary px-2 py-0.5 rounded hover:bg-accent/80 transition-colors flex items-center gap-1 group w-max">
                                        {city.contextualBlock.internalLink.text}
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        )}

                        {/* Airport Section */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{h2Variations[2]}</h2>
                            <p>
                                We provide reliable transfers to and from local airports.
                                If you are arriving at an airport near {city.name}, rely on us for a <Highlight text={`airport taxi in ${city.name}`} />.
                                We monitor flight schedules to ensure timely pickups.
                            </p>
                        </div>

                    </div>

                    {/* Right Column: Sidebar & CTA */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Booking Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Taxi in {city.name} Now</h3>
                            <p className="text-gray-600 mb-6">Reliable, safe & affordable rides.</p>

                            {/* Primary CTA (High Intent) */}
                            <Link href="/booking" className="w-full block mb-3">
                                <Button size="lg" className="w-full bg-primary text-white hover:text-black hover:bg-accent/90 font-bold h-12 text-base">
                                    Book {city.name} Ride <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>

                            {/* Secondary CTA (Soft Intent) */}
                            <Link href="/contact" className="w-full block mb-6">
                                <Button variant="outline" className="w-full hover:bg-gray-50 font-bold border-gray-300 h-10 text-sm">
                                    Contact Support
                                </Button>
                            </Link>

                            <div className="space-y-3 text-xs text-gray-500 border-t pt-4">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-primary" /> Availability</span>
                                    <span className="font-semibold text-gray-900">24/7 Service</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2"><Shield className="w-3 h-3 text-primary" /> Safety</span>
                                    <span className="font-semibold text-gray-900">Verified Drivers</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2"><Star className="w-3 h-3 text-primary" /> Rating</span>
                                    <span className="font-semibold text-gray-900">4.9/5 Stars</span>
                                </div>
                            </div>
                        </div>

                        {/* Landmarks Widget */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" /> Key Landmarks
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {city.landmarks.map((landmark, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-primary">•</span> {landmark}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            {/* How It Works Section (Visible HowTo) */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{city.howTo.title}</h2>
                        <p className="text-gray-600">Simple steps to start your journey in {city.name}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {city.howTo.steps.map((step, index) => (
                            <div key={index} id={`step-${index + 1}`} className="relative bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{step.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-black text-center px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-6">Need a Reliable Taxi in {city.name}?</h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Don't wait. Secure your ride with the best taxi service in {city.name} today.
                    </p>
                    <Link href="/booking">
                        <Button className="bg-primary text-white hover:text-black hover:bg-white font-bold px-8 py-6 text-lg rounded-xl">
                            Book {city.name} Taxi
                        </Button>
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">FAQ: Taxi Service in {city.name}</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {selectedFaqs.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Internal Linking Silo */}
            <section className="py-12 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Explore Other Locations</h3>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                            Taxi Service Saudi Arabia
                        </Link>
                        <span className="text-gray-300">|</span>
                        {city.nearbyCities.map((slug, idx) => (
                            <span key={idx} className="flex items-center gap-4">
                                <Link href={`/locations/${slug}/`} className="text-gray-600 hover:text-primary capitalize transition-colors">
                                    Taxi Service in {slug}
                                </Link>
                                {idx < city.nearbyCities.length - 1 && <span className="text-gray-300">|</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
