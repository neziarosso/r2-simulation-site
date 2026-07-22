import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message || !emailPattern.test(email)) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  // TODO(cliente): integrar um provedor de e-mail transacional (ex: Resend, SendGrid)
  // usando uma variável de ambiente (ex: RESEND_API_KEY) para encaminhar esta mensagem
  // para contato@r2sol.com.br. Por ora, a submissão é apenas registrada no servidor.
  console.info("[contato] nova mensagem recebida", {
    name,
    email,
    company,
    message,
  });

  return NextResponse.json({ ok: true });
}
