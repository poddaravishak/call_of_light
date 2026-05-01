import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient, DB_ID, COL, ID } from "@/lib/appwrite";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(4000),
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
    await db.createDocument(DB_ID, COL.CONTACT_MESSAGES, ID.unique(), parsed.data);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}
