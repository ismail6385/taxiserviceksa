import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { alulaLinksExcept } from '@/data/alulaLinks';

// Compact "more AlUla transport" link list used at the foot of AlUla pages.
export default function AlUlaLinkStrip({ current, title = 'More AlUla transport' }: { current: string; title?: string }) {
    return (
        <nav aria-label={title} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
            <ul className="flex flex-wrap gap-2">
                {alulaLinksExcept(current).map((l) => (
                    <li key={l.href}>
                        <Link href={l.href} className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-gray-900">
                            {l.label} <ArrowRight className="w-3 h-3" />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
