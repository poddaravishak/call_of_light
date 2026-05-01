export type Author = {
  id: string;
  slug: string;
  name: string;
  bio: string | null;
  avatar: string | null;
  tagline: string | null;
  twitter: string | null;
  instagram: string | null;
  website: string | null;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image: string | null;
  body: unknown;
  body_html: string | null;
  tags: string[];
  featured?: boolean;
  language?: string | null;
  status: "draft" | "published";
  published_at: string | null;
  read_time: number | null;
  seo_description: string | null;
  author_id: string;
  authors?: Author | null;
};

export type SiteConfig = {
  id: string;
  hero_title: string;
  hero_tagline: string;
  hero_description: string;
  hero_bg_image: string | null;
  site_name: string;
  site_tagline: string;
};
