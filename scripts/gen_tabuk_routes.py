import os
import random

def generate_tabuk_page(city_name, distance, time):
    slug = f"tabuk-{city_name.lower().replace(' ', '-')}"
    
    # Natural variations following the style rules (no "embark", "delve", "seamless", etc.)
    intro_variations = [
        f"Heading out from Tabuk to {city_name}? Our private car service gets you there reliably. We focus on direct trips across Saudi Arabia for families and professionals. You can skip the crowded buses and long airport waits. We pick you up right from your door in Tabuk and drive you straight to your destination in {city_name}. It is a straightforward way to travel without the usual stress of finding transport.",
        f"If you need a ride from Tabuk to {city_name}, we have you covered. Our local drivers know the roads well and handle the long stretch of highway for you. We provide clean, modern vehicles for the {distance} trip. You don't have to worry about schedules or luggage limits. Just book your time, and we will show up at your house or hotel in Tabuk to start the drive to {city_name}.",
        f"Travel from the northern region of Tabuk down to {city_name} with a driver who knows the way. We offer private transfers for people who value their time and space. The drive to {city_name} is long, so we make sure the car is comfortable and the AC is cold. Our service is built for locals and visitors who want a simple, direct trip from point A to point B without any hidden fees.",
        f"Booking a private car from Tabuk to {city_name} is the most convenient way to handle the {distance} journey. Avoid the hassle of shared taxis or fixed bus routes. We provide a door-to-door service that caters to your specific needs. Whether you are traveling for a family visit or a business commitment in {city_name}, our chauffeurs ensure a smooth ride on the open road.",
        f"Your trip from Tabuk to {city_name} starts with a punctual pickup. We understand that long-distance travel requires a vehicle you can trust. Our fleet is ready to take you across the {distance} between these cities in complete privacy. No sharing with strangers, just a direct drive from your Tabuk location to your drop-off point in {city_name}."
    ]
    
    why_chooose_variations = [
        f"A private taxi gives you control over your trip. You pick the departure time that works for you. If you need to stop for coffee, a meal, or prayer, just tell the driver. We stop at clean service stations along the way. Your luggage stays safe in the trunk, and you don't have to carry heavy bags through stations. It is a quiet, private way for your family to get to {city_name}.",
        f"People pick our service because it is easy. We come to you in Tabuk. There is no need to find a taxi to get to a bus station or airport. You sit in a spacious SUV or sedan and relax until you arrive in {city_name}. For groups of four to seven people, our price is very fair compared to buying several plane tickets. Plus, you get dropped off exactly at your hotel gate.",
        f"Safety is our main focus for every long drive. Our cars are checked often and our drivers are experienced with Saudi highway conditions. We provide a calm environment where you can sleep or handle work while we drive to {city_name}. You get a fixed price upfront, so there are no surprises. It is a dependable choice for anyone needing a long-distance transfer starting from the Tabuk area.",
        f"Our professional drivers prioritize your comfort above all else. During the {time} drive from Tabuk, you can enjoy a climate-controlled cabin and plenty of legroom. We use modern vehicles that are built for the local heat and long desert stretches. It is far more restful than driving yourself or using a crowded public bus to reach {city_name}.",
        f"Fixed pricing means you know exactly what you are paying before the trip starts. There are no meters to watch or surge prices to worry about. This transparency is why many residents in Tabuk trust us for their trips to {city_name}. From the moment we pick you up until we arrive at your {city_name} destination, we handle all the logistics of the road."
    ]

    secondary_paragraph_variations = [
        f"We take pride in being reliable. A {distance} drive is quite a distance, so we make sure the cars are in top shape. Our team checks every vehicle before the trip to ensure the AC works perfectly and the tires are good for the highway.",
        f"A long journey of {distance} requires a dependable vehicle. We maintain our fleet specifically for these intercity routes. Every car is cleaned thoroughly before we pick you up in Tabuk, ensuring a fresh environment for your ride to {city_name}.",
        f"The road to {city_name} is straightforward, but it takes time. Our drivers are trained to stay alert and follow all safety speed limits. We prioritize a safe arrival over a fast one, making us a top choice for families moving between Tabuk and the rest of the Kingdom.",
        f"Traveling for {time} can be tiring if you aren't in the right car. That is why we use only high-quality sedans and SUVs for our {city_name} routes. You will find that our door-to-door service is the most relaxing way to manage this long-distance move.",
        f"From the northern borders down towards {city_name}, our service bridges the gap for those who prefer private travel. We avoid the busy terminals and give you a direct route that saves you hours of waiting and multiple transfers."
    ]


    faq_pool = [
        {
            "q": f"How long is the drive from Tabuk to {city_name}?",
            "a": f"It usually takes about {time}. The distance is close to {distance}. We use the main highways and keep a steady pace to get you there on time."
        },
        {
            "q": f"Can I book a ride at night?",
            "a": "Yes. We work 24 hours a day. If you need to leave Tabuk late at night or very early in the morning, we can arrange that for you."
        },
        {
            "q": f"Where do we stop for food on the way to {city_name}?",
            "a": f"We stop at good service stations like SASCO. During the {distance} trip, you can ask the driver to stop whenever you need a break for a meal or prayer."
        },
        {
            "q": "Is the price for the whole car?",
            "a": f"Yes. The price we give you is for the private vehicle and driver. You don't share the ride with strangers on your way to {city_name}."
        },
        {
            "q": "What vehicles do you have available?",
            "a": "We have standard cars like the Camry, family SUVs like the GMC Yukon, and larger vans like the Toyota Hiace for big groups."
        },
        {
            "q": f"Will you pick me up from the Tabuk airport?",
            "a": f"Yes. Just give us your flight details. Your driver will meet you at the Tabuk airport and take you directly to {city_name}."
        },
        {
            "q": "Do I need to pay extra for luggage?",
            "a": "No. As long as your bags fit in the vehicle you booked, there are no extra charges for luggage on the trip."
        }
    ]

    intro = random.choice(intro_variations)
    why = random.choice(why_chooose_variations)
    secondary = random.choice(secondary_paragraph_variations)
    selected_faqs = random.sample(faq_pool, 5)

    template = """import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, CheckCircle2, Car, Users, DollarSign, Shield, ArrowRight, Navigation } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import EntityTrustSignal from '@/components/seo/EntityTrustSignal';

export const metadata: Metadata = {
    title: 'Tabuk to {{CITY}} Taxi | Private Car Service {{DISTANCE}} | Fixed Price',
    description: 'Book a private taxi from Tabuk to {{CITY}}. Reliable {{TIME}} drive with professional drivers. Fixed rates, door-to-door service, and comfortable SUVs for families.',
    keywords: ['Tabuk to {{CITY}} taxi', 'taxi from Tabuk to {{CITY}}', 'private transfer Tabuk to {{CITY}}', 'chauffeur Tabuk to {{CITY}}', 'Tabuk to {{CITY}} car with driver'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/routes/{{SLUG}}/',
    },
    openGraph: {
        title: 'Tabuk to {{CITY}} Taxi | Private Transfer - Fixed Price',
        description: 'Reliable {{DISTANCE}} drive. Book a comfortable ride from Tabuk to {{CITY}}. Professional service available 24/7.',
        url: 'https://taxiserviceksa.com/routes/{{SLUG}}/',
        type: 'website',
    },
};

export default function Tabuk{{COMPONENT_NAME}}RoutePage() {
    const routeDetails = [
        { label: 'Distance', value: '{{DISTANCE}}', icon: Navigation },
        { label: 'Travel Time', value: '{{TIME}}', icon: Clock },
        { label: 'Price', value: 'Fixed Rate', icon: DollarSign },
        { label: 'Availability', value: '24/7 Service', icon: CheckCircle2 },
    ];

    const routeSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAction",
        "name": "Taxi from Tabuk to {{CITY}}",
        "fromLocation": {
            "@type": "Place",
            "name": "Tabuk",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tabuk",
                "addressCountry": "SA"
            }
        },
        "toLocation": {
            "@type": "Place",
            "name": "{{CITY}}",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "{{CITY}}",
                "addressCountry": "SA"
            }
        },
        "distance": "{{DISTANCE}}"
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Script
                id="route-schema-{{SLUG}}"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
            />

            <Hero
                images={['/locations/tabuk.webp', '/hero-slide-3.webp']}
                h1Text="Tabuk to {{CITY}} Taxi"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-4 py-2 rounded-lg inline-block decoration-clone leading-snug">
                        Tabuk → {{CITY}}
                    </span>
                }
                subtitle="Private Car Service - Book Your Ride"
                location="{{TIME}} | Fixed Rates | Local Drivers"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Link href="/booking/?route={{SLUG}}">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-7 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 group w-full sm:w-auto">
                            Book Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </Hero>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 underline decoration-primary decoration-4 underline-offset-8">Travel from Tabuk to {{CITY}}</h2>
                        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
                            <p>{{INTRO}}</p>
                            <p>{{SECONDARY}}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {routeDetails.map((detail, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200 shadow-sm">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                    <detail.icon className="w-8 h-8 text-black" />
                                </div>
                                <div className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">{detail.label}</div>
                                <div className="text-2xl font-bold text-gray-900">{detail.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden mb-16">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Why Travelers Choose Our Service</h3>
                                <p className="text-gray-300 leading-relaxed">{{WHY}}</p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">Local Knowledge</h4>
                                        <p className="text-sm text-gray-400">Our drivers know the best routes and safe rest points between Tabuk and {{CITY}}.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <DollarSign className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold mb-1 text-lg">No Hidden Fees</h4>
                                        <p className="text-sm text-gray-400">The price we agree on is what you pay. No extra charges for highway tolls or fuel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Available Cars for Your Trip</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: 'Toyota Camry', type: 'Standard Sedan', pax: '1-4' },
                                { name: 'Hyundai Staria', type: 'Family Van', pax: '1-7' },
                                { name: 'GMC Yukon', type: 'Premium SUV', pax: '1-7' },
                                { name: 'Toyota Hiace', type: 'Minibus', pax: '1-12' }
                            ].map((v, i) => (
                                <div key={i} className="bg-white border-2 border-gray-50 rounded-[2rem] p-8 shadow-sm hover:border-primary transition-all group">
                                    <Car className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="font-bold text-xl mb-1">{v.name}</h4>
                                    <p className="text-sm text-gray-400 uppercase font-bold tracking-tighter mb-4">{v.type}</p>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <Users className="w-4 h-4 text-primary" /> {v.pax} Passengers
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                        <div className="bg-primary/5 p-10 rounded-[3rem] border-2 border-primary/10">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Clock className="text-primary" /> Booking is Simple</h3>
                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">01</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Get a Quote</h4>
                                        <p className="text-gray-600 text-sm">Send us a message on WhatsApp or use our form.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">02</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Confirm Vehicle</h4>
                                        <p className="text-gray-600 text-sm">Pick the car that fits your group size and luggage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <span className="text-4xl font-black text-primary/30 shrink-0">03</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Meet the Driver</h4>
                                        <p className="text-gray-600 text-sm">We show up at your gate in Tabuk at the right time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <EntityTrustSignal 
                                brandName="TaxiServiceKSA"
                                description="Reliable intercity transfers for families traveling from Tabuk across the Kingdom."
                                foundingDate="2016"
                                metrics={[
                                    { label: 'Verified', value: '100%', icon: Shield },
                                    { label: 'Support', value: '24/7', icon: Clock }
                                ]}
                            />
                            <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
                                <h4 className="font-bold mb-4 flex items-center gap-2 text-primary"><MapPin /> Door-to-Door</h4>
                                <p className="text-sm text-gray-400">Skip the taxi wait. We go from your house in Tabuk directly to your hotel in {{CITY}}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MicroSemanticFAQ
                faqs={[
{{FAQ_SECTION}}
                ]}
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready to go to {{CITY}}?</h2>
                    <p className="text-gray-400 mb-10 text-lg">Contact us now to get your fixed price and book your driver.</p>
                    <Link href="/booking/?route={{SLUG}}">
                        <Button size="lg" className="bg-primary text-black hover:bg-white font-black text-xl px-12 py-9 h-auto rounded-[2rem] shadow-2xl transition-all transform hover:-translate-y-1">
                            Book Your Car Now
                        </Button>
                    </Link>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
                <RelatedLocations currentCity="Tabuk" />
            </div>
        </div>
    );
}"""

    faq_section = ""
    for faq in selected_faqs:
        faq_section += f"""                    {{
                        question: \"{faq['q']}\",
                        shortAnswer: \"Verified\",
                        detailedAnswer: \"{faq['a']}\",
                        perspectives: []
                    }},\n"""

    page_code = template.replace("{{CITY}}", city_name) \
                       .replace("{{DISTANCE}}", distance) \
                       .replace("{{TIME}}", time) \
                       .replace("{{SLUG}}", slug) \
                       .replace("{{COMPONENT_NAME}}", city_name.replace(' ', '').replace("'", "").replace("-", "")) \
                       .replace("{{INTRO}}", intro) \
                       .replace("{{WHY}}", why) \
                       .replace("{{SECONDARY}}", secondary) \
                       .replace("{{FAQ_SECTION}}", faq_section.strip())

    return page_code


cities = [
    ("Makkah", "1030 km", "10-11 Hours"),
    ("Madinah", "680 km", "6.5-7 Hours"),
    ("Riyadh", "1280 km", "12-13 Hours"),
    ("Jeddah", "920 km", "9-10 Hours"),
    ("NEOM", "180 km", "2-2.5 Hours"),
    ("AlUla", "330 km", "3.5-4 Hours"),
    ("Hail", "660 km", "6-7 Hours"),
    ("Abha", "1450 km", "14-15 Hours"),
    ("Jizan", "1650 km", "16-17 Hours"),
    ("Najran", "1750 km", "17-18 Hours"),
    ("Taif", "1050 km", "10-11 Hours"),
    ("Yanbu", "600 km", "6-6.5 Hours"),
    ("Al Khobar", "1550 km", "14-15 Hours"),
    ("Dammam", "1530 km", "14-15 Hours"),
    ("Buraidah", "910 km", "9-10 Hours"),
    ("Sakaka", "440 km", "4-4.5 Hours"),
    ("Arar", "640 km", "6-6.5 Hours"),
    ("Jubail", "1500 km", "14-15 Hours"),
    ("Al Bahah", "1180 km", "11-12 Hours"),
    ("Al Majma'ah", "1100 km", "10-11 Hours"),
    ("Hofuf", "1350 km", "13-14 Hours"),
    ("Khafji", "1350 km", "13-14 Hours"),
    ("Qurayyat", "400 km", "4-4.5 Hours"),
    ("Turaif", "580 km", "5.5-6 Hours"),
    ("Duba", "180 km", "2 Hours"),
    ("Umluj", "480 km", "4.5-5 Hours"),
    ("Hafar Al Batin", "1050 km", "10-11 Hours"),
    ("Al Khafji", "1400 km", "14-15 Hours"),
    ("Rabigh", "780 km", "7.5-8 Hours"),
    ("Al Lith", "1100 km", "11-12 Hours"),
    ("Al Wajh", "330 km", "3.5 Hours"),
    ("Khulais", "850 km", "8.5 Hours"),
    ("Thadiq", "1150 km", "11 Hours"),
    ("Zulfi", "1050 km", "10-11 Hours"),
    ("Dariya", "1250 km", "12 Hours"),
    # New Cities Added
    ("Al-Qunfudhah", "1200 km", "11-12 Hours"),
    ("Bishah", "1400 km", "13-14 Hours"),
    ("Mahad al-Dhahab", "850 km", "8-9 Hours"),
    ("Afif", "1050 km", "10-11 Hours"),
    ("Dawadmi", "1150 km", "11-12 Hours"),
    ("Wadi ad-Dawasir", "1550 km", "15-16 Hours"),
    ("Sharurah", "2100 km", "20-22 Hours"),
    ("Baljurashi", "1250 km", "12-13 Hours"),
    ("Sabya", "1600 km", "15-17 Hours"),
    ("Abu Arish", "1630 km", "16-17 Hours"),
    ("Samtah", "1680 km", "16-18 Hours"),
    ("Unaizah", "850 km", "8-9 Hours"),
    ("Al-Rass", "820 km", "8 Hours"),
    ("Al-Kharj", "1350 km", "13-14 Hours"),
    ("Al-Muzahmiyya", "1300 km", "12-13 Hours"),
    ("Al-Quway'iyah", "1200 km", "11-12 Hours"),
    ("Huraymila", "1230 km", "12 Hours"),
    ("Rumah", "1350 km", "13 Hours"),
    ("Al-Ghat", "1000 km", "9-10 Hours"),
    ("Al-Bukayriyah", "880 km", "8-9 Hours"),
    ("Al-Badai", "860 km", "8 Hours"),
    ("Al-Midhnab", "920 km", "9 Hours"),
    ("Al-Uyun", "1500 km", "14 Hours"),
    ("Al-Jafr", "1520 km", "14-15 Hours"),
    ("Al-Mubarraz", "1480 km", "14 Hours"),
    ("Buqayq", "1550 km", "14-15 Hours"),
    ("Al-Nairyah", "1450 km", "14 Hours"),
    ("Tayma", "260 km", "2.5-3 Hours"),
    ("Al-Bad", "320 km", "3 Hours"),
    ("Haql", "230 km", "2.5 Hours"),
    ("Sharma", "150 km", "1.5-2 Hours"),
    ("Magna", "240 km", "2.5 Hours"),
    ("Al Rais", "650 km", "6-7 Hours"),
    ("Thuwal", "880 km", "8.5 Hours"),
    ("KAEC", "850 km", "8 Hours"),
    ("Masturah", "750 km", "7-8 Hours"),
    ("Dhahban", "980 km", "9.5 Hours"),
    ("Qilwah", "1280 km", "12-13 Hours"),
    ("Al Makhwah", "1250 km", "12-13 Hours"),
    ("Al Namas", "1350 km", "13-14 Hours"),
    ("Tanuma", "1380 km", "14 Hours"),
    ("Bareq", "1450 km", "14-15 Hours"),
    ("Al Majardah", "1420 km", "14 Hours")
]

base_path = "d:/Taxi KSA/taxiksa/app/(main)/routes"

for city, distance, time in cities:
    slug = f"tabuk-{city.lower().replace(' ', '-')}"
    dir_path = os.path.join(base_path, slug)
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)
    
    file_path = os.path.join(dir_path, "page.tsx")
    content = generate_tabuk_page(city, distance, time)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print(f"Generated {len(cities)} routes starting from Tabuk with natural human writing style. (Extended List)")
