import { Metadata } from 'next';
import Link from 'next/link';
import ClusterArticle from '@/components/blog/GccRoadCluster';

const URL = 'https://taxiserviceksa.com/blog/riyadh-flights-cancelled-india-pakistan/';
const TITLE = 'Riyadh Flight to India or Pakistan Cancelled? Your Options by Road';
const DESCRIPTION = 'Air India, IndiGo and other airlines paused Riyadh flights in October 2026. How to reach Dammam, Jeddah, Bahrain, Doha or Dubai for a flight home, with documents and fares.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: URL },
    openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article', siteName: 'Taxi Service KSA', images: [{ url: 'https://taxiserviceksa.com/og-image.jpg', width: 1200, height: 630, alt: 'Flying home to India or Pakistan from another Saudi or Gulf airport' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://taxiserviceksa.com/og-image.jpg'] },
};

const faqs = [
    { q: 'My Air India or IndiGo flight from Riyadh is cancelled. What should I do first?', a: 'Contact the airline about rebooking or a refund, and ask whether they can move you to a flight from another airport such as Dammam or Jeddah. Only book a car once your new flight is confirmed.' },
    { q: 'Which airport is best for flights to India or Pakistan if Riyadh is disrupted?', a: 'For most people, Dammam (DMM). It is about 4 hours by road, needs no visa because it is inside Saudi Arabia, and normally has direct flights to many Indian and Pakistani cities. Check that your airline is operating there.' },
    { q: 'Can I fly home from Dubai, Doha or Bahrain instead?', a: 'Often, yes, as they have many flights to India and Pakistan. But it is an international border crossing, and many Indian and Pakistani passport holders need a visa or entry permit for the UAE, Qatar or Bahrain. Check your eligibility before you go.' },
    { q: 'I have a lot of luggage. Which car should I book?', a: 'A sedan takes about 2 large suitcases. For more, choose an SUV (about 4–5 cases) or, on Riyadh to Jeddah, the Hyundai Staria VIP. Tell us your bag count when you book.' },
    { q: 'I am leaving Saudi Arabia on final exit. Does that change anything?', a: 'Only that you need the final exit issued and valid before you travel. For a domestic airport like Dammam or Jeddah you simply fly out from there; for a land border, the final exit is checked at the crossing.' },
];

export default function Page() {
    return (
        <ClusterArticle
            slug="riyadh-flights-cancelled-india-pakistan"
            eyebrow="For travellers flying to India or Pakistan"
            lead="Several airlines that fly between Riyadh and India or Pakistan paused their Riyadh flights in October 2026. If you need to get home, these are the realistic ways to reach another airport by road."
            facts={[['Dammam (DMM)', '≈ 4 h · no visa'], ['Jeddah (JED)', 'Full day · no visa'], ['Bahrain / Doha', '4–8 h + border'], ['Dubai', '≈ 9–10 h + border']]}
            faqs={faqs}
        >
            <h2>What has happened to India and Pakistan flights from Riyadh</h2>
            <p>
                After attacks on Saudi airports in early October 2026, Air India and Air India Express suspended their Riyadh flights until 10 October, IndiGo until 9 October and Akasa Air until 10 October, according to <a href="https://www.indiatvnews.com/news/india/air-india-air-india-express-suspend-flights-to-riyadh-till-oct-10-after-houthi-claim-of-strike-in-saudi-arabia-2026-10-08-1056463" target="_blank" rel="noopener noreferrer">India TV</a> and <a href="https://traveltradejournal.com/indian-airlines-suspend-riyadh-flights-amid-security-concerns-embassy-issues-advisory/" target="_blank" rel="noopener noreferrer">Travel Trade Journal</a>. PIA was also reported to have suspended Riyadh flights. Across all airlines, about half of Riyadh&apos;s departures were cancelled on 8 October, as reported by <a href="https://www.arabianbusiness.com/business/transport/riyadh-airport-flights-cancelled" target="_blank" rel="noopener noreferrer">Arabian Business</a>.
            </p>
            <p>These dates can be extended or shortened. Always check with your airline and, for Indian nationals, the Indian Embassy in Riyadh&apos;s advisories.</p>

            <h2>Step 1: talk to the airline before you book a car</h2>
            <p>
                Airlines affected by the suspension are generally offering rebooking or refunds. Ask specifically whether they can put you on a flight from another airport. If the airline moves you to Dammam or Jeddah, the drive is your only extra cost; if you buy a new ticket yourself, compare the airports below first.
            </p>

            <h2>Step 2: choose the airport</h2>
            <h3>Dammam (DMM): the first one to check</h3>
            <p>
                King Fahd International Airport in Dammam is about 400 km and around 4 hours from Riyadh. It is inside Saudi Arabia, so there is no border and no visa to think about. Dammam normally has direct flights to several Indian and Pakistani cities, though schedules are changing at the moment, so confirm your flight. Private car: Sedan 1,000 SAR, SUV 1,500 SAR. <Link href="/routes/riyadh-to-dammam-airport/">Riyadh to Dammam Airport</Link>.
            </p>
            <h3>Jeddah (JED): more flights, a much longer drive</h3>
            <p>
                Jeddah&apos;s King Abdulaziz International Airport has a very wide choice of flights to the subcontinent, and again no visa is needed. The catch is distance: about 950–1,000 km, a full day on the road. Private car from 1,000 SAR (sedan); the Hyundai Staria VIP at 1,600 SAR suits a family with a lot of luggage. <Link href="/routes/riyadh-to-jeddah-airport/">Riyadh to Jeddah Airport</Link>.
            </p>
            <h3>Bahrain, Doha or Dubai: only if your visa allows</h3>
            <p>
                These airports have many flights to India and Pakistan, but getting there means crossing an international border by road. Many Indian and Pakistani passport holders need a visa or entry permit for Bahrain, Qatar or the UAE; some Saudi residents qualify for easier entry depending on profession and nationality. If everyone in your group can enter, see <Link href="/routes/riyadh-bahrain/">Riyadh to Bahrain</Link> (SUV 2,000 SAR), <Link href="/blog/riyadh-to-doha-by-road-guide/">Riyadh to Doha</Link> (GMC 3,000 SAR) or <Link href="/blog/riyadh-to-dubai-airport-by-car/">Riyadh to Dubai Airport</Link> (from 3,500 SAR).
            </p>

            <h2>Step 3: check your Saudi documents</h2>
            <ul>
                <li><strong>Going on leave and coming back:</strong> a valid Iqama and an exit/re-entry visa for every family member.</li>
                <li><strong>Leaving for good:</strong> your final exit must be issued before the day you travel.</li>
                <li><strong>Crossing a land border:</strong> plus entry permission for Bahrain, Qatar or the UAE.</li>
            </ul>
            <p>Our <Link href="/blog/saudi-to-uae-qatar-by-road-documents/">documents checklist</Link> has more detail and the official links.</p>

            <h2>Step 4: plan for luggage</h2>
            <p>
                Trips home often mean big suitcases, boxes and gifts. Count every piece before you book: a sedan takes about 2 large suitcases, an SUV about 4–5, and a van more. One vehicle for the whole family costs one fare, not one per person, which usually works out well for families going home together.
            </p>

            <h2>Step 5: time the drive to the flight</h2>
            <p>
                For Dammam, leave Riyadh at least 7–8 hours before an international departure. For Jeddah, plan to drive overnight for a morning flight. Send us your flight number and time; we suggest the pickup time and keep an eye on changes you tell us about.
            </p>

            <p>
                All options side by side, with fares: <Link href="/riyadh-alternative-airports/">airports you can reach from Riyadh</Link>. Book on WhatsApp at +966 57 580 6733; you can message us in English or Urdu.
            </p>
        </ClusterArticle>
    );
}
