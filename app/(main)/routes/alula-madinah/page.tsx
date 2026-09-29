import { Metadata } from 'next';
import AlUlaTransferPage from '@/components/alula/AlUlaTransferPage';
import { alulaLinksExcept } from '@/data/alulaLinks';

const URL = 'https://taxiserviceksa.com/routes/alula-madinah/';

export const metadata: Metadata = {
    title: 'AlUla to Madinah Taxi | 330 km Private Transfer | Taxi Service KSA',
    description: 'Book a private taxi from AlUla to Madinah. About 3.5 hours door to door to your Madinah hotel, the Prophet\'s Mosque area, MED airport or the Haramain train station.',
    keywords: [
        'AlUla to Madinah taxi',
        'taxi from AlUla to Madinah',
        'AlUla to Madinah private transfer',
        'AlUla to Madinah airport',
        'AlUla to Madinah car',
        'AlUla to Madinah distance',
        'AlUla to Madinah drive time',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'AlUla to Madinah Taxi | Private Transfer',
        description: 'About 330 km, 3.5 hours. Private car from your AlUla hotel to Madinah.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

export default function AlUlaMadinahRoutePage() {
    return (
        <AlUlaTransferPage
            contextName="AlUla to Madinah"
            schemaDescription="Private intercity transfer from AlUla hotels and resorts to Madinah hotels, Prince Mohammad bin Abdulaziz Airport (MED) and the Haramain train station."
            h1="AlUla to Madinah Taxi"
            badge="AlUla → Madinah"
            subtitle="Private Car Service - Fixed Quote"
            heroLine="~330 km | ~3.5 Hours | Hotel to Hotel"
            bookFrom="AlUla"
            bookTo="Madinah"
            breadcrumb={[
                { href: '/routes/', label: 'Routes' },
                { href: '/routes/alula-madinah/', label: 'AlUla to Madinah' },
            ]}
            stats={[
                { label: 'Distance', value: '~330 km' },
                { label: 'Drive Time', value: '~3.5 Hours' },
                { label: 'Pickup', value: 'Any AlUla Hotel' },
                { label: 'Price', value: 'Fixed Quote' },
            ]}
            introTitle="Private transfer from AlUla to Madinah"
            intro={[
                'Many visitors end an AlUla trip in Madinah to visit the Prophet\'s Mosque, catch a flight from Madinah airport or take the Haramain train to Makkah or Jeddah. The road trip is roughly 330 km and takes about 3.5 hours.',
                'We pick you up from your AlUla hotel, resort or campsite and drive directly to your Madinah hotel, the airport or the train station. You choose the departure time, and the driver stops for prayer, food or rest whenever you ask.',
            ]}
            stopsTitle="Common Madinah drop-offs"
            stops={[
                { name: 'Hotels near the Prophet\'s Mosque', detail: 'Drop as close to your hotel as road access allows in the central area.' },
                { name: 'Madinah Airport (MED)', detail: 'Timed to reach the airport well before your flight.' },
                { name: 'Haramain train station', detail: 'Connect to the train for Makkah, Jeddah or KAEC.' },
                { name: 'Khaybar stop on the way', detail: 'Optional stop at Khaybar fort and oasis on request (adds time).' },
            ]}
            tipsTitle="Before you book"
            tips={[
                'For a flight or train, leave AlUla with enough buffer - we can suggest a pickup time.',
                'Families with lots of luggage should choose a GMC Yukon or Hyundai Staria.',
                'Umrah travellers can continue with a Madinah Ziyarat tour or Madinah to Makkah transfer.',
                'Fixed price confirmed by email before the trip. No extra fuel charges.',
            ]}
            faqs={[
                {
                    question: 'How long is the drive from AlUla to Madinah?',
                    shortAnswer: 'About 3.5 hours',
                    detailedAnswer: 'The trip is roughly 330 km and usually takes about 3.5 hours, plus any stops you ask for.',
                    perspectives: [],
                },
                {
                    question: 'Can you drop me at Madinah airport?',
                    shortAnswer: 'Yes',
                    detailedAnswer: 'Yes. We drop at Prince Mohammad bin Abdulaziz International Airport (MED). Share your flight time so we can plan the pickup from AlUla.',
                    perspectives: [],
                },
                {
                    question: 'Is there a bus or train from AlUla to Madinah?',
                    shortAnswer: 'No train, limited buses',
                    detailedAnswer: 'There is no train between AlUla and Madinah, and bus options are limited. A private car is the most flexible option, especially for families.',
                    perspectives: [],
                },
                {
                    question: 'Can we stop at Khaybar on the way?',
                    shortAnswer: 'Yes, on request',
                    detailedAnswer: 'Yes. Khaybar is on the way to Madinah. Tell us when booking and we will include the stop in your quote.',
                    perspectives: [],
                },
            ]}
            relatedLinks={alulaLinksExcept('/routes/alula-madinah/')}
            routeGraph={{ originSlug: 'alula', currentSlug: 'alula-madinah' }}
        />
    );
}
