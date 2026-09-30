// "Rabigh: where coastal & intercity routes meet" - schematic, not to scale.
// Jeddah, Thuwal, KAEC and Rabigh run north along the Red Sea coast; Madinah lies inland to the north-east.
export default function RabighCorridor({ className = '' }: { className?: string }) {
    const nodes = [
        { x: 150, y: 400, l: 'Jeddah', s: 'City · JED airport', d: 0 },
        { x: 190, y: 318, l: 'Thuwal', s: '', d: 1 },
        { x: 215, y: 250, l: 'KAEC', s: 'Rail station', d: 2 },
        { x: 470, y: 60, l: 'Madinah', s: 'City · MED airport', d: 5 },
    ];
    const branches = [
        { x: 420, y: 250, l: 'Industrial area' },
        { x: 400, y: 170, l: 'Hotels & homes' },
        { x: 222, y: 92, l: 'Coast' },
    ];
    return (
        <svg viewBox="0 0 600 460" className={className} role="img" aria-labelledby="rb-map-t rb-map-d">
            <title id="rb-map-t">Rabigh route schematic</title>
            <desc id="rb-map-d">Jeddah, Thuwal and King Abdullah Economic City run north along the Red Sea coast to Rabigh. From Rabigh, roads lead inland to Madinah and locally to the industrial area, hotels and homes, and the coast. Schematic, not to scale.</desc>
            {/* Sea */}
            <path d="M0 0 H 200 C 225 60, 240 120, 236 170 C 232 210, 215 235, 205 250 C 195 280, 186 300, 180 318 C 165 360, 150 385, 140 400 C 132 425, 127 445, 125 460 H 0 Z" fill="#1c6fa3" fillOpacity="0.14" />
            <path d="M30 60 q 12 -6 24 0 t 24 0 M20 200 q 12 -6 24 0 t 24 0 M40 330 q 12 -6 24 0 t 24 0" fill="none" stroke="#1c6fa3" strokeOpacity="0.35" strokeWidth="1.5" />
            <text x="40" y="270" fontSize="13" fontWeight="700" letterSpacing="4" fill="#1c6fa3" fillOpacity="0.8" transform="rotate(-72 40 270)">RED SEA</text>
            {/* Coastal corridor into Rabigh, then inland to Madinah */}
            <path d="M150 400 C 170 360, 185 330, 190 318 C 200 290, 208 270, 215 250 C 225 215, 235 190, 250 170 C 320 120, 400 90, 470 60" fill="none" stroke="#10213f" strokeWidth="4" strokeLinecap="round" pathLength={1} className="route-draw" />
            {/* Local branches from Rabigh */}
            {branches.map((b) => (
                <g key={b.l}>
                    <path d={`M250 170 L ${b.x} ${b.y}`} stroke="#f07b5a" strokeWidth="2" strokeDasharray="5 6" />
                    <circle cx={b.x} cy={b.y} r="5" fill="#f07b5a" />
                    <text x={b.x + (b.x < 250 ? -10 : 10)} y={b.y + 4} textAnchor={b.x < 250 ? 'end' : 'start'} fontSize="13" fontWeight="600" fill="#10213f">{b.l}</text>
                </g>
            ))}
            {nodes.map((n) => (
                <g key={n.l} className="animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100" style={{ animationDelay: `${n.d * 220}ms` }}>
                    <circle cx={n.x} cy={n.y} r="7" fill="#ffffff" stroke="#10213f" strokeWidth="3" />
                    <text x={n.x + 14} y={n.y + 5} fontSize="15" fontWeight="700" fill="#10213f">{n.l}</text>
                    {n.s && <text x={n.x + 14} y={n.y + 22} fontSize="12" fill="#5a6782">{n.s}</text>}
                </g>
            ))}
            {/* Rabigh hub */}
            <circle cx="250" cy="170" r="22" fill="#f07b5a" fillOpacity="0.25" className="origin-center animate-ping motion-reduce:animate-none" style={{ transformBox: 'fill-box', animationDuration: '2.6s' }} />
            <circle cx="250" cy="170" r="14" fill="#10213f" />
            <text x="226" y="177" textAnchor="end" fontSize="20" fontWeight="800" fill="#10213f">RABIGH</text>
        </svg>
    );
}
