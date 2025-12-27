
'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { blogService, Blog } from '@/lib/blogService';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, Eye } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

interface Props {
    params: {
        id: string;
    }
}

export default function BlogPreviewPage({ params }: Props) {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                // Use getBlogById to fetch DRAFTS too
                const data = await blogService.getBlogById(params.id);
                setBlog(data);
            } catch (error) {
                console.error("Error fetching preview:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [params.id]);

    if (loading) return <div className="p-10 text-center">Loading Preview...</div>;
    if (!blog) return <div className="p-10 text-center text-red-600">Blog not found or deleted.</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Preview Banner */}
            <div className="bg-yellow-100 border-b border-yellow-200 px-4 py-3 text-center sticky top-0 z-50">
                <div className="flex items-center justify-center gap-2 text-yellow-800 font-semibold">
                    <Eye className="w-5 h-5" />
                    <span>PREVIEW MODE - Status: {blog.status.toUpperCase()}</span>
                    <Link href={`/admin/blogs/edit/${blog.id}`} className="ml-4 text-sm underline hover:text-yellow-900">
                        Back to Edit
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-primary/10 py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-6">
                        <span className="inline-block bg-primary/20 text-primary-dark font-semibold px-3 py-1 rounded-full text-sm mb-4">
                            {blog.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 text-sm">
                            <span className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {blog.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {blog.featured_image && (
                            <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src={blog.featured_image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                            {/* Content Body */}
                            <article
                                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-xl"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />

                            {/* Tags */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <Tag className="w-4 h-4 text-gray-400" />
                                        {blog.tags.map(tag => (
                                            <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Booking CTA */}
                        <div className="sticky top-24">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/20">
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Need a Ride?</h3>
                                <p className="text-gray-600 mb-6">
                                    Book reliable taxi service for Umrah, Airport Transfers, and Intercity travel.
                                </p>
                                <BookingForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
