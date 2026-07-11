"use client";

import HomeHero from '@/components/HomeHero';
import HomeTrustBar from '@/components/HomeTrustBar';
import ServiceQuickLinks from '@/components/ServiceQuickLinks';
import HomeSocialProof from '@/components/HomeSocialProof';
import HomeExplore from '@/components/HomeExplore';
import HomePopularRoutes from '@/components/HomePopularRoutes';
import HomeDayTrips from '@/components/HomeDayTrips';
import HomeHourlyDriver from '@/components/HomeHourlyDriver';
import HomeDriverStandards from '@/components/HomeDriverStandards';
import HomeB2B from '@/components/HomeB2B';
import HomeTestimonials from '@/components/HomeTestimonials';
import HomeFAQ from '@/components/HomeFAQ';
import HomeRouteDirectory from '@/components/HomeRouteDirectory';
import HomeDayTripDirectory from '@/components/HomeDayTripDirectory';
import HomeNewsletter from '@/components/HomeNewsletter';
import Script from 'next/script';

import JsonLdFAQ from '@/components/JsonLdFAQ';
import { Blog } from '@/lib/blogService';

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
            answer: "VIP transfer quotes are available through the <a href='/booking/' class='text-primary hover:underline font-bold'>online quote form</a> or email at taxiserviceksa9988@gmail.com. Your request requires pickup location, destination, and preferred vehicle type. Quotations are sent via email."
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
            <HomeHero />

            {/* Trust Bar */}
            <HomeTrustBar />

            {/* Quick Service Links */}
            <ServiceQuickLinks />

            {/* Social Proof Gallery */}
            <HomeSocialProof />

            {/* Explore Destinations */}
            <HomeExplore />

            {/* Most Popular Routes */}
            <HomePopularRoutes />

            {/* Top Sightseeing Day Trips */}
            <HomeDayTrips />

            {/* Hourly Driver Promo */}
            <HomeHourlyDriver />

            {/* Driver Standards */}
            <HomeDriverStandards />

            {/* B2B Partner Section */}
            <HomeB2B />

            {/* Testimonials */}
            <HomeTestimonials />

            {/* FAQ */}
            <HomeFAQ faqs={faqs} />

            {/* Route Directory */}
            <HomeRouteDirectory />

            {/* Day Trip Directory */}
            <HomeDayTripDirectory />

            {/* Newsletter Signup */}
            <HomeNewsletter />

        </div >
    );
}
