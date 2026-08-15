import { Worker } from "bullmq";
import redis from "../../configs/redis.js";

export const emailWorker = new Worker(
    "email",
    async (job) => {
        console.log(`Processing email ${job.id}`, job.data);
        // send email logic here
    },
    { connection: redis }
);