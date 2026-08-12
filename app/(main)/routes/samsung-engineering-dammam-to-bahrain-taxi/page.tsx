import { Metadata } from 'next';
import CorporateBahrainTransferPage from '@/components/CorporateBahrainTransferPage';
import { getCorporateBahrainTransfer } from '@/data/corporateBahrainTransfers';

export const metadata: Metadata = {
    title: "Samsung Engineering Dammam to Bahrain VIP Taxi | Corporate Executive Transfer | Taxi Service KSA",
    description: "VIP taxi and executive chauffeur service from Dammam, Al Khobar and Dhahran to Bahrain for Samsung Engineering staff, contractors and visiting professionals. King Fahd Causeway, fixed corporate rates, invoicing on request.",
    keywords: ["Samsung Engineering Dammam to Bahrain taxi","Samsung Engineering Dammam Bahrain transfer","Samsung Engineering corporate taxi Dammam","Dammam to Bahrain VIP taxi","King Fahd Causeway executive transfer"],
    alternates: {
        canonical: "https://taxiserviceksa.com/routes/samsung-engineering-dammam-to-bahrain-taxi/",
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Samsung Engineering Dammam to Bahrain VIP Taxi | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: "Samsung Engineering Dammam to Bahrain VIP Taxi | Taxi Service KSA",
        description: 'Executive VIP transfer from the Eastern Province to Bahrain via King Fahd Causeway, built for corporate travel.',
        url: "https://taxiserviceksa.com/routes/samsung-engineering-dammam-to-bahrain-taxi/",
        type: 'website',
    },
};

export default function SamsungEngineeringDammamToBahrainTaxiPage() {
    const company = getCorporateBahrainTransfer("samsung-engineering")!;
    return <CorporateBahrainTransferPage company={company} />;
}
