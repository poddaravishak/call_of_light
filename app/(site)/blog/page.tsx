import { redirect } from "next/navigation";

export default function BlogRedirect({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const params = new URLSearchParams(searchParams).toString();
  redirect(params ? `/stories?${params}` : "/stories");
}
