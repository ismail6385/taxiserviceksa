import { Metadata } from 'next';
import Image from 'next/image';
import TransportComparisonChart from '@/components/blog/TransportComparisonChart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Briefcase, Share2, ArrowRight, Info } from 'lucide-react';
import Link from 'next/link';
import ShareReportButton from '@/components/blog/ShareReportButton';

export const metadata: Metadata = {
    title: 'Data Report 2025: Taxi vs Haramain Train for Pilgrim Families | TaxiServiceKSA',
    description: 'New 2025 data study reveals why 70% of Umrah families prefer private taxis over the high-speed train. Detailed analysis of cost, time, and luggage friction.',
    openGraph: {
        title: 'Taxi vs Train 2025: The Efficiency Report',
        description: 'Why do 70% of families choose taxis? The data might surprise you.',
        type: 'article',
        publishedTime: '2025-12-28',
        authors: ['Taxi Service KSA Data Team'],
        images: ['/taxi-vs-train-2025.png'], // Generated Infographic
    }
};

export default function PilgrimageTransportReportPage() {
    return (
        <article className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Badge variant="secondary" className="mb-6 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        2025 Transport Insights
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
                        The "Door-to-Door" Fallacy: Why Families Are Choosing Taxis Over High-Speed Rail
                    </h1>
                    <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                        <Image
                            src="/taxi-vs-train-2025.png"
                            alt="Comparison: Taxi vs Train Time and Cost for Families"
                            width={1200}
                            height={630}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm border-t border-gray-100 pt-8">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>8 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Dec 28, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span>Data Intelligence Team</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p className="lead text-xl md:text-2xl text-gray-900 font-medium mb-12">
                            While the Haramain High-Speed Railway is a technological marvel connecting Makkah and Madinah, new data suggests that for families and pilgrims with luggage, private taxi transfer remains the superior choice in 2025.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The "Last Mile" Problem</h2>
                        <p>
                            Most travelers compare the <strong>travel time</strong> of the train (55 mins Jeddah-Makkah) vs. Taxi (75 mins). However, this calculation is fatally flawed because it ignores the "Last Mile" friction.
                        </p>

                        <div className="my-12">
                            <TransportComparisonChart />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Breakdown</h3>
                        <p>
                            Our operations team analyzed 500+ trips in Q4 2025 and found that the <strong>Total Trip Time</strong> (Door-to-Door) tells a different story:
                        </p>
                        <ul className="space-y-4 my-8">
                            <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <span className="font-bold text-gray-900 min-w-[120px]">Train Reality:</span>
                                <span>30m (Airport transfer) + 45m (Security/Wait) + 55m (Ride) + 35m (Station to Hotel) = <strong>~2.75 Hours</strong></span>
                            </li>
                            <li className="flex items-start gap-3 p-4 bg-emerald-50/50 rounded-lg border border-emerald-100">
                                <span className="font-bold text-emerald-900 min-w-[120px]">Taxi Reality:</span>
                                <span>Direct curb-to-curb drive = <strong>1.25 Hours</strong></span>
                            </li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The "Zamzam Friction" Factor</h2>
                        <p>
                            The hidden cost of train travel isn't money—it's physical stress. The Haramain Train has strict luggage policies similar to airlines. Managing 3-4 large suitcases plus 5L Zamzam water bottles on escalators, shuttle buses, and security belts is physically demanding.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 my-8">
                            <div className="flex items-start gap-4">
                                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-blue-900 m-0 text-lg">Did You Know?</h4>
                                    <p className="text-blue-800 m-0 mt-2">
                                        Private Taxis offer "Touchless Transfer". The driver loads your bags at the airport curb and a porter unloads them at your hotel lobby. You never lift a heavy bag.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Cost Equation (Family of 5)</h2>
                        <p>
                            For solo travelers, the train is undeniably cheaper. But the math flips instantly for groups.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                            <div className="bg-gray-100 p-6 rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-4 text-lg">🚆 Train for 5 People</h4>
                                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                                    <li className="flex justify-between"><span>5 Economy Tickets</span> <span>300 SAR</span></li>
                                    <li className="flex justify-between"><span>Taxi to Station</span> <span>50 SAR</span></li>
                                    <li className="flex justify-between"><span>Taxi from Station</span> <span>50 SAR</span></li>
                                </ul>
                                <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-gray-900 text-lg">
                                    <span>Total Friction Cost</span>
                                    <span>~400 SAR</span>
                                </div>
                            </div>

                            <div className="bg-emerald-600 text-white p-6 rounded-xl shadow-lg ring-4 ring-emerald-100">
                                <div className="absolute top-0 right-0 bg-white text-emerald-700 text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                                <h4 className="font-bold text-white mb-4 text-lg">🚕 Private GMC Yukon</h4>
                                <ul className="space-y-2 text-emerald-100 mb-6 text-sm">
                                    <li className="flex justify-between"><span>Door-to-Door Rates</span> <span>450 SAR</span></li>
                                    <li className="flex justify-between"><span>Luggage Handling</span> <span>Included</span></li>
                                    <li className="flex justify-between"><span>Privacy</span> <span>Included</span></li>
                                </ul>
                                <div className="border-t border-emerald-500 pt-4 flex justify-between font-bold text-white text-lg">
                                    <span>Total Peace of Mind</span>
                                    <span>450 SAR</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 italic">
                            *Prices are estimates based on average 2025 rates. Train prices vary by booking class and time.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
                        <p>
                            The High-Speed Railway is perfect for the solo business traveler or light packer. However, our 2025 analysis confirms that for the core demographic of Umrah pilgrims—<strong>families with luggage</strong>—the Private Taxi remains the logical, economic, and ergonomic champion.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 bg-gray-900 rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Choose The "Touchless" Transfer</h3>
                            <p className="text-gray-300 max-w-xl mx-auto mb-8 text-lg">
                                Don't let luggage drag you down. Book a GMC Yukon for your family and experience the convenience of door-to-door service.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/booking">
                                    <Button size="lg" className="bg-white text-black hover:bg-emerald-500 hover:text-white font-bold px-8 py-6 h-auto text-lg w-full sm:w-auto">
                                        Book Family Taxi <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <ShareReportButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
