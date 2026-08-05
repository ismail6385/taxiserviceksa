import { Metadata } from 'next';
import CorporateBahrainTransferPage from '@/components/CorporateBahrainTransferPage';
import { getCorporateBahrainTransfer } from '@/data/corporateBahrainTransfers';

export const metadata: Metadata = {
    title: "Marriott Dammam to Bahrain VIP Taxi | Corporate Executive Transfer | Taxi Service KSA",
    description: "VIP taxi and executive chauffeur service from Dammam, Al Khobar and Dhahran to Bahrain for Marriott staff, contractors and visiting professionals. King Fahd Causeway, fixed corporate rates, invoicing on request.",
    keywords: ["Marriott Dammam to Bahrain taxi","Marriott Dammam Bahrain transfer","Marriott corporate taxi Dammam","Dammam to Bahrain VIP taxi","King Fahd Causeway executive transfer"],
    alternates: {
        canonical: "https://taxiserviceksa.com/routes/marriott-dammam-to-bahrain-taxi/",
    },
    openGraph: {
        title: "Marriott Dammam to Bahrain VIP Taxi | Taxi Service KSA",
        description: 'Executive VIP transfer from the Eastern Province to Bahrain via King Fahd Causeway, built for corporate travel.',
        url: "https://taxiserviceksa.com/routes/marriott-dammam-to-bahrain-taxi/",
        type: 'website',
    },
};

export default function MarriottDammamToBahrainTaxiPage() {
    const company = getCorporateBahrainTransfer("marriott")!;
    return <CorporateBahrainTransferPage company={company} />;
}
