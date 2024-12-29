import cron from 'node-cron';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // eslint-disable-next-line no-undef
    user: process.env.EMAIL,
    // eslint-disable-next-line no-undef
    pass: process.env.EMAIL_PASSWORD,
  },
});

cron.schedule('0 0 * * *', async () => {
  console.log('Sending reminder email...');
});

export default transporter;
