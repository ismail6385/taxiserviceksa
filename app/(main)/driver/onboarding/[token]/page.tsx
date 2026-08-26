import { Metadata } from 'next';
import OnboardingWizard from '@/components/driver-onboarding/OnboardingWizard';

export const metadata: Metadata = {
    title: 'Driver Onboarding | Taxi Service KSA',
    robots: { index: false, follow: false },
};

interface Props {
    params: { token: string };
}

export default function DriverOnboardingPage({ params }: Props) {
    return (
        <div className="bg-gray-50 min-h-screen">
            <OnboardingWizard token={params.token} />
        </div>
    );
}
