// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';
const repo = 'berezovsky-law';

export default defineConfig({
  site: 'https://tori2k.github.io',
  base: isProd ? `/${repo}` : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
