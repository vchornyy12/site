import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import AuthGuard from '@/components/auth/AuthGuard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, ArrowLeft, Save } from 'lucide-react';

const PostEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isNewPost = id === 'new';
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [slug, setSlug] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [published, setPublished] = useState(false);
  const [isLoading, setIsLoading] = useState(!isNewPost);
  const [isSaving, setIsSaving] = useState(false);

  // Fetch post data if editing an existing post
  useEffect(() => {
    if (!isNewPost) {
      const fetchPost = async () => {
        try {
          const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('id', id)
            .single();

          if (error) throw error;

          if (data) {
            setTitle(data.title);
            setContent(data.content);
            setSummary(data.summary || '');
            setSlug(data.slug);
            setCoverImage(data.cover_image || '');
            setPublished(data.published);
          }
        } catch (error) {
          console.error('Error fetching post:', error);
          toast({
            title: 'Error fetching post',
            description: 'Unable to load the post for editing.',
            variant: 'destructive',
          });
          navigate('/admin');
        } finally {
          setIsLoading(false);
        }
      };

      fetchPost();
    }
  }, [id, isNewPost, navigate, toast]);

  // Generate slug from title
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
      .trim();
  };

  const checkSlugUniqueness = async (proposedSlug: string): Promise<boolean> => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('slug', proposedSlug)
      .single();

    if (error && error.code === 'PGRST116') {
      // PGRST116 means no rows found - slug is unique
      return true;
    }

    // If we found a post and it's not the current one being edited, slug is not unique
    return isNewPost ? !data : data?.id === id;
  };

  const generateUniqueSlug = async (baseSlug: string): Promise<string> => {
    let uniqueSlug = baseSlug;
    let counter = 1;
    
    while (!(await checkSlugUniqueness(uniqueSlug))) {
      uniqueSlug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    return uniqueSlug;
  };

  const handleTitleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    // Only auto-generate slug for new posts and only if user hasn't manually edited the slug
    if (isNewPost && !slug) {
      const baseSlug = generateSlug(newTitle);
      const uniqueSlug = await generateUniqueSlug(baseSlug);
      setSlug(uniqueSlug);
    }
  };

  const handleSlugChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSlug = generateSlug(e.target.value);
    setSlug(newSlug);
  };

  const handleSave = async () => {
    if (!title || !content || !slug) {
      toast({
        title: 'Missing required fields',
        description: 'Title, content, and slug are required.',
        variant: 'destructive',
      });
      return;
    }

    setIsSaving(true);

    try {
      // Check if the slug is unique before saving
      if (!(await checkSlugUniqueness(slug))) {
        toast({
          title: 'Slug already exists',
          description: 'Please choose a different URL slug for your post.',
          variant: 'destructive',
        });
        setIsSaving(false);
        return;
      }

      if (isNewPost) {
        // Create new post
        const { data, error } = await supabase
          .from('blog_posts')
          .insert({
            title,
            content,
            summary,
            slug,
            cover_image: coverImage || null, // Ensure null is stored instead of empty string
            published,
            user_id: user?.id,
          })
          .select('id')
          .single();

        if (error) {
          if (error.code === '23505') { // Unique constraint violation
            throw new Error('A post with this URL slug already exists. Please choose a different one.');
          }
          throw error;
        }

        toast({
          title: 'Post created successfully',
        });

        navigate('/admin');
      } else {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title,
            content,
            summary,
            slug,
            cover_image: coverImage,
            published,
            updated_at: new Date().toISOString(),
          })
          .eq('id', id);

        if (error) throw error;

        toast({
          title: 'Post updated successfully',
        });

        navigate('/admin');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: 'Error saving post',
        description: 'An error occurred while saving the post.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <AuthGuard adminOnly>
          <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        </AuthGuard>
      </Layout>
    );
  }

  return (
    <Layout>
      <AuthGuard adminOnly>
        <div className="container mx-auto px-6 py-20 pt-32">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate('/admin')}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-3xl font-bold">
                {isNewPost ? 'Create New Post' : 'Edit Post'}
              </h1>
            </div>
            <Button onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Post
                </>
              )}
            </Button>
          </div>

          <Separator className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Post title"
                  value={title}
                  onChange={handleTitleChange}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your blog post content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[400px] resize-y"
                />
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post Settings</CardTitle>
                  <CardDescription>
                    Configure your post settings and metadata
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="slug">URL Slug</Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-muted-foreground text-sm">/blog/</span>
                      <Input
                        id="slug"
                        placeholder="post-url-slug"
                        value={slug}
                        onChange={handleSlugChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary">Summary</Label>
                    <Textarea
                      id="summary"
                      placeholder="Brief summary of your post"
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      className="resize-y h-24"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverImage">Cover Image URL</Label>
                    <Input
                      id="coverImage"
                      placeholder="https://example.com/image.jpg"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-4">
                    <Checkbox
                      id="published"
                      checked={published}
                      onCheckedChange={(checked) => setPublished(checked === true)}
                    />
                    <Label htmlFor="published" className="cursor-pointer">
                      Publish post
                    </Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-muted-foreground">
                    Last updated: {new Date().toLocaleString()}
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </AuthGuard>
    </Layout>
  );
};

export default PostEditor;
