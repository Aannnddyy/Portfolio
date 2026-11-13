/** Clases de Tailwind compartidas entre componentes. */
export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const buttonPrimary = `inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 ${focusRing}`;

export const buttonSecondary = `inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent ${focusRing}`;

export const textLink = `font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent ${focusRing}`;

export const card = "rounded-2xl border border-border bg-surface";

export const tag =
  "rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent";

/** Subtítulo pequeño en serif cursiva, usado dentro de las secciones. */
export const eyebrow = "font-serif text-lg italic text-accent";
