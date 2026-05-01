import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient, DB_ID, COL, ID } from "@/lib/appwrite";

const schema = z.object({
  name: z.string().max(120).optional(),
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid submission" },
        { status: 400 }
      );
    }

    const db = createClient();
    await db.createDocument(DB_ID, COL.SUBSCRIBERS, ID.unique(), {
      name: parsed.data.name?.trim() ?? '',
      email: parsed.data.email.trim().toLowerCase(),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error('[subscribe]', msg);
    return NextResponse.json(
      { ok: false, error: msg },
      { status: 500 }
    );
  }
}
