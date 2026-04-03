
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogService } from '@/lib/blogService';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, Clock, ChevronRight, Home } from 'lucide-react';
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
            url: `https://taxiserviceksa.com/blog/${blog.slug}/`,
            type: 'article',
            publishedTime: blog.published_at || blog.created_at,
            authors: [blog.author],
            images: blog.featured_image ? [{
                url: blog.featured_image.startsWith('http') ? blog.featured_image : `https://taxiserviceksa.com${blog.featured_image}`,
                width: 1200,
                height: 630,
                alt: blog.title,
            }] : [{
                url: 'https://taxiserviceksa.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: blog.title,
            }],
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

    // Fetch all published blogs for "Related Posts" sidebar
    const allBlogs = await blogService.getPublishedBlogs();
    const relatedBlogs = allBlogs
        .filter(b => b.slug !== params.slug) // Exclude current blog
        .slice(0, 4); // Take top 4 recent posts


    // Ensure dates have timezone for Google byline date precision (Saudi Arabia = +03:00 AST)
    const publishedDate = (blog.published_at || blog.created_at);
    const modifiedDate = blog.updated_at;
    const appendTimezone = (d: string) => d && !d.includes('T') ? `${d}T00:00:00+03:00` : d;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.seo_title || blog.title,
        "image": blog.featured_image ? [blog.featured_image] : [],
        "datePublished": appendTimezone(publishedDate),
        "dateModified": appendTimezone(modifiedDate),
        "author": {
            "@type": "Person",
            "name": blog.author || "VIP Transfer KSA",
            "url": authorDetails ? `https://taxiserviceksa.com/author/${authorDetails.slug}` : undefined,
            "image": authorDetails?.avatar ? `https://taxiserviceksa.com${authorDetails.avatar}` : undefined
        },
        "publisher": {
            "@type": "Organization",
            "name": "Taxi Service KSA",
            "logo": {
                "@type": "ImageObject",
                "url": "https://taxiserviceksa.com/logo.png"
            }
        },
        "description": blog.seo_description || blog.excerpt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://taxiserviceksa.com/blog/${blog.slug}/`
        },
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
                                Published {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            {blog.updated_at && blog.updated_at !== (blog.published_at || blog.created_at) && (
                                <span className="flex items-center gap-2 text-gray-500">
                                    Last updated {new Date(blog.updated_at).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            )}
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

                            {/* Aggressive Top CTA for Immediate Lead Capture */}
                            <div className="mb-10 p-6 md:p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black rounded-2xl shadow-xl text-white transform hover:scale-[1.01] transition-all border-l-4 border-primary">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="inline-flex items-center justify-center md:justify-start gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-3">
                                            <span className="relative flex h-2.5 w-2.5">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                            </span>
                                            24/7 VIP Cars Available Now
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Need a Reliable Ride in KSA?</h3>
                                        <p className="text-gray-300 text-sm md:text-base">
                                            Skip the wait. Book your Makkah, Madinah, or Airport Transfer with our VIP chauffeurs instantly.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-auto">
                                        <Link href="/booking/" className="block w-full">
                                            <button className="w-full md:w-auto bg-primary text-black font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(var(--color-primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary),0.5)] transition-all flex items-center justify-center gap-2 whitespace-nowrap text-lg">
                                                Request Quote Now
                                                <ChevronRight className="w-5 h-5 flex-shrink-0" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Content Body */}
                            <BlogContent content={marked.parse(blog.content) as string} />

                            {/* Aggressive Bottom CTA for Readers who finished the article */}
                            <div className="mt-12 p-8 bg-primary/10 rounded-2xl border border-primary/30 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Travel?</h3>
                                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                                    Whether it's an Umrah trip or a quick airport transfer, our pristine fleet and professional drivers are ready for you.
                                </p>
                                <Link href="/booking/" className="inline-block w-full sm:w-auto">
                                    <button className="w-full sm:w-auto bg-gray-950 text-white font-bold py-4 px-10 rounded-xl hover:bg-gray-800 transition-all shadow-lg flex items-center justify-center gap-2 mx-auto">
                                        Check Fare & Book
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </Link>
                            </div>

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
                        <div className="sticky top-24 space-y-8">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary/20 bg-gradient-to-br from-white to-primary/5">
                                <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight">
                                    Planning Your Umrah or Ziyarat?
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                    Get reliable, safe, and comfortable transport with our professional fleet.
                                </p>

                                <div className="space-y-3">
                                    <Link href="/booking/" className="block w-full">
                                        <button className="w-full bg-primary text-black font-bold py-3 px-4 rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2 group">
                                            Get a quote for your Taxi
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>

                                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                        <Clock className="w-3 h-3" />
                                        <span>Instant Confirmation</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <Tag className="w-3 h-3" />
                                        <span>Fixed Rates</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Articles */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">Recent Articles</h3>
                                <div className="space-y-4">
                                    {relatedBlogs.map((post) => (
                                        <Link key={post.slug} href={`/blog/${post.slug}/`} className="block group">
                                            <div className="flex gap-3">
                                                {post.featured_image && (
                                                    <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={post.featured_image}
                                                            alt={post.title}
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                        />
                                                    </div>
                                                )}
                                                <div>
                                                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                                                        {post.title}
                                                    </h4>
                                                    <span className="text-xs text-gray-400 mt-1 block">
                                                        {new Date(post.published_at || post.created_at).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                    {relatedBlogs.length === 0 && (
                                        <p className="text-sm text-gray-500">No recent articles found.</p>
                                    )}
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-50 text-center">
                                    <Link href="/blog/" className="text-xs font-semibold text-primary hover:text-primary-dark uppercase tracking-wide">
                                        View All Posts
                                    </Link>
                                </div>
                            </div>

                            {/* More Topics */}
                            <div className="bg-gray-50 p-6 rounded-2xl">
                                <h3 className="text-lg font-bold mb-4">Related Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Umrah', 'Ziyarat', 'Hajj', 'Jeddah Airport', 'Makkah', 'Madinah', 'VIP Transport'].map(topic => (
                                        <Link
                                            key={topic}
                                            href={`/blog/?tag=${topic.replace(/\s+/g, '-')}`}
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
