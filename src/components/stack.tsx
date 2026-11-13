import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { label } from "@/lib/ui";

export function Stack() {
  const copy = sectionCopy.stack;
  return (
    <Section id="stack" eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle}>
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {portfolio.stack.map((category) => (
          <div key={category.title}>
            <h3 className={`${label} border-b border-accent pb-3 text-accent`}>
              {category.title}
            </h3>
            <ul className="divide-y divide-border">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-serif text-xl">{item.name}</span>
                  {item.note && (
                    <span className="text-xs tracking-wide text-muted uppercase">{item.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
