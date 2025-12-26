'use client';

import { useState } from 'react';
import { questionService } from '@/lib/reviewQuestionService';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AskQuestionPage() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'general',
        question: '',
        location: '',
        service: '',
    });

    const categories = [
        { value: 'general', label: 'General Question' },
        { value: 'pricing', label: 'Pricing & Payment' },
        { value: 'booking', label: 'Booking Process' },
        { value: 'routes', label: 'Routes & Timing' },
        { value: 'vehicles', label: 'Vehicles & Capacity' },
        { value: 'airport', label: 'Airport Transfers' },
        { value: 'umrah', label: 'Umrah Transport' },
        { value: 'corporate', label: 'Corporate Services' },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setSubmitting(true);
            await questionService.submitQuestion(formData);
            setSubmitted(true);

            // Reset form
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    category: 'general',
                    question: '',
                    location: '',
                    service: '',
                });
            }, 2000);
        } catch (error) {
            console.error('Error submitting question:', error);
            alert('Failed to submit question. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                            <MessageCircle className="w-8 h-8 text-black" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Ask a Question
                    </h1>
                    <p className="text-xl text-gray-600">
                        Have a question about our taxi service? Our experienced drivers will answer within 24 hours.
                    </p>
                </div>

                {submitted ? (
                    <div className="bg-white rounded-2xl p-12 border-2 border-blue-200 text-center">
                        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Question Received!</h2>
                        <p className="text-lg text-blue-800 mb-6">
                            Our experienced drivers will answer your question within 24 hours. Check back soon!
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button
                                onClick={() => setSubmitted(false)}
                                className="bg-primary text-white hover:text-black hover:bg-accent/90"
                            >
                                Ask Another Question
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

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Question Category *
                            </label>
                            <select
                                required
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none bg-white"
                            >
                                {categories.map((cat) => (
                                    <option key={cat.value} value={cat.value}>
                                        {cat.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Location & Service */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    Location (Optional)
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
                                    Service Type (Optional)
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

                        {/* Question */}
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Your Question *
                            </label>
                            <textarea
                                required
                                value={formData.question}
                                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                rows={6}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                                placeholder="Ask anything about routes, pricing, vehicles, timing, or our services..."
                            />
                            <p className="text-sm text-gray-500 mt-2">
                                Be specific for better answers. Example: "How long does it take from Jeddah Airport to Makkah during Ramadan?"
                            </p>
                        </div>

                        {/* Note */}
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600">
                                <strong>Note:</strong> Questions are answered by our experienced drivers who have years of knowledge about Saudi roads, traffic patterns, and local insights. Your email will not be displayed publicly.
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
                            {submitting ? 'Submitting...' : 'Submit Question'}
                        </Button>

                        <div className="pt-4 border-t-2 border-gray-100">
                            <p className="text-sm text-gray-500 text-center">
                                Questions and answers will be published on this page to help other travelers.
                                For urgent booking inquiries, please email{' '}
                                <a href="mailto:taxiserviceksa9988@gmail.com" className="text-primary hover:underline font-medium">
                                    taxiserviceksa9988@gmail.com
                                </a>
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
