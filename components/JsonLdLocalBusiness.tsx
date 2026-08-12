

export default function JsonLdLocalBusiness() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "@id": "https://taxiserviceksa.com/#taxiservice",
        "name": "Taxi Service KSA",
        "alternateName": "TaxiServiceKSA",
        "url": "https://taxiserviceksa.com",
        "description": "24/7 Private Car, Taxi & Executive Chauffeur Service in Saudi Arabia. Specializing in Umrah transfers, Jeddah Airport pickups, and all intercity travel across the Kingdom.",
        "serviceType": "Taxi Service",
        "provider": {
            "@type": "Organization",
            "@id": "https://taxiserviceksa.com/#organization"
        },
        "areaServed": [
            { "@type": "City", "name": "Jeddah" },
            { "@type": "City", "name": "Makkah" },
            { "@type": "City", "name": "Madinah" },
            { "@type": "City", "name": "Riyadh" },
            { "@type": "City", "name": "Tabuk" },
            { "@type": "City", "name": "Taif" },
            { "@type": "City", "name": "Yanbu" },
            { "@type": "City", "name": "AlUla" },
            { "@type": "City", "name": "Dammam" },
            { "@type": "City", "name": "Al Khobar" },
            { "@type": "City", "name": "Dhahran" },
            { "@type": "City", "name": "Jubail" },
            { "@type": "City", "name": "Abha" },
            { "@type": "City", "name": "Khamis Mushait" },
            { "@type": "City", "name": "Najran" },
            { "@type": "City", "name": "Jizan" },
            { "@type": "City", "name": "Hail" },
            { "@type": "City", "name": "Buraydah" },
            { "@type": "City", "name": "Unaizah" },
            { "@type": "City", "name": "Khaybar" },
            { "@type": "City", "name": "Qassim" },
            { "@type": "City", "name": "Hafar Al-Batin" },
            { "@type": "City", "name": "Wadi Al-Dawasir" },
            { "@type": "City", "name": "Baha" },
            { "@type": "City", "name": "Sambah" },
            { "@type": "AdministrativeArea", "name": "Saudi Arabia" }
        ],
        "sameAs": [
            "https://www.facebook.com/taxiserviceksa",
            "https://www.instagram.com/taxiserviceksa",
            "https://x.com/taxiserviceksa",
            "https://www.linkedin.com/company/taxiserviceksa",
            "https://www.tiktok.com/@taxiserviceksa",
            "https://www.youtube.com/@taxiserviceksa"
        ]
    };

    return (
        <script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
