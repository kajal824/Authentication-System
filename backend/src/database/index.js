import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schemas/index.js";
import { databaseUrl, dbPoolMax } from "../configs/env.js";

export const pool = new Pool({
    connectionString: databaseUrl,
    max: dbPoolMax,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
});

export const db = drizzle(pool, { schema });