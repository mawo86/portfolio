import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const blog = await getCollection('blog', ({ data }) => !data.draft);
const studies = await getCollection('case-studies', ({ data }) => !data.draft);
const loesungen = await getCollection('loesungen', ({ data }) => !data.draft);

const pages = Object.fromEntries([
  ...blog.map(p => [`blog/${p.slug}`, { title: p.data.title, description: p.data.description, tag: p.data.category }]),
  ...studies.map(p => [`case-studies/${p.slug}`, { title: p.data.title, description: p.data.description, tag: p.data.industry }]),
  ...loesungen.map(p => [`loesungen/${p.slug}`, { title: p.data.title, description: p.data.description, tag: p.data.bereich }]),
  ['loesungen', { title: 'Was bei euch automatisierbar ist. Konkret.', description: 'KI-Lösungen für Vertrieb, Service, Backoffice, Produktion und SAP-Prozesse', tag: 'Lösungen' }],
  ['index', { title: 'KI, die bei euch wirklich läuft.', description: 'Busche Cloud · KI-Beratung für den Mittelstand', tag: 'Busche Cloud' }],
  ['blog', { title: 'Aus der Praxis', description: 'Was bei KI im Mittelstand funktioniert. Und was nicht.', tag: 'Blog' }],
  ['tools', { title: 'Womit ich arbeite', description: 'Tools, die bei mir wirklich im Einsatz sind', tag: 'Tools' }],
  ['case-studies', { title: 'Projekte, die laufen', description: 'Vorgehen, Zahlen, Ergebnisse', tag: 'Projekte' }],
  ['leistungen', { title: 'Vier Pakete. Feste Preise.', description: 'KI-Beratung für den Mittelstand, ohne "Preis auf Anfrage"', tag: 'Leistungen' }],
]);

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page: { title: string; description: string; tag: string }) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[255, 255, 255], [240, 244, 249]],
    border: { color: [11, 87, 208], width: 10, side: 'inline-start' },
    padding: 64,
    logo: undefined,
    // Schriften liegen lokal (statische Instanzen der Variable-Fonts aus public/fonts),
    // damit der Build ohne Netzzugriff auf api.fontsource.org läuft.
    fonts: [
      './src/assets/og-fonts/Manrope-800.ttf',
      './src/assets/og-fonts/Manrope-700.ttf',
      './src/assets/og-fonts/Roboto-400.ttf',
    ],
    font: {
      title: {
        size: 60,
        weight: 'ExtraBold',
        families: ['Manrope'],
        color: [31, 31, 31],
        lineHeight: 1.15,
      },
      description: {
        size: 28,
        weight: 'Normal',
        families: ['Roboto'],
        color: [95, 99, 104],
        lineHeight: 1.4,
      },
    },
  }),
});
