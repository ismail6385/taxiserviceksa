import { Metadata } from 'next';
import Link from 'next/link';
import ClusterArticle from '@/components/blog/GccRoadCluster';

const URL = 'https://taxiserviceksa.com/blog/saudi-to-uae-qatar-by-road-documents/';
const TITLE = 'Documents for Driving from Saudi Arabia to the UAE or Qatar (2026 Checklist)';
const DESCRIPTION = 'Going from Riyadh to Dubai, Abu Dhabi or Doha by road? Passport, Iqama, exit/re-entry visa, UAE and Qatar entry permission: what to check before you leave.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', siteName: 'Taxi Service KSA', images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Documents for road travel from Saudi Arabia' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

const faqs = [
    { q: 'Do Saudi residents need an exit/re-entry visa to drive to Dubai or Doha?', a: 'Yes, if they plan to come back to Saudi Arabia. It must be valid on the day you cross. It is usually issued through Absher.' },
    { q: 'Can GCC citizens use their national ID at the land border?', a: 'GCC citizens can often travel between GCC countries on their national ID card, but check the current rule for your nationality and carry your passport as well.' },
    { q: 'Does the driver arrange my visa?', a: 'No. The driver handles the vehicle side of the crossing. Each passenger is responsible for their own passport, visa and entry permission.' },
    { q: 'Do children need their own documents?', a: 'Yes. Every passenger, including children and infants, needs their own valid travel document and, where required, their own entry permission and exit/re-entry visa.' },
    { q: 'What if I am leaving Saudi Arabia on a final exit visa?', a: 'Then you are not coming back on that visa, so you do not need an exit/re-entry. Make sure the final exit is issued and valid before the day you travel.' },
];

export default function Page() {
    return (
        <ClusterArticle
            slug="saudi-to-uae-qatar-by-road-documents"
            eyebrow="Checklist · Saudi Arabia → UAE / Qatar"
            lead="A road trip from Riyadh to Dubai, Abu Dhabi or Doha crosses an international border. Missing paperwork is the one problem a driver cannot solve at the checkpoint, so check this before you book."
            facts={[['UAE border', 'Al Batha / Al Ghuwaifat'], ['Qatar border', 'Salwa / Abu Samra'], ['Bahrain', 'King Fahd Causeway'], ['Who checks', 'Every passenger']]}
            faqs={faqs}
        >
            <p>
                This is a practical checklist, not legal advice. Entry rules depend on your nationality and residency and they change, so confirm your own situation with the official authorities before you travel.
            </p>

            <h2>1. A valid passport for every passenger</h2>
            <p>
                Everyone in the car needs their own travel document, children included. Check expiry dates now: many countries expect a passport to be valid for several months beyond your stay. GCC citizens can often use their national ID card at GCC land borders, but carrying the passport too avoids surprises.
            </p>

            <h2>2. Permission to enter the UAE or Qatar</h2>
            <p>
                Depending on your nationality and residency, you may enter visa-free, get a visa on arrival, or need a visa or permit before you travel. Some residents of GCC countries qualify for simplified entry, depending on nationality and profession. Check the official source for the country you are entering:
            </p>
            <ul>
                <li><strong>UAE (Dubai, Abu Dhabi):</strong> the Federal Authority for Identity, Citizenship, Customs and Port Security, <a href="https://icp.gov.ae" target="_blank" rel="noopener noreferrer">icp.gov.ae</a>.</li>
                <li><strong>Qatar (Doha):</strong> the Hayya portal, <a href="https://www.hayya.qa" target="_blank" rel="noopener noreferrer">hayya.qa</a>, and Qatar&apos;s Ministry of Interior.</li>
                <li><strong>Bahrain:</strong> <a href="https://www.evisa.gov.bh" target="_blank" rel="noopener noreferrer">evisa.gov.bh</a>.</li>
            </ul>
            <p>If you are flying onward from Doha, Dubai or Abu Dhabi, also check that you meet the entry rules of your final destination.</p>

            <h2>3. For Saudi residents: Iqama and exit/re-entry</h2>
            <ul>
                <li><strong>Valid Iqama.</strong> It should not expire while you are away.</li>
                <li><strong>Exit/re-entry visa.</strong> Needed if you are coming back to Saudi Arabia. It is usually issued through <a href="https://www.absher.sa" target="_blank" rel="noopener noreferrer">Absher</a> by you or your sponsor, and each dependent needs their own.</li>
                <li><strong>Final exit.</strong> If you are leaving for good, the final exit visa replaces the exit/re-entry and must be issued before you travel.</li>
            </ul>

            <h2>4. What the driver takes care of</h2>
            <p>
                On our cross-border routes, the driver handles the vehicle side: the car&apos;s registration and exit paperwork, the insurance it needs in the UAE, Qatar or Bahrain, and any vehicle inspection. The driver also tells you where to go and in what order at each checkpoint. What the driver cannot do is issue visas, fix a missing exit/re-entry, or speed up immigration.
            </p>

            <h2>5. On the day</h2>
            <ul>
                <li>Keep passports, Iqamas and any printed visas in a bag in the cabin, not in a suitcase.</li>
                <li>Have digital copies on your phone in case a printout is needed.</li>
                <li>Allow extra time at the border, especially at weekends and during holidays.</li>
                <li>If your flight is the reason for the trip, carry the booking confirmation as well.</li>
            </ul>

            <h2>Which border for which destination</h2>
            <p>
                Dubai and Abu Dhabi: Al Batha (Saudi) and Al Ghuwaifat (UAE). Doha: Salwa (Saudi) and Abu Samra (Qatar). Bahrain: the King Fahd Causeway. Route guides: <Link href="/blog/riyadh-to-doha-by-road-guide/">Riyadh to Doha</Link>, <Link href="/blog/riyadh-to-abu-dhabi-by-road-guide/">Riyadh to Abu Dhabi</Link>, <Link href="/blog/riyadh-to-dubai-airport-by-car/">Riyadh to Dubai Airport</Link>.
            </p>

            <h2>Not sure everyone can cross?</h2>
            <p>
                If one person in your group cannot enter the UAE or Qatar in time, a domestic airport may work better. Dammam is about 4 hours from Riyadh and Jeddah is a full day&apos;s drive, and neither needs a visa. Compare all of them on our <Link href="/riyadh-alternative-airports/">airports from Riyadh page</Link>.
            </p>
        </ClusterArticle>
    );
}
