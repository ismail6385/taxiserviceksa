import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { blogService, Blog } from '@/lib/blogService';
import { Calendar, User, ArrowRight, Tag, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Saudi Arabia Travel Guides 2026 | Transport, Tourism & Umrah',
    description: 'Expert transport guides, tourist destination tips, and spiritual travel insights for Makkah, Madinah, Riyadh, Jeddah, and across Saudi Arabia.',
    openGraph: {
        title: 'Saudi Arabia Travel Guides 2026 | Taxi Service KSA',
        description: 'Your trusted companion for Umrah, pilgrimage, and Saudi tourism transport information.',
        type: 'website',
    }
};

export const revalidate = 0;

interface Props {
    searchParams?: { [key: string]: string | string[] | undefined };
}

// Define the ordered category list with icons
const CATEGORIES = [
    { label: 'All Articles', value: '', icon: '📚' },
    { label: 'Transport Guide', value: 'Transport Guide', icon: '🚗' },
    { label: 'Tourist Guide', value: 'Tourist Guide', icon: '🗺️' },
    { label: 'Umrah & Hajj', value: 'Umrah & Hajj', icon: '🕌' },
    { label: 'City Guide', value: 'City Guide', icon: '🏙️' },
    { label: 'Airport Transfer', value: 'Airport Transfer', icon: '✈️' },
    { label: 'Border Crossing', value: 'Border Crossing', icon: '🛂' },
    { label: 'Hotel Guide', value: 'Hotel Guide', icon: '🏨' },
];

export default async function BlogIndexPage({ searchParams }: Props) {
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

    const tag = searchParams?.tag;
    const categoryParam = searchParams?.category;
    const activeCategory = Array.isArray(categoryParam) ? categoryParam[0] : (categoryParam || '');

    let filteredBlogs = blogs;

    if (tag) {
        const decodedTag = (Array.isArray(tag) ? tag[0] : tag).replace(/-/g, ' ');
        filteredBlogs = blogs.filter(blog =>
            blog.tags?.some(t => t.toLowerCase() === decodedTag.toLowerCase()) ||
            blog.category?.toLowerCase() === decodedTag.toLowerCase()
        );
    } else if (activeCategory) {
        filteredBlogs = blogs.filter(blog =>
            blog.category?.toLowerCase() === activeCategory.toLowerCase()
        );
    }

    if (filteredBlogs.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col gap-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">No articles found {tag ? `for "${tag}"` : activeCategory ? `in "${activeCategory}"` : ''}</h1>
                    <p className="text-gray-600 mt-2">Try a different topic or view all guides.</p>
                </div>
                <Link href="/blog">
                    <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors">View All Articles</button>
                </Link>
            </div>
        );
    }

    const [latestPost, ...otherPosts] = filteredBlogs;

    return (
        <main className="bg-gray-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
                <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-10 w-96 h-48 bg-teal-400 rounded-full blur-3xl opacity-10"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-800/60 text-emerald-200 text-sm font-semibold mb-5 border border-emerald-700/50 backdrop-blur-sm">
                        <MapPin className="w-4 h-4" /> Saudi Arabia Travel Hub
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-5 leading-tight">
                        Explore Saudi Arabia <br />
                        <span className="text-emerald-300">Like Never Before</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Expert transport guides, tourist destination tips, and VIP chauffeur insights for every city in the Kingdom.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center mt-8 text-sm">
                        <span className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">🕌 Umrah Guides</span>
                        <span className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">🚗 Airport Transfers</span>
                        <span className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">🗺️ City Tourism</span>
                        <span className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">🛂 Border Crossings</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Category Filter Bar ── */}
                <div className="sticky top-0 z-30 bg-gray-50/95 backdrop-blur-sm py-5 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-gray-200 mb-10 shadow-sm">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                        {CATEGORIES.map((cat) => {
                            const isActive = activeCategory === cat.value;
                            return (
                                <Link
                                    key={cat.value || 'all'}
                                    href={cat.value ? `/blog?category=${encodeURIComponent(cat.value)}` : '/blog'}
                                    className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border whitespace-nowrap ${
                                        isActive
                                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-md shadow-emerald-200'
                                            : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50'
                                    }`}
                                >
                                    <span>{cat.icon}</span>
                                    {cat.label}
                                </Link>
                            );
                        })}
                    </div>
                    {activeCategory && (
                        <p className="text-sm text-gray-500 mt-2">
                            Showing <span className="font-semibold text-emerald-700">{filteredBlogs.length}</span> articles in &quot;{activeCategory}&quot; •{' '}
                            <Link href="/blog" className="text-emerald-600 underline hover:no-underline">Clear filter</Link>
                        </p>
                    )}
                    {!activeCategory && (
                        <p className="text-sm text-gray-500 mt-2">
                            <span className="font-semibold text-emerald-700">{blogs.length}</span> total guides available
                        </p>
                    )}
                </div>

                {/* Latest Post Featured Card */}
                {latestPost && (
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12 hover:shadow-2xl transition-shadow duration-300">
                        <Link href={`/blog/${latestPost.slug}`} className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-64 md:h-auto overflow-hidden">
                                {latestPost.featured_image ? (
                                    <Image
                                        src={latestPost.featured_image}
                                        alt={latestPost.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                                        <span className="text-6xl">🗺️</span>
                                    </div>
                                )}
                                <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                                    ✨ Latest Article
                                </div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                                        {latestPost.category}
                                    </span>
                                </div>
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
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    {latestPost.title}
                                </h2>
                                <p className="text-gray-600 text-lg mb-6 line-clamp-3">
                                    {latestPost.excerpt}
                                </p>
                                <div className="flex items-center text-emerald-700 font-bold group">
                                    Read Full Guide <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full hover:-translate-y-1"
                            >
                                <div className="relative h-52 overflow-hidden">
                                    {blog.featured_image ? (
                                        <Image
                                            src={blog.featured_image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
                                            <span className="text-5xl opacity-60">
                                                {blog.category === 'Transport Guide' ? '🚗' :
                                                 blog.category === 'Tourist Guide' ? '🗺️' :
                                                 blog.category === 'Umrah & Hajj' ? '🕌' :
                                                 blog.category === 'Airport Transfer' ? '✈️' :
                                                 blog.category === 'Border Crossing' ? '🛂' : '📍'}
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm border border-gray-100">
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

                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-snug">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">
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

                {/* Bottom CTA */}
                <div className="mt-16 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-3xl p-10 text-center text-white shadow-xl">
                    <h2 className="text-3xl font-black mb-3">Ready to Travel Saudi Arabia in Style?</h2>
                    <p className="text-emerald-100 text-lg mb-6 max-w-xl mx-auto">Get an instant quote for your private VIP chauffeur — airports, intercity, Umrah tours, and border crossings.</p>
                    <Link href="/booking/">
                        <button className="bg-white text-emerald-700 font-black px-8 py-4 rounded-xl text-lg hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Get Free Quote →
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
