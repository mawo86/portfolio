import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const blog = await getCollection('blog', ({ data }) => !data.draft);
const studies = await getCollection('case-studies', ({ data }) => !data.draft);

const pages = Object.fromEntries([
  ...blog.map(p => [`blog/${p.slug}`, { title: p.data.title, description: p.data.description, tag: p.data.category }]),
  ...studies.map(p => [`case-studies/${p.slug}`, { title: p.data.title, description: p.data.description, tag: p.data.industry }]),
  ['index', { title: 'Busche Cloud', description: 'KI-Automatisierung & Digitale Transformation', tag: 'Portfolio' }],
  ['blog', { title: 'Blog', description: 'Gedanken & Insights zu KI im Unternehmen', tag: 'Blog' }],
  ['tools', { title: 'Empfohlene Tools', description: 'Tools, die ich tatsächlich nutze', tag: 'Tools' }],
  ['case-studies', { title: 'Case Studies', description: 'Echte Projekte, messbare Ergebnisse', tag: 'Case Studies' }],
]);

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page: { title: string; description: string; tag: string }) => ({
    title: page.title,
    description: page.description,
    bgGradient: [[8, 11, 20], [0, 28, 56]],
    border: { color: [0, 149, 232], width: 8, side: 'inline-start' },
    padding: 64,
    logo: undefined,
    font: {
      title: {
        size: 60,
        weight: 'ExtraBold',
        color: [255, 255, 255],
        lineHeight: 1.15,
      },
      description: {
        size: 28,
        weight: 'Normal',
        color: [200, 205, 214],
        lineHeight: 1.4,
      },
    },
  }),
});
