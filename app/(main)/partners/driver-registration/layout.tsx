import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driver Registration | Taxi Service KSA Partners',
  description: 'Apply now to become a premium driver partner. Join Taxi Service KSA to get exclusive B2B and private bookings across Saudi Arabia.',
  alternates: {
    canonical: 'https://taxiserviceksa.com/partners/driver-registration/',
  },
};

export default function DriverRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
