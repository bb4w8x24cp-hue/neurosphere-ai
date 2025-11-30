import OpenAI from "openai";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const client = new OpenAI({
      apiKey: process.env.AI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    return Response.json(
      { error: "AI request failed", details: error.message },
      { status: 500 }
    );
  }
}
