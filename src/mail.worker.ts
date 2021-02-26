import { Worker } from "bullmq";
import config from "./config";

export const worker = new Worker("mailbot", __dirname + "/mail.proccessor.js", {
  connection: config.connection,
  concurrency: config.concurrency,
});

console.log("Worker listening for jobs");
