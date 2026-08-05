import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { createInquiry, getInquiries, Inquiry } from "@/lib/db";

export async function GET() {
  const inquiries = await getInquiries();
  return NextResponse.json({ inquiries });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone || !body.quantity) {
      return NextResponse.json(
        {
          emailSent: false,
          error: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const inquiry: Inquiry = {
      id: String(body.id),
      name: String(body.name),
      phone: String(body.phone),
      location: String(body.location),
      eventType: String(body.eventType),
      bottleSize: String(body.bottleSize),
      quantity: Number(body.quantity),
      wrapperNeed: String(body.wrapperNeed),
      message: String(body.message ?? ""),
      createdAt: String(body.createdAt),
    };

    const savedInquiry = await createInquiry(inquiry);

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const adminEmail = process.env.ADMIN_EMAIL || gmailUser;

  console.log("========== EMAIL DEBUG ==========");
console.log("Request received");
console.log("Inquiry ID:", inquiry.id);
console.log("Name:", inquiry.name);
console.log("GMAIL_USER:", gmailUser);
console.log("ADMIN_EMAIL:", adminEmail);
console.log("PASSWORD EXISTS:", !!gmailAppPassword);

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json({
        inquiry: savedInquiry,
        emailSent: false,
        error: "Missing Gmail credentials",
      });
    }

   const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: gmailUser,
    pass: gmailAppPassword,
  },
});

    await transporter.verify();
    console.log("SMTP connection successful");

    const info = await transporter.sendMail({
      from: `"Bhedetar Spring Inquiry" <${gmailUser}>`,
      to: adminEmail,
      subject: `New Inquiry: ${inquiry.name} (${inquiry.id})`,
      text: `
Name: ${inquiry.name}
Phone: ${inquiry.phone}
Location: ${inquiry.location}
Event Type: ${inquiry.eventType}
Bottle Size: ${inquiry.bottleSize}
Quantity: ${inquiry.quantity}
Wrapper Need: ${inquiry.wrapperNeed}
Message: ${inquiry.message}
Created At: ${inquiry.createdAt}
`,
     html: `
<div style="font-family: Arial, sans-serif;">
  <h2>New Bhedetar Spring Inquiry</h2>

  <table border="1" cellpadding="8" cellspacing="0">
    <tr>
      <td><strong>Inquiry ID</strong></td>
      <td>${inquiry.id}</td>
    </tr>
    <tr>
      <td><strong>Name</strong></td>
      <td>${inquiry.name}</td>
    </tr>
    <tr>
      <td><strong>Phone</strong></td>
      <td>${inquiry.phone}</td>
    </tr>
    <tr>
      <td><strong>Location</strong></td>
      <td>${inquiry.location}</td>
    </tr>
    <tr>
      <td><strong>Event Type</strong></td>
      <td>${inquiry.eventType}</td>
    </tr>
    <tr>
      <td><strong>Bottle Size</strong></td>
      <td>${inquiry.bottleSize}</td>
    </tr>
    <tr>
      <td><strong>Quantity</strong></td>
      <td>${inquiry.quantity}</td>
    </tr>
    <tr>
      <td><strong>Wrapper Need</strong></td>
      <td>${inquiry.wrapperNeed}</td>
    </tr>
    <tr>
      <td><strong>Message</strong></td>
      <td>${inquiry.message || "No message provided"}</td>
    </tr>
  </table>

  <p><strong>Submitted:</strong> ${inquiry.createdAt}</p>
</div>
`,
    });

    console.log("EMAIL SENT SUCCESSFULLY");
    console.log(info);

    return NextResponse.json({
      inquiry: savedInquiry,
      emailSent: true,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("EMAIL ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        emailSent: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown email error",
      },
      { status: 500 }
    );
  }
}