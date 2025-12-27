
'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { blogService, Blog } from '@/lib/blogService';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, Eye, Clock, ChevronRight, Home } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { marked } from 'marked';
import BlogContent from '@/components/BlogContent';
import AuthorCard from '@/components/AuthorCard';
import ShareButtons from '@/components/ShareButtons';

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

    // Calculate reading time
    const wordsPerMinute = 200;
    const wordCount = blog.content.split(/\s+/g).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

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
                    {/* Breadcrumbs */}
                    <nav className="flex items-center text-sm text-gray-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
                        <Link href="/" className="hover:text-primary flex items-center gap-1">
                            <Home className="w-3 h-3" /> Home
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/blog" className="hover:text-primary">
                            Blog
                        </Link>
                        {blog.category && (
                            <>
                                <ChevronRight className="w-4 h-4 mx-2" />
                                <span className="text-gray-900 font-medium">{blog.category}</span>
                            </>
                        )}
                    </nav>

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
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {readingTime} min read
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
                            <div className="flex justify-end mb-6">
                                <ShareButtons title={blog.title} description={blog.excerpt} />
                            </div>

                            {/* Content Body */}
                            <BlogContent content={marked.parse(blog.content) as string} />

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

                        {/* Author Bio Box */}
                        <div className="mt-8">
                            <AuthorCard authorName={blog.author} />
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
