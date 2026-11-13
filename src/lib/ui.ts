/** Clases de Tailwind compartidas entre componentes. */
export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const focusRingLight =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors";

/** Botones sobre fondo crema. */
export const buttonPrimary = `${buttonBase} border border-accent bg-accent text-cream hover:bg-transparent hover:text-accent ${focusRing}`;
export const buttonOutline = `${buttonBase} border border-accent text-accent hover:bg-accent hover:text-cream ${focusRing}`;

/** Botones sobre fondo burdeos. */
export const buttonPrimaryLight = `${buttonBase} border border-cream bg-cream text-accent hover:bg-transparent hover:text-cream ${focusRingLight}`;
export const buttonOutlineLight = `${buttonBase} border border-cream/70 text-cream hover:bg-cream hover:text-accent ${focusRingLight}`;

export const textLink = `text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent ${focusRing}`;

/** Etiqueta pequeña en mayúsculas espaciadas (VISIÓN, PROYECTOS…). */
export const label = "text-[0.7rem] font-medium tracking-[0.3em] uppercase";

/** Título de sección en serif de alto contraste. */
export const displayTitle = "font-serif uppercase leading-[0.95] tracking-tight";
