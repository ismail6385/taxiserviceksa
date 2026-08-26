import Link from 'next/link';
import { Users, Briefcase, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VERIFIED_COACH } from '@/data/busRoutes';

// Reusable "Coach Options" section for /bus/ pages. Shows only the one verified
// coach in the TaxiServiceKSA fleet (sourced from /fleet/luxurious-bus/) rather
// than inventing a lineup of bus models/capacities. Built so it can be extended
// with additional verified coaches later without restructuring the pages that use it.
export default function CoachOptionsSection() {
    return (
        <section className="py-10 border-t border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">Coach Options</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our confirmed coach for group and family charters is the {VERIFIED_COACH.name}, a {VERIFIED_COACH.capacityLabel.toLowerCase()} vehicle built for long-distance comfort.
            </p>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-black text-gray-900">{VERIFIED_COACH.name}</h3>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">{VERIFIED_COACH.classLabel}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                            <Users className="w-5 h-5 text-primary shrink-0" />
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Capacity</p>
                                <p className="font-bold text-gray-900 text-sm">{VERIFIED_COACH.capacityLabel}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                            <Briefcase className="w-5 h-5 text-primary shrink-0" />
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Luggage</p>
                                <p className="font-bold text-gray-900 text-sm">{VERIFIED_COACH.luggageLabel}</p>
                            </div>
                        </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                        {VERIFIED_COACH.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <Link href={VERIFIED_COACH.fleetPageUrl} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                        View full {VERIFIED_COACH.name} details <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="bg-gray-50 border-t border-gray-100 p-6 sm:p-8">
                    <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-600">
                            Larger groups or a different coach configuration may be arrangeable on request — vehicle availability is confirmed per booking rather than listed as a fixed lineup. Tell us your group size when you request a quote.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
