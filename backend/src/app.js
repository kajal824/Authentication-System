import dotenv from "dotenv";
dotenv.config({ quiet: true });

import express from "express";
import redis from "./configs/redis.js";
import { pool, db } from "./database/index.js";

const app = express();
app.use(express.json());

// Test PostgreSQL connection (optional)
pool.query("SELECT 1")
    .then(() => console.info("PostgreSQL connected"))
    .catch(err => console.error("PostgreSQL error:", err));

export default app;