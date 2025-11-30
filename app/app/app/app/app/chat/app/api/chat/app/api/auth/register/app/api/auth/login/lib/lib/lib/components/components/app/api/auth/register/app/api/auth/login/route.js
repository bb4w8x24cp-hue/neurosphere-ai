import { loginUser } from "../../../../lib/auth.js";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const result = await loginUser(email, password);

  if (result.error) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  return Response.json({ token: result.token });
}
