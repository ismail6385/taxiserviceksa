import React from 'react';
import { Shield, Clock, Car, CheckCircle2, XCircle, Users, Briefcase, Star } from 'lucide-react';

interface ComparisonPoint {
    feature: string;
    icon: any;
    rideShare: string;
    privateChauffeur: string;
    citation: string;
}

export default function ServiceComparison({ persona = 'general' }: { persona?: 'general' | 'family' | 'business' | 'pilgrim' }) {
    const commonComparisons: ComparisonPoint[] = [
        {
            feature: 'Booking',
            icon: Clock,
            rideShare: 'Driver assignment and availability depend on real-time demand.',
            privateChauffeur: 'Your vehicle and driver are booked specifically for your trip, in advance.',
            citation: 'Booking Model'
        },
        {
            feature: 'Vehicle Standards',
            icon: Car,
            rideShare: 'Vehicle type and condition can vary by driver.',
            privateChauffeur: 'Fleet vehicles (GMC, BMW, Camry and similar), kept clean and non-smoking.',
            citation: 'Fleet Standards'
        },
        {
            feature: 'Gated Area Access',
            icon: Shield,
            rideShare: 'Ride-share drivers may not have pre-arranged clearance for gated compounds (e.g. KAFD, DQ).',
            privateChauffeur: 'Driver and vehicle details can be shared with building security in advance if required.',
            citation: 'Access Notes'
        }
    ];

    const personaHighlights = {
        family: {
            title: "Why Families Choose a Private Vehicle",
            icon: Users,
            points: [
                "Luggage capacity: our SUVs are better suited to multiple large suitcases than a standard sedan.",
                "Car seats available on request — let us know when booking.",
                "One direct trip with your group, no shared stops along the way."
            ]
        },
        business: {
            title: "Private Chauffeur for Business Travel",
            icon: Briefcase,
            points: [
                "Drivers familiar with common corporate drop-off points.",
                "Your vehicle and driver are booked specifically for your schedule.",
                "Booked in advance, rather than requested on demand."
            ]
        },
        pilgrim: {
            title: "For Umrah & Ziyarat Travelers",
            icon: Star,
            points: [
                "Drivers can stop at Meeqat points for Ihram/Niyyah on request.",
                "We use routes that get you as close to your hotel entrance as conditions allow.",
                "Drivers accommodate prayer-time stops during the journey."
            ]
        },
        general: null
    };

    const currentPersona = personaHighlights[persona];

    return (
        <div className="py-12 bg-white rounded-2xl border border-gray-100 shadow-sm my-8">
            <div className="text-center mb-12 px-4">
                <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Ride-Share vs Private Chauffeur</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                    A few practical differences to help you decide which fits your trip.
                </p>
            </div>

            {currentPersona && (
                <div className="max-w-5xl mx-auto px-4 md:px-8 mb-12">
                    <div className="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-100 flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-emerald-600 p-3 rounded-xl text-white shadow-lg shadow-emerald-200">
                            <currentPersona.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-emerald-900 mb-3">{currentPersona.title}</h3>
                            <ul className="space-y-3">
                                {currentPersona.points.map((point, idx) => (
                                    <li key={idx} className="flex gap-2 text-emerald-800 text-sm italic font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-5xl mx-auto px-4 md:px-8">
                {/* Header Row (Hidden on mobile) */}
                <div className="hidden md:grid grid-cols-12 gap-6 mb-6 text-sm uppercase tracking-wider font-extrabold text-gray-400 border-b border-gray-100 pb-4">
                    <div className="col-span-4 pl-4">Comparison Feature</div>
                    <div className="col-span-4 text-center">Local Ride-Share</div>
                    <div className="col-span-4 text-center text-emerald-600">Taxi Service KSA</div>
                </div>

                {/* Comparison Rows */}
                <div className="space-y-6">
                    {commonComparisons.map((item, index) => (
                        <div
                            key={index}
                            className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-xl hover:bg-gray-50 transition-all border border-gray-100 md:border-transparent hover:border-gray-200"
                        >
                            <div className="col-span-1 md:col-span-4 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all">
                                    <item.icon className="w-6 h-6 text-gray-700" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{item.feature}</h3>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Ref: {item.citation}</p>
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-4 md:text-center relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-gray-200 md:border-r border-dashed md:pr-6">
                                <span className="md:hidden absolute -top-3 left-4 text-[10px] font-black text-gray-400 bg-white px-2">RIDE SHARE APP</span>
                                <XCircle className="w-5 h-5 text-red-400 absolute -left-[11px] top-0 md:hidden bg-white" />
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.rideShare}
                                </p>
                            </div>

                            <div className="col-span-1 md:col-span-4 md:text-center relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-emerald-600">
                                <span className="md:hidden absolute -top-3 left-4 text-[10px] font-black text-emerald-600 bg-white px-2">OUR SERVICE</span>
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 absolute -left-[11px] top-0 md:hidden bg-white" />
                                <p className="text-gray-900 font-bold text-sm leading-relaxed">
                                    {item.privateChauffeur}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Footer */}
                <div className="mt-12 text-center bg-gray-900 rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16"></div>
                    <p className="text-white text-lg font-medium leading-relaxed">
                        For groups traveling with luggage, a pre-booked private vehicle removes the uncertainty of on-demand driver and vehicle matching.
                    </p>
                </div>
            </div>
        </div>
    );
}
