import { navLinks } from "@/content/site";
import { portfolio } from "@/content/profile";
import { focusRingLight } from "@/lib/ui";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 bg-accent text-cream">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-8"
      >
        <a
          href="#inicio"
          className={`shrink-0 font-serif text-xl tracking-wide uppercase ${focusRingLight}`}
        >
          {portfolio.identity.firstName}
          <span className="sr-only"> — ir al inicio</span>
        </a>
        <ul className="-mr-4 ml-auto flex min-w-0 items-center gap-6 overflow-x-auto pr-4 text-[0.7rem] font-medium tracking-[0.18em] whitespace-nowrap uppercase sm:mr-0 sm:pr-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-cream/85 transition-colors hover:text-cream ${focusRingLight}`}
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
