import { readDB, writeDB } from "./db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function createUser(email, password) {
  const db = await readDB();
  if (db.users.find((u) => u.email === email)) return { error: "User exists" };
  const hash = await bcrypt.hash(password, 8);
  const user = { id: Date.now().toString(), email, password: hash };
  db.users.push(user);
  await writeDB(db);
  return { user };
}

export async function authenticate(email, password) {
  const db = await readDB();
  const user = db.users.find((u) => u.email === email);
  if (!user) return { error: "No user" };
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return { error: "Invalid" };
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || "dev", { expiresIn: "7d" });
  return { token, user: { id: user.id, email: user.email } };
}

export async function getUserById(id) {
  const db = await readDB();
  return db.users.find((u) => u.id === id);
}
