import Script from 'next/script';

export default function JsonLdOrganization() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Taxi Service KSA",
        "alternateName": "TaxiServiceKSA",
        "url": "https://taxiserviceksa.com",
        "logo": "https://taxiserviceksa.com/logo.png",
        "email": "taxiserviceksa9988@gmail.com",
        "description": "Premium chauffeur and taxi services across Saudi Arabia including airport transfers, Umrah transportation, and luxury intercity travel.",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA",
            "addressRegion": "Makkah Province"
        },
        "sameAs": [
            "https://www.facebook.com/taxiserviceksa",
            "https://www.instagram.com/taxiserviceksa",
            "https://twitter.com/taxiserviceksa"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "taxiserviceksa9988@gmail.com",
            "contactType": "customer service",
            "areaServed": "SA",
            "availableLanguage": ["en", "ar", "ur"]
        }
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
