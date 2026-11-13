import type { Portfolio } from "@/types/portfolio";

const email = "andreagrlopez@gmail.com";
const githubUsername = "Aannnddyy";

export const portfolio: Portfolio = {
  identity: {
    name: "Andrea Grañas López",
    role: "Telecommunications Engineer → Backend & Software Engineer",
    tagline:
      "Ingeniera de Telecomunicaciones dando el salto al desarrollo Backend. Experiencia automatizando sistemas críticos y procesando datos en Python, construyendo APIs REST con Django/PostgreSQL y ampliando mi stack hacia Java y Spring Boot.",
    location: "Madrid, España",
    email,
    githubUsername,
  },

  contact: [
    {
      kind: "github",
      label: "GitHub",
      href: `https://github.com/${githubUsername}`,
      external: true,
    },
    {
      kind: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andrea-gra%C3%B1as-l%C3%B3pez-514397213",
      external: true,
    },
    { kind: "email", label: "Email", href: `mailto:${email}`, external: false },
    {
      kind: "cv",
      label: "Descargar CV",
      href: "/cv-andrea-granas.pdf",
      external: false,
      download: "cv-andrea-granas.pdf",
    },
  ],

  about: {
    paragraphs: [
      "Soy Ingeniera de Tecnologías y Servicios de Telecomunicación por la Universidad Autónoma de Madrid (UAM).",
      "Actualmente trabajo como RF & Software Engineer en Aicox Soluciones, donde he pasado de las pruebas de hardware/RF a desarrollar scripts de automatización en Python, procesar grandes volúmenes de datos de medición (Pandas, NumPy) y resolver incidencias operativas en sistemas críticos, en programas como SPAINSAT NG y Ministerio de Defensa / CESTIC.",
      "Mi objetivo profesional es enfocar mi carrera al 100% en el desarrollo de software Backend: diseñar APIs robustas, trabajar con bases de datos relacionales y arquitecturas asíncronas. Actualmente aplico Python (Django REST Framework) en proyectos propios y me estoy formando activamente en Java y Spring Boot.",
    ],
    facts: [
      { label: "Ubicación", value: "Madrid, España" },
      { label: "Rol actual", value: "RF & Software Engineer · Aicox" },
      { label: "Formación", value: "Ing. Telecomunicación · UAM" },
      { label: "Foco", value: "Backend · APIs · Bases de datos" },
    ],
  },

  featuredProject: {
    repoName: "smartcloset-backend",
    title: "SmartCloset",
    subtitle: "Intelligent Digital Wardrobe & Async Backend",
    status: "En desarrollo activo",
    period: "Oct 2026 – Actualidad",
    repoUrl: `https://github.com/${githubUsername}/smartcloset-backend`,
    description:
      "Backend modular y sistema asíncrono para la gestión inteligente de armarios y recomendación de outfits.",
    flows: [
      {
        label: "Petición síncrona",
        steps: ["Cliente", "Django REST API", "PostgreSQL"],
      },
      {
        label: "Tareas en segundo plano",
        steps: ["Django REST API", "Redis (broker)", "Celery workers"],
      },
    ],
    highlights: [
      {
        title: "API REST",
        text: "Diseñada con Python y Django REST Framework, con una estructura modular por dominios.",
      },
      {
        title: "Modelado relacional",
        text: "Esquema en PostgreSQL para usuarios, prendas y combinaciones de outfits.",
      },
      {
        title: "Procesamiento asíncrono",
        text: "Celery y Redis para tareas pesadas: web scraping de catálogos, eliminación automática de fondos con modelos locales de visión artificial (ONNX) e integración con APIs externas de meteorología.",
      },
    ],
    tags: [
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Celery",
      "Redis",
      "ONNX",
      "REST API",
    ],
  },

  experience: [
    {
      title: "RF and Software Engineer",
      organization: "Aicox Soluciones",
      period: "Jun 2025 – Actualidad",
      location: "Madrid",
      bullets: [
        "Desarrollo de scripts de automatización en Python para ciclos de medición y captura de datos, reduciendo las pruebas manuales en banco.",
        "Procesamiento y análisis automatizado de datasets con Python (Pandas, NumPy) para informes de validación en programas críticos como SPAINSAT NG (Hisdesat – Airbus) y el Ministerio de Defensa (CESTIC).",
        "Guardias operativas, resolución de incidencias en entornos reales y documentación técnica de sistemas.",
      ],
    },
    {
      title: "RF Engineering Intern",
      organization: "Aicox Soluciones",
      period: "May 2023 – May 2025",
      location: "Madrid",
      bullets: [
        "Caracterización de sistemas en estaciones terrenas de satélite, calibración de instrumentación y documentación técnica, en paralelo al grado universitario.",
      ],
    },
  ],

  education: [
    {
      title: "Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación",
      organization: "Universidad Autónoma de Madrid (UAM)",
      period: "2021 – 2025",
      bullets: ["Enfoque en programación, redes y sistemas informáticos."],
    },
  ],

  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "C1 comprensión · B2 expresión" },
  ],

  stack: [
    {
      title: "Backend & APIs",
      items: [
        { name: "Python" },
        { name: "Django REST Framework" },
        { name: "Java", note: "fundamentos" },
        { name: "Spring Boot", note: "aprendiendo" },
        { name: "C" },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Bases de datos & colas",
      items: [
        { name: "PostgreSQL" },
        { name: "Redis" },
        { name: "Celery" },
        { name: "MySQL" },
        { name: "SQLite" },
      ],
    },
    {
      title: "Herramientas & sistemas",
      items: [
        { name: "Git" },
        { name: "GNU/Linux" },
        { name: "macOS" },
        { name: "Postman" },
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "MATLAB" },
      ],
    },
  ],
};
