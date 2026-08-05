import { Metadata } from 'next';
import CorporateBahrainTransferPage from '@/components/CorporateBahrainTransferPage';
import { getCorporateBahrainTransfer } from '@/data/corporateBahrainTransfers';

export const metadata: Metadata = {
    title: "Toyota Dammam to Bahrain VIP Taxi | Corporate Executive Transfer | Taxi Service KSA",
    description: "VIP taxi and executive chauffeur service from Dammam, Al Khobar and Dhahran to Bahrain for Toyota staff, contractors and visiting professionals. King Fahd Causeway, fixed corporate rates, invoicing on request.",
    keywords: ["Toyota Dammam to Bahrain taxi","Toyota Dammam Bahrain transfer","Toyota corporate taxi Dammam","Dammam to Bahrain VIP taxi","King Fahd Causeway executive transfer"],
    alternates: {
        canonical: "https://taxiserviceksa.com/routes/toyota-dammam-to-bahrain-taxi/",
    },
    openGraph: {
        title: "Toyota Dammam to Bahrain VIP Taxi | Taxi Service KSA",
        description: 'Executive VIP transfer from the Eastern Province to Bahrain via King Fahd Causeway, built for corporate travel.',
        url: "https://taxiserviceksa.com/routes/toyota-dammam-to-bahrain-taxi/",
        type: 'website',
    },
};

export default function ToyotaDammamToBahrainTaxiPage() {
    const company = getCorporateBahrainTransfer("toyota")!;
    return <CorporateBahrainTransferPage company={company} />;
}
