
import { Metadata } from 'next';
import HomeClient from './page-client';

export const metadata: Metadata = {
  title: 'Taxi Service in Saudi Arabia | Umrah & Airport Taxi KSA',
  description: 'Book reliable taxi service in Saudi Arabia for Umrah, airport transfers & city travel. 24/7 airport taxi with professional drivers. Experienced & Safe.',
  alternates: {
    canonical: 'https://taxiserviceksa.com/',
  },
  openGraph: {
    title: 'Taxi Service in Saudi Arabia | Umrah & Airport Taxi KSA',
    description: 'Book reliable taxi service in Saudi Arabia for Umrah, airport transfers & city travel. 24/7 airport taxi with professional drivers. Experienced & Safe.',
    url: 'https://taxiserviceksa.com/',
    siteName: 'Taxi Service KSA',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return <HomeClient />;
}
