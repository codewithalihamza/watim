import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { CONTACT_EMAIL } from "../../lib/site-config";

/*
  Sends the Get-a-Quote form to the company mailbox over SMTP.

  Credentials live ONLY on the server, in /var/www/my-next-app/.env.local:

    SMTP_HOST=smtp.hostinger.com
    SMTP_PORT=465
    SMTP_USER=hello@watm.com.sa
    SMTP_PASS=<the mailbox password>
    QUOTE_TO=hello@watm.com.sa   # optional, defaults to CONTACT_EMAIL

  Nothing is exposed to the browser; this file runs on the server only.
*/

type QuoteBody = {
  org?: string;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  notes?: string;
  website?: string; // honeypot — real users never fill this
};

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  let body: QuoteBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without sending anything.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const org = (body.org ?? "").trim().slice(0, 200);
  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().slice(0, 200);
  const phone = (body.phone ?? "").trim().slice(0, 50);
  const service = (body.service ?? "").trim().slice(0, 200);
  const notes = (body.notes ?? "").trim().slice(0, 5000);

  if (!org || !name || !email || !phone || !service) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("quote: SMTP env vars are not configured on the server");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: Number(SMTP_PORT ?? 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Organization", org],
    ["Full name", name],
    ["Email", email],
    ["Mobile", phone],
    ["Service", service],
    ["Notes", notes || "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#164154;border-bottom:2px solid #2f8f96;padding-bottom:8px">
        New quote request — watm.com.sa
      </h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([k, v]) => `
        <tr>
          <td style="padding:10px 12px;background:#f2fafb;border:1px solid #dfeef0;font-weight:bold;width:140px;vertical-align:top">${k}</td>
          <td style="padding:10px 12px;border:1px solid #dfeef0;white-space:pre-wrap">${esc(v)}</td>
        </tr>`
          )
          .join("")}
      </table>
      <p style="color:#667;font-size:12px;margin-top:16px">
        Sent automatically from the Get&nbsp;a&nbsp;Quote form. Reply to this
        email to answer ${esc(name)} directly.
      </p>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    await transporter.sendMail({
      from: `"Watm Website" <${SMTP_USER}>`,
      to: process.env.QUOTE_TO || CONTACT_EMAIL,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `Quote request — ${org} (${service})`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("quote: failed to send", err);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
