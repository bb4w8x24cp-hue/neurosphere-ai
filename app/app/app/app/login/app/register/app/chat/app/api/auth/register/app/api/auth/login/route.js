import { loginUser } from "../../../../lib/auth";

export async function POST(request) {
  const { email, password } = await request.json();

  const result = await loginUser(email, password);
  if (result.error) {
    return new Response(JSON.stringify({ error: result.error }), { status: 400 });
  }

  return new Response(JSON.stringify(result), { status: 200 });
}
