import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  // Very simple AI reply (no OpenAI yet)
  const reply = "This is your AI responding to: " + message;

  return NextResponse.json({ response: reply });
}
