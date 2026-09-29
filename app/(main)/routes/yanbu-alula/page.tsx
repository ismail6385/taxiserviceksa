import { Metadata } from 'next';
import AlUlaTransferPage from '@/components/alula/AlUlaTransferPage';
import { alulaLinksExcept } from '@/data/alulaLinks';

const URL = 'https://taxiserviceksa.com/routes/yanbu-alula/';

export const metadata: Metadata = {
    title: 'Yanbu to AlUla Taxi | Private Transfer from Yanbu | Taxi Service KSA',
    description: 'Book a private taxi from Yanbu to AlUla. Hotel, Yanbu airport or port pickup, about 4-4.5 hours by road to your AlUla hotel or resort. Fixed price quote.',
    keywords: [
        'Yanbu to AlUla taxi',
        'Yanbu to AlUla private transfer',
        'Yanbu to AlUla car',
        'Yanbu to AlUla distance',
        'Yanbu to AlUla drive',
        'Yanbu port to AlUla',
        'Yanbu airport to AlUla',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'Yanbu to AlUla Taxi | Private Transfer',
        description: 'Private car from Yanbu to AlUla with a professional driver.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

export default function YanbuAlUlaRoutePage() {
    return (
        <AlUlaTransferPage
            contextName="Yanbu to AlUla"
            schemaDescription="Private intercity transfer from Yanbu hotels, Yanbu airport (YNB) and Yanbu port to hotels and resorts in AlUla."
            h1="Yanbu to AlUla Taxi"
            badge="Yanbu → AlUla"
            subtitle="Private Car Service - Fixed Quote"
            heroLine="~4-4.5 Hours | Hotel, Airport & Port Pickup"
            bookFrom="Yanbu"
            bookTo="AlUla"
            breadcrumb={[
                { href: '/routes/', label: 'Routes' },
                { href: '/routes/yanbu-alula/', label: 'Yanbu to AlUla' },
            ]}
            stats={[
                { label: 'Distance', value: '~360-400 km' },
                { label: 'Drive Time', value: '~4-4.5 Hours' },
                { label: 'Pickup', value: 'Hotel / Airport / Port' },
                { label: 'Price', value: 'Fixed Quote' },
            ]}
            introTitle="Private transfer from Yanbu to AlUla"
            intro={[
                'Yanbu is a common starting point for Red Sea visitors, cruise passengers and workers in the Yanbu industrial area who want to see AlUla. There is no direct train, and flights usually connect through another city, so a private car is often the simplest way to go.',
                'The drive is roughly 360-400 km depending on the road taken, about 4 to 4.5 hours. We pick you up from your Yanbu hotel, Yanbu airport or the port and drive you to your AlUla hotel, resort or campsite.',
            ]}
            stopsTitle="Pickup & drop-off options"
            stops={[
                { name: 'Yanbu hotels & Yanbu Al Sinaiyah', detail: 'Pickup from any hotel or residence in Yanbu city or the industrial area.' },
                { name: 'Yanbu Airport (YNB)', detail: 'Meet and greet at arrivals, then straight to AlUla.' },
                { name: 'Yanbu port', detail: 'Pickup for cruise and ferry passengers, timed to your arrival.' },
                { name: 'AlUla hotels & resorts', detail: 'Town hotels, Old Town, Ashar Valley resorts and desert camps.' },
            ]}
            tipsTitle="Before you book"
            tips={[
                'For a return trip, book Yanbu → AlUla → Yanbu together, or add day-driver hire in AlUla.',
                'Large families should choose a GMC Yukon, Hyundai Staria or Toyota Hiace.',
                'Driver stops for prayer, fuel and food whenever you ask.',
                'Fixed price confirmed by email before the trip.',
            ]}
            faqs={[
                {
                    question: 'How far is AlUla from Yanbu?',
                    shortAnswer: 'About 360-400 km',
                    detailedAnswer: 'Depending on the road taken, the drive is roughly 360-400 km and usually takes about 4 to 4.5 hours.',
                    perspectives: [],
                },
                {
                    question: 'Can you pick up from Yanbu port?',
                    shortAnswer: 'Yes',
                    detailedAnswer: 'Yes. Share your ship or ferry arrival time and we will time the pickup at the port.',
                    perspectives: [],
                },
                {
                    question: 'Can I do a day trip from Yanbu to AlUla?',
                    shortAnswer: 'Possible, but long',
                    detailedAnswer: 'It is possible but means 8-9 hours of driving in one day. We recommend at least one night in AlUla. We can also arrange a driver for sightseeing there.',
                    perspectives: [],
                },
            ]}
            relatedLinks={alulaLinksExcept('/routes/yanbu-alula/')}
            routeGraph={{ originSlug: 'yanbu', currentSlug: 'yanbu-alula' }}
        />
    );
}
