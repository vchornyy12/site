import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AuthGuardProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, adminOnly = false }) => {
  const { user, isLoading, isAdmin, profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Only redirect when we're sure about auth state (not loading)
    if (!isLoading) {
      if (!user) {
        // Redirect to auth if not logged in
        toast({
          title: "Authentication required",
          description: "Please log in to access this page.",
          variant: "destructive",
        });
        navigate('/auth');
      } else if (adminOnly && !isAdmin) {
        // Double check profile and admin status
        if (!profile?.is_admin) {
          toast({
            title: "Access denied",
            description: "You do not have permission to access this page.",
            variant: "destructive",
          });
          navigate('/');
        }
      }
    }
  }, [user, isLoading, navigate, adminOnly, isAdmin, profile, toast]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Only render children if authenticated and meets admin requirement
  if (!user || (adminOnly && !isAdmin)) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
