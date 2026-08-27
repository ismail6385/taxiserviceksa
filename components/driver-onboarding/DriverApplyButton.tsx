'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** Public "start my application" button — mints a private onboarding
 *  token via /api/driver-apply and redirects into the wizard with it. */
export default function DriverApplyButton() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const start = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/driver-apply', { method: 'POST' });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Something went wrong. Please try again.');
                return;
            }
            router.push(`/driver/onboarding/${data.token}`);
        } catch {
            setError('Could not connect. Please check your internet connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Button size="lg" onClick={start} disabled={loading} className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-6 text-lg h-auto">
                {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                Start My Application <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            {error && <p className="text-sm text-red-600 mt-3">{error}</p>}
        </div>
    );
}
