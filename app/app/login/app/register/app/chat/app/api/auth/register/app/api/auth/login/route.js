import { NextResponse } from "next/server";
import { loginUser } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  const result = await loginUser(email, password);

  if (result.error) {
    return NextResponse.json(result, { status: 401 });
  }

  return NextResponse.json(result);
}
