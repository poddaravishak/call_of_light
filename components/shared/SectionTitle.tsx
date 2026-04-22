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
      {kicker && <p className="font-mono-ui text-accent mb-6">{kicker}</p>}
      <h1 className="font-display text-heading text-5xl md:text-6xl leading-[1.05]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 max-w-xl text-muted font-serif leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
