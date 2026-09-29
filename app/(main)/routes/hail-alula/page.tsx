import { Metadata } from 'next';
import AlUlaTransferPage from '@/components/alula/AlUlaTransferPage';
import { alulaLinksExcept } from '@/data/alulaLinks';

const URL = 'https://taxiserviceksa.com/routes/hail-alula/';

export const metadata: Metadata = {
    title: 'Hail to AlUla Taxi | Private Transfer & Heritage Road Trip | Taxi Service KSA',
    description: 'Book a private taxi from Hail to AlUla. Link the Jubbah rock art sites with Hegra on one road trip. Hotel or Hail airport pickup, fixed price quote.',
    keywords: [
        'Hail to AlUla taxi',
        'Hail to AlUla private transfer',
        'Hail to AlUla car',
        'Hail to AlUla distance',
        'Hail to AlUla road trip',
        'Jubbah to AlUla',
        'Hail airport to AlUla',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'Hail to AlUla Taxi | Private Transfer',
        description: 'Private car from Hail to AlUla - connect two UNESCO heritage regions.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

export default function HailAlUlaRoutePage() {
    return (
        <AlUlaTransferPage
            contextName="Hail to AlUla"
            schemaDescription="Private intercity transfer from Hail city and Hail airport (HAS) to hotels and resorts in AlUla, including heritage road trips from Jubbah."
            h1="Hail to AlUla Taxi"
            badge="Hail → AlUla"
            subtitle="Private Car Service - Fixed Quote"
            heroLine="~4.5-5 Hours | Heritage Road Trip"
            bookFrom="Hail"
            bookTo="AlUla"
            breadcrumb={[
                { href: '/routes/', label: 'Routes' },
                { href: '/routes/hail-alula/', label: 'Hail to AlUla' },
            ]}
            stats={[
                { label: 'Distance', value: '~400-450 km' },
                { label: 'Drive Time', value: '~4.5-5 Hours' },
                { label: 'Pickup', value: 'Hotel / Airport' },
                { label: 'Price', value: 'Fixed Quote' },
            ]}
            introTitle="Private transfer from Hail to AlUla"
            intro={[
                'Hail and AlUla are both on the heritage route through northern Saudi Arabia. The Rock Art in the Hail Region (Jubbah and Shuwaymis) and Hegra in AlUla are both UNESCO World Heritage Sites, so many travellers visit them on the same trip.',
                'There are no direct flights or trains between the two, and the road is roughly 400-450 km, about 4.5 to 5 hours. A private car lets you leave when you want and stop along the way.',
            ]}
            stopsTitle="Trip options"
            stops={[
                { name: 'Hail city hotels', detail: 'Pickup from any hotel or residence in Hail.' },
                { name: 'Hail Airport (HAS)', detail: 'Meet and greet at arrivals, then drive to AlUla.' },
                { name: 'Jubbah rock art', detail: 'Start the day at Jubbah, then continue to AlUla (adds time; book site entry in advance).' },
                { name: 'AlUla hotels & resorts', detail: 'Town hotels, Old Town, Ashar Valley resorts and desert camps.' },
            ]}
            tipsTitle="Before you book"
            tips={[
                'Start early - the road is long and mostly desert, so daylight driving is more comfortable.',
                'Add a Jubbah stop or a day driver in AlUla to the same booking.',
                'Choose a GMC Yukon for families and extra luggage.',
                'Fixed price confirmed by email before the trip.',
            ]}
            faqs={[
                {
                    question: 'How far is Hail from AlUla?',
                    shortAnswer: 'About 400-450 km',
                    detailedAnswer: 'By road it is roughly 400-450 km depending on the route, around 4.5 to 5 hours of driving.',
                    perspectives: [],
                },
                {
                    question: 'Can I visit Jubbah and AlUla on the same trip?',
                    shortAnswer: 'Yes',
                    detailedAnswer: 'Yes. Many travellers visit the Jubbah rock art near Hail and then drive to AlUla. We can include the Jubbah stop in your transfer quote.',
                    perspectives: [],
                },
                {
                    question: 'Is there a flight from Hail to AlUla?',
                    shortAnswer: 'Usually no direct flight',
                    detailedAnswer: 'Direct flights are usually not available, so flying often means connecting through Riyadh. The road trip is often faster door to door.',
                    perspectives: [],
                },
            ]}
            relatedLinks={alulaLinksExcept('/routes/hail-alula/')}
        />
    );
}
