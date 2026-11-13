import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  /** Palabra final del título, destacada en cursiva. */
  accent?: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, title, accent, subtitle, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="mb-10 max-w-2xl">
          <h2
            id={headingId}
            className="font-serif text-3xl font-medium tracking-tight sm:text-4xl"
          >
            {title}
            {title && accent && " "}
            {accent && <em className="text-accent">{accent}</em>}
          </h2>
          {subtitle && <p className="mt-3 text-muted text-pretty">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
