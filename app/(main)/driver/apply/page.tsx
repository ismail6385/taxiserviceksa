import { Metadata } from 'next';
import { CheckCircle2, Camera, MapPin, Clock } from 'lucide-react';
import Hero from '@/components/Hero';
import DriverApplyButton from '@/components/driver-onboarding/DriverApplyButton';

export const metadata: Metadata = {
    title: 'Become a Driver Partner | Taxi Service KSA',
    description: 'Apply to join Taxi Service KSA as a professional driver-partner. Complete your driver and vehicle profile online in minutes.',
    alternates: { canonical: 'https://taxiserviceksa.com/driver/apply/' },
};

export default function DriverApplyPage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Hero
                h1Text="Become a Driver Partner with Taxi Service KSA"
                title={<span className="bg-primary text-white hover:text-black px-4 py-2 rounded-lg inline-block">Join Our Driver Network</span>}
                subtitle="Complete Your Profile Online"
                location="Takes about 10 minutes"
                hideBookingForm
            />

            <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
                <p className="text-gray-600 mb-10 leading-relaxed">
                    Click below to start your own driver and vehicle profile. You&apos;ll need a few photos of your vehicle and some basic details about yourself. Our team will review your profile and contact you once it&apos;s approved.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
                    <InfoCard icon={<CheckCircle2 className="w-5 h-5 text-primary" />} title="Your Details" desc="Name, contact info, languages & experience" />
                    <InfoCard icon={<Camera className="w-5 h-5 text-primary" />} title="Vehicle Photos" desc="Front, rear, interior & luggage space" />
                    <InfoCard icon={<MapPin className="w-5 h-5 text-primary" />} title="Service Areas" desc="Pick the cities you can cover" />
                </div>

                <DriverApplyButton />

                <p className="text-xs text-gray-400 mt-6 flex items-center justify-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> You can save your progress and finish later using the same link.
                </p>
            </section>
        </div>
    );
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
            <div className="mb-2">{icon}</div>
            <p className="font-bold text-sm text-gray-900">{title}</p>
            <p className="text-xs text-gray-500 mt-1">{desc}</p>
        </div>
    );
}
