import { NextResponse } from "next/server";
import { createUser } from "@/lib/db";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Missing email or password" },
      { status: 400 }
    );
  }

  const result = await createUser(email, password);

  return NextResponse.json(result);
}
