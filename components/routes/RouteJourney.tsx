'use client';

import { useEffect, useRef, useState } from 'react';
import { Car } from 'lucide-react';

export interface JourneyStop {
    title: string;
    text: string;
    accent?: boolean;
}

// Vertical journey whose line fills as the reader scrolls through it.
// Stops light up once the line reaches them. Static under reduced motion.
const PALETTES = {
    emerald: { track: 'bg-white/[0.15]', fill: 'bg-amber-400', dot: 'bg-emerald-600 text-white', dotAccent: 'bg-amber-400 text-[#082119]', idle: 'bg-[#0f3328] text-emerald-100/50 ring-1 ring-white/[0.15]', text: 'text-emerald-50/[0.65]', car: 'bg-amber-400 text-[#082119]' },
    platinum: { track: 'bg-white/10', fill: 'bg-[#c9ced6]', dot: 'bg-[#c9ced6] text-[#0e1116]', dotAccent: 'bg-[#d8c7a3] text-[#0e1116]', idle: 'bg-[#0e1116] text-white/40 ring-1 ring-white/[0.15]', text: 'text-white/60', car: 'bg-[#d8c7a3] text-[#0e1116]' },
    gulf: { track: 'bg-white/[0.15]', fill: 'bg-[#e9b872]', dot: 'bg-[#0f5e6e] text-white', dotAccent: 'bg-[#e9b872] text-[#06232b]', idle: 'bg-[#06232b] text-white/50 ring-1 ring-white/[0.15]', text: 'text-white/70', car: 'bg-[#e9b872] text-[#06232b]' },
};

export default function RouteJourney({ stops, vehicle = false, palette = 'emerald' }: { stops: JourneyStop[]; vehicle?: boolean; palette?: keyof typeof PALETTES }) {
    const c = PALETTES[palette];
    const ref = useRef<HTMLOListElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
            setProgress(1);
            return;
        }
        let frame = 0;
        const update = () => {
            frame = 0;
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight;
            // 0 when the list top reaches 75% of the viewport, 1 when its bottom does
            const p = (vh * 0.75 - r.top) / r.height;
            setProgress(Math.max(0, Math.min(1, p)));
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <ol ref={ref} className="relative">
            <span className={`absolute left-[19px] top-2 bottom-2 w-0.5 ${c.track}`} aria-hidden="true" />
            <span
                className={`absolute left-[19px] top-2 w-0.5 ${c.fill} origin-top transition-[height] duration-150`}
                style={{ height: `calc((100% - 1rem) * ${progress})` }}
                aria-hidden="true"
            />
            {vehicle && (
                <span
                    className={`absolute left-[4px] z-10 w-8 h-8 -mt-4 rounded-full ${c.car} flex items-center justify-center shadow-lg shadow-black/30 transition-[top] duration-150`}
                    style={{ top: `calc(0.5rem + (100% - 1rem) * ${progress})` }}
                    aria-hidden="true"
                >
                    <Car className="w-4 h-4" />
                </span>
            )}
            {stops.map((s, i) => {
                const reached = progress >= (stops.length === 1 ? 0 : i / (stops.length - 1)) - 0.02;
                return (
                    <li key={s.title} className="relative pl-14 pb-9 last:pb-0">
                        <span
                            className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-colors duration-300 ${reached ? (s.accent ? c.dotAccent : c.dot) : c.idle}`}
                            aria-hidden="true"
                        >
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`mb-1 pt-1.5 transition-colors ${reached ? 'text-white' : 'text-white/60'}`}>{s.title}</h3>
                        <p className={`text-sm ${c.text} leading-relaxed max-w-md`}>{s.text}</p>
                    </li>
                );
            })}
        </ol>
    );
}
