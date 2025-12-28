
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogService } from '@/lib/blogService';
import { AUTHORS } from '@/lib/constants';
import AuthorCard from '@/components/AuthorCard';
import { Calendar, ArrowRight } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

interface Props {
    params: {
        slug: string;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const author = AUTHORS.find(a => a.slug === params.slug);

    if (!author) {
        return { title: 'Author Not Found' };
    }

    return {
        title: `${author.name} - Author Profile | Taxi Service KSA`,
        description: author.bio,
    };
}

export default async function AuthorProfilePage({ params }: Props) {
    const author = AUTHORS.find(a => a.slug === params.slug);

    if (!author) {
        notFound();
    }

    const blogs = await blogService.getBlogsByAuthor(author.name);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Author Header */}
                        <AuthorCard authorName={author.name} className="border-primary/20 shadow-lg" asH1 />

                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Latest Articles by {author.name.split(' ')[0]}
                            </h2>
                            <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-500 border border-gray-200">
                                {blogs.length} Articles
                            </span>
                        </div>

                        {/* Blog Grid */}
                        <div className="space-y-6">
                            {blogs.length > 0 ? (
                                blogs.map(blog => (
                                    <article key={blog.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 group">
                                        {/* Thumbnail */}
                                        <div className="w-full md:w-48 h-48 md:h-auto relative rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                                            {blog.featured_image ? (
                                                <Image
                                                    src={blog.featured_image}
                                                    alt={blog.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="flex items-center justify-center h-full text-gray-300">
                                                    <Image src="/images/logo.png" alt="Placeholder" width={50} height={50} className="opacity-20" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                                                <span className="bg-primary/10 text-primary-dark px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide">
                                                    {blog.category}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(blog.published_at || blog.created_at).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors">
                                                <Link href={`/blog/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>

                                            <p className="text-gray-600 line-clamp-2 mb-4 text-sm leading-relaxed">
                                                {blog.excerpt}
                                            </p>

                                            <Link
                                                href={`/blog/${blog.slug}`}
                                                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark mt-auto"
                                            >
                                                Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                            </Link>
                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                                    <p className="text-gray-500">No articles published yet.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
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
