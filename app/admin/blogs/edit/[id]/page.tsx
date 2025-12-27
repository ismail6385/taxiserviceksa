
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { blogService } from '@/lib/blogService';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import Link from 'next/link';
import RichTextEditor from '@/components/RichTextEditor';

interface EditBlogPageProps {
    params: {
        id: string;
    };
}

export default function EditBlogPage({ params }: EditBlogPageProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: 'Travel Tips',
        tags: [] as string[],
        status: 'draft' as 'draft' | 'published',
        seo_title: '',
        seo_description: '',
        seo_keywords: [] as string[],
        author: 'Taxi Service KSA', // Default, will be overwritten
        created_at: '', // Keep original dates
        views: 0
    });

    const categories = [
        'Travel Tips',
        'Umrah Guide',
        'Airport Guide',
        'Business Travel',
        'Saudi Arabia',
        'Routes',
        'Fleet',
        'News',
        'Travel Guides' // Added Travel Guides as it was used in our script
    ];

    useEffect(() => {
        loadBlog();
    }, [params.id]);

    const loadBlog = async () => {
        try {
            setLoading(true);
            const data = await blogService.getBlogById(params.id);
            if (!data) {
                alert('Blog not found');
                router.push('/admin/blogs');
                return;
            }
            // Populate form
            setFormData({
                title: data.title,
                slug: data.slug,
                excerpt: data.excerpt,
                content: data.content,
                category: data.category,
                tags: data.tags || [],
                status: data.status,
                seo_title: data.seo_title || '',
                seo_description: data.seo_description || '',
                seo_keywords: data.seo_keywords || [],
                author: data.author,
                created_at: data.created_at,
                views: data.views
            });
        } catch (error) {
            console.error('Error loading blog:', error);
            alert('Failed to load blog');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (publish: boolean = false) => {
        if (!formData.title || !formData.content) {
            alert('Please fill in title and content');
            return;
        }

        try {
            setSaving(true);
            await blogService.updateBlog(params.id, {
                ...formData,
                status: publish ? 'published' : 'draft',
                published_at: publish ? new Date().toISOString() : undefined,
                updated_at: new Date().toISOString()
            });

            alert(`Blog ${publish ? 'published' : 'updated'} successfully!`);
            router.push('/admin/blogs');
        } catch (error) {
            console.error('Error updating blog:', error);
            alert('Failed to update blog');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-gray-600">Loading editor...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/blogs">
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
                            <p className="text-gray-600 mt-1">Editing: {formData.title}</p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => handleSave(false)}
                            disabled={saving}
                        >
                            <Save className="w-4 h-4 mr-2" />
                            Save Draft
                        </Button>
                        <Button
                            className="bg-green-600 text-white hover:bg-green-700"
                            onClick={() => handleSave(true)}
                            disabled={saving}
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            {formData.status === 'published' ? 'Update & Publish' : 'Publish'}
                        </Button>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white rounded-lg p-8 border-2 border-gray-200 space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                            Title *
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-lg font-semibold"
                            placeholder="Enter blog title..."
                        />
                    </div>

                    {/* Slug */}
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                            URL Slug
                        </label>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500">/blog/</span>
                            <input
                                type="text"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                placeholder="url-slug"
                            />
                        </div>
                    </div>

                    {/* Category & Tags */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Category
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-900 mb-2">
                                Tags (comma separated)
                            </label>
                            <input
                                type="text"
                                value={formData.tags.join(', ')}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                                })}
                                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                placeholder="tag1, tag2, tag3"
                            />
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                            Excerpt
                        </label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            rows={3}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                            placeholder="Brief summary of the blog post..."
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">
                            Content *
                        </label>
                        <RichTextEditor
                            content={formData.content}
                            onChange={(content) => setFormData({ ...formData, content })}
                            placeholder="Start writing your blog post..."
                        />
                        <p className="text-sm text-gray-500 mt-2">
                            Use the toolbar to format your content. Rich text editor with WordPress Gutenberg-style experience.
                        </p>
                    </div>

                    {/* SEO Section */}
                    <div className="border-t-2 border-gray-200 pt-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">SEO Settings</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    SEO Title
                                </label>
                                <input
                                    type="text"
                                    value={formData.seo_title}
                                    onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                    placeholder="SEO optimized title"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    SEO Description
                                </label>
                                <textarea
                                    value={formData.seo_description}
                                    onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                                    placeholder="Meta description for search engines..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2">
                                    SEO Keywords (comma separated)
                                </label>
                                <input
                                    type="text"
                                    value={formData.seo_keywords.join(', ')}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        seo_keywords: e.target.value.split(',').map(k => k.trim()).filter(Boolean)
                                    })}
                                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                                    placeholder="keyword1, keyword2, keyword3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
