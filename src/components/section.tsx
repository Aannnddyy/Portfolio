import type { ReactNode } from "react";
import { displayTitle, label } from "@/lib/ui";

interface SectionProps {
  id: string;
  /** Etiqueta pequeña sobre el título. */
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** `dark` = franja burdeos con texto crema. */
  tone?: "light" | "dark";
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, tone = "light", children }: SectionProps) {
  const headingId = `${id}-title`;
  const dark = tone === "dark";
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`scroll-mt-14 py-20 sm:py-28 ${dark ? "bg-accent text-cream" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <header className="mb-12 text-center sm:mb-16">
          <p className={`${label} ${dark ? "text-cream/75" : "text-muted"}`}>{eyebrow}</p>
          <h2
            id={headingId}
            className={`${displayTitle} mt-3 text-4xl sm:text-6xl ${dark ? "" : "text-accent"}`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`mx-auto mt-4 max-w-xl text-pretty ${dark ? "text-cream/80" : "text-muted"}`}
            >
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
