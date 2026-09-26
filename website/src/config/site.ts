// Zentrale Konfiguration für Status-Indikatoren und externe URLs.
// Hier ändern, statt einzelne Astro-Dateien anzufassen.

export const availability = {
  status: 'available' as 'available' | 'limited' | 'booked',
  label: {
    available: 'Verfügbar für neue Projekte',
    limited: 'Wenige Slots frei',
    booked: 'Aktuell ausgebucht',
  },
  color: {
    available: 'brand',
    limited: 'amber',
    booked: 'gray',
  },
};

export const links = {
  linkedin: 'https://linkedin.com/in/marlon-b-26203116a',
  formspree: 'https://formspree.io/f/xgopevdy',
  newsletter: 'https://buttondown.com/api/emails/embed-subscribe/buschecloud',
  // Termin-CTA. Sobald Cal.com eingerichtet ist, hier den Buchungslink eintragen
  // (z. B. 'https://cal.com/buschecloud/erstgespraech'). Alle "Erstgespräch"-Buttons
  // lesen diese Konstante, der Wechsel ist dann eine Zeile.
  termin: '/#kontakt',
  loesungen: '/loesungen',
};

// Baut den Termin-Link mit Kontext-Parametern (Thema, Paket), egal ob das Ziel
// ein Anker auf der Startseite oder später ein Cal.com-Link ist.
// '/#kontakt' + {thema:'x'} → '/?thema=x#kontakt'; 'https://cal.com/..' → '...?thema=x'
export function terminUrl(params: Record<string, string | undefined> = {}): string {
  const entries = Object.entries(params).filter(([, v]) => v) as [string, string][];
  const [pathAndQuery, hash] = links.termin.split('#');
  const qs = new URLSearchParams(entries).toString();
  const joined = qs ? `${pathAndQuery}${pathAndQuery.includes('?') ? '&' : '?'}${qs}` : pathAndQuery;
  return hash ? `${joined}#${hash}` : joined;
}

export const site = {
  url: 'https://busche.cloud',
  title: 'Busche Cloud',
  author: 'Marlon Busche',
  locale: 'de_DE',
};

// Pakete, wie sie in Use-Case-Bibliothek und Finder referenziert werden.
// Preise sind die Single Source of Truth aus outputs/consulting-angebot.md.
export const pakete = {
  'readiness-check': {
    name: 'KI-Readiness-Check',
    price: '€299',
    meta: '2 Stunden, remote',
    href: '/leistungen#readiness-check',
    kurz: 'Zwei Stunden, ein klares Bild. Danach wisst ihr, was bei euch automatisierbar ist und womit ihr anfangt.',
  },
  'pilot-projekt': {
    name: 'KI-Pilot-Projekt',
    price: 'ab €2.500',
    meta: '4 Wochen',
    href: '/leistungen#pilot-projekt',
    kurz: 'Ein Prozess, vier Wochen, ein Workflow in Produktion. Mit Übergabe und zwei Wochen Support.',
  },
  'begleitung': {
    name: 'Laufende KI-Begleitung',
    price: 'ab €1.200/Monat',
    meta: 'ab 3 Monate',
    href: '/leistungen#begleitung',
    kurz: 'Ich bleibe an Bord: weitere Workflows, Betrieb, Schulung, ein Ansprechpartner, der eure Systeme kennt.',
  },
  'tagessatz': {
    name: 'Tagessatz',
    price: '€1.200 bis 1.800/Tag',
    meta: 'Workshop oder Umsetzung',
    href: '/leistungen#tagessatz',
    kurz: 'Punktuell: Workshop, Strategie-Session oder Umsetzung vor Ort, ohne Paketbindung.',
  },
} as const;

export type PaketId = keyof typeof pakete;

// Funnel-Ereignisse, die GoatCounter als Events zählt (siehe Layout.astro, window.bcTrack).
// Pfad in GoatCounter: ev/<name>. Auswertung im GoatCounter-Dashboard unter "Events".
export const funnelEvents = [
  'finder_gestartet',
  'finder_abgeschlossen',
  'leadmagnet_angefordert',
  'formular_gesendet',
  'paket_cta_geklickt',
] as const;
