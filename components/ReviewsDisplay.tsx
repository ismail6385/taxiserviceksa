'use client';

import { useEffect, useState } from 'react';
import { reviewService, Review } from '@/lib/reviewQuestionService';
import { Star, Quote, Calendar, MapPin } from 'lucide-react';

interface ReviewsDisplayProps {
    location?: string;
    service?: string;
    limit?: number;
}

export default function ReviewsDisplay({ location, service, limit = 4 }: ReviewsDisplayProps) {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadReviews();
    }, [location, service]);

    const loadReviews = async () => {
        try {
            setLoading(true);
            let data = await reviewService.getApprovedReviews();

            // Filter by location if specified
            if (location) {
                data = data.filter(r => r.location?.toLowerCase().includes(location.toLowerCase()));
            }

            // Filter by service if specified
            if (service) {
                data = data.filter(r => r.service?.toLowerCase().includes(service.toLowerCase()));
            }

            // Limit results
            data = data.slice(0, limit);

            setReviews(data);
        } catch (error) {
            console.error('Error loading reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="text-center py-8">
                <div className="text-gray-500">Loading reviews...</div>
            </div>
        );
    }

    if (reviews.length === 0) {
        return null;
    }

    return (
        <div className="space-y-6">
            {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-primary/30 transition-all shadow-sm">
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`w-5 h-5 ${star <= review.rating
                                            ? 'fill-primary text-primary'
                                            : 'text-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-600">
                            {review.rating}.0 out of 5
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {review.title}
                    </h3>

                    {/* Review Text */}
                    <div className="relative mb-4">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                        <p className="text-gray-700 leading-relaxed pl-6">
                            {review.review}
                        </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="font-semibold text-gray-900">{review.name}</span>
                        {review.route && (
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {review.route}
                            </span>
                        )}
                        {review.travel_date && (
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(review.travel_date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    year: 'numeric'
                                })}
                            </span>
                        )}
                        {review.location && (
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                                {review.location}
                            </span>
                        )}
                    </div>

                    {/* Admin Response */}
                    {review.admin_response && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                            <div className="text-sm font-bold text-blue-900 mb-1">
                                Response from VIP Transfer KSA:
                            </div>
                            <p className="text-blue-800 text-sm">
                                {review.admin_response}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
