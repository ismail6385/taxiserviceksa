import Link from 'next/link';
import { ArrowRight, Plane } from 'lucide-react';

// Temporary notice while Riyadh (RUH) flights are disrupted (October 2026). Remove once schedules are back to normal.
export default function RiyadhDisruptionBanner({ className = '' }: { className?: string }) {
    return (
        <div className={`px-4 sm:px-6 lg:px-8 ${className}`}>
            <Link
                href="/riyadh-alternative-airports/"
                className="group max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 sm:p-5 hover:border-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
                <Plane className="w-6 h-6 text-amber-600 shrink-0" aria-hidden="true" />
                <span className="flex-1 text-sm text-gray-800">
                    <strong>Riyadh flight cancelled?</strong> We drive you from Riyadh to Dammam, Bahrain, Doha, Jeddah or Dubai airport. Fixed fares, one car for your group.
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-amber-700 whitespace-nowrap">
                    Compare airports <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
            </Link>
        </div>
    );
}
