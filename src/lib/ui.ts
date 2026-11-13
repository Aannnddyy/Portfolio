/** Clases de Tailwind compartidas entre componentes. */
export const focusRing =
  "focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-foreground";

/** Enlace de texto: subrayado fino + manicule ☞ al pasar el ratón (ver `.ink-link`). */
export const link = `ink-link ${focusRing}`;

/**
 * Rejilla de 6 columnas de borde a borde, como en una maqueta de revista.
 * El margen lateral deja sitio a la manicule de los enlaces pegados al borde.
 */
export const grid = "grid grid-cols-2 gap-x-4 px-6 sm:px-8 lg:grid-cols-6";

/** Separación vertical estándar entre secciones. */
export const sectionSpace = "scroll-mt-16 pt-28 sm:pt-40";
