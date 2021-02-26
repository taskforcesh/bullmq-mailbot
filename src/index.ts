import { worker } from "./mail.worker";

worker.on("completed", (job) =>
  console.log(
    `Completed job ${job.id} successfully, sent email to ${job.data.to}`
  )
);
worker.on("failed", (job, err) =>
  console.log(`Failed job ${job.id} with ${err}`)
);
