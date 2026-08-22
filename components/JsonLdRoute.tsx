

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


    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TaxiService",
                "name": `${routeName} Private Transfer`,
                "description": description,
                "provider": {
                    "@type": "Organization",
                    "@id": `${baseUrl}/#organization`,
                    "name": "Taxi Service KSA",
                    "url": baseUrl
                },
                "areaServed": [
                    { "@type": "City", "name": from },
                    { "@type": "City", "name": to }
                ]
            }
        ]
    };

    const id = `route-schema-${from.toLowerCase()}-${to.toLowerCase()}`;

    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
