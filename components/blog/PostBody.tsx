export function PostBody({ html }: { html: string }) {
  if (!html) {
    return (
      <div className="prose-light mx-auto text-muted italic">
        This piece has not yet found its words.
      </div>
    );
  }
  return (
    <div
      className="prose-light mx-auto"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
