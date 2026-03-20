"use client";

import Hero from '@/components/Hero';
import Script from 'next/script';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';
import { Plane, MapPin, Building2, Shield, Clock, Award, Star, CheckCircle2, Users, Car, ArrowRight, Camera, Calendar, User, Sparkles, Quote, Info, Wallet, Globe } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

import JsonLdFAQ from '@/components/JsonLdFAQ';
import TrustedTransportNetwork from '@/components/seo/TrustedTransportNetwork';
import ReviewsDisplay from '@/components/ReviewsDisplay';
import RelatedGuides from '@/components/RelatedGuides';
import { Blog } from '@/lib/blogService';
import HowItWorks from '@/components/HowItWorks';
import GlobalTrust from '@/components/GlobalTrust';
import TLDRSummary from '@/components/seo/TLDRSummary';
import FreshnessStatus from '@/components/seo/FreshnessStatus';
import { getPrice } from '@/lib/pricing';

interface HomeClientProps {
    latestBlogs?: Blog[];
}

export default function HomeClient({ latestBlogs = [] }: HomeClientProps) {


    // Enhanced Structured Data with multiple schema types
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "TransportationService",
        "name": "Taxi Service KSA",
        "url": "https://taxiserviceksa.com",
        "logo": "https://taxiserviceksa.com/logo.png",
        "image": "https://taxiserviceksa.com/hero-image.jpg",
        "description": "Taxi Service KSA is the top-rated VIP private transfer and chauffeur service in Saudi Arabia. Specializing in long-distance intercity travel, border crossings, and Umrah transport. Founded by Muhammad Ismail, an expert in Saudi travel logistics and tech-enabled transport solutions.",
        "brand": {
            "@type": "Brand",
            "name": "Taxi Service KSA"
        },
        "founder": {
            "@type": "Person",
            "name": "Muhammad Ismail",
            "jobTitle": "Founder & SEO Logistics Expert",
            "url": "https://taxiserviceksa.com/author/muhammad-ismail",
            "sameAs": [
                "https://www.linkedin.com/in/muhammad-ismail-sqa/",
                "https://www.facebook.com/profile.php?id=100007701130236"
            ]
        },
        "areaServed": "Saudi Arabia & GCC Borders",
        "availableLanguage": ["English", "Arabic", "Urdu"],
        "priceRange": "$$$",
        "serviceType": "Elite Chauffeur & Private Transfer Service",
        "knowsAbout": ["Umrah", "Haramain High Speed Railway", "Border Crossings", "GCC Tourism", "King Abdulaziz International Airport", "Prince Mohammad bin Abdulaziz International Airport", "Executive Travel", "Intercity Transport"],
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
                "urlTemplate": "https://taxiserviceksa.com/booking/"
            },
            "result": {
                "@type": "Reservation",
                "name": "Taxi Quote"
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
            title: "Border Crossings & GCC",
            description: "Expert taxi service for Saudi-Bahrain (King Fahd Causeway), Saudi-UAE, and other GCC border crossings. We handle all paperwork and ensure a smooth inter-country transition for tourists and business travelers.",
            rdfTriple: "Border crossing taxi → facilitates → seamless transport between KSA and GCC countries",
            icon: Globe,
            link: "/border-crossings/",
            price: "Custom Rates"
        },
        {
            title: "Intercity & Tourist Spots",
            description: "Specialized long-distance travel to AlUla, Neom, Taif, and Abha. We provide hourly/daily chauffeur hire for tourists exploring the Kingdom's historical and natural heritage.",
            rdfTriple: "Tourist taxi KSA → provides → luxury tours to Saudi heritage sites",
            icon: Camera,
            link: "/routes/",
            price: "Custom Quote"
        }
    ];

    // Fleet data with Links
    const fleet = [
        {
            name: "Mercedes S-Class",
            image: "/fleet/mercedes-s-class-vip-chauffeur-service-saudi.webp",
            passengers: 3,
            luggage: 2,
            features: ["VIP Experience", "Leather Interior", "Discreet Service"],
            link: "/fleet/mercedes-s-class/",
        },
        {
            name: "Cadillac Escalade",
            image: "/fleet/cadillac-escalade-chauffeur-service-ksa.webp",
            passengers: 7,
            luggage: 4,
            features: ["Elite Audio", "Extra Comfort", "VIP Chauffeur"],
            link: "/fleet/cadillac-escalade/",
        },
        {
            name: "GMC Yukon XL / Denali",
            image: "/fleet/gmc-yukon-xl-premium-chauffeur-saudi.webp",
            passengers: 7,
            luggage: 5,
            features: ["VIP Executive SUV", "Extra Legroom", "Luxury Interior"],
            link: "/fleet/gmc-yukon/",
        },
        {
            name: "Mercedes Vito",
            image: "/fleet/mercedes-vito-vip-shuttle-service-ksa.webp",
            passengers: 7,
            luggage: 4,
            features: ["European Luxury", "Conference Seats", "Business Class"],
            link: "/fleet/mercedes-vito/",
        },
        {
            name: "BMW 7 Series",
            image: "/fleet/bmw-7-series-luxury-chauffeur-saudi.webp",
            passengers: 3,
            luggage: 2,
            features: ["Performance", "Luxury Comfort", "Prestige"],
            link: "/fleet/bmw-7-series/",
        },
        {
            name: "Genesis G80 VIP",
            image: "/fleet/genesis-g80-luxury-transport-ksa.webp",
            passengers: 3,
            luggage: 2,
            features: ["Silent Cabin", "VIP Rear Seat", "Modern Luxury"],
            link: "/fleet/genesis-g80/",
        },
        {
            name: "Ford Taurus 2025",
            image: "/fleet/ford-taurus-executive-sedan-saudi-arabia.webp",
            passengers: 3,
            luggage: 2,
            features: ["Executive Sedan", "Smooth Ride", "Modern Tech"],
            link: "/fleet/ford-taurus/",
        },
        {
            name: "Mercedes Sprinter",
            image: "/fleet/mercedes-sprinter-luxury-van-transfer-saudi.webp",
            passengers: 14,
            luggage: 4,
            features: ["Custom Interior", "High Roof", "Corporate Travel"],
            link: "/fleet/mercedes-sprinter/",
        },
        {
            name: "Hyundai Staria VIP",
            image: "/hyundai-staria.webp",
            passengers: 7,
            luggage: 4,
            features: ["VIP Family Van", "Spacious Interior", "Group Excellence"],
            link: "/fleet/hyundai-staria/",
        },
        {
            name: "Toyota Hiace",
            image: "/toyota-hiace.webp",
            passengers: 11,
            luggage: 16,
            features: ["Group VIP Transport", "Pilgrim Logistics", "Large Capacity"],
            link: "/fleet/toyota-hiace/",
        },
        {
            name: "Toyota Coaster",
            image: "/toyota-coaster.webp",
            passengers: 17,
            luggage: 20,
            features: ["Corporate Bus", "Delegate Transport", "Large Groups"],
            link: "/fleet/toyota-coaster/",
        },
        {
            name: "Toyota Camry",
            image: "/toyota-camry.webp",
            passengers: 4,
            luggage: 2,
            features: ["Professional Chauffeur", "Climate Controlled", "Efficient Transfer"],
            link: "/fleet/toyota-camry/",
        },
        {
            name: "Hyundai Starex",
            image: "/hyundai-starex.webp",
            passengers: 7,
            luggage: 10,
            features: ["Family Hospitality", "Professional Driver", "Airport Specialist"],
            link: "/fleet/hyundai-starex/",
        },
        {
            name: "Luxurious Bus",
            image: "/fleet/luxurious-bus.webp",
            passengers: 25,
            luggage: 30,
            features: ["On-board Comfort", "Large Groups", "Executive Seating"],
            link: "/fleet/luxurious-bus/",
        }
    ];

    // Service areas with Entity Context
    const serviceAreas = [
        { name: "Jeddah", role: "Gateway to Makkah", link: "/locations/jeddah/" },
        { name: "Makkah", role: "Holy City & Umrah Hub", link: "/locations/makkah/" },
        { name: "Madinah", role: "City of the Prophet", link: "/locations/madinah/" },
        { name: "Riyadh", role: "Business Capital", link: "/locations/riyadh/" },
        { name: "Taif", role: "City of Roses", link: "/locations/taif/" },
        { name: "AlUla", role: "Historical Heritage", link: "/locations/alula/" },
        { name: "Yanbu", role: "Industrial Hub", link: "/locations/yanbu/" },
        { name: "Khaybar", role: "Ancient Oasis", link: "/locations/khayber-fort/" }
    ];

    // Testimonials


    // FAQ data - Entity-optimized answers
    const faqs = [
        {
            question: "Do you provide airport taxi in Saudi Arabia from Jeddah to Makkah?",
            answer: "Yes, our airport taxi service from King Abdulaziz International Airport (JED) to Makkah hotels operates 24/7. Unlike standard yellow street taxis, we offer fixed-price quotations with no hidden meters. Drivers provide meet-and-greet service at arrivals. Flight tracking monitors delays automatically."
        },
        {
            question: "Is this service better than Uber, Careem, or Kaiian for Umrah?",
            answer: "For long-distance Umrah journeys (like Jeddah to Makkah or Makkah to Madinah), <strong>Taxi Service KSA</strong> offers distinct advantages over ride-hailing apps. We guarantee <strong>fixed prices</strong> (no surge pricing), spacious vehicles for luggage (GMC Yukon, Toyota Hiace), and professional drivers who wait for you even if your flight is delayed. It is a dedicated <strong>inter-city service</strong> designed for peace of mind."
        },
        {
            question: "What is the best online transfer service for Umrah pilgrims?",
            answer: "<strong>Taxi Service KSA</strong> is the best VIP transfer service for Umrah pilgrims, providing transportation that accounts for prayer schedules and Haram access routes. Drivers know the routes between Makkah, Madinah, and Jeddah Airport. Service includes assistance with luggage and Zamzam containers."
        },
        {
            question: "Is your taxi service in Saudi Arabia available 24/7?",
            answer: "Taxi service operates 24 hours daily in Saudi Arabia. Late-night flight arrivals and early morning Ziyarat trips are accommodated. Drivers are available for quotation at any time."
        },
        {
            question: "How do I request a quote for a VIP transfer in Saudi Arabia?",
            answer: "VIP transfer quotes are available through the <a href='/booking/' class='text-primary hover:underline font-bold'>online quote form</a> or email at info@taxiserviceksa.com. Your request requires pickup location, destination, and preferred vehicle type. Quotations are sent via email."
        },
        {
            question: "Is Taxi Service KSA a licensed company?",
            answer: "Yes, <strong>Taxi Service KSA</strong> is a fully licensed transport facilitator in Saudi Arabia, operating under Transport General Authority (TGA) regulations. All drivers hold valid licenses and vehicles allow for legal transport of pilgrims and tourists."
        },
        {
            question: "Can I request a quote for a taxi from the UK/USA before my flight?",
            answer: "Yes, you can <strong>pre-request a quote for your taxi online</strong> from the UK, USA, Canada, or anywhere in the world. We track your international flight arrival at Jeddah Airport (KAIA) and ensure your driver is waiting for you at the terminal."
        },
        {
            question: "Do you accept international credit cards?",
            answer: "Yes, we accept major international credit cards (Visa, MasterCard) as well as cash payments in <strong>SAR, USD, GBP, and EUR</strong>. You can choose to pay online or to the driver upon arrival."
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
                h1Text="VIP Private Transfer & Executive Chauffeur Saudi Arabia"
                subtitle="Professional Chauffeur Service for Borders, Airports, Tourist Spots, and Executive Intercity Travel across the Kingdom."
            >
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <a href="https://wa.me/966569487569?text=Hello%2C%20I%20would%20like%20to%20get%20a%20VIP%20taxi%20quote." target="_blank">
                        <Button size="lg" className="bg-emerald-600 border-none text-white hover:bg-emerald-700 font-bold transition-all shadow-xl flex items-center gap-2 h-14 px-8 rounded-2xl">
                            <WhatsAppIcon className="w-6 h-6 fill-current" />
                            WhatsApp Booking via WhatsApp
                        </Button>
                    </a>
                    <Link href="/locations/" className="text-white/90 hover:text-accent underline underline-offset-4 text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-colors">
                        Service coverage across 8 cities in Saudi Arabia <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </Hero>

            {/* AI SEO: Early TL;DR for Generative Engine Extraction */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <FreshnessStatus lastVerified="2026-03-06" />
                    <TLDRSummary 
                        title="Taxi Service KSA Executive Summary"
                        summary="Taxi Service KSA is Saudi Arabia's premier executive chauffeur and private transfer service, established since 2012. We specialize in point-to-point intercity travel, border crossings, airport transfers, and tourist journeys across the entire Kingdom."
                        points={[
                            "Kingdom-wide coverage: All cities, Borders & Tourist Spots",
                            "100% licensed chauffeurs with professional training",
                            "Elite fleet for VIP Umrah, Business, and Family Tourism",
                            "Fixed-price guarantee with no hidden surge pricing",
                            "24/7 Service: Makkah, Madinah, Riyadh, Jeddah, AlUla, and more"
                        ]}
                        pricing="Fixed Rates"
                        duration="24/7 Service"
                    />
                </div>
            </section>

            {/* Global Trust Marquee */}
            <GlobalTrust />

            {/* LATEST INSIGHT BANNER */}
            <div className="bg-emerald-600 text-white relative overflow-hidden">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="bg-white text-emerald-700 text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap">NEW REPORT</span>
                        <p className="text-sm sm:text-base font-medium">
                            <span className="font-bold">2025 Study:</span> Why 70% of Families Choose Taxis Over High-Speed Rail?
                        </p>
                    </div>
                    <Link href="/insights/pilgrimage-transport-report-2025/" className="flex-shrink-0">
                        <button className="text-white border-b border-white hover:border-emerald-200 hover:text-emerald-100 transition-colors text-sm font-bold flex items-center gap-1 group">
                            Read the Data <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Source Context Clarification - Koray's Methodology */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background with Gradient Overlay */}
                <div className="absolute inset-0 bg-[#0B1120]">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest">
                                <Shield className="w-3 h-3" />
                                <span>Safety First</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                VIP Private Transfers & <span className="text-primary block mt-2">Executive Chauffeur Service</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                Experience the gold standard of travel with Saudi Arabia's premier private transfer service. We provide a <strong>reliable alternative to ride-hailing apps</strong> for international tourists and business executives. We specialize in <strong>Border Crossings, Airport Transfers, Tourist Journeys, and Umrah Transport</strong> across all cities (e.g., Jeddah, Riyadh, Makkah, Madinah, AlUla, Tabuk). Note: We focus on pre-booked long-distance travel and do not offer local 'street hail' services.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link href="/booking/">
                                    <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-primary font-bold transition-all shadow-lg shadow-primary/20">
                                        WhatsApp Booking Online
                                    </Button>
                                </Link>
                                <a href="https://wa.me/966569487569?text=Hello%2C%20I%20would%20like%20to%20get%20a%20VIP%20taxi%20quote." target="_blank">
                                    <Button size="lg" className="bg-emerald-600 border-none text-white hover:bg-emerald-700 font-bold transition-all shadow-lg flex items-center gap-2 h-14 px-8 rounded-2xl">
                                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                                        WhatsApp Booking via WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        {/* Feature Image & Highlights */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                <Image
                                    src="/chauffeur-service.png"
                                    alt="Best online taxi service chauffeur opening car door in Saudi Arabia"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="flex items-center gap-3 text-white/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-medium text-sm">Licensed Drivers Included</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-medium text-sm">No Self-Drive Rental</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                            <span className="font-medium text-sm">Chauffeur Service Only</span>
                                        </div>
                                    </div>
                                </div>
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
                                BEST{' '}<br />PRIVATE{' '}<br />TRANSFERS
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Specializing in long-distance journeys, VIP airport pickups, and dedicated Umrah transport services for the discerning traveler.
                            </p>
                             <a href="https://wa.me/966569487569?text=Hello%2C%20I%20would%20like%20to%20get%20a%20VIP%20taxi%20quote." target="_blank">
                                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 rounded-full px-8 py-6 text-lg font-bold min-h-[48px] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 flex items-center gap-2">
                                    <WhatsAppIcon className="w-6 h-6 fill-current" />
                                    WhatsApp Booking via WhatsApp
                                </Button>
                            </a>
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

            {/* Why Choose Us - Premium Differentiation */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">VIP Standards</span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                            WHY CHOOSE <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-8">TAXI SERVICE KSA?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "100% Licensed",
                                desc: "Fully registered with the Ministry of Transport and TGA for your total security."
                            },
                            {
                                icon: Clock,
                                title: "Punctual arrivals",
                                desc: "No delays. Our driver reaches the airport 15 minutes before your flight lands."
                            },
                            {
                                icon: Users,
                                title: "Expert chauffeurs",
                                desc: "Professional, English-speaking drivers trained in luxury hospitality standards."
                            },
                            {
                                icon: Wallet,
                                title: "Fixed Price",
                                desc: "The price you see is what you pay. No hidden VAT, parking, or tunnel surcharges."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-black transition-all duration-500 transform group-hover:rotate-12">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works - Visual Flow */}
            <HowItWorks />

            {/* About Us Preview - Optimized H2 */}
            {/* About Us - The Premium Narrative */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
                
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white z-10 aspect-[4/5]">
                                <Image
                                    src="/gmc-yukon.webp"
                                    alt="Taxi Service KSA VIP Fleet"
                                    fill
                                    className="object-cover transform hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-0.5 bg-primary"></div>
                                        <span className="text-xs font-bold uppercase tracking-[0.3em]">Kingdom Wide</span>
                                    </div>
                                    <h3 className="text-2xl font-black italic">Est. 2014</h3>
                                </div>
                            </div>
                            
                            {/* Floating Stats Badge */}
                            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-gray-100 hidden sm:block">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-gray-900 tracking-tight">10+ Years</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Market Excellence</div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-gray-100 w-full"></div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-black text-gray-900 tracking-tight">50,000+</div>
                                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Trips Completed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest mb-6">
                                    <Info className="w-4 h-4 text-primary" /> Our Story
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                                    YOUR PASSAGE TO <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">VIP MOBILITY</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                    In the heart of the Kingdom, <strong>Taxi Service KSA</strong> was born from a simple mission: to redefine the pilgrimage and business travel experience. We moved away from the uncertainty of public transport to provide a guaranteed, luxury door-to-door service.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-primary" /> Govt. Authorized
                                    </h4>
                                    <p className="text-sm text-gray-500">Fully licensed by Ministry of Transport & TGA for official operation.</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-black text-gray-900 mb-2 flex items-center gap-2">
                                        <Wallet className="w-4 h-4 text-primary" /> Tax Compliant
                                    </h4>
                                    <p className="text-sm text-gray-500">Full ZATCA VAT invoicing available for all corporate bookings.</p>
                                </div>
                            </div>

                             <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <a href="https://wa.me/966569487569?text=Hello%2C%20I%20would%20like%20to%20get%20a%20VIP%20taxi%20quote." target="_blank" className="w-full sm:w-auto">
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-10 h-16 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20 flex items-center gap-3">
                                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                                        WhatsApp Booking via WhatsApp
                                    </Button>
                                </a>
                                <Link href="/booking/" className="w-full sm:w-auto">
                                    <Button className="w-full bg-slate-900/5 hover:bg-slate-900/10 text-slate-900 border-2 border-slate-900 px-10 h-16 rounded-2xl text-lg font-black transition-all hover:scale-105 active:scale-95">
                                        Use Online Form <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                            </div>
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
                            Best VIP Fleet Collection
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                            Our elite fleet features GMC Yukon, Toyota Camry, Hyundai Staria, and Toyota Hiace vehicles, all meticulously maintained to executive standards.
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
                                        <div className="grid grid-cols-2 gap-2 mt-auto">
                                            <Link href={`/booking?vehicle=${encodeURIComponent(vehicle.name.replace(/\s+/g, '-'))}`} className="w-full">
                                                <Button className="w-full bg-primary text-white hover:bg-blue-600 font-bold transition-all min-h-[48px] hover:scale-[1.02] active:scale-95 shadow-md shadow-primary/20 text-xs"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                                            </Link>
                                            <a 
                                                href={`https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20get%20a%20VIP%20quote%20for%20a%20${encodeURIComponent(vehicle.name)}.`}
                                                target="_blank"
                                                className="w-full"
                                            >
                                                <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700 font-bold transition-all min-h-[48px] hover:scale-[1.02] active:scale-95 shadow-md shadow-emerald-500/20 text-xs gap-1.5 px-1">
                                                    <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                                                    WhatsApp
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Top 5 Contextual Routes - Transactional Gold */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">Executive Hub</span>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">POPULAR VIP ROUTES</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link href="/routes/jeddah-makkah/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">Jeddah Airport to Makkah</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">Fastest airport transfer for Umrah pilgrims. 80km direct route.</p>
                        </Link>
                        <Link href="/routes/makkah-madinah/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">Makkah to Madinah</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">The historical 450km pilgrimage route between the Holy Cities.</p>
                        </Link>
                        <Link href="/routes/madinah-jeddah/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">Madinah to Jeddah Airport</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">Perfect for return flights from Madinah hotels to King Abdulaziz Airport.</p>
                        </Link>
                        <Link href="/routes/riyadh-jeddah/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">Riyadh to Jeddah</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">Executive intercity transfer connecting the Capital to the Coast.</p>
                        </Link>
                        <Link href="/routes/jeddah-taif/" className="group p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">Jeddah to Taif</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500">Scenic drive to the City of Roses and Sarawat Mountains.</p>
                        </Link>
                        <Link href="/routes/" className="group p-6 bg-primary text-white rounded-2xl border border-primary hover:bg-black transition-all shadow-lg flex items-center justify-center font-bold">
                            View All 50+ Routes →
                        </Link>
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
                                Premium Fleet & Destination Gallery
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                                Visuals display our professional online taxi service vehicles including GMC Yukon and Hyundai Staria in Makkah and Madinah.
                            </p>
                            <Link href="/gallery/">
                                <Button size="lg" className="bg-primary text-white hover:bg-blue-600 font-bold px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg rounded-xl shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                                    View Full Gallery <Camera className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                                    <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/makkah-kaaba-night.webp" alt="Umrah pilgrims using best online taxi service in Saudi Arabia at Makkah" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                    <div className="relative h-52 sm:h-60 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/gmc-yukon.webp" alt="Luxury GMC Yukon - Best Online Taxi Service Saudi Arabia Interior" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                </div>
                                <div className="space-y-2 sm:space-y-3 md:space-y-4 pt-4 sm:pt-6 md:pt-8">
                                    <div className="relative h-52 sm:h-60 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/madinah-prophets-mosque.webp" alt="Ziyarat with best online taxi service in Madinah near Prophet's Mosque" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                                    </div>
                                    <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                                        <Image src="/hyundai-staria.webp" alt="Family taxi Saudi Arabia - Best Online Taxi Service Hyundai Staria vehicle" width={800} height={600} className="w-full h-full object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
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
                                Online Taxi Service Coverage Areas
                            </h2>
                            <p className="text-gray-600 max-w-xl">
                                Our top-rated operations extend to Jeddah, Makkah, Madinah, and Riyadh.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {serviceAreas.map((area, index) => (
                            <Link key={index} href={area.link} className="block group">
                                <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-primary/10"></div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <MapPin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                            {area.name}
                                        </h3>

                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">
                                            {area.role}
                                        </p>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        Explore Routes <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Contextual Block: National Infrastructure */}
                    <div className="mt-16 border-t border-gray-200 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Jeddah to Makkah Taxi Route</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Direct taxi transfers from King Abdulaziz Airport to Makkah hotels operate 24/7. Fixed rates available for all groups.
                            </p>
                            <Link href="/routes/jeddah-makkah/">
                                <Button className="text-black font-bold border-b-2 border-black rounded-none px-0 py-0 h-auto hover:bg-transparent hover:border-primary transition-colors">
                                    Get Jeddah to Makkah Quote
                                </Button>
                            </Link>
                        </div>
                        <div className="h-64 bg-gray-200 rounded-2xl relative overflow-hidden">
                            <Image
                                src="/hero-slide-4.webp"
                                alt="Haramain Railway connection with best online taxi service"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>



            {/* Customer Reviews Section - UGC for Koray's Methodology */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Top Rated Customer Reviews
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Passengers evaluate <strong>Taxi Service KSA</strong> as a professional premium transfer service known for reliability.
                        </p>
                    </div>

                    {/* Trustpilot Review Collector */}
                    <div className="mb-12 flex justify-center">
                        <div
                            className="trustpilot-widget w-full max-w-4xl"
                            data-locale="en-US"
                            data-template-id="56278e9abfbbba0bdcd568bc"
                            data-businessunit-id="69590063ca6f6aed3292cfb9"
                            data-style-height="52px"
                            data-style-width="100%"
                            data-token="fab9a024-f184-45ab-904b-1cf6f5e9b94a"
                        >
                            <a href="https://www.trustpilot.com/review/taxiserviceksa.com" target="_blank" rel="nofollow noopener noreferrer">
                                Trustpilot
                            </a>
                        </div>
                    </div>

                    {/* Reviews Display */}
                    <div className="mb-12">
                        <ReviewsDisplay limit={3} />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
                        <Link href="/submit-review/">
                            <Button size="lg" className="w-full lg:w-auto bg-black text-white hover:bg-gray-800 font-bold min-h-[56px] px-8">
                                <Star className="w-5 h-5 mr-2" />
                                Share Your Experience
                            </Button>
                        </Link>
                        <a
                            href="https://www.trustpilot.com/review/taxiserviceksa.com?utm_medium=trustbox&utm_source=ReviewCollector"
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="w-full lg:w-auto"
                        >
                            <Button size="lg" className="w-full lg:w-auto bg-[#00b67a] text-white hover:bg-[#00a36c] font-bold min-h-[56px] px-8 border-none">
                                <Star className="w-5 h-5 mr-2 fill-white" />
                                Review on Trustpilot
                            </Button>
                        </a>
                        <Link href="/ask-question/" className="w-full lg:w-auto">
                            <Button size="lg" variant="outline" className="w-full lg:w-auto border-2 border-black text-black hover:bg-black hover:text-white font-bold transition-colors min-h-[56px] px-8">
                                Have a Question?
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
                        WhatsApp Booking from the Best Online Taxi Service
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-4 max-w-2xl mx-auto">
                        Secure your quotation with the top-rated online taxi service in Saudi Arabia for reliable airport transfers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        {/* Primary CTA */}
                        <Link href="/booking/" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full bg-primary text-white hover:bg-blue-600 font-bold text-lg px-10 py-6 h-auto min-h-[56px] min-w-[200px] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/40"><WhatsAppIcon className="w-4 h-4 mr-2 fill-current" /> WhatsApp Booking</Button>
                        </Link>

                        {/* Secondary CTA - Email */}
                        <a href="mailto:info@taxiserviceksa.com" className="w-full sm:w-auto">
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


            {/* Bottom Sticky CTA (Mobile Only) */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:hidden animate-bounce-subtle">
                <Button 
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full bg-slate-900 hover:bg-black text-white h-14 rounded-2xl font-black text-lg shadow-2xl flex items-center justify-center gap-2 border border-white/10"
                >
                    <Car className="w-5 h-5 text-primary" /> WhatsApp Booking <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        </div >
    );
}
