/** Clases de Tailwind compartidas entre componentes. */
export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const buttonPrimary = `inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 ${focusRing}`;

export const buttonSecondary = `inline-flex items-center justify-center rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-muted hover:bg-surface ${focusRing}`;

export const textLink = `font-medium text-accent underline-offset-4 hover:underline ${focusRing}`;

export const card = "rounded-lg border border-border bg-surface";

export const tag =
  "rounded border border-border bg-background px-2 py-0.5 font-mono text-xs text-muted";
