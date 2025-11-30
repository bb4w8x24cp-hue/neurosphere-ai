import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "./db.js";

export async function createUser(email, password) {
  const existing = db.data.users.find((u) => u.email === email);
  if (existing) return { error: "User already exists" };

  const hashed = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now().toString(),
    email,
    password: hashed,
  };

  db.data.users.push(newUser);
  await db.write();

  return { user: newUser };
}

export async function loginUser(email, password) {
  const user = db.data.users.find((u) => u.email === email);
  if (!user) return { error: "No user found" };

  const match = await bcrypt.compare(password, user.password);
  if (!match) return { error: "Wrong password" };

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return { token };
}
