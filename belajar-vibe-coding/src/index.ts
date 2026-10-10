import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const port = Number(process.env.PORT) || 3000;

const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to ElysiaJS + Drizzle + MySQL API",
    status: "OK",
  }))
  .get("/health", () => ({
    status: "OK",
    timestamp: new Date().toISOString(),
  }))
  .get("/api/users", async () => {
    try {
      const allUsers = await db.select().from(users);
      return { success: true, data: allUsers };
    } catch (error: any) {
      return {
        success: false,
        message: "Database connection or table query failed",
        error: error.message,
      };
    }
  })
  .listen(port);

console.log(`🦊 Elysia server is running at http://${app.server?.hostname}:${app.server?.port}`);
