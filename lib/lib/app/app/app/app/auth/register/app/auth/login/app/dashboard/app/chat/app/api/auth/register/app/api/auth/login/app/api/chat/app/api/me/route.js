import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getUserById } from "@/lib/auth";

export async function GET(req) {
  try {
    const auth = req.headers.get("authorization") || "";
    const token = auth.replace("Bearer ", "");
    if (!token) return NextResponse.json({ user: null });
    const data = jwt.verify(token, process.env.JWT_SECRET || "dev");
    const user = await getUserById(data.id);
    if (!user) return NextResponse.json({ user: null });
    return NextResponse.json({ user: { id: user.id, email: user.email } });
  } catch (e) {
    return NextResponse.json({ user: null });
  }
}
