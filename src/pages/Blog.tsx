import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

type BlogPost = {
  id: string;
  title: string;
  summary: string | null;
  slug: string;
  cover_image: string | null;
  created_at: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAdmin } = useAuth();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Blog | DevTogether';
    
    // Fetch blog posts
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, summary, slug, cover_image, created_at')
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Insights Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stay up-to-date with the latest trends, insights, and innovations in AI assistant technology.
            </p>
          </div>
          
          {isAdmin && (
            <Link to="/admin">
              <Button>Manage Blog</Button>
            </Link>
          )}
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold mb-4">No blog posts yet</h3>
            <p className="text-muted-foreground mb-8">
              Check back soon for insightful articles on AI and customer service technology.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {posts.map((post) => (
              <Link 
                to={`/blog/${post.slug}`} 
                key={post.id}
                className="group bg-card rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg border border-muted"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.cover_image || "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
                      Technology
                    </span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.created_at)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.summary || "Click to read this insightful article on AI technology and its applications."}
                  </p>
                  <span className="text-primary hover:underline font-medium inline-flex items-center">
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blog;
