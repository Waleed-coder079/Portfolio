"use client";

import { useState, type FormEvent } from "react";
import { sendContactEmail } from "@/app/actions/sendContactEmail";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate(formData: FormData) {
    const next: typeof errors = {};
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That doesn't look like a valid email.";
    if (!message) next.message = "Please enter a message.";

    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — bots tend to fill every field.
    if (String(formData.get("company") ?? "").trim()) {
      setStatus("success");
      return;
    }

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");

    try {
      const result = await sendContactEmail({
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        reason: String(formData.get("reason") ?? ""),
        message: String(formData.get("message")),
        company: String(formData.get("company") ?? ""),
      });

      if (!result.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot field — hidden from real users, left blank */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="reason" className="text-sm font-medium">
          Reason <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <select
          id="reason"
          name="reason"
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <option value="">Select one</option>
          <option value="Full-time role">Full-time role</option>
          <option value="Freelance project">Freelance project</option>
          <option value="Just saying hi">Just saying hi</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" loading={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>

      <p aria-live="polite" className="text-sm">
        {status === "success" && (
          <span className="text-accent">
            Thanks — your message has been sent. I&apos;ll get back to you soon.
          </span>
        )}
        {status === "error" && (
          <span className="text-red-500">
            Something went wrong — please email {siteConfig.email} directly.
          </span>
        )}
      </p>
    </form>
  );
}
