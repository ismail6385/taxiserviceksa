'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { reviewService, Review } from '@/lib/reviewQuestionService';

// Shows approved customer reviews that mention AlUla. Renders nothing (not even a
// heading) when there are none, so the page never shows an empty or padded section.
export default function AlUlaReviews() {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        reviewService
            .getApprovedReviews()
            .then((all) =>
                setReviews(
                    all
                        .filter((r) => `${r.location ?? ''} ${r.route ?? ''}`.toLowerCase().includes('alula'))
                        .slice(0, 4)
                )
            )
            .catch(() => setReviews([]));
    }, []);

    if (reviews.length === 0) return null;

    return (
        <section aria-labelledby="alula-reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 id="alula-reviews" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">What travellers said about their AlUla trips</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((r) => (
                        <figure key={r.id} className="rounded-2xl border border-gray-200 p-6">
                            <div className="flex gap-0.5 mb-3" aria-label={`${r.rating} out of 5`}>
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className={`w-4 h-4 ${s <= r.rating ? 'fill-primary text-primary' : 'text-gray-200'}`} aria-hidden="true" />
                                ))}
                            </div>
                            {r.title && <p className="font-bold text-gray-900 mb-1">{r.title}</p>}
                            <blockquote className="text-gray-600 text-sm leading-relaxed">{r.review}</blockquote>
                            <figcaption className="mt-4 text-xs font-semibold text-gray-500">
                                {r.name}
                                {r.route ? ` · ${r.route}` : ''}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
