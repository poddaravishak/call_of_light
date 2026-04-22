import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";

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

    if (!isSupabaseConfigured) {
      // Demo mode — accept the submission but don't persist.
      return NextResponse.json({ ok: true, demo: true });
    }

    const { error } = await getSupabase()
      .from("contact_submissions")
      .insert([parsed.data]);

    if (error) {
      return NextResponse.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}
