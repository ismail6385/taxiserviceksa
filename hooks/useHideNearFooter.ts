'use client';

import { useEffect, useState } from 'react';

export function useHideNearFooter() {
    const [nearFooter, setNearFooter] = useState(false);

    useEffect(() => {
        const footer = document.getElementById('site-footer');
        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => setNearFooter(entry.isIntersecting),
            { rootMargin: '0px 0px -10% 0px' }
        );
        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    return nearFooter;
}
