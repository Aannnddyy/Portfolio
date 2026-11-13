import type { ContactLink } from "@/types/portfolio";
import { buttonPrimary, buttonSecondary } from "@/lib/ui";

interface ContactLinksProps {
  links: readonly ContactLink[];
  /** Tipo de enlace que se muestra con el estilo principal. */
  primary?: ContactLink["kind"];
}

export function ContactLinks({ links, primary }: ContactLinksProps) {
  return (
    <ul className="flex flex-wrap gap-3">
      {links.map((link) => (
        <li key={link.kind}>
          <a
            href={link.href}
            download={link.download}
            {...(link.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            className={link.kind === primary ? buttonPrimary : buttonSecondary}
          >
            {link.label}
            {link.external && <span className="sr-only"> (se abre en otra pestaña)</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
