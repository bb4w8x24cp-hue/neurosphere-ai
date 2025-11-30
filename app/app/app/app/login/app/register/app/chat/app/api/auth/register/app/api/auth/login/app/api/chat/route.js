export async function POST(request) {
  const { message } = await request.json();

  // Placeholder response - you will integrate OpenAI API here later.
  const response = {
    reply: "This is a placeholder response from AI. (To be replaced with OpenAI API.)",
  };

  return new Response(JSON.stringify(response), { status: 200 });
}
