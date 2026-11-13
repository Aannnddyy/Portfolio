export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const sectionCopy = {
  hero: {
    greeting: "Hola, soy",
    nowTitle: "Ahora mismo",
    locationPrefix: "Desde",
  },
  about: {
    title: "Un poco sobre",
    accent: "mí",
    subtitle: "De las antenas y los satélites al backend.",
  },
  projects: {
    title: "Lo que estoy",
    accent: "construyendo",
    subtitle: "Mi proyecto principal y el resto de cosas que tengo en GitHub.",
    featuredBadge: "Mi proyecto favorito",
    architectureTitle: "Cómo está montado",
    highlightsTitle: "Lo que he resuelto",
    repoLink: "Ver el código",
    othersTitle: "Más cosas en GitHub",
    othersSubtitle: "Esta lista se actualiza sola a partir de mis repos públicos.",
    empty: "Por ahora no hay más repositorios públicos. ¡Pronto habrá más!",
    error: "Vaya, no he podido cargar los repositorios de GitHub.",
    loading: "Cargando repositorios",
    codeLink: "Código",
    demoLink: "Demo",
    noDescription: "Sin descripción todavía.",
    viewOnGithub: "Ver mi perfil de GitHub",
  },
  stack: {
    title: "Con qué",
    accent: "trabajo",
    subtitle: "Lo que uso a diario y lo que estoy aprendiendo ahora.",
  },
  timeline: {
    title: "Mi",
    accent: "camino",
    subtitle: "Dónde he trabajado y qué he estudiado.",
    experienceTitle: "Experiencia",
    educationTitle: "Formación",
    languagesTitle: "Idiomas",
  },
  contact: {
    title: "",
    accent: "¿Hablamos?",
    subtitle:
      "Si tienes una oportunidad en backend, una idea o simplemente quieres saludar, escríbeme.",
    form: {
      name: "Tu nombre",
      email: "Tu email",
      message: "¿Qué me quieres contar?",
      submit: "Enviar mensaje",
      hint: "Se abrirá tu correo con el mensaje ya redactado.",
      sent: "¡Gracias! Abriendo tu correo…",
      subjectPrefix: "Contacto desde el portfolio",
    },
  },
  footer: {
    madeWith: "Hecho con cariño desde Madrid",
    backToTop: "Volver arriba",
  },
} as const;
