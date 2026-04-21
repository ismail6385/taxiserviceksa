import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ask a Question | Taxi Service KSA',
    description: 'Have a question about our taxi service? Our experienced drivers will answer within 24 hours.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/ask-question/',
    },
};

export default function AskQuestionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
