import { Metadata } from 'next';
import CorporateBahrainTransferPage from '@/components/CorporateBahrainTransferPage';
import { getCorporateBahrainTransfer } from '@/data/corporateBahrainTransfers';

export const metadata: Metadata = {
    title: "Siemens Dammam to Bahrain VIP Taxi | Corporate Executive Transfer | Taxi Service KSA",
    description: "VIP taxi and executive chauffeur service from Dammam, Al Khobar and Dhahran to Bahrain for Siemens staff, contractors and visiting professionals. King Fahd Causeway, fixed corporate rates, invoicing on request.",
    keywords: ["Siemens Dammam to Bahrain taxi","Siemens Dammam Bahrain transfer","Siemens corporate taxi Dammam","Dammam to Bahrain VIP taxi","King Fahd Causeway executive transfer"],
    alternates: {
        canonical: "https://taxiserviceksa.com/routes/siemens-dammam-to-bahrain-taxi/",
    },
    openGraph: {
        title: "Siemens Dammam to Bahrain VIP Taxi | Taxi Service KSA",
        description: 'Executive VIP transfer from the Eastern Province to Bahrain via King Fahd Causeway, built for corporate travel.',
        url: "https://taxiserviceksa.com/routes/siemens-dammam-to-bahrain-taxi/",
        type: 'website',
    },
};

export default function SiemensDammamToBahrainTaxiPage() {
    const company = getCorporateBahrainTransfer("siemens")!;
    return <CorporateBahrainTransferPage company={company} />;
}
