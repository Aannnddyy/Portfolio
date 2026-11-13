import type { Profile } from "@/types/profile";

// Datos placeholder: sustitúyelos por los tuyos.
export const profile: Profile = {
  name: "Tu Nombre",
  role: "Junior Backend / Software Engineer",
  location: "España · Remoto",
  tagline: "Construyo APIs y servicios backend fiables, simples y bien probados.",
  summary:
    "Desarrollador junior enfocado en backend: diseño de APIs REST, modelado de bases de datos y automatización. Me gusta el código legible, los tests y entender cómo funcionan los sistemas por dentro.",
  availability: "Disponible para nuevas oportunidades",
  githubUsername: "octocat",
  featuredRepos: [],
  socials: [
    { platform: "github", label: "GitHub", href: "https://github.com/octocat" },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tu-usuario",
    },
    { platform: "email", label: "Email", href: "mailto:tu@email.com" },
  ],
  stack: [
    { title: "Lenguajes", items: ["TypeScript", "Python", "Java", "SQL"] },
    {
      title: "Backend",
      items: ["Node.js", "Express", "FastAPI", "Spring Boot", "REST APIs"],
    },
    { title: "Bases de datos", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
    {
      title: "Herramientas",
      items: ["Git", "Docker", "Linux", "GitHub Actions", "Jest"],
    },
  ],
};
