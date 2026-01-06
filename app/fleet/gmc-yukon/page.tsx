import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, CheckCircle2, Star, Shield, Clock, Car, MapPin, ArrowRight, Navigation } from 'lucide-react';
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
    title: 'GMC Yukon VIP Private Transfer Saudi Arabia | Premium Chauffeur',
    description: 'Elite GMC Yukon VIP private transfer and executive chauffeur service in Saudi Arabia. Premium 7-seater SUV for RUH/JED airport transfers and business travel.',
    keywords: ['GMC Yukon VIP transfer', 'luxury SUV chauffeur KSA', 'GMC Yukon Riyadh transfer', 'executive chauffeur service Saudi Arabia', 'GMC Yukon VIP car'],
    alternates: {
        canonical: 'https://transferksa.com/fleet/gmc-yukon/',
    },
    openGraph: {
        title: 'GMC Yukon VIP Private Transfer & Executive Chauffeur',
        description: 'Experience elite executive travel with our premium GMC Yukon chauffeur service. Ideal for Riyadh business, airport transfers, and VIP tours.',
        url: 'https://transferksa.com/fleet/gmc-yukon/',
        images: [{ url: 'https://transferksa.com/gmc-yukon.webp', alt: 'GMC Yukon VIP Private Transfer Saudi Arabia' }],
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
            question: "Does the GMC Yukon VIP transfer service include a chauffeur?",
            answer: "Our GMC Yukon VIP transfer service in Saudi Arabia includes a professional, uniformed chauffeur. Chauffeurs are multilingual (English/Arabic) and trained in executive hospitality."
        },
        {
            question: "Is the GMC Yukon suitable for VIP family travel?",
            answer: "The GMC Yukon accommodates up to 7 passengers in complete luxury. It is perfect for VIP family travel between Riyadh, Makkah, and Madinah. Privacy glass and tri-zone climate control are standard."
        },
        {
            question: "How much luggage can the GMC Yukon hold for airport transfers?",
            answer: "The GMC Yukon comfortably holds 5 large suitcases. For airport transfers at RUH or JED, the third-row seats can be folded to accommodate extra baggage for international travelers."
        },
        {
            question: "Can I book a GMC Yukon for a Riyadh to Makkah transfer?",
            answer: "Yes, the GMC Yukon is our most popular choice for Riyadh to Makkah transfers (9-hour journey). It provides the essential comfort and stability needed for long-distance Saudi travel."
        }
    ];

    const vehicleSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "GMC Yukon Luxury Chauffeur Service",
        "image": "https://transferksa.com/gmc-yukon.webp",
        "description": "Premium GMC Yukon VIP transfer service in Saudi Arabia for Umrah and airport transfers.",
        "brand": {
            "@type": "Brand",
            "name": "GMC"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "SAR",
            "availability": "https://schema.org/InStock",
            "url": "https://transferksa.com/fleet/gmc-yukon"
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
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Image - Optimized Alt Text */}
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src="/gmc-yukon.webp"
                                alt="GMC Yukon VIP private transfer service in Saudi Arabia"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>

                        {/* Content - Optimized H1 & Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block w-fit mb-4">
                                VIP Executive SUV
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                GMC Yukon VIP Private Transfer
                            </h1>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Experience the pinnacle of Saudi road travel with our <strong>GMC Yukon VIP private transfer service</strong>. Tailored for executive business in Riyadh and luxury family travel, our 2025 Yukon fleet delivers unmatched comfort, privacy, and professional chauffeur standards.
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

                            <Link href="/booking/?vehicle=GMC-Yukon">
                                <Button size="lg" className="w-full bg-black hover:bg-gray-800 text-white font-bold h-14 text-lg">
                                    Book VIP Yukon Transfer
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Premium Service Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 py-3 rounded-xl mb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                            <Shield className="w-4 h-4" />
                            OFFICIAL NOTE: We specialize in pre-booked VIP Intercity, Airport, and Full-Day transfers. We do NOT provide local short-distance hailing.
                        </p>
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
                                Check our <Link href="/locations/makkah/" className="bg-primary text-white hover:text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline font-medium">Umrah transfer services</Link> for more details on pilgrim transport options.
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
                        The <strong>GMC Yukon</strong> stands as the pinnacle of <Link href="/" className="bg-primary text-white hover:text-black px-1 rounded hover:bg-primary/80 transition-colors no-underline">VIP private transfer service in Saudi Arabia</Link>. Combining robust performance with a sophisticated interior, it offers an unmatched travel experience. It is the top choice for VIPs and executives looking for a reliable <strong>GMC Yukon airport transfer KSA</strong>.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Premium SUV Chauffeur for Riyadh & Intercity</h3>
                    <p className="mb-4">
                        For business travelers in <Link href="/locations/riyadh/" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">Riyadh</Link>, the Yukon is the standard for professionalism. Our <strong>GMC Yukon VIP transfer service</strong> provides a serene environment perfect for the journey between Riyadh and the Holy Cities. With ample luggage space and plush seating, it is the ideal <strong>premium executive SUV KSA</strong>.
                    </p>
                    <p>
                        Our professional chauffeurs ensure your safety and privacy, making us the preferred <strong>chauffeur service Saudi Arabia</strong> provider. Explore our full <Link href="/fleet/" className="text-gray-900 font-semibold underline decoration-gray-300 hover:decoration-gray-900 underline-offset-4 transition-all">VIP fleet</Link> to find the perfect vehicle for your needs.
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
                            <h4 className="font-bold text-gray-900 text-sm">GMC Yukon - Best for these Routes</h4>
                            <p className="text-gray-600 text-xs text-left">The ultimate comfort for long distances.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/routes/jeddah-makkah/" className="text-emerald-700 hover:text-emerald-800 text-sm font-bold border-b border-emerald-200">Jeddah to Makkah</Link>
                        <Link href="/routes/makkah-madinah/" className="text-emerald-700 hover:text-emerald-800 text-sm font-bold border-b border-emerald-200">Makkah to Madinah</Link>
                        <Link href="/routes/jeddah-taif/" className="text-emerald-700 hover:text-emerald-800 text-sm font-bold border-b border-emerald-200">Jeddah to Taif</Link>
                    </div>
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

                {/* Strategic Internal Links Hub */}
                <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" /> Yukon Service Hubs
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/locations/riyadh/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Riyadh (Business VIP)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/locations/jeddah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Jeddah (Airport)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/locations/makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Makkah (Executive Umrah)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Navigation className="w-5 h-5 text-primary" /> Top Yukon Routes
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/routes/jeddah-makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Jeddah to Makkah (95km)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/routes/makkah-madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Makkah to Madinah (450km)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/routes/" className="text-primary font-bold hover:underline">View All Routes →</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-primary" /> Specialist Services
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services/airport-transfers/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>Airport Meet & Greet</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/umrah-transport/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>VIP Umrah Transport</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/booking/" className="text-primary font-bold hover:underline">Book Your Yukon Now →</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Optimized CTA Block */}
                <div className="bg-black rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Experience VIP Excellence?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Book our <strong>GMC Yukon VIP private transfer</strong> today for a seamless, executive journey. Instant reservation confirmation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            {/* Primary CTA */}
                            <Link href="/booking/?vehicle=GMC-Yukon" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full bg-primary text-white hover:text-black hover:bg-white font-bold text-lg px-10 py-6 h-auto min-w-[200px]">
                                    Book GMC Yukon
                                </Button>
                            </Link>

                            {/* Secondary CTA */}
                            <a href="mailto:info@transferksa.com" className="w-full sm:w-auto">
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
