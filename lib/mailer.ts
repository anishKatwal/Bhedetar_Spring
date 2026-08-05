import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for 587 (STARTTLS)
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function verifyMailer() {
  try {
    await transporter.verify();
    return true;
  } catch (err) {
    console.error("SMTP verify failed:", err);
    return false;
  }
}