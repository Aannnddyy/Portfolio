import { navLinks } from "@/content/site";
import { portfolio } from "@/content/profile";
import { grid, link } from "@/lib/ui";

export function SiteHeader() {
  const social = portfolio.contact.filter((c) => c.external);
  return (
    <header className="sticky top-0 z-20 bg-background/90 backdrop-blur-sm">
      <nav aria-label="Principal" className={`${grid} items-center py-4`}>
        <a href="#inicio" className={`${link} justify-self-start lg:col-span-2`}>
          <span className="sm:hidden">{portfolio.identity.firstName}</span>
          <span className="hidden sm:inline">{portfolio.identity.name}</span>
        </a>
        <ul className="flex justify-end gap-6 lg:col-span-3 lg:justify-start lg:gap-0">
          {navLinks.map((item) => (
            <li key={item.href} className="lg:w-1/3">
              <a href={item.href} className={link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="hidden justify-end gap-8 lg:flex">
          {social.map((s) => (
            <li key={s.kind}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className={link}>
                {s.label}
                <span className="sr-only"> (se abre en otra pestaña)</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
