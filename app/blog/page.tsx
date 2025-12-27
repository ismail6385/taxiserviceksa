import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogService, Blog } from '@/lib/blogService';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
    title: 'The Pilgrim\'s Journal | Umrah, Hajj & Saudi Travel Guides',
    description: 'Expert guides, travel tips, and spiritual insights for your journey to Makkah, Madinah, and across Saudi Arabia.',
    openGraph: {
        title: 'The Pilgrim\'s Journal | Taxi Service KSA Blog',
        description: 'Your trusted companion for Umrah and Saudi travel information.',
        type: 'website',
    }
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogIndexPage() {
    const blogs: Blog[] = await blogService.getPublishedBlogs();

    if (!blogs) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">No articles found</h1>
                    <p className="text-gray-600 mt-2">Check back soon for new guides.</p>
                </div>
            </div>
        );
    }

    // Separate featured/latest post (optional, for now just simple grid)
    const [latestPost, ...otherPosts] = blogs;

    return (
        <main className="bg-gray-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-emerald-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-800 text-emerald-200 text-sm font-semibold mb-4 border border-emerald-700">
                        The Pilgrim's Journal
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                        Explore Saudi Arabia <br /> Like a Local
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive guides, spiritual insights, and practical travel tips for Makkah, Madinah, and beyond.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                {/* Latest Post Featured Card */}
                {latestPost && (
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16 hover:shadow-2xl transition-shadow duration-300">
                        <Link href={`/blog/${latestPost.slug}`} className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                {latestPost.featured_image ? (
                                    <Image
                                        src={latestPost.featured_image}
                                        alt={latestPost.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <span className="text-gray-400">No Image</span>
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Latest Article
                                </div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(latestPost.published_at || latestPost.created_at).toLocaleDateString()}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Tag className="w-4 h-4" />
                                        {latestPost.category}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-700 transition-colors">
                                    {latestPost.title}
                                </h2>
                                <p className="text-gray-600 text-lg mb-6 line-clamp-3">
                                    {latestPost.excerpt}
                                </p>
                                <div className="flex items-center text-emerald-700 font-bold group">
                                    Read Full Article <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Grid for Other Posts */}
                {otherPosts.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {otherPosts.map((blog) => (
                            <Link
                                href={`/blog/${blog.slug}`}
                                key={blog.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    {blog.featured_image ? (
                                        <Image
                                            src={blog.featured_image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                            <span className="text-gray-400">No Image</span>
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                                        {blog.category}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(blog.published_at || blog.created_at).toLocaleDateString()}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {blog.author}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-emerald-600 font-semibold text-sm">
                                        Read Guide
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
