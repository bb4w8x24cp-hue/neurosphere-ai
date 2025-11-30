import { JSONFilePreset } from "lowdb/node";

// Database file location
const defaultData = { users: [] };

export const db = await JSONFilePreset("database.json", defaultData);
