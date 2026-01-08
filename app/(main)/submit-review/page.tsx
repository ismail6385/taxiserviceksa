'use client';

import { useState } from 'react';
import { reviewService } from '@/lib/reviewQuestionService';
import { Button } from '@/components/ui/button';
import { Star, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function SubmitReviewPage() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: 5,
        title: '',
        review: '',
        route: '',
        travel_date: '',
        location: '',
        service: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setSubmitting(true);
            await reviewService.submitReview(formData);
            setSubmitted(true);

            // Reset form
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    rating: 5,
                    title: '',
                    review: '',
                    route: '',
                    travel_date: '',
                    location: '',
                    service: '',
                });
            }, 2000);
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Share Your Experience
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Help other travelers by sharing your experience with our taxi service
                    </p>

                    {/* Trustpilot CTA */}
                    <div className="bg-[#00b67a]/10 border-2 border-[#00b67a]/20 rounded-2xl p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Prefer Trustpilot?</h3>
                            <p className="text-sm text-gray-600">Review us on the world's most trusted review platform.</p>
                        </div>
                        <a
                            href="https://www.trustpilot.com/review/taxiserviceksa.com?utm_medium=trustbox&utm_source=ReviewCollector"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0"
                        >
                            <Button className="bg-[#00b67a] hover:bg-[#00a36c] text-white font-bold px-6 py-4 h-auto border-none">
                                <Star className="w-4 h-4 mr-2 fill-white" />
                                Review on Trustpilot
                            </Button>
                        </a>
                    </div>
                </div>

                {submitted ? (
                    <div className="bg-white rounded-2xl p-12 border-2 border-green-200 text-center">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-green-900 mb-4">Thank You!</h2>
                        <p className="text-lg text-green-800 mb-8">
                            Your review has been submitted successfully and will be published after verification by our team.
                        </p>

                        <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
                            <p className="text-sm font-bold text-gray-900 mb-4">Would you also like to share your review on Trustpilot?</p>
                            <a
                                href="https://www.trustpilot.com/review/taxiserviceksa.com?utm_medium=trustbox&utm_source=ReviewCollector"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-[#00b67a] hover:bg-[#00a36c] text-white font-bold px-8">
                                    <Star className="w-4 h-4 mr-2 fill-white" />
                                    Review on Trustpilot
                                </Button>
                            </a>
                        </div>
                        <div className="flex gap-4 justify-center">
                            <Button
                                onClick={() => setSubmitted(false)}
                                className="bg-primary text-white hover:text-black hover:bg-accent/90"
                            >
                                Submit Another Review
                            </Button>
                            <Link href="/">
                                <Button variant="outline">
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm space-y-6">
                        {/* Name & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Rating *
                            </label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, rating: star })}
                                        className="focus:outline-none transition-transform hover:scale-110"
                                    >
                                        <Star
                                            className={`w-10 h-10 ${star <= formData.rating
                                                ? 'fill-primary text-primary'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    </button>
                                ))}
                                <span className="ml-2 text-lg text-gray-600 font-medium self-center">
                                    {formData.rating} out of 5 stars
                                </span>
                            </div>
                        </div>

                        {/* Location & Service */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                    placeholder="e.g., Jeddah, Makkah, Riyadh"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    Service Type
                                </label>
                                <input
                                    type="text"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                    placeholder="e.g., Airport Transfer, Umrah Transport"
                                />
                            </div>
                        </div>

                        {/* Route & Date */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    Route Taken
                                </label>
                                <input
                                    type="text"
                                    value={formData.route}
                                    onChange={(e) => setFormData({ ...formData, route: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                    placeholder="e.g., Jeddah Airport to Makkah"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    Date of Travel
                                </label>
                                <input
                                    type="date"
                                    value={formData.travel_date}
                                    onChange={(e) => setFormData({ ...formData, travel_date: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Review Title *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                placeholder="Summarize your experience in one line"
                            />
                        </div>

                        {/* Review */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Your Review *
                            </label>
                            <textarea
                                required
                                value={formData.review}
                                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                                rows={6}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                                placeholder="Share details about your experience: driver professionalism, vehicle condition, punctuality, route knowledge, etc."
                            />
                            <p className="text-sm text-gray-500 mt-2">
                                Minimum 50 characters. Be specific and honest.
                            </p>
                        </div>

                        {/* Note */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600">
                                <strong>Note:</strong> Your review will be verified before publication. We only publish genuine reviews from actual customers. Your email will not be displayed publicly.
                            </p>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            size="lg"
                            disabled={submitting}
                            className="w-full bg-primary text-white hover:text-black hover:bg-accent/90 font-bold text-lg py-6"
                        >
                            <Send className="w-5 h-5 mr-2" />
                            {submitting ? 'Submitting...' : 'Submit Review'}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}
