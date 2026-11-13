import { portfolio } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";
import { card } from "@/lib/ui";

export function Stack() {
  return (
    <Section
      id="stack"
      title={sectionCopy.stack.title}
      subtitle={sectionCopy.stack.subtitle}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {portfolio.stack.map((category) => (
          <div key={category.title} className={`${card} p-5`}>
            <h3 className="font-mono text-xs tracking-wide text-accent uppercase">
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="inline-flex items-baseline gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 text-sm"
                >
                  {item.name}
                  {item.note && (
                    <span className="font-mono text-[0.7rem] text-muted">
                      {item.note}
                    </span>
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
