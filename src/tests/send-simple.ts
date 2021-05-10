import { Mail } from "../mail.interface";
import { Queue } from "bullmq";
import config from "../config";

const queue = new Queue<Mail>(config.queueName, {
  connection: config.connection,
});

const args = process.argv.slice(2);

console.log(args);

(async () => {
  await queue.add("send-simple", {
    from: "manast@taskforce.sh",
    subject: "This is a simple test",
    text: "An email sent using BullMQ",
    to: args[0],
  });

  console.log(`Enqueued an email sending to ${args[0]}`);

  // Exit for the next test run
  process.exit(0);
})();
