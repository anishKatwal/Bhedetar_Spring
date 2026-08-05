require("dotenv").config({ path: ".env.local" });
const nodemailer = require("nodemailer");

async function main() {
  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("PASS length:", process.env.GMAIL_APP_PASSWORD?.length); // should be 16

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    logger: true,
    debug: true,
  });

  try {
    await transporter.verify();
    console.log("✅ SMTP connection verified");
  } catch (err) {
    console.error("❌ Verify failed:", err);
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: `"Test" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: "SMTP test",
      text: "If you got this, SMTP works.",
    });
    console.log("✅ Mail sent:", info.messageId);
  } catch (err) {
    console.error("❌ Send failed:", err);
  }
}

main();