import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.RETELL_API_KEY;
  const agentId = process.env.NEXT_PUBLIC_RETELL_VOICE_AGENT_ID;

  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: "Retell voice agent is not configured on the server." },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.retellai.com/v2/create-web-call", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ agent_id: agentId }),
  });

  if (!response.ok) {
    const text = await response.text();
    return NextResponse.json(
      { error: "Failed to create Retell web call.", detail: text },
      { status: response.status },
    );
  }

  const data = await response.json();
  return NextResponse.json({ access_token: data.access_token });
}
