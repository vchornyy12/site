import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Loader2, Calendar, ArrowLeft, Edit } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import NotFound from './NotFound';

type BlogPost = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  cover_image: string | null;
  published: boolean;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          if (error.code === 'PGRST116') {
            setNotFound(true);
          }
          throw error;
        }

        if (!data.published && !isAdmin) {
          setNotFound(true);
          return;
        }

        setPost(data);
        document.title = `${data.title} | DevTogether Blog`;
      } catch (error) {
        console.error('Error fetching post:', error);
        if ((error as any).code !== 'PGRST116') {
          setNotFound(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
    window.scrollTo(0, 0);
  }, [slug, isAdmin]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleEdit = () => {
    navigate(`/admin/posts/edit/${post?.id}`);
  };

  if (notFound) {
    return <NotFound />;
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout>
      <article className="container mx-auto px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-6">
            {/* Back button and admin controls */}
            <div className="flex justify-between items-center">
              <Link to="/blog">
                <Button variant="ghost" className="pl-0">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
              
              {isAdmin && (
                <Button variant="outline" onClick={handleEdit}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Post
                </Button>
              )}
            </div>

            {/* Post header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
              
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={post.created_at}>
                  {formatDate(post.created_at)}
                </time>
                
                {!post.published && (
                  <>
                    <span className="mx-2">•</span>
                    <span className="bg-yellow-100 dark:bg-yellow-800/20 text-yellow-800 dark:text-yellow-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Draft
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Cover image */}
            {post.cover_image && (
              <div className="my-6 rounded-lg overflow-hidden">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            )}

            <Separator className="my-8" />

            {/* Post content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
