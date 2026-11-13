import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { textLink } from "@/lib/ui";

export function SiteFooter() {
  const copy = sectionCopy.footer;
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {portfolio.identity.name} · {copy.builtWith}
        </p>
        <a href="#inicio" className={textLink}>
          {copy.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
