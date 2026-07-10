import {
  pgTable,
  serial,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  fullName: varchar("full_name", {
    length: 150,
  }),

  email: varchar("email", {
    length: 255,
  }).unique(),

  password: varchar("password", {
    length: 255,
  }),

  role: varchar("role", {
    length: 30,
  }).default("user"),

  createdAt: timestamp("created_at").defaultNow(),
});