import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { readDB } from "./db.js";

export async function loginUser(email, password) {
  const db = await readDB();
  const user = db.users.find(u => u.email === email);
  if (!user) return { error: "User not found" };

  const ok = bcrypt.compareSync(password, user.password);
  if (!ok) return { error: "Incorrect password" };

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "devsecret", { expiresIn: "7d" });

  return { message: "Logged in", token, user: { id: user.id, email: user.email } };
}
