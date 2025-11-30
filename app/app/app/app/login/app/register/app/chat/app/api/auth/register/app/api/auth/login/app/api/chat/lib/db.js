import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const DB_FILE = path.join(process.cwd(), "database.json");

export async function readDB() {
  try {
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data);
  } catch (e) {
    return { users: [] };
  }
}

export async function writeDB(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

// Create new user
export async function createUser(email, password) {
  const db = await readDB();
  if (db.users.find(u => u.email === email)) {
    return { message: "User already exists", error: true };
  }
  const hash = bcrypt.hashSync(password, 10);
  const user = { id: Date.now().toString(), email, password: hash };
  db.users.push(user);
  await writeDB(db);
  return { message: "User created", error: false, user };
}
