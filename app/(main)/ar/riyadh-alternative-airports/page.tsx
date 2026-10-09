import { Metadata } from 'next';
import AltAirportsLocalized, { altAirportsFaqSchema } from '@/components/AltAirportsLocalized';

const URL = 'https://taxiserviceksa.com/ar/riyadh-alternative-airports/';
const TITLE = 'رحلتك من الرياض أُلغيت؟ سيارة خاصة إلى مطار الدمام ودبي والدوحة والبحرين';
const DESCRIPTION = 'رحلات الرياض ملغاة أو متأخرة؟ سيارة خاصة مع سائق إلى مطار الدمام أو البحرين أو الدوحة أو جدة أو دبي. المسافة والوقت والتأشيرة وأسعار ثابتة من 1,000 ريال.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: URL,
        languages: {
            en: 'https://taxiserviceksa.com/riyadh-alternative-airports/',
            ar: URL,
            ur: 'https://taxiserviceksa.com/ur/riyadh-alternative-airports/',
            'x-default': 'https://taxiserviceksa.com/riyadh-alternative-airports/',
        },
    },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'website', siteName: 'Taxi Service KSA', locale: 'ar_SA', images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: TITLE }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

export default function Page() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(altAirportsFaqSchema('ar', URL)) }} />
            <AltAirportsLocalized lang="ar" />
        </>
    );
}
