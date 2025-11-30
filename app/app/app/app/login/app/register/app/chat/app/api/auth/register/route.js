import { createUser } from "../../../../lib/db";

export async function POST(request) {
  const { email, password } = await request.json();

  const result = await createUser(email, password);
  if (result.error) {
    return new Response(JSON.stringify({ error: result.message }), { status: 400 });
  }

  return new Response(JSON.stringify(result), { status: 200 });
}
