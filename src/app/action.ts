
"use server";
const neon: any = require("@neondatabase/serverless");

export async function getData() {
  const sql = neon(process.env.DATABASE_URL);
}
