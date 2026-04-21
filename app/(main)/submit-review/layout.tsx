import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Submit Review | Taxi Service KSA',
    description: 'Share your experience with Taxi Service KSA. We value your feedback on our transport services.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/submit-review/',
    },
};

export default function SubmitReviewLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
