import type { ContactLink } from "@/types/portfolio";
import { buttonOutline, buttonOutlineLight, buttonPrimary, buttonPrimaryLight } from "@/lib/ui";

interface ContactLinksProps {
  links: readonly ContactLink[];
  /** Tipo de enlace que se muestra con el estilo principal. */
  primary?: ContactLink["kind"];
  /** `dark` cuando los botones van sobre fondo burdeos. */
  tone?: "light" | "dark";
}

export function ContactLinks({ links, primary, tone = "light" }: ContactLinksProps) {
  const [main, other] =
    tone === "dark" ? [buttonPrimaryLight, buttonOutlineLight] : [buttonPrimary, buttonOutline];
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
            className={link.kind === primary ? main : other}
          >
            {link.label}
            {link.external && <span className="sr-only"> (se abre en otra pestaña)</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
