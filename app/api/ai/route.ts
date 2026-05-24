import { NextRequest, NextResponse } from "next/server";

const NIM_API_URL = process.env.NIM_API_URL;
const NIM_API_KEY = process.env.NIM_API_KEY;

export async function POST(request: NextRequest) {
  if (!NIM_API_URL || !NIM_API_KEY) {
    return NextResponse.json(
      { error: "NIM API is not configured. Set NIM_API_URL and NIM_API_KEY in your environment." },
      { status: 500 }
    );
  }

  const body = await request.json();
  const prompt = String(body.prompt ?? "");
  if (!prompt) {
    return NextResponse.json({ error: "prompt is required" }, { status: 400 });
  }

  const payload = {
    prompt,
    model: body.model ?? process.env.NIM_MODEL_NAME ?? "gpt-4",
    max_tokens: body.max_tokens ?? 600,
  };

  const response = await fetch(NIM_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${NIM_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json({ error: errorText }, { status: response.status });
  }

  const result = await response.json();
  return NextResponse.json({ result });
}
