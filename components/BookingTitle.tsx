'use client';

import { useSearchParams } from 'next/navigation';

// Reads ?route= in the browser so /booking/ can be a static page (it used to
// read searchParams on the server, which forced a render on every request).
export default function BookingTitle() {
    const route = useSearchParams().get('route');
    if (!route) return <>Get a quote for your transfer</>;
    const formatted = route.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return <>{`Book Your Transfer from ${formatted.replace(' To ', ' to ')}`}</>;
}
