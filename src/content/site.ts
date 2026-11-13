export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const sectionCopy = {
  about: {
    title: "Sobre mí",
    subtitle: "De la ingeniería RF al desarrollo backend.",
  },
  projects: {
    title: "Proyectos",
    subtitle: "Lo que estoy construyendo ahora mismo.",
    featuredBadge: "Proyecto destacado",
    architectureTitle: "Arquitectura",
    repoLink: "Ver repositorio",
    othersTitle: "Otros repositorios",
    othersSubtitle: "Sincronizados automáticamente desde la API pública de GitHub.",
    empty: "Todavía no hay más repositorios públicos que mostrar.",
    error: "No se han podido cargar los repositorios desde GitHub.",
    loading: "Cargando repositorios",
    codeLink: "Código",
    demoLink: "Demo",
    noDescription: "Sin descripción.",
    viewOnGithub: "Ver perfil completo en GitHub",
  },
  stack: {
    title: "Stack tecnológico",
    subtitle: "Herramientas con las que trabajo a diario y las que estoy incorporando.",
  },
  timeline: {
    title: "Experiencia y formación",
    subtitle: "Trayectoria profesional y académica.",
    experienceTitle: "Experiencia",
    educationTitle: "Formación",
    languagesTitle: "Idiomas",
  },
  contact: {
    title: "Contacto",
    subtitle:
      "¿Tienes una oportunidad backend o quieres hablar de un proyecto? Escríbeme.",
    form: {
      name: "Nombre",
      email: "Tu email",
      message: "Mensaje",
      submit: "Enviar mensaje",
      hint: "Se abrirá tu cliente de correo con el mensaje ya redactado.",
      sent: "Abriendo tu cliente de correo…",
      subjectPrefix: "Contacto desde el portfolio",
    },
  },
  footer: {
    builtWith: "Hecho con Next.js, TypeScript y Tailwind CSS.",
    backToTop: "Volver arriba",
  },
} as const;
