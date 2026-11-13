export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const sectionCopy = {
  hero: {
    kicker: "Backend & Software Engineer",
    headline: "APIs robustas, datos bien modelados y sistemas que no se caen",
  },
  vision: {
    eyebrow: "Mi objetivo",
  },
  about: {
    greeting: "Hola, soy Andrea",
    nowTitle: "Ahora mismo",
    cta: "Descargar CV",
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Proyectos",
    subtitle: "Lo que estoy construyendo ahora y el resto de cosas que tengo en GitHub.",
    featuredBadge: "Proyecto destacado",
    architectureTitle: "Arquitectura",
    highlightsTitle: "Retos resueltos",
    repoLink: "Ver el código",
    othersTitle: "Más en GitHub",
    othersSubtitle: "Esta lista se actualiza sola a partir de mis repos públicos.",
    empty: "Por ahora no hay más repositorios públicos.",
    error: "No he podido cargar los repositorios de GitHub.",
    loading: "Cargando repositorios",
    codeLink: "Código",
    demoLink: "Demo",
    noDescription: "Sin descripción todavía.",
    viewOnGithub: "Ver perfil de GitHub",
  },
  stack: {
    eyebrow: "Herramientas",
    title: "Stack",
    subtitle: "Lo que uso a diario y lo que estoy aprendiendo ahora.",
  },
  timeline: {
    eyebrow: "Trayectoria",
    title: "Experiencia",
    experienceTitle: "Experiencia",
    educationTitle: "Formación",
    languagesTitle: "Idiomas",
  },
  contact: {
    eyebrow: "Contacto",
    title: "¿Hablamos?",
    subtitle:
      "Si tienes una oportunidad en backend, una idea o simplemente quieres saludar, escríbeme.",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
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
