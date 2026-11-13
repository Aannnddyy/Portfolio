import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { textLink } from "@/lib/ui";

export function SiteFooter() {
  const copy = sectionCopy.footer;
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <span className="font-serif italic text-foreground">{portfolio.identity.name}</span>
          {" · "}
          {copy.madeWith} <span aria-hidden="true" className="text-accent">♡</span>
        </p>
        <a href="#inicio" className={textLink}>
          {copy.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
