import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { visit } from 'unist-util-visit';

/**
 * Rehype-Plugin: setzt loading="lazy" und decoding="async" auf alle Bilder
 * im Blog-Content. Kosten: gering, Nutzen: Browser lädt Bilder erst kurz
 * vor sichtbarem Bereich — spart Bandbreite und beschleunigt erste Sicht.
 */
function rehypeLazyImages() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'img') return;
      node.properties = node.properties || {};
      if (!node.properties.loading) node.properties.loading = 'lazy';
      if (!node.properties.decoding) node.properties.decoding = 'async';
    });
  };
}

export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap()],
  site: 'https://busche.cloud',
  markdown: {
    rehypePlugins: [rehypeLazyImages],
  },
});
