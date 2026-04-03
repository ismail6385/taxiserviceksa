
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogService } from '@/lib/blogService';
import { AUTHORS } from '@/lib/constants';
import { BLOG_TEMPLATES } from '@/data/blogTemplates';
import {
    Calendar, ArrowRight, BookOpen, Award, Briefcase,
    Globe, Star, CheckCircle, Linkedin, Facebook, Twitter,
    MapPin, Clock, TrendingUp, Users, Tag
} from 'lucide-react';

interface Props {
    params: {
        slug: string;
    }
}

export async function generateStaticParams() {
    return AUTHORS.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const author = AUTHORS.find(a => a.slug === params.slug);
    if (!author) return { title: 'Author Not Found' };

    return {
        title: `${author.name} — ${author.role} | Taxi Service KSA`,
        description: `${author.bio.slice(0, 155)}...`,
        alternates: {
            canonical: `https://taxiserviceksa.com/author/${author.slug}/`,
        },
        openGraph: {
            title: `${author.name} | Taxi Service KSA`,
            description: author.bio,
            images: [{ url: author.avatar, width: 400, height: 400 }],
        },
    };
}

// Stats for Muhammad Ismail's author page
const AUTHOR_STATS: Record<string, { articles: number; years: string; readers: string; guides: number }> = {
    'muhammad-ismail': {
        articles: 100,
        years: '12+',
        readers: '50K+',
        guides: 45,
    },
    'taxi-service-ksa': {
        articles: 15,
        years: '5+',
        readers: '20K+',
        guides: 10,
    },
};

const EXPERTISE_TAGS: Record<string, string[]> = {
    'muhammad-ismail': [
        'Hajj & Umrah Logistics',
        'Saudi Arabia Travel',
        'VIP Airport Transfers',
        'AI Automation & SEO',
        'SQA Engineering',
        'Private Chauffeur Services',
        'Intercity Transport',
        'Corporate Travel KSA',
    ],
    'taxi-service-ksa': [
        'Saudi Arabia Transport',
        'Airport Transfers',
        'Pilgrimage Travel',
    ],
};

export default async function AuthorProfilePage({ params }: Props) {
    const author = AUTHORS.find(a => a.slug === params.slug);
    if (!author) notFound();

    // Get Supabase blogs
    const supabaseBlogs = await blogService.getBlogsByAuthor(author.name);

    // Get blogTemplates articles (attributed to Muhammad Ismail)
    const templateArticles = params.slug === 'muhammad-ismail'
        ? BLOG_TEMPLATES.map((t: { title: string; slug: string; excerpt: string; content: string; category: string; seo_keywords?: string[]; seo_title?: string; seo_description?: string }, i: number) => ({
            id: `tpl-${i}`,
            title: t.title,
            slug: t.slug,
            excerpt: t.excerpt,
            content: t.content,
            featured_image: undefined,
            category: t.category,
            tags: t.seo_keywords || [],
            author: 'Muhammad Ismail',
            status: 'published' as const,
            published_at: '2026-01-01T00:00:00Z',
            created_at: '2026-01-01T00:00:00Z',
            updated_at: '2026-01-01T00:00:00Z',
            views: 0,
            seo_title: t.seo_title,
            seo_description: t.seo_description,
        }))
        : [];

    // Merge all blogs
    const allBlogs = [...supabaseBlogs, ...templateArticles];

    // Get categories from templates
    const categories = Array.from(new Set(templateArticles.map((b: { category: string }) => b.category)));
    const stats = AUTHOR_STATS[params.slug] || { articles: allBlogs.length, years: '5+', readers: '10K+', guides: 10 };
    const expertise = EXPERTISE_TAGS[params.slug] || [];

    // Group articles by category for display
    const articlesByCategory: Record<string, typeof allBlogs> = {};
    allBlogs.forEach(blog => {
        if (!articlesByCategory[blog.category]) {
            articlesByCategory[blog.category] = [];
        }
        articlesByCategory[blog.category].push(blog);
    });

    // Get top 6 recent from supabase for featured section
    const featuredBlogs = supabaseBlogs.slice(0, 6);
    const schemaJson = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": author.name,
        "jobTitle": author.role,
        "description": author.bio,
        "url": `https://taxiserviceksa.com/author/${author.slug}/`,
        "image": `https://taxiserviceksa.com${author.avatar}`,
        "sameAs": [
            author.social.linkedin,
            author.social.facebook,
            author.social.twitter,
        ].filter(Boolean),
        "worksFor": {
            "@type": "Organization",
            "name": "Taxi Service KSA",
            "url": "https://taxiserviceksa.com"
        },
        "knowsAbout": expertise,
    };

    return (
        <>
            {/* Schema.org Person Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
            />

            <div className="min-h-screen bg-gray-50">

                {/* ══════════════════════════════════ HERO BANNER ══════════════════════════════════ */}
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-28 pb-0 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute top-0 left-1/2 w-px h-full bg-white/5" />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 pb-0">

                            {/* Avatar */}
                            <div className="relative flex-shrink-0">
                                <div className="w-44 h-44 lg:w-56 lg:h-56 rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                                    <Image
                                        src={author.avatar}
                                        alt={`${author.name} - ${author.role}`}
                                        width={224}
                                        height={224}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                <div className="absolute -bottom-3 -right-3 bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                                    <CheckCircle className="w-3.5 h-3.5" /> Verified Expert
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-center lg:text-left pb-10">
                                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                                    <span className="text-primary text-xs font-black uppercase tracking-[0.2em] bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
                                        Author Profile
                                    </span>
                                </div>
                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 leading-tight">
                                    {author.name}
                                </h1>
                                <p className="text-primary font-bold text-lg mb-5 uppercase tracking-wider">
                                    {author.role}
                                </p>
                                <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl mb-8">
                                    {author.bio}
                                </p>

                                {/* Social Links */}
                                <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                                    {author.social.linkedin && (
                                        <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/10 hover:bg-[#0077b5] border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300">
                                            <Linkedin className="w-4 h-4" /> LinkedIn
                                        </a>
                                    )}
                                    {author.social.facebook && (
                                        <a href={author.social.facebook} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/10 hover:bg-[#4267B2] border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300">
                                            <Facebook className="w-4 h-4" /> Facebook
                                        </a>
                                    )}
                                    {author.social.twitter && (
                                        <a href={author.social.twitter} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/10 hover:bg-[#1DA1F2] border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300">
                                            <Twitter className="w-4 h-4" /> Twitter
                                        </a>
                                    )}
                                    <Link href="/booking/"
                                        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xl text-sm font-black uppercase tracking-wider transition-all duration-300 shadow-lg shadow-primary/30">
                                        Book Transfer <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Curved bottom */}
                    <div className="h-12 bg-gray-50 rounded-t-[3rem] relative z-10 mt-4" />
                </div>

                {/* ══════════════════════════════════ STATS ROW ══════════════════════════════════ */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20 mb-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: BookOpen, label: 'Articles Published', value: stats.articles + '+', color: 'text-blue-600', bg: 'bg-blue-50' },
                            { icon: Clock, label: 'Years Experience', value: stats.years, color: 'text-amber-600', bg: 'bg-amber-50' },
                            { icon: Users, label: 'Monthly Readers', value: stats.readers, color: 'text-green-600', bg: 'bg-green-50' },
                            { icon: TrendingUp, label: 'In-depth Guides', value: stats.guides + '+', color: 'text-purple-600', bg: 'bg-purple-50' },
                        ].map(({ icon: Icon, label, value, color, bg }, i) => (
                            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                                    <Icon className={`w-6 h-6 ${color}`} />
                                </div>
                                <div className={`text-3xl font-black ${color} mb-1`}>{value}</div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ══════════════════════════════════ MAIN CONTENT ══════════════════════════════════ */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* LEFT: Articles */}
                        <div className="lg:col-span-2 space-y-10">

                            {/* Featured (Supabase) articles */}
                            {featuredBlogs.length > 0 && (
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-1 h-8 bg-primary rounded-full" />
                                        <h2 className="text-2xl font-black text-gray-900">Latest Articles</h2>
                                        <span className="ml-auto bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                                            {featuredBlogs.length} Posts
                                        </span>
                                    </div>
                                    <div className="space-y-4">
                                        {featuredBlogs.map(blog => (
                                            <article key={blog.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex gap-5 group">
                                                {blog.featured_image && (
                                                    <div className="w-32 h-24 relative rounded-xl overflow-hidden flex-shrink-0">
                                                        <Image src={blog.featured_image} alt={blog.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                )}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                                                            {blog.category}
                                                        </span>
                                                        <span className="flex items-center gap-1 text-gray-400 text-xs">
                                                            <Calendar className="w-3 h-3" />
                                                            {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors mb-1 line-clamp-2">
                                                        <Link href={`/blog/${blog.slug}/`}>{blog.title}</Link>
                                                    </h3>
                                                    <p className="text-gray-500 text-sm line-clamp-1">{blog.excerpt}</p>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Articles by Category (from blogTemplates) */}
                            {categories.map(cat => {
                                const catArticles = articlesByCategory[cat] || [];
                                if (catArticles.length === 0) return null;
                                return (
                                    <div key={cat}>
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="w-1 h-6 bg-gray-300 rounded-full" />
                                            <h2 className="text-xl font-black text-gray-800 flex items-center gap-2">
                                                <Tag className="w-4 h-4 text-gray-400" /> {cat}
                                            </h2>
                                            <span className="ml-auto bg-gray-100 text-gray-500 text-xs font-bold px-2.5 py-1 rounded-full">
                                                {catArticles.length} articles
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {catArticles.slice(0, 6).map(blog => (
                                                <Link
                                                    key={blog.id}
                                                    href={`/blog/${blog.slug}/`}
                                                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 group block"
                                                >
                                                    <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                                        {blog.title}
                                                    </h3>
                                                    <p className="text-gray-400 text-xs line-clamp-2">{blog.excerpt}</p>
                                                    <span className="inline-flex items-center gap-1 text-primary text-xs font-semibold mt-3">
                                                        Read Guide <ArrowRight className="w-3 h-3" />
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                        {catArticles.length > 6 && (
                                            <Link href={`/blog/?category=${encodeURIComponent(cat)}`}
                                                className="block text-center mt-4 text-sm text-primary font-semibold hover:underline">
                                                View all {catArticles.length} {cat} articles →
                                            </Link>
                                        )}
                                    </div>
                                );
                            })}

                            {/* No articles fallback */}
                            {allBlogs.length === 0 && (
                                <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
                                    <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500">No articles published yet.</p>
                                </div>
                            )}
                        </div>

                        {/* RIGHT: Sidebar */}
                        <div className="space-y-6">

                            {/* Expertise Box */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" /> Areas of Expertise
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {expertise.map((tag, i) => (
                                        <span key={i} className="bg-gray-50 border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full hover:border-primary hover:text-primary transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* About / Credentials */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-primary" /> Credentials
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        { icon: Briefcase, text: '12+ Years Transport Industry Experience' },
                                        { icon: MapPin, text: 'Based in Saudi Arabia & KSA Routes Expert' },
                                        { icon: Globe, text: 'Specialized in Hajj & Umrah Pilgrimage Logistics' },
                                        { icon: CheckCircle, text: 'SQA Engineer & AI Automation Specialist' },
                                        { icon: TrendingUp, text: 'Founder of Taxi Service KSA' },
                                    ].map(({ icon: Icon, text }, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Booking Widget */}
                            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white">
                                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                                    <Globe className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-black text-xl mb-2">Need a VIP Transfer?</h3>
                                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                                    Book a professional private chauffeur across Saudi Arabia — Airport, Umrah, Intercity & more.
                                </p>
                                <Link href="/booking/"
                                    className="block text-center bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-sm py-3 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20">
                                    Get a Free Quote →
                                </Link>
                                <Link href="/blog/"
                                    className="block text-center mt-3 text-gray-400 hover:text-white text-sm transition-colors">
                                    Browse All {allBlogs.length}+ Guides
                                </Link>
                            </div>

                            {/* All Authors link */}
                            <Link href="/author/"
                                className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                                <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <Users className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">Meet the Full Team</div>
                                    <div className="text-xs text-gray-400">All Editorial Authors →</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
