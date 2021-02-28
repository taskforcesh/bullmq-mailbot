import { Worker, QueueScheduler } from "bullmq";
import config from "./config";

export const worker = new Worker(
  config.queueName,
  __dirname + "/mail.proccessor.js",
  {
    connection: config.connection,
    concurrency: config.concurrency,
    limiter: config.limiter,
  }
);

export const scheduler = new QueueScheduler(config.queueName, {
  connection: config.connection,
});

console.log("Worker listening for jobs");
