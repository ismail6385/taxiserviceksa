import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Track Booking | Taxi Service KSA',
    description: 'Track your booking status with Taxi Service KSA by entering your Booking ID or Email.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/track-booking/',
    },
};

export default function TrackBookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
