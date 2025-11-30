import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message) return NextResponse.json({ error: "Missing message" }, { status: 400 });

    const key = process.env.AI_API_KEY;
    if (!key) return NextResponse.json({ error: "AI_API_KEY not configured" }, { status: 500 });

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + key },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        max_tokens: 500
      })
    });

    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content || data?.error?.message || "No reply";
    return NextResponse.json({ reply });
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
