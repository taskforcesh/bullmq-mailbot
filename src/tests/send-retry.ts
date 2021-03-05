import { MailbotClient } from "../mail.client";
import config from "../config";

const args = process.argv.slice(2);

const client = new MailbotClient({
  connection: config.connection,
});

client.enqueue(
  "welcome-mail",
  {
    mailOpts: {
      from: "manast@taskforce.sh",
      to: args[0],
      subject: "Welcome to BullMQ",
      text: "This is a welcome email!",
    },
  },
  { attempts: 5, backoff: { type: "exponential", delay: 3000 } }
);
