import { promises as fs } from "fs";
import path from "path";

const DB_FILE = path.join(process.cwd(), "database.json");

export async function readDB() {
  try {
    const raw = await fs.readFile(DB_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (e) {
    return { users: [] };
  }
}

export async function writeDB(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
}
