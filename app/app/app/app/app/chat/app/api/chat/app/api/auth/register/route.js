import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { v4 as uuid } from "uuid";

export async function POST(req) {
  const { email, password } = await req.json();

  const existing = db.data.users.find(u => u.email === email);
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  db.data.users.push({
    id: uuid(),
    email,
    password: hashed,
  });

  await db.write();

  return NextResponse.json({ success: true });
}
