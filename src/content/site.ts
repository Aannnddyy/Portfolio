export const navLinks = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#perfil", label: "Perfil" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const sectionCopy = {
  intro: {
    nowTitle: "Ahora",
  },
  work: {
    title: "Trabajo",
    columns: { project: "Proyecto", stack: "Stack", year: "Año" },
    current: "Actualidad",
    architectureTitle: "Arquitectura",
    highlightsTitle: "Retos resueltos",
    codeLink: "Código",
    demoLink: "Demo",
    loading: "Cargando repositorios…",
    empty: "Por ahora no hay más repositorios públicos.",
    error: "No he podido cargar los repositorios de GitHub.",
    noLanguage: "—",
    viewOnGithub: "Todo en GitHub",
  },
  profile: {
    title: "Perfil",
    experienceTitle: "Experiencia",
    educationTitle: "Formación",
    stackTitle: "Stack",
    languagesTitle: "Idiomas",
  },
  contact: {
    title: "Contacto",
    lead: "Si tienes una oportunidad en backend, una idea o simplemente quieres saludar, escríbeme.",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      submit: "Enviar mensaje",
      hint: "Se abrirá tu correo con el mensaje ya redactado.",
      sent: "Gracias. Abriendo tu correo…",
      subjectPrefix: "Contacto desde el portfolio",
    },
  },
  footer: {
    location: "Madrid",
    backToTop: "Volver arriba",
  },
} as const;
