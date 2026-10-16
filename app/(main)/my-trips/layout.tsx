import type { Metadata } from 'next';

// Private driver pages: never indexed.
export const metadata: Metadata = {
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export default function MyTripsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
