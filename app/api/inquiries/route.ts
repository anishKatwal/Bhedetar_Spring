import { NextRequest, NextResponse } from "next/server";
import { createInquiry, getInquiries, Inquiry } from "@/lib/db";

export async function GET() {
  const inquiries = await getInquiries();
  return NextResponse.json({ inquiries });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const requiredFields = ["id", "name", "phone", "location", "eventType", "bottleSize", "quantity", "wrapperNeed", "createdAt"];

  for (const field of requiredFields) {
    if (!body[field]) {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 });
    }
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
  return NextResponse.json({ inquiry: savedInquiry });
}
