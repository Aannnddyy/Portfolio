export type ContactKind = "github" | "linkedin" | "email" | "cv";

export interface ContactLink {
  kind: ContactKind;
  label: string;
  href: string;
  /** Se abre en otra pestaña. */
  external: boolean;
  /** Nombre de archivo sugerido al descargar (solo para el CV). */
  download?: string;
}

export interface Identity {
  name: string;
  firstName: string;
  role: string;
  photo: { src: string; alt: string };
  /** Lo que estoy haciendo ahora mismo. */
  now: readonly string[];
  tagline: string;
  location: string;
  email: string;
  githubUsername: string;
}

export interface About {
  paragraphs: readonly string[];
}

export interface ArchitectureHighlight {
  title: string;
  text: string;
}

export interface FeaturedProject {
  /** Nombre exacto del repo en GitHub; se excluye del listado automático. */
  repoName: string;
  title: string;
  subtitle: string;
  status: string;
  period: string;
  repoUrl: string;
  description: string;
  /** Flujos de la arquitectura: cada fila es una cadena de componentes. */
  flows: readonly { label: string; steps: readonly string[] }[];
  highlights: readonly ArchitectureHighlight[];
  tags: readonly string[];
}

export interface TimelineEntry {
  title: string;
  organization: string;
  period: string;
  location?: string;
  bullets: readonly string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface StackItem {
  name: string;
  /** Matiz opcional, p. ej. "aprendiendo". */
  note?: string;
}

export interface StackCategory {
  title: string;
  items: readonly StackItem[];
}

export interface Portfolio {
  identity: Identity;
  contact: readonly ContactLink[];
  about: About;
  featuredProject: FeaturedProject;
  experience: readonly TimelineEntry[];
  education: readonly TimelineEntry[];
  languages: readonly Language[];
  stack: readonly StackCategory[];
}
