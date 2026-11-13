import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { grid, link } from "@/lib/ui";

export function SiteFooter() {
  const copy = sectionCopy.footer;
  return (
    <footer className={`${grid} border-t border-rule py-4`}>
      <p className="lg:col-span-2">© {portfolio.identity.name}</p>
      <p className="hidden text-muted lg:block">{copy.location}</p>
      <a href="#inicio" className={`${link} text-right lg:col-start-6`}>
        {copy.backToTop} ↑
      </a>
    </footer>
  );
}
