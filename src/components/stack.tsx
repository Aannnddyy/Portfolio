import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { card, eyebrow } from "@/lib/ui";

export function Stack() {
  const copy = sectionCopy.stack;
  return (
    <Section id="stack" title={copy.title} accent={copy.accent} subtitle={copy.subtitle}>
      <div className="grid gap-4 md:grid-cols-3">
        {portfolio.stack.map((category) => (
          <div key={category.title} className={`${card} p-5`}>
            <h3 className={eyebrow}>{category.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className={`inline-flex items-baseline gap-1.5 rounded-full border px-3 py-1 text-sm ${
                    item.note
                      ? "border-dashed border-lilac/50 text-lilac"
                      : "border-border bg-background"
                  }`}
                >
                  {item.name}
                  {item.note && <span className="text-xs opacity-80">· {item.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
