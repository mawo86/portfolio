import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Allgemein'),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    industry: z.string(),
    timeframe: z.string(),
    role: z.string(),
    services: z.array(z.string()).default([]),
    results: z.array(z.object({
      metric: z.string(),
      label: z.string(),
    })).default([]),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

// Use-Case-Bibliothek (/loesungen). Öffentliche Fassung: Problem, Lösung in
// drei Sätzen, Zahlen als Spanne, Paket-Zuordnung. Der Umsetzungsweg liegt
// intern in outputs/loesungswege/<slug>.md und gehört nicht auf die Website.
export const BEREICHE = [
  'Vertrieb',
  'Kundenservice',
  'Backoffice & Buchhaltung',
  'HR',
  'Einkauf & Logistik',
  'Produktion & Technik',
  'Geschäftsführung',
  'SAP-Prozesse',
  'Recht & Organisation',
  'Technik & Betrieb',
] as const;

// Das "größte Zeitproblem" aus Kundensicht. Wird im Use-Case-Finder abgefragt.
export const ZEITPROBLEME = [
  'Wiederkehrende Tipparbeit',
  'Informationen suchen',
  'Warten auf Antworten',
  'Fehler und Nacharbeit',
  'Zahlen und Reporting',
  'Regeln und Unsicherheit',
] as const;

export const PAKETE = ['readiness-check', 'pilot-projekt', 'begleitung', 'tagessatz'] as const;
export const REIFEGRADE = ['Einstieg', 'Fortgeschritten', 'Betrieb'] as const;

const loesungen = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Problem in Kundensprache, ein bis zwei Sätze. Wird in Listen und im Finder gezeigt.
    problem: z.string(),
    // Lösung in einem Satz für Karten und Meta-Description.
    description: z.string(),
    bereich: z.enum(BEREICHE),
    zeitprobleme: z.array(z.enum(ZEITPROBLEME)).min(1),
    branchen: z.array(z.string()).default([]),
    werkzeuge: z.array(z.string()).default([]),
    aufwand: z.string(),      // z. B. "3 bis 5 Tage"
    einsparung: z.string(),   // z. B. "4 bis 8 Std./Woche", Erfahrungswert
    paket: z.enum(PAKETE),
    reifegrad: z.enum(REIFEGRADE).default('Einstieg'),
    sapNah: z.boolean().default(false),
    // Blog-Kategorien, zu denen diese Lösung als nächster Schritt passt.
    blogKategorien: z.array(z.string()).default([]),
    caseStudy: z.string().optional(),
    prio: z.number().default(50),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, 'case-studies': caseStudies, loesungen };
