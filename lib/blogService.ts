import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image?: string;
    category: string;
    tags: string[];
    author: string;
    status: 'draft' | 'published' | 'scheduled';
    published_at?: string;
    seo_title?: string;
    seo_description?: string;
    seo_keywords?: string[];
    views: number;
    created_at: string;
    updated_at: string;
}

export const blogService = {
    // Get all published blogs
    async getPublishedBlogs() {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('status', 'published')
            .lte('published_at', new Date().toISOString()) // Only past posts
            .order('published_at', { ascending: false });

        if (error) throw error;
        return data as Blog[];
    },

    // Get all blogs (for admin)
    async getAllBlogs() {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return data as Blog[];
    },

    // Get blog by slug (any status - for admin checks)
    async getBlogBySlugAnyStatus(slug: string) {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('slug', slug)
            .maybeSingle();

        if (error) throw error;
        return data as Blog;
    },

    // Get blog by slug
    async getBlogBySlug(slug: string) {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('slug', slug)
            .eq('status', 'published')
            .single();

        if (error) throw error;

        // Increment views
        if (data) {
            await supabase
                .from('blogs')
                .update({ views: data.views + 1 })
                .eq('id', data.id);
        }

        return data as Blog;
    },

    // Get blog by ID (for admin)
    async getBlogById(id: string) {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        return data as Blog;
    },

    // Get blogs by category
    async getBlogsByCategory(category: string) {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('category', category)
            .eq('status', 'published')
            .order('published_at', { ascending: false });

        if (error) throw error;
        return data as Blog[];
    },

    // Get blogs by author
    async getBlogsByAuthor(authorName: string) {
        const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .eq('author', authorName)
            .eq('status', 'published')
            .order('published_at', { ascending: false });

        if (error) throw error;
        return data as Blog[];
    },

    // Create blog
    async createBlog(blog: Omit<Blog, 'id' | 'created_at' | 'updated_at' | 'views'>) {
        const { data, error } = await supabase
            .from('blogs')
            .insert([blog])
            .select()
            .single();

        if (error) throw error;
        return data as Blog;
    },

    // Update blog
    async updateBlog(id: string, updates: Partial<Blog>) {
        const { data, error } = await supabase
            .from('blogs')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as Blog;
    },

    // Delete blog
    async deleteBlog(id: string) {
        const { error } = await supabase
            .from('blogs')
            .delete()
            .eq('id', id);

        if (error) throw error;
    },

    // Publish blog
    async publishBlog(id: string) {
        const { data, error } = await supabase
            .from('blogs')
            .update({
                status: 'published',
                published_at: new Date().toISOString()
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as Blog;
    },

    // Unpublish blog
    async unpublishBlog(id: string) {
        const { data, error } = await supabase
            .from('blogs')
            .update({ status: 'draft' })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return data as Blog;
    },

    async uploadImage(file: File): Promise<string | null> {
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(filePath, file);

            if (uploadError) {
                console.error('Error uploading image:', uploadError);
                throw uploadError;
            }

            const { data } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filePath);

            return data.publicUrl;
        } catch (error) {
            console.error('Upload failed:', error);
            return null;
        }
    },

    // Generate slug from title
    generateSlug(title: string): string {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
};
