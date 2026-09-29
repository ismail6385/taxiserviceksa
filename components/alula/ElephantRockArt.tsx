// Stylised illustration of Elephant Rock (Jabal AlFil) at sunset. Used as a
// lightweight background until a licensed photograph of the rock is available.
export default function ElephantRockArt({ className = '', idPrefix = 'er' }: { className?: string; idPrefix?: string }) {
    const sky = `${idPrefix}-sky`;
    const sun = `${idPrefix}-sun`;
    const rock = `${idPrefix}-rock`;
    const sand = `${idPrefix}-sand`;
    return (
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice" className={className} role="img" aria-label="Illustration of Elephant Rock silhouetted against a sunset sky">
            <defs>
                <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#1c1530" />
                    <stop offset="0.45" stopColor="#7a3b3f" />
                    <stop offset="0.72" stopColor="#e0823f" />
                    <stop offset="0.9" stopColor="#f6c56b" />
                </linearGradient>
                <radialGradient id={sun} cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor="#fff3c4" />
                    <stop offset="0.35" stopColor="#ffd27a" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#ffb14e" stopOpacity="0" />
                </radialGradient>
                <linearGradient id={rock} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#6b3a24" />
                    <stop offset="1" stopColor="#2a160f" />
                </linearGradient>
                <linearGradient id={sand} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#8a5433" />
                    <stop offset="1" stopColor="#3b2116" />
                </linearGradient>
            </defs>
            <rect width="1600" height="900" fill={`url(#${sky})`} />
            <circle cx="1190" cy="640" r="230" fill={`url(#${sun})`} />
            <circle cx="1190" cy="640" r="62" fill="#fff0bd" opacity="0.95" />
            {/* distant ridge */}
            <path d="M0 700 C 180 660, 320 690, 470 670 C 640 648, 760 690, 930 676 C 1100 662, 1280 700, 1600 672 L1600 900 L0 900 Z" fill="#4a2a24" opacity="0.55" />
            {/* the rock: body with the trunk arch cut out */}
            <path
                fillRule="evenodd"
                fill={`url(#${rock})`}
                d="M300 800 C 292 720, 290 640, 312 560 C 330 470, 390 380, 480 334 C 540 304, 600 300, 650 318 C 700 300, 780 318, 840 372 C 930 450, 1000 590, 1060 800 Z
                   M392 800 C 394 720, 418 668, 470 660 C 528 652, 560 704, 566 800 Z"
            />
            {/* strata */}
            <g stroke="#f0a765" strokeOpacity="0.18" strokeWidth="3" fill="none">
                <path d="M600 420 C 700 410, 800 430, 880 470" />
                <path d="M590 480 C 700 470, 820 490, 920 540" />
                <path d="M610 560 C 720 552, 840 572, 950 620" />
            </g>
            {/* foreground sand */}
            <path d="M0 790 C 260 770, 520 800, 800 786 C 1080 772, 1340 800, 1600 780 L1600 900 L0 900 Z" fill={`url(#${sand})`} />
        </svg>
    );
}
