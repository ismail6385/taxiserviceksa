import { ExternalLink, Info } from 'lucide-react';

interface DistanceRouteMapProps {
    originQuery: string;
    destinationQuery: string;
    originLabel: string;
    destinationLabel: string;
}

// Reusable route map for /distance/ pages. No coordinates or route geometry are
// hard-coded — the embed and the "open in Google Maps" link both hand the real place
// names to Google's own routing engine, so the drawn route reflects Google's live data
// rather than anything fabricated here. google.com is already allow-listed in this
// site's CSP frame-src (see next.config.js), matching the existing map iframe on
// /contact/.
export default function DistanceRouteMap({ originQuery, destinationQuery, originLabel, destinationLabel }: DistanceRouteMapProps) {
    const embedSrc = `https://www.google.com/maps?saddr=${encodeURIComponent(originQuery)}&daddr=${encodeURIComponent(destinationQuery)}&output=embed`;
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originQuery)}&destination=${encodeURIComponent(destinationQuery)}&travelmode=driving`;

    return (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-gray-100">
                <iframe
                    src={embedSrc}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    title={`Road route map from ${originLabel} to ${destinationLabel}`}
                />
            </div>
            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-2 text-xs text-gray-500 max-w-xl">
                    <Info className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <p>
                        Map data and routing provided by Google Maps. The line shown is Google&apos;s own suggested driving route between {originLabel} and {destinationLabel} — actual distance and time depend on your exact pickup and drop-off points.
                    </p>
                </div>
                <a
                    href={directionsUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 shrink-0 bg-gray-900 text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                >
                    Open Route in Google Maps
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}
