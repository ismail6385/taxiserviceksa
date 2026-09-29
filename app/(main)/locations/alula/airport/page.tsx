import { Metadata } from 'next';
import AlUlaTransferPage from '@/components/alula/AlUlaTransferPage';
import { alulaLinksExcept } from '@/data/alulaLinks';

const URL = 'https://taxiserviceksa.com/locations/alula/airport/';

export const metadata: Metadata = {
    title: 'AlUla Airport Taxi (ULH) | Hotel & Resort Transfers | Taxi Service KSA',
    description: 'Pre-book a taxi from AlUla International Airport (ULH) to your hotel, Ashar Valley resorts, Old Town or Hegra. Meet and greet, flight tracking, fixed price quote.',
    keywords: [
        'AlUla airport taxi',
        'ULH airport transfer',
        'AlUla International Airport taxi',
        'AlUla airport to Banyan Tree',
        'AlUla airport to Habitas',
        'AlUla airport to hotel',
        'taxi from AlUla airport',
        'Prince Abdul Majeed airport taxi',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'AlUla Airport Taxi (ULH) | Hotel & Resort Transfers',
        description: 'Meet and greet pickups at AlUla International Airport with a fixed price quote.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

export default function AlUlaAirportPage() {
    return (
        <AlUlaTransferPage
            contextName="AlUla Airport"
            schemaDescription="Pre-booked taxi and private transfers from AlUla International Airport (ULH) to hotels, resorts and heritage sites in AlUla."
            h1="AlUla Airport Taxi (ULH)"
            badge="AlUla International Airport"
            subtitle="Pre-Booked Airport Pickup - Fixed Quote"
            heroLine="Meet & Greet | Flight Tracking | Hotels & Resorts"
            bookFrom="AlUla International Airport (ULH)"
            bookTo="AlUla"
            breadcrumb={[
                { href: '/locations/', label: 'Locations' },
                { href: '/locations/alula/', label: 'AlUla' },
                { href: '/locations/alula/airport/', label: 'Airport Taxi' },
            ]}
            stats={[
                { label: 'Airport Code', value: 'ULH' },
                { label: 'To AlUla Town', value: '~30-40 min' },
                { label: 'Pickup', value: 'Meet & Greet' },
                { label: 'Price', value: 'Fixed Quote' },
            ]}
            introTitle="Getting from AlUla Airport to your hotel"
            intro={[
                'AlUla International Airport (ULH), formerly Prince Abdul Majeed bin Abdulaziz Airport, is a small airport outside AlUla town. It receives domestic flights from cities such as Riyadh and Jeddah, plus some seasonal international flights.',
                'Taxis are not always waiting at the terminal, and ride-hailing apps have very few cars in AlUla, especially late at night. Most hotels and resorts are spread out across the valley, so it is best to pre-book your transfer before you land.',
                'Send us your flight number and hotel name. Your driver tracks the flight, waits in arrivals with your name, helps with luggage and drives you straight to your hotel, resort gate or campsite.',
            ]}
            stopsTitle="Popular airport drop-offs"
            stops={[
                { name: 'AlUla Old Town & town hotels', detail: 'Around 30-40 minutes from the terminal, depending on your hotel.' },
                { name: 'Ashar Valley resorts', detail: 'Banyan Tree AlUla, Habitas AlUla and nearby resorts. Drop at reception or the resort gate as the resort allows.' },
                { name: 'Hegra visitor centre', detail: 'Private cars cannot drive inside Hegra. We drop you at the official visitor centre for the site tour.' },
                { name: 'Madinah, Tabuk or Khaybar', detail: 'Direct intercity transfer from the airport if you are continuing your trip by road.' },
            ]}
            tipsTitle="Before you book"
            tips={[
                'Share your flight number so we can adjust pickup time if the flight is late.',
                'Choose a GMC Yukon or van if you have more than 3 large suitcases.',
                'Some resorts only allow guest cars up to a gate or reception point. We follow the resort rules.',
                'You can add a return transfer to the airport on the same booking.',
                'Payments and price are confirmed by email before the trip. No meter, no surge pricing.',
            ]}
            faqs={[
                {
                    question: 'Are there taxis at AlUla airport?',
                    shortAnswer: 'Limited, pre-book',
                    detailedAnswer: 'Street taxis and ride-hailing cars are limited at AlUla airport, especially for late flights. A pre-booked transfer means a driver is already waiting when you land.',
                    perspectives: [],
                },
                {
                    question: 'How far is AlUla airport from AlUla Old Town?',
                    shortAnswer: 'About 30-40 minutes',
                    detailedAnswer: 'The drive from the airport to AlUla town and Old Town is usually around 30-40 minutes. Resorts in Ashar Valley and the Hegra area take a little longer.',
                    perspectives: [],
                },
                {
                    question: 'Can you pick me up if my flight is delayed?',
                    shortAnswer: 'Yes',
                    detailedAnswer: 'Yes. We track your flight number and adjust the pickup time to the actual landing time.',
                    perspectives: [],
                },
                {
                    question: 'Can I go from AlUla airport straight to Madinah?',
                    shortAnswer: 'Yes, about 3.5 hours',
                    detailedAnswer: 'Yes. Madinah is roughly 330 km from AlUla, about 3.5 hours by road. We can pick you up at arrivals and drive directly to your Madinah hotel.',
                    perspectives: [],
                },
            ]}
            relatedLinks={alulaLinksExcept('/locations/alula/airport/')}
        />
    );
}
