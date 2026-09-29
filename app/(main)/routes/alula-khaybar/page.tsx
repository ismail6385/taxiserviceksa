import { Metadata } from 'next';
import AlUlaTransferPage from '@/components/alula/AlUlaTransferPage';
import { alulaLinksExcept } from '@/data/alulaLinks';

const URL = 'https://taxiserviceksa.com/routes/alula-khaybar/';

export const metadata: Metadata = {
    title: 'AlUla to Khaybar Day Trip | Private Car & Driver | Taxi Service KSA',
    description: 'Private day trip from AlUla to Khaybar fort and oasis, about 2 hours each way. Hotel pickup, driver waits while you explore, or one-way transfer on to Madinah.',
    keywords: [
        'AlUla to Khaybar',
        'AlUla to Khaybar day trip',
        'AlUla to Khaybar taxi',
        'Khaybar fort tour from AlUla',
        'AlUla to Khaybar distance',
        'Khaybar private driver',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'AlUla to Khaybar Day Trip | Private Car & Driver',
        description: 'Private car from AlUla to Khaybar fort and oasis with a driver who waits.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

export default function AlUlaKhaybarRoutePage() {
    return (
        <AlUlaTransferPage
            contextName="AlUla to Khaybar"
            schemaDescription="Private day trip and one-way transfer from AlUla to Khaybar fort and oasis, with optional continuation to Madinah."
            h1="AlUla to Khaybar Day Trip"
            badge="AlUla → Khaybar"
            subtitle="Private Car & Driver - Fixed Quote"
            heroLine="~2 Hours Each Way | Driver Waits"
            bookFrom="AlUla"
            bookTo="Khaybar"
            breadcrumb={[
                { href: '/routes/', label: 'Routes' },
                { href: '/routes/alula-khaybar/', label: 'AlUla to Khaybar' },
            ]}
            stats={[
                { label: 'Distance', value: '~180 km' },
                { label: 'Drive Time', value: '~2 Hours' },
                { label: 'Trip Type', value: 'Day Trip / One Way' },
                { label: 'Price', value: 'Fixed Quote' },
            ]}
            introTitle="Visit Khaybar from AlUla"
            intro={[
                'Khaybar is a historic oasis south of AlUla, known for its old fort on a basalt hill, palm groves and the wide Harrat Khaybar lava fields. It is roughly 180 km from AlUla, about 2 hours by road.',
                'Book it as a day trip, where the driver waits and brings you back to AlUla, or as a one-way transfer that continues on to Madinah after your visit.',
            ]}
            stopsTitle="Day trip outline"
            stops={[
                { name: 'Morning pickup in AlUla', detail: 'From your hotel, resort or camp.' },
                { name: 'Khaybar fort & old town', detail: 'Driver waits while you explore the fort and old mud-brick houses.' },
                { name: 'Khaybar oasis', detail: 'Palm groves and springs around the old settlement.' },
                { name: 'Return to AlUla or on to Madinah', detail: 'Back in AlUla by evening, or continue about 170 km to Madinah.' },
            ]}
            tipsTitle="Before you book"
            tips={[
                'Leave early to avoid midday heat at the fort, especially from April to October.',
                'Wear good shoes - the fort path is steep and rocky.',
                'Tell us if you want to finish in Madinah instead of returning to AlUla.',
                'Fixed price confirmed by email before the trip.',
            ]}
            faqs={[
                {
                    question: 'How far is Khaybar from AlUla?',
                    shortAnswer: 'About 180 km',
                    detailedAnswer: 'Khaybar is roughly 180 km from AlUla, around 2 hours each way by road.',
                    perspectives: [],
                },
                {
                    question: 'Does the driver wait at Khaybar?',
                    shortAnswer: 'Yes, on a day trip',
                    detailedAnswer: 'Yes. On a day trip the same driver waits while you visit and then drives you back to AlUla.',
                    perspectives: [],
                },
                {
                    question: 'Can I go from AlUla to Khaybar and then to Madinah?',
                    shortAnswer: 'Yes',
                    detailedAnswer: 'Yes. Khaybar is on the way to Madinah, so you can visit Khaybar and continue to your Madinah hotel in one trip.',
                    perspectives: [],
                },
            ]}
            relatedLinks={alulaLinksExcept('/routes/alula-khaybar/')}
        />
    );
}
