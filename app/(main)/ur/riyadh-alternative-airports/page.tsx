import { Metadata } from 'next';
import AltAirportsLocalized, { altAirportsFaqSchema } from '@/components/AltAirportsLocalized';

const URL = 'https://taxiserviceksa.com/ur/riyadh-alternative-airports/';
const TITLE = 'ریاض کی فلائٹ کینسل؟ دمام، دبئی، دوحہ، بحرین ایئرپورٹ تک گاڑی';
const DESCRIPTION = 'ریاض سے فلائٹ کینسل یا لیٹ؟ دمام، بحرین، دوحہ، جدہ یا دبئی ایئرپورٹ تک پرائیویٹ گاڑی۔ فاصلہ، وقت، ویزا اور فکسڈ کرایہ 1,000 ریال سے۔';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: URL,
        languages: {
            en: 'https://taxiserviceksa.com/riyadh-alternative-airports/',
            ar: 'https://taxiserviceksa.com/ar/riyadh-alternative-airports/',
            ur: URL,
            'x-default': 'https://taxiserviceksa.com/riyadh-alternative-airports/',
        },
    },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'website', siteName: 'Taxi Service KSA', locale: 'ur_PK', images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: TITLE }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

export default function Page() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(altAirportsFaqSchema('ur', URL)) }} />
            <AltAirportsLocalized lang="ur" />
        </>
    );
}
