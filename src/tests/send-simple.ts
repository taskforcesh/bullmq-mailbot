import { MailJob } from "../mail-job.interface";
import { Queue } from "bullmq";
import config from "../config";

const queue = new Queue<MailJob>(config.queueName, {
  connection: config.connection,
});

const args = process.argv.slice(2);

console.log(args);

(async () => {
  await queue.add("send-simple", {
    mailOpts: {
      from: "manast@taskforce.sh",
      subject: "This is a simple test",
      text: "An email sent using BullMQ",
      to: args[0],
    },
  });

  console.log(`Enqueued an email sending to ${args[0]}`);
})();
