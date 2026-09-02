import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const apartments = pgTable("apartments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  area: integer("area").notNull(),
  rooms: integer("rooms").notNull(),
  image: text("image").notNull(),
  features: jsonb("features").$type<string[]>().notNull(),
  count: integer("count").default(1),
  accentColor: text("accent_color").default("#c9a84c"),
});

export const bookingRequests = pgTable("booking_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  apartmentSlug: text("apartment_slug"),
  checkIn: text("check_in"),
  checkOut: text("check_out"),
  guests: integer("guests").default(1),
  message: text("message"),
});

export const insertApartmentSchema = createInsertSchema(apartments, {
  features: z.array(z.string()),
}).omit({ id: true });
export const insertBookingSchema = createInsertSchema(bookingRequests).omit({ id: true });

export type InsertApartment = z.infer<typeof insertApartmentSchema>;
export type Apartment = typeof apartments.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type BookingRequest = typeof bookingRequests.$inferSelect;

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
