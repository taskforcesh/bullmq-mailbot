import { JobsOptions, Queue, QueueOptions } from "bullmq";
import { MailJob } from "./mail-job.interface";
import config from "./config";

export class MailbotClient {
  private queue: Queue;

  constructor(opts: QueueOptions) {
    this.queue = new Queue<MailJob>(config.queueName, {
      defaultJobOptions: {
        attempts: 5,
        backoff: { type: "exponential", delay: 3000 },
      },
      ...opts,
    });
  }

  async enqueue(jobName: string, mail: MailJob, jobOpts?: JobsOptions) {
    await this.queue.add(jobName, mail);

    console.log(`Enqueued an email sending to ${mail.mailOpts.to}`);
  }

  close() {
    return this.queue.close();
  }
}
    