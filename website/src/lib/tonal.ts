// Tonflächen (Material-Pastell) als Bedeutungsträger: Jede Blog-Kategorie hat eine feste Farbe.
// Chips, Kacheln und Karten lesen sie von hier.
// Die Klassen stehen hier als vollständige Strings, damit Tailwind sie beim Build findet.
export type Tonal = 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'teal' | 'neutral';

/** Chip oder Fläche: heller Ton, dunkler Text derselben Familie. */
export const tonalClass: Record<Tonal, string> = {
  blue: 'bg-tonal-blue text-tonal-blue-900',
  green: 'bg-tonal-green text-tonal-green-900',
  yellow: 'bg-tonal-yellow text-tonal-yellow-900',
  red: 'bg-tonal-red text-tonal-red-900',
  purple: 'bg-tonal-purple text-tonal-purple-900',
  teal: 'bg-tonal-teal text-tonal-teal-900',
  neutral: 'bg-ink-700 text-bone-50',
};

/** Nur die dunkle Textfarbe, für Akzente auf weißem Grund. */
export const tonalText: Record<Tonal, string> = {
  blue: 'text-tonal-blue-900',
  green: 'text-tonal-green-900',
  yellow: 'text-tonal-yellow-900',
  red: 'text-tonal-red-900',
  purple: 'text-tonal-purple-900',
  teal: 'text-tonal-teal-900',
  neutral: 'text-bone-50',
};

/** Kräftige Variante für kleine Marker (Punkte, Balken). */
export const tonalSolid: Record<Tonal, string> = {
  blue: 'bg-brand-600',
  green: 'bg-[#1E8E3E]',
  yellow: 'bg-[#E37400]',
  red: 'bg-[#D93025]',
  purple: 'bg-[#7B4FD6]',
  teal: 'bg-[#0F8B8D]',
  neutral: 'bg-bone-50',
};

export const kategorieTonal: Record<string, Tonal> = {
  'Strategie': 'blue',
  'Automatisierung': 'green',
  'Grundlagen': 'teal',
  'Branchen': 'yellow',
  'Tools & Setup': 'purple',
  'SAP & Enterprise': 'blue',
  'Datenschutz': 'red',
  'Erfahrungsbericht': 'neutral',
};

const CHIP_BASE = 'inline-flex items-center px-2.5 py-1 rounded-full text-[0.68rem] font-semibold uppercase tracking-[0.08em] leading-none';

export function chipFor(t: Tonal | undefined): string {
  return `${CHIP_BASE} ${tonalClass[t ?? 'neutral']}`;
}

export const chipKategorie = (k: string | undefined) => chipFor(k ? kategorieTonal[k] : undefined);
