
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ybzowgqewidjajurfnnt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inliem93Z3Fld2lkamFqdXJmbm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MzMxOTUsImV4cCI6MjA1NjMwOTE5NX0.zoUy9JSDE036UgqctWSTblj6FPgfDpNd15qm04Y0kfA";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Define types for our database tables since we can't modify the types.ts file
export interface Profile {
  id: string;
  created_at: string;
  updated_at: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  is_admin: boolean;
}

export interface BlogPost {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  summary: string | null;
  slug: string;
  published: boolean;
  cover_image: string | null;
  user_id: string;
}
