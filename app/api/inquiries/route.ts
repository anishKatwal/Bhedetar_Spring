import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

type Inquiry = {
  id: string;
  name: string;
  phone: string;
  location: string;
  eventType: string;
  bottleSize: string;
  quantity: string;
  wrapperNeed: string;
  message: string;
  createdAt: string;
};

export async function POST(req: NextRequest) {
  try {
    const inquiry: Inquiry = await req.json();

    // Basic validation
    const required = ["id", "name", "phone", "location", "eventType", "bottleSize", "quantity", "wrapperNeed", "createdAt"] as const;
    for (const field of required) {
      if (!inquiry[field]) {
        return NextResponse.json(
          { emailSent: false, error: `Missing field: ${field}` },
          { status: 400 }
        );
      }
    }

    // 1. Save to SQLite
   
    // 2. Send email via Gmail SMTP
    try {
      await transporter.sendMail({
        from: `"Bhedetar Spring Website" <${process.env.GMAIL_USER}>`,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        replyTo: undefined, // form doesn't collect an email field currently
        subject: `New Inquiry (${inquiry.id}) — ${inquiry.eventType}`,
        text: `
New inquiry received:

ID: ${inquiry.id}
Name: ${inquiry.name}
Phone: ${inquiry.phone}
Delivery area: ${inquiry.location}
Event/Order type: ${inquiry.eventType}
Bottle size: ${inquiry.bottleSize}
Quantity: ${inquiry.quantity}
Wrapper need: ${inquiry.wrapperNeed}
Message: ${inquiry.message || "(none)"}
Submitted: ${inquiry.createdAt}
        `.trim(),
        html: `
          <h2>New Inquiry (${inquiry.id})</h2>
          <table cellpadding="6" style="border-collapse:collapse">
            <tr><td><strong>Name</strong></td><td>${inquiry.name}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${inquiry.phone}</td></tr>
            <tr><td><strong>Delivery area</strong></td><td>${inquiry.location}</td></tr>
            <tr><td><strong>Event/Order type</strong></td><td>${inquiry.eventType}</td></tr>
            <tr><td><strong>Bottle size</strong></td><td>${inquiry.bottleSize}</td></tr>
            <tr><td><strong>Quantity</strong></td><td>${inquiry.quantity}</td></tr>
            <tr><td><strong>Wrapper need</strong></td><td>${inquiry.wrapperNeed}</td></tr>
            <tr><td><strong>Message</strong></td><td>${inquiry.message || "(none)"}</td></tr>
            <tr><td><strong>Submitted</strong></td><td>${inquiry.createdAt}</td></tr>
          </table>
        `,
      });
    } catch (mailErr) {
      console.error("Email send failed:", mailErr);
      // Inquiry is already saved in SQLite even if email fails
      return NextResponse.json(
        { emailSent: false, error: "Inquiry saved, but email failed to send" },
        { status: 502 }
      );
    }

    return NextResponse.json({ emailSent: true, id: inquiry.id }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { emailSent: false, error: "Unexpected server error" },
      { status: 500 }
    );
  }
}