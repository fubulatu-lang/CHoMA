import { eq } from "drizzle-orm";

import { db } from "../../config/db";

import { users } from "../../database/schema";

export async function findUserByEmail(email: string) {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

  return result[0] ?? null;
}

export async function createUser(data: {
  fullName: string;
  email: string;
  password: string;
}) {
  const result = await db
    .insert(users)
    .values(data)
    .returning();

  return result[0];
}