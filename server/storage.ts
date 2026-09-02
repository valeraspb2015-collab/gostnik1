import {
  type User, type InsertUser,
  type Apartment, type InsertApartment,
  type BookingRequest, type InsertBooking,
  users, apartments, bookingRequests,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getApartments(): Promise<Apartment[]>;
  getApartmentBySlug(slug: string): Promise<Apartment | undefined>;
  createApartment(apt: InsertApartment): Promise<Apartment>;
  createBooking(booking: InsertBooking): Promise<BookingRequest>;
  getBookings(): Promise<BookingRequest[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getApartments(): Promise<Apartment[]> {
    return db.select().from(apartments);
  }

  async getApartmentBySlug(slug: string): Promise<Apartment | undefined> {
    const [apt] = await db.select().from(apartments).where(eq(apartments.slug, slug));
    return apt;
  }

  async createApartment(apt: InsertApartment): Promise<Apartment> {
    const [created] = await db.insert(apartments).values(apt).returning();
    return created;
  }

  async createBooking(booking: InsertBooking): Promise<BookingRequest> {
    const [created] = await db.insert(bookingRequests).values(booking).returning();
    return created;
  }

  async getBookings(): Promise<BookingRequest[]> {
    return db.select().from(bookingRequests);
  }
}

export const storage = new DatabaseStorage();
