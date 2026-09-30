// "Sea level -> mountain approach -> Taif": a stylised side view of the journey. Not to scale, and no elevations are claimed.
const NODES = [
    { x: 120, y: 286, l: 'Jeddah', s: 'Pickup', d: 0, left: false },
    // Labelled to the left, clear of the road as it climbs past the node.
    { x: 452, y: 204, l: 'Mountain approach', s: 'The climb', d: 1, left: true },
    { x: 610, y: 112, l: 'Al Hada', s: 'Top of the climb', d: 2, left: false },
    { x: 738, y: 106, l: 'Taif', s: 'City', d: 3, left: false },
];

export default function ClimbProfile({ className = '' }: { className?: string }) {
    return (
        <svg viewBox="0 0 920 380" className={className} role="img" aria-labelledby="jt-climb-t jt-climb-d">
            <title id="jt-climb-t">Jeddah to Taif: from the coast up to the highlands</title>
            <desc id="jt-climb-d">A stylised side view. The journey starts at Jeddah on the Red Sea coast, crosses the coastal plain, climbs the mountain approach to Al Hada and continues across the plateau to Taif, with Al Shafa further into the mountains. Not to scale.</desc>

            {/* Sea */}
            <path d="M0 300 H 70 V 380 H 0 Z" fill="#3d7f8f" fillOpacity="0.25" />
            <path d="M8 316 q 10 -5 20 0 t 20 0 M14 340 q 10 -5 20 0 t 20 0" fill="none" stroke="#3d7f8f" strokeOpacity="0.6" strokeWidth="1.5" />

            {/* Land: coastal plain, escarpment, plateau, higher ground toward Al Shafa */}
            <path d="M70 300 L 330 292 L 380 270 L 420 240 L 470 200 L 520 160 L 570 124 L 610 112 L 680 108 L 738 106 L 800 96 L 850 78 L 920 70 V 380 H 70 Z" fill="#d9d2c1" />
            <path d="M330 292 L 380 270 L 420 240 L 470 200 L 520 160 L 570 124 L 610 112 L 610 380 H 330 Z" fill="#b9b3a2" fillOpacity="0.7" />
            <path d="M610 112 L 680 108 L 738 106 L 800 96 L 850 78 L 920 70 V 96 L 850 104 L 800 120 L 738 128 L 680 130 L 610 134 Z" fill="#7fa58f" fillOpacity="0.55" />

            {/* Beyond Taif: Al Shafa */}
            <path d="M738 106 L 800 96 L 850 78" fill="none" stroke="#1f2a26" strokeOpacity="0.45" strokeWidth="2.5" strokeDasharray="3 7" strokeLinecap="round" />
            <circle cx="850" cy="78" r="6" fill="#f4f1ea" stroke="#1f2a26" strokeOpacity="0.6" strokeWidth="2" />
            <text x="850" y="56" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1f2a26" fillOpacity="0.8">Al Shafa</text>

            {/* The road */}
            <path d="M120 286 L 330 280 C 360 276, 384 262, 400 246 C 410 236, 392 228, 408 218 C 432 204, 440 214, 452 204 C 474 186, 456 178, 478 166 C 504 152, 510 160, 526 146 C 546 128, 580 116, 610 112 L 738 106" fill="none" stroke="#2f5d4b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" pathLength={1} className="route-draw" />

            {NODES.map((n) => (
                <g key={n.l} className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100" style={{ animationDelay: `${300 + n.d * 450}ms` }}>
                    <circle cx={n.x} cy={n.y} r="9" fill="#ffffff" stroke="#1f2a26" strokeWidth="3" />
                    <text x={n.left ? n.x - 18 : n.x} y={n.left ? n.y - 26 : n.y - 38} textAnchor={n.left ? 'end' : 'middle'} fontSize="16" fontWeight="800" fill="#1f2a26">{n.l}</text>
                    <text x={n.left ? n.x - 18 : n.x} y={n.left ? n.y - 9 : n.y - 21} textAnchor={n.left ? 'end' : 'middle'} fontSize="12" fill="#5d655f">{n.s}</text>
                </g>
            ))}

            {/* Bands */}
            <g fontSize="11" fontWeight="700" letterSpacing="3" fill="#5d655f">
                <text x="200" y="356" textAnchor="middle">COAST</text>
                <text x="470" y="356" textAnchor="middle">CLIMB</text>
                <text x="760" y="356" textAnchor="middle">HIGHLANDS</text>
            </g>
        </svg>
    );
}
