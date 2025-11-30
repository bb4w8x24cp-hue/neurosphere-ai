import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  const apiKey = process.env.AI_API_KEY;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await res.json();
  const reply = data?.choices?.[0]?.message?.content || "Error processing request.";

  return NextResponse.json({ reply });
}
