import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Taxi Service KSA',
    description: 'Get in touch with Taxi Service KSA for reliable airport transfers, Umrah transport, and city rides.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/contact/',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
