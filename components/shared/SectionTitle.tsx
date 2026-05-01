export function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      {kicker && (
        <p className="font-mono-ui text-ink/80 mb-8 flex items-center">
          <span className="hairline" />
          {kicker}
        </p>
      )}
      <h1 className="font-display text-heading text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-8 max-w-xl text-muted font-serif leading-relaxed italic">
          {subtitle}
        </p>
      )}
    </div>
  );
}
