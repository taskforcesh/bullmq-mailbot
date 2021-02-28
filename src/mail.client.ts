import { JobsOptions, Queue, QueueOptions } from "bullmq";
import { Mail } from "./mail.interface";
import config from "./config";

export class MailbotClient {
  private queue: Queue;

  constructor(opts: QueueOptions) {
    this.queue = new Queue<Mail>(config.queueName, {
      defaultJobOptions: {
        attempts: 5,
        backoff: { type: "exponential", delay: 3000 },
      },
      ...opts,
    });
  }

  async enqueue(jobName: string, mail: Mail, jobOpts?: JobsOptions) {
    await this.queue.add(jobName, mail);

    console.log(`Enqueued an email sending to ${mail.to}`);
  }

  close() {
    return this.queue.close();
  }
}
    