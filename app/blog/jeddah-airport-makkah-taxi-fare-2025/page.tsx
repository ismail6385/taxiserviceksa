
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, AlertTriangle, Car, Train, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Jeddah Airport to Makkah Taxi Fare 2025: Official vs Private Rates',
    description: 'Updated 2025 pricing guide for Jeddah Airport to Makkah. Compare fares for Uber, Careem, Haramain Train, and Private Taxis. Avoid hidden fees.',
    keywords: ['Jeddah Airport to Makkah taxi fare 2025', 'taxi price jeddah airport to haram', 'uber cost jeddah to makkah', 'haramain train vs taxi cost'],
};

export default function TaxiFareGuide2025() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-emerald-900 text-white pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="bg-white/10 text-emerald-100 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        2025 Pricing Update
                    </span>
                    <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        How Much Should You Pay for a Taxi from Jeddah Airport to Makkah?
                    </h1>
                    <p className="text-emerald-100 text-lg md:text-xl leading-relaxed">
                        Don't get overcharged. We compare the real costs of Airport Taxis, Uber, Careem, and Private Drivers for the 2025 Umrah season.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Hook */}
                <div className="prose prose-lg prose-gray max-w-none mb-12">
                    <p className="text-xl font-medium text-gray-800 leading-relaxed">
                        It's the most common question first-time pilgrims ask: <em>"What is the fair price from Jeddah Airport to Makkah?"</em>
                    </p>
                    <p>
                        Get it right, and you start your Umrah with peace of mind. Get it wrong, and you could pay double—or worse, end up in an unsafe, unlicensed car.
                    </p>
                    <p>
                        In 2025, prices have changed due to fuel adjustments and new airport regulations. Here is the definitive breakdown of costs.
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="my-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Price Comparison (2025)</h2>
                    <div className="border rounded-2xl overflow-hidden shadow-sm">
                        <Table>
                            <TableHeader className="bg-gray-50">
                                <TableRow>
                                    <TableHead className="w-[200px] font-bold text-gray-900">Transport Type</TableHead>
                                    <TableHead className="font-bold text-gray-900">Average Cost (SAR)</TableHead>
                                    <TableHead className="font-bold text-gray-900">Pros</TableHead>
                                    <TableHead className="font-bold text-gray-900">Cons</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-semibold">
                                        <div className="flex items-center gap-2"><Car className="w-4 h-4" /> Airport Activity Taxi</div>
                                    </TableCell>
                                    <TableCell>200 - 300 SAR</TableCell>
                                    <TableCell className="text-green-600 text-sm">Available at curb</TableCell>
                                    <TableCell className="text-red-600 text-sm">Long queues, varying car quality</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">
                                        <div className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> Uber / Careem</div>
                                    </TableCell>
                                    <TableCell>240 - 350 SAR</TableCell>
                                    <TableCell className="text-green-600 text-sm">Trackable app</TableCell>
                                    <TableCell className="text-red-600 text-sm">Surge pricing (up to 500+), pickup confusion</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-semibold">
                                        <div className="flex items-center gap-2"><Train className="w-4 h-4" /> Haramain Train</div>
                                    </TableCell>
                                    <TableCell>60 - 80 SAR/person</TableCell>
                                    <TableCell className="text-green-600 text-sm">Fast (50 mins), Comfortable</TableCell>
                                    <TableCell className="text-red-600 text-sm">Fixed schedule, strict luggage limits, taxi needed after station</TableCell>
                                </TableRow>
                                <TableRow className="bg-emerald-50">
                                    <TableCell className="font-semibold text-emerald-900">
                                        <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Private Booking (Us)</div>
                                    </TableCell>
                                    <TableCell className="font-bold text-emerald-700">200 SAR (Fixed)</TableCell>
                                    <TableCell className="text-emerald-700 text-sm">Meet & Greet, Help with luggage, No waiting</TableCell>
                                    <TableCell className="text-emerald-700 text-sm">Pre-booking required</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* Detailed Sections */}
                <div className="grid gap-12">

                    {/* Section 1 */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. The "Green Taxi" (Airport Official)</h2>
                        <p className="text-gray-700 mb-4">
                            These are the official green taxis you see lined up. They run on a meter usually, but many drivers will try to negotiate a fixed price ("maqtoo") of 250-300 SAR.
                        </p>
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                            <p className="text-sm text-orange-800">
                                <strong>Warning:</strong> During peak times (Ramadan/Hajj), queues can last over 45 minutes standing in the humidity.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Ride Apps: Uber & Careem</h2>
                        <p className="text-gray-700 mb-4">
                            Apps are convenient, but Jeddah Airport has specific pickup zones that can be confusing to find (often requiring a walk to the parking garage).
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>The Surge Trap:</strong> If 3 big flights land at once, Uber prices can jump from 220 SAR to 450 SAR instantly. We have seen pilgrims pay 600 SAR during last Ramadan.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Private Pre-booked Transfer (Best Value)</h2>
                        <p className="text-gray-700 mb-4">
                            For families or those with luggage, this is the smartest option. You pay a fixed rate (usually around 200-250 SAR for a Sedan, 400 SAR for a GMC).
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Driver waits with your name sign.</li>
                            <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> Price is locked before you fly.</li>
                            <li className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="w-5 h-5 text-emerald-500" /> No struggling with bags.</li>
                        </ul>

                        <div className="bg-gray-100 p-8 rounded-2xl text-center">
                            <h3 className="text-xl font-bold mb-4">Check Our Fixed Rates for 2025</h3>
                            <div className="flex justify-center gap-4">
                                <Link href="/booking/">
                                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-6 rounded-xl">
                                        View Prices & Book
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What About the Train? (Haramain High Speed)</h2>
                        <p className="text-gray-700 mb-4">
                            The train is excellent but has strict limitations.
                        </p>
                        <ul className="space-y-3 pl-4 border-l-2 border-gray-200">
                            <li className="text-gray-700"><strong>Luggage:</strong> You are strictly limited to 1 large bag. If you have Zamzam + Bag + Carry-on, you might be denied boarding.</li>
                            <li className="text-gray-700"><strong>Last Mile:</strong> The train stops at Rusaifa Station, which is still 15 minutes away from the Haram. You will need <em>another</em> taxi from there.</li>
                            <li className="text-gray-700"><strong>Schedule:</strong> If your flight lands at 2 AM, there might be no trains until morning.</li>
                        </ul>
                    </div>

                </div>

                {/* Conclusion */}
                <div className="mt-16 border-t pt-8">
                    <h3 className="text-2xl font-bold mb-4">The Verdict</h3>
                    <p className="text-gray-700 mb-6">
                        If you are a solo traveler with a backpack, take the <strong>Train</strong> if the schedule aligns. <br />
                        If you are a family, elderly, or have luggage, a <strong>Private Taxi</strong> is cheaper and faster overall.
                    </p>
                    <p className="text-sm text-gray-500 italic">
                        * Prices mentioned are average estimates for regular season 2025 and may vary during Ramadan/Hajj.
                    </p>
                </div>

            </div>
        </main>
    );
}
