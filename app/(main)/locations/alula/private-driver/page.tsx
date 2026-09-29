import { Metadata } from 'next';
import AlUlaTransferPage from '@/components/alula/AlUlaTransferPage';
import { alulaLinksExcept } from '@/data/alulaLinks';

const URL = 'https://taxiserviceksa.com/locations/alula/private-driver/';

export const metadata: Metadata = {
    title: 'AlUla Private Driver | Full Day & Half Day Car Hire with Driver | Taxi Service KSA',
    description: 'Hire a private driver in AlUla for a half day or full day. Visit Old Town, Elephant Rock, Maraya, Dadan and the Hegra visitor centre at your own pace. Fixed quote.',
    keywords: [
        'AlUla private driver',
        'hire driver in AlUla',
        'AlUla car with driver',
        'AlUla full day driver',
        'AlUla day tour driver',
        'AlUla chauffeur',
        'AlUla taxi for the day',
        'AlUla sightseeing car',
    ],
    alternates: { canonical: URL },
    openGraph: {
        title: 'AlUla Private Driver | Full Day & Half Day Hire',
        description: 'A car and driver for the day in AlUla. Visit the sites on your own schedule.',
        url: URL,
        siteName: 'Taxi Service KSA',
        type: 'website',
        images: [{ url: 'https://taxiserviceksa.com/alula-hegra-tombs.webp' }],
    },
};

export default function AlUlaPrivateDriverPage() {
    return (
        <AlUlaTransferPage
            contextName="AlUla Private Driver"
            schemaDescription="Half-day and full-day car hire with a professional driver in AlUla for sightseeing between Old Town, Elephant Rock, Maraya, Dadan and Hegra."
            h1="AlUla Private Driver for the Day"
            badge="Car + Driver in AlUla"
            subtitle="Half Day & Full Day Hire - Fixed Quote"
            heroLine="Your Schedule | One Car All Day | Families & Groups"
            bookFrom="AlUla (hotel pickup)"
            bookTo="AlUla sightseeing - full day driver"
            breadcrumb={[
                { href: '/locations/', label: 'Locations' },
                { href: '/locations/alula/', label: 'AlUla' },
                { href: '/locations/alula/private-driver/', label: 'Private Driver' },
            ]}
            stats={[
                { label: 'Half Day', value: '~5 Hours' },
                { label: 'Full Day', value: '~10 Hours' },
                { label: 'Vehicles', value: 'Sedan to Van' },
                { label: 'Price', value: 'Fixed Quote' },
            ]}
            introTitle="Why hire a driver in AlUla"
            intro={[
                'AlUla sites are far apart. Old Town, Elephant Rock, Maraya, Dadan and the Hegra visitor centre are spread across the valley, and there is no simple public transport between them. Ride-hailing cars are few, and finding a car back from a remote site at sunset can be hard.',
                'With a private driver, one car stays with you for the whole half day or full day. The driver waits while you visit each site and takes you to the next one when you are ready, including sunset at Elephant Rock and dinner in town.',
            ]}
            stopsTitle="Sample full-day plan"
            stops={[
                { name: 'Morning: Hegra visitor centre', detail: 'Drop for your booked Hegra tour. Private cars cannot drive inside the site.' },
                { name: 'Midday: Dadan & Jabal Ikmah', detail: 'Ancient Dadan kingdom and the open-air library of rock inscriptions.' },
                { name: 'Afternoon: Old Town & Maraya', detail: 'Walk the Old Town lanes and stop by the mirrored Maraya building (exterior).' },
                { name: 'Sunset: Elephant Rock', detail: 'Driver waits at the car park while you enjoy the sunset seating area.' },
                { name: 'Evening: Dinner & hotel drop', detail: 'Restaurant stop in town, then back to your hotel or resort.' },
            ]}
            tipsTitle="Good to know"
            tips={[
                'Book tickets for Hegra, Dadan and other sites in advance through the official AlUla website.',
                'Tell us your hotel and preferred start time. We plan the day around your ticket times.',
                'Choose an SUV for families; a Hiace or Coaster for groups.',
                'Multi-day hire is available for 2-3 day AlUla trips, including airport or Madinah transfers.',
                'Fixed price confirmed by email before the trip.',
            ]}
            faqs={[
                {
                    question: 'Can I hire a car with a driver in AlUla for one day?',
                    shortAnswer: 'Yes, half or full day',
                    detailedAnswer: 'Yes. We offer half-day (around 5 hours) and full-day (around 10 hours) hire. The same driver stays with you and takes you between sites.',
                    perspectives: [],
                },
                {
                    question: 'Can the driver take me inside Hegra?',
                    shortAnswer: 'No, drop at visitor centre',
                    detailedAnswer: 'Private vehicles are not allowed inside Hegra. The driver drops you at the official visitor centre for your tour and picks you up when it ends.',
                    perspectives: [],
                },
                {
                    question: 'Is Uber available in AlUla?',
                    shortAnswer: 'Very limited',
                    detailedAnswer: 'Ride-hailing cars are limited in AlUla and waiting times can be long, especially at remote sites and at night. A day driver avoids this problem.',
                    perspectives: [],
                },
                {
                    question: 'Do you offer multi-day AlUla packages?',
                    shortAnswer: 'Yes',
                    detailedAnswer: 'Yes. We can combine a Madinah or airport pickup, 2-3 days with a driver in AlUla, and a return transfer in one booking.',
                    perspectives: [],
                },
            ]}
            relatedLinks={alulaLinksExcept('/locations/alula/private-driver/')}
        />
    );
}
