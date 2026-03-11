import os
import json

def generate_page_content(route):
    from_slug = route['from'].lower().replace(' ', '-')
    to_slug = route['to'].lower().replace(' ', '-')
    
    # Determine the priority and changefreq based on whether it's an intercity or GCC route
    is_gcc = route.get('is_gcc', False) # Default to False if not present
    priority = "0.9" if is_gcc else "0.8"
    changefreq = "weekly"
    
    # Custom image logic
    images_array = "['/hero-slide-3.webp', '/hero-slide-2.webp', '/jeddah-airport.webp']"
    if 'Dubai' in route['from'] or 'Dubai' in route['to'] or 'Abu Dhabi' in route['from'] or 'Abu Dhabi' in route['to'] or 'Sharjah' in route['from'] or 'Sharjah' in route['to']:
        images_array = "['/locations/dubai.webp', '/hero-slide-3.webp', '/hero-slide-2.webp']"
    elif 'Doha' in route['from'] or 'Doha' in route['to']:
        images_array = "['/locations/doha.webp', '/hero-slide-3.webp', '/hero-slide-2.webp']"

    title = f"Taxi {route['from']} to {route['to']}"
    desc = f"Book a premium taxi from {route['from']} to {route['to']}. Reliable cross-border VIP transfers, comfortable SUVs, and door-to-door service across the GCC."
    canonical = f"https://taxiserviceksa.com/routes/{from_slug}-{to_slug}/"
    
    component_name = (route['from'].replace(' ', '') + route['to'].replace(' ', '') + "RoutePage")
    
    cities_with_airports = ['Riyadh', 'Dammam', 'Jeddah', 'Makkah', 'Madinah']
    related_city = route['from'] if route['from'] in cities_with_airports else 'Riyadh'

    content = f"""import {{ Metadata }} from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {{ Button }} from '@/components/ui/button';
import {{ MapPin, Clock, CheckCircle2, Building2, Globe, ArrowRight }} from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import TravelConsensus from '@/components/seo/TravelConsensus';

export const metadata: Metadata = {{
    title: '{title} | VIP Cross-Border Transfer',
    description: '{desc}',
    keywords: ['Taxi {route['from']} to {route['to']}', '{route['from']} to {route['to']} transfer', 'cross border taxi Saudi Arabia', 'VIP transport {route['from']} {route['to']}'],
    alternates: {{
        canonical: '{canonical}',
    }},
    openGraph: {{
        title: '{title} | VIP Cross-Border Transfer',
        description: '{desc}',
        url: '{canonical}',
        type: 'website',
    }},
}};

export default function {component_name}() {{
    const images = {images_array};

    const routeSchema = {{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "{title}",
        "provider": {{
            "@type": "TransportationService",
            "name": "TaxiServiceKSA"
        }},
        "areaServed": [
            {{ "@type": "City", "name": "{route['from']}" }},
            {{ "@type": "City", "name": "{route['to']}" }}
        ],
        "hasOfferCatalog": {{
            "@type": "OfferCatalog",
            "name": "Cross-Border Transfers",
            "itemListElement": [
                {{
                    "@type": "Offer",
                    "itemOffered": {{
                        "@type": "Service",
                        "name": "One Way Transfer",
                        "description": "Direct drop-off from {route['from']} to {route['to']}."
                    }}
                }}
            ]
        }}
    }};

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-{from_slug}-{to_slug}"
                type="application/ld+json"
                dangerouslySetInnerHTML={{{{ __html: JSON.stringify(routeSchema) }}}}
            />

            <Hero
                images={{images}}
                h1Text="{title}"
                title={{
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        GCC Cross-Border Service
                    </span>
                }}
                subtitle="Seamless VIP Transfers: {route['from']} to {route['to']}"
                location="Door-to-Door Service"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking?pickup={route['from']}&dropoff={route['to']}">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Get Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/966569487569?text=Hello,%20I%20want%20to%20get%20a%20quote%20for%20a%20taxi%20from%20{route['from']}%20to%20{route['to']}">
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-bold text-lg px-10 py-7 rounded-2xl w-full sm:w-auto">
                            WhatsApp Quote
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
                                The Premium Way from {route['from']} to {route['to']}
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Traveling between {route['from']} and {route['to']} by road is a popular option for families, businessmen, and GCC residents. The distance is approximately {route['distance']}, and the journey typically takes {route['time']}.
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
                                    <span className="font-semibold text-gray-800">{route['time']} Journey</span>
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
                                        <p className="text-sm text-gray-500">We pick you up from your exact location in {route['from']} and drop you directly at your destination in {route['to']}.</p>
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
                        points={{[
                            {{
                                topic: "Visas & ID",
                                commonBelief: "Just jump in and go.",
                                reality: "You must have a valid passport, Iqama/GCC ID, and appropriate visas depending on your nationality. The driver assists but cannot issue visas.",
                                truthRange: "Passenger Responsibility",
                                factors: ["Valid Passport", "GCC Visa"]
                            }},
                            {{
                                topic: "Pricing",
                                commonBelief: "It's expensive for groups.",
                                reality: "For families or groups of 4-6 people, a private VIP SUV transfer is often cheaper than buying multiple flight tickets.",
                                truthRange: "Highly Cost-Effective",
                                factors: ["Get Quote For Details", "No Luggage Fees"]
                            }}
                        ]}}
                    />
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations currentCity="{related_city}" />
            </div>

            <MicroSemanticFAQ
                faqs={{[
                    {{
                        question: "How long does a taxi take from {route['from']} to {route['to']}?",
                        shortAnswer: "{route['time']}",
                        detailedAnswer: "The total driving time is around {route['time']}. Please note that border crossing times can vary between 30 minutes to 2 hours depending on the season, weekends, and time of day.",
                        perspectives: []
                    }},
                    {{
                        question: "What vehicle options do you have for this route?",
                        shortAnswer: "SUVs & Sedans",
                        detailedAnswer: "We offer comfortable sedans for 1-2 passengers and premium SUVs (like GMC Yukon or Chevy Suburban) which are highly recommended for the long {route['distance']} journey.",
                        perspectives: []
                    }},
                    {{
                        question: "How can I get a price for this border transfer?",
                        shortAnswer: "Request a Quote",
                        detailedAnswer: "Prices vary based on the vehicle type, number of passengers, and specific locations. Please use our 'Get Quote' button or contact us via WhatsApp to receive an accurate, all-inclusive quote that covers vehicle crossing insurance and toll fees.",
                        perspectives: []
                    }}
                ]}}
            />
        </div>
    );
}}
"""
    return content

coords = {
    'Riyadh': {'lat': 24.7136, 'lon': 46.6753},
    'Dammam': {'lat': 26.3927, 'lon': 49.9777},
    'Jeddah': {'lat': 21.4858, 'lon': 39.1925},
    'Makkah': {'lat': 21.3891, 'lon': 39.8579},
    'Madinah': {'lat': 24.5247, 'lon': 39.5692},
    'Dubai': {'lat': 25.2048, 'lon': 55.2708},
    'Abu Dhabi': {'lat': 24.4539, 'lon': 54.3773},
    'Sharjah': {'lat': 25.3463, 'lon': 55.4209},
    'Doha': {'lat': 25.2854, 'lon': 51.5310},
    'Kuwait': {'lat': 29.3759, 'lon': 47.9774},
    'Bahrain': {'lat': 26.0667, 'lon': 50.5577},
    'Amman': {'lat': 31.9454, 'lon': 35.9284},
    'Muscat': {'lat': 23.5859, 'lon': 58.4059},
}

import math

def calc_distance(lat1, lon1, lat2, lon2):
    R = 6371
    dLat = (lat2 - lat1) * math.pi / 180
    dLon = (lon2 - lon1) * math.pi / 180
    a = math.sin(dLat / 2) * math.sin(dLat / 2) + \
        math.cos(lat1 * math.pi / 180) * math.cos(lat2 * math.pi / 180) * \
        math.sin(dLon / 2) * math.sin(dLon / 2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c

saudi_cities = ['Riyadh', 'Dammam', 'Jeddah', 'Makkah', 'Madinah']
gcc_cities = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Doha', 'Kuwait', 'Bahrain', 'Amman', 'Muscat']

generated_routes = []

for saudi in saudi_cities:
    for gcc in gcc_cities:
        straight_line = calc_distance(coords[saudi]['lat'], coords[saudi]['lon'], coords[gcc]['lat'], coords[gcc]['lon'])
        drive_km = round(straight_line * 1.3)

        if saudi == 'Riyadh' and gcc == 'Dubai': drive_km = 1000
        if saudi == 'Dammam' and gcc == 'Dubai': drive_km = 850
        if saudi == 'Riyadh' and gcc == 'Abu Dhabi': drive_km = 900
        if saudi == 'Dammam' and gcc == 'Abu Dhabi': drive_km = 750
        if saudi == 'Riyadh' and gcc == 'Doha': drive_km = 600
        if saudi == 'Dammam' and gcc == 'Doha': drive_km = 400
        if saudi == 'Riyadh' and gcc == 'Kuwait': drive_km = 650
        if saudi == 'Dammam' and gcc == 'Kuwait': drive_km = 400
        if saudi == 'Riyadh' and gcc == 'Bahrain': drive_km = 450
        if saudi == 'Dammam' and gcc == 'Bahrain': drive_km = 90
        if saudi == 'Riyadh' and gcc == 'Amman': drive_km = 1400

        hours_min = max(1, math.floor(drive_km / 100))
        hours_max = hours_min + 2

        generated_routes.append({
            'from': saudi,
            'to': gcc,
            'distance': f"{drive_km} km",
            'time': f"{hours_min}-{hours_max} hours"
        })
        generated_routes.append({
            'from': gcc,
            'to': saudi,
            'distance': f"{drive_km} km",
            'time': f"{hours_min}-{hours_max} hours"
        })

base_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app', '(main)', 'routes')

for route in generated_routes:
    from_slug = route['from'].lower().replace(' ', '-')
    to_slug = route['to'].lower().replace(' ', '-')
    route_dir = os.path.join(base_dir, f"{from_slug}-{to_slug}")

    if not os.path.exists(route_dir):
        os.makedirs(route_dir)
        
    file_path = os.path.join(route_dir, 'page.tsx')
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(generate_page_content(route))

print(f"Successfully updated {len(generated_routes)} pages via python script.")
