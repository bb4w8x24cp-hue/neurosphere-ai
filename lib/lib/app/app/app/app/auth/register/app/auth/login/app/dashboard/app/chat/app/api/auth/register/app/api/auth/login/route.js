import { NextResponse } from "next/server";
import { authenticate } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();
  if (!email || !password) return NextResponse.json({ error: "Missing" }, { status: 400 });
  const res = await authenticate(email, password);
  if (res.error) return NextResponse.json({ error: res.error }, { status: 400 });
  return NextResponse.json({ token: res.token, user: res.user });
}
