const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'app', '(main)', 'routes');

const templates = [
    { from: 'Dubai', to: 'Riyadh', distance: '1000 km', time: '10-12 hours', price: '2500' },
    { from: 'Riyadh', to: 'Dubai', distance: '1000 km', time: '10-12 hours', price: '2500' },
    { from: 'Dubai', to: 'Dammam', distance: '850 km', time: '8-10 hours', price: '2000' },
    { from: 'Dammam', to: 'Dubai', distance: '850 km', time: '8-10 hours', price: '2000' },
    { from: 'Abu Dhabi', to: 'Riyadh', distance: '900 km', time: '9-11 hours', price: '2300' },
    { from: 'Riyadh', to: 'Abu Dhabi', distance: '900 km', time: '9-11 hours', price: '2300' },
    { from: 'Abu Dhabi', to: 'Dammam', distance: '750 km', time: '7-9 hours', price: '1800' },
    { from: 'Dammam', to: 'Abu Dhabi', distance: '750 km', time: '7-9 hours', price: '1800' },

    { from: 'Doha', to: 'Riyadh', distance: '600 km', time: '6-8 hours', price: '1500' },
    { from: 'Riyadh', to: 'Doha', distance: '600 km', time: '6-8 hours', price: '1500' },
    { from: 'Doha', to: 'Dammam', distance: '400 km', time: '4-5 hours', price: '1000' },
    { from: 'Dammam', to: 'Doha', distance: '400 km', time: '4-5 hours', price: '1000' },

    { from: 'Kuwait', to: 'Riyadh', distance: '650 km', time: '6-8 hours', price: '1600' },
    { from: 'Riyadh', to: 'Kuwait', distance: '650 km', time: '6-8 hours', price: '1600' },
    { from: 'Kuwait', to: 'Dammam', distance: '400 km', time: '4-5 hours', price: '1000' },
    { from: 'Dammam', to: 'Kuwait', distance: '400 km', time: '4-5 hours', price: '1000' },

    { from: 'Bahrain', to: 'Riyadh', distance: '450 km', time: '4-6 hours', price: '1200' },
    { from: 'Riyadh', to: 'Bahrain', distance: '450 km', time: '4-6 hours', price: '1200' },
    { from: 'Bahrain', to: 'Dammam', distance: '90 km', time: '1.5-2 hours', price: '450' },

    { from: 'Amman', to: 'Riyadh', distance: '1400 km', time: '14-16 hours', price: '3500' },
    { from: 'Riyadh', to: 'Amman', distance: '1400 km', time: '14-16 hours', price: '3500' }
];

function generatePageContent(route) {
    const fromSlug = route.from.toLowerCase().replace(/\s+/g, '-');
    const toSlug = route.to.toLowerCase().replace(/\s+/g, '-');
    const title = `Taxi ${route.from} to ${route.to}`;
    const desc = `Book a premium taxi from ${route.from} to ${route.to}. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service across the GCC.`;
    const canonical = `https://taxiserviceksa.com/routes/${fromSlug}-${toSlug}/`;

    return `import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {
    title: '${title} | VIP Cross-Border Transfer',
    description: '${desc}',
    keywords: ['Taxi ${route.from} to ${route.to}', '${route.from} to ${route.to} transfer', 'cross border taxi Saudi Arabia', 'VIP transport ${route.from} ${route.to}'],
    alternates: {
        canonical: '${canonical}',
    },
    openGraph: {
        title: '${title}',
        description: '${desc}',
        url: '${canonical}',
        type: 'website',
    },
};

export default function ${route.from.replace(/\s+/g, '')}${route.to.replace(/\s+/g, '')}RoutePage() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "${title}",
        "provider": {
            "@type": "TransportationService",
            "name": "TaxiServiceKSA"
        },
        "areaServed": [
            { "@type": "City", "name": "${route.from}" },
            { "@type": "City", "name": "${route.to}" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cross-Border Transfers",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "One Way Transfer",
                        "description": "Direct drop-off from ${route.from} to ${route.to}."
                    },
                    "price": "${route.price}",
                    "priceCurrency": "SAR"
                }
            ]
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-${fromSlug}-${toSlug}"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={images}
                h1Text="${title}"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }
                subtitle="Seamless VIP Transfers: ${route.from} to ${route.to}"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup=${route.from}&dropoff=${route.to}">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Ride (${route.price} SAR)
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966569487569?text=Hello,%20I%20want%20to%20book%20a%20taxi%20from%20${route.from}%20to%20${route.to}">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            WhatsApp Booking
                        </Button>
                    </a>
                </div>
            </Hero>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-emerald-800 font-bold uppercase tracking-wider text-sm">International Border</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                The Premium Way from ${route.from} to ${route.to}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Traveling between ${route.from} and ${route.to} by road is a popular option for families, businessmen, and GCC residents. The distance is approximately ${route.distance}, and the journey typically takes ${route.time}.
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
                                    <span className="font-semibold text-gray-800">${route.time} Journey</span>
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
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Journey Highlights</h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Seamless Door-to-Door Service</h4>
                                        <p className="text-sm text-gray-500">We pick you up from your exact location in ${route.from} and drop you directly at your destination in ${route.to}.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Custom Border Procedures</h4>
                                        <p className="text-sm text-gray-500">Our drivers are experienced with GCC borders, assisting you through passport control quickly and smoothly.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-primary font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Rest Stops on Demand</h4>
                                        <p className="text-sm text-gray-500">Take breaks whenever you want. We stop at hygienic service facilities along the highway for refreshments and prayer.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <TravelConsensus
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="${route.from === 'Riyadh' || route.from === 'Dammam' ? route.from : 'Riyadh'}" />
            </div>

            <MicroSemanticFAQ
                faqs={[
                    {
                        question: "How long does a taxi take from ${route.from} to ${route.to}?",
                        shortAnswer: "${route.time}",
                        detailedAnswer: "The total driving time is around ${route.time}. Please note that border crossing times can vary between 30 minutes to 2 hours depending on the season, weekends, and time of day.",
                        perspectives: []
                    },
                    {
                        question: "What vehicle options do you have for this route?",
                        shortAnswer: "SUVs & Sedans",
                        detailedAnswer: "We offer comfortable sedans for 1-2 passengers and premium SUVs (like GMC Yukon or Chevy Suburban) which are highly recommended for the long ${route.distance} journey.",
                        perspectives: []
                    },
                    {
                        question: "Is the border vehicle insurance included in the price?",
                        shortAnswer: "Yes",
                        detailedAnswer: "Yes, our quoted price of ${route.price} SAR includes the vehicle crossing insurance and toll fees.",
                        perspectives: []
                    }
                ]}
            />
        </div>
    );
}
`;
}

templates.forEach(route => {
    const fromSlug = route.from.toLowerCase().replace(/\s+/g, '-');
    const toSlug = route.to.toLowerCase().replace(/\s+/g, '-');
    const routeDir = path.join(baseDir, `${fromSlug}-${toSlug}`);
    
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }
    
    const filePath = path.join(routeDir, 'page.tsx');
    fs.writeFileSync(filePath, generatePageContent(route), 'utf8');
    console.log(`Created ${filePath}`);
});
