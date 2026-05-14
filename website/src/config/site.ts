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
  cookloop: 'https://cookloop.vercel.app',
  dartsiq: 'https://dartsiq.vercel.app',
};

export const site = {
  url: 'https://busche.cloud',
  title: 'Busche Cloud',
  author: 'Marlon Busche',
  locale: 'de_DE',
};
