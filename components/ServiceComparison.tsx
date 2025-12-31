import React from 'react';
import { Shield, Clock, Car, CheckCircle2, XCircle } from 'lucide-react';

interface ComparisonPoint {
    feature: string;
    icon: any;
    rideShare: string;
    privateChauffeur: string;
    citation: string;
}

export default function ServiceComparison() {
    const comparisons: ComparisonPoint[] = [
        {
            feature: 'Reliability & Punctuality',
            icon: Clock,
            rideShare: 'Risky. Cancellations are frequent during peak heat (45°C+) or rush hour. A private chauffeur is contractually bound to be there 15 mins early.',
            privateChauffeur: 'Guaranteed. Contractually bound to arrive 15 mins early. We track your flight/schedule.',
            citation: 'Business Traveler Survey'
        },
        {
            feature: 'Vehicle Standards',
            icon: Car,
            rideShare: 'Ride-share quality varies. Often personal cars with inconsistent cleanliness or lingering smoke odors.',
            privateChauffeur: 'Premium Fleet. GMC/BMW/Camry. Daily detailing, smoke-free policy, and water/amenities provided.',
            citation: 'Fleet Standards'
        },
        {
            feature: 'Security & Access',
            icon: Shield,
            rideShare: 'Limited. Often denied entry to gated compounds (KAFD, Diplomatic Quarter) due to lack of clearance.',
            privateChauffeur: 'Authorized. Driver IDs registered in advance for seamless entry to high-security zones.',
            citation: 'Security Protocol'
        }
    ];

    return (
        <div className="py-12 bg-white rounded-2xl border border-gray-100 shadow-sm my-8">
            <div className="text-center mb-12 px-4">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Uber vs Private Chauffeur</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    Executives often debate this. The answer depends on your value of time, certainty, and first impressions.
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-8">
                {/* Header Row (Hidden on mobile) */}
                <div className="hidden md:grid grid-cols-12 gap-6 mb-6 text-sm uppercase tracking-wider font-bold text-gray-400 border-b border-gray-100 pb-4">
                    <div className="col-span-4 pl-4">Comparison Feature</div>
                    <div className="col-span-4 text-center text-gray-400">Standard Ride-Share</div>
                    <div className="col-span-4 text-center text-primary">Private Chauffeur</div>
                </div>

                {/* Comparison Rows */}
                <div className="space-y-6">
                    {comparisons.map((item, index) => (
                        <div
                            key={index}
                            className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100 md:border-transparent hover:border-gray-200"
                        >
                            {/* Feature Title (Mobile: Top, Desktop: Left) */}
                            <div className="col-span-1 md:col-span-4 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
                                    <item.icon className="w-6 h-6 text-gray-700" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{item.feature}</h3>
                                    <p className="text-xs text-gray-400 mt-1">Source: {item.citation}</p>
                                </div>
                            </div>

                            {/* Ride Share Side */}
                            <div className="col-span-1 md:col-span-4 md:text-center relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-gray-200 md:border-r border-dashed md:pr-6">
                                <span className="md:hidden absolute -top-3 left-4 text-xs font-bold text-gray-400 bg-white px-2">RIDE SHARE</span>
                                <XCircle className="w-5 h-5 text-red-400 absolute -left-[16px] top-0 md:hidden bg-white" />
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.rideShare}
                                </p>
                            </div>

                            {/* Private Chauffeur Side */}
                            <div className="col-span-1 md:col-span-4 md:text-center relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-primary">
                                <span className="md:hidden absolute -top-3 left-4 text-xs font-bold text-primary bg-white px-2">CHAUFFEUR</span>
                                <CheckCircle2 className="w-5 h-5 text-primary absolute -left-[16px] top-0 md:hidden bg-white" />
                                <p className="text-gray-900 font-medium text-sm leading-relaxed">
                                    {item.privateChauffeur}
                                </p>
                                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Footer */}
                <div className="mt-12 text-center bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <p className="text-gray-900 font-medium mb-2">The Verdict</p>
                    <p className="text-gray-600 text-sm">
                        For casual trips, apps work fine. For <span className="font-bold text-gray-900">business meetings, airport transfers, and VIPs</span>, the risk of delay is too high.
                    </p>
                </div>
            </div>
        </div>
    );
}
