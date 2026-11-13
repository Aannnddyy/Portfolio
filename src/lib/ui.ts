/** Clases de Tailwind compartidas entre componentes. */
export const focusRing =
  "focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-foreground";

/** Enlace de texto: subrayado fino + manicule ☞ al pasar el ratón (ver `.ink-link`). */
export const link = `ink-link ${focusRing}`;

/**
 * Rejilla de 6 columnas de borde a borde, como en una maqueta de revista.
 * El margen lateral deja sitio a la manicule de los enlaces pegados al borde.
 */
export const grid = "grid grid-cols-2 gap-x-6 px-6 sm:px-10 lg:grid-cols-6 lg:gap-x-10";

/** Separación vertical estándar entre secciones. */
export const sectionSpace = "scroll-mt-20 pt-36 sm:pt-52";
