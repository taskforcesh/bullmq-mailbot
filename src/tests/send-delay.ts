import { MailbotClient } from "../mail.client";
import config from "../config";

const args = process.argv.slice(2);

const client = new MailbotClient({
  connection: config.connection,
});

const ONE_MINUTE = 1000 * 60;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE__DAY = 24 * ONE_HOUR;
const ONE_WEEK = 7 * ONE__DAY;

client.enqueue(
  "We are here to help!",
  {
    from: "manast@taskforce.sh",
    to: args[0],
    subject: "Your first week with BullMq",
    text: "This is an engagement email!",
  },
  { delay: ONE_WEEK },
);
