import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedPost } from "@/components/home/FeaturedPost";
import { LatestPosts } from "@/components/home/LatestPosts";
import { NewsletterBanner } from "@/components/home/NewsletterBanner";
import { getSiteConfig } from "@/lib/data";

export const revalidate = 60;

const FALLBACK_BG =
  "https://images.unsplash.com/photo-1478827387698-1527781a4887?auto=format&fit=crop&w=2400&q=80";

export default async function HomePage() {
  const config = await getSiteConfig();

  return (
    <>
      <HeroSection
        title={config.hero_title}
        tagline={config.hero_tagline}
        description={config.hero_description}
        bgImage={config.hero_bg_image ?? FALLBACK_BG}
      />
      <FeaturedPost />
      <LatestPosts />
      <NewsletterBanner />
    </>
  );
}
