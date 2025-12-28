"use client";

import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import { Plane, MapPin, Building2, Shield, Clock, Award, Star, CheckCircle2, Users, Car, ArrowRight, Camera, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import JsonLdFAQ from '@/components/JsonLdFAQ';
import TrustedTransportNetwork from '@/components/seo/TrustedTransportNetwork';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import RelatedGuides from '@/components/RelatedGuides';
import { Blog } from '@/lib/blogService';

interface HomeClientProps {
    latestBlogs?: Blog[];
}

export default function HomeClient({ latestBlogs = [] }: HomeClientProps) {
    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    // Enhanced Structured Data with multiple schema types
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "TransportationService", // Changed to TransportationService as requested
        "name": "Taxi Service KSA",
        "url": "https://taxiserviceksa.com",
        "logo": "https://taxiserviceksa.com/logo.png",
        "image": "https://taxiserviceksa.com/hero-image.jpg",
        "description": "Professional taxi service with licensed drivers in Saudi Arabia. Provides airport transfers, Umrah transport, corporate travel, and heritage tours. All vehicles include professional drivers (no self-drive car rental). Service operates in Jeddah, Makkah, Madinah, Riyadh, Taif, AlUla, Yanbu, and Khaybar.",
        "areaServed": "Saudi Arabia",
        "availableLanguage": ["English", "Arabic", "Urdu"],
        "priceRange": "$$",
        "serviceType": "Chauffeur-driven taxi service",
        "knowsAbout": ["Umrah", "Haramain High Speed Railway", "King Abdulaziz International Airport", "Prince Mohammad bin Abdulaziz International Airport"],
        "sameAs": [
            "https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/",
            "https://www.linkedin.com/company/taxi-service-ksa/",
            "https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw",
            "https://www.pinterest.com/taxiserviceksa/",
            "https://twitter.com/TaxiServiceKSA",
            "https://www.instagram.com/taxiserviceksa/"
        ],
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://taxiserviceksa.com/booking"
            },
            "result": {
                "@type": "Reservation",
                "name": "Taxi Booking"
            }
        }
    };

    // High-Quality Images for Hero Slider
    const heroImages = [
        '/makkah-kaaba-night.webp', // Makkah
        '/madinah-prophets-mosque.webp', // Madinah
        '/jeddah-corniche-sunset.webp', // Jeddah
        '/taif-mountains-view.webp', // Taif
        '/alula-hegra-tombs.webp', // AlUla
    ];

    // Services data with RDF Triple structure and Correct Links
    // OPTIMIZED: Titles and descriptions for SEO
    const services = [
        {
            title: "Airport Transfer Service",
            description: "Airport transfers in Saudi Arabia operate 24/7 from King Abdulaziz Airport (Jeddah) and Prince Mohammad Airport (Madinah) to Makkah hotels. Meet-and-greet service at arrivals.",
            rdfTriple: "Airport transfer Jeddah → provides → 24/7 chauffeur service from King Abdulaziz Airport",
            icon: Plane,
            link: "/locations/jeddah",
            price: "From SAR 250"
        },
        {
            title: "Umrah Transport Service",
            description: "Umrah pilgrims use our taxi service for transportation between Makkah, Madinah, and Jeddah Airport. Drivers understand prayer schedules and Haram access routes.",
            rdfTriple: "Umrah taxi → specializes in → comfortable transportation for pilgrims",
            icon: MapPin,
            link: "/locations/makkah",
            price: "From SAR 450"
        },
        {
            title: "Intercity Taxi Service",
            description: "Intercity travel in Saudi Arabia connects AlUla, Taif, Riyadh, and Jeddah. Fixed-rate pricing for long-distance routes. Suitable for tourism and business travel.",
            rdfTriple: "AlUla tour → provides → luxury travel to heritage sites",
            icon: Building2,
            link: "/locations/alula",
            price: "Custom Quote"
        }
    ];

    // Fleet data with Links
    const fleet = [
        {
            name: "GMC Yukon",
            image: "/gmc-yukon.webp",
            passengers: 7,
            luggage: 5,
            features: ["vip taxi saudi arabia", "extra legroom", "luxury suv"],
            link: "/fleet/gmc-yukon"
        },
        {
            name: "Toyota Camry",
            image: "/toyota-camry.webp",
            passengers: 4,
            luggage: 2,
            features: ["reliable city taxi", "ac comfort", "economic ride"],
            link: "/fleet/toyota-camry"
        },
        {
            name: "Hyundai Staria",
            image: "/hyundai-staria.webp",
            passengers: 7,
            luggage: 4,
            features: ["family taxi ksa", "spacious van", "group travel"],
            link: "/fleet/hyundai-staria"
        },
        {
            name: "Toyota Hiace",
            image: "/toyota-hiace.webp",
            passengers: 11,
            luggage: 16,
            features: ["umrah group taxi", "pilgrim transport", "large van"],
            link: "/fleet/toyota-hiace"
        },
        {
            name: "Toyota Coaster",
            image: "/toyota-coaster.webp",
            passengers: 17,
            luggage: 20,
            features: ["tourist bus ksa", "corporate transport", "large groups"],
            link: "/fleet/toyota-coaster"
        },
        {
            name: "Hyundai Starex",
            image: "/hyundai-starex.webp",
            passengers: 7,
            luggage: 10,
            features: ["family friendly", "comfortable ride", "airport taxi"],
            link: "/fleet/hyundai-starex"
        }
    ];

    // Service areas with Entity Context
    const serviceAreas = [
        { name: "Jeddah", role: "Gateway to Makkah", link: "/locations/jeddah" },
        { name: "Makkah", role: "Holy City & Umrah Hub", link: "/locations/makkah" },
        { name: "Madinah", role: "City of the Prophet", link: "/locations/madinah" },
        { name: "Riyadh", role: "Business Capital", link: "/locations/riyadh" },
        { name: "Taif", role: "City of Roses", link: "/locations/taif" },
        { name: "AlUla", role: "Historical Heritage", link: "/locations/alula" },
        { name: "Yanbu", role: "Industrial Hub", link: "/locations/yanbu" },
        { name: "Khaybar", role: "Ancient Oasis", link: "/locations/khayber-fort" }
    ];

    // Testimonials
    const testimonials = [
        {
            name: "Ahmed Al-Rashid",
            location: "Jeddah",
            rating: 5,
            text: "Excellent airport taxi Saudi Arabia service! The driver met me at King Abdulaziz Airport and the ride to Makkah was smooth. Highly recommended.",
            service: "Airport Transfer"
        },
        {
            name: "Fatima Hassan",
            location: "Madinah",
            rating: 5,
            text: "We used their Umrah taxi service for our family. The driver was very respectful and the car was clean. Best taxi service for pilgrims.",
            service: "Umrah Taxi"
        },
        {
            name: "Mohammed bin Salman",
            location: "Riyadh",
            rating: 5,
            text: "Professional VIP taxi service in Riyadh. The GMC Yukon was perfect for my business meetings. Reliable taxi service KSA.",
            service: "VIP Chauffeur"
        },
        {
            name: "Sarah Abdullah",
            location: "Makkah",
            rating: 5,
            text: "Booked a Toyota Hiace for our group. Great taxi service in Saudi Arabia for large families. The driver knew all the best routes.",
            service: "Group Travel"
        },
        {
            name: "Khalid Al-Otaibi",
            location: "Dammam",
            rating: 5,
            text: "Reliable airport taxi. Driver was on time and the car was comfortable. Will use this taxi service again.",
            service: "Intercity Travel"
        },
        {
            name: "Aisha Mohammed",
            location: "Jeddah",
            rating: 5,
            text: "Top notch taxi service for pilgrims! Very helpful with luggage and Ziyarat spots.",
            service: "Airport Transfer"
        }
    ];

    // FAQ data - Entity-optimized answers
    const faqs = [
        {
            question: "Do you provide airport taxi in Saudi Arabia from Jeddah to Makkah?",
            answer: "Airport taxi service from King Abdulaziz International Airport (JED) to Makkah hotels operates 24/7. Drivers provide meet-and-greet service at arrivals. Flight tracking monitors delays automatically."
        },
        {
            question: "What is the best taxi service for Umrah pilgrims?",
            answer: "Umrah pilgrims use taxi services that understand prayer schedules and Haram access routes. Drivers know the routes between Makkah, Madinah, and Jeddah Airport. Service includes assistance with luggage and Zamzam containers."
        },
        {
            question: "Is your taxi service in Saudi Arabia available 24/7?",
            answer: "Taxi service operates 24 hours daily in Saudi Arabia. Late-night flight arrivals and early morning Ziyarat trips are accommodated. Drivers are available for booking at any time."
        },
        {
            question: "How do I book a taxi service in Saudi Arabia?",
            answer: "Taxi booking is available through the <a href='/booking' class='text-primary hover:underline font-bold'>online booking form</a> or email at taxiserviceksa9988@gmail.com. Booking requires pickup location, destination, and preferred vehicle type. Confirmation is sent via email."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Script
                id="transportation-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <JsonLdFAQ faqs={faqs} />

            {/* Hero Section with Entity-Optimized H1 */}
            <Hero
                images={heroImages}
                h1Text="Taxi Service in Saudi Arabia: Airport Transfers and Umrah Transport"
            >
                <Link href="/locations" className="text-white/90 hover:text-accent underline underline-offset-4 text-sm mobile:text-xs font-medium inline-flex items-center gap-2 transition-colors mt-4">
                    Service coverage across 8 cities in Saudi Arabia <ArrowRight className="w-4 h-4" />
                </Link>
            </Hero>

            {/* LATEST INSIGHT BANNER */}
            <div className="bg-emerald-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="bg-white text-emerald-700 text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap">NEW REPORT</span>
                        <p className="text-sm sm:text-base font-medium">
                            <span className="font-bold">2025 Study:</span> Why 70% of Families Choose Taxis Over High-Speed Rail?
                        </p>
                    </div>
                    <Link href="/insights/pilgrimage-transport-report-2025" className="flex-shrink-0">
                        <button className="text-white border-b border-white hover:border-emerald-200 hover:text-emerald-100 transition-colors text-sm font-bold flex items-center gap-1 group">
                            Read the Data <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Source Context Clarification - Koray's Methodology */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                Professional Taxi Service <span className="text-white">With Licensed Drivers</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We are a professional taxi transport company, NOT a car rental service. All our vehicles include licensed, experienced drivers. We do not offer self-drive car rental or ride-sharing services.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                                <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                                <span className="font-medium">Licensed Drivers Included</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                                <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                                <span className="font-medium">No Self-Drive Rental</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                                <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                                <span className="font-medium">Chauffeur Service Only</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Refactored to Split List (No Cards) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        {/* Left: Sticky Header */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs px-3 py-1 rounded-full mb-4 inline-block shadow-md shadow-primary/30">
                                Core Capabilities
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[0.9]">
                                SAUDI<br />WIDE<br />NETWORK
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Whether it is the spiritual journey of Umrah or a critical business transfer, our fleet is positioned to serve.
                            </p>
                            <Link href="/booking">
                                <Button className="bg-primary text-white hover:bg-blue-600 rounded-full px-8 py-6 text-lg font-bold min-h-[48px] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
                                    Book Now <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>

                        {/* Right: List Layout */}
                        <div className="lg:col-span-7 space-y-0">
                            {services.map((service, index) => (
                                <div key={index} className="group relative border-l-4 border-gray-200 hover:border-black pl-8 py-8 transition-colors duration-300">
                                    <Link href={service.link} className="block">
                                        <div className="flex items-baseline justify-between mb-2">
                                            <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                                        </div>
                                        <p className="text-gray-500 text-lg leading-relaxed max-w-xl group-hover:text-gray-900 transition-colors">
                                            {service.description}
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-black">
                                            <span>Starting from {service.price}</span>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Semantic Authority Network */}
            <TrustedTransportNetwork />

            {/* How It Works - Visual Flow (No Cards) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                            Streamlined Booking
                        </h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[25%] left-0 right-0 h-0.5 bg-gray-100 -z-10"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Step 1 */}
                            <div className="text-center group">
                                <div className="w-20 h-20 mx-auto bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300">
                                    <span className="font-black text-2xl text-gray-300 group-hover:text-primary">01</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Select Vehicle</h3>
                                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                                    Choose from our fleet of GMC Yukons, Camrys, and Buses based on your group size.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center group">
                                <div className="w-20 h-20 mx-auto bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300">
                                    <span className="font-black text-2xl text-gray-300 group-hover:text-primary">02</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Booking</h3>
                                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                                    Enter flight details for automatic tracking. We monitor delays so you don't have to.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center group">
                                <div className="w-20 h-20 mx-auto bg-white border-4 border-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors duration-300">
                                    <span className="font-black text-2xl text-gray-300 group-hover:text-primary">03</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Meet & Greet</h3>
                                <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                                    Your driver waits at the arrival hall with a name sign. Journey to Makkah in comfort.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Preview - Optimized H2 */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-32 h-32 sm:w-40 sm:h-40 bg-primary/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                                <Image
                                    src="/gmc-yukon.webp"
                                    alt="Comfortable taxi service in Saudi Arabia - GMC Yukon for airport and umrah transfer"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    priority={false}
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xl border border-gray-100">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl sm:text-2xl text-gray-900">10+ Years</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Of Reliability</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block mb-4 sm:mb-6 shadow-md shadow-primary/30">Service Information</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                Taxi Service Operating in Saudi Arabia
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                                Taxi Service KSA operates in 8 cities across Saudi Arabia. Service includes airport transfers, Umrah transport, and intercity travel. Fleet consists of GMC Yukon, Toyota Camry, Hyundai Staria, and Toyota Hiace vehicles.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                <li className="flex items-center gap-2 sm:gap-3 text-gray-700 font-medium text-sm sm:text-base">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                                    English and Arabic-speaking drivers
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 text-gray-700 font-medium text-sm sm:text-base">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                                    2024/2025 model year fleet
                                </li>
                                <li className="flex items-center gap-2 sm:gap-3 text-gray-700 font-medium text-sm sm:text-base">
                                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 flex-shrink-0" />
                                    Flight tracking for airport pickups
                                </li>
                            </ul>
                            <Link href="/about">
                                <Button size="lg" className="bg-primary text-white hover:bg-blue-600 font-bold px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                                    More About Us <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Band - Modern Blue Strip */}
            <section className="py-12 bg-gradient-to-r from-primary via-blue-600 to-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
                        <div className="p-4">
                            <div className="text-4xl lg:text-5xl font-black text-white mb-2">100%</div>
                            <div className="text-sm font-bold tracking-widest uppercase text-white/60">Fully Licensed</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl lg:text-5xl font-black text-white mb-2">24/7</div>
                            <div className="text-sm font-bold tracking-widest uppercase text-white/60">Service Availability</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl lg:text-5xl font-black text-white mb-2">10k+</div>
                            <div className="text-sm font-bold tracking-widest uppercase text-white/60">Succcesful Trips</div>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl lg:text-5xl font-black text-white mb-2">4.9/5</div>
                            <div className="text-sm font-bold tracking-widest uppercase text-white/60">Trust Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet Section - Optimized H2 */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full inline-block shadow-md shadow-primary/30">Our Fleet</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                            Airport & Umrah Taxi Solutions
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Our fleet includes luxury sedans, family vans, and buses. Perfect for Saudi airport transfer and pilgrim groups.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {fleet.map((vehicle, index) => (
                            <div key={index} className="block group h-full">
                                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-200 group-hover:border-primary/50 flex flex-col">
                                    <Link href={vehicle.link} className="block">
                                        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                            <Image
                                                src={vehicle.image}
                                                alt={`${vehicle.name} - Reliable taxi service in Saudi Arabia for ${vehicle.passengers} people`}
                                                width={800}
                                                height={600}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                        </div>
                                    </Link>
                                    <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                                        <Link href={vehicle.link}>
                                            <div className="flex justify-between items-center mb-3 sm:mb-4">
                                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                                            </div>
                                        </Link>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 mb-3 sm:mb-4 text-gray-600 text-sm sm:text-base">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span>{vehicle.passengers} Passengers</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Car className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span>{vehicle.luggage} Luggage</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5 sm:space-y-2 mb-4 flex-1">
                                            {vehicle.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link href={`/booking?vehicle=${encodeURIComponent(vehicle.name.replace(/\s+/g, '-'))}`} className="w-full">
                                            <Button className="w-full bg-primary text-white hover:bg-blue-600 font-bold transition-all min-h-[48px] hover:scale-[1.02] active:scale-95 shadow-md shadow-primary/20">
                                                Book {vehicle.name}
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Table Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full inline-block shadow-md shadow-primary/30">Transparent Pricing</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                            Fixed Rates for All Destinations
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            No hidden fees. Book your ride with confidence knowing exactly what you'll pay.
                        </p>
                    </div>

                    <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 w-full relative">
                        <table className="w-full text-sm text-left text-gray-600 min-w-[800px]">
                            <thead className="text-xs text-white uppercase bg-gray-900">
                                <tr>
                                    <th scope="col" className="px-6 py-4 font-bold text-base whitespace-nowrap bg-primary sticky left-0 z-20 border-r border-primary-dark/20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                                        Service Route
                                    </th>
                                    <th scope="col" className="px-6 py-4 font-bold text-center whitespace-nowrap">
                                        Camry<br /><span className="text-[10px] font-normal opacity-80">4 Pax</span>
                                    </th>
                                    <th scope="col" className="px-6 py-4 font-bold text-center whitespace-nowrap">
                                        Staria<br /><span className="text-[10px] font-normal opacity-80">7 Pax</span>
                                    </th>
                                    <th scope="col" className="px-6 py-4 font-bold text-center whitespace-nowrap">
                                        Starex<br /><span className="text-[10px] font-normal opacity-80">7 Pax</span>
                                    </th>
                                    <th scope="col" className="px-6 py-4 font-bold text-center whitespace-nowrap">
                                        GMC<br /><span className="text-[10px] font-normal opacity-80">7 Pax</span>
                                    </th>
                                    <th scope="col" className="px-6 py-4 font-bold text-center whitespace-nowrap">
                                        Hiace<br /><span className="text-[10px] font-normal opacity-80">11 Pax</span>
                                    </th>
                                    <th scope="col" className="px-6 py-4 font-bold text-center whitespace-nowrap">
                                        Coaster<br /><span className="text-[10px] font-normal opacity-80">17 Pax</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: 'Jeddah Airport → Makkah', camry: 250, staria: 300, starex: 300, gmc: 450, hiace: 350, coaster: 500 },
                                    { route: 'Makkah → Madinah Hotel', camry: 450, staria: 550, starex: 550, gmc: 850, hiace: 650, coaster: 1100 },
                                    { route: 'Makkah → Madinah via Badr', camry: 600, staria: 700, starex: 700, gmc: 950, hiace: 750, coaster: 1300 },
                                    { route: 'Makkah Ziyarat Tour', camry: 250, staria: 300, starex: 300, gmc: 400, hiace: 350, coaster: 500 },
                                    { route: 'Madinah Hotel → Madinah Airport', camry: 150, staria: 200, starex: 200, gmc: 250, hiace: 200, coaster: 350 },
                                    { route: 'Madinah Ziyarat Tour', camry: 200, staria: 250, starex: 250, gmc: 300, hiace: 300, coaster: 400 },
                                    { route: 'Madinah Hotel → Train Station', camry: 120, staria: 150, starex: 150, gmc: 250, hiace: 200, coaster: 300 },
                                    { route: 'Madinah Hotel → Jeddah Airport', camry: 450, staria: 600, starex: 600, gmc: 850, hiace: 650, coaster: 1200 },
                                    { route: 'Makkah Hotel → Train Station', camry: 120, staria: 150, starex: 150, gmc: 250, hiace: 200, coaster: 300 },
                                    { route: 'Makkah Hotel → Jeddah Airport', camry: 200, staria: 250, starex: 250, gmc: 400, hiace: 300, coaster: 450 },
                                    { route: 'Full Day (Fuel + Driver)', camry: 800, staria: 1000, starex: 1000, gmc: 1500, hiace: 1200, coaster: 1500, highlight: true },
                                    { route: 'Per Hour', camry: 120, staria: 150, starex: 150, gmc: 220, hiace: 170, coaster: 200, highlight: true },
                                ].map((row, index) => (
                                    <tr key={index} className={`border-b hover:bg-gray-50 transition-colors ${row.highlight ? 'bg-gray-50/50 font-bold' : 'bg-white'}`}>
                                        <th scope="row" className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap sticky left-0 z-10 border-r border-gray-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] ${row.highlight ? 'bg-gray-50' : 'bg-white'}`}>
                                            {row.route}
                                        </th>
                                        <td className="px-6 py-4 text-center font-bold text-gray-700 bg-blue-50/30">
                                            {row.camry}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {row.staria}
                                        </td>
                                        <td className="px-6 py-4 text-center bg-blue-50/30">
                                            {row.starex}
                                        </td>
                                        <td className="px-6 py-4 text-center text-primary font-black bg-primary/5">
                                            {row.gmc}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {row.hiace}
                                        </td>
                                        <td className="px-6 py-4 text-center bg-blue-50/30">
                                            {row.coaster}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-500">
                        * All prices are in Saudi Riyal (SAR). Prices are fixed for point-to-point transfers.
                    </div>
                </div>
            </section>

            {/* Gallery Preview Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                        <div>
                            <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block mb-3 sm:mb-4 shadow-md shadow-primary/30">Our Gallery</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                See Our Fleet & Destinations in Action
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                                Explore our premium vehicles and destination views. We are the leading taxi service for pilgrims visiting Makkah and Madinah.
                            </p>
                            <Link href="/gallery">
                                <Button size="lg" className="bg-primary text-white hover:bg-blue-600 font-bold px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                                    View Full Gallery <Camera className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                    <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/makkah-kaaba-night.webp" alt="Umrah pilgrims using reliable taxi service in Saudi Arabia at Makkah" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                    <div className="relative h-52 sm:h-60 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/gmc-yukon.webp" alt="Luxury GMC Yukon Taxi Saudi Arabia Interior" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                </div>
                                <div className="space-y-2 sm:space-y-3 md:space-y-4 pt-4 sm:pt-6 md:pt-8">
                                    <div className="relative h-52 sm:h-60 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/madinah-prophets-mosque.webp" alt="Ziyarat taxi service in Madinah near Prophet's Mosque" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                    <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/hyundai-staria.webp" alt="Family taxi Saudi Arabia Hyundai Staria vehicle" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas Section - Minimal Links (No Cards) */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-4">
                                Operating Zones
                            </h2>
                            <p className="text-gray-600 max-w-xl">
                                We connect all major transport hubs. Click a location for specific route details.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {serviceAreas.map((area, index) => (
                            <Link key={index} href={area.link} className="block group">
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        {area.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium">{area.role}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Contextual Block: National Infrastructure */}
                    <div className="mt-16 border-t border-gray-200 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Jeddah Airport to Makkah Direct</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Skip the multi-leg train journey. Our door-to-door taxi service from King Abdulaziz Airport to Makkah hotels is 40% faster for families with luggage. Fixed rates from SAR 150.
                            </p>
                            <Link href="/routes/jeddah-makkah">
                                <Button className="text-black font-bold border-b-2 border-black rounded-none px-0 py-0 h-auto hover:bg-transparent hover:border-primary transition-colors">
                                    View Route Details & Pricing
                                </Button>
                            </Link>
                        </div>
                        <div className="h-64 bg-gray-200 rounded-2xl relative overflow-hidden">
                            <Image
                                src="/hero-slide-4.webp"
                                alt="Haramain Railway connection taxi"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Optimized H2 */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block shadow-md shadow-primary/30">Testimonials</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                            Trusted Reviews from Pilgrims & Travelers
                        </h2>
                    </div>

                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent className="-ml-2 sm:-ml-4">
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
                                        <div className="flex items-center gap-1 mb-3 sm:mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">"{testimonial.text}"</p>
                                        <div className="border-t border-gray-200 pt-3 sm:pt-4">
                                            <p className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</p>
                                            <p className="text-xs sm:text-sm text-gray-500">{testimonial.location} • {testimonial.service}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12" />
                        <CarouselNext className="hidden sm:flex -right-4 md:-right-12" />
                    </Carousel>
                </div>
            </section>

            {/* Customer Reviews Section - UGC for Koray's Methodology */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Real Customer Reviews
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Verified experiences from travelers across Saudi Arabia
                        </p>
                    </div>

                    {/* Reviews Display */}
                    <div className="mb-12">
                        <ReviewsDisplay limit={3} />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/submit-review">
                            <Button size="lg" className="bg-black text-white hover:bg-gray-800 font-bold">
                                <Star className="w-5 h-5 mr-2" />
                                Share Your Experience
                            </Button>
                        </Link>
                        <Link href="/ask-question">
                            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold transition-colors">
                                Have a Question? Ask Our Drivers
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Latest Guide Section */}
            <RelatedGuides blogs={latestBlogs} title="Latest Travel Guides" subtitle="Expert advice for your Umrah and Saudi travel journey." />

            {/* FAQ Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="bg-primary text-white font-semibold tracking-wider uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block shadow-md shadow-primary/30">FAQ</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg sm:rounded-xl border border-gray-200 px-4 sm:px-5 md:px-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-3 sm:pb-4">
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section >

            {/* Final CTA Section - Optimized A/B & Trust */}
            < section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-black" >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
                        Book Your Taxi in Saudi Arabia Now
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-4 max-w-2xl mx-auto">
                        Join 10,000+ satisfied travelers. <Link href="/booking" className="text-white hover:underline font-bold">Book your taxi service today</Link> for reliable airport taxi and Umrah transfer.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        {/* Primary CTA */}
                        <Link href="/booking" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full bg-primary text-white hover:bg-blue-600 font-bold text-lg px-10 py-6 h-auto min-h-[56px] min-w-[200px] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/40">
                                Book Your Ride
                            </Button>
                        </Link>

                        {/* Secondary CTA - Email */}
                        <a href="mailto:taxiserviceksa9988@gmail.com" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white/10 font-bold text-lg px-10 py-6 h-auto min-h-[56px] min-w-[200px] transition-all hover:scale-105 active:scale-95">
                                Email Us
                            </Button>
                        </a>
                    </div>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400 font-medium">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Instant Confirmation</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Fixed Prices</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Free Cancellation</span>
                    </div>
                </div>
            </section >


        </div >
    );
}
