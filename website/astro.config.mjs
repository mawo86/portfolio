import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://busche.cloud',
  // base wird entfernt sobald Custom Domain busche.cloud aktiv ist
  // base: '/portfolio',
});
