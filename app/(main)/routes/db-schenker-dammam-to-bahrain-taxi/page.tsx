import { Metadata } from 'next';
import CorporateBahrainTransferPage from '@/components/CorporateBahrainTransferPage';
import { getCorporateBahrainTransfer } from '@/data/corporateBahrainTransfers';

export const metadata: Metadata = {
    title: "DB Schenker Dammam to Bahrain VIP Taxi | Corporate Executive Transfer | Taxi Service KSA",
    description: "VIP taxi and executive chauffeur service from Dammam, Al Khobar and Dhahran to Bahrain for DB Schenker staff, contractors and visiting professionals. King Fahd Causeway, fixed corporate rates, invoicing on request.",
    keywords: ["DB Schenker Dammam to Bahrain taxi","DB Schenker Dammam Bahrain transfer","DB Schenker corporate taxi Dammam","Dammam to Bahrain VIP taxi","King Fahd Causeway executive transfer"],
    alternates: {
        canonical: "https://taxiserviceksa.com/routes/db-schenker-dammam-to-bahrain-taxi/",
    },
    openGraph: {
        images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'DB Schenker Dammam to Bahrain VIP Taxi | Taxi Service KSA' }],
        siteName: 'Taxi Service KSA',
        title: "DB Schenker Dammam to Bahrain VIP Taxi | Taxi Service KSA",
        description: 'Executive VIP transfer from the Eastern Province to Bahrain via King Fahd Causeway, built for corporate travel.',
        url: "https://taxiserviceksa.com/routes/db-schenker-dammam-to-bahrain-taxi/",
        type: 'website',
    },
};

export default function DbSchenkerDammamToBahrainTaxiPage() {
    const company = getCorporateBahrainTransfer("db-schenker")!;
    return <CorporateBahrainTransferPage company={company} />;
}
