"use client";

import { useState } from "react";
import { sectionCopy } from "@/content/site";
import { buttonPrimary, focusRing } from "@/lib/ui";

const copy = sectionCopy.contact.form;

const fieldClass = `mt-1.5 block w-full rounded-xl border border-border bg-background px-3 py-2 text-sm placeholder:text-muted/60 ${focusRing}`;

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
    <form action={send} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          {copy.name}
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            className={fieldClass}
          />
        </label>
        <label className="block text-sm">
          {copy.email}
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            className={fieldClass}
          />
        </label>
      </div>
      <label className="block text-sm">
        {copy.message}
        <textarea
          name="message"
          required
          rows={5}
          maxLength={2000}
          className={`${fieldClass} resize-y`}
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className={`${buttonPrimary} cursor-pointer`}>
          {copy.submit}
        </button>
        <p className="text-xs text-muted" aria-live="polite">
          {sent ? copy.sent : copy.hint}
        </p>
      </div>
    </form>
  );
}
