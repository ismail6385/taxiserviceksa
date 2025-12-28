import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Clock, Car, MapPin, ArrowRight } from 'lucide-react';
import FleetPricing from '@/components/FleetPricing';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import JsonLdFAQ from '@/components/JsonLdFAQ';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'GMC Yukon Taxi Service in Saudi Arabia | 7-Seater Airport Transfer',
    description: 'GMC Yukon taxi service in Saudi Arabia accommodates 7 passengers and 5 large bags. Service includes airport transfers, Umrah transport, and intercity travel. Available 24/7.',
    keywords: ['GMC Yukon taxi service Saudi Arabia', 'luxury SUV taxi KSA', 'GMC Yukon airport transfer', 'chauffeur service Saudi Arabia', 'Umrah luxury taxi'],
    alternates: {
        canonical: '/fleet/gmc-yukon/',
    },
    openGraph: {
        title: 'GMC Yukon Luxury Taxi Service in Saudi Arabia',
        description: 'Experience premium travel with our GMC Yukon chauffeur service. Ideal for Umrah, airport transfers (JED/MED), and VIP city travel.',
        url: 'https://taxiserviceksa.com/fleet/gmc-yukon/',
        images: [{ url: 'https://taxiserviceksa.com/gmc-yukon.webp', alt: 'GMC Yukon Luxury Taxi Saudi Arabia' }],
    },
};

export default function GMCYukonPage() {
    const features = [
        'Luxury leather interior for maximum comfort',
        'Extra legroom perfect for long distances',
        'Dual AC system for Saudi climate',
        'Privacy tinted windows for families',
        'Experienced English-speaking chauffeur',
        'Free WiFi during your ride',
        'USB charging ports for all passengers',
        'Spacious boot for Umrah luggage',
    ];

    const specifications = [
        { label: 'Passengers', value: '7 Adults' },
        { label: 'Luggage', value: '5 Large Bags' },
        { label: 'Service Type', value: 'Luxury Chauffeur' },
        { label: 'Availability', value: '24/7 in KSA' },
    ];

    const idealFor = [
        'VIP Airport Transfers (Jeddah/Madinah)',
        'Family Umrah Pilgrimage Transport',
        'Intercity Travel (Jeddah to Makkah)',
        'Corporate & Business Meetings',
        'Luxury Tourist City Tours',
        'Comfortable Long Distance Rides',
    ];

    const faqs = [
        {
            question: "Does the GMC Yukon taxi service include a driver?",
            answer: "GMC Yukon taxi service in Saudi Arabia includes a professional driver. Drivers speak English and Arabic. Service operates 24/7 for airport transfers and Umrah transport."
        },
        {
            question: "Is the GMC Yukon suitable for families performing Umrah?",
            answer: "GMC Yukon accommodates up to 7 passengers with space for luggage. Vehicle is suitable for Umrah transport between Makkah and Madinah. Privacy tinted windows and dual AC system included."
        },
        {
            question: "How much luggage can the GMC Yukon hold for airport transfers?",
            answer: "GMC Yukon holds 5 large suitcases in the cargo area. Third-row seats fold flat for additional luggage space. Suitable for international travelers at King Abdulaziz Airport (Jeddah)."
        },
        {
            question: "Can I book a GMC Yukon for a trip from Jeddah to Makkah?",
            answer: "GMC Yukon booking is available for Jeddah to Makkah transfers (95 km, approximately 75 minutes). Service includes flight tracking and meet-and-greet at airport arrivals."
        }
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "GMC Yukon Luxury Chauffeur Service",
        "image": "https://taxiserviceksa.com/gmc-yukon.webp",
        "description": "Premium GMC Yukon taxi service in Saudi Arabia for Umrah and airport transfers.",
        "brand": {
            "@type": "Brand",
            "name": "GMC"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://taxiserviceksa.com/fleet/gmc-yukon"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "bestRating": "5",
            "ratingCount": "150"
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <Script
                id="vehicle-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(vehicleSchema) }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <JsonLdFAQ faqs={faqs} />

                {/* Hero Section */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Image - Optimized Alt Text */}
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/gmc-yukon.webp"
                                alt="GMC Yukon luxury taxi service in Saudi Arabia for airport transfers and Umrah"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>

                        {/* Content - Optimized H1 & Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                Premium Chauffeur
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                GMC Yukon Taxi Service in Saudi Arabia
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                GMC Yukon taxi service in Saudi Arabia accommodates 7 passengers with 5 large bags. Service includes <Link href="/locations/jeddah" className="bg-primary text-white hover:text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline">Jeddah airport transfers</Link> and Umrah transport. Vehicle features dual AC system and leather interior.
                            </p>

                            {/* Specifications */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {specifications.map((spec, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                        <div className="text-sm text-gray-500">{spec.label}</div>
                                        <div className="text-lg font-bold text-gray-900">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/booking?vehicle=GMC-Yukon">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold h-14 text-lg">
                                    Book GMC Yukon Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mb-12">
                    <FleetPricing
                        vehicleName="GMC Yukon"
                        colorTheme="primary"
                        prices={[
                            { route: 'Jeddah Airport → Makkah', price: '450' },
                            { route: 'Makkah → Madinah Hotel', price: '850' },
                            { route: 'Makkah → Madinah via Badr Ziyarat', price: '950' },
                            { route: 'Makkah Ziyarat Tour', price: '400' },
                            { route: 'Madinah Hotel → Madinah Airport', price: '250' },
                            { route: 'Madinah Ziyarat Tour', price: '300' },
                            { route: 'Madinah Hotel → Train Station', price: '250' },
                            { route: 'Madinah Hotel → Jeddah Airport', price: '850' },
                            { route: 'Makkah Hotel → Train Station', price: '250' },
                            { route: 'Makkah Hotel → Jeddah Airport', price: '400' },
                            { route: 'Full Day (Fuel + Driver)', price: '1500', highlight: true },
                            { route: 'Per Hour', price: '220', highlight: true },
                        ]}
                    />
                </div>

                {/* Content Section - Semantic H2s */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose GMC Yukon for Your Ride?</h2>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Suitable For Pilgrims, Tourists & Families</h2>
                        <ul className="space-y-4">
                            {idealFor.map((use, index) => (
                                <li key={index} className="flex items-start text-gray-700">
                                    <Car className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                    <span>{use}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-gray-100 text-gray-600 text-sm">
                            <p>
                                Check our <Link href="/locations/makkah" className="bg-primary text-white hover:text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline font-medium">Umrah taxi services</Link> for more details on pilgrim transport options.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">5.0</div>
                        <div className="text-sm text-gray-600 font-medium">Customer Rating</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">7</div>
                        <div className="text-sm text-gray-600 font-medium">Passengers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">5</div>
                        <div className="text-sm text-gray-600 font-medium">Large Bags</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                        <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                        <div className="text-sm text-gray-600 font-medium">Safe & Insured</div>
                    </div>
                </div>

                {/* Expanded SEO Content */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12 prose max-w-none text-gray-700">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">GMC Yukon Chauffeur Service Overview</h2>
                    <p className="mb-4">
                        The <strong>GMC Yukon</strong> stands as the pinnacle of <Link href="/" className="bg-primary text-white hover:text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline">luxury taxi service in Saudi Arabia</Link>. Combining robust performance with a sophisticated interior, it offers an unmatched travel experience. It is the top choice for VIPs and families looking for a reliable <strong>GMC Yukon airport transfer KSA</strong>.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Premium SUV Taxi for Umrah & Tourists</h3>
                    <p className="mb-4">
                        For pilgrims, comfort is key. Our <strong>GMC Yukon taxi service</strong> provides a serene environment perfect for the spiritual journey between <Link href="/locations/makkah" className="bg-primary text-white hover:text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline">Makkah</Link> and <Link href="/locations/madinah" className="bg-primary text-white hover:text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline">Madinah</Link>. With ample luggage space and plush seating, it is the ideal <strong>premium family taxi KSA</strong>. Tourists visiting <Link href="/locations/riyadh" className="bg-primary text-white hover:text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline">Riyadh</Link> also prefer the Yukon for its ability to handle long distances with ease.
                    </p>
                    <p>
                        Our professional drivers ensure your safety and privacy, making us the preferred <strong>chauffeur service Saudi Arabia</strong> provider. Explore our full <Link href="/fleet" className="bg-primary text-white hover:text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline">luxury fleet</Link> to find the perfect vehicle for your needs.
                    </p>
                </div>

                {/* Experience Layer: Captain's Perspective */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6 text-gray-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Captain Abdulrahman</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Senior Fleet Manager • 12 Years Exp.</p>
                            </div>
                        </div>
                        <blockquote className="text-gray-600 italic mb-4">
                            "The Highway 15 (Makkah-Madinah) is long—450km. In a sedan, passengers get tired after 2 hours. The Yukon's suspension swallows the road bumps near the construction zones. Plus, for families buying 10-liter Zamzam bottles, you inevitably need the fold-flat 3rd row. It's the only car where 7 people actually feel like VIPs."
                        </blockquote>
                        <div className="flex gap-2">
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">Route: Highway 15</span>
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">Cargo: Zamzam Compatible</span>
                        </div>
                    </div>

                    <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-primary" />
                                Pilgrim Logistics Advice
                            </h3>
                            <ul className="space-y-3 text-blue-100 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span><strong>Ihram Friendly:</strong> Spacious interiors allow pilgrims to adjust Ihram comfortably without cramping.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span><strong>Privacy Glass:</strong> 80% tint ensures families can rest and remove niqab/hijab comfortably during the 4-hour drive.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span><strong>Climate Mastery:</strong> Tri-zone AC fights the 45°C desert heat, keeping the 3rd row as cool as the front.</span>
                                </li>
                            </ul>
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -bottom-10 -right-10 opacity-10">
                            <Car className="w-48 h-48" />
                        </div>
                    </div>
                </div>

                {/* Cultural Context Link */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-2 rounded-full">
                            <MapPin className="w-5 h-5 text-emerald-700" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 text-sm">Planning a Ziyarat Trip?</h4>
                            <p className="text-gray-600 text-xs">Don't miss the secret history of the Holy City.</p>
                        </div>
                    </div>
                    <Link href="/blog/hidden-makkah-spots" className="text-emerald-700 hover:text-emerald-800 text-sm font-bold flex items-center gap-1 group">
                        Read Hidden Makkah Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm">
                                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Optimized CTA Block */}
                <div className="bg-black rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Experience Luxury?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Book our <strong>GMC Yukon luxury taxi</strong> today for a seamless journey. Instant confirmation available.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            {/* Primary CTA */}
                            <Link href="/booking?vehicle=GMC-Yukon" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                    Book GMC Yukon
                                </Button>
                            </Link>

                            {/* Secondary CTA */}
                            <a href="mailto:taxiserviceksa9988@gmail.com" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                    Email for Availability
                                </Button>
                            </a>
                        </div>

                        {/* Trust Micro-Copy */}
                        <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-400 font-medium">
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary" /> 24/7 Service</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Shield className="w-4 h-4 text-primary" /> Licensed Chauffeurs</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Star className="w-4 h-4 text-primary" /> Top Rated Fleet</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
