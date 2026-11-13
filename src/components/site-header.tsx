import { navLinks } from "@/content/site";
import { portfolio } from "@/content/profile";
import { focusRing } from "@/lib/ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-14 max-w-5xl items-center gap-6 px-4 sm:px-6"
      >
        <a
          href="#inicio"
          className={`shrink-0 font-mono text-sm font-semibold ${focusRing}`}
        >
          <span aria-hidden="true" className="text-accent">
            ~/
          </span>
          andrea
          <span className="sr-only"> — {portfolio.identity.name}, inicio</span>
        </a>
        <ul className="-mr-4 ml-auto flex min-w-0 items-center gap-5 overflow-x-auto pr-4 text-sm whitespace-nowrap sm:mr-0 sm:pr-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-muted transition-colors hover:text-foreground ${focusRing}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
