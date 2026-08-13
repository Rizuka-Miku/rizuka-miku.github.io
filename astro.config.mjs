import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// `site` is required for absolute canonicals and sitemap generation.
// This is a user/org GitHub Pages repo, so it is served from the domain root.
export default defineConfig({
  site: 'https://rizuka-miku.github.io',
  // Icons are inlined at build time from the installed Iconify sets, so brand
  // marks are the real vendor paths and nothing is fetched at runtime.
  integrations: [
    react(),
    tailwind(),
    sitemap(),
    icon({ include: { 'simple-icons': ['*'], ph: ['*'] } }),
  ],
});
