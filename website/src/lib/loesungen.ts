// Hilfsfunktionen für die Use-Case-Bibliothek (/loesungen) und den Finder.
import { getCollection, type CollectionEntry } from 'astro:content';
import { BEREICHE, ZEITPROBLEME } from '../content/config';
import { pakete } from '../config/site';

export type Loesung = CollectionEntry<'loesungen'>;

export async function getLoesungen(): Promise<Loesung[]> {
  return (await getCollection('loesungen', ({ data }) => !data.draft))
    .sort((a, b) => b.data.prio - a.data.prio || a.data.title.localeCompare(b.data.title, 'de'));
}

// Kompakte Form für clientseitigen Finder (wird als JSON in die Seite gerendert).
export function toFinderItem(l: Loesung) {
  return {
    slug: l.slug,
    title: l.data.title,
    problem: l.data.problem,
    description: l.data.description,
    bereich: l.data.bereich,
    zeitprobleme: l.data.zeitprobleme,
    branchen: l.data.branchen,
    paket: l.data.paket,
    paketName: pakete[l.data.paket].name,
    paketPreis: pakete[l.data.paket].price,
    aufwand: l.data.aufwand,
    einsparung: l.data.einsparung,
    prio: l.data.prio,
  };
}
export type FinderItem = ReturnType<typeof toFinderItem>;

export const bereichLabel: Record<(typeof BEREICHE)[number], string> = {
  'Vertrieb': 'Vertrieb',
  'Kundenservice': 'Kundenservice',
  'Backoffice & Buchhaltung': 'Backoffice & Buchhaltung',
  'HR': 'HR & Personal',
  'Einkauf & Logistik': 'Einkauf & Logistik',
  'Produktion & Technik': 'Produktion & Technik',
  'Geschäftsführung': 'Geschäftsführung',
  'SAP-Prozesse': 'SAP-nahe Prozesse',
  'Recht & Organisation': 'Recht & Organisation',
  'Technik & Betrieb': 'Technik & Betrieb',
};

export const FINDER_BRANCHEN = ['Fertigung', 'Handel', 'Dienstleistung', 'Handwerk', 'Andere'] as const;

export { BEREICHE, ZEITPROBLEME };

// Passende Lösungen für einen Blog-Artikel: gleiche Kategorie im Feld blogKategorien,
// sortiert nach Priorität. Fallback: die drei wichtigsten.
export async function loesungenFuerKategorie(category: string, limit = 2): Promise<Loesung[]> {
  const alle = await getLoesungen();
  const passend = alle.filter(l => l.data.blogKategorien.includes(category));
  return (passend.length ? passend : alle).slice(0, limit);
}
