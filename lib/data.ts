import { demoAuthors, demoPosts, demoSiteConfig } from "@/lib/demo-data";
import type { Author, Post, SiteConfig } from "@/lib/types";
import { createClient, DB_ID, COL, SITE_SETTINGS_DOC_ID, Query } from "@/lib/appwrite";
import type { Models } from "node-appwrite";

// Appwrite Documents have typed system fields but custom attributes are untyped
type Doc = Models.Document & Record<string, unknown>;

const byDate = (a: Post, b: Post) =>
  new Date(b.published_at ?? 0).getTime() -
  new Date(a.published_at ?? 0).getTime();

function s(v: unknown, fallback = ''): string { return (v as string) ?? fallback }
function sn(v: unknown): string | null { return v ? (v as string) : null }
function bn(v: unknown): boolean { return Boolean(v) }

function mapPost(doc: Doc, authorDoc?: Doc): Post {
  return {
    id: doc.$id,
    slug: s(doc.slug),
    title: s(doc.title),
    excerpt: sn(doc.excerpt),
    cover_image: sn(doc.coverImage),
    body: sn(doc.content),
    body_html: sn(doc.content),
    tags: doc.tagNames ? s(doc.tagNames).split(',').map(t => t.trim()).filter(Boolean) : [],
    featured: bn(doc.featured),
    language: sn(doc.language),
    status: (s(doc.status) || 'published') as Post['status'],
    published_at: s(doc.publishedAt) || doc.$createdAt,
    read_time: doc.readTime ? Number(doc.readTime) : null,
    seo_description: sn(doc.seoDescription),
    author_id: s(doc.authorId),
    authors: doc.authorName
      ? {
          id: authorDoc?.$id ?? s(doc.authorId),
          slug: (authorDoc?.slug as string) || authorDoc?.$id || '',
          name: (authorDoc?.name as string) ?? s(doc.authorName),
          bio: sn(authorDoc?.bio),
          avatar: sn(authorDoc?.photo),
          tagline: sn(authorDoc?.tagline),
          twitter: sn(authorDoc?.twitter),
          instagram: sn(authorDoc?.instagram),
          website: sn(authorDoc?.website),
        }
      : null,
  };
}

async function fetchAuthorsByUserId(authorIds: string[]): Promise<Map<string, Doc>> {
  if (authorIds.length === 0) return new Map();
  try {
    const db = createClient();
    const res = await db.listDocuments(DB_ID, COL.AUTHORS, [
      Query.equal('userId', authorIds),
      Query.limit(authorIds.length + 1),
    ]);
    return new Map((res.documents as Doc[]).map(doc => [doc.userId as string, doc]));
  } catch {
    return new Map();
  }
}

export async function getSiteConfig(): Promise<SiteConfig> {
  try {
    const db = createClient();
    const doc = await db.getDocument(DB_ID, COL.SITE_SETTINGS, SITE_SETTINGS_DOC_ID) as Doc;
    return {
      id: doc.$id,
      hero_title: s(doc.title),
      hero_tagline: s(doc.motto),
      hero_description: s(doc.subtitle),
      hero_bg_image: sn(doc.bgImage),
      site_name: s(doc.title),
      site_tagline: s(doc.motto),
    };
  } catch {
    return demoSiteConfig;
  }
}

export async function getFeaturedPost(): Promise<Post | null> {
  try {
    const db = createClient();
    const res = await db.listDocuments(DB_ID, COL.POSTS, [
      Query.equal('status', 'published'),
      Query.orderDesc('$createdAt'),
      Query.limit(1),
    ]);
    const doc = res.documents[0] as Doc | undefined;
    if (!doc) return null;
    const authorMap = await fetchAuthorsByUserId(([doc.authorId] as string[]).filter(Boolean));
    return mapPost(doc, authorMap.get(doc.authorId as string));
  } catch {
    return [...demoPosts].sort(byDate)[0] ?? null;
  }
}

export async function getFeaturedPosts(): Promise<Post[]> {
  try {
    const db = createClient();
    const res = await db.listDocuments(DB_ID, COL.POSTS, [
      Query.equal('status', 'published'),
      Query.orderDesc('$createdAt'),
      Query.limit(20),
    ]);
    const docs = res.documents as Doc[];
    const authorIds = [...new Set(docs.map(d => d.authorId as string).filter(Boolean))];
    const authorMap = await fetchAuthorsByUserId(authorIds);
    const posts = docs.map(d => mapPost(d, authorMap.get(d.authorId as string)));
    const featuredOnly = posts.filter(p => p.featured);
    return (featuredOnly.length > 0 ? featuredOnly : posts).slice(0, 4);
  } catch {
    return [...demoPosts].sort(byDate).slice(0, 4);
  }
}

export async function getHomePagePosts(): Promise<Post[]> {
  try {
    const db = createClient();
    const res = await db.listDocuments(DB_ID, COL.POSTS, [
      Query.equal('status', 'published'),
      Query.orderDesc('$createdAt'),
      Query.limit(12),
    ]);
    const docs = res.documents as Doc[];
    const authorIds = [...new Set(docs.map(d => d.authorId as string).filter(Boolean))];
    const authorMap = await fetchAuthorsByUserId(authorIds);
    const posts = docs.map(d => mapPost(d, authorMap.get(d.authorId as string)));
    const featured = posts.filter(p => p.featured);
    const rest = posts.filter(p => !p.featured);
    return [...featured, ...rest].slice(0, 8);
  } catch {
    const sorted = [...demoPosts].sort(byDate);
    const featured = sorted.filter(p => p.featured);
    const rest = sorted.filter(p => !p.featured);
    return [...featured, ...rest].slice(0, 8);
  }
}

export async function getPosts(params: {
  page?: number;
  limit?: number;
  tag?: string;
  language?: string;
  authorId?: string;
}): Promise<Post[]> {
  const { page = 1, limit = 9, tag, language, authorId } = params;

  try {
    const db = createClient();
    const queries: string[] = [
      Query.equal('status', 'published'),
      Query.orderDesc('$createdAt'),
      Query.limit(limit),
      Query.offset((page - 1) * limit),
    ];

    if (language && language !== 'All') queries.push(Query.equal('language', language.toLowerCase()));
    if (authorId) queries.push(Query.equal('authorId', authorId));

    const res = await db.listDocuments(DB_ID, COL.POSTS, queries);
    const docs = res.documents as Doc[];
    const authorIds = [...new Set(docs.map(d => d.authorId as string).filter(Boolean))];
    const authorMap = await fetchAuthorsByUserId(authorIds);
    let posts = docs.map(d => mapPost(d, authorMap.get(d.authorId as string)));

    if (tag && tag !== 'All') {
      posts = posts.filter(p => p.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
    }

    return posts;
  } catch {
    let rows = [...demoPosts].sort(byDate);
    if (tag && tag !== 'All') rows = rows.filter(p => p.tags.includes(tag));
    if (language && language !== 'All') rows = rows.filter(p => p.language === language);
    if (authorId) rows = rows.filter(p => p.author_id === authorId);
    const from = (page - 1) * limit;
    return rows.slice(from, from + limit);
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const db = createClient();
    const res = await db.listDocuments(DB_ID, COL.POSTS, [
      Query.equal('slug', slug),
      Query.equal('status', 'published'),
      Query.limit(1),
    ]);
    const doc = res.documents[0] as Doc | undefined;
    if (!doc) return null;
    const authorMap = await fetchAuthorsByUserId(([doc.authorId] as string[]).filter(Boolean));
    return mapPost(doc, authorMap.get(doc.authorId as string));
  } catch {
    return demoPosts.find(p => p.slug === slug) ?? null;
  }
}

export async function getAuthors(): Promise<Author[]> {
  try {
    const db = createClient();
    const res = await db.listDocuments(DB_ID, COL.AUTHORS, [
      Query.orderAsc('name'),
      Query.limit(100),
    ]);
    return (res.documents as Doc[]).map((doc) => ({
      id: doc.$id,
      slug: (doc.slug as string) || doc.$id,
      name: (doc.name as string) ?? '',
      bio: (doc.bio as string) ?? null,
      avatar: (doc.photo as string) ?? null,
      tagline: (doc.tagline as string) ?? null,
      twitter: (doc.twitter as string) ?? null,
      instagram: (doc.instagram as string) ?? null,
      website: (doc.website as string) ?? null,
    }));
  } catch {
    return [...demoAuthors].sort((a, b) => a.name.localeCompare(b.name));
  }
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  try {
    const db = createClient();
    // try slug attribute first, fall back to $id lookup
    let doc: Doc | undefined;
    try {
      const res = await db.listDocuments(DB_ID, COL.AUTHORS, [
        Query.equal('slug', slug),
        Query.limit(1),
      ]);
      doc = res.documents[0] as Doc | undefined;
    } catch { /* slug attribute not indexed or missing */ }

    if (!doc) {
      // fallback: treat slug param as $id
      try {
        doc = await db.getDocument(DB_ID, COL.AUTHORS, slug) as Doc;
      } catch { /* not found */ }
    }

    if (!doc) return null;
    return {
      id: doc.$id,
      slug: (doc.slug as string) || doc.$id,
      name: (doc.name as string) ?? '',
      bio: (doc.bio as string) ?? null,
      avatar: (doc.photo as string) ?? null,
      tagline: (doc.tagline as string) ?? null,
      twitter: (doc.twitter as string) ?? null,
      instagram: (doc.instagram as string) ?? null,
      website: (doc.website as string) ?? null,
    };
  } catch {
    return demoAuthors.find(a => a.slug === slug) ?? null;
  }
}

export async function getPostCountByAuthor(authorId: string): Promise<number> {
  try {
    const db = createClient();
    const res = await db.listDocuments(DB_ID, COL.POSTS, [
      Query.equal('authorId', authorId),
      Query.equal('status', 'published'),
      Query.limit(1),
    ]);
    return res.total;
  } catch {
    return 0;
  }
}
