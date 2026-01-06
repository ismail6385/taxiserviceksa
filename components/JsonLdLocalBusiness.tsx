
import Script from 'next/script';

export default function JsonLdLocalBusiness() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "TaxiServiceKSA",
        "image": "https://taxiserviceksa.com/logo.png",
        "url": "https://taxiserviceksa.com",
        "telephone": "+966555555555",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Prince Sultan Road",
            "addressLocality": "Jeddah",
            "addressRegion": "Makkah Province",
            "postalCode": "23423",
            "addressCountry": "SA"
        },
        "priceRange": "$$",
        "areaServed": [
            {
                "@type": "City",
                "name": "Jeddah"
            },
            {
                "@type": "City",
                "name": "Makkah"
            },
            {
                "@type": "City",
                "name": "Madinah"
            }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "description": "24/7 Premium Taxi & Chauffeur Service in Saudi Arabia. Specializing in Umrah transfers, Jeddah Airport pickups, and intercity travel.",
        "paymentAccepted": "Cash, Credit Card, Apple Pay",
        "currenciesAccepted": "SAR, USD, EUR, GBP, CAD, AUD, IDR, PKR"
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
