-- Create profiles table
create table profiles (
    id uuid references auth.users on delete cascade primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    username text unique,
    full_name text,
    avatar_url text,
    is_admin boolean default false not null,
    constraint username_length check (char_length(username) >= 3)
);

-- Create blog_posts table
create table blog_posts (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
    title text not null,
    content text not null,
    summary text,
    slug text not null unique,
    published boolean default false not null,
    cover_image text,
    user_id uuid references auth.users on delete cascade not null
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;
alter table blog_posts enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone"
    on profiles for select
    using (true);

create policy "Users can insert their own profile"
    on profiles for insert
    with check (auth.uid() = id);

create policy "Users can update own profile"
    on profiles for update
    using (auth.uid() = id);

-- Blog posts policies
create policy "Published posts are viewable by everyone"
    on blog_posts for select
    using (published = true);

create policy "Admins can view all posts"
    on blog_posts for select
    using (
        exists (
            select 1 from profiles
            where profiles.id = auth.uid()
            and profiles.is_admin = true
        )
    );

create policy "Admins can insert posts"
    on blog_posts for insert
    with check (
        exists (
            select 1 from profiles
            where profiles.id = auth.uid()
            and profiles.is_admin = true
        )
    );

create policy "Admins can update posts"
    on blog_posts for update
    using (
        exists (
            select 1 from profiles
            where profiles.id = auth.uid()
            and profiles.is_admin = true
        )
    );

create policy "Admins can delete posts"
    on blog_posts for delete
    using (
        exists (
            select 1 from profiles
            where profiles.id = auth.uid()
            and profiles.is_admin = true
        )
    );

-- Create function to handle updating timestamps
create or replace function handle_updated_at()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

-- Create triggers for updating timestamps
create trigger handle_updated_at
    before update on profiles
    for each row
    execute procedure handle_updated_at();

create trigger handle_updated_at
    before update on blog_posts
    for each row
    execute procedure handle_updated_at();

-- Create indexes for better performance
create index blog_posts_user_id_idx on blog_posts(user_id);
create index blog_posts_slug_idx on blog_posts(slug);
create index profiles_username_idx on profiles(username);

-- Function to make a user an admin
create or replace function make_user_admin(user_id uuid)
returns void as $$
begin
    update profiles
    set is_admin = true
    where id = user_id;
end;
$$ language plpgsql;
