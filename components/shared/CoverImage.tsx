import Image from "next/image";
import { cn } from "@/lib/utils";

const FALLBACK =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80";

export function CoverImage({
  src,
  alt,
  className,
}: {
  src: string | null | undefined;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src ?? FALLBACK}
      alt={alt}
      width={1600}
      height={1067}
      className={cn("w-full h-full object-cover cover-img", className)}
    />
  );
}
