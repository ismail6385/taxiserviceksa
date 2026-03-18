'use client';

import Script from 'next/script';
import { getPrice } from '@/lib/pricing';

interface JsonLdRouteProps {
    from: string;
    to: string;
    description: string;
    distance?: string;
    duration?: string;
}

export default function JsonLdRoute({ from, to, description, distance, duration }: JsonLdRouteProps) {
    const baseUrl = 'https://taxiserviceksa.com';
    const routeName = `Taxi from ${from} to ${to}`;
    
    // Attempt to get a sample price for the offer (e.g. Camry price)
    const samplePrice = getPrice(from, to, "Toyota Camry") || 200; 

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TaxiService",
                "name": `${routeName} VIP Transfer`,
                "description": description,
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "TaxiServiceKSA",
                    "url": baseUrl,
                    "telephone": "+966 56 073 2928"
                },
                "areaServed": [
                    { "@type": "City", "name": from },
                    { "@type": "City", "name": to }
                ],
                "offers": {
                    "@type": "Offer",
                    "price": samplePrice,
                    "priceCurrency": "SAR",
                    "availability": "https://schema.org/InStock",
                    "url": `${baseUrl}/booking/`
                },
                "brand": {
                    "@type": "Brand",
                    "name": "TaxiServiceKSA"
                }
            },
            {
                "@type": "TravelAction",
                "name": routeName,
                "fromLocation": {
                    "@type": "Place",
                    "name": from,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": from,
                        "addressCountry": "SA"
                    }
                },
                "toLocation": {
                    "@type": "Place",
                    "name": to,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": to,
                        "addressCountry": "SA"
                    }
                },
                "distance": distance || "Variable",
                "instrument": {
                    "@type": "Car",
                    "name": "GMC Yukon, Mercedes S-Class, Toyota Camry, Cadillac Escalade"
                }
            }
        ]
    };

    const id = `route-schema-${from.toLowerCase()}-${to.toLowerCase()}`;

    return (
        <Script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
