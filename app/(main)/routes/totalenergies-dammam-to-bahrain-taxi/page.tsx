import { Metadata } from 'next';
import CorporateBahrainTransferPage from '@/components/CorporateBahrainTransferPage';
import { getCorporateBahrainTransfer } from '@/data/corporateBahrainTransfers';

export const metadata: Metadata = {
    title: "TotalEnergies Dammam to Bahrain VIP Taxi | Corporate Executive Transfer | Taxi Service KSA",
    description: "VIP taxi and executive chauffeur service from Dammam, Al Khobar and Dhahran to Bahrain for TotalEnergies staff, contractors and visiting professionals. King Fahd Causeway, fixed corporate rates, invoicing on request.",
    keywords: ["TotalEnergies Dammam to Bahrain taxi","TotalEnergies Dammam Bahrain transfer","TotalEnergies corporate taxi Dammam","Dammam to Bahrain VIP taxi","King Fahd Causeway executive transfer"],
    alternates: {
        canonical: "https://taxiserviceksa.com/routes/totalenergies-dammam-to-bahrain-taxi/",
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'TotalEnergies Dammam to Bahrain VIP Taxi | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: "TotalEnergies Dammam to Bahrain VIP Taxi | Taxi Service KSA",
        description: 'Executive VIP transfer from the Eastern Province to Bahrain via King Fahd Causeway, built for corporate travel.',
        url: "https://taxiserviceksa.com/routes/totalenergies-dammam-to-bahrain-taxi/",
        type: 'website',
    },
};

export default function TotalenergiesDammamToBahrainTaxiPage() {
    const company = getCorporateBahrainTransfer("totalenergies")!;
    return <CorporateBahrainTransferPage company={company} />;
}
