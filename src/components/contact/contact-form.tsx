"use client";

import { useState } from "react";
import { sectionCopy } from "@/content/site";
import { focusRing, link } from "@/lib/ui";

const copy = sectionCopy.contact.form;

/** Campos de una sola línea inferior, sin cajas. */
const fieldClass = `mt-1 block w-full border-0 border-b border-rule bg-transparent px-0 py-1.5 transition-colors focus:border-foreground ${focusRing}`;

function field(data: FormData, name: string): string {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Formulario sin backend: compone un `mailto:` con los datos introducidos.
 * Se puede sustituir por una Server Action con un proveedor de email.
 */
export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function send(data: FormData) {
    const name = field(data, "name");
    const from = field(data, "email");
    const message = field(data, "message");

    const subject = `${copy.subjectPrefix} — ${name}`;
    const body = `${message}\n\n— ${name} (${from})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form action={send} className="space-y-5">
      <label className="block text-muted">
        {copy.name}
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          maxLength={100}
          className={`${fieldClass} text-foreground`}
        />
      </label>
      <label className="block text-muted">
        {copy.email}
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          className={`${fieldClass} text-foreground`}
        />
      </label>
      <label className="block text-muted">
        {copy.message}
        <textarea
          name="message"
          required
          rows={4}
          maxLength={2000}
          className={`${fieldClass} resize-y text-foreground`}
        />
      </label>
      <div>
        <button type="submit" className={`${link} cursor-pointer underline`}>
          {copy.submit} →
        </button>
        <p className="mt-2 text-muted" aria-live="polite">
          {sent ? copy.sent : copy.hint}
        </p>
      </div>
    </form>
  );
}
