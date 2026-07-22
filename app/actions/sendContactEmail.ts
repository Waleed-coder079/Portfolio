"use server";

import { CONTACT_FROM_ADDRESS, resend } from "@/lib/resend";
import { siteConfig } from "@/lib/site-config";

type ContactPayload = {
  name: string;
  email: string;
  reason: string;
  message: string;
  company: string;
};

type ContactResult = { ok: true } | { ok: false; error: string };

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function sendContactEmail(payload: ContactPayload): Promise<ContactResult> {
  // Honeypot — bots tend to fill every field.
  if (payload.company.trim()) return { ok: true };

  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();
  const reason = payload.reason.trim();

  if (!name || !email || !message || !isValidEmail(email)) {
    return { ok: false, error: "Missing or invalid fields." };
  }

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_ADDRESS,
      to: siteConfig.email,
      replyTo: email,
      subject: `Portfolio contact${reason ? ` — ${reason}` : ""} from ${name}`,
      text: `${message}\n\n— ${name} (${email})`,
    });

    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch {
    return { ok: false, error: "Failed to send message." };
  }
}
