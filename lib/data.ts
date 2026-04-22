import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { demoAuthors, demoPosts, demoSiteConfig } from "@/lib/demo-data";
import type { Author, Post, SiteConfig } from "@/lib/types";

const isDemoMode = () => !isSupabaseConfigured;

const byDate = (a: Post, b: Post) =>
  new Date(b.published_at ?? 0).getTime() -
  new Date(a.published_at ?? 0).getTime();

export async function getSiteConfig(): Promise<SiteConfig> {
  if (isDemoMode()) return demoSiteConfig;
  const { data } = await getSupabase().from("site_config").select("*").single();
  return (data as unknown as SiteConfig) ?? demoSiteConfig;
}

export async function getFeaturedPost(): Promise<Post | null> {
  if (isDemoMode()) return [...demoPosts].sort(byDate)[0] ?? null;
  const { data } = await getSupabase()
    .from("posts")
    .select(
      "id, title, slug, excerpt, cover_image, published_at, tags, authors(name, slug, avatar)"
    )
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  return (data as unknown as Post) ?? null;
}

export async function getPosts(params: {
  page?: number;
  limit?: number;
  tag?: string;
  authorId?: string;
}): Promise<Post[]> {
  const { page = 1, limit = 9, tag, authorId } = params;

  if (isDemoMode()) {
    let rows = [...demoPosts].sort(byDate);
    if (tag && tag !== "All")
      rows = rows.filter((p) => p.tags.includes(tag));
    if (authorId) rows = rows.filter((p) => p.author_id === authorId);
    const from = (page - 1) * limit;
    return rows.slice(from, from + limit);
  }

  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = getSupabase()
    .from("posts")
    .select(
      "id, title, slug, excerpt, cover_image, published_at, tags, authors(name, slug, avatar)"
    )
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .range(from, to);

  if (tag && tag !== "All") query = query.contains("tags", [tag]);
  if (authorId) query = query.eq("author_id", authorId);

  const { data } = await query;
  return (data as unknown as Post[]) ?? [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (isDemoMode()) return demoPosts.find((p) => p.slug === slug) ?? null;
  const { data } = await getSupabase()
    .from("posts")
    .select("*, authors(*)")
    .eq("slug", slug)
    .eq("status", "published")
    .single();
  return (data as unknown as Post) ?? null;
}

export async function getAuthors(): Promise<Author[]> {
  if (isDemoMode())
    return [...demoAuthors].sort((a, b) => a.name.localeCompare(b.name));
  const { data } = await getSupabase()
    .from("authors")
    .select("*")
    .order("name");
  return (data as unknown as Author[]) ?? [];
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  if (isDemoMode()) return demoAuthors.find((a) => a.slug === slug) ?? null;
  const { data } = await getSupabase()
    .from("authors")
    .select("*")
    .eq("slug", slug)
    .single();
  return (data as unknown as Author) ?? null;
}

export async function getPostCountByAuthor(
  authorId: string
): Promise<number> {
  if (isDemoMode())
    return demoPosts.filter((p) => p.author_id === authorId).length;
  const { count } = await getSupabase()
    .from("posts")
    .select("*", { count: "exact", head: true })
    .eq("author_id", authorId)
    .eq("status", "published");
  return count ?? 0;
}
