import { profile } from "@/content/profile";
import { sectionCopy } from "@/content/site";

export function SiteFooter() {
  const copy = sectionCopy.footer;
  return (
    <footer
      id="contacto"
      aria-labelledby="contacto-title"
      className="scroll-mt-20 border-t border-border"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2
          id="contacto-title"
          className="text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {copy.contactTitle}
        </h2>
        <p className="mt-2 max-w-xl text-muted">{copy.contactText}</p>

        <ul className="mt-8 flex flex-wrap gap-3">
          {profile.socials.map((social) => {
            const external = social.platform !== "email";
            return (
              <li key={social.platform}>
                <a
                  href={social.href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="inline-block rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {social.label}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 text-xs text-muted">
          {profile.name} · {copy.builtWith}
        </p>
      </div>
    </footer>
  );
}
