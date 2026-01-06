import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, CheckCircle2, AlertTriangle, Train, Car, Droplets, ArrowRight } from 'lucide-react';
import RelatedLocations from '@/components/seo/RelatedLocations';

export const metadata: Metadata = {
    title: 'How to Transport Zamzam Water Makkah to Madinah | 2025 Guide',
    description: 'Can you take Zamzam on Haramain Train? Learn the rules for transporting Zamzam water from Makkah to Madinah. Avoid confiscation with our private taxi guide.',
    keywords: ['transport zamzam makkah to madinah', 'zamzam water haramain train', 'taking zamzam to madinah', 'makkah to madinah taxi luggage', 'zamzam water rules saudi arabia'],
    alternates: {
        canonical: 'https://transferksa.com/blog/zamzam-water-transport-makkah-madinah/',
    },
    openGraph: {
        title: 'Transporting Zamzam Water: Makkah to Madinah Guide',
        description: 'Comparison of Train vs Taxi rules for carrying Zamzam water. Ensure your blessed water arrives safely.',
        url: 'https://transferksa.com/blog/zamzam-water-transport-makkah-madinah/',
        type: 'article',
        images: [
            {
                url: 'https://transferksa.com/madinah-prophets-mosque.webp',
                width: 1200,
                height: 630,
                alt: 'Zamzam water transport guide Makkah to Madinah',
            },
        ],
    },
};

export default function ZamzamTransportGuide() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Content */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
                        <Droplets className="w-4 h-4" />
                        <span>Pilgrim Travel Guide</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        How to Transport Zamzam Water From Makkah to Madinah (2025 Rules)
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        One of the most common questions we receive from Umrah pilgrims is: <em>"Can I take my Zamzam water bottles on the train to Madinah?"</em> The answer might surprise you—and change your travel plans.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 border-t border-gray-100 pt-6">
                        <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>5 Min Read</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>Updated Jan 2025</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <article className="lg:col-span-8 space-y-8">

                        {/* The Pain Point: Train Rules */}
                        <section className="prose prose-lg max-w-none bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                                <Train className="w-6 h-6 text-red-500" />
                                The Haramain Train Restriction
                            </h2>
                            <p>
                                The <strong>Haramain High Speed Railway</strong> is world-class, but it operates more like an airline than a traditional train. Their luggage policy is strictly enforced.
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
                                <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Official Policy Warning
                                </h3>
                                <p className="text-red-700 text-sm">
                                    "Liquid containers exceeding 100ml are generally restricted in cabin baggage. Large gallons (5L Zamzam) are typically <strong>NOT permitted</strong> as carry-on or checked luggage due to spill risks."
                                </p>
                            </div>
                            <p>
                                Many prilgrims are forced to <strong>abandon their Zamzam water</strong> at the Makkah station security checkpoint because they didn't know these rules.
                            </p>
                        </section>

                        {/* The Solution: Private Taxi */}
                        <section className="prose prose-lg max-w-none bg-emerald-50 p-8 rounded-2xl border border-emerald-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                                <Car className="w-6 h-6 text-emerald-600" />
                                The Solution: Private Taxi Transfer
                            </h2>
                            <p>
                                If you are travelling with family and want to bring 5-liter Zamzam bottles (packaged or not) from Makkah to Madinah, a <strong>private car is your safest option</strong>.
                            </p>
                            <ul className="space-y-3 mt-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1" />
                                    <span><strong>Unlimited Liquids:</strong> Our vehicles (GMC Yukon, HiAce) have designated trunk space for Zamzam crates.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1" />
                                    <span><strong>Door-to-Door:</strong> We pick up the heavy bottles from your Makkah hotel lobby and carry them to your Madinah hotel room.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1" />
                                    <span><strong>No X-Rays:</strong> Avoid the stress of strict security scanners rejecting your blessed water.</span>
                                </li>
                            </ul>

                            <div className="mt-8 bg-white p-6 rounded-xl border border-emerald-200 text-center">
                                <p className="text-emerald-900 font-medium mb-4">Planning to carry Zamzam?</p>
                                <Link href="/routes/makkah-madinah/">
                                    <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold px-8 w-full sm:w-auto">
                                        Book Makkah to Madinah Taxi
                                    </Button>
                                </Link>
                                <p className="text-xs text-gray-500 mt-3">Fixed Rate SAR 450 (Sedan) • SAR 850 (GMC)</p>
                            </div>
                        </section>

                        <section className="prose prose-lg max-w-none">
                            <h2>Proper Zamzam Packaging (Nusuk Guidelines)</h2>
                            <p>
                                Even when travelling by taxi, we recommend following the official <strong>Nusuk</strong> and <strong>King Abdullah Zamzam Water Project</strong> packaging guidelines to prevent spills in the vehicle:
                            </p>
                            <ol>
                                <li><strong>Use the Box:</strong> Only buy the official 5L bottles that come in a cardboard box with a plastic heat-sealed wrap.</li>
                                <li><strong>Keep Upright:</strong> Ensure the crate is placed upright in the trunk.</li>
                                <li><strong>Avoid Loose Caps:</strong> Loose, hand-filled bottles from the Haram taps are more likely to leak and may soil your luggage.</li>
                            </ol>
                        </section>

                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 espacio-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Ride</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Don't risk your Zamzam. Secure a private GMC or Sedan for a stress-free pilgrimage transfer.
                            </p>

                            <div className="space-y-4">
                                <Link href="/routes/makkah-madinah/" className="block">
                                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all">
                                        <div className="font-bold text-gray-900 mb-1">Makkah to Madinah</div>
                                        <div className="text-sm text-gray-500 flex justify-between">
                                            <span>450 km • 4-5 Hours</span>
                                            <span className="text-primary font-bold">SAR 450</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/routes/madinah-jeddah/" className="block">
                                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all">
                                        <div className="font-bold text-gray-900 mb-1">Madinah to Jeddah</div>
                                        <div className="text-sm text-gray-500 flex justify-between">
                                            <span>400 km • 4 Hours</span>
                                            <span className="text-primary font-bold">SAR 450</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <Link href="/booking/">
                                    <Button className="w-full font-bold h-12">
                                        Check Availability
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <RelatedLocations currentCity="Makkah" />
            </div>
        </div>
    );
}
