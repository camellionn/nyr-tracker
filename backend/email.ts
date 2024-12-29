import cron from 'node-cron';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

cron.schedule('0 0 * * *', async () => {
  console.log('Sending reminder email...');
});
