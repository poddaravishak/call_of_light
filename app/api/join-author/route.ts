import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient, DB_ID, COL, ID } from "@/lib/appwrite";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  languages: z.string().min(2).max(200),
  genre: z.string().min(1).max(100),
  bio: z.string().min(50).max(600),
  motivation: z.string().min(50).max(1000),
  portfolio: z.string().url().or(z.literal("")).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid submission", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, bio, motivation, languages, genre, portfolio } = parsed.data;

    const db = createClient();
    await db.createDocument(DB_ID, COL.AUTHOR_REQUESTS, ID.unique(), {
      fullName: name,
      email,
      bio,
      writingStyle: genre,
      whyCallOfLight: motivation,
      languages,
      portfolio: portfolio ?? '',
      status: 'pending',
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error('[join-author]', msg);
    return NextResponse.json(
      { ok: false, error: msg },
      { status: 500 }
    );
  }
}
