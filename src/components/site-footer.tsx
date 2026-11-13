import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { focusRingLight } from "@/lib/ui";

export function SiteFooter() {
  const copy = sectionCopy.footer;
  return (
    <footer className="bg-accent text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-cream/20 px-4 py-8 text-xs tracking-[0.18em] text-cream/80 uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          <span className="font-serif text-sm tracking-wide text-cream">
            {portfolio.identity.name}
          </span>
          {" · "}
          {copy.madeWith}
        </p>
        <a href="#inicio" className={`hover:text-cream ${focusRingLight}`}>
          {copy.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
