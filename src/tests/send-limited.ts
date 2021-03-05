import { MailbotClient } from "../mail.client";
import config from "../config";

const args = process.argv.slice(2);

const client = new MailbotClient({
  connection: config.connection,
});

const NUM_MAILS = 10;

for (let i = 0; i < NUM_MAILS; i++) {
  client.enqueue("rate-limited", {
    mailOpts: {
      from: "manast@taskforce.sh",
      to: args[0],
      subject: `This is your email #${i}`,
      text: "You are receiving email #{i}",
    },
  });
}
