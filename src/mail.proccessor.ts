import { Mail } from "./mail.interface";
import { Job } from "bullmq";
import { SES } from "aws-sdk";

import nodemailer from "nodemailer";
import config from "./config";

// Make sure you have setup your AWS credentials setup correctly
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html

const transporter = nodemailer.createTransport({
  SES: new SES({
    apiVersion: "2010-12-01",
    region: config.region,
  }),
});

export default (job: Job<Mail>) => transporter.sendMail(job.data);
