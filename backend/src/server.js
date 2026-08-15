import app from "./app.js";
import { db, pool } from "./database/index.js";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { port } from "./configs/env.js";

try {
    await pool.query("SELECT 1");
    console.log("PostgreSQL raw connection OK");

    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("Database migrations applied");
} catch (err) {
    console.error("Startup database error:", err);
    process.exit(1);
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});