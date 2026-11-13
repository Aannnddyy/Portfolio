/** Clases de Tailwind compartidas entre componentes. */
export const focusRing =
  "focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-foreground";

/** Enlace de texto: sin decoración hasta pasar el ratón. */
export const link = `underline-offset-4 decoration-1 hover:underline ${focusRing}`;

/** Rejilla de 6 columnas de borde a borde, como en una maqueta de revista. */
export const grid = "grid grid-cols-2 gap-x-4 px-4 sm:px-6 lg:grid-cols-6";

/** Separación vertical estándar entre secciones. */
export const sectionSpace = "scroll-mt-16 pt-28 sm:pt-40";
