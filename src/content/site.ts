export const navLinks = [
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const sectionCopy = {
  hero: {
    primaryCta: "Ver proyectos",
    secondaryCta: "Contactar",
  },
  stack: {
    title: "Stack tecnológico",
    subtitle: "Tecnologías con las que trabajo y sigo aprendiendo.",
  },
  projects: {
    title: "Proyectos",
    subtitle: "Repositorios públicos sincronizados desde GitHub.",
    empty: "Todavía no hay repositorios públicos que mostrar.",
    error: "No se han podido cargar los proyectos desde GitHub.",
    viewOnGithub: "Ver todo en GitHub",
    repoLink: "Código",
    demoLink: "Demo",
  },
  footer: {
    contactTitle: "¿Hablamos?",
    contactText: "Estoy abierto a oportunidades como desarrollador backend junior.",
    builtWith: "Hecho con Next.js y Tailwind CSS.",
  },
} as const;
