import { NextRequest, NextResponse } from "next/server";
import { createSale, getSales } from "@/lib/db";

export async function GET() {
  const sales = await getSales();
  return NextResponse.json({ sales });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const requiredFields = ["customer", "location", "amount", "paid", "creditDays", "date", "enteredBy"];

  for (const field of requiredFields) {
    if (body[field] === undefined || body[field] === null) {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 });
    }
  }

  const sale = await createSale({
    customer: String(body.customer),
    location: String(body.location),
    amount: Number(body.amount),
    paid: Number(body.paid),
    creditDays: Number(body.creditDays),
    date: String(body.date),
    enteredBy: String(body.enteredBy),
  });

  return NextResponse.json({ sale });
}
