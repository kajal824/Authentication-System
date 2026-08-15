import { Redis } from "ioredis";
import {redisUrl} from "./env.js";

const redis = new Redis(redisUrl);

redis.on("connect", () => {
    console.info("Redis connected successfully");
});

redis.on("error", (err) => {
    console.error("Redis connection error:", err);
});

export default redis;