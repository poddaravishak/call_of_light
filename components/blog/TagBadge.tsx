import Link from "next/link";

export function TagBadge({ label }: { label: string }) {
  return (
    <Link
      href={`/blog?tag=${encodeURIComponent(label)}`}
      className="font-mono-ui inline-block border border-border px-2 py-1 text-muted hover:text-heading hover:border-muted transition-colors duration-400"
    >
      {label}
    </Link>
  );
}
