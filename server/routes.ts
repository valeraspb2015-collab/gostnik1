import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/api/apartments", async (_req, res) => {
    try {
      const apts = await storage.getApartments();
      res.json(apts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch apartments" });
    }
  });

  app.get("/api/apartments/:slug", async (req, res) => {
    try {
      const apt = await storage.getApartmentBySlug(req.params.slug);
      if (!apt) {
        return res.status(404).json({ message: "Apartment not found" });
      }
      res.json(apt);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch apartment" });
    }
  });

  app.post("/api/bookings", async (req, res) => {
    try {
      const parsed = insertBookingSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid booking data", errors: parsed.error.errors });
      }
      const booking = await storage.createBooking(parsed.data);
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Failed to create booking" });
    }
  });

  return httpServer;
}
