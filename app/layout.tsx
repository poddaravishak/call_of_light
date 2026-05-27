import type { Metadata } from "next";
import { playfair, inter, spaceMono } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Call of Light",
    template: "%s — The Call of Light",
  },
  description: "Stories that breathe in silence.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  openGraph: {
    title: "The Call of Light",
    description: "Stories that breathe in silence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
