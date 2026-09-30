// Schematic of the Saudi coast, King Fahd Causeway and Bahrain - relative positions only, not to scale.
// The route line draws once; the border point pulses. Both are static under reduced motion.
export default function CausewayMap({ className = '', dark = false }: { className?: string; dark?: boolean }) {
    const land = dark ? '#0d3440' : '#efe4cf';
    const landLine = dark ? '#1c5363' : '#d9c7a4';
    const text = dark ? '#ffffff' : '#06232b';
    const muted = dark ? 'rgba(255,255,255,0.55)' : '#5b6b70';
    return (
        <svg viewBox="0 0 600 380" className={className} role="img" aria-labelledby="cw-map-title cw-map-desc">
            <title id="cw-map-title">Schematic map of King Fahd Causeway</title>
            <desc id="cw-map-desc">Dammam and Al Khobar on the Saudi coast, the Causeway running east across the water with the border point in the middle, and Bahrain with Manama, Muharraq and Riffa. Not to scale.</desc>
            <defs>
                <pattern id="cw-topo" width="18" height="18" patternUnits="userSpaceOnUse">
                    <path d="M0 9 Q 4.5 5, 9 9 T 18 9" fill="none" stroke={dark ? '#ffffff' : '#0f5e6e'} strokeOpacity={dark ? 0.05 : 0.07} />
                </pattern>
            </defs>
            <rect width="600" height="380" fill="url(#cw-topo)" />
            {/* Saudi mainland */}
            <path d="M0 0 H 262 C 250 60, 272 110, 244 165 C 226 205, 252 255, 232 305 C 222 340, 238 380, 238 380 H 0 Z" fill={land} stroke={landLine} strokeWidth="1.5" />
            {/* Bahrain and Muharraq */}
            <path d="M442 118 C 472 106, 502 128, 506 170 C 511 232, 492 300, 472 332 C 457 348, 441 322, 439 282 C 433 232, 426 160, 442 118 Z" fill={land} stroke={landLine} strokeWidth="1.5" />
            <ellipse cx="532" cy="112" rx="20" ry="11" fill={land} stroke={landLine} strokeWidth="1.5" />
            {/* Causeway */}
            <path d="M242 192 L 334 198 L 434 206" fill="none" stroke={dark ? '#ffffff' : '#06232b'} strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />
            <circle cx="334" cy="198" r="9" fill={land} stroke={landLine} strokeWidth="1.5" />
            {/* Route line */}
            <path d="M226 150 C 236 170, 238 186, 242 192 L 334 198 L 434 206 C 460 196, 478 160, 492 132" fill="none" stroke="#e9b872" strokeWidth="3" strokeLinecap="round" pathLength={1} className="route-draw" />
            {/* Border point */}
            <circle cx="334" cy="198" r="10" fill="#e9b872" fillOpacity="0.35" className="origin-center animate-ping motion-reduce:animate-none" style={{ transformBox: 'fill-box' }} />
            <circle cx="334" cy="198" r="5" fill="#e9b872" />
            <text x="334" y="232" textAnchor="middle" fontSize="12" fontWeight="700" fill={text}>Border procedures</text>
            <text x="334" y="176" textAnchor="middle" fontSize="12" fill={muted}>King Fahd Causeway</text>
            {/* Places */}
            {[
                { x: 208, y: 78, l: 'Dammam', a: 'end' },
                { x: 226, y: 150, l: 'Al Khobar', a: 'end' },
                { x: 150, y: 42, l: 'DMM Airport', a: 'middle' },
                { x: 492, y: 132, l: 'Manama', a: 'end' },
                { x: 532, y: 112, l: 'Muharraq · BAH', a: 'middle' },
                { x: 474, y: 232, l: 'Riffa', a: 'middle' },
            ].map((p) => (
                <g key={p.l}>
                    <circle cx={p.x} cy={p.y} r="4.5" fill={text} />
                    <text x={p.a === 'end' ? p.x - 9 : p.x} y={p.a === 'end' ? p.y + 4 : p.y + (p.l === 'Riffa' ? 18 : -10)} textAnchor={p.a as 'end' | 'middle'} fontSize="13" fontWeight="600" fill={text}>{p.l}</text>
                </g>
            ))}
            <text x="18" y="200" fontSize="12" fill={muted}>← Riyadh</text>
            <text x="110" y="330" fontSize="15" fontWeight="800" letterSpacing="3" fill={muted}>SAUDI ARABIA</text>
            <text x="470" y="360" textAnchor="middle" fontSize="15" fontWeight="800" letterSpacing="3" fill={muted}>BAHRAIN</text>
        </svg>
    );
}
