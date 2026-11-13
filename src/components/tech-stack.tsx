import { profile } from "@/content/profile";
import { sectionCopy } from "@/content/site";
import { Section } from "@/components/section";

export function TechStack() {
  return (
    <Section
      id="stack"
      title={sectionCopy.stack.title}
      subtitle={sectionCopy.stack.subtitle}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.stack.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="font-mono text-sm font-medium text-accent">
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
