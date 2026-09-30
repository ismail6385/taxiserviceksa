// "The Northwest Journey Network" - schematic, not to scale.
// Tabuk and its airport in the north; the Gulf of Aqaba and Red Sea coast to the west (Haql, NEOM, Al Wajh);
// AlUla to the south-east; Madinah, Jeddah and Riyadh further out.
const HUB = { x: 400, y: 150 };

const NEAR = [
    { x: 118, y: 78, l: 'Haql', s: 'Gulf of Aqaba', d: 'M400 150 C 300 120, 200 90, 118 78', lx: 130, ly: 48, end: false },
    { x: 108, y: 190, l: 'NEOM', s: 'Projects', d: 'M400 150 C 300 170, 200 180, 108 190', lx: 122, ly: 218, end: false },
    { x: 214, y: 372, l: 'Al Wajh', s: 'Red Sea coast', d: 'M400 150 C 340 230, 270 310, 214 372', lx: 230, ly: 388, end: false },
    { x: 486, y: 330, l: 'AlUla', s: 'Tourism', d: 'M400 150 C 430 210, 462 270, 486 330', lx: 472, ly: 354, end: true },
];

const FAR = [
    { x: 548, y: 462, l: 'Madinah', d: 'M400 150 C 470 260, 520 370, 548 462' },
    { x: 348, y: 492, l: 'Jeddah', d: 'M400 150 C 400 280, 380 400, 348 492' },
    { x: 610, y: 250, l: 'Riyadh', d: 'M400 150 C 480 170, 550 210, 610 250' },
];

export default function TabukNetwork({ className = '' }: { className?: string }) {
    return (
        <svg viewBox="0 0 680 540" className={className} role="img" aria-labelledby="tb-net-t tb-net-d">
            <title id="tb-net-t">The Northwest journey network from Tabuk</title>
            <desc id="tb-net-d">Tabuk Airport (TUU) connects to Tabuk city. From Tabuk, roads lead west to Haql on the Gulf of Aqaba and to the NEOM region, south-west to Al Wajh on the Red Sea coast and south-east to AlUla. Longer journeys continue to Madinah, Jeddah and Riyadh. Schematic, not to scale.</desc>

            {/* Topographic lines */}
            <g fill="none" stroke="#241a12" strokeOpacity="0.07">
                {Array.from({ length: 6 }, (_, i) => (
                    <ellipse key={i} cx="420" cy="170" rx={70 + i * 58} ry={40 + i * 36} transform="rotate(-14 420 170)" />
                ))}
            </g>

            {/* Sea */}
            <path d="M0 0 H 104 C 98 50, 124 80, 112 120 C 100 160, 92 180, 104 210 C 130 280, 186 336, 214 372 C 262 434, 306 470, 344 496 L 356 540 H 0 Z" fill="#2b7a86" fillOpacity="0.14" />
            <path d="M22 140 q 12 -6 24 0 t 24 0 M36 300 q 12 -6 24 0 t 24 0 M24 470 q 12 -6 24 0 t 24 0" fill="none" stroke="#2b7a86" strokeOpacity="0.4" strokeWidth="1.5" />
            <text x="58" y="392" fontSize="12" fontWeight="700" letterSpacing="4" fill="#2b7a86" fillOpacity="0.85" transform="rotate(56 58 392)">RED SEA</text>

            {/* Longer journeys */}
            {FAR.map((n) => (
                <g key={n.l}>
                    <path d={n.d} fill="none" stroke="#241a12" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="3 8" strokeLinecap="round" />
                    <circle cx={n.x} cy={n.y} r="6" fill="#f3ebdd" stroke="#241a12" strokeOpacity="0.6" strokeWidth="2" />
                    <text x={n.x + 12} y={n.y + 5} fontSize="14" fontWeight="600" fill="#241a12" fillOpacity="0.8">{n.l}</text>
                </g>
            ))}

            {/* Main northwest journeys */}
            {NEAR.map((n, i) => (
                <g key={n.l}>
                    <path d={n.d} fill="none" stroke="#9a4f1c" strokeWidth="3.5" strokeLinecap="round" pathLength={1} className="route-draw" style={{ animationDelay: `${0.3 + i * 0.35}s` }} />
                    <g className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100" style={{ animationDelay: `${600 + i * 350}ms` }}>
                        <circle cx={n.x} cy={n.y} r="8" fill="#ffffff" stroke="#241a12" strokeWidth="3" />
                        <text x={n.lx} y={n.ly} textAnchor={n.end ? 'end' : 'start'} fontSize="16" fontWeight="800" fill="#241a12">{n.l}</text>
                        <text x={n.lx} y={n.ly + 16} textAnchor={n.end ? 'end' : 'start'} fontSize="12" fill="#6b5b4d">{n.s}</text>
                    </g>
                </g>
            ))}

            {/* TUU -> Tabuk */}
            <path d="M452 66 L 400 150" stroke="#241a12" strokeWidth="3" strokeLinecap="round" />
            <rect x="440" y="54" width="24" height="24" rx="5" fill="#241a12" />
            <text x="474" y="64" fontSize="15" fontWeight="800" fill="#241a12">TUU</text>
            <text x="474" y="81" fontSize="12" fill="#6b5b4d">Tabuk Airport</text>

            {/* Tabuk hub */}
            <circle cx={HUB.x} cy={HUB.y} r="24" fill="#e2a23b" fillOpacity="0.3" className="origin-center animate-ping motion-reduce:animate-none" style={{ transformBox: 'fill-box', animationDuration: '2.8s' }} />
            <circle cx={HUB.x} cy={HUB.y} r="15" fill="#241a12" />
            <circle cx={HUB.x} cy={HUB.y} r="5" fill="#e2a23b" />
            <text x={HUB.x - 14} y={HUB.y - 42} textAnchor="end" fontSize="22" fontWeight="800" fill="#241a12">TABUK</text>
        </svg>
    );
}
