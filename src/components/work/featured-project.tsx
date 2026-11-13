import type { FeaturedProject as FeaturedProjectData } from "@/types/portfolio";
import { sectionCopy } from "@/content/site";
import { grid } from "@/lib/ui";

/** Detalle del proyecto destacado, maquetado como una ficha de revista. */
export function FeaturedProject({ project }: { project: FeaturedProjectData }) {
  const copy = sectionCopy.work;
  return (
    <div className={`${grid} gap-y-8 pt-6 pb-14`}>
      <div className="col-span-2 lg:col-start-2">
        <p className="text-xl leading-[1.25] text-pretty">{project.description}</p>
        <p className="mt-4 text-muted">
          {project.status}. {project.tags.join(", ")}.
        </p>
      </div>

      <div className="col-span-2 lg:col-span-1">
        <p className="text-muted">{copy.architectureTitle}</p>
        {project.flows.map((flow) => (
          <figure key={flow.label} className="mt-3">
            <figcaption className="italic">{flow.label}</figcaption>
            <p>{flow.steps.join(" → ")}</p>
          </figure>
        ))}
      </div>

      <div className="col-span-2">
        <p className="text-muted">{copy.highlightsTitle}</p>
        <ol className="mt-3 space-y-3">
          {project.highlights.map((h) => (
            <li key={h.title}>
              <span className="italic">{h.title}.</span> {h.text}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
