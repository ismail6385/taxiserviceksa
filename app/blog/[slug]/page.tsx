
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogService } from '@/lib/blogService';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, Clock, ChevronRight, Home } from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import { marked } from 'marked';
import BlogContent from '@/components/BlogContent';
import AuthorCard from '@/components/AuthorCard';
import ShareButtons from '@/components/ShareButtons';
import { AUTHORS } from '@/lib/constants';

export const revalidate = 3600; // Revalidate every hour

interface Props {
    params: {
        slug: string;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blog = await blogService.getBlogBySlug(params.slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
        };
    }

    return {
        title: blog.seo_title || blog.title,
        description: blog.seo_description || blog.excerpt,
        keywords: blog.seo_keywords,
        openGraph: {
            title: blog.seo_title || blog.title,
            description: blog.seo_description || blog.excerpt,
            images: blog.featured_image ? [{ url: blog.featured_image }] : undefined,
            type: 'article',
            publishedTime: blog.published_at || blog.created_at,
            authors: [blog.author],
        },
        alternates: {
            canonical: `https://taxiserviceksa.com/blog/${blog.slug}/`,
        }
    };
}

export default async function BlogPostPage({ params }: Props) {
    const blog = await blogService.getBlogBySlug(params.slug);

    if (!blog) {
        notFound();
    }

    // Calculate reading time
    const wordsPerMinute = 200;
    const wordCount = blog.content.split(/\s+/g).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    // Get Author Details
    const authorDetails = AUTHORS.find(a => a.name === blog.author);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.seo_title || blog.title,
        "image": blog.featured_image ? [blog.featured_image] : [],
        "datePublished": blog.published_at || blog.created_at,
        "dateModified": blog.updated_at,
        "author": {
            "@type": "Person",
            "name": blog.author || "Taxi Service KSA",
            "url": authorDetails ? `https://taxiserviceksa.com/author/${authorDetails.slug}` : undefined,
            "image": authorDetails?.avatar ? `https://taxiserviceksa.com${authorDetails.avatar}` : undefined
        },
        "description": blog.seo_description || blog.excerpt,
        "timeRequired": `PT${readingTime}M`
    };

    return (
        <div className="min-h-screen bg-gray-50">
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

                            {/* More Topics */}
                            <div className="mt-8 bg-gray-50 p-6 rounded-2xl">
                                <h3 className="text-lg font-bold mb-4">Related Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Umrah', 'Ziyarat', 'Hajj', 'Jeddah Airport', 'Makkah', 'Madinah', 'VIP Transport'].map(topic => (
                                        <Link
                                            key={topic}
                                            href={`/blog?tag=${topic}`}
                                            className="bg-white border text-sm text-gray-600 px-3 py-1 rounded-lg hover:border-primary transition-colors"
                                        >
                                            {topic}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
        </div>
    );
}
